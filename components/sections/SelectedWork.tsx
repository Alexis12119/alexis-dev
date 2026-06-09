"use client";

import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { sortProjectsByYear } from "@/utils/project";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/animation";

export function SelectedWork() {
  const sorted = sortProjectsByYear(PROJECTS);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="Selected Work"
          title="Projects I've Built"
          description="Systems, tools, and games — from document management to OCR pipelines."
        />

        <motion.div
          className="grid gap-12 md:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sorted.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
