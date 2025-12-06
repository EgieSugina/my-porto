# Vercel Deployment Guide

This project is configured for deployment on Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Setup for Vercel deployment"
   git push origin master
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Import your repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Project**
   - Framework Preset: Vite (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Configuration Files

- **vercel.json**: Contains Vercel-specific configuration
  - Build command
  - Output directory
  - SPA routing configuration (rewrites all routes to index.html)

- **package.json**: Contains build scripts
  - `npm run build`: Creates production build
  - `npm run preview`: Preview production build locally

## Environment Variables

If you need to add environment variables:

1. Go to your project on Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (they should be prefixed with `VITE_` to be accessible in your app)
4. Redeploy your application

Example:
```
VITE_API_URL=https://api.example.com
```

## Local Testing

Before deploying, test your production build locally:

```bash
npm run build
npm run preview
```

## Automatic Deployments

Once connected to your Git repository, Vercel will automatically:
- Deploy every push to your main branch
- Create preview deployments for pull requests
- Run builds and checks before deploying

## Troubleshooting

### Build fails
- Ensure all dependencies are listed in `package.json`
- Check that your code builds locally with `npm run build`
- Review build logs in Vercel dashboard

### 404 errors on page refresh
- The `vercel.json` configuration handles SPA routing
- Ensure the rewrites configuration is present

### Styling issues
- Check that all CSS files are properly imported
- Verify Tailwind CSS is configured correctly
- Ensure PostCSS is processing correctly

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)

## URLs

After deployment, you'll get:
- Production URL: `https://your-project-name.vercel.app`
- Custom domain: Can be added in Vercel dashboard settings

