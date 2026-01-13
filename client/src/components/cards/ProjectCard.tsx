import type { Project } from '../../types';
import Badge from '../common/Badge';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          {project.featured && <Badge variant="warning">Featured</Badge>}
        </div>

        <p className="text-sm text-gray-600 mb-2">
          {project.role} • {project.period}
        </p>
        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, compact ? 3 : 5).map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > (compact ? 3 : 5) && (
            <Badge>
              +{project.technologies.length - (compact ? 3 : 5)} more
            </Badge>
          )}
        </div>

        {!compact && project.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Key Achievements:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {project.achievements.slice(0, 3).map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
