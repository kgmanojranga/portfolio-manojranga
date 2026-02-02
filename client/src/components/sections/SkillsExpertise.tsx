import Container from '../common/Container';
import type { Skill } from '../../types';

interface SkillsExpertiseProps {
  skills: Skill[];
}

const SkillsExpertise = ({ skills }: SkillsExpertiseProps) => {
  return (
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
            <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
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
  );
};

export default SkillsExpertise;
