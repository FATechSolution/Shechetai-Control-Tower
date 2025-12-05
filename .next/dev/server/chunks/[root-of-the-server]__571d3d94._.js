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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

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
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/lib/stripe/stripe-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stripe Server-Side SDK
 * Used for backend payment processing
 */ __turbopack_context__.s([
    "attachPaymentMethod",
    ()=>attachPaymentMethod,
    "cancelSubscription",
    ()=>cancelSubscription,
    "createCustomer",
    ()=>createCustomer,
    "createPaymentIntent",
    ()=>createPaymentIntent,
    "createPrice",
    ()=>createPrice,
    "createProduct",
    ()=>createProduct,
    "createRefund",
    ()=>createRefund,
    "createSubscription",
    ()=>createSubscription,
    "detachPaymentMethod",
    ()=>detachPaymentMethod,
    "getInvoice",
    ()=>getInvoice,
    "listInvoices",
    ()=>listInvoices,
    "listPaymentMethods",
    ()=>listPaymentMethods,
    "setDefaultPaymentMethod",
    ()=>setDefaultPaymentMethod,
    "stripe",
    ()=>stripe,
    "updateSubscription",
    ()=>updateSubscription,
    "verifyWebhookSignature",
    ()=>verifyWebhookSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)");
;
// Check if we're in build mode (environment variables might not be available)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
    console.warn('⚠️ STRIPE_SECRET_KEY not available (build time). Using placeholder.');
}
const stripe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](stripeSecretKey || 'sk_test_placeholder_for_build', {
    apiVersion: '2025-11-17.clover',
    typescript: true
});
async function createPaymentIntent(amount, currency = 'usd', metadata) {
    return await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency,
        metadata,
        automatic_payment_methods: {
            enabled: true
        }
    });
}
async function createCustomer(email, name, metadata) {
    return await stripe.customers.create({
        email,
        name,
        metadata
    });
}
async function createSubscription(customerId, priceId, metadata) {
    return await stripe.subscriptions.create({
        customer: customerId,
        items: [
            {
                price: priceId
            }
        ],
        metadata,
        payment_behavior: 'default_incomplete',
        payment_settings: {
            save_default_payment_method: 'on_subscription'
        },
        expand: [
            'latest_invoice.payment_intent'
        ]
    });
}
async function cancelSubscription(subscriptionId) {
    return await stripe.subscriptions.cancel(subscriptionId);
}
async function updateSubscription(subscriptionId, priceId) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    return await stripe.subscriptions.update(subscriptionId, {
        items: [
            {
                id: subscription.items.data[0].id,
                price: priceId
            }
        ]
    });
}
async function listPaymentMethods(customerId) {
    return await stripe.paymentMethods.list({
        customer: customerId,
        type: 'card'
    });
}
async function attachPaymentMethod(paymentMethodId, customerId) {
    return await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customerId
    });
}
async function detachPaymentMethod(paymentMethodId) {
    return await stripe.paymentMethods.detach(paymentMethodId);
}
async function setDefaultPaymentMethod(customerId, paymentMethodId) {
    return await stripe.customers.update(customerId, {
        invoice_settings: {
            default_payment_method: paymentMethodId
        }
    });
}
async function createProduct(name, description, metadata) {
    return await stripe.products.create({
        name,
        description,
        metadata
    });
}
async function createPrice(productId, unitAmount, currency = 'usd', recurring) {
    return await stripe.prices.create({
        product: productId,
        unit_amount: Math.round(unitAmount * 100),
        currency,
        recurring
    });
}
async function getInvoice(invoiceId) {
    return await stripe.invoices.retrieve(invoiceId);
}
async function listInvoices(customerId, limit = 10) {
    return await stripe.invoices.list({
        customer: customerId,
        limit
    });
}
async function createRefund(paymentIntentId, amount, reason) {
    return await stripe.refunds.create({
        payment_intent: paymentIntentId,
        amount: amount ? Math.round(amount * 100) : undefined,
        reason
    });
}
function verifyWebhookSignature(payload, signature, secret) {
    return stripe.webhooks.constructEvent(payload, signature, secret);
}
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
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

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
"[project]/app/api/webhooks/stripe/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Stripe Webhook Handler
 * Handles Stripe events like payment success, subscription changes, etc.
 */ __turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stripe$2f$stripe$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stripe/stripe-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2f$email$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email/email-service.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
