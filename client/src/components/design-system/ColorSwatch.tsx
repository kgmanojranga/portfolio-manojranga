import { useEffect, useState } from 'react';

interface ColorSwatchProps {
  varName: string;
  varValue: string;
  showCopy?: boolean;
}

const ColorSwatch = ({ varName, varValue, showCopy = true }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);
  const [computedValue, setComputedValue] = useState<string>('');

  useEffect(() => {
    // Get the computed color value from CSS variable
    const root = document.documentElement;
    const value = getComputedStyle(root).getPropertyValue(varName).trim();
    setComputedValue(value || varValue);
  }, [varName, varValue]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(computedValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Color preview */}
      <div
        className="w-full h-20 rounded-md border border-neutral-200 dark:border-neutral-700"
        style={{ backgroundColor: `var(${varName})` }}
      />

      {/* Color info */}
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 break-all">
          {varName}
        </p>
        <p className="font-mono text-xs font-semibold text-neutral-950 dark:text-white">
          {computedValue}
        </p>
      </div>

      {/* Copy button */}
      {showCopy && (
        <button
          onClick={handleCopy}
          className="mt-2 px-3 py-1 text-xs font-medium rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-950 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      )}
    </div>
  );
};

export default ColorSwatch;
