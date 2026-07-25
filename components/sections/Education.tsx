"use client";

import { EDUCATION, CERTIFICATIONS } from "@/data/education";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Heading } from "@/components/typography/Heading";
import { Caption } from "@/components/typography/Caption";
import { Badge } from "@/components/shared/Badge";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, sectionProps } from "@/utils/animation";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeader
          label="Education"
          title="Background & Credentials"
          description="Academic foundation and professional certifications."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          {...sectionProps}
        >
          <motion.div
            variants={fadeInUp}
            className="border border-border bg-white p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="p-2 bg-subtle shrink-0">
                <GraduationCap size={20} />
              </span>
              <div>
                <Heading as="h3" className="text-lg mb-1">
                  {EDUCATION.degree}
                </Heading>
                <p className="text-sm text-accent mb-1">
                  {EDUCATION.school}
                </p>
                {EDUCATION.field && (
                  <p className="text-sm text-muted mb-2">
                    {EDUCATION.field}
                  </p>
                )}
                <Caption>
                  {EDUCATION.startYear} — {EDUCATION.endYear}
                </Caption>
                {EDUCATION.honors && (
                  <Badge className="mt-3 border-accent text-accent">
                    {EDUCATION.honors}
                  </Badge>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="border border-border bg-white p-6 md:p-8"
          >
            <Heading as="h3" className="text-lg mb-4 flex items-center gap-2">
              <Award size={20} />
              Certifications & Awards
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
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
