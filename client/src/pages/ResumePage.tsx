import { useEffect } from 'react';
import Container from '../components/common/Container';
import portfolioData from '../data/portfolio';

const ResumePage = () => {
  const { about, contact } = portfolioData;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Work Experience from the optimized resume
  const workExperience = [
    {
      id: '1',
      position: 'Software Engineer',
      company: 'MetaruneLabs Pvt Ltd',
      period: 'August 2023 - Present',
      duration: '(2.5+ years)',
      achievements: [
        'Built reusable React component libraries in Turborepo monorepo with LiveKit video conferencing, Ably chat, Zustand state management, and advanced UI interactions',
        'Created comprehensive test automation framework with Selenium WebDriver, Page Object Model pattern, cross-browser testing, and mobile device emulation across 6 configurations',
        'Built scalable backends with NestJS, Firebase Cloud Functions (50+ callable functions), PostgreSQL/Prisma achieving 60-80% query optimization, and integrated Sentry, Redis for production systems',
        'Developed Solana DeFi token launch platform using Rust/Anchor Framework with real-time blockchain monitoring achieving sub-second transaction detection processing 100+ events/minute',
        'Implemented Web3 integrations with ERC-20/ERC-1155 tokens, Chainlink oracles, wallet connections, and turn-based game logic with MMR matchmaking and real-time Firestore synchronization',
      ],
      technologies:
        'React 18, Vite, Chakra UI, Zustand, Selenium WebDriver, Jest, Playwright, TypeScript, NestJS, PostgreSQL, Prisma ORM, Redis, Firebase Functions, Firestore, Rust, Anchor Framework, Solana Web3.js, Solidity, Foundry',
    },
    {
      id: '2',
      position: 'Freelance Software Developer',
      company: 'Talpha Solutions',
      period: 'November 2024 - November 2025',
      achievements: [
        'Developed enterprise equipment hire management dashboard with AG Grid React featuring server-side pagination, custom cell renderers, CSV export, Chart.js KPI visualizations, and Google Maps integration',
        'Built media planning platform with AI-powered content scoring, multi-step client workflows with website context extraction, and intelligent file categorization',
        'Created interactive dashboards with timeline/table views, resizable panels, Recharts visualizations, and dynamic scorecard reporting tracking user edits vs AI suggestions',
        'Implemented comprehensive form validation with React Hook Form/Yup, role-based access control, reusable component libraries, and responsive TailwindCSS UI/UX',
      ],
      technologies:
        'React 18/19, TypeScript, Redux Toolkit, Vite, TailwindCSS, AG Grid React, Chart.js, React Hook Form, Yup, Google Maps API, Context API, Recharts',
    },
    {
      id: '3',
      position: 'Civil Engineer',
      company: 'Maga Engineering Pvt Ltd',
      period: 'August 2019 - October 2022',
      duration: '(3 years 2 months)',
      achievements: [
        'Managed aluminium and ceiling fixing sub-contracts for The Grand - Prime Grand Apartment project, conducting site inspections, quality control, and coordinating with clients and multidisciplinary teams to ensure project delivery and compliance',
      ],
    },
  ];

  // Education from the optimized resume
  const education = [
    {
      id: '1',
      degree: 'BSc. Eng. (Hons) in Civil Engineering',
      institution: 'University of Moratuwa',
      period: 'Graduated February 2019',
    },
    {
      id: '2',
      degree: 'G.C.E Advanced Level',
      institution: 'Rahula College Matara',
      period: 'Year 2013',
      achievements: [
        'Science Stream: Mathematics (A), Chemistry (A), Physics (A)',
      ],
    },
  ];

  // Technical Skills organized as per the optimized resume
  const technicalSkills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Solidity', 'Rust'],
    },
    {
      category: 'Frontend Development',
      items: ['React', 'Next.js', 'HTML', 'CSS', 'TailwindCSS', 'Chakra UI'],
    },
    {
      category: 'Backend Development',
      items: [
        'Node.js',
        'Express',
        'NestJS',
        '.NET',
        'REST API Development',
        'Firebase Cloud Functions',
      ],
    },
    {
      category: 'Blockchain & Web3',
      items: [
        'Smart Contract Development (Solidity, Rust/Anchor)',
        'Ethereum',
        'Solana',
        'Hardhat',
        'Foundry',
        'Anchor Framework',
        'Chainlink',
      ],
    },
    {
      category: 'Database Management',
      items: [
        'PostgreSQL',
        'MySQL',
        'Firebase',
        'Firestore',
        'Redis',
        'Prisma ORM',
      ],
    },
    {
      category: 'AI & Automation',
      items: [
        'n8n',
        'AI Integration (OpenAI, ElevenLabs, Gemini)',
        'MCP Protocols',
      ],
    },
    {
      category: 'DevOps & Testing',
      items: [
        'CI/CD Pipelines',
        'Automated Deployment',
        'Selenium',
        'Playwright',
        'Mocha',
        'Chai',
        'Jest',
        'Web Automation',
        'Docker',
        'Github Actions',
      ],
    },
    {
      category: 'Additional',
      items: ['Unity Game Development'],
    },
  ];

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
      <Container className="py-12 print:py-0 print:p-0">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 print:border-0 print:bg-white print:text-black print:rounded-none print:backdrop-blur-none print:shadow-none">
          {/* Header Section */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white print:text-black mb-2 font-aeonik">
                {about.name.toUpperCase()}
              </h1>
              <p className="text-xl md:text-2xl text-wave-primary print:text-neutral-700 mb-4 font-semibold">
                {about.title}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-neutral-400 print:text-neutral-700">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-neutral-400 flex items-center gap-1.5 hover:text-wave-primary transition-colors print:text-neutral-700"
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
                <span className="text-neutral-600 print:text-neutral-400">
                  |
                </span>
                <span className="flex items-center gap-1.5">
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
                <span className="text-neutral-600 print:text-neutral-400">
                  |
                </span>
                <span className="flex items-center gap-1.5">
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
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-neutral-400 print:text-neutral-700 mt-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 flex items-center gap-1.5 hover:text-wave-primary transition-colors print:text-neutral-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  {contact.linkedin}
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 flex items-center gap-1.5 hover:text-wave-primary transition-colors print:text-neutral-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {contact.github}
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <h2 className="text-2xl font-bold text-white print:text-black mb-4 uppercase tracking-wide">
              Professional Summary
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-wave-primary via-wave-secondary to-transparent mb-4 print:bg-neutral-400" />
            <p className="text-neutral-300 print:text-neutral-700 leading-relaxed text-sm">
              {about.bio}
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <h2 className="text-2xl font-bold text-white print:text-black mb-4 uppercase tracking-wide">
              Technical Skills
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-wave-primary via-wave-secondary to-transparent mb-6 print:bg-neutral-400" />
            <div className="space-y-3">
              {technicalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                >
                  <div className="font-semibold text-white print:text-black min-w-[200px] text-sm">
                    {skill.category}:
                  </div>
                  <div className="text-neutral-300 print:text-neutral-700 text-sm">
                    {skill.items.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="p-8 md:p-12 border-b border-white/10 print:border-neutral-300">
            <h2 className="text-2xl font-bold text-white print:text-black mb-4 uppercase tracking-wide">
              Work Experience
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-wave-primary via-wave-secondary to-transparent mb-6 print:bg-neutral-400" />
            <div className="space-y-8">
              {workExperience.map((exp) => (
                <div key={exp.id} className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white print:text-black">
                      {exp.position}
                    </h3>
                    <p className="text-neutral-300 print:text-neutral-700 text-sm">
                      {exp.company} | {exp.period}{' '}
                      {exp.duration && (
                        <span className="text-neutral-400 print:text-neutral-600">
                          {exp.duration}
                        </span>
                      )}
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-neutral-300 print:text-neutral-700">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-wave-primary print:text-neutral-700 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="mt-3">
                      <span className="font-semibold text-white print:text-black text-sm">
                        Technologies:{' '}
                      </span>
                      <span className="text-neutral-300 print:text-neutral-700 text-sm">
                        {exp.technologies}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white print:text-black mb-4 uppercase tracking-wide">
              Education
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-wave-primary via-wave-secondary to-transparent mb-6 print:bg-neutral-400" />
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-lg font-bold text-white print:text-black">
                    {edu.degree}
                  </h3>
                  <p className="text-neutral-300 print:text-neutral-700 font-medium text-sm">
                    {edu.institution} | {edu.period}
                  </p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-neutral-300 print:text-neutral-700">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-wave-primary print:text-neutral-700">
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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
