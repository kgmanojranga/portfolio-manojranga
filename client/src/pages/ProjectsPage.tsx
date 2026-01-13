import { useEffect, useState } from 'react';
import type { Project } from '../types';
import { contentService } from '../services/contentServices.ts';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data =
          filter === 'all'
            ? await contentService.getProjects()
            : await contentService.getProjectsByCategory(filter);
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [filter]);

  if (loading) return <div className="loading">Loading projects...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="bg-neutral-700 text-neutral-950 dark:text-white font-family-mono">
        Darkest background
      </div>

      <div className="filters text-neutral-950 dark:text-white flex items-center gap-6">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setFilter('blockchain')}
          className={filter === 'blockchain' ? 'active' : ''}
        >
          Blockchain
        </button>
        <button
          onClick={() => setFilter('fullstack')}
          className={filter === 'fullstack' ? 'active' : ''}
        >
          Full-Stack
        </button>
        <button
          onClick={() => setFilter('freelance')}
          className={filter === 'freelance' ? 'active' : ''}
        >
          Freelance
        </button>
        <button
          onClick={() => setFilter('automation')}
          className={filter === 'automation' ? 'active' : ''}
        >
          Automation
        </button>
      </div>

      <div className="projects-grid text-neutral-950 dark:text-white font-family-mono">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col project-card gap-4 ${project.featured ? 'featured' : ''}`}
          >
            <div className="project-header text-accent">
              <h3>{project.title}</h3>
              <span className="category">{project.category}</span>
            </div>
            <p className="role">{project.role}</p>
            <p className="period">{project.period}</p>
            <p className="description">{project.description}</p>

            <div className="technologies">
              {project.technologies.slice(0, 5).map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="tech-tag">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>

            <div className="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