async function POST(req) {
    try {
        const body = await req.text();
        const signature = req.headers.get('stripe-signature');
        // Verify webhook signature
        let event;
        try {
            event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stripe$2f$stripe$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyWebhookSignature"])(body, signature, webhookSecret);
        } catch (err) {
            console.error('⚠️ Webhook signature verification failed:', err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid signature'
            }, {
                status: 400
            });
        }
        console.log('✅ Webhook event received:', event.type);
        const { db } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeFirebaseAdmin"])();
        // Handle different event types
        switch(event.type){
            // Payment succeeded
            case 'payment_intent.succeeded':
                {
                    const paymentIntent = event.data.object;
                    console.log('💰 Payment succeeded:', paymentIntent.id);
                    // Update payment status in database
                    const paymentRef = db.collection('payments').doc(paymentIntent.id);
                    await paymentRef.set({
                        status: 'succeeded',
                        amount: paymentIntent.amount / 100,
                        currency: paymentIntent.currency,
                        customerId: paymentIntent.customer,
                        metadata: paymentIntent.metadata,
                        updatedAt: new Date().toISOString()
                    }, {
                        merge: true
                    });
                    // Send receipt email if customer email is available
                    if (paymentIntent.receipt_email) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2f$email$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendPaymentReceiptEmail"])(paymentIntent.receipt_email, paymentIntent.metadata?.customerName || 'Customer', paymentIntent.amount / 100, paymentIntent.currency, `/dashboard/invoices/${paymentIntent.id}`);
                    }
                    break;
                }
            // Payment failed
            case 'payment_intent.payment_failed':
                {
                    const paymentIntent = event.data.object;
                    console.log('❌ Payment failed:', paymentIntent.id);
                    await db.collection('payments').doc(paymentIntent.id).set({
                        status: 'failed',
                        error: paymentIntent.last_payment_error?.message,
                        updatedAt: new Date().toISOString()
                    }, {
                        merge: true
                    });
                    break;
                }
            // Subscription created
            case 'customer.subscription.created':
                {
                    const subscription = event.data.object;
                    console.log('📅 Subscription created:', subscription.id);
                    await db.collection('subscriptions').doc(subscription.id).set({
                        userId: subscription.metadata?.userId,
                        customerId: subscription.customer,
                        status: subscription.status,
                        planId: subscription.items.data[0].price.id,
                        currentPeriodStart: new Date(subscription.current_period_start * 1000).toISOString(),
                        currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
                        cancelAtPeriodEnd: subscription.cancel_at_period_end,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    });
                    // Send notification
                    if (subscription.metadata?.userEmail) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2f$email$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendSubscriptionNotification"])(subscription.metadata.userEmail, subscription.metadata.userName || 'Customer', 'activated', subscription.metadata.planName || 'Subscription', 'Your subscription is now active!');
                    }
                    break;
                }
            // Subscription updated
            case 'customer.subscription.updated':
                {
                    const subscription = event.data.object;
                    console.log('🔄 Subscription updated:', subscription.id);
                    await db.collection('subscriptions').doc(subscription.id).set({
                        status: subscription.status,
                        currentPeriodStart: new Date(subscription.current_period_start * 1000).toISOString(),
                        currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
                        cancelAtPeriodEnd: subscription.cancel_at_period_end,
                        updatedAt: new Date().toISOString()
                    }, {
                        merge: true
                    });
                    break;
                }
            // Subscription deleted
            case 'customer.subscription.deleted':
                {
                    const subscription = event.data.object;
                    console.log('🗑️ Subscription deleted:', subscription.id);
                    await db.collection('subscriptions').doc(subscription.id).set({
                        status: 'canceled',
                        canceledAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }, {
                        merge: true
                    });
                    // Send notification
                    if (subscription.metadata?.userEmail) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2f$email$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendSubscriptionNotification"])(subscription.metadata.userEmail, subscription.metadata.userName || 'Customer', 'cancelled', subscription.metadata.planName || 'Subscription', 'Your subscription has been cancelled.');
                    }
                    break;
                }
            // Invoice paid
            case 'invoice.paid':
                {
                    const invoice = event.data.object;
                    console.log('✅ Invoice paid:', invoice.id);
                    await db.collection('invoices').doc(invoice.id).set({
                        subscriptionId: invoice.subscription,
                        customerId: invoice.customer,
                        amount: invoice.amount_paid / 100,
                        currency: invoice.currency,
                        status: 'paid',
                        paidAt: new Date(invoice.status_transitions.paid_at * 1000).toISOString(),
                        invoiceUrl: invoice.hosted_invoice_url,
                        invoicePdf: invoice.invoice_pdf,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    });
                    break;
                }
            // Invoice payment failed
            case 'invoice.payment_failed':
                {
                    const invoice = event.data.object;
                    console.log('❌ Invoice payment failed:', invoice.id);
                    await db.collection('invoices').doc(invoice.id).set({
                        status: 'payment_failed',
                        updatedAt: new Date().toISOString()
                    }, {
                        merge: true
                    });
                    break;
                }
            // Customer created
            case 'customer.created':
                {
                    const customer = event.data.object;
                    console.log('👤 Customer created:', customer.id);
                    await db.collection('stripeCustomers').doc(customer.id).set({
                        userId: customer.metadata?.userId,
                        email: customer.email,
                        name: customer.name,
                        createdAt: new Date().toISOString()
                    });
                    break;
                }
            // Payment method attached
            case 'payment_method.attached':
                {
                    const paymentMethod = event.data.object;
                    console.log('💳 Payment method attached:', paymentMethod.id);
                    await db.collection('paymentMethods').doc(paymentMethod.id).set({
                        customerId: paymentMethod.customer,
                        type: paymentMethod.type,
                        card: paymentMethod.card ? {
                            brand: paymentMethod.card.brand,
                            last4: paymentMethod.card.last4,
                            expMonth: paymentMethod.card.exp_month,
                            expYear: paymentMethod.card.exp_year
                        } : null,
                        createdAt: new Date().toISOString()
                    });
                    break;
                }
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            received: true
        });
    } catch (error) {
        console.error('❌ Webhook error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Webhook handler failed'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__571d3d94._.js.map