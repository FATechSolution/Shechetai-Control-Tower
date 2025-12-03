import { NextRequest } from "next/server"
import { withAuth } from "@/lib/api/middleware"
import { successResponse, errorResponse, handleApiError, safeParseJson } from "@/lib/api/helpers"
import { initializeFirebaseAdmin } from "@/lib/firebase/admin"
import { ContractDatabase } from "@/lib/api/firestore"

initializeFirebaseAdmin()

/**
 * POST /api/billing/contracts/[contractId]/remove-block
 * Remove block from contract
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

      let blocks = ((contract as any).blocks || (contract.metadata?.blocks) || []) as Array<any>
      const blockIndex = blocks.findIndex((b: any) => b.blockType === body.blockType)

      if (blockIndex === -1) {
        return errorResponse("Block not found", 404)
      }

      if (blocks[blockIndex].quantity <= body.quantity) {
        // Remove entire block if quantity becomes 0 or negative
        blocks = blocks.filter((_, i: number) => i !== blockIndex)
      } else {
        blocks[blockIndex].quantity -= body.quantity
      }

      const updateData: any = {
        metadata: {
          ...contract.metadata,
          blocks
        },
        updatedAt: new Date().toISOString()
      }

      const updated = await ContractDatabase.update(contractId, updateData)

      return successResponse(updated, "Block removed successfully")
    } catch (error) {
      console.error("POST /api/billing/contracts/[contractId]/remove-block Error:", error)
      return handleApiError(error)
    }
  })
}
