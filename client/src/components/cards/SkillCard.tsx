import type { Skill } from '../../types';
import Badge from '../common/Badge';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{skill.name}</h3>

      {skill.items && skill.items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item) => (
            <Badge key={item} variant="primary">
              {item}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
