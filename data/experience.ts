import type { Experience } from "@/types/experience";

export const EXPERIENCE: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "San Pablo City, Philippines",
    startDate: "2023-05",
    endDate: "Present",
    summary:
      "Developed full-stack web applications and database systems for educational, manufacturing, and business environments. Built inventory tracking, appointment scheduling, and document management solutions.",
    achievements: [
      "Architected relational database schemas for inventory tracking, appointment scheduling, and document management systems",
      "Automated manual inventory operations with QR code generation pipeline and transactional backend services for a school inventory management system",
      "Developed a multi-role veterinary management system as a PWA with role-based access control and service worker caching for offline access",
    ],
    tools: ["Next.js", "React", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    id: "docstrack-intern",
    role: "Web Developer Intern",
    company: "Bakawan Data Analytics, Inc.",
    location: "San Pablo City, Philippines",
    startDate: "2026-02",
    endDate: "2026-05",
    summary:
      "Built the DLSP Registrar DocsTrack system — a comprehensive student document request and tracking system for Dalubhasaan ng Lungsod ng San Pablo. Went through the full development lifecycle from planning to deployment.",
    achievements: [
      "Developed backend authorization logic with role validation, secure state transitions, and audit logging",
      "Verified API performance and stability using automated JMeter and Postman test suites",
      "Completed AWS Cloud Quest: Cloud Practitioner to understand cloud fundamentals",
      "Collaborated within a dedicated engineering team to translate core system blueprints into scalable web applications",
    ],
    tools: ["Postman", "JMeter"],
    highlight: "3rd Best Intern System",
    image: "/images/Bakawan/plsp-docstrack-3rd.png",
    images: [
      "/images/Bakawan/cloud-quest.png",
    ],
  },
];
