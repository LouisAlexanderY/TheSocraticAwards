# The Socratic Awards — Deployment Guide

## How to Deploy to Netlify (Step by Step)

### Step 1: Deploy the site
1. Go to netlify.com and log in
2. From your dashboard, click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `socratic-awards` folder onto the upload zone
4. Your site will be live at a URL like `random-name.netlify.app`

### Step 2: Enable Netlify Identity (your admin login)
1. In your Netlify dashboard, go to **Site configuration** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration**, set it to **"Invite only"** (so only you can log in)
4. Scroll down to **Services** → **Git Gateway** → click **"Enable Git Gateway"**

### Step 3: Log into your admin panel
1. Go to `yoursite.netlify.app/admin`
2. Click "Login with Netlify Identity"
3. You'll be prompted to set a password via email
4. Once in, you'll see your full editing dashboard!

---

## How to Add a New Winner
1. Log into `/admin`
2. Click **"Winners"** in the left sidebar
3. Click **"New Winner"**
4. Fill in: title, author, category, year, cover image, summary, why it won, author bio
5. Click **Publish** — the winner page is created automatically!

## How to Edit Pages (About, Rules, Press, Homepage)
1. Log into `/admin`
2. Click **"Pages"** in the left sidebar
3. Select the page you want to edit
4. Make your changes and click **Save**

## How to Add a Book Cover Image
- In the winner editor, click the **"Book Cover Image"** field
- Upload directly from your computer
- Images are stored in the `/images/uploads/` folder automatically

## How to View Press Form Submissions
1. In your Netlify dashboard, go to **Forms**
2. Click on **"press-inquiries"**
3. All submissions appear here — you can also set up email notifications

---

## File Structure
```
socratic-awards/
├── index.html          ← Homepage
├── about.html          ← About page
├── rules.html          ← Rules page
├── press.html          ← Press inquiries page
├── winners.html        ← All winners listing
├── winners/
│   └── sample-winner.html  ← Template for winner pages
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Search/filter + animations
├── admin/
│   ├── index.html      ← CMS login page
│   └── config.yml      ← CMS configuration
├── images/
│   └── uploads/        ← Your uploaded images go here
└── netlify.toml        ← Netlify configuration
```
