module.exports = [
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
let transporter = null;
// Provider options: 'gmail', 'sendgrid', 'ses', 'smtp'
const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || 'smtp';
try {
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
} catch (error) {
    console.error('Email transporter initialization error:', error);
    transporter = null;
}
async function sendEmail(options) {
    try {
        if (!transporter) {
            throw new Error('Email service is not properly configured. Please check SMTP settings.');
        }
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
        if (!transporter) {
            return {
                success: false,
                message: 'Email configuration failed',
                error: 'Transporter not initialized'
            };
        }
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2eb5ef19._.js.map