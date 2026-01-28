# Portfolio Deployment Guide - Vercel

A complete guide to deploy your React + Vite portfolio to Vercel with proper DevOps practices.

---

## Pre-Deployment Checklist

### 1. Code Quality & Testing
```bash
# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Test production build locally
yarn build
yarn preview
```

### 2. Environment Variables
Check your `.env` files:
- `.env` - Default variables (DO NOT commit)
- `.env.development` - Development variables (DO NOT commit)
- `.env.production` - Production variables (DO NOT commit)

**Note:** All `.env` files are already in `.gitignore`.

### 3. Git Repository Setup
```bash
# Ensure all changes are committed
git status

# Commit any pending changes
git add .
git commit -m "chore: prepare for deployment"

# Push to GitHub (if not already done)
git push origin main
```

---

## Vercel Configuration

### 1. Create `vercel.json`
Already created at project root with optimal settings for Vite + React SPA.

### 2. Build Settings (Auto-detected by Vercel)
- **Framework:** Vite
- **Build Command:** `yarn build`
- **Output Directory:** `dist`
- **Install Command:** `yarn install`

---

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended for First Deploy)

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel to access your repositories

#### Step 2: Import Project
1. Click **"Add New Project"**
2. Select your portfolio repository
3. Vercel will auto-detect Vite configuration

#### Step 3: Configure Project
```
Project Name: portfolio (or your preferred name)
Framework Preset: Vite
Root Directory: client (if in monorepo) or ./ (if standalone)
Build Command: yarn build (auto-detected)
Output Directory: dist (auto-detected)
Install Command: yarn install (auto-detected)
```

#### Step 4: Environment Variables (if needed)
1. Click **"Environment Variables"**
2. Add any required variables:
   ```
   Variable Name: VITE_API_URL
   Value: https://your-api.com
   Environment: Production, Preview, Development
   ```
   **Note:** Vite requires `VITE_` prefix for client-side variables

#### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes for build completion
3. Access your live site at: `https://your-project.vercel.app`

---

### Option 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
# or
yarn global add vercel
```

#### Step 2: Login
```bash
vercel login
```

#### Step 3: Deploy to Preview
```bash
# First deployment (creates project)
vercel

# Follow prompts:
# Set up and deploy? Y
# Which scope? (your account)
# Link to existing project? N
# Project name? portfolio
# Directory? ./client (or ./)
# Override settings? N
```

#### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Post-Deployment

### 1. Custom Domain Setup (Optional)
1. Go to **Project Settings → Domains**
2. Add your custom domain: `yourname.com`
3. Update DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### 2. Performance Optimization
Vercel automatically provides:
- ✅ Edge caching
- ✅ Image optimization
- ✅ Compression (Brotli/gzip)
- ✅ HTTP/2 & HTTP/3
- ✅ SSL/TLS certificates

### 3. Monitoring
1. Access **Analytics** tab in Vercel dashboard
2. Monitor:
   - Page views
   - Load times
   - Core Web Vitals
   - Errors

---

## CI/CD Setup (Automatic Deployments)

### Vercel Auto-Deployments (Already Enabled)
Once connected to GitHub, Vercel automatically:
- ✅ Deploys **every push to `main`** → Production
- ✅ Deploys **every PR** → Preview deployment
- ✅ Runs build checks on every commit

### GitHub Branch Strategy
```bash
main (production)    → Auto-deploys to production
dev (staging)        → Auto-deploys to preview
feature/* (features) → Auto-deploys to preview
```

### Configure Branch Deployments
1. Go to **Project Settings → Git**
2. Set **Production Branch:** `main`
3. Enable **Preview Deployments:** All branches

---

## Environment Management

### Development
```bash
# Local development
yarn dev
# Uses .env.development
```

### Preview (Staging)
```bash
# Automatic on PR creation
# Uses Preview environment variables in Vercel
```

### Production
```bash
# Automatic on merge to main
# Uses Production environment variables in Vercel
```

### Adding Environment Variables
```bash
# Via Vercel CLI
vercel env add VITE_API_URL production

# Via Dashboard
Settings → Environment Variables → Add
```

---

## Rollback Strategy

### Option 1: Via Dashboard
1. Go to **Deployments** tab
2. Find previous successful deployment
3. Click **⋯ → Promote to Production**

### Option 2: Via Git
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

### Option 3: Via CLI
```bash
vercel rollback
```

---

## Troubleshooting

### Build Fails
```bash
# Test build locally first
yarn build

# Check build logs in Vercel dashboard
# Common issues:
# - TypeScript errors → Fix in code
# - Missing dependencies → Check package.json
# - Environment variables → Add in Vercel settings
```

### 404 on Refresh
Already handled in `vercel.json` with SPA routing configuration.

### Large Bundle Size
```bash
# Analyze bundle
npx vite-bundle-visualizer

# Optimize:
# - Code splitting
# - Lazy loading
# - Tree shaking
# - Image optimization
```

---

## Deployment Checklist

Before every deployment:
- [ ] Code is linted and formatted
- [ ] Build succeeds locally (`yarn build`)
- [ ] Preview works locally (`yarn preview`)
- [ ] All tests pass (if applicable)
- [ ] Changes are committed and pushed
- [ ] Environment variables are set in Vercel
- [ ] Domain DNS is configured (if using custom domain)

After deployment:
- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Links work properly
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Check browser console for errors
- [ ] Test performance (Lighthouse)

---

## Useful Commands

```bash
# Development
yarn dev                    # Start dev server
yarn build                  # Build for production
yarn preview               # Preview production build

# Code Quality
yarn lint                   # Check linting
yarn lint:fix              # Fix linting issues
yarn format                 # Format code
yarn format:check          # Check formatting

# Deployment
vercel                      # Deploy to preview
vercel --prod              # Deploy to production
vercel ls                   # List deployments
vercel logs                 # View logs
vercel env ls              # List environment variables
vercel domains ls          # List domains
vercel rollback            # Rollback deployment
```

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)

---

## Support

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Status: https://vercel-status.com

**Portfolio Issues:**
- Create issue in your GitHub repository
- Check deployment logs in Vercel dashboard
