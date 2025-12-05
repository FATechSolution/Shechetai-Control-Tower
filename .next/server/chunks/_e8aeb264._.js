module.exports=[70478,e=>{"use strict";let t;var a=e.i(29508);let r=process.env.EMAIL_FROM||"noreply@shechetai.com",n=process.env.EMAIL_FROM_NAME||"Shechetai Control Tower";switch(process.env.EMAIL_PROVIDER||"smtp"){case"gmail":t=a.default.createTransport({service:"gmail",auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD}});break;case"sendgrid":t=a.default.createTransport({host:"smtp.sendgrid.net",port:587,auth:{user:"apikey",pass:process.env.SENDGRID_API_KEY}});break;case"ses":t=a.default.createTransport({host:process.env.AWS_SES_HOST||"email-smtp.us-east-1.amazonaws.com",port:587,auth:{user:process.env.AWS_SES_ACCESS_KEY,pass:process.env.AWS_SES_SECRET_KEY}});break;default:t=a.default.createTransport({host:process.env.SMTP_HOST||"localhost",port:parseInt(process.env.SMTP_PORT||"587"),secure:"true"===process.env.SMTP_SECURE,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}})}async function o(e){try{let a=await t.sendMail({from:`"${n}" <${r}>`,to:Array.isArray(e.to)?e.to.join(", "):e.to,subject:e.subject,text:e.text,html:e.html,attachments:e.attachments});return console.log("✅ Email sent:",a.messageId),{success:!0,messageId:a.messageId}}catch(e){throw console.error("❌ Email error:",e),e}}async function i(e,t,a,r,n){return o({to:e,subject:`Payment Receipt - $${a.toFixed(2)}`,html:`
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
              <h2>Hi ${t},</h2>
              <p>Thank you for your payment! Your transaction has been completed successfully.</p>
              <div class="receipt">
                <p><strong>Amount Paid:</strong></p>
                <div class="amount">${r.toUpperCase()} $${a.toFixed(2)}</div>
                <p style="margin-top: 20px;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              <a href="${n}" class="button">Download Invoice</a>
              <p>If you have any questions about this payment, please contact our support team.</p>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>\xa9 ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,text:`Hi ${t},

Payment successful!
Amount: ${r.toUpperCase()} $${a.toFixed(2)}
Date: ${new Date().toLocaleDateString()}

Download invoice: ${n}

Best regards,
The Shechetai Team`})}async function s(e,t,a,r,n){let i={activated:"🎉 Subscription Activated",cancelled:"❌ Subscription Cancelled",expiring:"⏰ Subscription Expiring Soon",renewed:"✅ Subscription Renewed"};return o({to:e,subject:i[a],html:`
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
              <h1>${i[a]}</h1>
            </div>
            <div class="content">
              <h2>Hi ${t},</h2>
              <div class="plan">
                <h3>${r}</h3>
                ${n?`<p>${n}</p>`:""}
              </div>
              <p>Best regards,<br>The Shechetai Team</p>
            </div>
            <div class="footer">
              <p>\xa9 ${new Date().getFullYear()} Shechetai Control Tower. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,text:`Hi ${t},

${i[a]}
Plan: ${r}
${n?`
${n}
`:""}
Best regards,
The Shechetai Team`})}e.s(["sendPaymentReceiptEmail",()=>i,"sendSubscriptionNotification",()=>s])},17948,e=>e.a(async(t,a)=>{try{var r=e.i(89171),n=e.i(94194),o=e.i(707),i=e.i(70478),s=t([o]);[o]=s.then?(await s)():s;let c=process.env.STRIPE_WEBHOOK_SECRET;async function d(e){try{let t,a=await e.text(),s=e.headers.get("stripe-signature");try{t=(0,n.verifyWebhookSignature)(a,s,c)}catch(e){return console.error("⚠️ Webhook signature verification failed:",e),r.NextResponse.json({error:"Invalid signature"},{status:400})}console.log("✅ Webhook event received:",t.type);let{db:d}=(0,o.initializeFirebaseAdmin)();switch(t.type){case"payment_intent.succeeded":{let e=t.data.object;console.log("💰 Payment succeeded:",e.id);let a=d.collection("payments").doc(e.id);await a.set({status:"succeeded",amount:e.amount/100,currency:e.currency,customerId:e.customer,metadata:e.metadata,updatedAt:new Date().toISOString()},{merge:!0}),e.receipt_email&&await (0,i.sendPaymentReceiptEmail)(e.receipt_email,e.metadata?.customerName||"Customer",e.amount/100,e.currency,`/dashboard/invoices/${e.id}`);break}case"payment_intent.payment_failed":{let e=t.data.object;console.log("❌ Payment failed:",e.id),await d.collection("payments").doc(e.id).set({status:"failed",error:e.last_payment_error?.message,updatedAt:new Date().toISOString()},{merge:!0});break}case"customer.subscription.created":{let e=t.data.object;console.log("📅 Subscription created:",e.id),await d.collection("subscriptions").doc(e.id).set({userId:e.metadata?.userId,customerId:e.customer,status:e.status,planId:e.items.data[0].price.id,currentPeriodStart:new Date(1e3*e.current_period_start).toISOString(),currentPeriodEnd:new Date(1e3*e.current_period_end).toISOString(),cancelAtPeriodEnd:e.cancel_at_period_end,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),e.metadata?.userEmail&&await (0,i.sendSubscriptionNotification)(e.metadata.userEmail,e.metadata.userName||"Customer","activated",e.metadata.planName||"Subscription","Your subscription is now active!");break}case"customer.subscription.updated":{let e=t.data.object;console.log("🔄 Subscription updated:",e.id),await d.collection("subscriptions").doc(e.id).set({status:e.status,currentPeriodStart:new Date(1e3*e.current_period_start).toISOString(),currentPeriodEnd:new Date(1e3*e.current_period_end).toISOString(),cancelAtPeriodEnd:e.cancel_at_period_end,updatedAt:new Date().toISOString()},{merge:!0});break}case"customer.subscription.deleted":{let e=t.data.object;console.log("🗑️ Subscription deleted:",e.id),await d.collection("subscriptions").doc(e.id).set({status:"canceled",canceledAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{merge:!0}),e.metadata?.userEmail&&await (0,i.sendSubscriptionNotification)(e.metadata.userEmail,e.metadata.userName||"Customer","cancelled",e.metadata.planName||"Subscription","Your subscription has been cancelled.");break}case"invoice.paid":{let e=t.data.object;console.log("✅ Invoice paid:",e.id),await d.collection("invoices").doc(e.id).set({subscriptionId:e.subscription,customerId:e.customer,amount:e.amount_paid/100,currency:e.currency,status:"paid",paidAt:new Date(1e3*e.status_transitions.paid_at).toISOString(),invoiceUrl:e.hosted_invoice_url,invoicePdf:e.invoice_pdf,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()});break}case"invoice.payment_failed":{let e=t.data.object;console.log("❌ Invoice payment failed:",e.id),await d.collection("invoices").doc(e.id).set({status:"payment_failed",updatedAt:new Date().toISOString()},{merge:!0});break}case"customer.created":{let e=t.data.object;console.log("👤 Customer created:",e.id),await d.collection("stripeCustomers").doc(e.id).set({userId:e.metadata?.userId,email:e.email,name:e.name,createdAt:new Date().toISOString()});break}case"payment_method.attached":{let e=t.data.object;console.log("💳 Payment method attached:",e.id),await d.collection("paymentMethods").doc(e.id).set({customerId:e.customer,type:e.type,card:e.card?{brand:e.card.brand,last4:e.card.last4,expMonth:e.card.exp_month,expYear:e.card.exp_year}:null,createdAt:new Date().toISOString()});break}default:console.log(`Unhandled event type: ${t.type}`)}return r.NextResponse.json({received:!0})}catch(e){return console.error("❌ Webhook error:",e),r.NextResponse.json({error:"Webhook handler failed"},{status:500})}}e.s(["POST",()=>d]),a()}catch(e){a(e)}},!1),33009,e=>e.a(async(t,a)=>{try{var r=e.i(47909),n=e.i(74017),o=e.i(96250),i=e.i(59756),s=e.i(61916),d=e.i(14444),c=e.i(10680),l=e.i(69741),u=e.i(16795),p=e.i(87718),h=e.i(95169),m=e.i(47587),g=e.i(66012),b=e.i(70101),v=e.i(26937),S=e.i(10372),w=e.i(93695);e.i(52474);var f=e.i(220),y=e.i(17948),x=t([y]);[y]=x.then?(await x)():x;let _=new r.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/webhooks/stripe/route",pathname:"/api/webhooks/stripe",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/webhooks/stripe/route.ts",nextConfigOutput:"",userland:y}),{workAsyncStorage:A,workUnitAsyncStorage:I,serverHooks:P}=_;function E(){return(0,o.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:I})}async function R(e,t,a){_.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let r="/api/webhooks/stripe/route";r=r.replace(/\/index$/,"")||"/";let o=await _.prepare(e,t,{srcPage:r,multiZoneDraftMode:!1});if(!o)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:y,params:x,nextConfig:E,parsedUrl:R,isDraftMode:A,prerenderManifest:I,routerServerContext:P,isOnDemandRevalidate:T,revalidateOnlyGenerated:C,resolvedPathname:O,clientReferenceManifest:D,serverActionsManifest:k}=o,$=(0,l.normalizeAppPath)(r),N=!!(I.dynamicRoutes[$]||I.routes[O]),M=async()=>((null==P?void 0:P.render404)?await P.render404(e,t,R,!1):t.end("This page could not be found"),null);if(N&&!A){let e=!!I.routes[O],t=I.dynamicRoutes[$];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await M();throw new w.NoFallbackError}}let j=null;!N||_.isDev||A||(j=O,j="/index"===j?"/":j);let H=!0===_.isDev||!N,U=N&&!H;k&&D&&(0,d.setReferenceManifestsSingleton)({page:r,clientReferenceManifest:D,serverActionsManifest:k,serverModuleMap:(0,c.createServerModuleMap)({serverActionsManifest:k})});let F=e.method||"GET",q=(0,s.getTracer)(),W=q.getActiveScopeSpan(),K={params:x,prerenderManifest:I,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:H,incrementalCache:(0,i.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>_.onRequestError(e,t,r,P)},sharedContext:{buildId:y}},L=new u.NodeNextRequest(e),Y=new u.NodeNextResponse(t),B=p.NextRequestAdapter.fromNodeNextRequest(L,(0,p.signalFromNodeResponse)(t));try{let o=async e=>_.handle(B,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=q.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==h.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let t=`${F} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${F} ${r}`)}),d=!!(0,i.getRequestMeta)(e,"minimalMode"),c=async i=>{var s,c;let l=async({previousCacheEntry:n})=>{try{if(!d&&T&&C&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await o(i);e.fetchMetrics=K.renderOpts.fetchMetrics;let s=K.renderOpts.pendingWaitUntil;s&&a.waitUntil&&(a.waitUntil(s),s=void 0);let c=K.renderOpts.collectedTags;if(!N)return await (0,g.sendResponse)(L,Y,r,K.renderOpts.pendingWaitUntil),null;{let e=await r.blob(),t=(0,b.toNodeOutgoingHttpHeaders)(r.headers);c&&(t[S.NEXT_CACHE_TAGS_HEADER]=c),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=S.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=S.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==n?void 0:n.isStale)&&await _.onRequestError(e,t,{routerKind:"App Router",routePath:r,routeType:"route",revalidateReason:(0,m.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})},P),t}},u=await _.handleResponse({req:e,nextConfig:E,cacheKey:j,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:C,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:d});if(!N)return null;if((null==u||null==(s=u.value)?void 0:s.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(c=u.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});d||t.setHeader("x-nextjs-cache",T?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,b.fromNodeOutgoingHttpHeaders)(u.value.headers);return d&&N||p.delete(S.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,v.getCacheControlHeader)(u.cacheControl)),await (0,g.sendResponse)(L,Y,new Response(u.value.body,{headers:p,status:u.value.status||200})),null};W?await c(W):await q.withPropagatedContext(e.headers,()=>q.trace(h.BaseServerSpan.handleRequest,{spanName:`${F} ${r}`,kind:s.SpanKind.SERVER,attributes:{"http.method":F,"http.target":e.url}},c))}catch(t){if(t instanceof w.NoFallbackError||await _.onRequestError(e,t,{routerKind:"App Router",routePath:$,routeType:"route",revalidateReason:(0,m.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})}),N)throw t;return await (0,g.sendResponse)(L,Y,new Response(null,{status:500})),null}}e.s(["handler",()=>R,"patchFetch",()=>E,"routeModule",()=>_,"serverHooks",()=>P,"workAsyncStorage",()=>A,"workUnitAsyncStorage",()=>I]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=_e8aeb264._.js.map