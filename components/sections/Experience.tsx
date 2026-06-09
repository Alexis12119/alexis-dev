"use client";

import { EXPERIENCE } from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          description="Professional experience building real-world systems."
        />

        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {EXPERIENCE.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
