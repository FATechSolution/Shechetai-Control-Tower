module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/auth");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/firebase/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Firebase Admin SDK Configuration
 * Server-side Firebase initialization for authentication and Firestore
 */ __turbopack_context__.s([
    "createCustomToken",
    ()=>createCustomToken,
    "getFirebaseAuth",
    ()=>getFirebaseAuth,
    "getFirebaseDb",
    ()=>getFirebaseDb,
    "getUserByUid",
    ()=>getUserByUid,
    "initializeFirebaseAdmin",
    ()=>initializeFirebaseAdmin,
    "setUserClaims",
    ()=>setUserClaims,
    "verifyIdToken",
    ()=>verifyIdToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
let adminApp;
let adminAuth;
let adminDb;
function initializeFirebaseAdmin() {
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])().length > 0) {
        adminApp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])()[0];
        adminAuth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__["getAuth"])(adminApp);
        adminDb = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])(adminApp);
        return {
            app: adminApp,
            auth: adminAuth,
            db: adminDb
        };
    }
    // Check if required environment variables are available
    // During build time on Vercel, these might not be set
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (!projectId || !clientEmail || !privateKey) {
        console.warn('⚠️ Firebase Admin credentials not available (build time). Skipping initialization.');
        // Return mock objects that won't be used during build
        return {
            app: undefined,
            auth: undefined,
            db: undefined
        };
    }
    try {
        // Initialize with environment variables
        adminApp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])({
            credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["cert"])({
                projectId,
                clientEmail,
                privateKey: privateKey.replace(/\\n/g, '\n')
            }),
            projectId
        });
        adminAuth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__["getAuth"])(adminApp);
        adminDb = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])(adminApp);
        console.log('✅ Firebase Admin SDK initialized successfully');
        return {
            app: adminApp,
            auth: adminAuth,
            db: adminDb
        };
    } catch (error) {
        console.error('❌ Firebase Admin initialization error:', error);
        throw error;
    }
}
function getFirebaseAuth() {
    if (!adminAuth) {
        const { auth } = initializeFirebaseAdmin();
        adminAuth = auth;
    }
    return adminAuth;
}
function getFirebaseDb() {
    if (!adminDb) {
        const { db } = initializeFirebaseAdmin();
        adminDb = db;
    }
    return adminDb;
}
async function verifyIdToken(idToken) {
    const auth = getFirebaseAuth();
    try {
        const decodedToken = await auth.verifyIdToken(idToken);
        return decodedToken;
    } catch (error) {
        console.error('Token verification error:', error);
        throw new Error('Invalid authentication token');
    }
}
async function getUserByUid(uid) {
    const auth = getFirebaseAuth();
    try {
        const userRecord = await auth.getUser(uid);
        return userRecord;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}
async function createCustomToken(uid, additionalClaims) {
    const auth = getFirebaseAuth();
    try {
        const customToken = await auth.createCustomToken(uid, additionalClaims);
        return customToken;
    } catch (error) {
        console.error('Error creating custom token:', error);
        throw error;
    }
}
async function setUserClaims(uid, claims) {
    const auth = getFirebaseAuth();
    try {
        await auth.setCustomUserClaims(uid, claims);
        return true;
    } catch (error) {
        console.error('Error setting custom claims:', error);
        throw error;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/cluster [external] (cluster, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("cluster", () => require("cluster"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/api/rate-limiter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Rate Limiting Middleware
 * Prevents API abuse and DDoS attacks
 */ __turbopack_context__.s([
    "rateLimit",
    ()=>rateLimit,
    "withRateLimit",
    ()=>withRateLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rate$2d$limiter$2d$flexible$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rate-limiter-flexible/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
// Create rate limiters for different endpoints
const globalLimiter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rate$2d$limiter$2d$flexible$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RateLimiterMemory"]({
    points: 100,
    duration: 60,
    blockDuration: 60
});
const strictLimiter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rate$2d$limiter$2d$flexible$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RateLimiterMemory"]({
    points: 10,
    duration: 60,
    blockDuration: 300
});
const authLimiter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rate$2d$limiter$2d$flexible$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RateLimiterMemory"]({
    points: 5,
    duration: 900,
    blockDuration: 3600
});
/**
 * Get client identifier from request
 */ function getClientIdentifier(request) {
    // Try to get IP address from various headers
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip");
    const ip = forwarded?.split(",")[0] || realIp || cfConnectingIp || "unknown";
    // Also consider user agent for better fingerprinting
    const userAgent = request.headers.get("user-agent") || "unknown";
    return `${ip}:${userAgent.slice(0, 50)}`;
}
async function rateLimit(request, type = "global") {
    const clientId = getClientIdentifier(request);
    let limiter;
    switch(type){
        case "auth":
            limiter = authLimiter;
            break;
        case "strict":
            limiter = strictLimiter;
            break;
        default:
            limiter = globalLimiter;
    }
    try {
        await limiter.consume(clientId);
        return {
            success: true
        };
    } catch (rejRes) {
        const retryAfter = Math.ceil(rejRes.msBeforeNext / 1000);
        return {
            success: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Too many requests. Please try again later.",
                retryAfter
            }, {
                status: 429,
                headers: {
                    "Retry-After": retryAfter.toString(),
                    "X-RateLimit-Limit": limiter.points.toString(),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": new Date(Date.now() + rejRes.msBeforeNext).toISOString()
                }
            })
        };
    }
}
async function withRateLimit(request, handler, type = "global") {
    const result = await rateLimit(request, type);
    if (!result.success) {
        return result.response;
    }
    return handler();
}
}),
"[project]/lib/api/middleware.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "authenticate",
    ()=>authenticate,
    "authorize",
    ()=>authorize,
    "withAuth",
    ()=>withAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/rate-limiter.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// Initialize Firebase Admin on first import
