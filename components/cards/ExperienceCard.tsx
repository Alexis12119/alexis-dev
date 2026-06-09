import { Badge } from "@/components/shared/Badge";
import { BodyText } from "@/components/typography/BodyText";
import { formatDate } from "@/utils/formatDate";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="border border-[#E5E7EB] bg-white p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {experience.role}
          </h3>
          <p className="text-base text-[#4B5563]">{experience.company}</p>
        </div>
        <div className="text-sm text-[#6B7280] shrink-0">
          {formatDate(experience.startDate)} &mdash;{" "}
          {formatDate(experience.endDate)}
        </div>
      </div>

      {experience.highlight && (
        <Badge className="mb-4 border-[#4B5563] text-[#4B5563]">
          {experience.highlight}
        </Badge>
      )}

      <BodyText className="mb-4">{experience.summary}</BodyText>

      <ul className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="text-sm text-[#4B5563] flex items-start gap-2">
            <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[#4B5563]" />
            {achievement}
          </li>
        ))}
      </ul>
    </article>
  );
}
