# Portfolio Project - Complete Reference Documentation

**Project Name:** Manoj Ranga Portfolio Website
**Version:** 0.0.0
**Last Updated:** January 1, 2026

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Page Architecture](#page-architecture)
6. [Component Library](#component-library)
7. [Responsive Design](#responsive-design)
8. [Dark Mode Implementation](#dark-mode-implementation)
9. [Content & Data](#content--data)
10. [Development Workflow](#development-workflow)
11. [Build & Deployment](#build--deployment)

---

## Project Overview

### Purpose
A professional portfolio website for Manoj Ranga, showcasing his expertise as a Software Engineer specializing in full-stack development, blockchain solutions, and AI automation.

### Key Features
- **Professional Portfolio**: Comprehensive showcase of projects and skills
- **Responsive Design**: Mobile-first approach supporting all device sizes
- **Dark Mode**: Class-based theme switching with user preference persistence
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS v4
- **Performance Optimized**: Fast loading, SEO-friendly architecture
- **Accessible**: WCAG compliant with semantic HTML

### Target Audience
- Potential employers and recruiters
- Freelance clients
- Professional network connections
- Tech community members

---

## Technology Stack

### Core Framework
- **React**: v19.2.0 (Latest with new features)
- **React DOM**: v19.2.0
- **TypeScript**: v5.9.3
- **Vite**: v7.2.4 (Build tool)

### Routing
- **React Router DOM**: v7.11.0

### Styling
- **Tailwind CSS**: v4.1.18 (Latest with @theme directive)
- **PostCSS**: v8.5.6
- **Autoprefixer**: v10.4.23

### Development Tools
- **ESLint**: v9.39.1
- **Prettier**: v3.7.4
- **TypeScript ESLint**: v8.46.4

### Build Configuration
- **Vite Plugin React**: v5.1.1
- **Node Types**: v24.10.1

### Package Manager
- **Yarn**: (Using yarn.lock)

---

## Project Structure

```
portfolio/client/
│
├── docs/                          # Documentation files
│   ├── PROJECT_REFERENCE.md       # This file - complete reference
│   ├── DESIGN_SYSTEM.md          # Color, typography, theming
│   ├── DARK_MODE_SETUP.md        # Dark mode implementation guide
│   ├── HOME_PAGE_DESIGN.md       # Home page content & structure
│   ├── PORTFOLIO_STRUCTURE.md    # Overall site architecture
│   ├── RESPONSIVE_DESIGN_GUIDE.md # Responsive implementation
│   ├── USING_CUSTOM_COLORS.md    # Color usage guide
│   └── manoj-resume.md           # Resume content data
│
├── public/                        # Static assets
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── layout/              # Layout components
│   │   │   ├── Layout.tsx       # Main layout wrapper
│   │   │   ├── Navbar.tsx       # Navigation bar
│   │   │   └── Footer.tsx       # Footer component
│   │   ├── common/              # Reusable UI components
│   │   │   ├── Container.tsx    # Responsive container
│   │   │   ├── Button.tsx       # Button component
│   │   │   ├── Badge.tsx        # Badge/tag component
│   │   │   ├── ThemeToggle.tsx  # Dark mode toggle
│   │   │   └── ThemeDebug.tsx   # Theme debugging tool
│   │   ├── cards/               # Card components
│   │   │   ├── ProjectCard.tsx  # Project display card
│   │   │   └── SkillCard.tsx    # Skill display card
│   │   └── HeroSection.tsx      # Hero section component
│   │
│   ├── pages/                    # Page components
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── AboutPage.tsx        # About/bio page
│   │   ├── ProjectsPage.tsx     # Projects showcase
│   │   ├── ContactPage.tsx      # Contact form
│   │   └── ResumePage.tsx       # Resume/CV page
│   │
│   ├── contexts/                 # React contexts
│   │   └── ThemeContext.tsx     # Dark mode state management
│   │
│   ├── router/                   # Routing configuration
│   │   ├── index.tsx            # Router setup
│   │   └── routes.ts            # Route definitions
│   │
│   ├── services/                 # Service layer
│   │   └── contentServices.ts   # Content management
│   │
│   ├── data/                     # Data files
│   │   └── portfolio.ts         # Portfolio content data
│   │
│   ├── types/                    # TypeScript types
│   │   └── index.ts             # Type definitions
│   │
│   ├── App.tsx                   # Root component
│   ├── App.css                   # App-specific styles
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles & Tailwind config
│
├── index.html                    # HTML entry point
├── package.json                  # Dependencies & scripts
├── yarn.lock                     # Yarn lock file
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # App TypeScript config
├── tsconfig.node.json            # Node TypeScript config
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── eslint.config.js              # ESLint configuration
└── .gitignore                    # Git ignore rules
```

---

## Design System

### Color Palette

#### Neutral Colors (Complete Scale)
Used for backgrounds, borders, and text in dark theme:

| Shade | Hex Code | Usage |
|-------|----------|-------|
| neutral-50 | #f9fafb | Lightest backgrounds (light mode) |
| neutral-100 | #f3f4f6 | Very light surfaces (light mode) |
| neutral-200 | #e5e7eb | Light borders (light mode) |
| neutral-300 | #d1d5db | Subtle borders |
| neutral-400 | #9ca3af | Placeholder text |
| neutral-500 | #6b7280 | Muted text |
| neutral-600 | #4b5563 | Secondary text (dark mode) |
| neutral-700 | #364151 | Buttons, interactive elements |
| neutral-800 | #1d1f29 | Card backgrounds |
| neutral-900 | #11131e | Section backgrounds |
| neutral-950 | #030712 | Primary background (darkest) |

#### Brand Colors

**Primary (Cyan/Blue)**
- Default: #00bbff - Links, buttons, brand elements
- Hover: #00a3e0 - Hover state

**Accent (Pink/Magenta)**
- Default: #fb64b6 - Highlights, special emphasis
- Hover: #e94fa0 - Hover state

### Typography

#### Font Families
- **Sans-serif (Inter)**: Primary UI font for all text
  - Weights: 100-900
  - Usage: Headings, body text, UI elements

- **Monospace (IBM Plex Mono)**: Code and technical content
  - Weights: 100-700
  - Usage: Code blocks, technical details

#### Font Scale

| Class | Size | Usage |
|-------|------|-------|
| text-xs | 12px | Small labels, captions |
| text-sm | 14px | Small text, metadata |
| text-base | 16px | Body text (default) |
| text-lg | 18px | Large body text |
| text-xl | 20px | Small headings |
| text-2xl | 24px | Section headings |
| text-3xl | 30px | Page headings |
| text-4xl | 36px | Hero headings |
| text-5xl | 48px | Large hero headings |
| text-6xl | 60px | Extra large headings |

### Spacing System

Tailwind's default spacing scale (1 unit = 0.25rem = 4px):

| Class | Value | Common Use |
|-------|-------|------------|
| p-4 | 16px | Mobile padding |
| sm:p-6 | 24px | Tablet padding |
| lg:p-8 | 32px | Desktop padding |
| py-12 | 48px | Section vertical padding (mobile) |
| md:py-16 | 64px | Section padding (tablet) |
| lg:py-20 | 80px | Section padding (desktop) |

---

## Page Architecture

### 1. Home Page (/)

**Purpose**: Landing page creating strong first impression

**Sections**:
- **Hero Section**: Name, title, tagline, CTA buttons
- **About Preview**: Brief bio with "Learn More" link
- **Skills Overview**: Key technologies as cards/badges
- **Featured Projects**: 4 highlighted projects
- **Experience Timeline**: Professional journey
- **Education**: Academic background
- **Call-to-Action**: Contact encouragement
- **Footer**: Navigation and social links

**Key Content**:
- Name: MANOJ RANGA
- Title: Software Engineer
- Tagline: Full-Stack Developer | Blockchain Engineer | AI Automation Specialist
- 2+ Years Experience | 6+ Production Projects | 50+ Cloud Functions

### 2. About Page (/about)

**Purpose**: Tell personal and professional story

**Sections**:
- Personal Introduction (background, transition from Civil Engineering)
- Experience Timeline (work history with achievements)
- Skills & Expertise (detailed technical skills)
- Personal Interests (hobbies, making it relatable)

### 3. Projects Page (/projects)

**Purpose**: Showcase technical work and abilities

**Sections**:
- Projects Grid/List with filtering
- Project details (modal or separate page)

**Featured Projects**:
1. WeMeme - Solana DeFi Token Launch Platform
2. Draftables - Fantasy Football Simulation
3. CityHire - Enterprise Equipment Hire Management
4. JAAP MFM - Media Futures Market

### 4. Contact Page (/contact)

**Purpose**: Make it easy to reach out

**Sections**:
- Contact form (name, email, subject, message)
- Contact information (email, phone, location)
- Social links (GitHub, LinkedIn)
- Availability status

**Contact Information**:
- Email: manojranga7583@gmail.com
- Phone: +94 77 2641989
- Location: Matara, Southern Province, Sri Lanka

### 5. Resume Page (/resume)

**Purpose**: Formatted, printable resume

**Sections**:
- Professional summary
- Work experience
- Education
- Technical skills
- Download PDF button

---

## Component Library

### Layout Components

#### Layout (src/components/layout/Layout.tsx)
Main application wrapper providing consistent structure.

**Features**:
- Sticky header
- Flexible content area
- Footer pinned to bottom
- Full viewport height

**Usage**:
```tsx
<Layout>
  <Outlet /> // Page content rendered here
</Layout>
```

#### Navbar (src/components/layout/Navbar.tsx)
Responsive navigation bar.

**Features**:
- Sticky positioning
- Desktop horizontal menu
- Mobile hamburger menu
- Theme toggle integration
- Active route highlighting

**Responsive Behavior**:
- Mobile: Hamburger menu, collapsible
- Tablet+: Horizontal navigation links

#### Footer (src/components/layout/Footer.tsx)
Site footer with links and information.

**Features**:
- Multi-column layout
- Social media links
- Copyright notice
- Navigation links

**Responsive Grid**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

### Common Components

#### Container (src/components/common/Container.tsx)
Responsive container with max-width and padding.

**Sizes**:
- `sm`: 768px (forms, narrow content)
- `md`: 896px (articles, blog posts)
- `lg`: 1024px (dashboards, tables)
- `xl`: 1280px (default - most pages)
- `full`: 100% (full-width sections)

**Usage**:
```tsx
<Container size="xl">
  {/* Content */}
</Container>
```

#### Button (src/components/common/Button.tsx)
Reusable button component with variants.

**Variants**:
- Primary: bg-primary
- Secondary: bg-neutral-700
- Outline: border with transparent bg
- Accent: bg-accent

#### Badge (src/components/common/Badge.tsx)
Tag/badge component for skills and tech stack.

**Usage**:
```tsx
<Badge color="primary">React</Badge>
<Badge color="accent">TypeScript</Badge>
```

#### ThemeToggle (src/components/common/ThemeToggle.tsx)
Dark mode toggle button.

**Features**:
- Sun/moon icon
- Persists preference to localStorage
- Smooth transitions

### Card Components

#### ProjectCard (src/components/cards/ProjectCard.tsx)
Display project information.

**Features**:
- Project thumbnail
- Title and description
- Technology badges
- Links (demo, GitHub)
- Hover effects

#### SkillCard (src/components/cards/SkillCard.tsx)
Display skill categories.

**Features**:
- Category icon
- Skill tags
- Proficiency indicators (optional)
- Hover effects

---

## Responsive Design

### Breakpoints

```
Mobile:     < 640px   (default, no prefix)
sm:         ≥ 640px   (Small tablets)
md:         ≥ 768px   (Tablets, small laptops)
lg:         ≥ 1024px  (Laptops, desktops)
xl:         ≥ 1280px  (Large desktops)
2xl:        ≥ 1536px  (Extra large screens)
```

### Container System

**Implementation Pattern**:
```tsx
// Full-width background, contained content
<section className="w-full bg-blue-600">
  <Container>
    <h2>Section Title</h2>
  </Container>
</section>
```

### Responsive Typography

```tsx
// Headings
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

// Body text
<p className="text-base md:text-lg">
```

### Responsive Grids

```tsx
// Projects: 1 col mobile, 2 col tablet, 3 col desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Skills: 1 col mobile, 2 col small tablet, 3 col desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Mobile-First Approach

Base styles are for mobile, then enhanced for larger screens:

```tsx
// Mobile: vertical stack, Desktop: horizontal
<div className="flex flex-col md:flex-row">

// Mobile: hidden, Desktop: visible
<div className="hidden md:block">

// Mobile: visible, Desktop: hidden
<div className="block md:hidden">
```

---

## Dark Mode Implementation

### Strategy
Class-based dark mode with ThemeContext for state management.

### Configuration

**Tailwind Config (tailwind.config.js)**:
```javascript
export default {
  darkMode: 'class',
  // ...
}
```

**Custom Variant (index.css)**:
```css
@custom-variant dark (&:where(.dark, .dark *));
```

### Theme Context

**Location**: `src/contexts/ThemeContext.tsx`

**Features**:
- Theme state management (light/dark/system)
- localStorage persistence
- System preference detection
- Auto-applies `.dark` class to document root

**Usage**:
```tsx
import { useTheme } from './contexts/ThemeContext';

const { theme, setTheme, isDark } = useTheme();
```

### Dark Mode in Components

```tsx
// Background that changes
<div className="bg-neutral-100 dark:bg-neutral-900">

// Text that adapts
<p className="text-neutral-900 dark:text-neutral-100">

// Borders
<div className="border-neutral-200 dark:border-neutral-700">
```

### Color Pairs for Light/Dark

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Page background | bg-white | bg-neutral-950 |
| Card background | bg-gray-50 | bg-neutral-900 |
| Heading text | text-gray-900 | text-white |
| Body text | text-gray-600 | text-gray-300 |
| Borders | border-gray-200 | border-gray-700 |

---

## Content & Data

### Portfolio Data Structure

**Location**: `src/data/portfolio.ts`

**Structure**:
```typescript
{
  personalInfo: {
    name: string
    title: string
    tagline: string
    bio: string
    email: string
    phone: string
    location: string
    social: { github, linkedin }
  }

  skills: {
    category: string
    technologies: string[]
  }[]

  projects: {
    title: string
    description: string
    technologies: string[]
    duration: string
    role: string
    features: string[]
    links: { demo?, github?, details? }
  }[]

  experience: {
    company: string
    role: string
    duration: string
    location: string
    achievements: string[]
    technologies: string[]
  }[]

  education: {
    degree: string
    institution: string
    year: string
  }[]
}
```

### Resume Content

**Location**: `docs/manoj-resume.md`

Full professional resume content in markdown format, includes:
- Professional summary
- Technical skills
- Work experience (MetaruneLabs, Talpha Solutions, Maga Engineering)
- Projects (WeMeme, Draftables, CityHire, JAAP MFM, etc.)
- Education

---

## Development Workflow

### Available Scripts

```bash
# Development server with HMR
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Lint code
yarn lint

# Auto-fix linting issues
yarn lint:fix

# Format code
yarn format

# Check formatting
yarn format:check
```

### Development Server
```bash
yarn dev
# Opens http://localhost:5173
```

### Code Quality

**ESLint**:
- TypeScript ESLint rules
- React hooks rules
- React refresh rules
- Prettier integration

**Prettier**:
- Consistent code formatting
- Integrated with ESLint
- Auto-format on save (if configured)

### Git Workflow

Current branch: `development`
Main branch: `main`

**Modified files** (current state):
- docs/DESIGN_SYSTEM.md
- package.json
- src/App.css
- src/App.tsx
- src/index.css
- src/main.tsx
- src/types/index.ts
- tailwind.config.js
- yarn.lock

**New files**:
- Documentation files in docs/
- Component files in src/components/
- Page files in src/pages/
- Router setup in src/router/
- Theme context in src/contexts/

---

## Build & Deployment

### Build Configuration

**Vite Config** (`vite.config.ts`):
- React plugin with fast refresh
- TypeScript support
- PostCSS processing
- Asset optimization

**TypeScript**:
- Strict mode enabled
- Separate configs for app and Node
- Type checking on build

### Build Output

```bash
yarn build
```

Outputs to `dist/` directory:
- Minified JavaScript bundles
- Optimized CSS
- Static assets
- index.html

### Production Optimizations

- **Code splitting**: Dynamic imports for routes
- **Tree shaking**: Removes unused code
- **Minification**: JavaScript and CSS
- **Asset optimization**: Images, fonts
- **CSS purging**: Tailwind removes unused styles

### Deployment Targets

Can be deployed to:
- **Vercel**: Recommended for React + Vite
- **Netlify**: Simple static hosting
- **GitHub Pages**: Free static hosting
- **AWS S3 + CloudFront**: Enterprise solution
- Any static hosting service

### Environment Variables

Create `.env` file for environment-specific configs:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Key Implementation Details

### Tailwind CSS v4 Setup

**Key Differences from v3**:

1. **Single import directive**:
   ```css
   @import "tailwindcss";
   ```
   Replaces v3's three directives (@tailwind base/components/utilities)

2. **@theme directive for customization**:
   ```css
   @theme {
     --color-primary: #00bbff;
     --font-family-sans: 'Inter', sans-serif;
   }
   ```
   Replaces theme.extend in config file

3. **Custom variants**:
   ```css
   @custom-variant dark (&:where(.dark, .dark *));
   ```

4. **Minimal config file**:
   - Only content paths and plugins needed
   - Theme customization moves to CSS

### Font Loading

Fonts loaded via Google Fonts CDN in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
```

Performance optimizations:
- preconnect for DNS resolution
- display=swap for font loading
- Combined font request

### Routing Implementation

Using React Router v7 with data router pattern:

**Router Setup** (`src/router/index.tsx`):
```tsx
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      // ...
    ]
  }
])
```

### Type Safety

**Type Definitions** (`src/types/index.ts`):
```typescript
export interface Project {
  title: string
  description: string
  technologies: string[]
  // ...
}

export interface Skill {
  category: string
  technologies: string[]
}

// ... more types
```

---

## Performance Best Practices

### Implemented
- Mobile-first responsive design
- Lazy loading for images (to be added)
- Code splitting via React Router
- Minimal dependencies
- CSS purging via Tailwind

### Recommended Additions
- Image optimization (WebP format)
- Lazy load components below fold
- Service worker for offline support
- Performance monitoring
- SEO optimization (meta tags, sitemap)

---

## Accessibility Features

### Implemented
- Semantic HTML5 elements
- Keyboard navigation support
- ARIA labels on interactive elements
- Sufficient color contrast
- Focus indicators
- Responsive font sizes

### To Implement
- Skip to main content link
- Screen reader announcements
- Reduced motion support
- Alt text for all images
- Form validation feedback

---

## Browser Support

### Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Modern Features Used
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- ES6+ JavaScript
- React 19 features

---

## Future Enhancements

### Phase 1 - Polish
- [ ] Complete all page content
- [ ] Optimize images
- [ ] Add loading states
- [ ] Implement form validation
- [ ] Add animations and transitions

### Phase 2 - Features
- [ ] Blog section
- [ ] Testimonials
- [ ] Light mode theme
- [ ] Contact form backend
- [ ] Analytics integration

### Phase 3 - Advanced
- [ ] CMS integration
- [ ] Multi-language support
- [ ] A/B testing
- [ ] Performance monitoring
- [ ] SEO optimization

---

## Quick Reference

### Most Common Classes

**Backgrounds**:
```
bg-neutral-950  // Page background (dark)
bg-neutral-900  // Section background
bg-neutral-800  // Card background
bg-primary      // Primary button
bg-accent       // Accent elements
```

**Text**:
```
text-white          // Primary text
text-neutral-400    // Secondary text
text-primary        // Links
text-accent         // Highlights
```

**Spacing**:
```
px-4 sm:px-6 lg:px-8    // Horizontal padding
py-12 md:py-16 lg:py-20 // Vertical padding
space-y-4               // Vertical spacing between children
gap-6                   // Grid/flex gap
```

**Layout**:
```
flex flex-col md:flex-row    // Responsive flex direction
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Responsive grid
max-w-7xl mx-auto           // Centered max-width container
```

---

## Support & Resources

### Documentation Links
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

### Project Documentation
- [Design System](./DESIGN_SYSTEM.md)
- [Dark Mode Setup](./DARK_MODE_SETUP.md)
- [Home Page Design](./HOME_PAGE_DESIGN.md)
- [Portfolio Structure](./PORTFOLIO_STRUCTURE.md)
- [Responsive Design Guide](./RESPONSIVE_DESIGN_GUIDE.md)
- [Using Custom Colors](./USING_CUSTOM_COLORS.md)

---

## Changelog

### Version 0.0.0 - Initial Setup
- Project scaffolding with Vite + React + TypeScript
- Tailwind CSS v4 configuration
- Dark mode implementation
- Basic component structure
- Documentation creation
- Router setup
- Theme context implementation

---

## Contact & Contribution

**Developer**: Manoj Ranga
**Email**: manojranga7583@gmail.com
**GitHub**: https://github.com/kgmanojranga
**LinkedIn**: https://www.linkedin.com/in/manoj-ranga-76531416b

---

*Last updated: January 1, 2026*
