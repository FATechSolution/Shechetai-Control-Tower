import { NextRequest } from "next/server"
import { withAuth } from "@/lib/api/middleware"
import { successResponse, errorResponse, handleApiError, safeParseJson } from "@/lib/api/helpers"
import { initializeFirebaseAdmin } from "@/lib/firebase/admin"
import { getFirestore } from "firebase-admin/firestore"

initializeFirebaseAdmin()

/**
 * POST /api/credits/report-run
 * Internal endpoint - Report an agent run and debit credits from team wallet
 * This is called server-side when a per-run billing agent executes
 * 
 * Request body:
 * {
 *   "teamId": "team_001",
 *   "agentId": "agent_001",
 *   "creditCost": 5,
 *   "runId": "run_123456" (optional),
 *   "metadata": {...} (optional)
 * }
 */
export async function POST(request: NextRequest) {
  return withAuth(request, async (req, authContext) => {
    try {
      const body = await safeParseJson(req)
      const db = getFirestore()

      // Validate required fields
      if (!body.teamId || !body.agentId || body.creditCost === undefined) {
        return errorResponse("Missing required fields: teamId, agentId, creditCost", 400)
      }

      if (body.creditCost < 0) {
        return errorResponse("creditCost must be non-negative", 400)
      }

      // Get team wallet (wallets/{teamId})
      const walletRef = db.collection("wallets").doc(body.teamId)
      const walletDoc = await walletRef.get()

      if (!walletDoc.exists) {
        return errorResponse("Wallet not found for team. Team must have purchased credits first.", 404)
      }

      const wallet = walletDoc.data() as any
      const currentBalance = wallet.balance || 0

      // Check wallet status
      if (wallet.status !== "active") {
        return errorResponse(`Wallet is ${wallet.status} and cannot process credits`, 403)
      }

      // Check if sufficient balance
      if (currentBalance < body.creditCost) {
        // Check if auto-refill is enabled and can be triggered
        const autoRefill = wallet.autoRefill
        const canAutoRefill = autoRefill?.enabled && autoRefill?.paymentMethodId

        if (!canAutoRefill) {
          return errorResponse("Insufficient credits in wallet", 402)
        }

        // Attempt auto-refill
        try {
          const refillAmount = autoRefill.amount || 500
          const balanceAfterRefill = currentBalance + refillAmount - body.creditCost

          // Update wallet with refilled + debited balance
          await walletRef.update({
            balance: balanceAfterRefill,
            updatedAt: new Date().toISOString(),
          })

          // Record refill transaction
          await db
            .collection("wallets")
            .doc(body.teamId)
            .collection("transactions")
            .add({
              type: "credit",
              amount: refillAmount,
              balanceBefore: currentBalance,
              balanceAfter: currentBalance + refillAmount,
              description: "Auto-refill triggered",
              metadata: {
                paymentMethodId: autoRefill.paymentMethodId,
                threshold: autoRefill.threshold,
                trigger: "insufficient_balance_for_run",
                agentId: body.agentId,
              },
              createdAt: new Date().toISOString(),
            })

          // Record debit transaction
          const debitRef = await db
            .collection("wallets")
            .doc(body.teamId)
            .collection("transactions")
            .add({
              type: "debit",
              amount: body.creditCost,
              balanceBefore: currentBalance + refillAmount,
              balanceAfter: balanceAfterRefill,
              description: `Agent run - ${body.agentId}`,
              agentId: body.agentId,
              runId: body.runId || null,
              metadata: body.metadata || {},
              createdAt: new Date().toISOString(),
            })

          return successResponse({
            wallet: {
              walletId: body.teamId,
              ...wallet,
              balance: balanceAfterRefill,
            },
            transaction: {
              transactionId: debitRef.id,
              type: "debit",
              amount: body.creditCost,
            },
            autoRefillTriggered: true,
            autoRefillSuccess: true,
            newBalance: balanceAfterRefill,
          }, "Credits debited successfully (auto-refill triggered)")
        } catch (refillError: any) {
          console.error("Auto-refill failed:", refillError)
          return errorResponse("Insufficient credits and auto-refill failed", 402)
        }
      }

      // Sufficient balance - just debit
      const balanceBefore = currentBalance
      const newBalance = currentBalance - body.creditCost

      await walletRef.update({
        balance: newBalance,
        updatedAt: new Date().toISOString(),
      })

      // Create debit transaction record
      const transactionRef = await db
        .collection("wallets")
        .doc(body.teamId)
        .collection("transactions")
        .add({
          type: "debit",
          amount: body.creditCost,
          balanceBefore,
          balanceAfter: newBalance,
          description: `Agent run - ${body.agentId}`,
          agentId: body.agentId,
          runId: body.runId || null,
          metadata: body.metadata || {},
          createdAt: new Date().toISOString(),
        })

      // Check if balance dropped below threshold (for monitoring)
      const autoRefill = wallet.autoRefill
      const belowThreshold = autoRefill?.enabled && newBalance < (autoRefill?.threshold || 100)

      return successResponse({
        wallet: {
          walletId: body.teamId,
          ...wallet,
          balance: newBalance,
        },
        transaction: {
          transactionId: transactionRef.id,
          type: "debit",
          amount: body.creditCost,
        },
        newBalance,
        belowThreshold,
        autoRefillTriggered: false,
      }, "Credits debited successfully")
    } catch (error) {
      return handleApiError(error)
    }
  }, "super_admin") // Only internal service accounts or super_admin can call this
}

