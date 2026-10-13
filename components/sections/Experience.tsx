import { EXPERIENCE } from "@/data/experience";
import { EDUCATION, CERTIFICATIONS } from "@/data/education";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Heading } from "@/components/typography/Heading";
import { BodyText } from "@/components/typography/BodyText";
import { Caption } from "@/components/typography/Caption";
import { Badge } from "@/components/shared/Badge";
import { formatDate } from "@/utils/formatDate";

function dateRange(startDate: string, endDate: string): string {
  const end = endDate === "Present" ? "Present" : formatDate(endDate);
  return `${formatDate(startDate)} — ${end}`;
}

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <Container>
        <SectionHeader
          index="02"
          title="Where I've Worked"
          description="Professional context for the work above — responsibilities, contributions, and recognition."
        />

        <ol className="border-t border-border">
          {EXPERIENCE.map((exp) => (
            <li key={exp.id} className="border-b border-border py-8 md:py-10">
              <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-8">
                  <Heading as="h3" className="text-xl md:text-2xl mb-1">
                    {exp.role}
                  </Heading>
                  <p className="text-base text-accent mb-3">
                    {exp.company} · {exp.location}
                  </p>
                  <BodyText className="max-w-prose mb-4">
                    {exp.summary}
                  </BodyText>
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-accent flex items-start gap-2"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {exp.highlight && (
                      <Badge className="border-accent text-accent">
                        {exp.highlight}
                      </Badge>
                    )}
                    {exp.id === "docstrack-intern" && (
                      <a
                        href="#project-plsp-registrar-docstrack"
                        className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
                      >
                        Related project: DLSP Registrar DocsTrack
                      </a>
                    )}
                  </div>
                </div>
                <p className="font-mono text-xs text-muted md:col-span-4 md:text-right">
                  {dateRange(exp.startDate, exp.endDate)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid gap-8 md:grid-cols-12 md:gap-8 mt-12">
          <div className="md:col-span-6">
            <Heading as="h3" className="text-lg mb-2">
              {EDUCATION.degree}
            </Heading>
            <p className="text-sm text-accent">{EDUCATION.school}</p>
            {EDUCATION.field && (
              <p className="text-sm text-muted mt-0.5">{EDUCATION.field}</p>
            )}
            <p className="font-mono text-xs text-muted mt-2">
              {EDUCATION.startYear} — {EDUCATION.endYear}
            </p>
            {EDUCATION.honors && (
              <Badge className="mt-3 border-accent text-accent">
                Graduated {EDUCATION.honors}
              </Badge>
            )}
          </div>
          <div className="md:col-span-6">
            <Heading as="h3" className="text-lg mb-4">
              Recognition
            </Heading>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title} className="text-sm">
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="text-muted mt-0.5">{cert.description}</p>
                  <Caption>{cert.year}</Caption>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
