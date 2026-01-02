# MongoDB Atlas Connection - Step by Step

## You're Currently On: Step 2 - Choose Connection Method

### ✅ What to Do Now:

1. **Click on "Drivers"** (the card with the binary code icon - 1011)
   - This is the option for "Connect to your application"
   - Description: "Access your Atlas data using MongoDB's native drivers (e.g. Node.js, Go, etc.)"

2. **On the Next Screen:**
   - You'll see driver options
   - **Select "Node.js"** and choose version **4.1 or later** (or latest available)
   - Copy the connection string that looks like:
     ```
     mongodb+srv://<username>:<password>@riak-portofolio.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```

3. **Replace the Placeholders:**
   - Replace `<username>` with your database username
   - Replace `<password>` with your database password (the one you created in Database Access)
   - Add your database name before the `?` (e.g., `/portfolio?`)

   **Example:**
   ```
   mongodb+srv://riakuser:MyPassword123@riak-portofolio.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

4. **Save to .env.local:**
   - Create `.env.local` file in your project root
   - Add this line:
     ```
     MONGODB_URI=mongodb+srv://yourusername:yourpassword@riak-portofolio.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
     ```

### ⚠️ Important Notes:

- **Don't share your connection string publicly** - it contains your password!
- Make sure `.env.local` is in `.gitignore` (it already is)
- The database name (`portfolio`) will be created automatically when you first save a contact form submission
- If you haven't set up Network Access yet, you'll need to do that first (Step 1)

### 🔒 Network Access (If Not Done):

If you haven't completed Step 1:
1. Go to **Network Access** in MongoDB Atlas
2. Click **Add IP Address**
3. For development: Add your current IP
4. For Render deployment: Add `0.0.0.0/0` (allows from anywhere)
5. Click **Confirm**

### ✅ Test Your Connection:

After setting up `.env.local`, test it:

```bash
npm install
npm run dev
```

Then try submitting the contact form on your local site. If it works, you'll see the submission in MongoDB Atlas under your cluster → Collections.

---

**Next Steps After Connection:**
- Test the contact form locally
- Deploy to Render
- Add the same `MONGODB_URI` to Render's environment variables

