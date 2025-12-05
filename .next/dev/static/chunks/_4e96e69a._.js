(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Application Configuration
 * Centralized configuration for API endpoints and environment settings
 */ // API Base URL - defaults to production backend
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS,
    "FIREBASE_CONFIG",
    ()=>FIREBASE_CONFIG,
    "getApiUrl",
    ()=>getApiUrl,
    "isDevelopment",
    ()=>isDevelopment,
    "isProduction",
    ()=>isProduction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://hooks.shechet.com';
const API_ENDPOINTS = {
    // Health & Overview
    HEALTH: '/_config/health',
    // Agents
    LIST_AGENTS: '/_config/list-agents',
    AGENT_DETAIL: '/_config/agents',
    UPSERT_AGENT: '/_config/agents.upsertMeta',
    // Teams
    TEAMS_AGENTS: '/_config/teams.agents',
    CREATE_TEAM: '/_config/teams.create',
    UPDATE_TEAM: '/_config/teams.update',
    // Billing
    BILLING_CATALOG: '/_config/billing.catalog',
    BILLING_AGENT_STATUS: '/_config/billing.agent.status',
    BILLING_CONTRACTS: '/_config/billing/contracts',
    // Credits & Wallets
    WALLET_STATUS: '/_config/credits.wallet.status',
    CONFIGURE_AUTO_REFILL: '/_config/credits.wallet.configureAutoRefill',
    // Referrals
    REFERRALS_STATUS: '/_config/referrals.status',
    CREATE_REFERRAL_CODE: '/_config/referrals.createCode',
    // White Label
    WHITE_LABEL_DOMAINS: '/_config/wl.domains.status',
    REQUEST_DOMAIN: '/_config/wl.domains.request',
    CONFIGURE_RETAIL: '/_config/wl.agent.configureRetail'
};
const FIREBASE_CONFIG = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDsenipQE4hyz-j-Jti3MkPM-3_VERhGR8"),
    authDomain: ("TURBOPACK compile-time value", "shechetai-control-tower-projec.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "shechetai-control-tower-projec"),
    storageBucket: ("TURBOPACK compile-time value", "shechetai-control-tower-projec.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "284117800774"),
    appId: ("TURBOPACK compile-time value", "1:284117800774:web:10526902848d1202f8f747")
};
function getApiUrl(endpoint) {
    return `${API_BASE_URL}${endpoint}`;
}
const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
const isProduction = ("TURBOPACK compile-time value", "development") === 'production';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Client for Control Tower Frontend
 * Type-safe API client for making requests to backend endpoints
 */ __turbopack_context__.s([
    "ApiClient",
    ()=>ApiClient,
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$network$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/network.ts [app-client] (ecmascript)");
;
;
;
class ApiClient {
    apiKey = null;
    setApiKey(key) {
        this.apiKey = key;
    }
    async request(endpoint, options = {}, useRetry = true) {
        const headers = {
            "Content-Type": "application/json"
        };
        // Add Firebase authentication
        try {
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserToken"])();
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            } else if (this.apiKey) {
                // Fallback to API key if no Firebase token
                headers["x-api-key"] = this.apiKey;
            }
        // In dev mode, no token is needed due to middleware bypass
        } catch (error) {
            console.warn("Error getting Firebase token (continuing without auth):", error);
        // Continue without token - dev mode will bypass auth anyway
        }
        // Merge with provided headers
        if (options.headers) {
            Object.assign(headers, options.headers);
        }
        try {
            // Use retry logic for resilience
            const fetchFn = useRetry ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$network$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithRetry"] : fetch;
            const response = await fetchFn(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${endpoint}`, {
                ...options,
                headers
            });
            const data = await response.json();
            if (!response.ok) {
                console.error(`API Error [${response.status}] at ${endpoint}:`, data);
                return {
                    success: false,
                    error: data.error || "API request failed",
                    data: null
                };
            }
            return data;
        } catch (error) {
            console.error(`Request failed for ${endpoint}:`, error);
            return {
                success: false,
                error: error instanceof Error ? error.message : "Request failed",
                data: null
            };
        }
    }
    // Overview
    async getOverview() {
        return this.request("/api/overview");
    }
    // Agents
    async getAgents(params) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.set("page", params.page.toString());
        if (params?.limit) queryParams.set("limit", params.limit.toString());
        if (params?.teamId) queryParams.set("teamId", params.teamId);
        if (params?.status) queryParams.set("status", params.status);
        if (params?.search) queryParams.set("search", params.search);
        const queryString = queryParams.toString();
        return this.request(`/api/agents${queryString ? `?${queryString}` : ''}`);
    }
    async getAgent(agentId) {
        return this.request(`/api/agents/${agentId}`);
    }
    async createAgent(data) {
        return this.request("/api/agents", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async updateAgent(agentId, data) {
        return this.request(`/api/agents/${agentId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    }
    async deleteAgent(agentId) {
        return this.request(`/api/agents/${agentId}`, {
            method: "DELETE"
        });
    }
    // Teams
    async getTeams(params) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.set("page", params.page.toString());
        if (params?.limit) queryParams.set("limit", params.limit.toString());
        if (params?.ownerId) queryParams.set("ownerId", params.ownerId);
        if (params?.status) queryParams.set("status", params.status);
        if (params?.search) queryParams.set("search", params.search);
        const queryString = queryParams.toString();
        return this.request(`/api/teams${queryString ? `?${queryString}` : ''}`);
    }
    async getTeam(teamId) {
        return this.request(`/api/teams/${teamId}`);
    }
    async createTeam(data) {
        return this.request("/api/teams", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async updateTeam(teamId, data) {
        return this.request(`/api/teams/${teamId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    }
    async deleteTeam(teamId) {
        return this.request(`/api/teams/${teamId}`, {
            method: "DELETE"
        });
    }
    // Team Members
    async getTeamMembers(teamId) {
        return this.request(`/api/teams/${teamId}/members`);
    }
    async addTeamMember(teamId, data) {
        return this.request(`/api/teams/${teamId}/members`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async removeTeamMember(teamId, userId) {
        return this.request(`/api/teams/${teamId}/members/${userId}`, {
            method: "DELETE"
        });
    }
    // Team Invites
    async getTeamInvites(teamId) {
        return this.request(`/api/teams/${teamId}/invites`);
    }
    async createTeamInvite(teamId, data) {
        return this.request(`/api/teams/${teamId}/invites`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // Billing & Contracts
    async getContracts(params) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.set("page", params.page.toString());
        if (params?.limit) queryParams.set("limit", params.limit.toString());
        if (params?.teamId) queryParams.set("teamId", params.teamId);
        const queryString = queryParams.toString();
        return this.request(`/api/billing/contracts${queryString ? `?${queryString}` : ''}`);
    }
    async getContract(contractId) {
        return this.request(`/api/billing/contracts/${contractId}`);
    }
    async createContract(data) {
        return this.request("/api/billing/contracts", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async updateContract(contractId, data) {
        return this.request(`/api/billing/contracts/${contractId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    }
    async cancelContract(contractId) {
        return this.request(`/api/billing/contracts/${contractId}`, {
            method: "DELETE"
        });
    }
    // Invoices
    async getInvoices(teamId) {
        const queryParams = teamId ? `?teamId=${teamId}` : "";
        return this.request(`/api/billing/invoices${queryParams}`);
    }
    async createInvoice(data) {
        return this.request("/api/billing/invoices", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // Wallets
    async getWallet(teamId) {
        return this.request(`/api/wallets?teamId=${teamId}`);
    }
    async createWallet(data) {
        return this.request("/api/wallets", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // Credits
    async grantCredits(data) {
        return this.request("/api/credits/grant", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async getTransactions(params) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.set("page", params.page.toString());
        if (params?.limit) queryParams.set("limit", params.limit.toString());
        if (params?.teamId) queryParams.set("teamId", params.teamId);
        if (params?.walletId) queryParams.set("walletId", params.walletId);
        const queryString = queryParams.toString();
        return this.request(`/api/credits/transactions${queryString ? `?${queryString}` : ''}`);
    }
    // White-Label
    async getWhiteLabelConfigs(teamId) {
        const queryParams = teamId ? `?teamId=${teamId}` : "";
        return this.request(`/api/white-label${queryParams}`);
    }
    async getWhiteLabelConfig(configId) {
        return this.request(`/api/white-label/${configId}`);
    }
    async createWhiteLabelConfig(data) {
        return this.request("/api/white-label", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async updateWhiteLabelConfig(configId, data) {
        return this.request(`/api/white-label/${configId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    }
    async deleteWhiteLabelConfig(configId) {
        return this.request(`/api/white-label/${configId}`, {
            method: "DELETE"
        });
    }
    // Referrals
    async getReferrals(params) {
        const queryParams = new URLSearchParams();
        if (params?.referrerId) queryParams.set("referrerId", params.referrerId);
        if (params?.status) queryParams.set("status", params.status);
        return this.request(`/api/referrals?${queryParams}`);
    }
    async createReferral(data) {
        return this.request("/api/referrals", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // Users
    async getUsers(params) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.set("page", params.page.toString());
        if (params?.limit) queryParams.set("limit", params.limit.toString());
        if (params?.role) queryParams.set("role", params.role);
        if (params?.status) queryParams.set("status", params.status);
        if (params?.search) queryParams.set("search", params.search);
        const queryString = queryParams.toString();
        return this.request(`/api/users${queryString ? `?${queryString}` : ''}`);
    }
    async getUser(userId) {
        return this.request(`/api/users/${userId}`);
    }
    async createUser(data) {
        return this.request("/api/users", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async updateUser(userId, data) {
        return this.request(`/api/users/${userId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    }
    async deleteUser(userId) {
        return this.request(`/api/users/${userId}`, {
            method: "DELETE"
        });
    }
    async suspendUser(userId, reason) {
        return this.request(`/api/users/${userId}/suspend`, {
            method: "POST",
            body: JSON.stringify({
                reason
            })
        });
    }
    async activateUser(userId) {
        return this.request(`/api/users/${userId}/activate`, {
            method: "POST"
        });
    }
    // Agent Analytics
    async getAgentAnalytics(agentId) {
        return this.request(`/api/agents/${agentId}/analytics`);
    }
    // Team Analytics
    async getTeamAnalytics(teamId) {
        return this.request(`/api/teams/${teamId}/analytics`);
    }
    // Subscriptions
    async getSubscriptions(teamId) {
        const queryParams = teamId ? `?teamId=${teamId}` : "";
        return this.request(`/api/subscriptions${queryParams}`);
    }
    async createSubscription(data) {
        return this.request("/api/subscriptions", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async cancelSubscription(subscriptionId, cancelAtPeriodEnd = true, reason) {
        return this.request(`/api/subscriptions/${subscriptionId}/cancel`, {
            method: "POST",
            body: JSON.stringify({
                cancelAtPeriodEnd,
                reason
            })
        });
    }
    // Plans
    async getSubscriptionPlans() {
        return this.request("/api/subscriptions/plans");
    }
    async createSubscriptionPlan(data) {
        return this.request("/api/subscriptions/plans", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async deleteSubscriptionPlan(planId) {
        return this.request(`/api/subscriptions/plans/${planId}`, {
            method: "DELETE"
        });
    }
    // Payment Methods
    async getPaymentMethods(teamId) {
        const queryParams = teamId ? `?teamId=${teamId}` : "";
        return this.request(`/api/payment-methods${queryParams}`);
    }
    async addPaymentMethod(data) {
        return this.request("/api/payment-methods", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async deletePaymentMethod(paymentMethodId) {
        return this.request(`/api/payment-methods/${paymentMethodId}`, {
            method: "DELETE"
        });
    }
    async setDefaultPaymentMethod(paymentMethodId) {
        return this.request(`/api/payment-methods/${paymentMethodId}/default`, {
            method: "POST"
        });
    }
    // Audit Logs
    async getAuditLogs(params) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.set("page", params.page.toString());
        if (params?.limit) queryParams.set("limit", params.limit.toString());
        if (params?.userId) queryParams.set("userId", params.userId);
        if (params?.resource) queryParams.set("resource", params.resource);
        if (params?.startDate) queryParams.set("startDate", params.startDate);
        if (params?.endDate) queryParams.set("endDate", params.endDate);
        const queryString = queryParams.toString();
        return this.request(`/api/audit-logs${queryString ? `?${queryString}` : ''}`);
    }
    // Feature Flags
    async getFeatureFlags() {
        return this.request("/api/admin/feature-flags");
    }
    async createFeatureFlag(data) {
        return this.request("/api/admin/feature-flags", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    async updateFeatureFlag(flagId, data) {
        return this.request(`/api/admin/feature-flags/${flagId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    }
    // System Settings
    async getAdminSettings(category) {
        const queryParams = category ? `?category=${category}` : "";
        return this.request(`/api/admin/settings${queryParams}`);
    }
    async updateAdminSettings(settings) {
        return this.request("/api/admin/settings", {
            method: "PUT",
            body: JSON.stringify(settings)
        });
    }
    // Reports
    async getUsageReport(startDate, endDate) {
        const queryParams = new URLSearchParams();
        if (startDate) queryParams.set("startDate", startDate);
        if (endDate) queryParams.set("endDate", endDate);
        const queryString = queryParams.toString();
        return this.request(`/api/reports/usage${queryString ? `?${queryString}` : ''}`);
    }
    async generateUsageReport(data) {
        return this.request("/api/reports/usage", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
}
const apiClient = new ApiClient();
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/pages/agents-teams.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentsTeamsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2d$simple$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog-simple.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AgentsTeamsPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teamMembers, setTeamMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Create Agent Dialog State
    const [isCreateDialogOpen, setIsCreateDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Create Team Dialog State
    const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmittingTeam, setIsSubmittingTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Assign Seats Dialog
    const [isAssignSeatsDialogOpen, setIsAssignSeatsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAgentId, setSelectedAgentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [seatsToAssign, setSeatsToAssign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isAssigningSeats, setIsAssigningSeats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Agent Form Data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        teamId: "",
        status: "active",
        description: ""
    });
    // Team Form Data
    const [teamFormData, setTeamFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        ownerId: "admin",
        seatCap: 5,
        description: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentsTeamsPage.useEffect": ()=>{
            fetchData();
        }
    }["AgentsTeamsPage.useEffect"], []);
    const fetchData = async ()=>{
        try {
            setLoading(true);
            setError("");
            const agentsResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].getAgents();
            const teamsResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].getTeams();
            // Handle response format from local API
            if (agentsResponse?.success && agentsResponse?.data) {
                const agentsData = agentsResponse.data.data || agentsResponse.data || [];
                const agentsArray = Array.isArray(agentsData) ? agentsData : [];
                setAgents(agentsArray);
            } else {
                console.warn("Failed to fetch agents:", agentsResponse?.error);
            }
            if (teamsResponse?.success && teamsResponse?.data) {
                const teamsData = teamsResponse.data.data || teamsResponse.data || [];
                const teamsArray = Array.isArray(teamsData) ? teamsData : [];
                setTeams(teamsArray);
            } else {
                console.warn("Failed to fetch teams:", teamsResponse?.error);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError("Failed to load data. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    const handleCreateAgent = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsSubmitting(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].createAgent({
                name: formData.name,
                teamId: formData.teamId,
                status: formData.status,
                metadata: formData.description ? {
                    description: formData.description
                } : undefined
            });
            if (response.success) {
                setSuccess("Agent created successfully!");
                setFormData({
                    name: "",
                    teamId: "",
                    status: "active",
                    description: ""
                });
                setIsCreateDialogOpen(false);
                await fetchData();
            }
        } catch (error) {
            setError(error.message || "Failed to create agent");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCreateTeam = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsSubmittingTeam(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].createTeam({
                name: teamFormData.name,
                ownerId: teamFormData.ownerId,
                metadata: {
                    seatCap: teamFormData.seatCap,
                    description: teamFormData.description
                }
            });
            if (response.success) {
                setSuccess("Team created successfully!");
                setTeamFormData({
                    name: "",
                    ownerId: "admin",
                    seatCap: 5,
                    description: ""
                });
                setIsCreateTeamDialogOpen(false);
                await fetchData();
            }
        } catch (error) {
            setError(error.message || "Failed to create team");
        } finally{
            setIsSubmittingTeam(false);
        }
    };
    const handleAssignSeats = async ()=>{
        if (!selectedAgentId || seatsToAssign < 1) {
            setError("Invalid seat assignment");
            return;
        }
        setIsAssigningSeats(true);
        try {
            // Store seat assignment in agent metadata
            const agent = agents.find((a)=>(a.agentId || a.id) === selectedAgentId);
            if (!agent) {
                setError("Agent not found");
                return;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].updateAgent(selectedAgentId, {
                metadata: {
                    ...agent.metadata,
                    seatsAssigned: seatsToAssign
                }
            });
            if (response.success) {
                setSuccess(`Assigned ${seatsToAssign} seat(s) to ${agent.name}`);
                setIsAssignSeatsDialogOpen(false);
                setSelectedAgentId("");
                setSeatsToAssign(1);
                await fetchData();
            }
        } catch (error) {
            setError(error.message || "Failed to assign seats");
        } finally{
            setIsAssigningSeats(false);
        }
    };
    const getAgentSeats = (agent)=>{
        const assigned = agent.metadata?.seatsAssigned || 0;
        const used = agent.metadata?.seatsUsed || 0;
        return {
            used,
            assigned
        };
    };
    const filteredAgents = agents.filter((agent)=>{
        const searchLower = searchQuery.toLowerCase();
        const agentId = agent.agentId || agent.id || "";
        const name = agent.name || "";
        const teamId = agent.teamId || "";
        const status = agent.status || "active";
        // Search filter
        const matchesSearch = agentId.toLowerCase().includes(searchLower) || name.toLowerCase().includes(searchLower) || teamId.toLowerCase().includes(searchLower);
        // Status filter
        const matchesStatus = filterStatus === "all" || status === filterStatus;
        return matchesSearch && matchesStatus;
    });
    const mockAgents = filteredAgents.map((agent)=>{
        const seats = getAgentSeats(agent);
        return {
            id: agent.agentId || agent.id,
            name: agent.name,
            teamId: agent.teamId,
            status: agent.status,
            seats
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2",
                                children: "Agents & Teams"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/agents-teams.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-muted-foreground",
                                children: "Manage and inspect all agents and teams across the platform"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/agents-teams.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/agents-teams.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCreateTeamDialogOpen(true),
                                className: "flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/agents-teams.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Create Team"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/agents-teams.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/agents-teams.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCreateDialogOpen(true),
                                className: "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/agents-teams.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Create Agent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/agents-teams.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/agents-teams.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/agents-teams.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-green-400 text-sm",
                children: success
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 animate-fade-in-up",
                style: {
                    animationDelay: "0.1s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by agentId, name, or teamId...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-input border border-border rounded-lg text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsFilterOpen(!isFilterOpen),
                                    className: `flex items-center justify-center gap-2 px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap ${filterStatus !== "all" ? "bg-primary text-primary-foreground border border-primary" : "bg-input border border-border text-foreground hover:bg-muted"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: filterStatus === "all" ? "Filter" : `Status: ${filterStatus}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                isFilterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[180px]",
                                    children: [
                                        "all",
                                        "active",
                                        "inactive"
                                    ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setFilterStatus(status);
                                                setIsFilterOpen(false);
                                            },
                                            className: `w-full text-left px-4 py-3 text-sm transition-all duration-200 ${filterStatus === status ? "bg-primary/20 text-primary font-semibold border-l-2 border-primary" : "text-foreground hover:bg-muted"}`,
                                            children: status.charAt(0).toUpperCase() + status.slice(1)
                                        }, status, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/agents-teams.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2d$simple$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                isOpen: isCreateDialogOpen,
                onClose: ()=>{
                    setIsCreateDialogOpen(false);
                    setError("");
                    setFormData({
                        name: "",
                        teamId: "",
                        status: "active",
                        description: ""
                    });
                },
                title: "Create New Agent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreateAgent,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Agent Name *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    placeholder: "e.g., Customer Support Bot",
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Team *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                teams.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.teamId,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            teamId: e.target.value
                                        }),
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select a team..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        teams.map((team)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: team.teamId || team.id,
                                                children: [
                                                    team.name,
                                                    " (",
                                                    team.teamId || team.id,
                                                    ")"
                                                ]
                                            }, team.teamId || team.id, true, {
                                                fileName: "[project]/components/pages/agents-teams.tsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.teamId,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            teamId: e.target.value
                                        }),
                                    placeholder: "Enter Team ID (or create a team first)",
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                teams.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mt-1",
                                    children: "No teams found. Please enter a Team ID manually or create a team first."
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.status,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            status: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "active",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "inactive",
                                            children: "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Description (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    placeholder: "Brief description of the agent...",
                                    rows: 3,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsCreateDialogOpen(false);
                                        setError("");
                                    },
                                    className: "flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                        isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 419,
                                            columnNumber: 32
                                        }, this),
                                        isSubmitting ? "Creating..." : "Create Agent"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/agents-teams.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2d$simple$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                isOpen: isCreateTeamDialogOpen,
                onClose: ()=>{
                    setIsCreateTeamDialogOpen(false);
                    setError("");
                    setTeamFormData({
                        name: "",
                        ownerId: "admin",
                        seatCap: 5,
                        description: ""
                    });
                },
                title: "Create New Team",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreateTeam,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Team Name *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: teamFormData.name,
                                    onChange: (e)=>setTeamFormData({
                                            ...teamFormData,
                                            name: e.target.value
                                        }),
                                    placeholder: "e.g., Engineering Team",
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Owner ID *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: teamFormData.ownerId,
                                    onChange: (e)=>setTeamFormData({
                                            ...teamFormData,
                                            ownerId: e.target.value
                                        }),
                                    placeholder: "e.g., admin",
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Seat Cap"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: teamFormData.seatCap,
                                    onChange: (e)=>setTeamFormData({
                                            ...teamFormData,
                                            seatCap: Number(e.target.value)
                                        }),
                                    min: 1,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Description (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: teamFormData.description,
                                    onChange: (e)=>setTeamFormData({
                                            ...teamFormData,
                                            description: e.target.value
                                        }),
                                    placeholder: "Brief description of the team...",
                                    rows: 3,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsCreateTeamDialogOpen(false);
                                        setError("");
                                    },
                                    className: "flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",
                                    disabled: isSubmittingTeam,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmittingTeam,
                                    className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                        isSubmittingTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 508,
                                            columnNumber: 36
                                        }, this),
                                        isSubmittingTeam ? "Creating..." : "Create Team"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/agents-teams.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2d$simple$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                isOpen: isAssignSeatsDialogOpen,
                onClose: ()=>{
                    setIsAssignSeatsDialogOpen(false);
                    setSelectedAgentId("");
                    setSeatsToAssign(1);
                    setError("");
                },
                title: "Assign Seats to Agent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        handleAssignSeats();
                    },
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Agent *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 534,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedAgentId,
                                    onChange: (e)=>setSelectedAgentId(e.target.value),
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select an agent..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: agent.agentId || agent.id,
                                                children: [
                                                    agent.name,
                                                    " (",
                                                    agent.agentId || agent.id,
                                                    ")"
                                                ]
                                            }, agent.agentId || agent.id, true, {
                                                fileName: "[project]/components/pages/agents-teams.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Number of Seats *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: seatsToAssign,
                                    onChange: (e)=>setSeatsToAssign(Number(e.target.value)),
                                    min: 1,
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mt-1",
                                    children: "Number of execution seats to allocate"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 568,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsAssignSeatsDialogOpen(false);
                                        setError("");
                                    },
                                    className: "flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",
                                    disabled: isAssigningSeats,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 574,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isAssigningSeats,
                                    className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                        isAssigningSeats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 590,
                                            columnNumber: 36
                                        }, this),
                                        isAssigningSeats ? "Assigning..." : "Assign Seats"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/agents-teams.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 sm:space-y-3",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 600,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Loading agents..."
                        }, void 0, false, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 601,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/agents-teams.tsx",
                    lineNumber: 599,
                    columnNumber: 11
                }, this) : mockAgents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 bg-card border border-border rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-2",
                            children: "No agents found"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 605,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Create your first agent to get started"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 606,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/agents-teams.tsx",
                    lineNumber: 604,
                    columnNumber: 11
                }, this) : mockAgents.map((agent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                        },
                        className: "bg-card border border-border rounded-lg p-3 sm:p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-sm sm:text-base text-card-foreground group-hover:text-primary transition-colors",
                                                    children: agent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap ${agent.status === "active" ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"}`,
                                                    children: agent.status
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 619,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2 text-xs sm:text-sm flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-foreground",
                                                        children: agent.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/agents-teams.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "Team: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-foreground",
                                                            children: agent.teamId
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "Seats:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${agent.seats.assigned > 0 ? "text-green-400" : "text-yellow-400"}`,
                                                            children: [
                                                                agent.seats.used,
                                                                "/",
                                                                agent.seats.assigned
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 630,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 618,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedAgentId(agent.id);
                                                setIsAssignSeatsDialogOpen(true);
                                            },
                                            className: "px-3 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-xs font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "w-3 h-3 inline mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 21
                                                }, this),
                                                "Assign Seats"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 646,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/agents-teams.tsx",
                                            lineNumber: 656,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/agents-teams.tsx",
                                    lineNumber: 645,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, agent.id, true, {
                            fileName: "[project]/components/pages/agents-teams.tsx",
                            lineNumber: 617,
                            columnNumber: 15
                        }, this)
                    }, `${agent.id}-${agent.teamId}-${index}`, false, {
                        fileName: "[project]/components/pages/agents-teams.tsx",
                        lineNumber: 610,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/pages/agents-teams.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/agents-teams.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s(AgentsTeamsPage, "eXtPYXZsRLvJaowh/RW53lTv8Ts=");
_c = AgentsTeamsPage;
var _c;
__turbopack_context__.k.register(_c, "AgentsTeamsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4e96e69a._.js.map