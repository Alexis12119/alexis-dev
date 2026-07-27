import type { Project } from "@/types/project";

export function sortProjectsByYear(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const aStart = a.startDate ?? `${a.year}-01`;
    const bStart = b.startDate ?? `${b.year}-01`;
    return bStart.localeCompare(aStart);
  });
}
