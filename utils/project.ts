import type { Project } from "@/types/project";

export function sortProjectsByYear(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function filterByYear(projects: Project[], year: number): Project[] {
  return projects.filter((p) => p.year === year);
}
