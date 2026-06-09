"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { MetricCard } from "@/components/cards/MetricCard";
import { Wrench, Shield, Users, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/animation";

const pillars = [
  {
    title: "Pragmatic Problem Solving",
    description:
      "I pick the right tool for each problem — whether that means a hybrid OCR pipeline that tries text extraction before falling back to Tesseract, or a C game engine for pixel-perfect asteroids.",
    icon: <Wrench size={24} />,
  },
  {
    title: "Security by Default",
    description:
      "Rate limiting, brute-force protection, audit logging, OTP-based verification, and Cloudflare Turnstile CAPTCHA built into every system from the start.",
    icon: <Shield size={24} />,
  },
  {
    title: "Multi-Role Architecture",
    description:
      "Systems designed around real access hierarchies — Students and Registrars, Visitors and Nurses, Employees and SuperAdmins — each with appropriate permissions and workflows.",
    icon: <Users size={24} />,
  },
  {
    title: "Built for Real Use",
    description:
      "Real-time WebSocket updates, analytics dashboards with PDF and Excel export, email notifications, and intuitive UIs that people actually want to use every day.",
    icon: <Monitor size={24} />,
  },
];

export function HowIBuild() {
  return (
    <Section id="how-i-build" className="border-t border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="How I Build"
          title="Principles That Guide My Work"
          description="These are the engineering values I carry into every project."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeInUp} className="h-full">
              <MetricCard
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
