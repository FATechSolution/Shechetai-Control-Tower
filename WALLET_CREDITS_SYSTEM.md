# Team Credit Wallet System

## Overview

The credit wallet system is designed exclusively for **per-run billing agents**. Team owners deposit funds into a wallet, which are converted to credits. When a per-run agent executes, credits are automatically deducted from the wallet based on the agent's credit cost per run.

## Architecture

### Collections

```
wallets/{teamId}
├── teamId: string
├── balance: number (in credits)
├── currency: "credits"
├── status: "active" | "suspended" | "frozen"
├── autoRefill: AutoRefillConfig (optional)
├── createdAt: timestamp
└── updatedAt: timestamp
```

### Auto-Refill Configuration

```typescript
interface AutoRefillConfig {
  enabled: boolean
  threshold: number (minimum balance before refill triggers)
  amount: number (credits to add when threshold reached)
  paymentMethodId: string (Stripe payment method ID)
}
```

### Credit Transactions

All credits transactions are logged separately for audit purposes:

```
wallets/{teamId}/transactions/{transactionId}
├── transactionId: string (auto-generated)
├── type: "purchase" | "debit" | "refund" | "grant"
├── amount: number (credits)
├── balanceBefore: number
├── balanceAfter: number
├── description: string
├── agentId?: string (for debit transactions)
├── metadata: Record<string, any>
├── createdAt: timestamp
└── updatedAt: timestamp
```

## Endpoints

### Purchase Credit Pack

**POST** `/api/credits/purchase-pack`

Team owner purchases credits. This charges the payment method and adds credits to the wallet.

```json
{
  "teamId": "team_001",
  "paymentMethodId": "pm_123456",
  "amount": 50, // USD amount
  "packName": "Professional Pack", // optional
  "credits": 500 // optional, defaults to amount * 10
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "wallet": {
      "walletId": "team_001",
      "teamId": "team_001",
      "balance": 500,
      "currency": "credits",
      "status": "active"
    },
    "transaction": {
      "transactionId": "txn_123456",
      "type": "purchase",
      "amount": 500,
      "description": "Credit pack purchase - Professional Pack"
    },
    "creditsAdded": 500
  }
}
```

### Configure Auto-Refill

**POST** `/api/credits/configure-auto-refill`

Setup automatic credit replenishment when balance drops below threshold.

```json
{
  "teamId": "team_001",
  "enabled": true,
  "threshold": 100, // Refill when balance < 100 credits
  "amount": 500, // Add 500 credits
  "paymentMethodId": "pm_123456"
}
```

**GET** `/api/credits/configure-auto-refill?teamId=team_001`

Retrieve current auto-refill settings.

### Debit Credits (Report Run)

**POST** `/api/credits/report-run` (Internal Only - Server Side)

Called internally when a per-run agent completes execution. Debits credits from the team's wallet.

```json
{
  "teamId": "team_001",
  "agentId": "agent_001",
  "creditCost": 5, // credits to debit per run
  "runId": "run_123456",
  "metadata": {
    "executionTime": 1234, // milliseconds
    "status": "completed"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "wallet": {
      "walletId": "team_001",
      "balance": 495, // 500 - 5
      "currency": "credits"
    },
    "transaction": {
      "transactionId": "txn_654321",
      "type": "debit",
      "amount": 5,
      "description": "Agent run - agent_001"
    },
    "newBalance": 495,
    "autoRefillTriggered": false
  }
}
```

### Get Wallet

**GET** `/api/wallets?teamId=team_001`

Get current wallet balance and status.

```json
{
  "success": true,
  "data": {
    "walletId": "team_001",
    "teamId": "team_001",
    "balance": 495,
    "currency": "credits",
    "status": "active",
    "autoRefill": {
      "enabled": true,
      "threshold": 100,
      "amount": 500,
      "paymentMethodId": "pm_123456"
    },
    "createdAt": "2025-12-03T10:00:00Z",
    "updatedAt": "2025-12-03T10:05:00Z"
  }
}
```

### List Transactions

**GET** `/api/credits/transactions?teamId=team_001&page=1&limit=10`

Get transaction history for a wallet.

```json
{
  "success": true,
  "data": {
    "total": 2,
    "page": 1,
    "limit": 10,
    "items": [
      {
        "transactionId": "txn_654321",
        "type": "debit",
        "amount": 5,
        "balanceBefore": 500,
        "balanceAfter": 495,
        "description": "Agent run - agent_001",
        "agentId": "agent_001",
        "createdAt": "2025-12-03T10:05:00Z"
      },
      {
        "transactionId": "txn_123456",
        "type": "purchase",
        "amount": 500,
        "balanceBefore": 0,
        "balanceAfter": 500,
        "description": "Credit pack purchase - Professional Pack",
        "createdAt": "2025-12-03T10:00:00Z"
      }
    ]
  }
}
```

## Billing Model Integration

### Per-Run Agent Billing Flow

1. **Agent Setup**: Admin assigns billing mode `per-run` to agent
2. **Credit Cost Configuration**: Agent configured with credit cost (e.g., 5 credits per run)
3. **Wallet Funding**: Team owner purchases credit packs
4. **Auto-Refill** (Optional): Setup automatic refill when balance drops
5. **Run Execution**: 
   - Agent runs and completes
   - System calls `POST /api/credits/report-run`
   - Credits are debited from wallet
   - If balance drops below threshold → auto-refill triggers
   - Transaction recorded for audit

### Other Billing Modes

- **Monthly Subscription**: Uses `subscriptions` collection, NOT wallet
- **One-Time Payment**: Uses `billing/contracts`, NOT wallet

## Wallet Status States

- **active**: Normal operation, credits can be used
- **suspended**: Wallet frozen, no credits can be deducted (requires admin intervention)
- **frozen**: Similar to suspended, used for billing disputes or account holds

## Error Handling

### Insufficient Credits

If agent tries to run but wallet has insufficient credits:

```json
{
  "success": false,
  "error": "Insufficient credits in wallet",
  "data": {
    "required": 5,
    "available": 2,
    "teamId": "team_001"
  }
}
```

### Auto-Refill Failure

If auto-refill is enabled but payment fails:

```json
{
  "success": true,
  "data": {
    "wallet": {...},
    "autoRefillTriggered": true,
    "autoRefillSuccess": false,
    "autoRefillError": "Payment method declined"
  }
}
```

## Best Practices

1. **Set Appropriate Thresholds**: Avoid too-frequent refills or running out of credits
2. **Monitor Usage**: Review transaction history regularly
3. **Test Auto-Refill**: Test with small amounts before enabling on production
4. **Payment Method**: Always have a valid payment method on file for auto-refill
5. **Credits Expiration**: Consider implementing credit expiration policies (not currently implemented)

## Implementation Checklist

- [x] Wallet schema defined (wallets/{teamId})
- [x] Purchase credit pack endpoint
- [x] Auto-refill configuration endpoint
- [ ] Report-run endpoint (credit debit)
- [x] Wallet balance query
- [x] Transaction history
- [ ] Auto-refill trigger logic
- [ ] Insufficient credits handling
- [ ] Payment retry logic for auto-refill