(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeFirebaseAdmin"])();
/**
 * Get client info from request
 */ function getClientInfo(request) {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0] || realIp || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    return {
        ip,
        userAgent
    };
}
async function authenticate(request) {
    const apiKey = request.headers.get("x-api-key");
    const authHeader = request.headers.get("authorization");
    const { ip, userAgent } = getClientInfo(request);
    // Check API Key for system operations
    if (apiKey) {
        // Validate against environment variable
        if (apiKey === process.env.SUPER_ADMIN_API_KEY) {
            return {
                userId: "system",
                email: "system@shechetai.com",
                role: "super_admin",
                isSuperAdmin: true,
                firebaseUid: "system",
                ip,
                userAgent
            };
        }
    }
    // Check Firebase ID Token
    if (authHeader?.startsWith("Bearer ")) {
        const idToken = authHeader.substring(7);
        try {
            // Verify Firebase ID token
            const decodedToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyIdToken"])(idToken);
            // Get user data from Firestore
            const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirebaseDb"])();
            const userDoc = await db.collection("users").doc(decodedToken.uid).get();
            if (!userDoc.exists) {
                console.error("User not found in Firestore:", decodedToken.uid);
                return null;
            }
            const userData = userDoc.data();
            return {
                userId: userDoc.id,
                email: decodedToken.email || userData?.email || "",
                role: userData?.role || "user",
                isSuperAdmin: userData?.role === "super_admin",
                firebaseUid: decodedToken.uid,
                ip,
                userAgent
            };
        } catch (error) {
            console.error("Firebase authentication error:", error);
            return null;
        }
    }
    return null;
}
function authorize(context, requiredRole = "admin") {
    if (!context) return false;
    if (requiredRole === "super_admin") {
        return context.isSuperAdmin;
    }
    return context.role === "super_admin" || context.role === "admin";
}
async function withAuth(request, handler, requiredRole = "admin") {
    // Apply rate limiting (stricter for auth endpoints)
    const rateLimit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRateLimit"])(request, async ()=>{
        const authContext = await authenticate(request);
        if (!authContext || !authorize(authContext, requiredRole)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        try {
            return await handler(request, authContext);
        } catch (error) {
            console.error("API Error:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Internal server error"
            }, {
                status: 500
            });
        }
    }, requiredRole === "super_admin" ? "strict" : "global");
    return rateLimit;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/api/firestore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Firebase Firestore Database Layer
 * Replaces mock in-memory database with real Firestore operations
 */ __turbopack_context__.s([
    "AgentDatabase",
    ()=>AgentDatabase,
    "AuditLogDatabase",
    ()=>AuditLogDatabase,
    "ContractDatabase",
    ()=>ContractDatabase,
    "Database",
    ()=>Database,
    "FeatureFlagDatabase",
    ()=>FeatureFlagDatabase,
    "FirestoreDatabase",
    ()=>FirestoreDatabase,
    "PaymentMethodDatabase",
    ()=>PaymentMethodDatabase,
    "ReferralDatabase",
    ()=>ReferralDatabase,
    "SubscriptionDatabase",
    ()=>SubscriptionDatabase,
    "TeamDatabase",
    ()=>TeamDatabase,
    "TeamInviteDatabase",
    ()=>TeamInviteDatabase,
    "TeamMemberDatabase",
    ()=>TeamMemberDatabase,
    "TransactionDatabase",
    ()=>TransactionDatabase,
    "UserDatabase",
    ()=>UserDatabase,
    "WalletDatabase",
    ()=>WalletDatabase,
    "WhiteLabelDatabase",
    ()=>WhiteLabelDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/admin.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class FirestoreDatabase {
    static db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirebaseDb"])();
    /**
   * Get all documents from a collection
   */ static async getAll(collection) {
        const snapshot = await this.db.collection(collection).get();
        return snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
    }
    /**
   * Get documents with filtering
   */ static async query(collection, filters) {
        let query = this.db.collection(collection);
        filters.forEach((filter)=>{
            query = query.where(filter.field, filter.op, filter.value);
        });
        const snapshot = await query.get();
        return snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
    }
    /**
   * Get a single document by ID
   */ static async getById(collection, id) {
        const doc = await this.db.collection(collection).doc(id).get();
        return doc.exists ? {
            id: doc.id,
            ...doc.data()
        } : null;
    }
    /**
   * Create a new document
   */ static async create(collection, data) {
        // Remove undefined values to avoid Firestore errors
        const cleanData = Object.entries(data).reduce((acc, [key, value])=>{
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        const docRef = await this.db.collection(collection).add({
            ...cleanData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
        const doc = await docRef.get();
        return {
            id: doc.id,
            ...doc.data()
        };
    }
    /**
   * Create document with custom ID
   */ static async createWithId(collection, id, data) {
        // Remove undefined values to avoid Firestore errors
        const cleanData = Object.entries(data).reduce((acc, [key, value])=>{
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        await this.db.collection(collection).doc(id).set({
            ...cleanData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
        const doc = await this.db.collection(collection).doc(id).get();
        return {
            id: doc.id,
            ...doc.data()
        };
    }
    /**
   * Update a document
   */ static async update(collection, id, data) {
        const docRef = this.db.collection(collection).doc(id);
        const doc = await docRef.get();
        if (!doc.exists) return null;
        // Remove undefined values to avoid Firestore errors
        const cleanData = Object.entries(data).reduce((acc, [key, value])=>{
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        await docRef.update({
            ...cleanData,
            updatedAt: new Date().toISOString()
        });
        const updated = await docRef.get();
        return {
            id: updated.id,
            ...updated.data()
        };
    }
    /**
   * Delete a document
   */ static async delete(collection, id) {
        try {
            await this.db.collection(collection).doc(id).delete();
            return true;
        } catch (error) {
            console.error(`Error deleting document ${id}:`, error);
            return false;
        }
    }
    /**
   * Paginated query
   */ static async getPaginated(collection, limit, offset, filters) {
        let query = this.db.collection(collection);
        if (filters) {
            filters.forEach((filter)=>{
                query = query.where(filter.field, filter.op, filter.value);
            });
        }
        // Get total count
        const totalSnapshot = await query.get();
        const total = totalSnapshot.size;
        // Get paginated results
        const snapshot = await query.offset(offset).limit(limit).get();
        const items = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        return {
            items,
            total
        };
    }
}
class AgentDatabase {
    static collection = "agents";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(agentId) {
        return FirestoreDatabase.getById(this.collection, agentId);
    }
    static async getByTeam(teamId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(agentId, data) {
        return FirestoreDatabase.update(this.collection, agentId, data);
    }
    static async delete(agentId) {
        return FirestoreDatabase.delete(this.collection, agentId);
    }
    static async getAnalytics(agentId) {
        // TODO: Implement real analytics tracking
        return {
            agentId,
            totalRequests: 0,
            successfulRequests: 0,
            failedRequests: 0,
            averageResponseTime: 0,
            usageByDay: []
        };
    }
}
class TeamDatabase {
    static collection = "teams";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(teamId) {
        return FirestoreDatabase.getById(this.collection, teamId);
    }
    static async getByOwner(ownerId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "ownerId",
                op: "==",
                value: ownerId
            }
        ]);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(teamId, data) {
        return FirestoreDatabase.update(this.collection, teamId, data);
    }
    static async delete(teamId) {
        return FirestoreDatabase.delete(this.collection, teamId);
    }
    static async getAnalytics(teamId) {
        // TODO: Implement real analytics tracking
        return {
            teamId,
            totalAgents: 0,
            activeAgents: 0,
            totalMembers: 0,
            seatUtilization: 0,
            totalRequests: 0,
            monthlySpend: 0,
            activityLog: []
        };
    }
}
class UserDatabase {
    static collection = "users";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(userId) {
        return FirestoreDatabase.getById(this.collection, userId);
    }
    static async getByEmail(email) {
        const users = await FirestoreDatabase.query(this.collection, [
            {
                field: "email",
                op: "==",
                value: email
            }
        ]);
        return users.length > 0 ? users[0] : null;
    }
    static async getByTeam(teamId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
    }
    static async create(userId, data) {
        return FirestoreDatabase.createWithId(this.collection, userId, data);
    }
    static async update(userId, data) {
        return FirestoreDatabase.update(this.collection, userId, data);
    }
    static async delete(userId) {
        return FirestoreDatabase.delete(this.collection, userId);
    }
}
class ContractDatabase {
    static collection = "contracts";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(contractId) {
        return FirestoreDatabase.getById(this.collection, contractId);
    }
    static async getByTeam(teamId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
    }
    static async getByTeamId(teamId) {
        return this.getByTeam(teamId);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(contractId, data) {
        return FirestoreDatabase.update(this.collection, contractId, data);
    }
}
class WalletDatabase {
    static collection = "wallets";
    static db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirebaseDb"])();
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    /**
   * Get wallet by ID (teamId is used as document ID)
   */ static async getById(teamId) {
        return FirestoreDatabase.getById(this.collection, teamId);
    }
    /**
   * Get wallet by team ID (same as getById since teamId is the document ID)
   */ static async getByTeamId(teamId) {
        return this.getById(teamId);
    }
    /**
   * Get wallet by entity (legacy support)
   */ static async getByEntity(entityId, entityType) {
        if (entityType === "team") {
            return this.getByTeamId(entityId);
        }
        const wallets = await FirestoreDatabase.query(this.collection, [
            {
                field: "entityId",
                op: "==",
                value: entityId
            },
            {
                field: "entityType",
                op: "==",
                value: entityType
            }
        ]);
        return wallets.length > 0 ? wallets[0] : null;
    }
    /**
   * Create wallet using teamId as document ID
   */ static async create(data) {
        const teamId = data.teamId;
        if (!teamId) {
            throw new Error("teamId is required to create a wallet");
        }
        const walletData = {
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        await this.db.collection(this.collection).doc(teamId).set(walletData);
        const doc = await this.db.collection(this.collection).doc(teamId).get();
        return {
            id: doc.id,
            walletId: doc.id,
            ...doc.data()
        };
    }
    /**
   * Update wallet (teamId is the document ID)
   */ static async update(teamId, data) {
        const updateData = {
            ...data,
            updatedAt: new Date().toISOString()
        };
        await this.db.collection(this.collection).doc(teamId).update(updateData);
        const doc = await this.db.collection(this.collection).doc(teamId).get();
        return doc.exists ? {
            id: doc.id,
            walletId: doc.id,
            ...doc.data()
        } : null;
    }
    /**
   * Update wallet balance (add or subtract)
   */ static async updateBalance(teamId, amount) {
        const walletRef = this.db.collection(this.collection).doc(teamId);
        const doc = await walletRef.get();
        if (!doc.exists) {
            return null;
        }
        const currentBalance = doc.data()?.balance || 0;
        const newBalance = currentBalance + amount;
        await walletRef.update({
            balance: newBalance,
            updatedAt: new Date().toISOString()
        });
        const updated = await walletRef.get();
        return {
            id: updated.id,
            walletId: updated.id,
            ...updated.data()
        };
    }
}
class TransactionDatabase {
    static collection = "transactions";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(transactionId) {
        return FirestoreDatabase.getById(this.collection, transactionId);
    }
    static async getByWallet(walletId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "walletId",
                op: "==",
                value: walletId
            }
        ]);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
}
class SubscriptionDatabase {
    static collection = "subscriptions";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(subscriptionId) {
        return FirestoreDatabase.getById(this.collection, subscriptionId);
    }
    static async getByUser(userId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "userId",
                op: "==",
                value: userId
            }
        ]);
    }
    static async getByTeamId(teamId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(subscriptionId, data) {
        return FirestoreDatabase.update(this.collection, subscriptionId, data);
    }
}
class PaymentMethodDatabase {
    static collection = "paymentMethods";
    static async getByUser(userId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "userId",
                op: "==",
                value: userId
            }
        ]);
    }
    static async getById(paymentMethodId) {
        return FirestoreDatabase.getById(this.collection, paymentMethodId);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async delete(paymentMethodId) {
        return FirestoreDatabase.delete(this.collection, paymentMethodId);
    }
    static async setDefault(paymentMethodId) {
        return FirestoreDatabase.update(this.collection, paymentMethodId, {
            isDefault: true
        });
    }
}
class AuditLogDatabase {
    static collection = "auditLogs";
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async getAll(limit = 100, offset = 0) {
        return FirestoreDatabase.getPaginated(this.collection, limit, offset);
    }
    static async getByUser(userId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "userId",
                op: "==",
                value: userId
            }
        ]);
    }
}
class FeatureFlagDatabase {
    static collection = "featureFlags";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(flagId) {
        return FirestoreDatabase.getById(this.collection, flagId);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(flagId, data) {
        return FirestoreDatabase.update(this.collection, flagId, data);
    }
    static async delete(flagId) {
        return FirestoreDatabase.delete(this.collection, flagId);
    }
}
class WhiteLabelDatabase {
    static collection = "whiteLabels";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(configId) {
        return FirestoreDatabase.getById(this.collection, configId);
    }
    static async getByTeamId(teamId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(configId, data) {
        return FirestoreDatabase.update(this.collection, configId, data);
    }
    static async delete(configId) {
        return FirestoreDatabase.delete(this.collection, configId);
    }
}
class ReferralDatabase {
    static collection = "referrals";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getById(referralId) {
        return FirestoreDatabase.getById(this.collection, referralId);
    }
    static async getByReferrer(referrerId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "referrerId",
                op: "==",
                value: referrerId
            }
        ]);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(referralId, data) {
        return FirestoreDatabase.update(this.collection, referralId, data);
    }
}
class TeamMemberDatabase {
    static collection = "teamMembers";
    static async getAll() {
        return FirestoreDatabase.getAll(this.collection);
    }
    static async getByTeam(teamId) {
        return FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
    }
    static async getById(memberId) {
        return FirestoreDatabase.getById(this.collection, memberId);
    }
    static async create(data) {
        return FirestoreDatabase.create(this.collection, data);
    }
    static async update(memberId, data) {
        return FirestoreDatabase.update(this.collection, memberId, data);
    }
    static async delete(memberId) {
        return FirestoreDatabase.delete(this.collection, memberId);
    }
    static async removeByUserAndTeam(teamId, userId) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirebaseDb"])();
        const snapshot = await db.collection(this.collection).where("teamId", "==", teamId).where("userId", "==", userId).get();
        if (snapshot.empty) return false;
        await snapshot.docs[0].ref.delete();
        return true;
    }
}
class TeamInviteDatabase {
    static collection = "invites";
    static async getAll() {
        const results = await FirestoreDatabase.getAll(this.collection);
        // Add inviteId for backward compatibility
        return results.map((r)=>({
                ...r,
                inviteId: r.id
            }));
    }
    static async getByTeam(teamId) {
        const results = await FirestoreDatabase.query(this.collection, [
            {
                field: "teamId",
                op: "==",
                value: teamId
            }
        ]);
        // Add inviteId for backward compatibility
        return results.map((r)=>({
                ...r,
                inviteId: r.id
            }));
    }
    // Alias for backward compatibility with database-bridge
    static async getByTeamId(teamId) {
        return this.getByTeam(teamId);
    }
    static async getById(inviteId) {
        const result = await FirestoreDatabase.getById(this.collection, inviteId);
        if (!result) return null;
        // Add inviteId for backward compatibility
        return {
            ...result,
            inviteId: result.id
        };
    }
    static async create(data) {
        const result = await FirestoreDatabase.create(this.collection, data);
        // Add inviteId for backward compatibility
        return {
            ...result,
            inviteId: result.id
        };
    }
    static async update(inviteId, data) {
        return FirestoreDatabase.update(this.collection, inviteId, data);
    }
    static async delete(inviteId) {
        return FirestoreDatabase.delete(this.collection, inviteId);
    }
}
const Database = {
    // Agents
    getAgents: AgentDatabase.getAll,
    getAgent: AgentDatabase.getById,
    createAgent: AgentDatabase.create,
    updateAgent: AgentDatabase.update,
    deleteAgent: AgentDatabase.delete,
    // Teams
    getTeams: TeamDatabase.getAll,
    getTeam: TeamDatabase.getById,
    createTeam: TeamDatabase.create,
    updateTeam: TeamDatabase.update,
    deleteTeam: TeamDatabase.delete,
    // Users
    getUsers: UserDatabase.getAll,
    getUser: UserDatabase.getById,
    createUser: UserDatabase.create,
    updateUser: UserDatabase.update,
    deleteUser: UserDatabase.delete,
    // Contracts
    getContracts: ContractDatabase.getAll,
    getContract: ContractDatabase.getById,
    createContract: ContractDatabase.create,
    updateContract: ContractDatabase.update,
    // Wallets
    getWallets: WalletDatabase.getAll,
    getWallet: WalletDatabase.getById,
    createWallet: WalletDatabase.create,
    updateWallet: WalletDatabase.update,
    // Transactions
    getTransactions: TransactionDatabase.getAll,
    getTransaction: TransactionDatabase.getById,
    createTransaction: TransactionDatabase.create,
    // White Labels
    getWhiteLabels: WhiteLabelDatabase.getAll,
    getWhiteLabel: WhiteLabelDatabase.getById,
    createWhiteLabel: WhiteLabelDatabase.create,
    updateWhiteLabel: WhiteLabelDatabase.update,
    deleteWhiteLabel: WhiteLabelDatabase.delete,
    // Referrals
    getReferrals: ReferralDatabase.getAll,
    getReferral: ReferralDatabase.getById,
    createReferral: ReferralDatabase.create,
    updateReferral: ReferralDatabase.update
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/api/database-bridge.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Database Bridge - Maps old Database calls to proper Firebase implementations
 * This file enables backward compatibility for code still using the old Database interface
 */ __turbopack_context__.s([
    "Database",
    ()=>Database,
    "DatabaseBridge",
    ()=>Database
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/firestore.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const Database = {
    // Team operations
    getTeamById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamDatabase"].getById(id),
    getTeams: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamDatabase"].getAll(),
    createTeam: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamDatabase"].create(data),
    updateTeam: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamDatabase"].update(id, data),
    deleteTeam: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamDatabase"].delete(id),
    // Agent operations
    getAgents: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].getAll(),
    getAgentById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].getById(id),
    createAgent: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].create(data),
    updateAgent: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].update(id, data),
    deleteAgent: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].delete(id),
    getAgentsByTeam: (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].getByTeam(teamId),
    getAgentAnalytics: (agentId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentDatabase"].getAnalytics(agentId),
    // User operations
    getUsers: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDatabase"].getAll(),
    getUserById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDatabase"].getById(id),
    createUser: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDatabase"].create(id, data),
    updateUser: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDatabase"].update(id, data),
    deleteUser: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDatabase"].delete(id),
    getUsersByTeam: (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDatabase"].getByTeam(teamId),
    // Wallet operations
    getWallets: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WalletDatabase"].getAll(),
    getWalletByTeamId: (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WalletDatabase"].getByTeamId(teamId),
    updateWalletBalance: (id, amount)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WalletDatabase"].updateBalance(id, amount),
    createWallet: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WalletDatabase"].create(data),
    // Contract operations
    getContracts: (teamId)=>teamId ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractDatabase"].getByTeamId(teamId) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractDatabase"].getAll(),
    getContractById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractDatabase"].getById(id),
    createContract: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractDatabase"].create(data),
    updateContract: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractDatabase"].update(id, data),
    // Transaction operations
    createTransaction: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionDatabase"].create(data),
    getTransactions: (filters)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionDatabase"].getAll(),
    // Subscription operations
    getSubscriptions: (teamId)=>teamId ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].getByTeamId(teamId) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].getAll(),
    getSubscription: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].getById(id),
    updateSubscription: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].update(id, data),
    getPlans: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].getAll(),
    createPlan: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].create(data),
    deletePlan: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionDatabase"].delete(id),
    // Payment method operations
    createPaymentMethod: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentMethodDatabase"].create(data),
    deletePaymentMethod: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentMethodDatabase"].delete(id),
    setDefaultPaymentMethod: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentMethodDatabase"].setDefault(id),
    // Audit log operations
    createAuditLog: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogDatabase"].create(data),
    // Feature flag operations
    getFeatureFlags: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FeatureFlagDatabase"].getAll(),
    getFeatureFlag: (key)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FeatureFlagDatabase"].getByKey(key),
    createFeatureFlag: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FeatureFlagDatabase"].create(data),
    // White label operations
    getWhiteLabelConfigs: (teamId)=>teamId ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WhiteLabelDatabase"].getByTeamId(teamId) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WhiteLabelDatabase"].getAll(),
    getWhiteLabel: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WhiteLabelDatabase"].getById(id),
    updateWhiteLabel: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WhiteLabelDatabase"].update(id, data),
    // Team member operations
    getTeamMembers: (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamMemberDatabase"].getByTeam(teamId),
    addTeamMember: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamMemberDatabase"].create(data),
    removeTeamMember: (teamId, userId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamMemberDatabase"].removeByUserAndTeam(teamId, userId),
    // Team invite operations
    getInvites: (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamInviteDatabase"].getByTeamId(teamId),
    getInviteById: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamInviteDatabase"].getById(id),
    createInvite: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamInviteDatabase"].create(data),
    updateInvite: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamInviteDatabase"].update(id, data),
    deleteInvite: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TeamInviteDatabase"].delete(id),
    // Referral operations (optional/placeholder)
    getReferrals: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$firestore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReferralDatabase"].getAll(),
    // Settings/misc operations
    getSettings: ()=>Promise.resolve([]),
    updateSetting: ()=>Promise.resolve(null),
    getUsageReports: ()=>Promise.resolve([]),
    createUsageReport: ()=>Promise.resolve(null)
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/subscriptions/plans/[planId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$database$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api/database-bridge.ts [app-route] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$database$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$database$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeFirebaseAdmin"])();
async function DELETE(request, context) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(request, async (req, authContext)=>{
        try {
            const params = await context.params;
            const { planId } = params;
            const success = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$database$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Database"].deletePlan(planId);
            if (!success) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Plan not found"
                }, {
                    status: 404
                });
            }
            // Log the action
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$database$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Database"].createAuditLog({
                userId: authContext.userId,
                userEmail: authContext.email || "unknown",
                action: "delete_plan",
                resource: "subscription_plan",
                resourceId: planId,
                ipAddress: req.headers.get("x-forwarded-for") || "unknown",
                details: `Deleted plan ${planId}`
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: {
                    planId
                },
                message: "Plan deleted successfully"
            });
        } catch (error) {
            console.error("Delete plan error:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Failed to delete plan"
            }, {
                status: 500
            });
        }
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4031f19b._.js.map