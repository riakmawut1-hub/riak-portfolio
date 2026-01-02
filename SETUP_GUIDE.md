# Quick Setup Guide

## 🎯 What's Already Done

✅ Next.js project structure  
✅ Portfolio component with all sections  
✅ MongoDB connection setup  
✅ Contact form API endpoint  
✅ Security middleware (rate limiting)  
✅ Security headers configuration  
✅ TypeScript configuration  
✅ Tailwind CSS setup  

## 📋 What You Need to Do

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up MongoDB Atlas

1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. **Create Cluster**: Choose free tier (M0)
3. **Create Database User**:
   - Go to Database Access
   - Add New Database User
   - Choose Password authentication
   - Save username and password
4. **Network Access**:
   - Go to Network Access
   - Add IP Address: `0.0.0.0/0` (for Render deployment)
   - Or add your local IP for development
5. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name (e.g., `portfolio`)

### 3. Create Environment File

Create `.env.local` in the root directory:

```bash
# Copy the example file
cp env.example .env.local
```

Then edit `.env.local` and add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
CONTACT_EMAIL=riakmawut3@gmail.com
NODE_ENV=development
```

### 4. Add Your Profile Photo (Optional)

1. Upload your photo to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Copy the share link (format: `https://drive.google.com/file/d/FILE_ID/view`)
4. Extract the FILE_ID from the URL
5. Update `app/page.tsx` around line 200 (in the hero section):

Find this section:
```tsx
<div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white">
  <div className="text-center">
    <Camera size={64} className="mx-auto mb-4 opacity-50" />
    <p className="text-sm opacity-75">Profile Photo</p>
    <p className="text-xs opacity-50 mt-2">Upload via Google Drive</p>
  </div>
</div>
```

Replace with:
```tsx
<div className="aspect-square rounded-xl overflow-hidden">
  <img 
    src={`https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`}
    alt="Riak Mawut Profile"
    className="w-full h-full object-cover"
  />
</div>
```

### 5. Add Your CV (Optional)

1. Place your CV PDF in `public/resume.pdf`
2. The download button is already set up in the contact section

### 6. Test Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) and test:
- ✅ All sections load correctly
- ✅ Contact form submits successfully
- ✅ Check MongoDB Atlas to see the submission

### 7. Deploy to Render

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Render

1. Go to [Render](https://render.com)
2. Sign up/Login with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `riak-portfolio` (or your choice)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. **Environment Variables** (add these):
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `CONTACT_EMAIL`: `riakmawut3@gmail.com`
   - `NODE_ENV`: `production`
7. Click "Create Web Service"
8. Wait for deployment (first build takes ~5 minutes)

#### Step 3: Update MongoDB Network Access

After Render gives you a URL, you can optionally:
- Get Render's IP ranges (if available)
- Update MongoDB Atlas Network Access to only allow Render IPs
- Or keep `0.0.0.0/0` for simplicity (free tier is fine)

## 🎉 You're Done!

Your portfolio should now be live at: `https://your-app-name.onrender.com`

## 🔍 Troubleshooting

### Contact form not working?
- Check MongoDB connection string in Render environment variables
- Verify MongoDB Atlas network access allows Render's IPs
- Check Render logs for errors

### Build fails?
- Check that all dependencies are in `package.json`
- Verify Node.js version (should be 18+)
- Check Render build logs

### Images not loading?
- Verify Google Drive sharing settings
- Check that the file ID is correct in the URL

## 📞 Need Help?

Contact: riakmawut3@gmail.com

