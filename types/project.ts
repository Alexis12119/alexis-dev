export interface Project {
  id: string;
  title: string;
  year: number;
  summary: string;
  achievement?: string;
  technologies: string[];
  screenshot: string;
  screenshots: string[];
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
}
