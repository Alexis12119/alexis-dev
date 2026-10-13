import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectIndex } from "@/components/projects/ProjectIndex";

export function SelectedWork() {
  return (
    <Section id="work" className="border-t border-border">
      <Container>
        <SectionHeader
          index="01"
          label="Selected Work"
          title="Projects I've Built"
          description="Systems, tools, and games — from document management to OCR pipelines."
        />
        <ProjectIndex />
      </Container>
    </Section>
  );
}
