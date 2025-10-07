# 🚀 Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🔧 Pre-deployment Checklist

- [ ] Environment variables configured
- [ ] Supabase database set up
- [ ] Formspree form configured
- [ ] Admin password set
- [ ] Content updated with your information
- [ ] All tests passing

## 🌐 Vercel (Recommended)

### Why Vercel?
- Built by the Next.js team
- Automatic deployments
- Edge functions support
- Built-in analytics
- Custom domains

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js

2. **Configure Environment Variables**
    \`\`\`bash
    # In Vercel Dashboard → Settings → Environment Variables
    NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
    NEXT_PUBLIC_ADMIN_PASSWORD=your_admin_password
    NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
    \`\`\`

3. **Deploy**
   - Click "Deploy"
   - Automatic deployments on every push

4. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

## 🌊 Netlify

### Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository

2. **Build Settings**
   \`\`\`bash
   Build command: npm run build
   Publish directory: .next
   \`\`\`

3. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all your environment variables

4. **Deploy**
   - Trigger deployment
   - Set up continuous deployment

## 🚂 Railway

### Steps

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Deploy from GitHub

2. **Environment Variables**
   - Add in Railway dashboard
   - All NEXT_PUBLIC_ variables

3. **Deploy**
   - Automatic deployment
   - Custom domain available

## 🐳 Docker Deployment

### Dockerfile
\`\`\`dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
\`\`\`

### Docker Compose
\`\`\`yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
       - NEXT_PUBLIC_FORMSPREE_ID=${NEXT_PUBLIC_FORMSPREE_ID}
      - NEXT_PUBLIC_ADMIN_PASSWORD=${NEXT_PUBLIC_ADMIN_PASSWORD}
\`\`\`

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env.local` to git
- Use different passwords for production
- Rotate keys regularly

### Admin Panel
- Change default admin password
- Use strong passwords
- Consider IP restrictions for production

### Database
- Enable Row Level Security in Supabase
- Use proper database permissions
- Regular backups

## 📊 Post-Deployment

### Analytics
- Set up Vercel Analytics
- Configure Google Analytics (optional)
- Monitor performance

### SEO
- Submit sitemap to Google Search Console
- Verify meta tags
- Test social media previews

### Monitoring
- Set up error tracking (Sentry)
- Monitor uptime
- Performance monitoring

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

**Environment Variables Not Working**
- Ensure NEXT_PUBLIC_ prefix for client-side variables
- Restart development server after changes
- Check Vercel dashboard for typos

**Database Connection Issues**
- Verify Supabase URL and key
- Check database permissions
- Ensure tables exist

**Form Not Working**
- Verify Formspree form ID
- Check CORS settings
- Test form endpoint directly

### Getting Help
- Check deployment logs
- Verify environment variables
- Test locally first
- Contact support if needed

---

**Happy Deploying! 🚀**
