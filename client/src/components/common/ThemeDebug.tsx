import { useTheme } from '../../contexts/ThemeContext';

const ThemeDebug = () => {
  const { theme, isDark } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-neutral-800 border-2 border-accent p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-bold text-accent mb-2">Theme Debug</h3>
      <div className="text-sm">
        <p className="text-neutral-900 dark:text-white">
          Current theme: <strong>{theme}</strong>
        </p>
        <p className="text-neutral-900 dark:text-white">
          Is dark: <strong>{isDark ? 'Yes' : 'No'}</strong>
        </p>
        <p className="text-neutral-900 dark:text-white">
          HTML class: <strong>{document.documentElement.className}</strong>
        </p>
      </div>
      <div className="mt-2 p-2 bg-neutral-100 dark:bg-neutral-700 rounded">
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          This box should change colors when toggling dark mode
        </p>
      </div>
    </div>
  );
};

export default ThemeDebug;
