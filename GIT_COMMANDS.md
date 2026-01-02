# Git Commands - Copy & Paste

## Run these commands in order:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Create first commit
git commit -m "Initial commit: Portfolio website with MongoDB integration"

# 4. Add your GitHub repository as remote
git remote add origin https://github.com/riakmawut1-hub/riak-portfolio.git

# 5. Rename branch to main
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

## Important Notes:

- **Step 6** will ask for credentials:
  - **Username**: `riakmawut1-hub`
  - **Password**: Use a **Personal Access Token** (not your GitHub password)
  
- If you don't have a Personal Access Token:
  1. Go to: https://github.com/settings/tokens
  2. Click "Generate new token" → "Generate new token (classic)"
  3. Name it: "Portfolio Deployment"
  4. Check "repo" scope
  5. Generate and copy the token
  6. Use it as your password

## If you get an error about remote already existing:

```bash
# Remove existing remote
git remote remove origin

# Add it again
git remote add origin https://github.com/riakmawut1-hub/riak-portfolio.git

# Then push
git push -u origin main
```

## For future updates:

```bash
git add .
git commit -m "Your update message"
git push
```

