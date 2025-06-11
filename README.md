# AI Landing - Learn AI Fundamentals

A modern, minimalist landing page built with React, TypeScript, Tailwind CSS, and Framer Motion. Features Apple-inspired design aesthetics with smooth animations and responsive layouts.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Apple-inspired Design**: Clean, minimalist UI with premium aesthetics
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Route Navigation**: React Router for seamless page transitions
- **Production Ready**: Optimized for deployment on Railway

## 🛠️ Technologies Used

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Routing**: React Router DOM

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🏗️ Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-landing-minimal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Railway Deployment

This project is optimized for Railway deployment with included configuration files.

### Quick Deploy to Railway

1. **Connect your GitHub repository to Railway**
   - Go to [Railway](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select this repository

2. **Railway will automatically:**
   - Detect the project as a Node.js application
   - Install dependencies with `npm ci`
   - Build the project with `npm run build`
   - Start the server with `npm start`

### Manual Railway Setup

If you prefer manual setup:

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway project**
   ```bash
   railway init
   ```

4. **Deploy**
   ```bash
   railway up
   ```

### Environment Variables

The project uses default environment variables. Railway will automatically set:
- `PORT` - The port your application should listen on
- `NODE_ENV` - Set to "production" for production builds

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── HeroSection.tsx  # Landing page hero
│   │   └── AIFundamentalsPage.tsx # AI fundamentals content
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── railway.toml             # Railway configuration
├── nixpacks.toml           # Build configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm start` - Start production server (used by Railway)

## 🎨 Design System

The project uses a custom design system based on:
- **Apple Design Principles**: Clean, minimalist, functional
- **CSS Custom Properties**: For consistent theming
- **Tailwind Utilities**: For rapid development
- **Framer Motion**: For smooth, meaningful animations

### Key Design Elements

- **Glass morphism effects** with backdrop blur
- **Gradient text** and button treatments  
- **Smooth font rendering** with Apple-style antialiasing
- **Responsive typography** scaling
- **Consistent spacing** using Tailwind's scale

## 🔧 Configuration Files

### Railway Configuration (`railway.toml`)
- Sets up health checks
- Configures restart policies
- Optimized for production deployment

### Nixpacks Configuration (`nixpacks.toml`)
- Defines build and start commands
- Sets production environment variables
- Optimizes for Railway's build system

### Vite Configuration (`vite.config.ts`)
- Path aliases for cleaner imports
- Production build optimizations
- Code splitting for better performance
- Preview server configuration for Railway

## 🚨 Troubleshooting

### CSS Not Loading
- Ensure `postcss.config.js` exists (included in this repo)
- Verify Tailwind CSS is imported in `src/index.css`
- Check that all dependencies are installed

### Build Errors
- Make sure Node.js version is 18+
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check TypeScript configuration is valid

### Railway Deployment Issues
- Verify `package.json` has correct start script
- Check Railway logs for specific error messages
- Ensure all environment variables are set

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 🙋‍♂️ Support

If you encounter any issues during deployment or development, please:
1. Check the troubleshooting section above
2. Review Railway's [deployment documentation](https://docs.railway.app/)
3. Open an issue in this repository 