# 🚀 DEPLOYMENT CHECKLIST FOR VERCEL

**Purpose:** Quick reference guide for deploying your Shechetai Control Tower to production

---

## PRE-DEPLOYMENT (Do This First)

### 1. Verify Local Build
```bash
# From project root:
npm run build
npm run start
```
- [ ] Build completes without errors
- [ ] App starts on http://localhost:3000
- [ ] No TypeScript errors
- [ ] No console warnings

### 2. Run Local Tests
```bash
# Test API endpoints
curl http://localhost:3000/api/overview \
  -H "x-api-key: shechetai_super_secret_key_2025"

# Should return: { "success": true, "data": {...} }
```
- [ ] API responds correctly
- [ ] Authentication working

### 3. Commit Your Code
```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

---

## VERCEL SETUP (Critical)

### 1. Connect Repository
- [ ] Go to https://vercel.com
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Select "Shechetai-Control-Tower-Backend-"

### 2. Configure Environment Variables
Go to: Project Settings → Environment Variables

#### Add Firebase Client Variables:
```
NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyDsenipQE4hyz-j-Jti3MkPM-3_VERhGR8
```

```
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: shechetai-control-tower-projec.firebaseapp.com
```

```
NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: shechetai-control-tower-projec
```

```
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: shechetai-control-tower-projec.firebasestorage.app
```

```
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 284117800774
```

```
NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:284117800774:web:10526902848d1202f8f747
```

```
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
Value: G-GLYTK67GL0
```

#### Add Firebase Admin Variables:
```
FIREBASE_PROJECT_ID
Value: [Get from Firebase Console → Project Settings]
```

```
FIREBASE_CLIENT_EMAIL
Value: [Get from Firebase Console → Service Accounts]
```

```
FIREBASE_PRIVATE_KEY
Value: [Get from Firebase Console → Service Accounts → Generate Key]
```

#### Add Stripe Variables:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
Value: pk_test_xxxxx (from Stripe Dashboard)
```

```
STRIPE_SECRET_KEY
Value: sk_test_xxxxx (from Stripe Dashboard)
```

```
STRIPE_WEBHOOK_SECRET
Value: whsec_xxxxx (from Stripe Webhooks)
```

#### Add Email Service Variables:
```
EMAIL_PROVIDER
Value: gmail
```

```
GMAIL_USER
Value: your.email@gmail.com
```

```
GMAIL_APP_PASSWORD
Value: [16-character app password from Gmail]
```

```
EMAIL_FROM
Value: noreply@shechetai.com
```

```
EMAIL_FROM_NAME
Value: Shechetai Control Tower
```

#### Add API Key:
```
SUPER_ADMIN_API_KEY
Value: shechetai_super_secret_key_2025
```

**Verification Checklist:**
- [ ] All Firebase variables added
- [ ] All Stripe variables added
- [ ] Email variables configured
- [ ] API key set

### 3. Configure Build Settings
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- [ ] All settings verified

---

## ICON FILES SETUP

### 1. Create Icon Files
Add these files to the `public/` directory in your project:

**Option A: Use Placeholder Icons**
```bash
# Create simple SVG icon
echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="#0066cc" width="100" height="100"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="white" font-size="60">S</text></svg>' > public/icon.svg

# Create PNG icon (32x32) - use an image editing tool
# For now, use same SVG as PNG by saving from browser
```

**Option B: Use Real Icons**
- Add your branded `icon.svg` (any size, preferably square)
- Add `icon-light-32x32.png` (exactly 32x32 pixels)

**Verification:**
- [ ] `public/icon.svg` exists
- [ ] `public/icon-light-32x32.png` exists (32x32 pixels)
- [ ] Both files are properly formatted

---

## DEPLOYMENT

### 1. Deploy to Vercel
```bash
# Option 1: Automatic (Recommended)
# Just push to main - Vercel auto-deploys
git push origin main

# Option 2: Manual
# Go to Vercel Dashboard → Deploy
# Click "Deploy" button
```

- [ ] Deployment triggered
- [ ] Build in progress

### 2. Monitor Build
- [ ] Visit https://vercel.com/dashboard
- [ ] Watch build logs
- [ ] Build should complete in 2-5 minutes
- [ ] No build errors

### 3. Get Production URL
- [ ] Note your Vercel URL (e.g., `https://project-name.vercel.app`)
- [ ] URL appears in Vercel dashboard when ready

---

