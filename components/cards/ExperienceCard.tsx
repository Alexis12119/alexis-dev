"use client";

import { Badge } from "@/components/shared/Badge";
import { CardImage } from "@/components/shared/CardImage";
import { CollapsibleContent } from "@/components/shared/CollapsibleContent";
import { BodyText } from "@/components/typography/BodyText";
import { Heading } from "@/components/typography/Heading";
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
  const initials = experience.company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <article className="border border-border bg-white hover:border-2 hover:border-foreground hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      <div className="md:flex">
        {allImages.length > 0 && (
          <CardImage
            images={allImages}
            alt={experience.company}
            initials={initials}
          />
        )}

        <div className="p-4 md:p-5 md:flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <Heading as="h3" className="text-xl">
                {experience.role}
              </Heading>
              <p className="text-base text-accent">{experience.company}</p>
            </div>
            <div className="text-sm text-muted shrink-0">
              {formatDate(experience.startDate)} &mdash;{" "}
              {experience.endDate === "Present"
                ? "Present"
                : formatDate(experience.endDate)}
            </div>
          </div>

          {experience.highlight && (
            <Badge className="mb-3 border-accent text-accent self-start">
              {experience.highlight}
            </Badge>
          )}

          <CollapsibleContent>
            <BodyText className="text-sm md:text-base">
              {experience.summary}
            </BodyText>
            <ul className="space-y-1 md:space-y-1.5">
              {experience.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-xs md:text-sm text-accent flex items-start gap-1.5 md:gap-2"
                >
                  <span className="mt-1 md:mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {achievement}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </div>
      </div>
    </article>
  );
}
