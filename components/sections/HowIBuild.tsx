import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Heading } from "@/components/typography/Heading";
import { Wrench, Shield, Users, Monitor } from "lucide-react";

const pillars = [
  {
    title: "Pragmatic Problem Solving",
    description:
      "I pick the right tool for each problem — whether that means a hybrid OCR pipeline that tries text extraction before falling back to Tesseract, or a C game engine for pixel-perfect asteroids.",
    icon: <Wrench size={20} aria-hidden="true" />,
  },
  {
    title: "Security by Default",
    description:
      "Rate limiting, brute-force protection, audit logging, OTP-based verification, and Cloudflare Turnstile CAPTCHA built into every system from the start.",
    icon: <Shield size={20} aria-hidden="true" />,
  },
  {
    title: "Multi-Role Architecture",
    description:
      "Systems designed around real access hierarchies — Students and Registrars, Visitors and Nurses, Employees and SuperAdmins — each with appropriate permissions and workflows.",
    icon: <Users size={20} aria-hidden="true" />,
  },
  {
    title: "Built for Real Use",
    description:
      "Real-time WebSocket updates, analytics dashboards with PDF and Excel export, email notifications, and intuitive UIs that people actually want to use every day.",
    icon: <Monitor size={20} aria-hidden="true" />,
  },
];

export function HowIBuild() {
  return (
    <Section id="how-i-build" className="border-t border-border">
      <Container>
        <SectionHeader
          index="03"
          label="How I Build"
          title="Principles That Guide My Work"
          description="A philosophy shaped by building production software across different domains."
        />

        <ol className="border-t border-border">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="border-b border-border py-6 md:py-8 grid gap-3 md:grid-cols-12 md:gap-8"
            >
              <p className="font-mono text-xs text-muted md:col-span-1 md:pt-1">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-11">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="shrink-0 text-foreground">
                    {pillar.icon}
                  </span>
                  <Heading as="h3" className="text-lg">
                    {pillar.title}
                  </Heading>
                </div>
                <p className="text-sm leading-relaxed text-accent max-w-prose">
                  {pillar.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
