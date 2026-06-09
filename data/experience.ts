import type { Experience } from "@/types/experience";

export const EXPERIENCE: Experience[] = [
  {
    id: "docstrack-intern",
    role: "Software Development Intern",
    company: "PLSP Registrar DocsTrack",
    location: "San Pablo City, Philippines",
    startDate: "2026-02",
    endDate: "2026-05",
    summary:
      "Built a comprehensive online student document request and tracking system for Pamantasan ng Lungsod ng San Pablo. Designed role-based access control, real-time WebSocket updates, audit logging, and analytics dashboards.",
    achievements: [
      "Designed and implemented a role-based document request workflow handling multiple user types",
      "Built real-time WebSocket notifications for status updates",
      "Implemented rate limiting, brute-force protection, and audit logging",
      "Developed analytics dashboards with PDF and Excel export",
    ],
    highlight: "3rd Best Intern System",
  },
];
