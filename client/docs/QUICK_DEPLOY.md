# Quick Deploy Guide - TL;DR

**Goal:** Deploy your portfolio to Vercel in under 5 minutes.

---

## Prerequisites
- ✅ GitHub account
- ✅ Code pushed to GitHub repository
- ✅ Vercel account (free)

---

## Step-by-Step (First Time)

### 1. Test Locally (2 min)
```bash
cd /Users/manojranga/Desktop/projects/portfolio/client

# Install dependencies (if not done)
yarn install

# Run quality checks
yarn lint
yarn format

# Build and test
yarn build
yarn preview
```

**Expected:** Site opens at `http://localhost:4173` with no errors.

---

### 2. Push to GitHub (1 min)
```bash
# Commit all changes
git add .
git commit -m "chore: ready for deployment"
git push origin main
```

---

### 3. Deploy to Vercel (2 min)

#### Via Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your portfolio repository
5. Click **"Deploy"** (Vercel auto-detects Vite settings)
6. Wait ~90 seconds
7. **Done!** Your site is live at `https://your-project.vercel.app`

#### Via CLI (Alternative)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## That's It!

Your portfolio is now live. Access it at the URL provided by Vercel.

---

## Next Steps (Optional)

### Custom Domain
1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Update DNS at your domain provider

### Auto-Deployments
Already enabled! Every push to `main` = automatic deployment.

### Environment Variables
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables with `VITE_` prefix

---

## Troubleshooting

**Build fails?**
```bash
# Check locally first
yarn build
```

**404 on page refresh?**
Already fixed in `vercel.json`

**Need help?**
See full guide: `docs/DEPLOYMENT_GUIDE.md`
