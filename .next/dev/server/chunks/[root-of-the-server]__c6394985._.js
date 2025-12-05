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
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

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
    // Development mode: Allow unauthenticated access for testing (very permissive)
    if ("TURBOPACK compile-time truthy", 1) {
        // In dev mode, always allow access with dev credentials unless explicit auth fails
        if (!authHeader && !apiKey) {
            console.log("📍 Development mode: Allowing unauthenticated access (no auth header)");
            return {
                userId: "dev-user",
                email: "dev@localhost",
                role: "user",
                isSuperAdmin: false,
                firebaseUid: "dev-user",
                ip,
                userAgent
            };
        }
        // If dev mode AND Bearer token says "dev-mode-token", allow it
        if (authHeader === "Bearer dev-mode-token") {
            console.log("📍 Development mode: Using dev-mode-token");
            return {
                userId: "dev-user",
                email: "dev@localhost",
                role: "super_admin",
                isSuperAdmin: true,
                firebaseUid: "dev-user",
                ip,
                userAgent
            };
        }
    }
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
            // If user doesn't exist in Firestore, create a default user entry
            if (!userDoc.exists) {
                console.log("Creating new user entry for:", decodedToken.uid);
                const newUserData = {
                    userId: decodedToken.uid,
                    email: decodedToken.email || "",
                    role: "user",
                    status: "active",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
                await db.collection("users").doc(decodedToken.uid).set(newUserData);
                return {
                    userId: decodedToken.uid,
                    email: decodedToken.email || "",
                    role: "user",
                    isSuperAdmin: false,
                    firebaseUid: decodedToken.uid,
                    ip,
                    userAgent
                };
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
function authorize(context, requiredRole = "user") {
    if (!context) {
        console.log("❌ Authorization failed: No context");
        return false;
    }
    console.log(`✅ Authorization check: role=${context.role}, requiredRole=${requiredRole}, isSuperAdmin=${context.isSuperAdmin}`);
    if (requiredRole === "super_admin") {
        const allowed = context.isSuperAdmin;
        console.log(`   Super admin check: ${allowed}`);
        return allowed;
    }
    if (requiredRole === "admin") {
        const allowed = context.role === "super_admin" || context.role === "admin";
        console.log(`   Admin check: ${allowed}`);
        return allowed;
    }
    // For "user" role, allow anyone authenticated
    console.log(`   User check: allowed (authenticated)`);
    return true;
}
async function withAuth(request, handler, requiredRole = "user") {
    try {
        // In development mode, ALWAYS allow access
        if ("TURBOPACK compile-time truthy", 1) {
            console.log(`✅ DEV MODE: Allowing access to ${request.nextUrl.pathname}`);
            const devContext = {
                userId: "dev-user",
                email: "dev@localhost",
                role: "super_admin",
                isSuperAdmin: true,
                firebaseUid: "dev-user",
                ip: "127.0.0.1",
                userAgent: "PostmanRuntime"
            };
            return await handler(request, devContext);
        }
        //TURBOPACK unreachable
        ;
        // Production: Apply rate limiting and authentication
        const rateLimit = undefined;
    } catch (error) {
        console.error("❌ withAuth error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Internal server error",
            details: String(error)
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * File Upload API Endpoint
 * POST /api/upload - Upload file
 * DELETE /api/upload?key=xxx - Delete file
 */ __turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/middleware.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// Upload directory
const UPLOAD_DIR = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'public', 'uploads');
// Ensure upload directory exists
async function ensureUploadDir() {
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(UPLOAD_DIR)) {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(UPLOAD_DIR, {
            recursive: true
        });
    }
}
/**
 * POST - Upload file
 */ async function handleUpload(req) {
    try {
        await ensureUploadDir();
        const formData = await req.formData();
        const file = formData.get('file');
        const folder = formData.get('folder') || 'uploads';
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided'
            }, {
                status: 400
            });
        }
        // Generate unique filename
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);
        const extension = file.name.split('.').pop();
        const nameWithoutExt = file.name.replace(`.${extension}`, '').replace(/[^a-z0-9]/gi, '-').toLowerCase();
        const fileName = `${nameWithoutExt}-${timestamp}-${random}.${extension}`;
        // Create folder path
        const folderPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(UPLOAD_DIR, folder);
        if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(folderPath)) {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(folderPath, {
                recursive: true
            });
        }
        // Save file
        const buffer = Buffer.from(await file.arrayBuffer());
        const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(folderPath, fileName);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, buffer);
        // Return file info
        const key = `${folder}/${fileName}`;
        const url = `/uploads/${key}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            name: file.name,
            size: file.size,
            type: file.type,
            url,
            key,
            uploadedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Upload error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Upload failed'
        }, {
            status: 500
        });
    }
}
/**
 * DELETE - Delete file
 */ async function handleDelete(req) {
    try {
        const { searchParams } = new URL(req.url);
        const key = searchParams.get('key');
        if (!key) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file key provided'
            }, {
                status: 400
            });
        }
        // Delete file
        const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(UPLOAD_DIR, key);
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(filePath)) {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["unlink"])(filePath);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        console.error('Delete error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Delete failed'
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(req, handleUpload);
}
async function DELETE(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(req, handleDelete);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c6394985._.js.map