import { PROJECTS } from "@/data/projects";
import { sortProjectsByDate } from "@/utils/project";
import { ProjectEntry } from "@/components/projects/ProjectEntry";

export function ProjectIndex() {
  const projects = sortProjectsByDate(PROJECTS);

  return (
    <ol className="border-t border-border" aria-label="Selected projects">
      {projects.map((project, i) => (
        <li key={project.id}>
          <ProjectEntry
            project={project}
            index={String(i + 1).padStart(2, "0")}
          />
        </li>
      ))}
    </ol>
  );
}
