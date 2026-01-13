# Responsive Design Guide for Portfolio Website

## Table of Contents
1. [Overview](#overview)
2. [Breakpoints](#breakpoints)
3. [Container System](#container-system)
4. [Full-Width vs Contained Elements](#full-width-vs-contained-elements)
5. [Component-Specific Guidelines](#component-specific-guidelines)
6. [Best Practices](#best-practices)
7. [Common Patterns](#common-patterns)

---

## Overview

This portfolio website follows a **mobile-first responsive design** approach using Tailwind CSS. This means:
- Base styles are written for mobile devices
- Additional styles are added for larger screens using breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Content is progressively enhanced as screen size increases

---

## Breakpoints

Tailwind CSS uses the following breakpoints:

```
Mobile:     < 640px   (default, no prefix needed)
sm:         ≥ 640px   (Small tablets)
md:         ≥ 768px   (Tablets, small laptops)
lg:         ≥ 1024px  (Laptops, desktops)
xl:         ≥ 1280px  (Large desktops)
2xl:        ≥ 1536px  (Extra large screens)
```

### Usage Examples:
```jsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Mobile: small text, Desktop: large text
<h1 className="text-2xl md:text-4xl lg:text-5xl">

// Mobile: padding 4, Tablet: padding 6, Desktop: padding 8
<div className="px-4 sm:px-6 lg:px-8">
```

---

## Container System

### The Container Component

Located at: `src/components/common/Container.tsx`

```jsx
<Container size="xl">
  {/* Your content here */}
</Container>
```

#### How It Works:

1. **Centers content**: Uses `mx-auto` to center the container
2. **Responsive padding**: Automatically adjusts padding based on screen size
3. **Max width control**: Limits content width for better readability

#### Available Sizes:

| Size   | Max Width | Use Case                                      |
|--------|-----------|-----------------------------------------------|
| `sm`   | 768px     | Narrow content (forms, single column text)    |
| `md`   | 896px     | Medium content (blog posts, articles)         |
| `lg`   | 1024px    | Wide content (dashboards, data tables)        |
| `xl`   | 1280px    | **Default** - Most pages (home, about, etc.)  |
| `full` | 100%      | Full width sections (hero, banners)           |

#### Responsive Padding:

```jsx
// Container applies these classes automatically:
className="px-4 sm:px-6 lg:px-8"

// Translates to:
Mobile (< 640px):     16px horizontal padding
Tablet (≥ 640px):     24px horizontal padding
Desktop (≥ 1024px):   32px horizontal padding
```

---

## Full-Width vs Contained Elements

### Visual Structure:

```
┌─────────────────────────────────────────────────────────────┐
│ Full-Width Background (Navigation, Footer, Hero sections)   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │          Container (max-width, centered)                 │ │
│ │   ┌───────────────────────────────────────────────┐     │ │
│ │   │  Content (responsive padding)                  │     │ │
│ │   └───────────────────────────────────────────────┘     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Rule of Thumb:

#### Elements that should be FULL-WIDTH:
- Navigation bar background
- Footer background
- Hero section backgrounds
- Section backgrounds (with colors/gradients)
- Dividers and separators

#### Elements that should be CONTAINED:
- Text content
- Navigation links
- Cards and grids
- Forms
- Buttons and CTAs
- Images (usually)

### Implementation Pattern:

```jsx
// ✅ CORRECT: Full-width background, contained content
<section className="w-full bg-blue-600">
  <Container>
    <h2>Section Title</h2>
    <p>Section content...</p>
  </Container>
</section>

// ❌ INCORRECT: Container on outer element limits background
<Container className="bg-blue-600">
  <h2>Section Title</h2>
  <p>Section content...</p>
</Container>
```

---

## Component-Specific Guidelines

### 1. Layout Component (`src/components/layout/Layout.tsx`)

```jsx
<div className="flex flex-col min-h-screen bg-gray-50">
  <Navbar />
  <main className="flex-grow w-full">  {/* ← w-full for full-width */}
    <Outlet />
  </main>
  <Footer />
</div>
```

**Key Points:**
- `min-h-screen`: Ensures layout fills viewport height
- `flex-grow`: Main content expands to push footer to bottom
- `w-full`: Main takes full width (each page controls its own container)

---

### 2. Navbar Component

#### Structure:
```jsx
<nav className="bg-white shadow-md sticky top-0 z-50">  {/* ← Full-width background */}
  <Container>  {/* ← Contained content */}
    <div className="flex items-center justify-between py-4">
      <Link className="text-xl sm:text-2xl">Logo</Link>  {/* ← Responsive text size */}

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8">  {/* ← Hidden on mobile */}
        {/* Links */}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden">  {/* ← Visible only on mobile */}
        {/* Hamburger icon */}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden pb-4">  {/* ← Only shows on mobile */}
        {/* Mobile links */}
      </div>
    )}
  </Container>
</nav>
```

**Responsive Behavior:**

| Screen Size | Behavior                                       |
|-------------|------------------------------------------------|
| Mobile      | Hamburger menu button, collapsible menu        |
| Tablet+     | Horizontal navigation links, no hamburger      |

**Key Classes:**
- `sticky top-0`: Navbar stays at top when scrolling
- `z-50`: Ensures navbar appears above other content
- `hidden md:flex`: Desktop menu hidden on mobile
- `md:hidden`: Mobile menu hidden on desktop

---

### 3. Footer Component

#### Structure:
```jsx
<footer className="bg-gray-800 text-white mt-auto">  {/* ← Full-width background */}
  <Container className="py-8 sm:py-12">  {/* ← Responsive padding */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Footer sections */}
    </div>
  </Container>
</footer>
```

**Responsive Grid:**

| Screen Size | Columns | Layout                              |
|-------------|---------|-------------------------------------|
| Mobile      | 1       | All sections stacked vertically     |
| Tablet (sm) | 2       | Two columns side by side            |
| Desktop (lg)| 3       | Three columns for optimal space use |

**Key Classes:**
- `mt-auto`: Pushes footer to bottom (works with flex layout)
- `sm:py-12`: Increases padding on larger screens
- `sm:col-span-2 lg:col-span-1`: Responsive grid spanning

---

### 4. Page Sections

#### Pattern for All Sections:
```jsx
// Hero Section - Full-width background
<section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-20">
  <Container size="lg">
    <h1 className="text-4xl md:text-5xl lg:text-6xl">Title</h1>
    <p className="text-lg md:text-xl">Description</p>
  </Container>
</section>

// Content Section - White background
<section className="py-12 md:py-16 bg-white">
  <Container>
    {/* Content */}
  </Container>
</section>

// Alternating Sections
<section className="py-12 md:py-16 bg-gray-50">
  <Container>
    {/* Content */}
  </Container>
</section>
```

**Responsive Spacing:**

| Element Type      | Mobile    | Tablet     | Desktop    |
|-------------------|-----------|------------|------------|
| Section Padding   | `py-12`   | `md:py-16` | `lg:py-20` |
| Section Gap       | `space-y-8` | `md:space-y-12` | `lg:space-y-16` |
| Heading Size      | `text-3xl` | `md:text-4xl` | `lg:text-5xl` |
| Body Text         | `text-base` | `md:text-lg` | - |

---

### 5. Grid Layouts (Projects, Skills)

```jsx
// Projects Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
</div>

// Skills Grid - 2 columns on mobile
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <SkillCard />
  <SkillCard />
  <SkillCard />
</div>
```

**Grid Breakdowns:**

| Content Type | Mobile | Tablet (sm) | Desktop (md) | Desktop (lg) |
|--------------|--------|-------------|--------------|--------------|
| Projects     | 1 col  | 1 col       | 2 cols       | 3 cols       |
| Skills       | 1 col  | 2 cols      | 2 cols       | 3 cols       |
| Services     | 1 col  | 2 cols      | 2 cols       | 4 cols       |

---

### 6. Cards

```jsx
// Card component with responsive padding
<div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
  <h3 className="text-lg sm:text-xl font-bold">Title</h3>
  <p className="text-sm sm:text-base">Description</p>
</div>
```

**Card Spacing:**

| Element          | Mobile  | Tablet+ |
|------------------|---------|---------|
| Card Padding     | `p-4`   | `sm:p-6` |
| Card Title       | `text-lg` | `sm:text-xl` |
| Card Description | `text-sm` | `sm:text-base` |

---

### 7. Forms

```jsx
<form className="w-full max-w-2xl mx-auto">
  <div className="space-y-4 sm:space-y-6">
    {/* Full-width inputs on mobile */}
    <input className="w-full px-4 py-2 sm:py-3" />

    {/* Side-by-side on desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input className="w-full" />
      <input className="w-full" />
    </div>

    {/* Full-width button on mobile, auto-width on desktop */}
    <button className="w-full sm:w-auto px-8 py-3">
      Submit
    </button>
  </div>
</form>
```

---

## Best Practices

### 1. Always Test Multiple Screen Sizes
- Test at: 320px (small mobile), 768px (tablet), 1024px (laptop), 1440px (desktop)
- Use browser dev tools device emulation
- Check both portrait and landscape orientations

### 2. Touch Target Sizes (Mobile)
```jsx
// ✅ GOOD: Minimum 44x44px touch targets
<button className="px-6 py-3">Click Me</button>

// ❌ BAD: Too small for touch
<button className="px-2 py-1">Click Me</button>
```

### 3. Readable Line Lengths
```jsx
// ✅ GOOD: Limit text width for readability
<Container size="md">
  <p className="text-lg leading-relaxed">
    Long paragraph text...
  </p>
</Container>

// ❌ BAD: Text stretches too wide on large screens
<div className="w-full">
  <p>Long paragraph text...</p>
</div>
```

### 4. Hide/Show Elements Conditionally
```jsx
// Show on desktop only
<div className="hidden lg:block">Desktop only content</div>

// Show on mobile only
<div className="block lg:hidden">Mobile only content</div>

// Show on tablet and up
<div className="hidden sm:block">Tablet and desktop</div>
```

### 5. Responsive Images
```jsx
// ✅ GOOD: Images scale properly
<img
  src="image.jpg"
  alt="Description"
  className="w-full h-auto object-cover rounded-lg"
/>

// With max width to prevent oversizing
<img
  src="image.jpg"
  alt="Description"
  className="w-full max-w-md h-auto"
/>
```

### 6. Responsive Typography Scale
```jsx
// Headings
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
<h2 className="text-2xl sm:text-3xl md:text-4xl">
<h3 className="text-xl sm:text-2xl md:text-3xl">

// Body text
<p className="text-base md:text-lg">
<p className="text-sm md:text-base">
```

### 7. Spacing Scale
```jsx
// Section spacing
<section className="py-8 sm:py-12 md:py-16 lg:py-20">

// Element spacing
<div className="space-y-4 sm:space-y-6 md:space-y-8">

// Gaps in grids
<div className="grid gap-4 sm:gap-6 lg:gap-8">
```

---

## Common Patterns

### Pattern 1: Hero Section
```jsx
<section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24 lg:py-32">
  <Container size="lg">
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
        Your Name
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12">
        Your tagline
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">Primary Action</Button>
        <Button variant="outline" size="lg">Secondary Action</Button>
      </div>
    </div>
  </Container>
</section>
```

### Pattern 2: Two-Column Layout
```jsx
<section className="py-16 md:py-20 bg-white">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Image */}
      <div>
        <img src="..." className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Title</h2>
        <p className="text-lg text-gray-700">Content...</p>
      </div>
    </div>
  </Container>
</section>
```

### Pattern 3: CTA Section
```jsx
<section className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20">
  <Container size="md">
    <div className="text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to get started?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Let's build something amazing together
      </p>
      <Button variant="outline" size="lg" className="bg-white text-blue-600">
        Contact Me
      </Button>
    </div>
  </Container>
</section>
```

### Pattern 4: Stats/Metrics
```jsx
<section className="py-16 bg-gray-50">
  <Container>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-blue-600">50+</div>
        <div className="text-sm md:text-base text-gray-600">Projects</div>
      </div>
      {/* More stats... */}
    </div>
  </Container>
</section>
```

---

## Quick Reference Cheat Sheet

### Width Classes:
```
w-full          → 100% width
w-screen        → 100vw (full viewport width)
max-w-7xl       → Maximum 1280px (Container size="xl")
max-w-4xl       → Maximum 896px (Container size="md")
```

### Display Classes:
```
hidden          → display: none
block           → display: block
flex            → display: flex
grid            → display: grid

md:hidden       → Hide on tablet and up
md:block        → Show on tablet and up
```

### Flexbox Direction:
```
flex-col        → Vertical stacking (mobile)
md:flex-row     → Horizontal on tablet+
```

### Grid Columns:
```
grid-cols-1     → 1 column (mobile)
md:grid-cols-2  → 2 columns on tablet+
lg:grid-cols-3  → 3 columns on desktop
```

### Spacing:
```
px-4            → 16px horizontal padding (mobile)
sm:px-6         → 24px on tablet+
lg:px-8         → 32px on desktop

py-12           → 48px vertical padding (mobile)
md:py-16        → 64px on tablet+
lg:py-20        → 80px on desktop
```

### Text Sizes:
```
text-sm         → 14px
text-base       → 16px
text-lg         → 18px
text-xl         → 20px
text-2xl        → 24px
text-3xl        → 30px
text-4xl        → 36px
```

---

## Debugging Responsive Issues

### 1. Element Not Full Width?
```jsx
// Add w-full to outer container
<section className="w-full bg-blue-600">
```

### 2. Content Too Wide on Mobile?
```jsx
// Ensure Container is being used
<Container>
  {/* Your content */}
</Container>
```

### 3. Breakpoint Not Working?
```jsx
// Check if you're using the correct prefix
md:flex-row  // ✅ Correct
md:flexRow   // ❌ Wrong (not kebab-case)
```

### 4. Text Overflow on Mobile?
```jsx
// Add text wrapping and breaking
<p className="break-words overflow-wrap-anywhere">
  Long text...
</p>
```

---

## Testing Checklist

- [ ] Test on mobile (320px - 640px)
- [ ] Test on tablet (640px - 1024px)
- [ ] Test on desktop (1024px+)
- [ ] Check navigation menu on all sizes
- [ ] Verify text is readable (not too small/large)
- [ ] Ensure buttons are tappable (minimum 44x44px)
- [ ] Check images scale properly
- [ ] Test forms are usable on mobile
- [ ] Verify footer layout on all sizes
- [ ] Check for horizontal scroll issues
- [ ] Test both portrait and landscape orientations

---

## Additional Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Breakpoints](https://tailwindcss.com/docs/breakpoints)
- [Mobile-First Design Principles](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
