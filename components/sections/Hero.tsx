"use client";

import { SITE_CONFIG } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/shared/LinkButton";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import { Caption } from "@/components/typography/Caption";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animation";

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-32 scroll-mt-16">
      <Container>
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Caption className="font-medium mb-6">{SITE_CONFIG.location}</Caption>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Heading as="h1" className="mb-6">{SITE_CONFIG.name}</Heading>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#4B5563] mb-4 font-medium"
          >
            {SITE_CONFIG.title}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Subheading className="mb-10 leading-relaxed">
              Building software that removes repetitive work and improves
              operational efficiency.
            </Subheading>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <LinkButton href="#work" variant="primary">
              View Work
              <ArrowDown size={16} />
            </LinkButton>
            <LinkButton
              href="/ATS Resume - Alexis Corporal.pdf"
              variant="secondary"
              download
            >
              <Download size={16} />
              Download Resume
            </LinkButton>

          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
