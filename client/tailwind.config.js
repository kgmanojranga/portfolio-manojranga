/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Note: Tailwind v4 uses @theme directive in CSS files (index.css)
  // This config file is minimal in v4
  plugins: [],
  darkMode: 'class',
};
