import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => {
  return (
    <div className="group bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-wave-primary/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
      {project.image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-wave-primary/20 to-wave-secondary/20 text-wave-primary border border-wave-primary/30">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm text-neutral-400 mb-2">
          {project.role} • {project.period}
        </p>

        <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, compact ? 3 : 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-wave-primary/10 text-wave-accent border border-wave-accent/20 hover:border-wave-accent/40 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (compact ? 3 : 5) && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
              +{project.technologies.length - (compact ? 3 : 5)} more
            </span>
          )}
        </div>

        {!compact && project.achievements.length > 0 && (
          <div className="mb-4 flex-1">
            <h4 className="font-semibold text-white mb-2 text-sm">
              Key Achievements:
            </h4>
            <ul className="space-y-1 text-sm text-neutral-300">
              {project.achievements.slice(0, 3).map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-wave-primary mt-1">▸</span>
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-3 pt-4 mt-auto border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wave-accent hover:text-wave-primary font-medium text-sm transition-colors duration-200 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wave-accent hover:text-wave-primary font-medium text-sm transition-colors duration-200 flex items-center gap-1"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
