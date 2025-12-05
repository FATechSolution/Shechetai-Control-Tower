"use client"

import { useState, useEffect } from "react"
import { Search, Filter, ChevronRight, Plus, Loader2, Users, Zap } from "lucide-react"
import { apiClient } from "@/lib/api/client"
import { Dialog } from "@/components/ui/dialog-simple"

export default function AgentsTeamsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [agents, setAgents] = useState<any[]>([])
  const [teams, setTeams] = useState<any[]>([])
  const [teamMembers, setTeamMembers] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(true)

  // Create Agent Dialog State
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Create Team Dialog State
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false)
  const [isSubmittingTeam, setIsSubmittingTeam] = useState(false)

  // Assign Seats Dialog
  const [isAssignSeatsDialogOpen, setIsAssignSeatsDialogOpen] = useState(false)
  const [selectedAgentId, setSelectedAgentId] = useState<string>("")
  const [seatsToAssign, setSeatsToAssign] = useState(1)
  const [isAssigningSeats, setIsAssigningSeats] = useState(false)

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Agent Form Data
  const [formData, setFormData] = useState({
    name: "",
    teamId: "",
    status: "active",
    description: "",
  })

  // Team Form Data
  const [teamFormData, setTeamFormData] = useState({
    name: "",
    ownerId: "admin",
    seatCap: 5,
    description: "",
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError("")
      
      const agentsResponse = await apiClient.getAgents()
      const teamsResponse = await apiClient.getTeams()

      // Handle response format from local API
      if (agentsResponse?.success && agentsResponse?.data) {
        const agentsData = agentsResponse.data.data || agentsResponse.data || []
        const agentsArray = Array.isArray(agentsData) ? agentsData : []
        setAgents(agentsArray)
      } else {
        console.warn("Failed to fetch agents:", agentsResponse?.error)
      }

      if (teamsResponse?.success && teamsResponse?.data) {
        const teamsData = teamsResponse.data.data || teamsResponse.data || []
        const teamsArray = Array.isArray(teamsData) ? teamsData : []
        setTeams(teamsArray)
      } else {
        console.warn("Failed to fetch teams:", teamsResponse?.error)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      setError("Failed to load data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCreateAgent = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsSubmitting(true)

    try {
      const response = await apiClient.createAgent({
        name: formData.name,
        teamId: formData.teamId,
        status: formData.status as any,
        metadata: formData.description ? { description: formData.description } : undefined,
      })

      if (response.success) {
        setSuccess("Agent created successfully!")
        setFormData({ name: "", teamId: "", status: "active", description: "" })
        setIsCreateDialogOpen(false)
        await fetchData()
      }
    } catch (error: any) {
      setError(error.message || "Failed to create agent")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsSubmittingTeam(true)

    try {
      const response = await apiClient.createTeam({
        name: teamFormData.name,
        ownerId: teamFormData.ownerId,
        metadata: {
          seatCap: teamFormData.seatCap,
          description: teamFormData.description,
        },
      })

      if (response.success) {
        setSuccess("Team created successfully!")
        setTeamFormData({ name: "", ownerId: "admin", seatCap: 5, description: "" })
        setIsCreateTeamDialogOpen(false)
        await fetchData()
      }
    } catch (error: any) {
      setError(error.message || "Failed to create team")
    } finally {
      setIsSubmittingTeam(false)
    }
  }

  const handleAssignSeats = async () => {
    if (!selectedAgentId || seatsToAssign < 1) {
      setError("Invalid seat assignment")
      return
    }

    setIsAssigningSeats(true)
    try {
      // Store seat assignment in agent metadata
      const agent = agents.find(a => (a.agentId || a.id) === selectedAgentId)
      if (!agent) {
        setError("Agent not found")
        return
      }

      const response = await apiClient.updateAgent(selectedAgentId, {
        metadata: {
          ...agent.metadata,
          seatsAssigned: seatsToAssign,
        },
      })

      if (response.success) {
        setSuccess(`Assigned ${seatsToAssign} seat(s) to ${agent.name}`)
        setIsAssignSeatsDialogOpen(false)
        setSelectedAgentId("")
        setSeatsToAssign(1)
        await fetchData()
      }
    } catch (error: any) {
      setError(error.message || "Failed to assign seats")
    } finally {
      setIsAssigningSeats(false)
    }
  }

  const getAgentSeats = (agent: any) => {
    const assigned = agent.metadata?.seatsAssigned || 0
    const used = agent.metadata?.seatsUsed || 0
    return { used, assigned }
  }

  const filteredAgents = agents.filter(agent => {
    const searchLower = searchQuery.toLowerCase()
    const agentId = agent.agentId || agent.id || ""
    const name = agent.name || ""
    const teamId = agent.teamId || ""
    const status = agent.status || "active"

    // Search filter
    const matchesSearch = (
      agentId.toLowerCase().includes(searchLower) ||
      name.toLowerCase().includes(searchLower) ||
      teamId.toLowerCase().includes(searchLower)
    )

    // Status filter
    const matchesStatus = filterStatus === "all" || status === filterStatus

    return matchesSearch && matchesStatus
  })

  const mockAgents = filteredAgents.map(agent => {
    const seats = getAgentSeats(agent)
    return {
      id: agent.agentId || agent.id,
      name: agent.name,
      teamId: agent.teamId,
      status: agent.status,
      seats
    }
  })

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">Agents & Teams</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage and inspect all agents and teams across the platform
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsCreateTeamDialogOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Create Team</span>
          </button>
          <button
            onClick={() => setIsCreateDialogOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create Agent</span>
          </button>
        </div>
      </div>

      {/* Success/Error Messages */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-green-400 text-sm">
          {success}
        </div>
      )}

      <div
        className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by agentId, name, or teamId..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-input border border-border rounded-lg text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center justify-center gap-2 px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap ${
                filterStatus !== "all"
                  ? "bg-primary text-primary-foreground border border-primary"
                  : "bg-input border border-border text-foreground hover:bg-muted"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">
                {filterStatus === "all" ? "Filter" : `Status: ${filterStatus}`}
              </span>
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[180px]">
                {["all", "active", "inactive"].map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setFilterStatus(status as any)
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                      filterStatus === status
                        ? "bg-primary/20 text-primary font-semibold border-l-2 border-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Agent Dialog */}
      <Dialog
        isOpen={isCreateDialogOpen}
        onClose={() => {
          setIsCreateDialogOpen(false)
          setError("")
          setFormData({ name: "", teamId: "", status: "active", description: "" })
        }}
        title="Create New Agent"
      >
        <form onSubmit={handleCreateAgent} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Agent Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Customer Support Bot"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Team *
            </label>
            {teams.length > 0 ? (
              <select
                value={formData.teamId}
                onChange={(e) => setFormData({ ...formData, teamId: e.target.value })}
                required
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a team...</option>
                {teams.map((team) => (
                  <option key={team.teamId || team.id} value={team.teamId || team.id}>
                    {team.name} ({team.teamId || team.id})
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={formData.teamId}
                onChange={(e) => setFormData({ ...formData, teamId: e.target.value })}
                placeholder="Enter Team ID (or create a team first)"
                required
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
            {teams.length === 0 && (
              <p className="text-xs text-muted-foreground mt-1">
                No teams found. Please enter a Team ID manually or create a team first.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Description (Optional)
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of the agent..."
              rows={3}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setIsCreateDialogOpen(false)
                setError("")
              }}
              className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmitting ? "Creating..." : "Create Agent"}
            </button>
          </div>
        </form>
      </Dialog>

      {/* Create Team Dialog */}
      <Dialog
        isOpen={isCreateTeamDialogOpen}
        onClose={() => {
          setIsCreateTeamDialogOpen(false)
          setError("")
          setTeamFormData({ name: "", ownerId: "admin", seatCap: 5, description: "" })
        }}
        title="Create New Team"
      >
        <form onSubmit={handleCreateTeam} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Team Name *
            </label>
            <input
              type="text"
              value={teamFormData.name}
              onChange={(e) => setTeamFormData({ ...teamFormData, name: e.target.value })}
              placeholder="e.g., Engineering Team"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Owner ID *
            </label>
            <input
              type="text"
              value={teamFormData.ownerId}
              onChange={(e) => setTeamFormData({ ...teamFormData, ownerId: e.target.value })}
              placeholder="e.g., admin"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Seat Cap
            </label>
            <input
              type="number"
              value={teamFormData.seatCap}
              onChange={(e) => setTeamFormData({ ...teamFormData, seatCap: Number(e.target.value) })}
              min={1}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Description (Optional)
            </label>
            <textarea
              value={teamFormData.description}
              onChange={(e) => setTeamFormData({ ...teamFormData, description: e.target.value })}
              placeholder="Brief description of the team..."
              rows={3}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setIsCreateTeamDialogOpen(false)
                setError("")
              }}
              className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              disabled={isSubmittingTeam}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmittingTeam}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmittingTeam && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmittingTeam ? "Creating..." : "Create Team"}
            </button>
          </div>
        </form>
      </Dialog>

      {/* Assign Seats Dialog */}
      <Dialog
        isOpen={isAssignSeatsDialogOpen}
        onClose={() => {
          setIsAssignSeatsDialogOpen(false)
          setSelectedAgentId("")
          setSeatsToAssign(1)
          setError("")
        }}
        title="Assign Seats to Agent"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAssignSeats()
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Agent *
            </label>
            <select
              value={selectedAgentId}
              onChange={(e) => setSelectedAgentId(e.target.value)}
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select an agent...</option>
              {agents.map((agent) => (
                <option key={agent.agentId || agent.id} value={agent.agentId || agent.id}>
                  {agent.name} ({agent.agentId || agent.id})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Number of Seats *
            </label>
            <input
              type="number"
              value={seatsToAssign}
              onChange={(e) => setSeatsToAssign(Number(e.target.value))}
              min={1}
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted-foreground mt-1">Number of execution seats to allocate</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setIsAssignSeatsDialogOpen(false)
                setError("")
              }}
              className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              disabled={isAssigningSeats}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isAssigningSeats}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAssigningSeats && <Loader2 className="w-4 h-4 animate-spin" />}
              {isAssigningSeats ? "Assigning..." : "Assign Seats"}
            </button>
          </div>
        </form>
      </Dialog>

      <div className="space-y-2 sm:space-y-3">
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading agents...</p>
          </div>
        ) : mockAgents.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg">
            <p className="text-muted-foreground mb-2">No agents found</p>
            <p className="text-sm text-muted-foreground">Create your first agent to get started</p>
          </div>
        ) : (
          mockAgents.map((agent, index) => (
            <div
              key={`${agent.id}-${agent.teamId}-${index}`}
              style={{
                animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`,
              }}
              className="bg-card border border-border rounded-lg p-3 sm:p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col gap-3 sm:gap-4" key={agent.id}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-sm sm:text-base text-card-foreground group-hover:text-primary transition-colors">
                      {agent.name}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap ${agent.status === "active" ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {agent.status}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2 text-xs sm:text-sm flex-wrap">
                    <span className="text-muted-foreground">
                      <span className="font-mono text-foreground">{agent.id}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Team: <span className="font-mono text-foreground">{agent.teamId}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Seats:{" "}
                      <span className={`font-semibold ${agent.seats.assigned > 0 ? "text-green-400" : "text-yellow-400"}`}>
                        {agent.seats.used}/{agent.seats.assigned}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedAgentId(agent.id)
                      setIsAssignSeatsDialogOpen(true)
                    }}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-xs font-medium"
                  >
                    <Zap className="w-3 h-3 inline mr-1" />
                    Assign Seats
                  </button>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
