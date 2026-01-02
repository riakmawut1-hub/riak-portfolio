# Complete Deployment Guide - Git & Render

## Step-by-Step: From Local to Production

---

## Part 1: Create GitHub Repository

### Step 1: Go to GitHub
1. Open your browser and go to [github.com](https://github.com)
2. **Sign in** to your account (or create one if you don't have it)

### Step 2: Create New Repository
1. Click the **"+"** icon in the top right corner
2. Select **"New repository"**
3. Fill in the details:
   - **Repository name**: `riak-portfolio` (or your preferred name)
   - **Description**: "Personal portfolio website - Supply Chain Professional & Web Developer"
   - **Visibility**: Choose **Public** (free) or **Private**
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** add .gitignore or license (we have these)
4. Click **"Create repository"**

### Step 3: Copy Repository URL
After creating, GitHub will show you a page with setup instructions. **Copy the repository URL** - it will look like:
```
https://github.com/YOUR_USERNAME/riak-portfolio.git
```
**Keep this URL handy!**

---

## Part 2: Initialize Git Locally

### Step 4: Open Terminal in Your Project
You're already in the project directory: `C:\Users\hp\OneDrive\Desktop\riak-portfolio`

### Step 5: Initialize Git
```bash
git init
```

### Step 6: Check Git Status
```bash
git status
```
You should see all your files listed as "untracked"

### Step 7: Add All Files
```bash
git add .
```

### Step 8: Create First Commit
```bash
git commit -m "Initial commit: Portfolio website with MongoDB integration"
```

### Step 9: Add Remote Repository
Replace `YOUR_USERNAME` with your actual GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/riak-portfolio.git
```

### Step 10: Rename Branch to Main (if needed)
```bash
git branch -M main
```

### Step 11: Push to GitHub
```bash
git push -u origin main
```

**You'll be prompted for:**
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)

---

## Part 3: Create GitHub Personal Access Token

### Step 12: Generate Token (if you don't have one)
1. Go to GitHub → Click your **profile picture** (top right)
2. Click **"Settings"**
3. Scroll down → Click **"Developer settings"** (left sidebar)
4. Click **"Personal access tokens"** → **"Tokens (classic)"**
5. Click **"Generate new token"** → **"Generate new token (classic)"**
6. Fill in:
   - **Note**: "Portfolio Deployment"
   - **Expiration**: Choose 90 days or "No expiration"
   - **Select scopes**: Check **"repo"** (this selects all repo permissions)
7. Click **"Generate token"**
8. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
9. Use this token as your password when pushing

### Step 13: Push Again (if Step 11 failed)
```bash
git push -u origin main
```
- Username: Your GitHub username
- Password: Paste the Personal Access Token

---

## Part 4: Verify on GitHub

### Step 14: Check Your Repository
1. Go back to your GitHub repository page
2. Refresh the page
3. You should see all your files there!

---

## Part 5: Deploy to Render

### Step 15: Sign Up/Login to Render
1. Go to [render.com](https://render.com)
2. Click **"Get Started for Free"** or **"Sign In"**
3. Sign up with your **GitHub account** (recommended - easier connection)

### Step 16: Create New Web Service
1. Once logged in, click **"New +"** button (top right)
2. Select **"Web Service"**

### Step 17: Connect GitHub Repository
1. Click **"Connect account"** if not already connected
2. Authorize Render to access your GitHub
3. Find and select your **"riak-portfolio"** repository
4. Click **"Connect"**

### Step 18: Configure Web Service
Fill in the settings:

**Basic Settings:**
- **Name**: `riak-portfolio` (or your choice)
- **Region**: Choose closest to you (e.g., "Oregon (US West)")
- **Branch**: `main` (should be auto-selected)
- **Root Directory**: Leave empty (or `./` if needed)
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

**Advanced Settings (click to expand):**
- **Auto-Deploy**: `Yes` (deploys automatically on git push)

### Step 19: Add Environment Variables
Click **"Add Environment Variable"** and add these:

1. **MONGODB_URI**
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string from `.env.local`
   - Example: `mongodb+srv://riakmawut1_db_user:b8vdVJ9r7I8XR0Nd@riak-portofolio.wscbal6.mongodb.net/portfolio?retryWrites=true&w=majority`

2. **CONTACT_EMAIL** (optional)
   - Key: `CONTACT_EMAIL`
   - Value: `riakmawut3@gmail.com`

3. **NODE_ENV**
   - Key: `NODE_ENV`
   - Value: `production`

### Step 20: Create Web Service
1. Scroll down and click **"Create Web Service"**
2. Render will start building your site (takes 5-10 minutes)

### Step 21: Wait for Deployment
- You'll see build logs in real-time
- Wait for: **"Your service is live"** message
- Your site URL will be: `https://riak-portfolio.onrender.com` (or similar)

---

## Part 6: Update MongoDB Network Access

### Step 22: Allow Render IPs
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click **"Network Access"** (left sidebar)
3. Click **"Add IP Address"**
4. Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
   - OR add Render's specific IP ranges if available
5. Click **"Confirm"**

---

## Part 7: Update Sitemap & Robots (Optional)

### Step 23: Update Domain in Code
After deployment, update these files with your actual Render URL:

**File: `app/sitemap.ts`**
- Replace `https://your-domain.onrender.com` with your actual URL

**File: `app/robots.ts`**
- Replace `https://your-domain.onrender.com` with your actual URL

**File: `public/robots.txt`**
- Replace `https://your-domain.onrender.com` with your actual URL

Then commit and push:
```bash
git add .
git commit -m "Update sitemap and robots.txt with production URL"
git push
```

---

## Part 8: Test Your Live Site

### Step 24: Test Everything
1. Visit your Render URL
2. Check all sections load correctly
3. **Test the contact form** - submit a message
4. Check MongoDB Atlas → Collections → `contacts` to see the submission

---

## Quick Command Reference

```bash
# Initialize git
git init

# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Add remote (first time only)
git remote add origin https://github.com/YOUR_USERNAME/riak-portfolio.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update description"
git push
```

---

## Troubleshooting

### Git Push Fails
- Make sure you're using Personal Access Token, not password
- Check your internet connection
- Verify repository URL is correct

### Render Build Fails
- Check build logs in Render dashboard
- Verify environment variables are set correctly
- Make sure MongoDB URI is correct

### Contact Form Not Working
- Verify `MONGODB_URI` is set in Render environment variables
- Check MongoDB Network Access allows Render IPs
- Check Render logs for errors

### Image Not Showing
- Verify `profile.png` is in `public/` folder
- Check file name matches exactly (case-sensitive)

---

## Next Steps After Deployment

1. ✅ Test contact form
2. ✅ Share your portfolio URL
3. ✅ Add to LinkedIn/resume
4. ✅ Monitor Render dashboard for any issues
5. ✅ Set up custom domain (optional - Render Pro plan)

---

**Need Help?** Check the logs in Render dashboard or MongoDB Atlas for error messages.

