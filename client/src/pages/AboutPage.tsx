import { useEffect } from 'react';
import Container from '../components/common/Container';
import portfolioData from '../data/portfolio';
import Interactive3DWave from '../components/common/Interactive3DWave.tsx';

const AboutPage = () => {
  const { about, experience, skills, education } = portfolioData;

  // Scroll to top instantly when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Personal interests (you can customize these)
  const interests = [
    {
      icon: '🎮',
      title: 'Gaming',
      description: 'Exploring immersive game worlds',
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Constantly learning new technologies',
    },
    {
      icon: '🏗️',
      title: 'Building',
      description: 'Creating solutions that matter',
    },
    {
      icon: '🌍',
      title: 'Traveling',
      description: 'Experiencing different cultures',
    },
  ];

  return (
    <div className="relative min-h-screen text-neutral-200">
      {/* Dark overlay for better text readability */}
      {<Interactive3DWave />}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content - positioned above background */}
      <div className="relative z-10 pb-20">
        {/* Page Header */}
        <Container className="pt-20 pb-12">
          <h1 className="text-gradient font-aeonik text-[56px] md:text-[72px] lg:text-[96px] tracking-[-0.05em] leading-none mb-4 animate-fade-up">
            About Me
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl animate-fade-up animation-delay-200">
            {about.tagline}
          </p>
        </Container>

        {/* Personal Introduction Section */}
        <Container className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-up animation-delay-400">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Who I Am
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed text-[14px]">
                <p>{about.bio}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {about.yearsOfExperience.software}+
                  </div>
                  <div className="text-sm text-neutral-400">
                    Years in Software
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {about.yearsOfExperience.civil}+
                  </div>
                  <div className="text-sm text-neutral-400">
                    Years in Civil Engineering
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-wave-primary mb-2">{edu.institution}</p>
                    <p className="text-sm text-neutral-400 mb-3">
                      {edu.period}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-1 text-sm text-neutral-300">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-wave-primary mr-2">•</span>
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
        </Container>

        {/* Experience Timeline Section */}
        <Container className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white animate-fade-up">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-white/20 last:border-0 animate-fade-up text-[14px]"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-wave-primary to-wave-secondary border-2 border-neutral-950" />

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all hover:transform hover:scale-[1.02]">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-wave-primary text-lg font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-neutral-400 text-sm">{exp.period}</p>
                      {exp.location && (
                        <p className="text-neutral-500 text-sm">
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Skills & Expertise Section */}
        <Container className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white animate-fade-up">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all hover:transform hover:scale-[1.02] animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {skill.name}
                </h3>
                {skill.items && skill.items.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-wave-primary/20 to-wave-secondary/20 text-white border border-wave-primary/30 hover:border-wave-primary hover:from-wave-primary/30 hover:to-wave-secondary/30 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>

        {/* Personal Interests Section */}
        <Container className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white animate-fade-up">
            Beyond Code
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all hover:transform hover:scale-[1.05] text-center animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="text-5xl mb-4">{interest.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </Container>

        {/* Call to Action */}
        <Container className="py-12">
          <div className="bg-gradient-to-r from-wave-primary/10 to-wave-secondary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-wave-primary/20 text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="primary-button">
                <span className="primary-button-text">Get In Touch</span>
              </a>
              <a href="/projects" className="secondary-button">
                View My Work
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
