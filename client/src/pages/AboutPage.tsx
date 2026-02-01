import { useEffect } from 'react';
import Container from '../components/common/Container';
import portfolioData from '../data/portfolio';
import Interactive3DWave from '../components/common/Interactive3DWave.tsx';
import WhoIAm from '../components/sections/WhoIAm';
import ProfessionalJourney from '../components/sections/ProfessionalJourney';
import SkillsExpertise from '../components/sections/SkillsExpertise';
import BeyondCode from '../components/sections/BeyondCode';
import LetsWorkTogether from '../components/sections/LetsWorkTogether';

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
        <WhoIAm about={about} education={education} />

        {/* Experience Timeline Section */}
        <ProfessionalJourney experience={experience} />

        {/* Skills & Expertise Section */}
        <SkillsExpertise skills={skills} />

        {/* Personal Interests Section */}
        <BeyondCode interests={interests} />

        {/* Call to Action */}
        <LetsWorkTogether />
      </div>
    </div>
  );
};

export default AboutPage;
