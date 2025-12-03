import { NextRequest } from "next/server"
import { withAuth } from "@/lib/api/middleware"
import { successResponse, errorResponse, handleApiError, safeParseJson } from "@/lib/api/helpers"
import { initializeFirebaseAdmin } from "@/lib/firebase/admin"
import { ContractDatabase } from "@/lib/api/firestore"

initializeFirebaseAdmin()

/**
 * POST /api/billing/contracts/[contractId]/add-block
 * Add block to contract (for additional features/capacity)
 */
export async function POST(request: NextRequest, { params }: { params: Promise<{ contractId: string }> }) {
  return withAuth(request, async (req) => {
    try {
      const { contractId } = await params
      const body = await safeParseJson(req)

      if (!contractId) {
        return errorResponse("Contract ID is required", 400)
      }

      if (!body.blockType || !body.quantity) {
        return errorResponse("Missing required fields: blockType, quantity", 400)
      }

      const contract = await ContractDatabase.getById(contractId)
      if (!contract) {
        return errorResponse("Contract not found", 404)
      }

      const blocks = ((contract as any).blocks || (contract.metadata?.blocks) || []) as Array<any>
      const blockId = `block_${Math.random().toString(36).substring(2, 9)}`
      const existingBlockIndex = blocks.findIndex((b: any) => b.blockType === body.blockType)

      if (existingBlockIndex >= 0) {
        blocks[existingBlockIndex].quantity += body.quantity
      } else {
        blocks.push({
          blockId,
          blockType: body.blockType,
          quantity: body.quantity,
          price: body.price || 0,
          addedAt: new Date().toISOString()
        })
      }

      const updateData: any = {
        metadata: {
          ...contract.metadata,
          blocks
        },
        updatedAt: new Date().toISOString()
      }

      const updated = await ContractDatabase.update(contractId, updateData)

      return successResponse(updated, "Block added successfully")
    } catch (error) {
      console.error("POST /api/billing/contracts/[contractId]/add-block Error:", error)
      return handleApiError(error)
    }
  })
}
