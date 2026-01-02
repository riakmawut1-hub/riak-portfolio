# Resend Email Setup Guide

## Step-by-Step: Set Up Email Notifications

### Step 1: Sign Up for Resend

1. Go to **https://resend.com**
2. Click **"Sign Up"** (free account)
3. Sign up with your email: `riakmawut3@gmail.com`
4. Verify your email address

### Step 2: Get Your API Key

1. Once logged in, go to **"API Keys"** in the sidebar
2. Click **"Create API Key"**
3. Give it a name: `Portfolio Contact Form`
4. Select permissions: **"Sending access"**
5. Click **"Add"**
6. **COPY THE API KEY** immediately (you won't see it again!)
   - It starts with `re_` (e.g., `re_123456789...`)

### Step 3: Verify Your Domain (Optional but Recommended)

**For now, you can use Resend's default domain** (`onboarding@resend.dev`), but emails might go to spam.

**To use your own email domain later:**
1. Go to **"Domains"** in Resend
2. Click **"Add Domain"**
3. Add your domain (e.g., `riakmawut.com`)
4. Add the DNS records Resend provides
5. Wait for verification (usually a few minutes)

### Step 4: Add to Render Environment Variables

1. Go to your **Render dashboard**
2. Click on your **`riak-portfolio`** service
3. Go to **"Environment"** tab
4. Click **"Add Environment Variable"**

Add these two variables:

**Variable 1:**
- **Key**: `RESEND_API_KEY`
- **Value**: Paste your Resend API key (starts with `re_`)

**Variable 2:**
- **Key**: `CONTACT_EMAIL`
- **Value**: `riakmawut3@gmail.com`

5. Click **"Save Changes"**

### Step 5: Redeploy

1. Go to **"Manual Deploy"** in Render
2. Click **"Deploy latest commit"**
3. Wait for deployment to complete

### Step 6: Test It!

1. Visit your live site: https://riak-portfolio.onrender.com
2. Go to the **Contact** section
3. Fill out and submit the form
4. Check your email (`riakmawut3@gmail.com`) - you should receive a notification!

---

## Email Format

You'll receive emails with:
- **Subject**: "New Contact Form Submission: [Subject]" (or just "New Contact Form Submission")
- **Content**: 
  - Name
  - Email (clickable)
  - Subject (if provided)
  - Message
  - Timestamp
  - Reply button

---

## Troubleshooting

### Emails Not Arriving?

1. **Check Spam/Junk folder** - Resend emails might go to spam initially
2. **Verify API key** - Make sure it's correct in Render
3. **Check Render logs** - Look for email errors
4. **Verify domain** - If using custom domain, make sure it's verified

### Using Default Domain

The code uses `onboarding@resend.dev` as the sender. This works but:
- Emails might go to spam
- You can't reply directly
- **Solution**: Verify your own domain in Resend (free)

### Free Tier Limits

- **3,000 emails/month** (free)
- **100 emails/day** (free)
- Perfect for a portfolio site!

---

## Update Sender Email (After Domain Verification)

Once you verify your domain in Resend, update the sender email in `app/api/contact/route.ts`:

Change:
```typescript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

To:
```typescript
from: 'Portfolio Contact <contact@yourdomain.com>',
```

Then commit and push:
```bash
git add app/api/contact/route.ts
git commit -m "Update email sender to verified domain"
git push
```

---

## That's It!

Your contact form will now send you email notifications whenever someone submits a message. You'll also still have the submission saved in MongoDB for backup.

**Need help?** Check Resend's documentation: https://resend.com/docs

