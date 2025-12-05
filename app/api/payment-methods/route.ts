import { NextRequest } from "next/server"
import { withAuth } from "@/lib/api/middleware"
import { successResponse, errorResponse, handleApiError, safeParseJson } from "@/lib/api/helpers"
import { Database } from "@/lib/api/database-bridge"
import { initializeFirebaseAdmin } from "@/lib/firebase/admin"
import { listPaymentMethods, createCustomer } from "@/lib/stripe/stripe-server"
/**
 * GET /api/payment-methods
 * Get payment methods for a team from Stripe
 */
export async function GET(request: NextRequest) {
  return withAuth(request, async (req) => {
    try {
      const { searchParams } = new URL(req.url)
      const teamId = searchParams.get("teamId")

      if (!teamId) {
        return errorResponse("Missing required parameter: teamId", 400)
      }

      // Get team's Stripe customer ID
      const team = await Database.getTeamById(teamId) as any
      if (!team) {
        return errorResponse("Team not found", 404)
      }

      // If no Stripe customer ID, return empty array
      if (!team.stripeCustomerId) {
        return successResponse([])
      }

      // Fetch payment methods from Stripe
      try {
        const stripePaymentMethods = await listPaymentMethods(team.stripeCustomerId as string)
        
        // Transform Stripe payment methods to our format
        const paymentMethods = stripePaymentMethods.data.map((pm) => ({
          paymentMethodId: pm.id,
          teamId,
          type: pm.type,
          card: pm.card ? {
            brand: pm.card.brand,
            last4: pm.card.last4,
            expiryMonth: pm.card.exp_month,
            expiryYear: pm.card.exp_year,
          } : null,
          status: 'active',
          createdAt: new Date(pm.created * 1000).toISOString(),
        }))
        
        return successResponse(paymentMethods)
      } catch (stripeError: any) {
        console.warn('Stripe error fetching payment methods:', stripeError.message)
        // If Stripe fails, return empty array instead of error
        return successResponse([])
      }
    } catch (error) {
      return handleApiError(error)
    }
  })
}

/**
 * POST /api/payment-methods
 * Add a new payment method for a team via Stripe
 */
export async function POST(request: NextRequest) {
  return withAuth(request, async (req, authContext) => {
    try {
      const body = await safeParseJson(req)
      
      // Validate required fields
      if (!body.teamId) {
        return errorResponse("Missing required fields: teamId", 400)
      }

      // Check if team exists
      const team = await Database.getTeamById(body.teamId) as any
      if (!team) {
        return errorResponse("Team not found", 404)
      }

      // Create Stripe customer if doesn't exist
      let stripeCustomerId = team.stripeCustomerId as string | undefined
      if (!stripeCustomerId) {
        try {
          const customer = await createCustomer(
            team.ownerEmail || authContext.email,
            team.name,
            { teamId: body.teamId }
          )
          stripeCustomerId = customer.id
          
          // Update team with Stripe customer ID
          await Database.updateTeam(body.teamId, { stripeCustomerId } as any)
        } catch (stripeError: any) {
          console.warn('Stripe customer creation failed:', stripeError.message)
          // Continue without Stripe customer for now
          return errorResponse("Stripe is not configured properly. Please contact support.", 503)
        }
      }

      // If paymentMethodId provided, attach existing payment method
      if (body.paymentMethodId) {
        try {
          const { attachPaymentMethod, setDefaultPaymentMethod } = await import('@/lib/stripe/stripe-server')
          const paymentMethod = await attachPaymentMethod(body.paymentMethodId, stripeCustomerId)

          // Set as default if specified
          if (body.isDefault) {
            await setDefaultPaymentMethod(stripeCustomerId, body.paymentMethodId)
          }

          // Create audit log
          await Database.createAuditLog({
            userId: authContext.userId,
            userEmail: authContext.email,
            action: "payment_method_added",
            resource: "payment_method",
            resourceId: paymentMethod.id,
            details: { teamId: body.teamId, type: paymentMethod.type },
          })

          return successResponse({
            paymentMethodId: paymentMethod.id,
            teamId: body.teamId,
            type: paymentMethod.type,
            card: paymentMethod.card ? {
              brand: paymentMethod.card.brand,
              last4: paymentMethod.card.last4,
              expiryMonth: paymentMethod.card.exp_month,
              expiryYear: paymentMethod.card.exp_year,
            } : null,
            status: 'active',
            createdAt: new Date().toISOString(),
          }, "Payment method added successfully")
        } catch (stripeError: any) {
          console.warn('Stripe payment method attachment failed:', stripeError.message)
          return errorResponse("Stripe payment method attachment failed. Please try again.", 503)
        }
      } else {
        // Create new payment method from card details (for future implementation)
        return errorResponse("Card details payment method creation not yet implemented. Use Stripe Elements to create payment method first.", 501)
      }
    } catch (error) {
      return handleApiError(error)
    }
  })
}

