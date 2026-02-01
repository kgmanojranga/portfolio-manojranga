import Container from '../common/Container';
import type { Experience } from '../../types';

interface ProfessionalJourneyProps {
  experience: Experience[];
}

const ProfessionalJourney = ({ experience }: ProfessionalJourneyProps) => {
  return (
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
                    <p className="text-neutral-500 text-sm">{exp.location}</p>
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
  );
};

export default ProfessionalJourney;
