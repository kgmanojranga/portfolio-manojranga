import { useEffect } from 'react';
import Container from '../components/common/Container';
import portfolioData from '../data/portfolio';

const ResumePage = () => {
  const { about, experience, education, skills, contact } = portfolioData;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Group skills by category for better display
  const skillsByCategory = {
    'Programming Languages': skills.find((s) => s.category === 'languages'),
    'Frontend Development': skills.find((s) => s.category === 'frontend'),
    'Backend Development': skills.find((s) => s.category === 'backend'),
    'Blockchain & Web3': skills.find((s) => s.category === 'blockchain'),
    'Database Management': skills.find((s) => s.category === 'database'),
    'AI & Automation': skills.find((s) => s.category === 'ai'),
    'DevOps & Testing': skills.find((s) => s.category === 'devops'),
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-200">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 -z-10" />

      {/* Print Button - Hidden when printing */}
      <div className="print:hidden sticky top-20 z-40 flex justify-end">
        <Container>
          <button
            onClick={handlePrint}
            className="primary-button flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            <span className="primary-button-text">Download / Print</span>
          </button>
        </Container>
      </div>

      {/* Resume Content */}
      <Container className="py-12 print:py-8">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 print:border-none print:bg-white print:text-black">
          {/* Header Section */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white print:text-black mb-2 font-aeonik">
                {about.name}
              </h1>
              <p className="text-xl md:text-2xl text-wave-primary print:text-neutral-700 mb-4 font-semibold">
                {about.title}
              </p>
              <p className="text-neutral-400 print:text-neutral-600 mb-6 max-w-3xl mx-auto">
                {about.tagline}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-neutral-400 print:text-neutral-700">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-wave-primary transition-colors print:text-neutral-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {contact.email}
                </a>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {contact.phone}
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {contact.location}
                </span>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-wave-primary transition-colors print:text-neutral-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-wave-primary transition-colors print:text-neutral-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <h2 className="text-2xl font-bold text-white print:text-black mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-wave-primary to-wave-secondary print:bg-neutral-800" />
              Professional Summary
            </h2>
            <p className="text-neutral-300 print:text-neutral-700 leading-relaxed text-sm">
              {about.bio}
            </p>
          </div>

          {/* Experience Section */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-wave-primary to-wave-secondary print:bg-neutral-800" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-6 border-l-2 border-wave-primary/30 print:border-neutral-400"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-wave-primary print:bg-neutral-800 border-2 border-neutral-950 print:border-white" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white print:text-black">
                      {exp.position}
                    </h3>
                    <p className="text-wave-primary print:text-neutral-700 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-neutral-400 print:text-neutral-600">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                  <p className="text-neutral-300 print:text-neutral-700 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-wave-primary to-wave-secondary print:bg-neutral-800" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-6 border-l-2 border-wave-primary/30 print:border-neutral-400"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-wave-primary print:bg-neutral-800 border-2 border-neutral-950 print:border-white" />
                  <div>
                    <h3 className="text-lg font-semibold text-white print:text-black">
                      {edu.degree}
                    </h3>
                    <p className="text-wave-primary print:text-neutral-700 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-neutral-400 print:text-neutral-600 mb-2">
                      {edu.period}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-1 text-sm text-neutral-300 print:text-neutral-700 mt-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-wave-primary print:text-neutral-700 mr-2">
                              •
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-wave-primary to-wave-secondary print:bg-neutral-800" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skillsByCategory).map(([category, skill]) => {
                if (!skill) return null;
                return (
                  <div key={skill.id} className="space-y-2">
                    <h3 className="font-semibold text-white print:text-black text-sm">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items?.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300 print:bg-neutral-100 print:border-neutral-300 print:text-neutral-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Note - Hidden when printing */}
        <div className="print:hidden mt-8 text-center text-neutral-500 text-sm">
          <p>
            This resume is always up-to-date. Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ResumePage;
