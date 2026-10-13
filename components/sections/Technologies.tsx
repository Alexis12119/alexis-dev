import { SKILLS } from "@/data/skills";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Tag } from "@/components/shared/Tag";

export function Technologies() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeader
          index="04"
          title="Tools & Technologies"
          description="The stack I reach for, organized by what matters."
        />

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {SKILLS.map((category) => (
            <div key={category.category}>
              <dt className="font-mono text-xs font-medium text-muted mb-4 uppercase tracking-wider">
                {category.category}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
