import type { TechCategory } from "@/types/common";

export const SKILLS: TechCategory[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Fastify", "FastAPI", "Go", "Node.js", "Python", "REST APIs", "WebSocket"],
  },
  {
    category: "Testing & QA",
    items: ["Postman", "JMeter"],
  },
  {
    category: "Android & iOS",
    items: ["Flutter"],
  },
  {
    category: "Languages & Tools",
    items: ["C", "Python", "TypeScript", "OpenCV", "Tesseract OCR", "Raylib"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "MySQL", "PostgreSQL", "Linux"],
  },
];
