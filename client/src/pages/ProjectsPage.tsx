import { useEffect, useState } from 'react';
import type { Project } from '../types';
import { contentService } from '../services/contentServices.ts';
import Container from '../components/common/Container';
import ProjectCard from '../components/cards/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data =
          filter === 'all'
            ? await contentService.getProjects()
            : await contentService.getProjectsByCategory(filter);
        setProjects(data);

        if (filter === 'all') {
          setAllProjects(data);
        }
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [filter]);

  const categories = [
    { value: 'all', label: 'All Projects', count: allProjects.length },
    {
      value: 'blockchain',
      label: 'Blockchain',
      count: allProjects.filter((p) => p.category === 'blockchain').length,
    },
    {
      value: 'fullstack',
      label: 'Full-Stack',
      count: allProjects.filter((p) => p.category === 'fullstack').length,
    },
    {
      value: 'automation',
      label: 'Automation',
      count: allProjects.filter((p) => p.category === 'automation').length,
    },
    {
      value: 'freelance',
      label: 'Freelance',
      count: allProjects.filter((p) => p.category === 'freelance').length,
    },
  ];

  if (error) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 -z-10" />
        <Container>
          <div className="text-center max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Oops! Something went wrong
            </h2>
            <p className="text-neutral-400 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="secondary-button"
            >
              Try Again
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-neutral-200">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 -z-10" />

      {/* Hero Section */}
      <div className="relative z-10 border-b border-white/10">
        <Container className="pt-24 pb-16">
          <div className="max-w-4xl">
            <h1 className="text-gradient font-aeonik text-[48px] sm:text-[64px] md:text-[80px] tracking-[-0.05em] leading-none mb-6 animate-fade-up">
              My Projects
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl animate-fade-up animation-delay-200">
              A collection of my work spanning blockchain development,
              full-stack applications, AI automation, and freelance projects.
              Each project represents a unique challenge and learning
              experience.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-wave-primary/20 to-wave-secondary/20 border border-wave-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient">
                    {allProjects.length}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-neutral-400">Total</div>
                  <div className="text-white font-semibold">Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-wave-primary/20 to-wave-secondary/20 border border-wave-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient">
                    {allProjects.filter((p) => p.featured).length}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-neutral-400">Featured</div>
                  <div className="text-white font-semibold">Highlights</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-wave-primary/20 to-wave-secondary/20 border border-wave-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient">
                    {categories.filter((c) => c.count > 0 && c.value !== 'all').length}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-neutral-400">Active</div>
                  <div className="text-white font-semibold">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-20 bg-neutral-950/80 backdrop-blur-lg border-b border-white/10">
        <Container className="py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value as typeof filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-gradient-to-r from-wave-primary to-wave-secondary text-white shadow-lg shadow-wave-primary/25 scale-105'
                    : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-wave-primary/30 hover:text-white'
                }`}
              >
                {category.label}
                {category.count > 0 && (
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      filter === category.value
                        ? 'bg-white/20'
                        : 'bg-white/10'
                    }`}
                  >
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Projects Grid */}
      <Container className="py-12">
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-lg border border-white/10 p-6 h-96 animate-pulse"
              >
                <div className="h-6 bg-white/10 rounded w-3/4 mb-4" />
                <div className="h-4 bg-white/10 rounded w-1/2 mb-4" />
                <div className="h-4 bg-white/10 rounded w-full mb-2" />
                <div className="h-4 bg-white/10 rounded w-full mb-2" />
                <div className="h-4 bg-white/10 rounded w-2/3 mb-4" />
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-white/10 rounded w-16" />
                  <div className="h-6 bg-white/10 rounded w-16" />
                  <div className="h-6 bg-white/10 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              No projects found
            </h3>
            <p className="text-neutral-400 mb-6">
              No projects match the selected category. Try a different filter.
            </p>
            <button onClick={() => setFilter('all')} className="secondary-button">
              View All Projects
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProjectsPage;
