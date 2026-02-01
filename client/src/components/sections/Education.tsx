import type { Education as EducationType } from '../../types';

interface EducationProps {
  education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
  return (
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
            <p className="text-sm text-neutral-400 mb-3">{edu.period}</p>
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
  );
};

export default Education;
