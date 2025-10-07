"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  type: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  featured: boolean;
  created_at: string;
}

export function ProjectsDynamic() {

  // Static fallback projects
  const staticProjects = [
    {
      id: "1",
      title: "Sali-Seek",
      description:
        "Mobile attendance and performance monitoring application with real-time tracking and analytics dashboard.",
      tech_stack: ["Flutter", "Firebase", "Dart"],
      type: "Mobile Application",
      image_url: "/placeholder.svg?height=300&width=400",
      demo_url: "https://github.com/Alexis12119/SaliSeek",
      github_url: "https://github.com/Alexis12119/SaliSeek",
      featured: true,
      created_at: "2024-01-01T00:00:00Z",
    },
    {
      id: "2",
      title: "MessageMe",
      description:
        "Real-time chat application for client communication with file sharing and message encryption.",
      tech_stack: ["Next.js", "Tailwind CSS", "Axios", "Python", "FastAPI"],
      type: "Full-Stack Web Application",
      image_url: "/placeholder.svg?height=300&width=400",
      demo_url: "https://github.com/Alexis12119/messageMe",
      github_url: "https://github.com/Alexis12119/messageMe",
      featured: true,
      created_at: "2024-01-01T00:00:00Z",
    },
    {
      id: "3",
      title: "Soroban Solver",
      description:
        "Python application that captures screen content and automatically solves detected mathematical equations using computer vision.",
      tech_stack: ["Python", "OpenCV", "Computer Vision", "Screen Capture"],
      type: "Desktop Application",
      image_url: "/placeholder.svg?height=300&width=400",
      demo_url: "https://github.com/Alexis12119/Soroban-Solver",
      github_url: "https://github.com/Alexis12119/Soroban-Solver",
      featured: true,
      created_at: "2024-01-01T00:00:00Z",
    },
    {
      id: "4",
      title: "BakerPass",
      description:
        "Multi-role appointment scheduling system with QR code integration for seamless check-ins and management.",
      tech_stack: ["NextJs", "Node.js", "Fastify", "MySQL", "TailwindCSS"],
      type: "Web Application",
      image_url: "/placeholder.svg?height=300&width=400",
      demo_url: "https://github.com/Alexis12119/bakerpass",
      github_url: "https://github.com/Alexis12119/bakerpass",
      featured: true,
      created_at: "2024-01-01T00:00:00Z",
    },
    {
      id: "5",
      title: "nvim-config",
      description:
        "Personalized Neovim configuration with custom plugins, optimizations, and development workflow enhancements.",
      tech_stack: ["Lua", "Neovim", "Plugin Development"],
      type: "Development Tool",
      image_url: "/placeholder.svg?height=300&width=400",
      demo_url: "https://github.com/Alexis12119/nvim-config",
      github_url: "https://github.com/Alexis12119/nvim-config",
      featured: true,
      created_at: "2024-01-01T00:00:00Z",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {staticProjects.map((project) => (
        <Card
          key={project.id}
          className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <Image
              src={project.image_url || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              {/* <Button size="sm" asChild> */}
              {/*   <Link */}
              {/*     href={project.demo_url} */}
              {/*     target="_blank" */}
              {/*     rel="noopener noreferrer" */}
              {/*   > */}
              {/*     <ExternalLink className="h-4 w-4 mr-2" /> */}
              {/*     Demo */}
              {/*   </Link> */}
              {/* </Button> */}
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Link>
              </Button>
            </div>
          </div>

          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <Badge variant="outline" className="text-xs">
                {project.type}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
               {project.tech_stack.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
