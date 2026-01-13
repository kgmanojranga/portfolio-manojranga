import { type Dispatch, type SetStateAction } from 'react';

export interface ColorScheme {
  primaryHeading: string;
  secondaryHeading: string;
  bodyText: string;
  cardBackground: string;
  sectionBackground: string;
  accentColor: string;
  buttonPrimary: string;
  buttonText: string;
  gradientStart: string;
  gradientEnd: string;
}

interface ColorControlsProps {
  colorScheme: ColorScheme;
  setColorScheme: Dispatch<SetStateAction<ColorScheme>>;
}

const ColorControls = ({ colorScheme, setColorScheme }: ColorControlsProps) => {
  const handleColorChange = (key: keyof ColorScheme, value: string) => {
    setColorScheme((prev) => ({ ...prev, [key]: value }));
  };

  const presetSchemes: { name: string; scheme: ColorScheme }[] = [
    {
      name: 'Dark Purple',
      scheme: {
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
      },
    },
    {
      name: 'Minimal Grayscale',
      scheme: {
        primaryHeading: '#000000',
        secondaryHeading: '#222222',
        bodyText: '#404040',
        cardBackground: '#FFFFFF',
        sectionBackground: '#F8F8F8',
        accentColor: '#7B7B7B',
        buttonPrimary: '#000000',
        buttonText: '#FFFFFF',
        gradientStart: '#222222',
        gradientEnd: '#7B7B7B',
      },
    },
    {
      name: 'Blue Modern',
      scheme: {
        primaryHeading: '#1E40AF',
        secondaryHeading: '#3B82F6',
        bodyText: '#1F2937',
        cardBackground: '#FFFFFF',
        sectionBackground: '#F3F4F6',
        accentColor: '#60A5FA',
        buttonPrimary: '#3B82F6',
        buttonText: '#FFFFFF',
        gradientStart: '#3B82F6',
        gradientEnd: '#8B5CF6',
      },
    },
    {
      name: 'Green Fresh',
      scheme: {
        primaryHeading: '#047857',
        secondaryHeading: '#059669',
        bodyText: '#1F2937',
        cardBackground: '#FFFFFF',
        sectionBackground: '#ECFDF5',
        accentColor: '#10B981',
        buttonPrimary: '#059669',
        buttonText: '#FFFFFF',
        gradientStart: '#059669',
        gradientEnd: '#06B6D4',
      },
    },
    {
      name: 'Orange Warm',
      scheme: {
        primaryHeading: '#EA580C',
        secondaryHeading: '#F97316',
        bodyText: '#1F2937',
        cardBackground: '#FFFFFF',
        sectionBackground: '#FFF7ED',
        accentColor: '#FB923C',
        buttonPrimary: '#F97316',
        buttonText: '#FFFFFF',
        gradientStart: '#F97316',
        gradientEnd: '#EF4444',
      },
    },
  ];

  const applyPreset = (scheme: ColorScheme) => {
    setColorScheme(scheme);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 space-y-6 sticky top-24">
      <h3 className="text-2xl font-aeonik font-bold text-neutral-950 dark:text-white mb-4">
        Color Controls
      </h3>

      {/* Presets */}
      <div>
        <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
          Quick Presets
        </label>
        <div className="grid grid-cols-2 gap-2">
          {presetSchemes.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset.scheme)}
              className="px-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-950 dark:text-white rounded hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Individual color controls */}
      <div className="space-y-4">
        {Object.entries(colorScheme).map(([key, value]) => (
          <div key={key}>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={value}
                onChange={(e) => handleColorChange(key as keyof ColorScheme, e.target.value)}
                className="w-12 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={value}
                onChange={(e) => handleColorChange(key as keyof ColorScheme, e.target.value)}
                className="flex-1 px-3 py-2 text-xs font-mono bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded text-neutral-950 dark:text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorControls;
