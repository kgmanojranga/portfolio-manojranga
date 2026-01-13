const TypographyPreview = () => {
  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-aeonik font-bold text-neutral-950 dark:text-white mb-2">
          Typography
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Headings and text styles using theme colors
        </p>
      </div>

      <div className="space-y-8 p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
        {/* Headings */}
        <div className="space-y-4">
          <h1 className="text-6xl font-aeonik font-bold text-neutral-950 dark:text-white">
            Heading 1
          </h1>
          <h2 className="text-5xl font-aeonik font-bold text-neutral-950 dark:text-white">
            Heading 2
          </h2>
          <h3 className="text-4xl font-aeonik font-bold text-neutral-950 dark:text-white">
            Heading 3
          </h3>
          <h4 className="text-3xl font-aeonik font-semibold text-neutral-950 dark:text-white">
            Heading 4
          </h4>
          <h5 className="text-2xl font-aeonik font-semibold text-neutral-950 dark:text-white">
            Heading 5
          </h5>
          <h6 className="text-xl font-aeonik font-semibold text-neutral-950 dark:text-white">
            Heading 6
          </h6>
        </div>

        {/* Body text */}
        <div className="space-y-4 border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <p className="text-lg text-neutral-950 dark:text-white">
            <strong>Large body text:</strong> The quick brown fox jumps over the lazy dog.
            This is a sample of large body text using primary color.
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-300">
            <strong>Regular body text:</strong> The quick brown fox jumps over the lazy dog.
            This is a sample of regular body text using secondary color.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <strong>Small body text:</strong> The quick brown fox jumps over the lazy dog.
            This is a sample of small body text using tertiary color.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            <strong>Extra small text:</strong> The quick brown fox jumps over the lazy dog.
            This is a sample of extra small body text.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2 border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <p className="text-neutral-950 dark:text-white">
            This is a paragraph with a{' '}
            <a href="#" className="text-wave-accent hover:text-wave-primary underline">
              sample link
            </a>{' '}
            using wave accent color.
          </p>
        </div>

        {/* Code */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <code className="block p-4 bg-neutral-100 dark:bg-neutral-900 rounded font-mono text-sm text-neutral-950 dark:text-white">
            const greeting = "Hello, World!";
          </code>
        </div>
      </div>
    </section>
  );
};

export default TypographyPreview;
