# Using Custom Colors in Your Portfolio

## Overview

Your custom grayscale color scheme is defined in `src/index.css` using Tailwind CSS v4's `@theme` directive and can be used in three different ways:

1. **Tailwind utility classes** (in JSX/TSX components) - **Recommended**
2. **CSS variables** (in CSS files)
3. **theme() function** (in CSS files)

---

## 1. Using Colors in Components (Tailwind Classes)

### In React/TypeScript Components (.tsx files)

```jsx
// Brand colors - backgrounds
<div className="bg-white">Main page background</div>
<div className="bg-tertiary">Card/section background</div>
<button className="bg-primary text-white">Primary button</button>
<button className="bg-secondary text-white">Secondary button</button>

// Wave colors - vibrant accents (from Interactive3DWave)
<button className="bg-wave-primary text-white">Main CTA button</button>
<button className="bg-wave-secondary hover:bg-wave-pink">Secondary CTA</button>
<a className="text-wave-accent hover:text-wave-primary">Highlighted link</a>
<div className="bg-wave-bg">Dark section background</div>

// Wave gradient backgrounds
<div className="bg-gradient-to-r from-wave-blue via-wave-purple to-wave-pink">
  Gradient banner
</div>

// Brand colors - text
<h1 className="text-primary">Primary heading</h1>
<p className="text-primary">Primary body text</p>
<p className="text-secondary">Secondary/caption text</p>
<span className="text-white">Text on dark backgrounds</span>
<h2 className="text-wave-primary">Highlighted heading</h2>

// Hover states
<button className="bg-primary hover:bg-primary-hover text-white">
  Button with hover
</button>
<a className="text-primary hover:text-secondary">Link with hover</a>
<a className="text-wave-accent hover:text-wave-purple">Wave link</a>

// Borders
<div className="border border-secondary">Standard border</div>
<div className="border-2 border-primary">Emphasized border</div>
<div className="border border-secondary/30">Subtle border with opacity</div>
<div className="border-2 border-wave-primary">Vibrant border</div>

// All utility types work
<div className="ring-primary">Ring</div>
<div className="ring-wave-purple">Wave ring</div>
<input className="placeholder-secondary" />
<div className="divide-y divide-secondary">Divided sections</div>
```

---

## 2. Using Colors in CSS Files (CSS Variables)

### Method A: Using CSS Variables (Recommended)

The colors are exposed as CSS variables in `:root`:

```css
/* Available variables */
--color-primary           /* #222222 - Dark gray */
--color-primary-hover     /* #000000 - Pure black */
--color-secondary         /* #7B7B7B - Medium gray */
--color-secondary-hover   /* #5a5a5a - Darker gray */
--color-tertiary          /* #F8F8F8 - Off-white */
--color-tertiary-hover    /* #efefef - Slightly darker */
--color-white             /* #FFFFFF - Pure white */

/* Usage example */
.my-custom-class {
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 2px solid var(--color-secondary);
}

.my-button {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.my-button:hover {
  background-color: var(--color-primary-hover);
}

/* In @layer base, @layer components, or @layer utilities */
@layer components {
  .card {
    background-color: var(--color-tertiary);
    border: 1px solid var(--color-secondary);
    color: var(--color-primary);
  }

  .card:hover {
    background-color: var(--color-white);
    border-color: var(--color-primary);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
```

### Method B: Using theme() Function

You can also use Tailwind's `theme()` function directly:

```css
@layer components {
  .custom-button {
    background-color: theme('colors.primary.DEFAULT');
    color: white;
    padding: theme('spacing.4');
    border-radius: theme('borderRadius.lg');
  }

  .custom-button:hover {
    background-color: theme('colors.primary.hover');
  }
}
```

### Method C: Using @apply Directive

Apply Tailwind utility classes directly in CSS:

```css
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded-lg;
    @apply hover:bg-primary-hover transition-colors;
  }

  .card-dark {
    @apply bg-neutral-900 border border-neutral-700;
    @apply hover:border-primary;
  }
}
```

---

## 3. Current Implementation in index.css

In `src/index.css`:

