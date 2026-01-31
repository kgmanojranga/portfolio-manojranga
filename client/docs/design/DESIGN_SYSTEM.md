# Portfolio Design System & Architecture Guide

> **Purpose:** This document serves as a comprehensive reference for creating new pages and components that match the
> existing design system. Use this guide to maintain consistency across the portfolio website.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Styling System](#2-styling-system--tailwind-configuration)
3. [Color Palette](#3-color-palette--css-variables)
4. [Typography](#4-typography-system)
5. [Component Library](#5-component-patterns--library)
6. [Responsive Design](#6-responsive-design--breakpoints)
7. [Animations](#7-animation--transitions)
8. [Image Handling](#8-image-handling)
9. [Routing](#9-routing-structure)
10. [Data Management](#10-data-management)
11. [Theme System](#11-theme-system)
12. [Layout System](#12-layout--spacing-system)
13. [Quick Start Templates](#13-creating-new-components---quick-reference)
14. [Technical Notes](#14-important-technical-notes)
15. [Design Patterns](#15-color-combinations-for-new-designs)

---

## 1. Project Structure

```
/src
  ├── assets/
  │   ├── images/          # All image assets
  │   │   ├── hero-profile-image.png        # Desktop hero background
  │   │   ├── hero-profile-image-3.png      # Mobile hero background
  │   │   ├── profile-image.png             # Profile images
  │   │   └── about-bg.png                  # About section background
  │   └── fonts/aeonik/    # Custom Aeonik font files
  │       ├── AeonikTRIAL-Light.woff2      (weight 400)
  │       ├── AeonikTRIAL-Regular.woff2    (weight 500)
  │       └── AeonikTRIAL-Bold.woff        (weight 700)
  │
  ├── components/
  │   ├── layout/          # Layout components
  │   │   ├── Layout.tsx              # Main wrapper with Navbar/Footer
  │   │   ├── Navbar.tsx              # Sticky navigation
  │   │   └── Footer.tsx              # Footer with links
  │   ├── sections/        # Page sections
  │   │   ├── HeroSection.tsx         # Landing hero
  │   │   └── AboutSection.tsx        # About preview
  │   ├── cards/           # Card components
  │   │   ├── ProjectCard.tsx         # Project display
  │   │   └── SkillCard.tsx           # Skill categories
  │   └── common/          # Reusable components
  │       ├── Container.tsx           # Responsive wrapper
  │       ├── Button.tsx              # Button variants
  │       ├── Badge.tsx               # Tag/label
  │       ├── Interactive3DWave.tsx   # Canvas animation
  │       ├── TypingCodeAnimation.tsx # Typing effect
  │       └── ThemeToggle.tsx         # Theme switcher
  │
  ├── pages/               # Route pages
  │   ├── HomePage.tsx
  │   ├── AboutPage.tsx
  │   ├── ProjectsPage.tsx
  │   ├── ContactPage.tsx
  │   └── ResumePage.tsx
  │
  ├── contexts/            # React contexts
  │   └── ThemeContext.tsx            # Theme management
  │
  ├── router/              # Routing setup
  │   ├── index.tsx                   # React Router config
  │   └── routes.ts                   # Route constants
  │
  ├── services/            # Data services
  │   └── contentServices.ts          # API/data fetching
  │
  ├── types/               # TypeScript types
  │   └── index.ts                    # Type definitions
  │
  ├── data/                # Static data
  │   └── portfolio.ts                # Portfolio content
  │
  ├── App.tsx              # Root component
  ├── index.css            # Global styles + Tailwind
  └── main.tsx             # React entry point
```

---

## 2. Styling System & Tailwind Configuration

### Tailwind Setup

**Version:** v4.1.18 (Modern `@theme` directive support)

**Configuration** (`/tailwind.config.js`):

```javascript
{
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        plugins
:
    [],
        darkMode
:
    'class',  // Dark mode via .dark class on <html>
}
```

**PostCSS** (`/postcss.config.js`):

```javascript
{
    plugins: {
        '@tailwindcss/postcss'
    :
        {
        }
    ,
        autoprefixer: {
        }
    ,
    }
}
```

---

## 3. Color Palette & CSS Variables

All colors are defined in `/src/index.css` using the `@theme` directive.

### Primary Brand Colors (Grayscale)

```css
--color-primary: #222222 /* Dark gray - headings, primary text */
--color-primary-hover: #000000 /* Pure black - hover state */
--color-secondary: #7b7b7b /* Medium gray - secondary text, borders */
--color-secondary-hover: #5a5a5a /* Darker gray - secondary hover */
--color-tertiary: #f8f8f8 /* Off-white - light backgrounds, cards */
--color-tertiary-hover: #efefef /* Slightly darker off-white */
--color-white: #ffffff

/* Pure white */
```

### Wave Colors (Purple-Pink-Blue Gradient Theme)

```css
--color-wave-primary: #dc8af5 /* Purple - main brand color, buttons */
--color-wave-secondary: #f58ad8 /* Magenta - CTAs, accents */
--color-wave-accent: #8ab3f5 /* Blue - links, highlights */
--color-wave-bg: #000000 /* Canvas black */
--color-wave-overlay:
rgba

(
0
,
0
,
0
,
0.2
)
```

### Extended Wave Spectrum

```css
--color-wave-blue: #8ab3f5
--color-wave-periwinkle: #8a8af5
--color-wave-lavender: #b38af5
--color-wave-purple: #dc8af5
--color-wave-magenta: #f58ad8
--color-wave-pink: #f58aad
--color-wave-rose: #f58a93
```

### Neutral Extended Palette

```css
--color-neutral-50: #fafafa
--color-neutral-100: #f5f5f5
--color-neutral-200: #e5e5e5
--color-neutral-300: #d4d4d4
--color-neutral-400: #a3a3a3
--color-neutral-500: #737373
--color-neutral-600: #525252
--color-neutral-700: #404040
--color-neutral-800: #262626
--color-neutral-900: #171717
--color-neutral-950: #050505
```

### Color Usage Patterns

```html
<!-- Dark mode -->
<div className="dark:bg-neutral-950 dark:text-neutral-300">

    <!-- Light mode -->
    <div className="bg-white text-neutral-950">

        <!-- Gradient text -->
        <h1 className="text-gradient">
```

The `text-gradient` class applies:

```css
background:
linear-gradient

(
135
deg, #dc8af5, #f58ad8, #8ab3f5

)
;
-webkit-background-clip: text

;
-webkit-text-fill-color: transparent

;
```

---

## 4. Typography System

### Font Families

```css
--font-family-sans:

'Inter'
,
system-ui, sans-serif /* Body text */
--font-family-mono:

'IBM Plex Mono'
,
monospace /* Code, technical */
--font-monoton:

'Monoton'
,
sans-serif /* Display */
--font-aeonik:

'Aeonik'
,
sans-serif

/* Premium headlines */
```

### Custom Font Loading (Aeonik)

```css
@font-face {
    font-family: 'Aeonik';
    src: url('./assets/fonts/aeonik/AeonikTRIAL-Light.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: 'Aeonik';
    src: url('./assets/fonts/aeonik/AeonikTRIAL-Regular.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
}

@font-face {
    font-family: 'Aeonik';
    src: url('./assets/fonts/aeonik/AeonikTRIAL-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}
```

### Typography Scale & Patterns

| Element             | Usage            | Example Classes                                                             |
|---------------------|------------------|-----------------------------------------------------------------------------|
| **Hero H1**         | Large brand text | `font-aeonik text-[68px] sm:text-[96px] md:text-[128px] tracking-[-0.05em]` |
| **H2 Subtitle**     | Medium headings  | `font-aeonik text-[30px] sm:text-[36px] md:text-[48px] tracking-[-0.05em]`  |
| **Section Headers** | Page headings    | `text-3xl md:text-4xl font-bold text-white`                                 |
| **Body Text**       | Default content  | `text-neutral-300 text-[14px] leading-relaxed`                              |
| **Small Text**      | Labels, captions | `text-xs text-neutral-400`                                                  |

---

## 5. Component Patterns & Library

### A. Button Component

**Path:** `/components/common/Button.tsx`

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}
```

**Variants:**

- `primary`: Blue background with hover
- `secondary`: Gray background with hover
- `outline`: Border-only style

**Sizes:**

- `sm`: `px-4 py-2 text-sm`
- `md`: `px-6 py-3 text-base`
- `lg`: `px-8 py-4 text-lg`

### B. Custom Button Styles (CSS Utilities)

#### Primary Button (Gradient Border)

```css
.primary-button {
    position: relative;
    padding: 12px 16px; /* md: 16px 20px */
    border-radius: 16px;
    font-weight: 600;
    border: 2px solid transparent;
    background-image: linear-gradient(#0a0a0a, #0a0a0a),
    linear-gradient(135deg, #dc8af5, #f58ad8);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-shadow: 0 4px 15px rgba(220, 138, 245, 0.4),
    0 0 20px rgba(220, 138, 245, 0.2);
    font-size: 12px;
}

.primary-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(220, 138, 245, 0.6),
    0 0 30px rgba(220, 138, 245, 0.3);
}

.primary-button-text {
    background: linear-gradient(135deg, #dc8af5, #f58ad8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

**Usage:**

```html
<a href="#projects" className="primary-button">
    <span className="primary-button-text">View Projects</span>
</a>
```

#### Secondary Button

```css
.secondary-button {
    background: var(--color-neutral-950);
    padding: 12px 16px;
    border: 2px solid var(--color-wave-blue);
    border-radius: 16px;
    color: var(--color-wave-blue);
    font-weight: 600;
}

.secondary-button:hover {
    scale: 1.05;
    box-shadow: 0 0 10px var(--color-wave-blue);
}
```

#### General Button

```css
.general-button {
    background: var(--color-neutral-950);
    padding: 12px 16px;
    border: 2px solid var(--color-neutral-700);
    border-radius: 16px;
    color: var(--color-neutral-400);
    font-size: 12px;
}

.general-button:hover {
    scale: 1.05;
    box-shadow: 0 0 5px rgba(220, 138, 245, 0.6);
}
```

### C. Badge Component

**Path:** `/components/common/Badge.tsx`

```typescript
interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'success' | 'warning';
}
```

**Base Classes:** `inline-block px-3 py-1 text-sm font-medium rounded-full`

**Variants:**

- `default`: `bg-gray-100 text-gray-800`
- `primary`: `bg-blue-100 text-blue-800`
- `success`: `bg-green-100 text-green-800`
- `warning`: `bg-yellow-100 text-yellow-800`

### D. Container Component

**Path:** `/components/common/Container.tsx`

```typescript
interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
```

**Max-widths:**

```typescript
const maxWidths = {
    sm: '768px',    // ~max-w-3xl
    md: '896px',    // ~max-w-4xl
    lg: '1024px',   // ~max-w-5xl
    xl: '1280px',   // ~max-w-7xl (default)
    full: '100%',
};
```

**Default Padding:** `px-4 sm:px-6 lg:px-8`

### E. Card Components

#### ProjectCard

**Path:** `/components/cards/ProjectCard.tsx`

```typescript
interface ProjectCardProps {
    project: Project;
    compact?: boolean;  // Shows fewer tech tags (3 vs 5)
}
```

**Features:**

- White background with shadow on hover
- Optional image area (`h-48`)
- Title, role, period, description
- Technology badges
- Key achievements list (first 3)
- GitHub and Live Demo links

#### SkillCard

**Path:** `/components/cards/SkillCard.tsx`

```typescript
interface SkillCardProps {
    skill: Skill;
}
```

**Features:**

- White background with shadow
- Category name as heading
- Items displayed as badges

---

## 6. Responsive Design & Breakpoints

### Tailwind Breakpoints

```
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
```

### Mobile-First Patterns

**Navbar:**

- Mobile: Hamburger menu
- `md+`: Full horizontal menu

**Hero Section:**

- Mobile: Centered text, different background image
- `md+`: Left-aligned text, larger sizing

**Layouts:**

```html
<!-- Single to two columns -->
<div className="grid md:grid-cols-2 gap-8">

    <!-- Single to three columns -->
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Project grid -->
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

**Spacing:**

```html

<div className="gap-4 md:gap-8">
    <section className="py-8 md:py-12">
```

---

## 7. Animation & Transitions

### Keyframe Animations

```css
/* Fade up entrance */
@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Water flow (button shine) */
@keyframes water-flow {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

/* Shimmer effect */
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
```

### Animation Utilities

```css
.animate-fade-up {
    animation: fade-up 1s ease-out forwards;
    opacity: 0;
}

.animation-delay-200 {
    animation-delay: 0.2s;
}

.animation-delay-400 {
    animation-delay: 0.4s;
}

.animation-delay-600 {
    animation-delay: 0.6s;
}

.animation-delay-800 {
    animation-delay: 0.8s;
}

.animation-delay-1000 {
    animation-delay: 1s;
}
```

**Usage:**

```html
<h1 className="animate-fade-up">Hello!</h1>
<h2 className="animate-fade-up animation-delay-200">I'm Manoj</h2>
```

### Transition Patterns

```html
<!-- Standard transitions -->
<div className="transition-all duration-300">
    <a className="transition-colors duration-200">

        <!-- Hover effects -->
        <img className="transition-transform duration-300 hover:scale-105">
        <div className="hover:border-wave-primary/30 transition-all">
```

### Special Animations

**3D Wave** (`/components/common/Interactive3DWave.tsx`):

- Canvas-based particle system (50x50 grid)
- Mouse tracking with 250px influence radius
- Continuous wave motion

**Typing Animation** (`/components/common/TypingCodeAnimation.tsx`):

- Character-by-character reveal
- Props: `typingSpeed` (50ms), `pauseDuration` (2000ms)
- Blinking cursor effect

---

## 8. Image Handling

### Image Assets Location

```
/src/assets/images/
├── hero-profile-image.png        # Desktop hero (1920x1080+)
├── hero-profile-image-3.png      # Mobile hero (800x800+)
├── profile-image.png             # Profile avatar
└── about-bg.png                  # About background
```

### Import Pattern

```typescript
import heroImage from '../../assets/images/hero-profile-image.png';
```

### Background Image Usage

```html
<!-- CSS background -->
<div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
/>
```

### Responsive Images

```html
<!-- Desktop only -->
<div className="hidden md:block" style={{ backgroundImage: `url(${desktopImg})` }}/>

<!-- Mobile only -->
<div className="md:hidden" style={{ backgroundImage: `url(${mobileImg})` }}/>
```

### Image Optimization

**Preloading (in `index.html`):**

```html

<link rel="preload" as="image" href="../../src/assets/images/hero-profile-image-low.jpg"/>
```

**Common Classes:**

```html
<!-- Hero backgrounds -->
className="absolute inset-0 bg-cover bg-center bg-no-repeat"

<!-- Profile images -->
className="w-10 h-10 rounded-full object-cover"

<!-- Hover effects -->
className="hover:scale-105 transition-transform duration-300"
```

---

## 9. Routing Structure

### Route Constants

**Path:** `/router/routes.ts`

```typescript
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    PROJECTS: '/projects',
    CONTACT: '/contact',
    RESUME: '/resume',
} as const;
```

### Router Setup

**Path:** `/router/index.tsx`

- Uses `createBrowserRouter` from React Router v7
- Layout component wraps all routes
- Navbar and Footer persist across pages

**Layout Structure:**

```
<Layout>
  ├─ <Navbar /> (sticky, z-50)
  ├─ <main>
  │   └─ <Outlet /> (page content)
  └─ <Footer /> (mt-auto)
</Layout>
```

---

## 10. Data Management

### Data Structure

**Path:** `/data/portfolio.ts`

```typescript
const portfolioData: PortfolioData = {
    about: {
        name: string;
        title: string;
        tagline: string;
        bio: string;
        yearsOfExperience: {software: number; civil: number;};
    },
    skills: Skill[],
    experience: Experience[],
    projects: Project[],
    education: Education[],
    contact: Contact,
};
```

### Type Definitions

**Path:** `/types/index.ts`

```typescript
export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    period: string;
    technologies: string[];
    achievements: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
    category: 'blockchain' | 'fullstack' | 'automation' | 'freelance';
}

export interface Skill {
    id: string;
    name: string;
    category: 'languages' | 'frontend' | 'backend' | 'blockchain' | 'ai' | 'devops' | 'database' | 'game';
    items?: string[];
}
```

### Content Service

**Path:** `/services/contentServices.ts`

**Available Methods:**

- `getAll()` - Get all portfolio data
- `getProjects()` - Get all projects
- `getProjectById(id)` - Get single project
- `getFeaturedProjects()` - Get featured projects
- `getProjectsByCategory(category)` - Filter by category
- `getAbout()` - Get about data
- `getSkills()` - Get skills
- `getExperience()` - Get work experience
- `getEducation()` - Get education
- `getContact()` - Get contact info

---

## 11. Theme System

### Theme Context

**Path:** `/contexts/ThemeContext.tsx`

```typescript
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}
```

### Theme Implementation

- Classes added to `<html>`: `.light` or `.dark`
- Persisted in `localStorage` as `'theme'`
- System preference detection via `matchMedia`
- Tailwind config: `darkMode: 'class'`

### Dark Mode Patterns

```html
<!-- Background -->
<div className="bg-white dark:bg-neutral-950">

    <!-- Text -->
    <p className="text-neutral-950 dark:text-white">

        <!-- Borders -->
    <div className="border-neutral-200 dark:border-white/10">

        <!-- Hover states -->
        <button className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
```

---

## 12. Layout & Spacing System

### Global Variables

```css
--navbar-height:

50
px

; /* Fixed navbar height */
```

### Navbar Layout

```html

<nav className="sticky top-0 z-50 h-16 shadow-md border-b-2 border-neutral-200 dark:border-white/10">
```

### Section Padding

```html
<!-- Standard sections -->
<Container className="py-20">

    <!-- With navbar offset -->
    <div className="min-h-[calc(100vh-var(--navbar-height))]">
```

### Grid Patterns

```html
<!-- 2-column responsive -->
<div className="grid md:grid-cols-2 gap-8">

    <!-- 3-column responsive -->
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- 4-column project grid -->
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

---

## 13. Creating New Components - Quick Reference

### Template: New Page

```typescript
import {useEffect} from 'react';
import Container from '../components/common/Container';

const NewPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    return (
        <div className = "relative min-h-screen text-neutral-200" >
            {/* Background */}
            < div
    className = "absolute inset-0 bg-black/50 -z-10" / >

        {/* Content */}
        < div
    className = "relative z-10" >
    <Container className = "pt-20 pb-12" >
    <h1 className = "text-gradient font-aeonik text-[56px] md:text-[72px] tracking-[-0.05em] leading-none mb-4 animate-fade-up" >
        Page
    Title
    < /h1>

    {/* Your content here */
    }
    </Container>
    < /div>
    < /div>
)
    ;
};

export default NewPage;
```

### Template: New Card Component

```typescript
interface CustomCardProps {
    // Define your props
}

const CustomCard = ({}: CustomCardProps) => {
    return (
        <div className = "bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all duration-300 hover:scale-[1.02]" >
            {/* Card content */}
            < /div>
    );
};

export default CustomCard;
```

### Common Class Combinations

```html
<!-- Glass card effect -->
<div className="bg-white/5 backdrop-blur-sm border border-white/10">

    <!-- Gradient background -->
    <div className="bg-gradient-to-r from-wave-primary/10 to-wave-secondary/10">

        <!-- Hover card -->
        <div className="transition-all duration-300 hover:scale-[1.02] hover:border-wave-primary/30">

            <!-- Text gradient -->
            <h1 className="text-gradient font-aeonik tracking-[-0.05em]">

                <!-- Responsive spacing -->
                <section className="py-8 md:py-12 lg:py-20">
```

---

## 14. Important Technical Notes

### Performance

- Fixed-width containers use `px` instead of `rem`
- Font display swap for custom fonts
- Hero images preloaded in HTML
- Canvas animations are GPU accelerated

### Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Proper contrast ratios
- System font fallbacks

### Browser Support

- ES2022 target
- CSS Grid and Flexbox required
- Canvas API for 3D wave
- CSS custom properties

---

## 15. Color Combinations for New Designs

### Recommended Gradients

```css
/* Primary Gradient */
linear-gradient

(
135
deg, #dc8af5, #f58ad8

)

/* Full Spectrum */
linear-gradient

(
135
deg, #dc8af5, #f58ad8, #8ab3f5

)

/* Accent Gradient */
linear-gradient

(
135
deg, #8ab3f5, #dc8af5

)
```

### Shadow Patterns

```css
/* Primary button glow */
box-shadow:

0
4
px

15
px
rgba

(
220
,
138
,
245
,
0.4
)
,
0
0
20
px
rgba

(
220
,
138
,
245
,
0.2
)
;

/* Hover glow */
box-shadow:

0
0
5
px
rgba

(
220
,
138
,
245
,
0.6
)
,
0
0
30
px
rgba

(
220
,
138
,
245
,
0.3
)
;

/* Text drop shadow */
filter:
drop-shadow

(
0
4
px

8
px
rgba

(
220
,
138
,
245
,
0.4
)
)
drop-shadow

(
0
8
px

16
px
rgba

(
139
,
179
,
245
,
0.3
)
)
;
```

### Common Color Combinations

| Use Case           | Classes                                              |
|--------------------|------------------------------------------------------|
| **Glass effect**   | `bg-white/5 backdrop-blur-sm border border-white/10` |
| **Card hover**     | `hover:border-wave-primary/30 hover:shadow-lg`       |
| **Dark overlay**   | `bg-black/50` or `bg-neutral-950/80`                 |
| **Gradient text**  | `text-gradient` (predefined class)                   |
| **Primary accent** | `text-wave-primary` or `border-wave-primary`         |

---

## Summary

This design system follows a **dark, modern aesthetic** with purple-blue gradient accents, mobile-first responsive
design, and smooth animations throughout. The color palette centers around the wave colors (`#dc8af5`, `#f58ad8`,
`#8ab3f5`) with a neutral grayscale foundation.

**Key principles:**

- Mobile-first responsive design
- Dark mode by default with light mode support
- Smooth transitions and subtle animations
- Glass morphism and gradient accents
- Consistent spacing and typography scale

When creating new components, always:

1. Use the Container component for consistent max-width and padding
2. Apply responsive classes (`md:`, `lg:`) for mobile-first design
3. Use predefined button styles (`.primary-button`, `.secondary-button`)
4. Include dark mode variants (`dark:`)
5. Add smooth transitions for interactive elements
6. Follow the established color palette and gradients
