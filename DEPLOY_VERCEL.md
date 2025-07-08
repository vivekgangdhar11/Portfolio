# Deploy Vivek's Portfolio to Vercel (Free)

## Step 1: Prepare for Deployment

1. **Create a GitHub Repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it something like `vivek-portfolio` or `portfolio-website`
   - Make it public (required for free Vercel deployment)

2. **Push Your Code to GitHub**
   - In your Replit terminal, run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 2: Deploy on Vercel

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign up" and use your GitHub account

2. **Import Your Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: **Other**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

4. **No Environment Variables Needed**
   Your portfolio is now completely static - no database setup required!

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project-name.vercel.app`

## Step 3: Custom Domain (Optional)

- In Vercel dashboard, go to your project
- Click "Domains" tab
- Add your custom domain if you have one

## Alternative: Netlify Deployment

If Vercel doesn't work, try Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist/public` folder after running `npm run build`
3. Your site will be deployed instantly

## Why This Setup Is Perfect for Free Hosting

- **No Database Required** - Your portfolio is completely static
- **Fast Loading** - No database queries means lightning-fast page loads
- **Zero Maintenance** - No database to maintain or monitor
- **Perfect for Free Tiers** - Static sites are ideal for free hosting

Your portfolio is now optimized for free deployment on any platform!