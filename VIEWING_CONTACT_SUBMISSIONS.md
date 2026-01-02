# How to View Contact Form Submissions

## Current Setup

Your contact form saves all submissions to **MongoDB Atlas**. Submissions are NOT automatically emailed to you.

## How to View Submissions

### Option 1: MongoDB Atlas Web Interface (Easiest)

1. **Go to MongoDB Atlas**: https://cloud.mongodb.com
2. **Sign in** to your account
3. **Click on your cluster** (`riak-portofolio`)
4. Click **"Browse Collections"**
5. You'll see a database called `portfolio` (or whatever you named it)
6. Click on the **`contacts`** collection
7. **All submissions** will be listed there with:
   - Name
   - Email
   - Subject
   - Message
   - Created date

### Option 2: MongoDB Compass (Desktop App)

1. Download **MongoDB Compass**: https://www.mongodb.com/products/compass
2. Connect using your MongoDB connection string
3. Browse the `contacts` collection
4. View, search, and export submissions

---

## Adding Email Notifications (Optional)

If you want to receive emails when someone submits the form, you have these options:

### Option A: Resend (Recommended - Free tier available)
- **Free**: 3,000 emails/month
- **Easy setup**: Simple API
- **Best for**: Personal portfolios

### Option B: SendGrid
- **Free**: 100 emails/day
- **Reliable**: Enterprise-grade
- **Best for**: Professional use

### Option C: Nodemailer with Gmail
- **Free**: Uses your Gmail account
- **Setup**: Requires app password
- **Best for**: Quick setup with existing email

---

## Quick Setup: Add Email Notifications

I can help you add email notifications using **Resend** (easiest). Here's what we'd need to do:

1. **Sign up for Resend**: https://resend.com (free)
2. **Get API key** from Resend dashboard
3. **Add to Render environment variables**: `RESEND_API_KEY`
4. **Update contact API** to send emails
5. **Test** the email notifications

**Would you like me to set this up for you?**

---

## Current Workflow

1. Someone fills out your contact form
2. Form submission is saved to MongoDB
3. User sees success message
4. **You check MongoDB Atlas** to see the submission
5. You can reply manually to the email address provided

---

## Tips

- **Check MongoDB regularly** for new submissions
- **Set up email notifications** if you want instant alerts
- **Export data** from MongoDB if you need to keep records
- **Reply to submissions** using the email address stored in MongoDB

---

**Need help setting up email notifications?** Let me know and I'll guide you through it!

