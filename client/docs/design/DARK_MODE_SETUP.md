# Dark Mode Setup Guide

## Step-by-Step Dark Mode Configuration

### Step 1: Configure Tailwind for Dark Mode

Tailwind supports two dark mode strategies:

#### Option A: `media` Strategy (Automatic - System Preference)
```js
// tailwind.config.js
export default {
  darkMode: 'media', // Follows system preference
}
```
- ✅ Automatically matches user's OS dark mode setting
- ❌ No manual toggle - users can't override

#### Option B: `class` Strategy (Manual Toggle) ⭐ RECOMMENDED
```js
// tailwind.config.js
export default {
  darkMode: 'class', // Uses .dark class on <html> element
}
```
- ✅ Full control with toggle button
- ✅ Can remember user preference
- ✅ Can still respect system preference as default

### Step 2: How Dark Mode Works

When `darkMode: 'class'` is configured:

```tsx
// Add .dark class to activate dark mode
<html className="dark">
  <body>
    {/* All dark: variants now work */}
  </body>
</html>
```

```tsx
// Use dark: prefix in your components
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-black dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
</div>
```

### Step 3: Create Dark Mode Context

Create a React Context to manage dark mode state globally:

```tsx
// src/contexts/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get saved theme from localStorage or default to 'system'
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    let effectiveTheme: 'light' | 'dark';

    if (theme === 'system') {
      // Use system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      effectiveTheme = systemTheme;
    } else {
      effectiveTheme = theme;
    }

    // Apply theme
    root.classList.add(effectiveTheme);
    setIsDark(effectiveTheme === 'dark');

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Step 4: Wrap App with ThemeProvider

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Step 5: Create Dark Mode Toggle Component

```tsx
// src/components/common/ThemeToggle.tsx
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        // Sun icon for light mode
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
```

### Step 6: Add Toggle to Navbar

```tsx
// In your Navbar component
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/">Logo</Link>

          <div className="flex items-center gap-4">
            <ul className="flex space-x-8">
              {/* Navigation links */}
            </ul>

            {/* Add theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
};
```

### Step 7: Update Components with Dark Mode Classes

```tsx
// Example: Update existing components
<div className="bg-white dark:bg-neutral-900">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
  <button className="bg-blue-600 dark:bg-blue-500 text-white">
    Button
  </button>
</div>
```

---

## Common Dark Mode Patterns

### Backgrounds
```tsx
// Page backgrounds
<div className="bg-white dark:bg-neutral-950">

// Card backgrounds
<div className="bg-gray-50 dark:bg-neutral-900">

// Elevated surfaces
<div className="bg-white dark:bg-neutral-800">
```

### Text Colors
```tsx
// Headings
<h1 className="text-gray-900 dark:text-white">

// Body text
<p className="text-gray-600 dark:text-gray-300">

// Muted text
<span className="text-gray-400 dark:text-gray-500">
```

### Borders
```tsx
<div className="border border-gray-200 dark:border-gray-700">
```

### Shadows
```tsx
<div className="shadow-md dark:shadow-lg dark:shadow-neutral-900/50">
```

### Buttons
```tsx
// Primary button
<button className="bg-primary hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover">

// Secondary button
<button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">

// Outline button
<button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
```

### Forms
```tsx
<input className="bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
```

---

## Testing Dark Mode

### 1. Toggle Button
- Click the sun/moon icon in navbar
- Verify colors change smoothly

### 2. System Preference
- Set theme to "system"
- Change OS dark mode setting
- Verify app follows system preference

### 3. Persistence
- Toggle dark mode
- Refresh page
- Verify preference is remembered

### 4. All Pages
- Navigate through all pages
- Check all components render correctly in both modes

---

## Color Palette Reference

### Your Custom Colors (Work in Both Modes)
```tsx
// These work as-is in both light and dark mode
<div className="bg-primary">     {/* Cyan #00bbff */}
<div className="bg-accent">      {/* Pink #fb64b6 */}
<div className="bg-neutral-950"> {/* Darkest #030712 */}
```

### Recommended Light/Dark Pairs

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Page background | `bg-white` | `bg-neutral-950` |
| Card background | `bg-gray-50` | `bg-neutral-900` |
| Elevated surface | `bg-white` | `bg-neutral-800` |
| Heading text | `text-gray-900` | `text-white` |
| Body text | `text-gray-600` | `text-gray-300` |
| Muted text | `text-gray-400` | `text-gray-500` |
| Borders | `border-gray-200` | `border-gray-700` |
| Dividers | `border-gray-100` | `border-gray-800` |

---

## Advanced: Three-Way Toggle (Light / Dark / System)

```tsx
// Enhanced ThemeToggle with dropdown
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' },
  ];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        {theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '💻'}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value as Theme);
                setIsOpen(false);
              }}
              className={theme === t.value ? 'bg-gray-100 dark:bg-neutral-700' : ''}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## Troubleshooting

### Dark mode not working?
1. Check `darkMode: 'class'` is in `tailwind.config.js`
2. Verify ThemeProvider wraps your app
3. Check `.dark` class is on `<html>` element (inspect in DevTools)
4. Ensure components use `dark:` prefix

### Colors not changing?
1. Make sure you're using `dark:` variants
2. Check CSS specificity isn't overriding
3. Verify Tailwind is compiling (restart dev server)

### Toggle not persisting?
1. Check localStorage is working (browser permissions)
2. Verify `localStorage.setItem/getItem` calls
3. Check for errors in browser console

---

## Summary

✅ **Step 1**: Set `darkMode: 'class'` in `tailwind.config.js`
✅ **Step 2**: Create ThemeContext to manage state
✅ **Step 3**: Wrap app with ThemeProvider
✅ **Step 4**: Create ThemeToggle component
✅ **Step 5**: Add toggle to Navbar
✅ **Step 6**: Add `dark:` variants to all components
✅ **Step 7**: Test and refine

Your dark mode is now fully functional! 🎉
