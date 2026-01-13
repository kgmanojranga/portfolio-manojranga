import { useState } from 'react';
// import { useTheme } from '../contexts/ThemeContext'; // Not needed - dark mode only
import Container from '../components/common/Container';
import ColorSwatch from '../components/design-system/ColorSwatch';
import ColorGroup from '../components/design-system/ColorGroup';
import TypographyPreview from '../components/design-system/TypographyPreview';
import UIShowcaseCard from '../components/design-system/UIShowcaseCard';
import ColorControls, { type ColorScheme } from '../components/design-system/ColorControls';
import PortfolioPreview from '../components/design-system/PortfolioPreview';

const ColorSystemPage = () => {
  // const { isDark } = useTheme(); // Not needed - dark mode only
  const [activeTab, setActiveTab] = useState<'colors' | 'preview'>('colors');

  // Theme toggle removed - dark mode only
  // To re-enable: uncomment ThemeToggle in Navbar and restore setTheme + isDark usage

  // Initial color scheme for preview
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    primaryHeading: '#DC8AF5',
    secondaryHeading: '#F58AD8',
    bodyText: '#FFFFFF',
    cardBackground: '#1a1a1a',
    sectionBackground: '#0a0a0a',
    accentColor: '#8AB3F5',
    buttonPrimary: '#DC8AF5',
    buttonText: '#FFFFFF',
    gradientStart: '#DC8AF5',
    gradientEnd: '#8AB3F5',
  });

  // Define all color variables from index.css
  const brandColors = [
    { varName: '--color-primary', varValue: '#222222' },
    { varName: '--color-primary-hover', varValue: '#000000' },
    { varName: '--color-secondary', varValue: '#7B7B7B' },
    { varName: '--color-secondary-hover', varValue: '#5a5a5a' },
    { varName: '--color-tertiary', varValue: '#F8F8F8' },
    { varName: '--color-tertiary-hover', varValue: '#efefef' },
    { varName: '--color-white', varValue: '#FFFFFF' },
  ];

  const waveColors = [
    { varName: '--color-wave-primary', varValue: '#DC8AF5' },
    { varName: '--color-wave-secondary', varValue: '#F58AD8' },
    { varName: '--color-wave-accent', varValue: '#8AB3F5' },
    { varName: '--color-wave-bg', varValue: '#000000' },
  ];

  const waveSpectrum = [
    { varName: '--color-wave-blue', varValue: '#8AB3F5' },
    { varName: '--color-wave-periwinkle', varValue: '#8A8AF5' },
    { varName: '--color-wave-lavender', varValue: '#B38AF5' },
    { varName: '--color-wave-purple', varValue: '#DC8AF5' },
    { varName: '--color-wave-magenta', varValue: '#F58AD8' },
    { varName: '--color-wave-pink', varValue: '#F58AAD' },
    { varName: '--color-wave-rose', varValue: '#F58A93' },
  ];

  const neutralColors = [
    { varName: '--color-neutral-50', varValue: '#fafafa' },
    { varName: '--color-neutral-100', varValue: '#f5f5f5' },
    { varName: '--color-neutral-200', varValue: '#e5e5e5' },
    { varName: '--color-neutral-300', varValue: '#d4d4d4' },
    { varName: '--color-neutral-400', varValue: '#a3a3a3' },
    { varName: '--color-neutral-500', varValue: '#737373' },
    { varName: '--color-neutral-600', varValue: '#525252' },
    { varName: '--color-neutral-700', varValue: '#404040' },
    { varName: '--color-neutral-800', varValue: '#262626' },
    { varName: '--color-neutral-900', varValue: '#171717' },
    { varName: '--color-neutral-950', varValue: '#0a0a0a' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Header with tabs and theme toggle */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-[var(--navbar-height)] z-40">
        <Container>
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-aeonik font-bold text-neutral-950 dark:text-white">
                Design System
              </h1>
              {/* Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'colors'
                      ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  Colors
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  Preview
                </button>
              </div>
            </div>
            {/* Theme toggle removed - dark mode only */}
          </div>
        </Container>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'colors' ? (
        <Container className="py-12">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
            A complete showcase of all colors, typography, and UI components defined in the design system.
            All colors are dynamically read from CSS variables defined in <code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded">index.css</code>.
          </p>

          {/* Brand Colors */}
          <ColorGroup
            title="Brand Colors"
            description="Primary grayscale palette for text, headings, and key UI elements"
          >
            {brandColors.map((color) => (
              <ColorSwatch
                key={color.varName}
                varName={color.varName}
                varValue={color.varValue}
              />
            ))}
          </ColorGroup>

          {/* Wave Colors - Main */}
          <ColorGroup
            title="Wave Colors"
            description="Main wave palette used for interactive 3D wave background and accent elements"
          >
            {waveColors.map((color) => (
              <ColorSwatch
                key={color.varName}
                varName={color.varName}
                varValue={color.varValue}
              />
            ))}
          </ColorGroup>

          {/* Wave Spectrum */}
          <ColorGroup
            title="Wave Color Spectrum"
            description="Full gradient spectrum for wave particles and visual variety"
          >
            {waveSpectrum.map((color) => (
              <ColorSwatch
                key={color.varName}
                varName={color.varName}
                varValue={color.varValue}
              />
            ))}
          </ColorGroup>

          {/* Neutral Colors */}
          <ColorGroup
            title="Neutral Colors"
            description="Extended grayscale palette for backgrounds, borders, and secondary UI elements"
          >
            {neutralColors.map((color) => (
              <ColorSwatch
                key={color.varName}
                varName={color.varName}
                varValue={color.varValue}
              />
            ))}
          </ColorGroup>

          {/* Typography Preview */}
          <TypographyPreview />

          {/* UI Components Showcase */}
          <UIShowcaseCard />

          {/* Implementation Notes */}
          <section className="mt-12 p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
            <h2 className="text-3xl font-aeonik font-bold text-neutral-950 dark:text-white mb-4">
              Implementation Notes
            </h2>
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <div>
                <h3 className="font-semibold text-neutral-950 dark:text-white mb-2">
                  How CSS Variables are Used
                </h3>
                <p className="mb-2">
                  All colors are defined as CSS variables in <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">src/index.css</code> using the <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">@theme</code> directive for Tailwind v4.
                </p>
                <pre className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-xs overflow-x-auto">
{`@theme {
  --color-primary: #222222;
  --color-wave-primary: #DC8AF5;
  /* ... */
}`}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-950 dark:text-white mb-2">
                  Theme Switching
                </h3>
                <p>
                  The theme toggle uses React Context (<code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">ThemeContext</code>) to manage light/dark mode.
                  The <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">.dark</code> class is applied to the root element,
                  triggering Tailwind's <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">dark:</code> variant styles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-950 dark:text-white mb-2">
                  Adding New Colors
                </h3>
                <p>
                  To add new colors to the design system:
                </p>
                <ol className="list-decimal list-inside space-y-1 ml-4 mt-2">
                  <li>Define the color variable in <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">src/index.css</code> under the <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">@theme</code> block</li>
                  <li>Add the color to the appropriate array in this page</li>
                  <li>Use the color in your components via Tailwind utilities (e.g., <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm">bg-wave-primary</code>)</li>
                </ol>
              </div>
            </div>
          </section>
        </Container>
      ) : (
        /* Preview Tab */
        <div className="grid lg:grid-cols-[350px_1fr] gap-6 p-6">
          <div className="lg:h-[calc(100vh-var(--navbar-height)-100px)] overflow-y-auto">
            <ColorControls colorScheme={colorScheme} setColorScheme={setColorScheme} />
          </div>
          <div className="overflow-y-auto bg-white dark:bg-neutral-900 rounded-lg shadow-xl">
            <PortfolioPreview colorScheme={colorScheme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSystemPage;
