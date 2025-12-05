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
"[project]/lib/api/helpers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "createPaginatedResponse",
    ()=>createPaginatedResponse,
    "errorResponse",
    ()=>errorResponse,
    "handleApiError",
    ()=>handleApiError,
    "parsePagination",
    ()=>parsePagination,
    "successResponse",
    ()=>successResponse,
    "validateRequired",
    ()=>validateRequired
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
class ApiError extends Error {
    statusCode;
    code;
    constructor(statusCode, message, code){
        super(message), this.statusCode = statusCode, this.code = code;
        this.name = "ApiError";
    }
}
function successResponse(data, message) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data,
        message
    });
}
function errorResponse(error, statusCode = 400) {
    const message = typeof error === "string" ? error : error.message;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error: message
    }, {
        status: statusCode
    });
}
function handleApiError(error) {
    console.error("API Error:", error);
    if (error instanceof ApiError) {
        return errorResponse(error.message, error.statusCode);
    }
    if (error instanceof Error) {
        return errorResponse(error.message, 500);
    }
    return errorResponse("An unexpected error occurred", 500);
}
function validateRequired(data, requiredFields) {
    const missing = requiredFields.filter((field)=>!data[field]);
    if (missing.length > 0) {
        return {
            valid: false,
            missing: missing
        };
    }
    return {
        valid: true
    };
}
function parsePagination(searchParams) {
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    return {
        page,
        limit
    };
}
function createPaginatedResponse(data, total, page, limit) {
    return {
        data,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/lib/email/email-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Email Service using Nodemailer
 * Supports multiple email providers (Gmail, SendGrid, AWS SES, etc.)
 */ __turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail,
    "sendInviteEmail",
    ()=>sendInviteEmail,
    "sendInvoiceEmail",
    ()=>sendInvoiceEmail,
    "sendPasswordResetEmail",
    ()=>sendPasswordResetEmail,
    "sendPaymentReceiptEmail",
    ()=>sendPaymentReceiptEmail,
    "sendSubscriptionNotification",
    ()=>sendSubscriptionNotification,
    "sendWelcomeEmail",
    ()=>sendWelcomeEmail,
    "testEmailConfig",
    ()=>testEmailConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
// Email configuration
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@shechetai.com';
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || 'Shechetai Control Tower';
// Create transporter based on provider
let transporter;
// Provider options: 'gmail', 'sendgrid', 'ses', 'smtp'
const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || 'smtp';
switch(EMAIL_PROVIDER){
    case 'gmail':
        // Gmail configuration
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });
        break;
    case 'sendgrid':
        // SendGrid configuration
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            auth: {
                user: 'apikey',
                pass: process.env.SENDGRID_API_KEY
            }
        });
        break;
    case 'ses':
        // AWS SES configuration
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            host: process.env.AWS_SES_HOST || 'email-smtp.us-east-1.amazonaws.com',
            port: 587,
            auth: {
                user: process.env.AWS_SES_ACCESS_KEY,
                pass: process.env.AWS_SES_SECRET_KEY
            }
        });
        break;
    default:
        // Generic SMTP configuration
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            host: process.env.SMTP_HOST || 'localhost',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
}
async function sendEmail(options) {
    try {
        const info = await transporter.sendMail({
            from: `"${EMAIL_FROM_NAME}" <${EMAIL_FROM}>`,
            to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
            attachments: options.attachments
        });
        console.log('✅ Email sent:', info.messageId);
        return {
            success: true,
            messageId: info.messageId
        };
    } catch (error) {
        console.error('❌ Email error:', error);
        throw error;
    }
}
async function sendWelcomeEmail(email, name, loginUrl) {
    return sendEmail({
        to: email,
        subject: 'Welcome to Shechetai Control Tower!',
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Welcome to Shechetai!</h1>
            </div>
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>Your account has been successfully created. We're excited to have you on board!</p>
              <p>You can now access your dashboard and start exploring all the features we offer.</p>
              <a href="${loginUrl}" class="button">Go to Dashboard</a>
              <p>If you have any questions, feel free to reach out to our support team.</p>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `Hi ${name},\n\nWelcome to Shechetai Control Tower!\n\nYour account has been created. Visit ${loginUrl} to get started.\n\nBest regards,\nThe Shechetai Team`
    });
}
async function sendInviteEmail(email, teamName, inviterName, inviteUrl) {
    return sendEmail({
        to: email,
        subject: `You've been invited to join ${teamName}`,
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 Team Invitation</h1>
            </div>
            <div class="content">
              <h2>Hi there,</h2>
              <p><strong>${inviterName}</strong> has invited you to join <strong>${teamName}</strong> on Shechetai Control Tower.</p>
              <p>Click the button below to accept the invitation and get started:</p>
              <a href="${inviteUrl}" class="button">Accept Invitation</a>
              <p><small>This invitation will expire in 7 days.</small></p>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `Hi,\n\n${inviterName} has invited you to join ${teamName}.\n\nAccept invitation: ${inviteUrl}\n\nBest regards,\nThe Shechetai Team`
    });
}
async function sendPasswordResetEmail(email, resetUrl, name) {
    return sendEmail({
        to: email,
        subject: 'Reset Your Password',
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f44336; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #f44336; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔐 Password Reset</h1>
            </div>
            <div class="content">
              <h2>Hi ${name || 'there'},</h2>
              <p>We received a request to reset your password. Click the button below to set a new password:</p>
              <a href="${resetUrl}" class="button">Reset Password</a>
              <div class="warning">
                <strong>⚠️ Security Notice:</strong> This link will expire in 1 hour. If you didn't request this reset, please ignore this email.
              </div>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `Hi ${name || 'there'},\n\nReset your password: ${resetUrl}\n\nThis link expires in 1 hour.\n\nBest regards,\nThe Shechetai Team`
    });
}
async function sendPaymentReceiptEmail(email, name, amount, currency, invoiceUrl) {
    return sendEmail({
        to: email,
        subject: `Payment Receipt - $${amount.toFixed(2)}`,
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4caf50; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .receipt { background: white; border: 1px solid #ddd; padding: 20px; margin: 20px 0; border-radius: 5px; }
            .amount { font-size: 32px; font-weight: bold; color: #4caf50; }
            .button { display: inline-block; background: #4caf50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Payment Successful</h1>
            </div>
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>Thank you for your payment! Your transaction has been completed successfully.</p>
              <div class="receipt">
                <p><strong>Amount Paid:</strong></p>
                <div class="amount">${currency.toUpperCase()} $${amount.toFixed(2)}</div>
                <p style="margin-top: 20px;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              <a href="${invoiceUrl}" class="button">Download Invoice</a>
              <p>If you have any questions about this payment, please contact our support team.</p>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `Hi ${name},\n\nPayment successful!\nAmount: ${currency.toUpperCase()} $${amount.toFixed(2)}\nDate: ${new Date().toLocaleDateString()}\n\nDownload invoice: ${invoiceUrl}\n\nBest regards,\nThe Shechetai Team`
    });
}
async function sendSubscriptionNotification(email, name, type, planName, details) {
    const subjects = {
        activated: '🎉 Subscription Activated',
        cancelled: '❌ Subscription Cancelled',
        expiring: '⏰ Subscription Expiring Soon',
        renewed: '✅ Subscription Renewed'
    };
    return sendEmail({
        to: email,
        subject: subjects[type],
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .plan { background: white; border: 2px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 5px; text-align: center; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${subjects[type]}</h1>
            </div>
            <div class="content">
              <h2>Hi ${name},</h2>
              <div class="plan">
                <h3>${planName}</h3>
                ${details ? `<p>${details}</p>` : ''}
              </div>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `Hi ${name},\n\n${subjects[type]}\nPlan: ${planName}\n${details ? `\n${details}\n` : ''}\nBest regards,\nThe Shechetai Team`
    });
}
async function sendInvoiceEmail(email, name, invoiceNumber, amount, dueDate, invoiceUrl) {
    return sendEmail({
        to: email,
        subject: `Invoice ${invoiceNumber} - $${amount.toFixed(2)}`,
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2196f3; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .invoice { background: white; border: 1px solid #ddd; padding: 20px; margin: 20px 0; border-radius: 5px; }
            .button { display: inline-block; background: #2196f3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📄 New Invoice</h1>
            </div>
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>A new invoice is ready for your review:</p>
              <div class="invoice">
                <p><strong>Invoice #:</strong> ${invoiceNumber}</p>
                <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
                <p><strong>Due Date:</strong> ${dueDate}</p>
              </div>
              <a href="${invoiceUrl}" class="button">View Invoice</a>
              <p>Please ensure payment is made by the due date to avoid service interruption.</p>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `Hi ${name},\n\nNew Invoice\nInvoice #: ${invoiceNumber}\nAmount: $${amount.toFixed(2)}\nDue Date: ${dueDate}\n\nView invoice: ${invoiceUrl}\n\nBest regards,\nThe Shechetai Team`
    });
}
async function testEmailConfig() {
    try {
        const verified = await transporter.verify();
        return {
            success: true,
            message: 'Email configuration is valid'
        };
    } catch (error) {
        return {
            success: false,
            message: 'Email configuration failed',
            error
        };
    }
}
}),
"[project]/app/api/debug/email/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/helpers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2f$email$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email/email-service.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeFirebaseAdmin"])();
async function POST(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(request, async (req, authContext)=>{
        try {
            // Only allow admins to use debug tools
            if (authContext.role !== "super_admin" && authContext.role !== "admin") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])("Unauthorized: Admin access required", 403);
            }
            const body = await req.json();
            const { email, subject, message } = body;
            if (!email || !subject || !message) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])("Missing required fields: email, subject, message", 400);
            }
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])("Invalid email format", 400);
            }
            // Send test email
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2f$email$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                to: email,
                subject,
                html: `<p>${message}</p>`
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])({
                email,
                subject,
                sentAt: new Date().toISOString()
            }, "Test email sent successfully");
        } catch (error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        }
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11d72cf6._.js.map