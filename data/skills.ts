import type { TechCategory } from "@/types/common";

export const SKILLS: TechCategory[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: [
      "Fastify",
      "Express",
      "FastAPI",
      "Go",
      "Node.js",
      "Python",
      "Spring Boot",
      "REST APIs",
      "WebSocket",
    ],
  },
  {
    category: "Testing & QA",
    items: ["Locust", "Postman", "JMeter"],
  },
  {
    category: "Android & iOS",
    items: ["Flutter"],
  },
  {
    category: "Languages & Tools",
    items: [
      "C",
      "Dart",
      "Go",
      "Java",
      "JavaScript",
      "Python",
      "SQL",
      "TypeScript",
      "OpenCV",
      "Tesseract OCR",
      "Raylib",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker Compose",
      "Nginx",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Linux",
    ],
  },
  {
    category: "Version Control & Editors",
    items: ["Git", "Neovim", "VS Code"],
  },
];
