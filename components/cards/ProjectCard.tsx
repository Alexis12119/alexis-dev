"use client";

import { Badge } from "@/components/shared/Badge";
import { Tag } from "@/components/shared/Tag";
import { CardImage } from "@/components/shared/CardImage";
import { CollapsibleContent } from "@/components/shared/CollapsibleContent";
import { BodyText } from "@/components/typography/BodyText";
import { Heading } from "@/components/typography/Heading";
import { ExternalLink } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const allImages = [project.screenshot, ...project.screenshots];
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <article className="border border-border bg-white hover:border-2 hover:border-foreground hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      <div className="md:flex">
        <CardImage images={allImages} alt={project.title} initials={initials} />

        <div className="p-4 md:p-5 md:flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-2 mb-2 md:mb-3">
            <div>
              <Heading as="h3" className="text-lg md:text-xl">
                {project.title}
              </Heading>
            </div>
            <span className="text-xs md:text-sm text-muted shrink-0">
              {project.startDate && project.endDate
                ? project.endDate === "Present"
                  ? `${formatDate(project.startDate)} — Present`
                  : `${formatDate(project.startDate)} — ${formatDate(project.endDate)}`
                : project.year}
            </span>
          </div>

          {project.achievement && (
            <Badge className="mb-2 md:mb-3 border-accent text-accent self-start">
              {project.achievement}
            </Badge>
          )}

          <CollapsibleContent>
            <BodyText className="text-sm md:text-base">
              {project.summary}
            </BodyText>
            <ul className="space-y-1 md:space-y-1.5">
              {project.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-xs md:text-sm text-accent flex items-start gap-1.5 md:gap-2"
                >
                  <span className="mt-1 md:mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </CollapsibleContent>

          <div className="flex items-end justify-between gap-2 mt-auto pt-2 md:pt-3">
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-foreground hover:text-muted transition-colors"
              >
                <ExternalLink size={12} />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
