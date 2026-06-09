import type { Project } from "@/types/project";

export function sortProjectsByYear(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

