import type { Project } from "@/types/project";

export function sortProjectsByDate(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const aStart = a.startDate ?? a.endDate ?? `${a.year}-01`;
    const bStart = b.startDate ?? b.endDate ?? `${b.year}-01`;
    return bStart.localeCompare(aStart);
  });
}
