"use client";

import { SKILLS } from "@/data/skills";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Tag } from "@/components/shared/Tag";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, sectionProps } from "@/utils/animation";

export function Technologies() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeader
          label="Technologies"
          title="Tools & Technologies"
          description="The tools and technologies I use across my projects."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
          {...sectionProps}
        >
          {SKILLS.map((category) => (
            <motion.div key={category.category} variants={fadeInUp}>
              <h3 className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
