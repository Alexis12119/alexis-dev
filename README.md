# 🚀 Alexis Corporal - Modern Portfolio Website

A modern, interactive portfolio website built with Next.js 14, featuring a terminal-inspired design, RPG-style resume, achievement system, and clean modular architecture.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)

## ✨ Features

### 🎨 **Design & UX**

- **Terminal-inspired interface** with command-line aesthetics
- **Multiple themes**: Light, Dark, Catppuccin, Dracula, Monochrome
- **Responsive design** optimized for all devices
- **Smooth animations** and interactive elements
- **Glass morphism effects** and modern UI components

### 🎮 **Interactive Elements**

- **Achievement system** - Unlock badges by exploring the site
- **Easter eggs** - Hidden surprises and Konami code support
- **RPG-style resume** - Character sheet with stats and inventory
- **Command prompt navigation** - Terminal-style site navigation
- **Syntax highlighting** for code blocks

### 📝 **Content Sections**

- **Project showcase** with dynamic loading
- **Contact form** with Formspree integration
- **SEO optimized** with proper meta tags

### 🔧 **Technical Features**

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Formspree** for contact form handling
- **shadcn/ui** components
- **Lucide React** icons
- **Modular architecture** with separated types, contexts, and components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Formspree account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Alexis12119/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables in `.env.local`:
   ```env
   # Formspree Configuration
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id

   # GitHub Configuration
   NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

### Formspree Configuration

1. **Create a Formspree account** at [formspree.io](https://formspree.io)

2. **Create a new form**:
   - Set up a new form
   - Copy your form ID (e.g., `mdkzwylk`)

3. **Add to environment variables**:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```

4. **Form features**:
   - Automatic email notifications
   - Spam protection
   - Custom thank you page
   - Form validation

## 🎨 Customization

### Themes

The portfolio includes 5 built-in themes:

- **Light** - Clean light theme
- **Dark** - Modern dark theme
- **Catppuccin** - Pastel color scheme
- **Dracula** - Popular dark theme
- **Monochrome** - Black and white

### Adding New Themes

1. Add theme colors to `app/globals.css`
2. Update the themes array in `components/layout/navbar.tsx`
3. Add theme to `tailwind.config.js` if needed

### Content Updates

- **Personal info**: Update in component files
- **Projects**: Modify static project data in components
- **Skills**: Edit `components/skills.tsx`
- **About section**: Modify `components/about.tsx`

## 🏆 Achievement System

### Built-in Achievements

- **Welcome** - Visit the portfolio
- **About Explorer** - Read about section
- **Skill Seeker** - Check skills
- **Project Viewer** - Explore projects
- **Contact Initiator** - Send message
- **Theme Switcher** - Change themes
- **Konami Master** - Enter secret code
- **Resume Viewer** - Check RPG resume

### Adding New Achievements

```typescript
// In any component
const { unlockAchievement } = useAchievements()

unlockAchievement(
"achievement-id",
"Achievement Title",
"Description",
"🏆" // Icon
)
```

## 🎮 Easter Eggs

### Konami Code

Enter the classic Konami code to unlock a special Matrix effect:
```
↑ ↑ ↓ ↓ ← → ← → B A
```

### Hidden Features

- Type "vim" anywhere on the page
- Double-click for surprises
- Explore the terminal commands

## 📱 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push

### Other Platforms

- **Netlify**: Add environment variables and deploy
- **Railway**: Configure environment and deploy
- **Self-hosted**: Use `npm run build` and serve the `out` folder

## 🛠️ Development

### Project Structure

```
├── app/ # Next.js app directory
│ ├── globals.css # Global styles and themes
│ ├── layout.tsx # Root layout with providers
│ └── page.tsx # Homepage
├── components/ # React components
│ ├── ui/ # shadcn/ui components
│ ├── layout/ # Layout components (navbar, footer)
│ ├── achievement-notification.tsx # Achievement notifications
│ ├── matrix-rain.tsx # Easter egg component
│ └── ... # Feature components (about, skills, projects, etc.)
├── hooks/ # Custom React hooks
│ ├── use-achievements.tsx # Achievement system hook
│ └── use-easter-eggs.tsx # Easter egg functionality
├── lib/ # Utility functions and configurations
│ ├── types/ # TypeScript type definitions
│ ├── contexts/ # React context providers
│ └── utils.ts # Utility functions
└── public/ # Static assets
```

### Key Components

- **Hero** - Landing section with terminal
- **About** - Personal information
- **Skills** - Technical skills showcase
- **Projects** - Project portfolio
- **Resume RPG** - Gamified resume
- **Contact** - Contact form

### Custom Hooks

- `useAchievements` - Achievement system
- `useEasterEggs` - Easter egg functionality

### Architecture

The codebase follows a modular architecture with:
- **Types** (`lib/types/`) - Centralized TypeScript interfaces
- **Contexts** (`lib/contexts/`) - React context providers
- **Components** - Reusable UI components
- **Hooks** - Custom React hooks for logic

## 📱 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
   ```
3. **Deploy** - Automatic deployments on push

### Other Platforms

- **Netlify**: Add environment variables and deploy
- **Railway**: Configure environment and deploy
- **Self-hosted**: Use `npm run build` and serve the `out` folder

## 🔧 Scripts

### Available Commands

```bash
# Development
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Beautiful components
- **Formspree** - Form handling
- **Lucide** - Beautiful icons
- **Vercel** - Deployment platform

## 📞 Contact

- **Email**: corporal461@gmail.com
- **GitHub**: [@Alexis12119](https://github.com/Alexis12119)
- **Portfolio**: [alexis.dev](https://alexis.dev)

---

**Built with ❤️ by Alexis Corporal**

_A modern, modular portfolio showcasing clean architecture and interactive design._
