# Git Identity Setup

## Run these commands to set your Git identity:

```bash
# Set your name (use your actual name)
git config --global user.name "Riak Mawut"

# Set your email (use your GitHub email or the one you use for GitHub)
git config --global user.email "riakmawut3@gmail.com"
```

## Then continue with your commit:

```bash
# Now try the commit again
git commit -m "Initial commit: Portfolio website with MongoDB integration"
```

## Complete command sequence:

```bash
# 1. Set Git identity
git config --global user.name "Riak Mawut"
git config --global user.email "riakmawut3@gmail.com"

# 2. Initialize (if not done)
git init

# 3. Add files
git add .

# 4. Commit
git commit -m "Initial commit: Portfolio website with MongoDB integration"

# 5. Add remote
git remote add origin https://github.com/riakmawut1-hub/riak-portfolio.git

# 6. Rename branch
git branch -M main

# 7. Push
git push -u origin main
```