```css
:root {
  /* CSS variables are defined using theme() */
  --color-neutral-950: theme('colors.neutral.950');
  --color-neutral-900: theme('colors.neutral.900');
  --color-neutral-800: theme('colors.neutral.800');
  --color-neutral-700: theme('colors.neutral.700');
  --color-primary: theme('colors.primary.DEFAULT');
  --color-primary-hover: theme('colors.primary.hover');
  --color-accent: theme('colors.accent.DEFAULT');
  --color-accent-hover: theme('colors.accent.hover');
}

/* Then use them with var() */
h1 {
  color: var(--color-primary);
}

a {
  color: var(--color-primary);
}

a:hover {
  color: var(--color-accent);
}
```

---

## Complete Example: All Methods Together

### In Component (Button.tsx)
```tsx
// Using Tailwind utility classes
<button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg">
  Click Me
</button>
```

### In CSS File (custom.css)
```css
/* Method 1: CSS Variables */
.custom-card {
  background-color: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-700);
}

/* Method 2: theme() function */
.custom-heading {
  color: theme('colors.primary.DEFAULT');
  font-size: theme('fontSize.4xl');
}

/* Method 3: @apply directive */
.custom-link {
  @apply text-primary hover:text-accent transition-colors;
}
```

---

## Color Reference

### Brand Colors (Grayscale Scheme)

#### Primary (Dark Gray)
| Variable | Hex | Usage |
|----------|-----|-------|
| `primary` | `#222222` | Primary text, headings, buttons |
| `primary-hover` | `#000000` | Hover state (pure black) |

#### Secondary (Medium Gray)
| Variable | Hex | Usage |
|----------|-----|-------|
| `secondary` | `#7B7B7B` | Secondary text, borders, icons |
| `secondary-hover` | `#5a5a5a` | Hover state (darker gray) |

#### Tertiary (Off-White)
| Variable | Hex | Usage |
|----------|-----|-------|
| `tertiary` | `#F8F8F8` | Card backgrounds, sections |
| `tertiary-hover` | `#efefef` | Hover state (slightly darker) |

#### White
| Variable | Hex | Usage |
|----------|-----|-------|
| `white` | `#FFFFFF` | Main backgrounds, text on dark |

---

### Wave Colors (Option 1: Purple-Dominant)
*Extracted from Interactive3DWave component - vibrant accent colors*

#### Core Wave Colors (Recommended for primary use)
| Variable | Hex | HSL | Usage |
|----------|-----|-----|-------|
| `wave-primary` | `#DC8AF5` | hsl(280, 80%, 70%) | Main brand accent, primary CTAs |
| `wave-secondary` | `#F58AD8` | hsl(300, 80%, 70%) | Secondary CTAs, buttons |
| `wave-accent` | `#8AB3F5` | hsl(220, 80%, 70%) | Links, highlights, info |
| `wave-bg` | `#000000` | hsl(0, 0%, 0%) | Dark backgrounds, sections |

**Tailwind Classes:**
```jsx
bg-wave-primary      text-wave-primary      border-wave-primary
bg-wave-secondary    text-wave-secondary    border-wave-secondary
bg-wave-accent       text-wave-accent       border-wave-accent
bg-wave-bg           text-wave-bg           border-wave-bg
```

#### Full Wave Spectrum (For gradients and variety)
| Variable | Hex | Description | Depth Position |
|----------|-----|-------------|----------------|
| `wave-blue` | `#8AB3F5` | Light Blue | Front particles |
| `wave-periwinkle` | `#8A8AF5` | Periwinkle Blue | - |
| `wave-lavender` | `#B38AF5` | Lavender | - |
| `wave-purple` | `#DC8AF5` | Purple (same as wave-primary) | Center |
| `wave-magenta` | `#F58AD8` | Magenta (same as wave-secondary) | - |
| `wave-pink` | `#F58AAD` | Pink | - |
| `wave-rose` | `#F58A93` | Light Pink | Back particles |

**Gradient Examples:**
```jsx
// Blue to Purple gradient
<div className="bg-gradient-to-r from-wave-blue to-wave-purple">

// Full spectrum gradient
<div className="bg-gradient-to-r from-wave-blue via-wave-purple to-wave-pink">

// Radial gradient
<div className="bg-gradient-radial from-wave-purple to-wave-bg">
```

