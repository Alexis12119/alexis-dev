"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { sortProjectsByYear } from "@/utils/project";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/animation";

export function SelectedWork() {
  const sorted = sortProjectsByYear(PROJECTS);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight ?? 0);
    const max = Math.max(...heights);
    if (max > 0) setCardHeight(max);
  }, []);

  return (
    <Section id="work" className="border-t border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="Selected Work"
          title="Projects I've Built"
          description="Systems, tools, and games — from document management to OCR pipelines."
        />

        <motion.div
          className="grid gap-10 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sorted.map((project, i) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <div ref={(el) => { cardRefs.current[i] = el; }}>
                <ProjectCard project={project} cardHeight={cardHeight} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
