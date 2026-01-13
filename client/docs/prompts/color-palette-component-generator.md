# Color System / Design Tokens Showcase – Copilot Prompt

## Role

Act as a senior frontend engineer and design-system architect.

## Objective

Create a **Color System / Design Tokens showcase page** that visually displays **all colors defined in `index.css`** and
demonstrates how they are used across UI elements.

---

## Core Requirements

### 1. Read Colors From `index.css`

- Detect all CSS variables defined in `index.css`
- Automatically render every color as a visual swatch
- Display for each color:
    - Color preview
    - CSS variable name
    - Computed color value (hex or rgb)

### 2. UI Demonstration

Demonstrate each color (or color group) in real UI contexts:

- Headings (H1–H6)
- Paragraph text
- Buttons (primary, secondary, outline)
- Cards
- Badges / labels
- Section backgrounds

### 3. Color Grouping

Organize colors into logical sections such as:

- Brand / primary colors
- Neutral / grayscale colors
- Semantic colors (success, warning, error, info)
- Background colors
- Text colors

### 4. Light & Dark Theme Support

- Use existing CSS variables for theming
- Implement light and dark modes
- Provide a theme toggle
- Ensure the entire page updates dynamically when the theme changes

### 5. Responsive Layout

- Mobile-first design
- Grid layout for color swatches
- Responsive cards and typography previews

---

## Technical Constraints

- Framework: React (functional components)
- Styling must rely **only on CSS variables**
- No hardcoded color values in components
- Semantic HTML
- Clean, readable, production-ready code

---

## Components to Implement

### `ColorSwatch`

- Renders a color block
- Displays variable name and computed value

### `ColorGroup`

- Section wrapper for related colors

### `ThemeToggle`

- Switches between light and dark modes

### `TypographyPreview`

- Displays headings and paragraph text using current theme colors

### `UIShowcaseCard`

- Demonstrates buttons, badges, and backgrounds

### `ColorSystemPage`

- Main page assembling all sections

---

## Output Expectations

- Implement all required components
- Add any missing CSS needed to support light/dark themes
- Include comments explaining:
    - How CSS variables are read
    - How theme switching works
- Ensure new colors added to `index.css` automatically appear on this page

---

## Optional Enhancements

- Copy color value to clipboard
- WCAG contrast indicator (readable / not readable)
- Smooth transitions when switching themes

---

Deliver a clean, scalable, design-system-style color showcase page.
