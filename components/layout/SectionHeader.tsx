import { cn } from "@/utils/cn";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import { Caption } from "@/components/typography/Caption";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 md:mb-20", className)}>
      {label && (
        <Caption className="font-medium mb-4">{label}</Caption>
      )}
      <Heading as="h2" className="mb-4">{title}</Heading>
      {description && (
        <Subheading>{description}</Subheading>
      )}
    </div>
  );
}
