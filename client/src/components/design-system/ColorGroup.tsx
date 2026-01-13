import { type ReactNode } from 'react';

interface ColorGroupProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const ColorGroup = ({ title, description, children }: ColorGroupProps) => {
  return (
    <section className="mb-12">
      {/* Section header */}
      <div className="mb-6">
        <h2 className="text-3xl font-aeonik font-bold text-neutral-950 dark:text-white mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>

      {/* Color swatches grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {children}
      </div>
    </section>
  );
};

export default ColorGroup;