## POST-DEPLOYMENT VERIFICATION

### 1. Test Frontend
- [ ] Visit your Vercel URL in browser
- [ ] Page loads without errors
- [ ] No console errors (press F12)
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive works

### 2. Test Authentication
- [ ] Firebase login works
- [ ] Can create account
- [ ] Can login with credentials
- [ ] Session persists on refresh

### 3. Test API Endpoints
```bash
# Replace YOUR_URL with your Vercel URL
curl https://YOUR_URL/api/overview \
  -H "x-api-key: shechetai_super_secret_key_2025"

# Should return successful response
```

### 4. Test Dashboard Pages
- [ ] Overview page loads
- [ ] Users page loads
- [ ] Agents page loads
- [ ] Teams page loads
- [ ] Billing page loads
- [ ] Other pages load

### 5. Test Key Features
- [ ] Create a test user (Users page)
- [ ] Create a test team (Teams page)
- [ ] Test API call (Debug tools or Test API page)
- [ ] Check email sending (if configured)

---

## TROUBLESHOOTING

### Issue: Firebase Auth Not Working
**Solution:**
1. Check Firebase variables in Vercel
2. Verify values match exactly (no extra spaces)
3. Redeploy: `git push origin main`

### Issue: Stripe Not Working
**Solution:**
1. Check Stripe keys in Vercel
2. Ensure you're using test keys (pk_test_, sk_test_)
3. Verify webhook secret is set

### Issue: CSP Errors in Console
**Solution:**
1. This is normal - CSP is working
2. Check `next.config.mjs` for proper headers
3. If blocking legitimate content, update CSP

### Issue: 404 for Icons
**Solution:**
1. Add icon files to `public/` directory
2. Commit and push to Vercel
3. Redeploy

### Issue: Build Failing
**Solution:**
1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variable
   - TypeScript error
   - Missing dependency
3. Fix locally, commit, push again

---

## MONITORING

### Set Up Vercel Analytics
- [ ] Go to Project Settings → Analytics
- [ ] Enable "Web Analytics"
- [ ] Monitor performance metrics

### Monitor Error Logs
- [ ] Go to Deployments tab
- [ ] Click latest deployment
- [ ] Check logs for errors
- [ ] Monitor daily

---

## CUSTOM DOMAIN (Optional)

### Add Custom Domain
1. Go to Vercel Project Settings → Domains
2. Add your domain name
3. Follow DNS setup instructions
4. Wait 24-48 hours for propagation

---

## SECURITY CHECKLIST

- [ ] All environment variables set
- [ ] API keys not exposed in code
- [ ] Firebase rules configured
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers set (`next.config.mjs`)
- [ ] Rate limiting enabled (in code)

---

## PRODUCTION BEST PRACTICES

### Data Backup
- [ ] Set up Firestore backup (automatic with Blaze plan)
- [ ] Export data monthly

### Monitoring
- [ ] Set up error tracking (Sentry optional)
- [ ] Monitor API response times
- [ ] Check database usage

### Updates
- [ ] Keep dependencies updated monthly
- [ ] Monitor security advisories
- [ ] Test updates in development first

### Scaling
- [ ] Monitor Firestore usage
- [ ] Scale Stripe plan as needed
- [ ] Increase rate limits if needed

---

## FINAL VERIFICATION CHECKLIST

Before going live to users:

- [ ] All environment variables set in Vercel
- [ ] Build completes without errors
- [ ] App loads at production URL
- [ ] No console errors
- [ ] API endpoints respond correctly
- [ ] Authentication works
- [ ] Dashboard pages load
- [ ] Security headers present
- [ ] Icons display correctly
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] Email service configured
- [ ] Stripe test mode working
- [ ] Rate limiting active
- [ ] Logging working

---

## LAUNCH CHECKLIST

Ready to announce to users:

- [ ] Domain configured (if using custom domain)
- [ ] All features tested
- [ ] Documentation updated
- [ ] Help/support setup
- [ ] Feedback mechanism ready
- [ ] Monitoring active
- [ ] Backups configured

---

## ROLLBACK PLAN

If something goes wrong:

1. Go to Vercel Deployments
2. Find previous working deployment
3. Click "Redeploy"
4. Previous version will be live again

---

**Estimated Time:** 30 minutes for complete setup and deployment

**Questions?** Check API_DOCUMENTATION.md or API_TESTING_COMPLETE.md

**Ready?** Let's deploy! 🚀
