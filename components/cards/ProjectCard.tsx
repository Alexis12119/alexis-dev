"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/shared/Badge";
import { Tag } from "@/components/shared/Tag";
import { BodyText } from "@/components/typography/BodyText";
import { ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const allImages = [project.screenshot, ...project.screenshots];
  const [selectedImage, setSelectedImage] = useState(0);
  const [imgError, setImgError] = useState(false);

  return (
    <article className="border border-[#E5E7EB] bg-white hover:border-[#4B5563] transition-colors">
      <div className="relative aspect-[21/9] overflow-hidden bg-[#F3F4F6]">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[#6B7280]">
            <div className="text-center">
              <span className="text-2xl font-semibold tracking-tight block mb-1">
                {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
              </span>
              <span>Screenshot unavailable</span>
            </div>
          </div>
        ) : (
          <Image
            src={allImages[selectedImage]}
            alt={`${project.title} screenshot ${selectedImage + 1}`}
            fill
            className="object-contain transition-opacity duration-300"
            sizes="(max-width: 768px) calc(100vw - 48px), 1056px"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {!imgError && allImages.length > 1 && (
        <div className="flex gap-2 px-5 pt-3 pb-1 overflow-x-auto">
          {allImages.map((img, i) => (
            <button
              key={img}
              onClick={() => setSelectedImage(i)}
              className={cn(
                "relative w-20 h-12 shrink-0 overflow-hidden border transition-colors",
                i === selectedImage
                  ? "border-[#111111]"
                  : "border-[#E5E7EB] hover:border-[#4B5563]",
              )}
              aria-label={`View screenshot ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${project.title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="text-sm text-[#6B7280] shrink-0">{project.year}</span>
        </div>

        {project.achievement && (
          <Badge className="mb-4 border-[#4B5563] text-[#4B5563]">
            {project.achievement}
          </Badge>
        )}

        <BodyText className="mb-4">{project.summary}</BodyText>

        <ul className="space-y-2 mb-4">
          {project.details.map((detail, i) => (
            <li key={i} className="text-sm text-[#4B5563] flex items-start gap-2">
              <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[#4B5563]" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#6B7280] transition-colors"
          >
            <ExternalLink size={14} />
            View on GitHub
          </a>
        )}
      </div>
    </article>
  );
}
