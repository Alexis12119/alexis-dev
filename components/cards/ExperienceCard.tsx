"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/shared/Badge";
import { BodyText } from "@/components/typography/BodyText";
import { Heading } from "@/components/typography/Heading";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/formatDate";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
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
  const [imgError, setImgError] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [expanded, setExpanded] = useState(false);

  const lightboxImages = allImages.map((src) => ({
    src,
    alt: `${experience.company} screenshot`,
  }));

  return (
    <article className="border border-[#E5E7EB] bg-white hover:border-2 hover:border-[#111111] hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      <div className="md:flex">
        {allImages.length > 0 && (
          <div className="md:w-2/5 shrink-0 flex flex-col">
            <div
              className="relative w-full flex-1 min-h-[160px] overflow-hidden bg-[#F3F4F6] cursor-pointer"
              onClick={() => setLightboxIndex(selectedImage)}
            >
              {imgError ? (
                <div className="flex items-center justify-center text-sm text-[#6B7280] h-full">
                  <div className="text-center">
                    <span className="text-2xl font-semibold tracking-tight block mb-1">
                      {experience.company.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                    </span>
                    <span>Screenshot unavailable</span>
                  </div>
                </div>
              ) : (
                <Image
                  src={allImages[selectedImage]}
                  alt={`${experience.company} screenshot ${selectedImage + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 420px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRUhErkJggg=="
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {allImages.length > 1 && (
              <div className="flex gap-2 px-3 pt-2 pb-1 overflow-x-auto shrink-0">
                {allImages.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "shrink-0 overflow-hidden border transition-colors",
                      i === selectedImage
                        ? "border-[#111111]"
                        : "border-[#E5E7EB] hover:border-[#4B5563]",
                    )}
                    aria-label={`View screenshot ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`${experience.company} thumbnail ${i + 1}`}
                      width={72}
                      height={54}
                      className="object-cover w-[72px] md:w-16 h-auto"
                      sizes="(max-width: 768px) 72px, 64px"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="p-4 md:p-5 md:flex-1">
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

          <button
            onClick={() => setExpanded(!expanded)}
            className="md:hidden mx-auto flex flex-col items-center gap-1 text-xs font-medium text-[#6B7280] hover:text-[#111111] transition-colors mb-1 pt-2"
          >
            <span>{expanded ? "See less" : "See more"}</span>
            <span className={cn("inline-flex", !expanded && "animate-bounce-subtle")}>
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-200",
                  expanded && "rotate-180",
                )}
              />
            </span>
          </button>

          <motion.div
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="pb-2 space-y-2">
              <BodyText className="text-sm">{experience.summary}</BodyText>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs text-[#4B5563] flex items-start gap-1.5">
                    <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-[#4B5563]" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="hidden md:block pb-3 space-y-3">
            <BodyText className="text-base">{experience.summary}</BodyText>
            <ul className="space-y-1.5">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-[#4B5563] flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[#4B5563]" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </article>
  );
}
