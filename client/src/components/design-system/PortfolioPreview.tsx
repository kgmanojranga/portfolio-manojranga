import { type ColorScheme } from './ColorControls';

interface PortfolioPreviewProps {
  colorScheme: ColorScheme;
}

const PortfolioPreview = ({ colorScheme }: PortfolioPreviewProps) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section
        className="min-h-[80vh] flex items-center justify-center px-8 py-20"
        style={{ backgroundColor: colorScheme.sectionBackground }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1
            className="text-6xl md:text-8xl font-aeonik font-bold tracking-tight"
            style={{ color: colorScheme.primaryHeading }}
          >
            Full Stack Developer
          </h1>
          <p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            style={{ color: colorScheme.bodyText }}
          >
            Building beautiful, functional web experiences with modern technologies
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: colorScheme.buttonPrimary,
                color: colorScheme.buttonText,
              }}
            >
              View Projects
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-transform hover:scale-105"
              style={{
                borderColor: colorScheme.accentColor,
                color: colorScheme.accentColor,
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: colorScheme.cardBackground }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-aeonik font-bold mb-6"
            style={{ color: colorScheme.secondaryHeading }}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p
                className="text-lg leading-relaxed"
                style={{ color: colorScheme.bodyText }}
              >
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating seamless user experiences and solving complex problems through code.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: colorScheme.bodyText }}
              >
                With a strong foundation in both frontend and backend development, I bring ideas
                to life with clean, efficient, and scalable solutions.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: colorScheme.accentColor,
                      color: colorScheme.buttonText,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="h-80 rounded-2xl shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${colorScheme.gradientStart}, ${colorScheme.gradientEnd})`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: colorScheme.sectionBackground }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-aeonik font-bold mb-12"
            style={{ color: colorScheme.primaryHeading }}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                style={{ backgroundColor: colorScheme.cardBackground }}
              >
                <div
                  className="h-48"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.gradientStart}, ${colorScheme.gradientEnd})`,
                  }}
                />
                <div className="p-6 space-y-4">
                  <h3
                    className="text-2xl font-aeonik font-bold"
                    style={{ color: colorScheme.secondaryHeading }}
                  >
                    Project {project}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: colorScheme.bodyText }}
                  >
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'API', 'Design'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: colorScheme.sectionBackground,
                          color: colorScheme.bodyText,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="w-full py-3 rounded-lg font-semibold transition-transform hover:scale-105 mt-4"
                    style={{
                      backgroundColor: colorScheme.buttonPrimary,
                      color: colorScheme.buttonText,
                    }}
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: colorScheme.cardBackground }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-aeonik font-bold mb-12 text-center"
            style={{ color: colorScheme.secondaryHeading }}
          >
            Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Product Manager',
                text: 'Outstanding work! The project was delivered on time with exceptional quality.',
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                text: 'A talented developer with great attention to detail and problem-solving skills.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl shadow-lg"
                style={{ backgroundColor: colorScheme.sectionBackground }}
              >
                <div
                  className="w-16 h-16 rounded-full mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.gradientStart}, ${colorScheme.gradientEnd})`,
                  }}
                />
                <p
                  className="text-lg italic mb-6 leading-relaxed"
                  style={{ color: colorScheme.bodyText }}
                >
                  "{testimonial.text}"
                </p>
                <div>
                  <p
                    className="font-semibold text-lg"
                    style={{ color: colorScheme.secondaryHeading }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: colorScheme.accentColor }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: colorScheme.sectionBackground }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
            className="text-4xl md:text-5xl font-aeonik font-bold"
            style={{ color: colorScheme.primaryHeading }}
          >
            Let's Work Together
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colorScheme.bodyText }}
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <button
            className="px-12 py-5 rounded-lg font-bold text-xl transition-transform hover:scale-105 mt-8"
            style={{
              backgroundColor: colorScheme.buttonPrimary,
              color: colorScheme.buttonText,
            }}
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPreview;
