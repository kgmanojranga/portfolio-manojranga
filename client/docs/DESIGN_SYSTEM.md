# Design System Documentation

This document outlines the complete design system implementation for Manoj Ranga's portfolio, including colors, typography, spacing, and theming approach.

## Table of Contents
- [Color System](#color-system)
- [Typography](#typography)
- [Dark Mode](#dark-mode)
- [Implementation Details](#implementation-details)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

---

## Color System

### Overview
The portfolio uses a **professional grayscale design** with a clean, minimalist aesthetic. Colors are implemented using Tailwind CSS v4's `@theme` directive, which automatically generates both utility classes and CSS custom properties.

### Color Palette

#### Brand Colors (Grayscale Scheme)

**Primary Color (Dark Gray)**
Main brand color for text, headings, and primary actions:

| Variant | Hex Code | Usage |
|---------|----------|-------|
| primary (DEFAULT) | `#222222` | Primary text, headings, buttons, main UI elements |
| primary-hover | `#000000` | Hover state (pure black) |

**Characteristics:**
- Professional and clean
- Excellent readability
- High contrast on light backgrounds
- Versatile for all UI elements

**Secondary Color (Medium Gray)**
Supporting color for secondary elements and borders:

| Variant | Hex Code | Usage |
|---------|----------|-------|
| secondary (DEFAULT) | `#7B7B7B` | Secondary text, borders, icons, metadata |
| secondary-hover | `#5a5a5a` | Hover state (darker gray) |

**Characteristics:**
- Creates visual hierarchy
- Softer than primary
- Perfect for less important content
- Good for borders and dividers

**Tertiary Color (Off-White)**
Light background color for cards and sections:

| Variant | Hex Code | Usage |
|---------|----------|-------|
| tertiary (DEFAULT) | `#F8F8F8` | Card backgrounds, section backgrounds, subtle surfaces |
| tertiary-hover | `#efefef` | Hover state (slightly darker) |

**Characteristics:**
- Subtle contrast with white
- Comfortable for large areas
- Creates depth without color
- Maintains clean aesthetic

**White**
Pure white for main backgrounds:

| Variant | Hex Code | Usage |
|---------|----------|-------|
| white (DEFAULT) | `#FFFFFF` | Main page background, pure white surfaces |

#### Neutral Grays (Extended Palette)
Additional grayscale shades for flexibility:

| Shade | Hex Code | Usage |
|-------|----------|-------|
| neutral-50 | `#fafafa` | Lightest backgrounds |
| neutral-100 | `#f5f5f5` | Very light surfaces |
| neutral-200 | `#e5e5e5` | Light borders, dividers |
| neutral-300 | `#d4d4d4` | Subtle borders |
| neutral-400 | `#a3a3a3` | Placeholder text |
| neutral-500 | `#737373` | Muted text |
| neutral-600 | `#525252` | Secondary text |
| neutral-700 | `#404040` | Dark text |
| neutral-800 | `#262626` | Very dark backgrounds |
| neutral-900 | `#171717` | Darkest backgrounds |
| neutral-950 | `#0a0a0a` | Almost black |

**Note**: These neutral shades provide additional options but the brand colors (primary, secondary, tertiary, white) should be used primarily for consistency.

### Color Implementation (Tailwind v4)

Colors are defined in `src/index.css` using the `@theme` directive:

```css
@theme {
    /* Brand Colors - Grayscale Scheme */
    --color-primary-*: initial;
    --color-primary: #222222;        /* Dark gray */
    --color-primary-hover: #000000;  /* Pure black */

    --color-secondary-*: initial;
    --color-secondary: #7B7B7B;      /* Medium gray */
    --color-secondary-hover: #5a5a5a; /* Darker gray */

    --color-tertiary-*: initial;
    --color-tertiary: #F8F8F8;       /* Off-white */
    --color-tertiary-hover: #efefef; /* Slightly darker */

    --color-white-*: initial;
    --color-white: #FFFFFF;          /* Pure white */

    /* Neutral palette - extended grayscale */
    --color-neutral-50: #fafafa;
    --color-neutral-100: #f5f5f5;
    /* ... more neutral shades ... */
}
```

**How it works:**
- `@theme` directive automatically generates Tailwind utility classes (`bg-primary`, `text-secondary`, etc.)
- Also creates CSS custom properties (`var(--color-primary)`, `var(--color-secondary)`)
- The `--color-primary-*: initial` pattern enables `primary` to work as DEFAULT value
- No need to extend theme in `tailwind.config.js` with v4

---

## Typography

### Font Families

#### Inter (Sans-serif) - Primary Font
- **Purpose**: UI elements, body text, headings
- **Weights**: 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Characteristics**: Modern, highly legible, optimized for screens
- **Usage**: Default for all text unless specified otherwise

#### IBM Plex Mono (Monospace) - Code Font
- **Purpose**: Code blocks, technical content, monospaced text
- **Weights**: 100, 200, 300, 400, 500, 600, 700
- **Characteristics**: Clean, professional monospace design
- **Usage**: Code snippets, technical details, terminal output

### Font Loading

Fonts are loaded via Google Fonts CDN in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
```

**Performance optimizations:**
- `preconnect` for faster DNS resolution
- `display=swap` for font loading strategy
- Combined font request for reduced HTTP calls

### Font Configuration (Tailwind v4)

Fonts are defined in `src/index.css` using `@theme`:

```css
@theme {
    --font-family-sans: 'Inter', system-ui, sans-serif;
    --font-family-mono: 'IBM Plex Mono', monospace;
}
```

Applied as default in `@layer base`:

```css
@layer base {
    :root {
        font-family: 'Inter', system-ui, sans-serif;
        line-height: 1;
        font-weight: 400;

        /* Rendering optimizations */
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
}
```

### Typography Scale

Use Tailwind's default typography scale for consistency:

| Class | Font Size | Line Height | Usage |
|-------|-----------|-------------|-------|
| text-xs | 0.75rem (12px) | 1rem | Small labels, captions |
| text-sm | 0.875rem (14px) | 1.25rem | Small text, metadata |
| text-base | 1rem (16px) | 1.5rem | Body text (default) |
| text-lg | 1.125rem (18px) | 1.75rem | Large body text |
| text-xl | 1.25rem (20px) | 1.75rem | Small headings |
| text-2xl | 1.5rem (24px) | 2rem | Section headings |
| text-3xl | 1.875rem (30px) | 2.25rem | Page headings |
| text-4xl | 2.25rem (36px) | 2.5rem | Hero headings |
| text-5xl | 3rem (48px) | 1 | Large hero headings |
| text-6xl | 3.75rem (60px) | 1 | Extra large headings |

---

## Dark Mode

### Implementation Approach

The project uses **class-based dark mode** with a custom variant for Tailwind v4.

#### Custom Dark Mode Variant

Defined in `src/index.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

**How it works:**
- When `.dark` class is added to an element, all children can use `dark:` variants
- Provides more control than media query approach
- Allows user preference toggle

#### Tailwind Config

In `tailwind.config.js`:

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [],
};
```

### Dark Mode Context

Dark mode state is managed globally using React Context (see `src/contexts/ThemeContext.tsx`):

```typescript
// Toggle dark mode
const { isDark, toggleTheme } = useTheme();

// Automatically applies .dark class to document root
```

### Using Dark Mode in Components

```tsx
// Background that changes based on theme
<div className="bg-neutral-100 dark:bg-neutral-900">

// Text that adapts to theme
<p className="text-neutral-900 dark:text-neutral-100">

// Border color
<div className="border-neutral-200 dark:border-neutral-700">
```

---

## Implementation Details

### Tailwind CSS v4 Setup

#### 1. Installation

```bash
yarn add -D tailwindcss @tailwindcss/postcss autoprefixer
```

#### 2. PostCSS Configuration

`postcss.config.js`:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

#### 3. Import Tailwind in CSS

`src/index.css`:

```css
@import "tailwindcss";
```

**Note**: Tailwind v4 uses a single `@import` instead of the v3 directives:
- ~~`@tailwind base`~~ (v3) → Part of `@import "tailwindcss"` (v4)
- ~~`@tailwind components`~~ (v3) → Part of `@import "tailwindcss"` (v4)
- ~~`@tailwind utilities`~~ (v4) → Part of `@import "tailwindcss"` (v4)

#### 4. Minimal Tailwind Config

In Tailwind v4, most theme configuration moves to CSS using `@theme`:

```javascript
// tailwind.config.js (minimal)
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [],
};
```

### Complete CSS Setup

`src/index.css` structure:

```css
/* 1. Import Tailwind */
@import "tailwindcss";

/* 2. Define custom dark mode variant */
@custom-variant dark (&:where(.dark, .dark *));

/* 3. Define theme (colors, fonts, etc.) */
@theme {
    /* Colors */
    --color-neutral-950: #030712;
    /* ... more colors ... */

    /* Fonts */
    --font-family-sans: 'Inter', system-ui, sans-serif;
    --font-family-mono: 'IBM Plex Mono', monospace;
}

/* 4. Base styles */
@layer base {
    :root {
        font-family: 'Inter', system-ui, sans-serif;
        /* ... root styles ... */
    }

    body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
    }

    /* Global element styles */
    h1 { color: var(--color-primary); }
    a { color: var(--color-primary); }
    a:hover { color: var(--color-accent); }
}
```

---

## Usage Examples

### Color Utility Classes

#### Backgrounds

```tsx
// Main backgrounds
<div className="bg-white">Main page background</div>
<div className="bg-tertiary">Card/section background</div>

// Brand color backgrounds
<button className="bg-primary hover:bg-primary-hover text-white">Primary button</button>
<button className="bg-secondary hover:bg-secondary-hover text-white">Secondary button</button>

// Neutral backgrounds for variety
<div className="bg-neutral-50">Very light background</div>
<div className="bg-neutral-100">Light background</div>
```

#### Text Colors

```tsx
// Primary text
<h1 className="text-primary">Main heading</h1>
<p className="text-primary">Primary body text</p>

// Secondary text
<p className="text-secondary">Secondary text, captions, metadata</p>
<span className="text-secondary">Muted information</span>

// Links and interactive text
<a className="text-primary hover:text-primary-hover">Link text</a>
<button className="text-primary hover:text-secondary">Text button</button>

// Using opacity for hierarchy
<p className="text-primary/80">Slightly muted primary text</p>
<p className="text-secondary/60">Very muted secondary text</p>
```

#### Borders

```tsx
<div className="border border-secondary">Standard border</div>
<div className="border-2 border-primary">Emphasized border</div>
<div className="border-b border-neutral-200">Subtle divider</div>
<div className="divide-y divide-secondary">Divided sections</div>
```

### Typography Examples

```tsx
// Font families
<div className="font-sans">Default UI text (Inter)</div>
<code className="font-mono">Code snippet (IBM Plex Mono)</code>

// Font weights
<h1 className="font-bold">Bold heading</h1>
<p className="font-medium">Medium body text</p>
<span className="font-light">Light text</span>

// Font sizes
<h1 className="text-5xl font-bold">Hero heading</h1>
<h2 className="text-3xl font-semibold">Section heading</h2>
<p className="text-base">Body paragraph</p>
<small className="text-sm text-neutral-400">Caption text</small>
```

### Complete Component Examples

#### Hero Section

```tsx
<section className="bg-white min-h-screen flex items-center justify-center">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-6xl font-bold text-primary mb-4">
      MANOJ RANGA
    </h1>
    <p className="text-2xl text-secondary mb-6">
      Full-Stack Developer | Blockchain Engineer
    </p>
    <p className="text-lg text-secondary/80 mb-8">
      Building scalable applications with React, TypeScript, and blockchain technologies
    </p>
    <div className="flex gap-4 justify-center">
      <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition">
        View Projects
      </button>
      <button className="bg-tertiary hover:bg-tertiary-hover text-primary px-8 py-3 rounded-lg font-medium transition border border-secondary">
        Get In Touch
      </button>
    </div>
  </div>
</section>
```

#### Project Card

```tsx
<div className="bg-tertiary rounded-lg overflow-hidden hover:shadow-lg transition group border border-secondary/20">
  <div className="aspect-video bg-neutral-100">
    {/* Project thumbnail */}
  </div>
  <div className="p-6">
    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-hover transition">
      WeMeme - DeFi Platform
    </h3>
    <p className="text-secondary mb-4">
      Solana-based token launch platform with real-time blockchain monitoring
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-white text-primary text-sm rounded-full font-mono border border-secondary/30">
        Rust
      </span>
      <span className="px-3 py-1 bg-white text-primary text-sm rounded-full font-mono border border-secondary/30">
        Solana
      </span>
    </div>
    <a href="#" className="text-primary hover:text-secondary font-medium">
      Learn more →
    </a>
  </div>
</div>
```

#### Button Component

```tsx
// Primary button
<button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors">
  Primary Action
</button>

// Secondary button
<button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors">
  Secondary Action
</button>

// Outline button
<button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
  Outline Button
</button>

// Tertiary/Ghost button
<button className="bg-tertiary hover:bg-tertiary-hover text-primary border border-secondary/30 px-6 py-3 rounded-lg font-medium transition-colors">
  Tertiary Action
</button>
```

### Using CSS Custom Properties

For custom CSS or when Tailwind utilities aren't suitable:

```css
.custom-card {
  background-color: var(--color-tertiary);
  color: var(--color-primary);
  border: 1px solid var(--color-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.custom-card:hover {
  background-color: var(--color-white);
  border-color: var(--color-primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-link {
  color: var(--color-primary);
  font-family: var(--font-family-sans);
  text-decoration: none;
  transition: color 0.2s ease;
}

.custom-link:hover {
  color: var(--color-secondary);
}

.code-block {
  background-color: var(--color-tertiary);
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-neutral-200);
  overflow-x: auto;
}
```

---

## Best Practices

### Color Usage Guidelines

#### Do's ✅

1. **Use white for main backgrounds**
   ```tsx
   <body className="bg-white">
   ```

2. **Use tertiary for card/section backgrounds**
   ```tsx
   <div className="bg-tertiary rounded-lg p-6">
   ```

3. **Use primary for text, headings, and key elements**
   ```tsx
   <h1 className="text-primary">Heading</h1>
   <button className="bg-primary text-white">Action</button>
   ```

4. **Use secondary for supporting text and borders**
   ```tsx
   <p className="text-secondary">Caption text</p>
   <div className="border border-secondary">
   ```

5. **Use opacity for subtle variations**
   ```tsx
   <p className="text-primary/80">Slightly muted text</p>
   <div className="border border-secondary/30">Subtle border</div>
   ```

#### Don'ts ❌

1. **Don't use too many background colors**
   ```tsx
   {/* Avoid - stick to white and tertiary for most backgrounds */}
   <div className="bg-neutral-200">
   ```

2. **Don't use pure black (#000000) except for hover states**
   ```tsx
   {/* Avoid for text - use primary (#222222) instead */}
   <p className="text-black">

   {/* Prefer */}
   <p className="text-primary">
   ```

3. **Don't skip contrast checks**
   - Ensure text has sufficient contrast against backgrounds
   - Primary (#222222) and secondary (#7B7B7B) work well on white/tertiary
   - Always test readability

4. **Don't hardcode colors**
   ```tsx
   {/* Avoid */}
   <div style={{ backgroundColor: '#222222' }}>

   {/* Use Tailwind classes instead */}
   <div className="bg-primary">
   ```

5. **Don't overuse neutral shades**
   ```tsx
   {/* The brand colors should be your first choice */}
   {/* Use neutral-50 through neutral-950 only when needed */}
   ```

### Typography Best Practices

#### Hierarchy

```tsx
// Good hierarchy example
<article>
  <h1 className="text-5xl font-bold text-white mb-4">Article Title</h1>
  <p className="text-lg text-neutral-400 mb-6">Subtitle or lead paragraph</p>
  <div className="text-base text-white/90 space-y-4">
    <p>Body content...</p>
  </div>
</article>
```

#### Responsive Typography

```tsx
// Scale font sizes responsively
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
  Responsive Heading
</h1>

// Adjust line height for readability
<p className="text-base leading-relaxed lg:text-lg lg:leading-loose">
  Readable body text with appropriate line height
</p>
```

#### Code Formatting

```tsx
// Use mono font for code
<code className="font-mono text-sm bg-neutral-900 text-primary px-2 py-1 rounded">
  const example = true;
</code>

// Code blocks
<pre className="font-mono text-sm bg-neutral-900 text-primary p-4 rounded-lg overflow-x-auto">
  {codeContent}
</pre>
```

### Spacing & Layout

```tsx
// Consistent spacing with Tailwind's scale
<div className="space-y-4">      {/* 1rem gaps */}
<div className="space-y-6">      {/* 1.5rem gaps */}
<div className="space-y-8">      {/* 2rem gaps */}

// Padding
<div className="p-4">           {/* 1rem all sides */}
<div className="px-6 py-4">     {/* Horizontal: 1.5rem, Vertical: 1rem */}

// Container widths
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Responsive container */}
</div>
```

### Performance

1. **Lazy load images below the fold**
2. **Use WebP format with fallbacks**
3. **Minimize use of shadows and complex gradients**
4. **Use CSS transforms for animations** (instead of position changes)
5. **Avoid excessive @apply in CSS** (use utility classes directly)

---

## Future Enhancements

### Potential Additions

1. **Light Mode Theme**
   - Complete light theme using neutral-50 to neutral-400
   - Adjust primary and accent colors for light backgrounds
   - Theme toggle component

2. **Additional Semantic Colors**
   ```css
   @theme {
       --color-success: #10b981;
       --color-warning: #f59e0b;
       --color-error: #ef4444;
       --color-info: #3b82f6;
   }
   ```

3. **Gradient Utilities**
   ```css
   @theme {
       --color-gradient-primary: linear-gradient(135deg, #00bbff, #fb64b6);
       --color-gradient-dark: linear-gradient(180deg, #030712, #11131e);
   }
   ```

4. **Animation Presets**
   - Fade in/out
   - Slide transitions
   - Scale effects
   - Loading states

5. **Component Variants**
   - Button sizes (sm, md, lg, xl)
   - Input styles
   - Card variants
   - Badge styles

---

## Troubleshooting

### Common Issues

**Issue**: Tailwind classes not working
- **Check**: Is `@import "tailwindcss"` at the top of `index.css`?
- **Check**: Is PostCSS configured correctly?
- **Check**: Are the content paths correct in `tailwind.config.js`?

**Issue**: Custom colors not generating utilities
- **Check**: Are colors defined in `@theme` block in `index.css`?
- **Check**: Is the syntax correct (`--color-name: value`)?
- **Check**: For DEFAULT colors, use the wildcard pattern (`--color-primary-*: initial`)

**Issue**: Dark mode not working
- **Check**: Is `darkMode: 'class'` set in `tailwind.config.js`?
- **Check**: Is the custom variant defined (`@custom-variant dark`)?
- **Check**: Is `.dark` class being applied to the root element?

**Issue**: Fonts not loading
- **Check**: Are font links in `<head>` of `index.html`?
- **Check**: Do font names in `@theme` match Google Fonts names exactly?
- **Check**: Are quotes around font names in CSS?

**Issue**: CSS variables not working in JavaScript
```typescript
// Correct way to access CSS variables
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary');
```

---

## Version Information

- **Tailwind CSS**: v4.x (using `@import` and `@theme` syntax)
- **PostCSS**: Latest compatible version
- **React**: 19.x
- **TypeScript**: 5.8+

---

## References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Google Fonts - IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Dark Mode Implementation](https://tailwindcss.com/docs/dark-mode)

---

## Quick Reference

### Most Used Color Classes

```tsx
// Backgrounds
bg-white        // Main page background
bg-tertiary     // Card/section backgrounds
bg-primary      // Primary buttons
bg-secondary    // Secondary buttons

// Text
text-primary    // Primary text, headings
text-secondary  // Secondary text, captions
text-white      // Text on dark backgrounds

// Borders
border-secondary    // Standard borders
border-primary      // Emphasized borders
border-secondary/30 // Subtle borders (with opacity)

// Hover States
hover:bg-primary-hover      // Primary hover
hover:bg-secondary-hover    // Secondary hover
hover:bg-tertiary-hover     // Tertiary hover
hover:text-primary-hover    // Text hover
```

### Most Used Typography Classes

```tsx
// Headings
text-6xl font-bold        // Hero (60px)
text-4xl font-bold        // Page title (36px)
text-2xl font-semibold    // Section heading (24px)
text-xl font-medium       // Subsection (20px)

// Body
text-base                 // Body text (16px)
text-sm text-neutral-400  // Caption (14px)
text-xs text-neutral-500  // Small text (12px)

// Code
font-mono text-sm         // Inline code
font-mono text-primary    // Code highlighting
```
