# Quick Start Guide

Get up and running with the Multi-Tenant Presentation Platform in 5 minutes!

## ⚡ Quick Install

```bash
# 1. Clone the repository
git clone https://github.com/JD154/client_presentation_platform.git
cd client_presentation_platform

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# 4. Open your browser
# Navigate to: http://localhost:3000
```

That's it! 🎉

## 🎯 Quick Tour

### Step 1: Create Your First Client
1. Click the **"+ Add Client"** button
2. Enter client name (e.g., "Acme Corporation")
3. Add a description (optional)
4. Click **"Save"**

### Step 2: Add a Project
1. Click on your client card
2. Click **"+ Add Project"**
3. Enter project name (e.g., "Website Redesign")
4. Add description and select status
5. Click **"Save"**

### Step 3: Create a Presentation
1. Click on your project card
2. Click **"+ Add Presentation"**
3. Enter presentation title
4. Add slides in JSON format:
```json
[
  {
    "title": "Introduction",
    "content": "Welcome to our presentation"
  },
  {
    "title": "Main Content",
    "content": "Key points here"
  }
]
```
5. Click **"Save"**

### Step 4: View Your Presentation
1. Click on the presentation card
2. Navigate through the slides
3. Use the back button to return

## 📝 Common Tasks

### Change Project Status
1. Go to the project view
2. Click **"Edit"** on the project card
3. Select new status: Active, Completed, or Archived
4. Click **"Save"**

### Delete Items
- **Client**: Deletes client + all projects + all presentations
- **Project**: Deletes project + all presentations
- **Presentation**: Deletes only the presentation

⚠️ **Warning**: Deletions are permanent!

## 🔑 Key Features

- ✅ Unlimited clients, projects, and presentations
- ✅ Data automatically saved
- ✅ Beautiful, intuitive interface
- ✅ Breadcrumb navigation
- ✅ Full CRUD operations
- ✅ Multi-tenant isolation

## 📚 Need More Help?

- **Full Documentation**: See [README.md](README.md)
- **API Examples**: See [API_EXAMPLES.md](API_EXAMPLES.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## 🐛 Troubleshooting

**Server won't start?**
```bash
# Check Node.js version (need v14+)
node --version

# Try reinstalling
rm -rf node_modules package-lock.json
npm install
npm start
```

**Port 3000 already in use?**
```bash
# Use a different port
PORT=8080 npm start
```

**Can't create items?**
- Check if server is running
- Visit http://localhost:3000/api/health
- Check browser console for errors

## 🎓 Tips

1. **Test with Sample Data**: Create a few test clients to understand the flow
2. **Use Meaningful Names**: Makes organization easier later
3. **Update Project Status**: Keep track of progress (active/completed/archived)
4. **Regular Backups**: Copy the `data/` folder periodically
5. **Check API Health**: Visit `/api/health` to ensure server is running

## 🚀 What's Next?

Once comfortable with the basics:
- Explore the [API Examples](API_EXAMPLES.md) for automation
- Check the [Contributing Guide](CONTRIBUTING.md) to add features
- Read the [Full README](README.md) for advanced features

---

**Happy presenting! 🎯**
