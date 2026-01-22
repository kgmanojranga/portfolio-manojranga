# Styling Learnings

## Preventing Navbar/Footer Bounce on Overscroll

### Problem
When scrolling the website, the navbar was trying to move down at the very beginning of the scroll (top of page), and the footer was trying to move up at the very end of the scroll (bottom of page), even when no more content was available to scroll.

This "bounce" or "rubber band" effect is caused by the browser's default overscroll behavior, particularly noticeable on:
- iOS Safari and mobile browsers
- macOS Safari with trackpad gestures
- Any browser with elastic scrolling enabled

### Solution
Use the CSS `overscroll-behavior` property to disable the bounce effect on the vertical axis.

### Implementation

Add the following CSS to prevent overscroll bouncing:

```css
html {
    /* Prevent overscroll bounce effect */
    overscroll-behavior-y: none;
}

body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    /* Prevent overscroll bounce effect */
    overscroll-behavior-y: none;
}
```

**File location:** `client/src/index.css:112-123`

### Explanation

- `overscroll-behavior-y: none` - Prevents the default scroll boundary behavior on the y-axis (vertical scrolling)
- Applied to both `html` and `body` for maximum compatibility across browsers
- This ensures sticky/fixed elements (navbar, footer) stay firmly in place
- Users can still scroll normally within the page content

### Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 16+, macOS 13+)

### References
- [MDN: overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
