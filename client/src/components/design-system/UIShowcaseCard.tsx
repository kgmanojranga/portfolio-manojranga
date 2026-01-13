const UIShowcaseCard = () => {
  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-aeonik font-bold text-neutral-950 dark:text-white mb-2">
          UI Components
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Buttons, badges, and other UI elements using the design system colors
        </p>
      </div>

      <div className="space-y-8">
        {/* Buttons */}
        <div className="p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-aeonik font-semibold text-neutral-950 dark:text-white mb-4">
            Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            {/* Primary buttons */}
            <button className="px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
              Primary
            </button>
            <button className="px-6 py-3 bg-wave-primary text-white rounded-lg font-medium hover:bg-wave-purple transition-colors">
              Wave Primary
            </button>
            <button className="px-6 py-3 bg-wave-secondary text-white rounded-lg font-medium hover:bg-wave-magenta transition-colors">
              Wave Secondary
            </button>

            {/* Outline buttons */}
            <button className="px-6 py-3 border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white rounded-lg font-medium hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-colors">
              Outline
            </button>
            <button className="px-6 py-3 border-2 border-wave-accent text-wave-accent rounded-lg font-medium hover:bg-wave-accent hover:text-white transition-colors">
              Outline Accent
            </button>

            {/* Ghost buttons */}
            <button className="px-6 py-3 text-neutral-950 dark:text-white rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              Ghost
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-aeonik font-semibold text-neutral-950 dark:text-white mb-4">
            Badges & Labels
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-full text-sm font-medium">
              Default
            </span>
            <span className="px-3 py-1 bg-wave-primary text-white rounded-full text-sm font-medium">
              Wave Primary
            </span>
            <span className="px-3 py-1 bg-wave-secondary text-white rounded-full text-sm font-medium">
              Wave Secondary
            </span>
            <span className="px-3 py-1 bg-wave-accent text-white rounded-full text-sm font-medium">
              Wave Accent
            </span>
            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-950 dark:text-white rounded-full text-sm font-medium">
              Neutral
            </span>
            <span className="px-3 py-1 border-2 border-wave-primary text-wave-primary rounded-full text-sm font-medium">
              Outline
            </span>
          </div>
        </div>

        {/* Cards with different backgrounds */}
        <div className="p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-aeonik font-semibold text-neutral-950 dark:text-white mb-4">
            Cards & Backgrounds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Neutral card */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
                Neutral Card
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Using neutral background colors
              </p>
            </div>

            {/* Wave gradient card */}
            <div className="p-6 bg-gradient-to-br from-wave-primary to-wave-secondary rounded-lg">
              <h4 className="font-semibold text-white mb-2">Wave Gradient</h4>
              <p className="text-sm text-white/90">
                Gradient from wave primary to secondary
              </p>
            </div>

            {/* Accent card */}
            <div className="p-6 bg-wave-accent rounded-lg">
              <h4 className="font-semibold text-white mb-2">Accent Card</h4>
              <p className="text-sm text-white/90">
                Using wave accent color
              </p>
            </div>
          </div>
        </div>

        {/* Input fields */}
        <div className="p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-aeonik font-semibold text-neutral-950 dark:text-white mb-4">
            Form Elements
          </h3>
          <div className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Text input"
              className="w-full px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-950 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-wave-primary"
            />
            <textarea
              placeholder="Textarea"
              rows={3}
              className="w-full px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-950 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-wave-primary"
            />
            <select className="w-full px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-wave-primary">
              <option>Select option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcaseCard;
