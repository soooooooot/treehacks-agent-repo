# Soot - AI Agent Portfolio

<div align="center">

![Soot Logo](public/favicon.ico)

**An autonomous AI agent designed to assist, create, and collaborate**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Setup Instructions](#-setup-instructions)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 🎯 Project Overview

**Soot** is a modern, responsive web application built with Next.js that showcases an AI agent's capabilities and personality. The project serves as a portfolio and presentation page for an autonomous AI assistant, highlighting its abilities in coding, research, creative work, and task automation.

### Purpose

This project demonstrates:
- **Clean, modern UI/UX design** with dark mode support
- **Responsive layout** that works seamlessly across all devices
- **Professional presentation** of AI agent capabilities
- **Optimized performance** using Next.js 16 and React 19
- **Type-safe development** with TypeScript
- **Modern styling** with Tailwind CSS 4

### Built For

- Developers looking to create AI agent portfolio sites
- Teams wanting to present their AI solutions professionally
- Anyone interested in modern Next.js application architecture

---

## ✨ Key Features

### 🎨 **Modern Design**
- **Dark Mode Support**: Automatic dark/light theme switching based on system preferences
- **Responsive Layout**: Fully responsive design that adapts to all screen sizes (mobile, tablet, desktop)
- **Elegant Typography**: Custom Geist Sans and Geist Mono fonts for optimal readability
- **Gradient Accents**: Beautiful gradient elements for visual appeal

### 🚀 **Technical Excellence**
- **Next.js 16**: Latest App Router architecture for optimal performance
- **React 19**: Cutting-edge React features and performance improvements
- **TypeScript**: Full type safety across the entire codebase
- **Tailwind CSS 4**: Utility-first CSS framework for rapid development
- **ESLint**: Code quality and consistency enforcement

### 📱 **User Experience**
- **Fast Loading**: Optimized images and assets for quick page loads
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG-compliant design patterns
- **Clean Navigation**: Intuitive layout with clear sections

### 🛠️ **Developer Experience**
- **Hot Module Replacement**: Instant feedback during development
- **Type Safety**: Catch errors before runtime with TypeScript
- **Linting**: Automatic code quality checks
- **Modern Tooling**: Latest development tools and practices

---

## 📦 Prerequisites

Before setting up this project, ensure you have the following installed on your system:

### Required Software

| Software | Minimum Version | Recommended Version | Purpose |
|----------|----------------|---------------------|---------|
| **Node.js** | 20.x | 20.x or later | JavaScript runtime |
| **npm** | 10.x | Latest | Package manager |
| **Git** | 2.x | Latest | Version control |

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 500MB for dependencies

### Verification

Check your installations:

```bash
node --version    # Should output v20.x.x or higher
npm --version     # Should output 10.x.x or higher
git --version     # Should output 2.x.x or higher
```

---

## 🚀 Setup Instructions

Follow these step-by-step instructions to get the project running locally:

### 1. Clone the Repository

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate into the project directory
cd treehacks-agent-repo
```

### 2. Install Dependencies

```bash
# Install all required packages
npm install
```

This will install:
- Next.js framework
- React and React DOM
- TypeScript and type definitions
- Tailwind CSS and PostCSS
- ESLint and configuration

**Note**: Installation may take 2-5 minutes depending on your internet connection.

### 3. Verify Installation

Check that all dependencies were installed correctly:

```bash
# List installed packages
npm list --depth=0
```

You should see all packages listed in `package.json`.

### 4. Start Development Server

```bash
# Run the development server
npm run dev
```

The application will start on `http://localhost:3000`

**Expected Output**:
```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
- Environments: .env

✓ Ready in 2.5s
```

### 5. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser to see the application running.

---

## 💻 Usage

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

- **URL**: http://localhost:3000
- **Features**: 
  - Auto-reload on file changes
  - Error overlay for debugging
  - Fast refresh for React components

### Production Build

Create an optimized production build:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

The build process:
1. Compiles TypeScript to JavaScript
2. Optimizes images and assets
3. Minifies CSS and JavaScript
4. Generates static pages where possible

### Code Linting

Run ESLint to check code quality:

```bash
npm run lint
```

This will:
- Check for syntax errors
- Enforce code style guidelines
- Identify potential bugs
- Suggest best practices

### Customization Examples

#### Changing the Agent Name

Edit `/app/page.tsx`:

```tsx
<h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
  Your Agent Name  {/* Change "Soot" to your agent's name */}
</h1>
```

#### Updating Capabilities

Modify the capabilities grid in `/app/page.tsx`:

```tsx
<div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
  <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
    Your Capability Title
  </h3>
  <p className="text-zinc-600 dark:text-zinc-400">
    Description of what the agent can do
  </p>
</div>
```

#### Customizing Colors

Tailwind CSS uses utility classes. To change colors, update the className attributes:

```tsx
// Change background gradient
className="bg-gradient-to-br from-blue-800 to-blue-600"

// Change text colors
className="text-blue-600 dark:text-blue-400"
```

#### Adding New Sections

Add new sections in `/app/page.tsx` following the existing pattern:

```tsx
<section className="flex w-full flex-col gap-6">
  <h2 className="text-center text-2xl font-semibold text-black dark:text-zinc-50 sm:text-left">
    New Section Title
  </h2>
  {/* Your content here */}
</section>
```

---

## 📁 Project Structure

```
treehacks-agent-repo/
├── app/                          # Next.js App Router directory
│   ├── favicon.ico              # Application favicon
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── layout.tsx               # Root layout component (wraps all pages)
│   └── page.tsx                 # Home page component (main content)
│
├── public/                       # Static assets served from root
│   └── (static files)           # Images, fonts, etc.
│
├── .git/                         # Git repository data
├── .gitignore                   # Git ignore patterns
├── .claude/                     # Claude AI configuration
├── .claude.json                 # Claude AI settings
│
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration for Tailwind
├── tsconfig.json                # TypeScript configuration
│
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Locked dependency versions
│
└── README.md                    # This file
```

### Key Files Explained

#### `app/layout.tsx`
- **Purpose**: Root layout component that wraps all pages
- **Contains**: 
  - Font configuration (Geist Sans, Geist Mono)
  - Metadata (title, description)
  - HTML structure
  - Global styling setup

#### `app/page.tsx`
- **Purpose**: Home page component with all main content
- **Sections**:
  - Hero section with agent name and logo
  - About section describing the agent
  - Capabilities grid showing what the agent can do
  - Footer

#### `app/globals.css`
- **Purpose**: Global CSS styles
- **Contains**:
  - Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
  - Custom CSS variables
  - Global style overrides

#### `next.config.ts`
- **Purpose**: Next.js framework configuration
- **Configurable**:
  - Image optimization settings
  - Environment variables
  - Redirects and rewrites
  - Build optimization

#### `tsconfig.json`
- **Purpose**: TypeScript compiler configuration
- **Settings**:
  - Compiler options
  - Path aliases
  - Module resolution
  - Type checking strictness

#### `package.json`
- **Purpose**: Project metadata and dependency management
- **Contains**:
  - Project name and version
  - NPM scripts
  - Dependencies (runtime)
  - DevDependencies (development only)

---

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Create production build
npm run build

# Start production server (requires build first)
npm start

# Run ESLint code quality checks
npm run lint
```

### Development Workflow

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** while the dev server is running:
   ```bash
   npm run dev
   ```

3. **Test your changes** in the browser at http://localhost:3000

4. **Lint your code** before committing:
   ```bash
   npm run lint
   ```

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

6. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Adding New Dependencies

```bash
# Add a runtime dependency
npm install package-name

# Add a development dependency
npm install --save-dev package-name
```

### Environment Variables

Create a `.env.local` file for local environment variables:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

### Code Style Guidelines

- **TypeScript**: Use type annotations for function parameters and return types
- **Components**: Use functional components with TypeScript interfaces for props
- **Naming**: Use PascalCase for components, camelCase for variables/functions
- **Imports**: Organize imports (React, Next.js, local files)
- **CSS**: Use Tailwind utility classes; avoid custom CSS when possible

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Visit [vercel.com](https://vercel.com)** and sign in

3. **Import your repository**:
   - Click "Add New Project"
   - Select your repository
   - Configure project settings (usually auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app automatically

5. **Access your site** at the provided URL (e.g., `your-app.vercel.app`)

#### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

#### Netlify

```bash
# Build command
npm run build

# Publish directory
out
```

#### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t soot-ai-agent .
docker run -p 3000:3000 soot-ai-agent
```

### Production Checklist

- [ ] Environment variables configured
- [ ] Build completes without errors
- [ ] All pages load correctly
- [ ] Images are optimized
- [ ] SEO metadata is correct
- [ ] Analytics configured (if needed)
- [ ] Custom domain configured (optional)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/treehacks-agent-repo.git
   cd treehacks-agent-repo
   ```

3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Set up the development environment**:
   ```bash
   npm install
   npm run dev
   ```

### Making Changes

1. **Follow the code style** guidelines (see Development section)

2. **Test your changes** thoroughly:
   - Verify the dev server runs without errors
   - Check all pages render correctly
   - Test on different screen sizes (responsive design)
   - Test both light and dark modes

3. **Lint your code**:
   ```bash
   npm run lint
   ```

4. **Build the project** to ensure it compiles:
   ```bash
   npm run build
   ```

### Submitting Changes

1. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```

   Commit message prefixes:
   - `Add:` - New feature or content
   - `Fix:` - Bug fix
   - `Update:` - Update existing feature
   - `Remove:` - Remove feature or file
   - `Refactor:` - Code refactoring
   - `Docs:` - Documentation changes

2. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```

3. **Open a Pull Request** on GitHub:
   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes

### Contribution Guidelines

#### Code Quality
- Write clean, readable, and maintainable code
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic

#### Pull Request Requirements
- [ ] Code follows project style guidelines
- [ ] Changes are tested and working
- [ ] No console errors or warnings
- [ ] Build completes successfully
- [ ] PR description clearly explains changes

#### What to Contribute

**Good First Issues**:
- Documentation improvements
- UI/UX enhancements
- Bug fixes
- Accessibility improvements
- Performance optimizations

**Feature Ideas**:
- Additional capability cards
- Contact form integration
- Blog section for updates
- Project showcase gallery
- Interactive demos

### Code Review Process

1. Maintainers will review your PR within 3-5 business days
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in the project

### Questions?

- Open an issue for bugs or feature requests
- Use discussions for questions and ideas
- Reach out to maintainers for guidance

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Port Already in Use

**Problem**: Error: `Port 3000 is already in use`

**Solution**:
```bash
# Find and kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

#### Node Modules Issues

**Problem**: Errors about missing or corrupted dependencies

**Solution**:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors

**Problem**: Type errors during development

**Solution**:
```bash
# Restart TypeScript server in your editor
# Or rebuild TypeScript declarations:
npm run build
```

#### Styling Not Applied

**Problem**: Tailwind styles not appearing

**Solution**:
1. Check that `globals.css` is imported in `layout.tsx`
2. Restart the dev server
3. Clear browser cache
4. Verify `postcss.config.mjs` is configured correctly

#### Build Failures

**Problem**: Production build fails

**Solution**:
```bash
# Clean Next.js cache
rm -rf .next

# Try building again
npm run build
```

#### Hot Reload Not Working

**Problem**: Changes not reflecting in browser

**Solution**:
1. Restart the development server
2. Clear browser cache
3. Check for file watching issues (especially on Linux)
4. Ensure files are saved properly

### Getting Help

If you encounter issues not listed here:

1. **Check the documentation**: Review Next.js, React, and Tailwind docs
2. **Search existing issues**: Look through GitHub issues for similar problems
3. **Open a new issue**: Provide detailed information:
   - Error messages
   - Steps to reproduce
   - Environment details (OS, Node version, etc.)
   - Screenshots if applicable

---

## 📄 License

This project is created for TreeHacks hackathon and educational purposes. Feel free to use, modify, and distribute as needed for your own projects.

### Usage Terms

- ✅ Use for personal projects
- ✅ Use for commercial projects
- ✅ Modify and distribute
- ✅ Private use

**Attribution**: While not required, attribution is appreciated!

---

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Vercel**: For fonts (Geist Sans, Geist Mono) and hosting platform
- **Tailwind CSS**: For the utility-first CSS framework
- **TreeHacks**: For the hackathon inspiration

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](../../issues)
- **Discussions**: [GitHub Discussions](../../discussions)
- **Email**: [Contact information if applicable]

---

<div align="center">

**Built with ❤️ using Next.js, React, and TypeScript**

⭐ Star this repo if you found it helpful!

</div>
