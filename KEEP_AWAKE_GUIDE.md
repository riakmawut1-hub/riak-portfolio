# Keep Your Render Service Awake 24/7 (Free Solution)

Render's free tier spins down services after **15 minutes of inactivity**. This guide shows you how to keep your service awake using free monitoring services.

## ✅ Solution: Use a Free Uptime Monitoring Service

We've created a keep-alive endpoint at `/api/keep-alive` that you can ping regularly.

## 🚀 Setup Instructions

### Option 1: UptimeRobot (Recommended - Free)

1. **Sign up**: Go to [https://uptimerobot.com](https://uptimerobot.com) and create a free account
2. **Add Monitor**:
   - Click "Add New Monitor"
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: `Riak Portfolio Keep-Alive`
   - **URL**: `https://riak-portfolio.onrender.com/api/keep-alive`
   - **Monitoring Interval**: 5 minutes (free tier allows up to 50 monitors with 5-minute intervals)
   - Click "Create Monitor"

3. **Done!** UptimeRobot will ping your site every 5 minutes, keeping it awake 24/7

### Option 2: cron-job.org (Free)

1. **Sign up**: Go to [https://cron-job.org](https://cron-job.org) and create a free account
2. **Create Cron Job**:
   - Click "Create cronjob"
   - **Title**: `Keep Render Awake`
   - **Address**: `https://riak-portfolio.onrender.com/api/keep-alive`
   - **Schedule**: Every 5 minutes (`*/5 * * * *`)
   - Click "Create"

3. **Done!** Your site will be pinged every 5 minutes

### Option 3: EasyCron (Free)

1. **Sign up**: Go to [https://www.easycron.com](https://www.easycron.com)
2. **Create Cron Job**:
   - **Cron Job Name**: `Render Keep-Alive`
   - **URL**: `https://riak-portfolio.onrender.com/api/keep-alive`
   - **Schedule**: Every 5 minutes
   - Click "Add Cron Job"

## 📊 How It Works

- Your keep-alive endpoint is at: `https://riak-portfolio.onrender.com/api/keep-alive`
- The monitoring service pings this URL every 5 minutes
- This prevents Render from spinning down your service
- Your site stays awake 24/7 without upgrading to a paid plan

## ⚠️ Important Notes

1. **Free Tier Limits**: 
   - Render free tier allows services to spin down after 15 minutes
   - Pinging every 5 minutes ensures it never spins down

2. **Response Time**: 
   - First request after spin-down may take 30-60 seconds (cold start)
   - After that, responses are instant

3. **Bandwidth**: 
   - Keep-alive requests are tiny (~100 bytes)
   - Won't affect your bandwidth significantly

## 🎯 Recommended: UptimeRobot

**Why UptimeRobot?**
- ✅ Free tier: 50 monitors with 5-minute intervals
- ✅ Easy to set up
- ✅ Also monitors your site's uptime
- ✅ Sends alerts if your site goes down
- ✅ No credit card required

## 🔍 Test Your Keep-Alive Endpoint

You can test it manually:
```bash
curl https://riak-portfolio.onrender.com/api/keep-alive
```

Or visit in your browser:
```
https://riak-portfolio.onrender.com/api/keep-alive
```

You should see:
```json
{
  "status": "ok",
  "timestamp": "2026-01-02T...",
  "message": "Service is awake"
}
```

## 💰 Alternative: Upgrade to Paid Plan

If you want guaranteed 24/7 uptime without any setup:
- Render's paid plans ($7/month+) keep services always on
- No cold starts
- Better performance
- No need for keep-alive pings

---

**Your keep-alive endpoint is ready!** Just set up one of the monitoring services above, and your site will stay awake 24/7. 🎉

