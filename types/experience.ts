export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  achievements: string[];
  highlight?: string;
  tools?: string[];
  image?: string;
  images?: string[];
}
