import type { Experience } from "@/types/experience";

export const EXPERIENCE: Experience[] = [
  {
    id: "docstrack-intern",
    role: "Web Development Intern",
    company: "Bakawan Data Analytics, Inc.",
    location: "San Pablo City, Philippines",
    startDate: "2026-02",
    endDate: "2026-05",
    summary:
      "Built the PLSP Registrar DocsTrack system — a comprehensive student document request and tracking system for Pamantasan ng Lungsod ng San Pablo. Went through the full development lifecycle from planning to development.",
    achievements: [
      "Developed a full-stack document request and tracking system with role-based access control",
      "Tested API endpoints with Postman and ran performance tests using JMeter",
      "Completed AWS Cloud Quest: Cloud Practitioner to understand cloud fundamentals",
      "Proposed and built the DocsTrack system through the full development phase",
    ],
    tools: ["Postman", "JMeter"],
    highlight: "3rd Best Intern System",
    image: "/images/Bakawan/top3.jpg",
    images: [
      "/images/Bakawan/plsp-docstrack-3rd.png",
      "/images/Bakawan/cloud-quest.png",
    ],
  },
];
