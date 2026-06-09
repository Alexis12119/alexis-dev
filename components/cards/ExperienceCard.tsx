"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/shared/Badge";
import { BodyText } from "@/components/typography/BodyText";
import { Heading } from "@/components/typography/Heading";
import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/formatDate";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const allImages =
    experience.image || experience.images
      ? [
          ...(experience.image ? [experience.image] : []),
          ...(experience.images ?? []),
        ]
      : [];
  const [selectedImage, setSelectedImage] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (allImages.length <= 1) return;

    const id = setInterval(() => {
      if (!isPausedRef.current) {
        setSelectedImage((prev) => (prev + 1) % allImages.length);
      }
    }, 4000);

    return () => clearInterval(id);
  }, [allImages.length]);

  return (
    <article className="border border-[#E5E7EB] bg-white hover:border-2 hover:border-[#111111] hover:scale-[1.02] transition-all duration-300">
      {allImages.length > 0 && (
        <div
          className="relative aspect-[2/1] overflow-hidden bg-[#F3F4F6]"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          <Image
            src={allImages[selectedImage]}
            alt={`${experience.company} screenshot ${selectedImage + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) calc(100vw - 48px), 1056px"
          />
          {allImages.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-[#111111]/70 text-white text-xs px-2 py-0.5">
              {selectedImage + 1} / {allImages.length}
            </div>
          )}
        </div>
      )}

      {allImages.length > 1 && (
        <div className="flex gap-2 px-4 pt-2.5 pb-1 overflow-x-auto">
          {allImages.map((img, i) => (
            <button
              key={img}
              onClick={() => setSelectedImage(i)}
              className={cn(
                "relative w-16 h-10 shrink-0 overflow-hidden border transition-colors",
                i === selectedImage
                  ? "border-[#111111]"
                  : "border-[#E5E7EB] hover:border-[#4B5563]",
              )}
              aria-label={`View screenshot ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${experience.company} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      <div className="p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <div>
            <Heading as="h3" className="text-xl">
              {experience.role}
            </Heading>
            <p className="text-base text-[#4B5563]">{experience.company}</p>
          </div>
          <div className="text-sm text-[#6B7280] shrink-0">
            {formatDate(experience.startDate)} &mdash;{" "}
            {formatDate(experience.endDate)}
          </div>
        </div>

        {experience.highlight && (
          <Badge className="mb-3 border-[#4B5563] text-[#4B5563]">
            {experience.highlight}
          </Badge>
        )}

        <BodyText className="mb-3">{experience.summary}</BodyText>

        <ul className="space-y-1.5">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="text-sm text-[#4B5563] flex items-start gap-2">
              <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[#4B5563]" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
