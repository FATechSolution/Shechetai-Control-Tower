(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Application Configuration
 * Centralized configuration for API endpoints and environment settings
 */ // API Base URL - defaults to production backend
// In development, use localhost:3000 (without /api suffix as it's added by client endpoints)
// In production, use the environment URL
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
const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://hooks.shechet.com';
const API_BASE_URL = baseUrl.endsWith('/api') ? baseUrl.slice(0, -4) : baseUrl;
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
        } catch (error) {
            console.error("Error getting Firebase token:", error);
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
                console.error(`API Error (${response.status}):`, data);
                return {
                    success: false,
                    data: null,
                    error: data.error || "API request failed"
                };
            }
            return data;
        } catch (error) {
            console.error("API Request Error:", error);
            return {
                success: false,
                data: null,
                error: error instanceof Error ? error.message : "Network error"
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
"[project]/lib/utils/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Firebase Utilities
 * Helper functions for working with Firebase data types
 */ /**
 * Convert Firestore Timestamp to ISO string or Date
 * Handles both Firestore Timestamp objects and regular dates
 */ __turbopack_context__.s([
    "convertTimestamp",
    ()=>convertTimestamp,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "formatRelativeTime",
    ()=>formatRelativeTime,
    "sanitizeFirestoreObject",
    ()=>sanitizeFirestoreObject
]);
function convertTimestamp(timestamp, format = 'iso') {
    if (!timestamp) return null;
    try {
        // If it's a Firestore Timestamp object with _seconds and _nanoseconds
        if (timestamp._seconds !== undefined) {
            const date = new Date(timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000);
            if (format === 'iso') {
                return date.toISOString();
            } else if (format === 'date') {
                return date;
            } else {
                return date.toLocaleDateString();
            }
        }
        // If it's already a Date
        if (timestamp instanceof Date) {
            if (format === 'iso') {
                return timestamp.toISOString();
            } else if (format === 'date') {
                return timestamp;
            } else {
                return timestamp.toLocaleDateString();
            }
        }
        // If it's an ISO string
        if (typeof timestamp === 'string') {
            const date = new Date(timestamp);
            if (format === 'date') {
                return date;
            } else if (format === 'iso') {
                return timestamp;
            } else {
                return date.toLocaleDateString();
            }
        }
        return null;
    } catch (error) {
        console.error('Error converting timestamp:', error);
        return null;
    }
}
function formatDate(timestamp) {
    const date = convertTimestamp(timestamp, 'date');
    if (!date || !(date instanceof Date)) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}
function formatDateTime(timestamp) {
    const date = convertTimestamp(timestamp, 'date');
    if (!date || !(date instanceof Date)) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}
function formatRelativeTime(timestamp) {
    const date = convertTimestamp(timestamp, 'date');
    if (!date || !(date instanceof Date)) return 'N/A';
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 30) return `${days}d ago`;
    return formatDate(timestamp);
}
function sanitizeFirestoreObject(obj) {
    if (obj === null || obj === undefined) return obj;
    if (obj._seconds !== undefined) {
        // It's a Firestore Timestamp
        return convertTimestamp(obj, 'iso');
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>sanitizeFirestoreObject(item));
    }
    if (typeof obj === 'object') {
        const cleaned = {};
        for(const key in obj){
            cleaned[key] = sanitizeFirestoreObject(obj[key]);
        }
        return cleaned;
    }
    return obj;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/pages/subscriptions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubscriptionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2d$simple$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog-simple.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SubscriptionsPage() {
    _s();
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subscriptions, setSubscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isCreatePlanOpen, setIsCreatePlanOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        price: "",
        interval: "monthly",
        features: [],
        active: true
    });
    const [featureInput, setFeatureInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscriptionsPage.useEffect": ()=>{
            fetchData();
        }
    }["SubscriptionsPage.useEffect"], []);
    const fetchData = async ()=>{
        setLoading(true);
        try {
            const [plansRes, subsRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].getSubscriptionPlans(),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].getSubscriptions()
            ]);
            // Debug: Log plans response structure
            console.log("Plans API Response:", {
                success: plansRes.success,
                data: plansRes.data,
                error: plansRes.error,
                fullResponse: plansRes
            });
            if (plansRes.success) {
                const planData = plansRes.data?.data || plansRes.data || [];
                console.log("Plans data to display:", planData, "Type:", Array.isArray(planData));
                setPlans(Array.isArray(planData) ? planData : []);
            } else {
                console.warn("Plans API failed:", plansRes.error);
                setError(`Failed to fetch plans: ${plansRes.error}`);
            }
            // Debug: Log subscriptions response structure
            console.log("Subscriptions API Response:", {
                success: subsRes.success,
                dataLength: subsRes.data?.length || 0,
                error: subsRes.error,
                fullData: subsRes.data
            });
            if (subsRes.success) {
                const subData = subsRes.data?.data || subsRes.data || [];
                console.log("Subscriptions data to display:", subData);
                console.log("First subscription details:", subData[0]);
                setSubscriptions(Array.isArray(subData) ? subData : []);
            } else {
                console.warn("Subscriptions API failed:", subsRes.error);
                setError(`Failed to fetch subscriptions: ${subsRes.error}`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(`Error fetching data: ${error instanceof Error ? error.message : String(error)}`);
        } finally{
            setLoading(false);
        }
    };
    const handleCreatePlan = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsSubmitting(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].createSubscriptionPlan({
                name: formData.name,
                description: formData.description,
                price: parseFloat(formData.price),
                interval: formData.interval,
                features: formData.features,
                active: formData.active
            });
            if (response.success) {
                setSuccess("Plan created successfully!");
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    interval: "monthly",
                    features: [],
                    active: true
                });
                setIsCreatePlanOpen(false);
                await fetchData();
            }
        } catch (error) {
            setError(error.message || "Failed to create plan");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCancelSubscription = async (subscriptionId)=>{
        if (!subscriptionId) {
            setError("Subscription ID is missing");
            return;
        }
        if (!confirm("Are you sure you want to cancel this subscription?")) return;
        try {
            console.log("Cancelling subscription:", subscriptionId);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].cancelSubscription(subscriptionId);
            console.log("Cancel response:", response);
            if (response && response.success) {
                setSuccess("Subscription cancelled successfully!");
                setTimeout(()=>fetchData(), 500);
            } else {
                const errorMsg = response?.error || response?.message || "Failed to cancel subscription";
                throw new Error(errorMsg);
            }
        } catch (error) {
            const errorMsg = error?.message || error?.response?.data?.error || "Failed to cancel subscription";
            setError(errorMsg);
            console.error("Cancel error details:", {
                error,
                message: error?.message,
                status: error?.status,
                response: error?.response
            });
        }
    };
    const handleDeletePlan = async (planId)=>{
        if (!confirm("Are you sure you want to delete this plan?")) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].deleteSubscriptionPlan(planId);
            setSuccess("Plan deleted successfully!");
            await fetchData();
        } catch (error) {
            setError(error.message || "Failed to delete plan");
        }
    };
    const addFeature = ()=>{
        if (featureInput.trim()) {
            setFormData({
                ...formData,
                features: [
                    ...formData.features,
                    featureInput.trim()
                ]
            });
            setFeatureInput("");
        }
    };
    const removeFeature = (index)=>{
        setFormData({
            ...formData,
            features: formData.features.filter((_, i)=>i !== index)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 animate-fade-in-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        className: "w-8 h-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: "Subscriptions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Manage subscription plans and active subscriptions"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCreatePlanOpen(true),
                        className: "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            "Create Plan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/subscriptions.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-foreground mb-4",
                        children: "Subscription Plans"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-8 h-8 animate-spin text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this) : plans.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "w-16 h-16 mx-auto text-muted-foreground/50 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-4",
                                children: "No plans found"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCreatePlanOpen(true),
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    "Create Your First Plan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-foreground",
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground mt-1",
                                                        children: plan.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pages/subscriptions.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            plan.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-5 h-5 text-yellow-400 fill-yellow-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/subscriptions.tsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-primary",
                                            children: [
                                                "$",
                                                plan.price,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground font-normal",
                                                    children: [
                                                        "/",
                                                        plan.interval
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    plan.features && plan.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 mb-4",
                                        children: plan.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 bg-primary rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 25
                                                    }, this),
                                                    feature
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/pages/subscriptions.tsx",
                                                lineNumber: 248,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 246,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 pt-4 border-t border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDeletePlan(plan.planId || plan.id),
                                            className: "flex-1 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4 inline mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this),
                                                "Delete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, plan.planId || plan.id, true, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/subscriptions.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-foreground mb-4",
                        children: "Active Subscriptions"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg overflow-hidden",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-8 h-8 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this) : subscriptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "No active subscriptions"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-muted/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-left text-sm font-semibold text-foreground",
                                                    children: "User"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-left text-sm font-semibold text-foreground",
                                                    children: "Plan"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-left text-sm font-semibold text-foreground",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-left text-sm font-semibold text-foreground",
                                                    children: "Started"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-left text-sm font-semibold text-foreground",
                                                    children: "Next Billing"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-right text-sm font-semibold text-foreground",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-border",
                                        children: subscriptions.map((sub, index)=>{
                                            // Handle multiple possible subscription ID field names
                                            const subscriptionId = sub.subscriptionId || sub.id || `${sub.teamId}-${sub.planId}-${index}`;
                                            // Handle date fields - try multiple possible field names
                                            const startDate = sub.startDate || sub.createdAt || sub.activatedAt;
                                            const nextBillingDate = sub.nextBillingDate || sub.currentPeriodEnd || sub.renewalDate;
                                            console.log(`Subscription ${index}:`, JSON.stringify(sub, null, 2));
                                            console.log(`Subscription ID resolved to: ${subscriptionId}`);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-muted/30 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-foreground font-medium",
                                                        children: sub.userId || sub.teamId || sub.customerId || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-foreground",
                                                        children: sub.planName || sub.planId || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-1 rounded text-xs font-semibold capitalize ${sub.status === "active" ? "bg-green-500/20 text-green-400" : sub.status === "cancelled" ? "bg-red-500/20 text-red-400" : sub.status === "paused" ? "bg-yellow-500/20 text-yellow-400" : "bg-muted text-muted-foreground"}`,
                                                            children: sub.status || "pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-muted-foreground",
                                                        children: startDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(startDate) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-muted-foreground",
                                                        children: nextBillingDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(nextBillingDate) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-right",
                                                        children: sub.status === "active" && subscriptionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                console.log("Cancel clicked for subscription:", subscriptionId);
                                                                handleCancelSubscription(subscriptionId);
                                                            },
                                                            className: "px-3 py-1 bg-red-500/10 text-red-400 rounded hover:bg-red-500/20 transition-colors text-xs font-medium",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, subscriptionId || index, true, {
                                                fileName: "[project]/components/pages/subscriptions.tsx",
                                                lineNumber: 308,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/subscriptions.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pages/subscriptions.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/subscriptions.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            (success || error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg animate-fade-in-up ${success ? "bg-green-500/20 border border-green-500/20 text-green-400" : "bg-red-500/20 border border-red-500/20 text-red-400"}`,
                children: success || error
            }, void 0, false, {
                fileName: "[project]/components/pages/subscriptions.tsx",
                lineNumber: 356,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2d$simple$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                isOpen: isCreatePlanOpen,
                onClose: ()=>{
                    setIsCreatePlanOpen(false);
                    setError("");
                },
                title: "Create Subscription Plan",
                description: "Add a new subscription plan",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreatePlan,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Plan Name *"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    placeholder: "Pro Plan",
                                    required: true,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    placeholder: "Plan description...",
                                    rows: 3,
                                    className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-2",
                                            children: "Price *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            step: "0.01",
                                            value: formData.price,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    price: e.target.value
                                                }),
                                            placeholder: "29.99",
                                            required: true,
                                            className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-2",
                                            children: "Interval *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.interval,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    interval: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "monthly",
                                                    children: "Monthly"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "yearly",
                                                    children: "Yearly"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-foreground mb-2",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: featureInput,
                                            onChange: (e)=>setFeatureInput(e.target.value),
                                            onKeyDown: (e)=>e.key === "Enter" && (e.preventDefault(), addFeature()),
                                            placeholder: "Add a feature...",
                                            className: "flex-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: addFeature,
                                            className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
                                            children: "Add"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                formData.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: formData.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center justify-between bg-muted rounded px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-foreground",
                                                    children: feature
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>removeFeature(index),
                                                    className: "text-red-400 hover:text-red-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/subscriptions.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    id: "active",
                                    checked: formData.active,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            active: e.target.checked
                                        }),
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "active",
                                    className: "text-sm text-foreground",
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsCreatePlanOpen(false);
                                        setError("");
                                    },
                                    className: "flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 481,
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
                                            fileName: "[project]/components/pages/subscriptions.tsx",
                                            lineNumber: 497,
                                            columnNumber: 32
                                        }, this),
                                        isSubmitting ? "Creating..." : "Create Plan"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/subscriptions.tsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/subscriptions.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/subscriptions.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/subscriptions.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/subscriptions.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(SubscriptionsPage, "FYTXy9zJMu6m/FeoxRoWcPabm64=");
_c = SubscriptionsPage;
var _c;
__turbopack_context__.k.register(_c, "SubscriptionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LoaderCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
]);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
]);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_89e95bb9._.js.map