import portfolioData from '../data/portfolio';
import type {
  About,
  Contact,
  Education,
  Experience,
  PortfolioData,
  Project,
  Skill,
} from '../types';

// Simulate API delay for realistic feel
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const contentService = {
  async getAll(): Promise<PortfolioData> {
    await delay(100);
    return portfolioData;
  },

  async getProjects(): Promise<Project[]> {
    await delay(100);
    return portfolioData.projects;
  },

  async getProjectById(id: string): Promise<Project | undefined> {
    await delay(100);
    return portfolioData.projects.find((p) => p.id === id);
  },

  async getFeaturedProjects(): Promise<Project[]> {
    await delay(100);
    return portfolioData.projects.filter((p) => p.featured);
  },

  async getProjectsByCategory(
    category: Project['category']
  ): Promise<Project[]> {
    await delay(100);
    return portfolioData.projects.filter((p) => p.category === category);
  },

  async getAbout(): Promise<About> {
    await delay(100);
    return portfolioData.about;
  },

  async getSkills(): Promise<Skill[]> {
    await delay(100);
    return portfolioData.skills;
  },

  async getExperience(): Promise<Experience[]> {
    await delay(100);
    return portfolioData.experience;
  },

  async getEducation(): Promise<Education[]> {
    await delay(100);
    return portfolioData.education;
  },

  async getContact(): Promise<Contact> {
    await delay(100);
    return portfolioData.contact;
  },
};

// Phase 2: Replace the above with actual API calls
// Example for Phase 2:
/*
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const contentService = {
  async getAll(): Promise<PortfolioData> {
    const response = await fetch(`${API_URL}/portfolio`);
    if (!response.ok) throw new Error('Failed to fetch portfolio data');
    return response.json();
  },

  async getProjects(): Promise<Project[]> {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  async getProjectById(id: string): Promise<Project | undefined> {
    const response = await fetch(`${API_URL}/projects/${id}`);
    if (!response.ok) return undefined;
    return response.json();
  },

  // ... other methods
};
*/