---

## Best Practices

### 1. In Components: Use Tailwind Classes
```tsx
// ✅ GOOD: Clean and maintainable
<button className="bg-primary hover:bg-primary-hover">Click</button>

// ❌ AVOID: Inline styles
<button style={{ backgroundColor: '#00bbff' }}>Click</button>
```

### 2. In CSS Files: Use CSS Variables for Dynamic Values
```css
/* ✅ GOOD: Uses CSS variables */
.theme-toggle {
  background-color: var(--color-primary);
  transition: background-color 0.3s;
}

.theme-toggle:hover {
  background-color: var(--color-primary-hover);
}

/* ✅ ALSO GOOD: Using @apply for Tailwind utilities */
.theme-toggle {
  @apply bg-primary hover:bg-primary-hover transition-colors;
}
```

### 3. For Reusable Components: Use @apply
```css
@layer components {
  .btn {
    @apply px-6 py-3 rounded-lg font-medium transition-colors;
  }

  .btn-primary {
    @apply bg-primary hover:bg-primary-hover text-white;
  }

  .btn-accent {
    @apply bg-accent hover:bg-accent-hover text-white;
  }
}
```

---

## When to Use Each Method

| Method | When to Use |
|--------|-------------|
| **Tailwind Classes** | Default choice for components. Fast, type-safe (with IntelliSense), and follows Tailwind best practices. |
| **CSS Variables** | When you need dynamic theming, or when working with complex calculations/animations in CSS. |
| **theme() Function** | When defining custom CSS that needs to reference Tailwind theme values directly. |
| **@apply Directive** | When creating reusable component classes that combine multiple Tailwind utilities. |

---

## Example: Creating a Custom Card Component

### Using Tailwind Classes (Recommended)
```tsx
// src/components/Card.tsx
const Card = ({ children }) => (
  <div className="bg-tertiary border border-secondary/30 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
    {children}
  </div>
);
```

### Using @apply in CSS
```css
/* src/components/Card.css */
@layer components {
  .card {
    @apply bg-tertiary border border-secondary/30 rounded-lg p-6;
    @apply hover:border-primary hover:shadow-lg transition-all;
  }
}
```

```tsx
// src/components/Card.tsx
import './Card.css';

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);
```

### Using CSS Variables
```css
/* src/components/Card.css */
.card {
  background-color: var(--color-tertiary);
  border: 1px solid var(--color-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  background-color: var(--color-white);
  border-color: var(--color-primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

## Summary

✅ **Dual color system**: Professional grayscale + vibrant wave accents
✅ **Grayscale colors**: Primary (#222222), Secondary (#7B7B7B), Tertiary (#F8F8F8), White (#FFFFFF)
✅ **Wave colors**: Purple-dominant scheme from Interactive3DWave component
✅ **Defined in `src/index.css`** using Tailwind v4's `@theme` directive
✅ **Available as Tailwind classes**: `bg-primary`, `text-wave-purple`, `border-secondary`, etc.
✅ **Available as CSS variables**: `var(--color-primary)`, `var(--color-wave-primary)`, etc.
✅ **Consistent across your entire app**
✅ **Easy to update**: Change once in index.css, updates everywhere

### Color Usage Quick Guide

#### Grayscale (Base & Content)
- **Primary (#222222)**: Main text, headings, primary buttons
- **Secondary (#7B7B7B)**: Supporting text, borders, icons
- **Tertiary (#F8F8F8)**: Card backgrounds, sections
- **White (#FFFFFF)**: Main page background, text on dark backgrounds

#### Wave Colors (Accents & CTAs)
- **Wave Primary (#DC8AF5)**: Main brand accent, hero elements, primary CTAs
- **Wave Secondary (#F58AD8)**: Secondary CTAs, hover states
- **Wave Accent (#8AB3F5)**: Links, info callouts, highlights
- **Wave BG (#000000)**: Dark sections, overlay backgrounds

#### Usage Strategy
- Use **grayscale** for 80% of your UI (text, backgrounds, structure)
- Use **wave colors** for 20% as accents (CTAs, highlights, hero sections)
- Combine both: `bg-white text-primary` with `border-wave-primary` for vibrant details
