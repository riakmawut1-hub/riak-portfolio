# Riak Mawut Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a contact form with MongoDB integration and security best practices.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Secure form submission with MongoDB storage
- **Security**: Rate limiting, input validation, security headers
- **SEO Optimized**: Meta tags and Open Graph support
- **Modern Stack**: Next.js 14, TypeScript, MongoDB

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB Atlas account (free tier available)
- Git (for deployment)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
MONGODB_URI=your_mongodb_atlas_connection_string
CONTACT_EMAIL=riakmawut3@gmail.com
```

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for Render deployment)
5. Get your connection string and add it to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
riak-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API endpoint
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Main portfolio component
│   └── globals.css            # Global styles
├── lib/
│   └── mongodb.ts             # MongoDB connection utility
├── models/
│   └── Contact.ts             # Contact form Mongoose schema
├── middleware.ts              # Rate limiting middleware
└── public/                    # Static assets (add your CV here)
```

## 🚢 Deployment to Render

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Create Render Web Service

1. Go to [Render](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `CONTACT_EMAIL`: Your email (optional)
   - `NODE_ENV`: `production`

### 3. MongoDB Atlas Network Access

In MongoDB Atlas:
- Go to Network Access
- Add IP Address: `0.0.0.0/0` (allows access from anywhere)
- Or add Render's specific IPs if available

## 🔒 Security Features

- ✅ Input sanitization and validation
- ✅ Rate limiting (5 requests per 15 minutes)
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Email validation (client + server)
- ✅ MongoDB connection with authentication
- ✅ Environment variables for secrets

## 📝 Customization

### Add Profile Photo

1. Upload your photo to Google Drive
2. Right-click → Share → Anyone with the link
3. Copy the file ID from the URL
4. Update `app/page.tsx` hero section:

```tsx
<img 
  src={`https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`}
  alt="Riak Mawut Profile"
  className="w-full h-full object-cover rounded-xl"
/>
```

### Add CV Download

1. Place your CV PDF in `public/resume.pdf`
2. Update the download button in `app/page.tsx`:

```tsx
<a 
  href="/resume.pdf" 
  download
  className="w-full flex items-center justify-center space-x-2 p-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
>
  <Download size={20} />
  <span>Download CV (PDF)</span>
</a>
```

## 🧪 Testing

- Test contact form submission
- Verify MongoDB connection
- Check rate limiting (try submitting 6+ times quickly)
- Test mobile responsiveness
- Verify all links work

## 📞 Support

For issues or questions, contact: riakmawut3@gmail.com

## 📄 License

© 2025 Riak Mawut Angui Atem — All rights reserved.

