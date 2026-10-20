"use client";

import { useState } from "react";
import Image from "next/image";
import { Heading } from "@/components/typography/Heading";
import { BodyText } from "@/components/typography/BodyText";
import { Tag } from "@/components/shared/Tag";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { formatDate } from "@/utils/formatDate";
import type { Project } from "@/types/project";

interface ProjectEntryProps {
  project: Project;
  index: string;
}

function dateRange(project: Project): string {
  if (!project.startDate && project.endDate) {
    const completedDate = new Date(`${project.endDate}T00:00:00`).toLocaleDateString(
      "en-US",
      { month: "long", day: "numeric", year: "numeric" },
    );
    return completedDate;
  }
  if (project.startDate && project.endDate) {
    const end =
      project.endDate === "Present" ? "Present" : formatDate(project.endDate);
    return `${formatDate(project.startDate)} — ${end}`;
  }
  return `${project.year}`;
}

export function ProjectEntry({ project, index }: ProjectEntryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const images = [
    ...(project.screenshot ? [project.screenshot] : []),
    ...project.screenshots,
  ];
  const headingId = `project-${project.id}`;

  return (
    <article
      id={headingId}
      aria-labelledby={`${headingId}-title`}
      className="border-b border-border py-8 md:py-10 scroll-mt-24"
    >
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <p className="font-mono text-xs text-muted md:col-span-1 md:pt-1">
          {index}
        </p>

        <div className="md:col-span-6">
          <Heading as="h3" id={`${headingId}-title`} className="text-xl md:text-2xl mb-2">
            {project.title}
          </Heading>
          <p className="font-mono text-xs text-muted mb-4">
            {dateRange(project)}
            {project.achievement ? ` · ${project.achievement}` : ""}
          </p>
          <BodyText className="max-w-prose mb-4">{project.summary}</BodyText>
          <ul className="space-y-1.5 mb-4">
            {project.details.map((detail, i) => (
              <li
                key={i}
                className="text-sm text-accent flex items-start gap-2"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {detail}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                Live demo
              </a>
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          {images.length > 0 ? (
            <figure>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="block w-full border border-border bg-subtle hover:border-accent transition-colors focus-visible:outline-2 focus-visible:outline-foreground"
                aria-label={`Open screenshots of ${project.title}`}
              >
                <span className="relative block aspect-[4/3] w-full">
                  <Image
                    src={images[0]}
                    alt={`${project.title} interface screenshot`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 480px"
                    loading="lazy"
                  />
                </span>
              </button>
              <figcaption className="font-mono text-xs text-muted mt-2">
                Fig. {index} — {project.title}
                {images.length > 1 ? ` (${images.length} screenshots)` : ""}
              </figcaption>
            </figure>
          ) : (
            <p className="font-mono text-xs text-muted border border-dashed border-border p-4">
              Screenshots to follow.
            </p>
          )}
        </div>
      </div>

      {lightboxOpen && images.length > 0 && (
        <ImageLightbox
          images={images.map((src, i) => ({
            src,
            alt: `${project.title} screenshot ${i + 1}`,
          }))}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </article>
  );
}
