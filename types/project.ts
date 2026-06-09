export interface Project {
  id: string;
  title: string;
  year: number;
  startDate?: string;
  endDate?: string;
  summary: string;
  achievement?: string;
  technologies: string[];
  screenshot: string;
  screenshots: string[];
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
}
