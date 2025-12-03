"use client"

import { useState, useEffect } from "react"
import { Zap, TrendingUp, AlertCircle, Loader2, BarChart3 } from "lucide-react"
import { getCurrentUserToken } from "@/lib/firebase/client"
import { apiClient } from "@/lib/api/client"

interface WalletAnalytics {
  teamId: string
  teamName: string
  balance: number
  currency: string
  hasBalance: boolean
  status: "active" | "low" | "empty"
}

export default function CreditsWalletsPage() {
  const [wallets, setWallets] = useState<WalletAnalytics[]>([])
  const [teams, setTeams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<"balance" | "name">("balance")

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [sortBy])

  const fetchData = async () => {
    try {
      const token = await getCurrentUserToken()
      if (!token) return

      const [walletsRes, teamsRes] = await Promise.all([
        fetch('/api/wallets', { headers: { 'Authorization': `Bearer ${token}` } }),
        apiClient.getTeams()
      ])
      
      let walletsList: any[] = []
      if (walletsRes.ok) {
        const data = await walletsRes.json()
        walletsList = Array.isArray(data.data) ? data.data : []
      }

      let teamsList: any[] = []
      if (teamsRes.success) {
        const teams = teamsRes.data?.data || teamsRes.data || []
        teamsList = Array.isArray(teams) ? teams : []
      }

      setTeams(teamsList)

      // Map wallets with team names and calculate status
      const enrichedWallets: WalletAnalytics[] = walletsList.map((wallet: any) => {
        const team = teamsList.find((t: any) => (t.teamId || t.id) === (wallet.teamId || wallet.id))
        const balance = wallet.balance || 0
        let status: "active" | "low" | "empty" = "empty"
        if (balance >= 5000) status = "active"
        else if (balance > 0) status = "low"

        return {
          teamId: wallet.teamId || wallet.id || "",
          teamName: team?.name || wallet.teamId || "Unknown",
          balance: balance,
          currency: wallet.currency || "usd",
          hasBalance: balance > 0,
          status,
        }
      })

      // Filter and sort
      let sorted = enrichedWallets.filter((w) => w.hasBalance)
      if (sortBy === "balance") {
        sorted.sort((a, b) => b.balance - a.balance)
      } else {
        sorted.sort((a, b) => a.teamName.localeCompare(b.teamName))
      }

      setWallets(sorted)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const stats = {
    teamsWithBalance: wallets.length,
    totalBalance: wallets.reduce((sum, w) => sum + w.balance, 0),
    averageBalance: wallets.length > 0 ? wallets.reduce((sum, w) => sum + w.balance, 0) / wallets.length : 0,
    activeTeams: wallets.filter((w) => w.status === "active").length,
  }

  if (loading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading wallet analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-4 sm:space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">Credits & Wallets</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Analytics on team wallet balances and credit usage
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-foreground">{wallets.length} teams</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Teams with Balance */}
        <div className="bg-card border border-border rounded-lg p-3 sm:p-4 animate-fade-in-up hover:shadow-lg transition-all duration-300">
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">Teams with Balance</p>
          <p className="text-xl sm:text-2xl font-bold text-accent mt-2">{stats.teamsWithBalance}</p>
          <p className="text-xs text-muted-foreground mt-1">Active teams</p>
        </div>

        {/* Total Balance */}
        <div className="bg-card border border-border rounded-lg p-3 sm:p-4 animate-fade-in-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">Total Balance</p>
          <p className="text-xl sm:text-2xl font-bold text-accent mt-2">${(stats.totalBalance / 100).toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-1">Across all teams</p>
        </div>

        {/* Average Balance */}
        <div className="bg-card border border-border rounded-lg p-3 sm:p-4 animate-fade-in-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">Average Balance</p>
          <p className="text-xl sm:text-2xl font-bold text-accent mt-2">${(stats.averageBalance / 100).toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-1">Per team</p>
        </div>

        {/* Active Teams */}
        <div className="bg-card border border-border rounded-lg p-3 sm:p-4 animate-fade-in-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">Active Teams</p>
          <p className="text-xl sm:text-2xl font-bold text-green-400 mt-2">{stats.activeTeams}</p>
          <p className="text-xs text-muted-foreground mt-1">High balance</p>
        </div>
      </div>

      {/* Teams List */}
      <div className="bg-card border border-border rounded-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <h2 className="text-base sm:text-lg font-semibold text-card-foreground">Teams with Existing Balances</h2>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs sm:text-sm text-muted-foreground">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "balance" | "name")}
              className="px-2 py-1 bg-input border border-border rounded text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="balance">Balance (High to Low)</option>
              <option value="name">Team Name (A-Z)</option>
            </select>
          </div>
        </div>

        {wallets.length === 0 ? (
          <div className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-muted-foreground mb-1">No teams with existing balances</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Teams will appear here once they have credits</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Team Name</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Balance</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Status</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {wallets.map((wallet, idx) => {
                  const percentage = (wallet.balance / stats.totalBalance) * 100 || 0
                  const statusColor =
                    wallet.status === "active"
                      ? "text-green-400 bg-green-500/10"
                      : wallet.status === "low"
                        ? "text-yellow-400 bg-yellow-500/10"
                        : "text-red-400 bg-red-500/10"
                  const statusLabel =
                    wallet.status === "active" ? "Active" : wallet.status === "low" ? "Low" : "Empty"

                  return (
                    <tr
                      key={idx}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-3">
                        <span className="font-medium text-foreground">{wallet.teamName}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3">
                        <span className="font-semibold text-accent">${(wallet.balance / 100).toFixed(2)}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor}`}>
                          {statusLabel}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent"
                              style={{ width: `${Math.min(percentage, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground w-10 text-right">{percentage.toFixed(1)}%</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Info Box */}
      {wallets.length > 0 && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Wallet Analytics</p>
            <p className="text-xs text-muted-foreground">
              This page shows all teams with existing credit balances. Teams are sorted by balance to help you identify your most active or well-funded teams. Use this data for capacity planning and resource allocation.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
