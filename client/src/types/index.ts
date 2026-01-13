export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  period: string;
  technologies: string[];
  achievements: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category: 'blockchain' | 'fullstack' | 'automation' | 'freelance';
}

export interface About {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  image?: string;
  resumeUrl?: string;
  yearsOfExperience: {
    software: number;
    civil: number;
  };
}

export interface Skill {
  id: string;
  name: string;
  category:
    | 'languages'
    | 'frontend'
    | 'backend'
    | 'blockchain'
    | 'ai'
    | 'devops'
    | 'database'
    | 'game';
  proficiency?: number;
  items?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  projects: Project[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  achievements?: string[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  about: About;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  contact: Contact;
}
