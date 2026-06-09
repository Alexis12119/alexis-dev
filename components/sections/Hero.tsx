"use client";

import { SITE_CONFIG } from "@/config/site";
import { SOCIALS } from "@/config/socials";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/shared/LinkButton";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animation";

export function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium text-[#6B7280] mb-6"
          >
            {SITE_CONFIG.location}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
          >
            {SITE_CONFIG.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#4B5563] mb-4 font-medium"
          >
            {SITE_CONFIG.title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#6B7280] max-w-prose mb-10 leading-relaxed"
          >
            Building software that removes repetitive work and improves
            operational efficiency.
          </motion.p>

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
            <LinkButton href={`mailto:${SOCIALS.email}`} variant="ghost">
              <Mail size={16} />
              Contact
            </LinkButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
