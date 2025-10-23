"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Mail, Github, MapPin, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

export function ResumeDocument() {
  const isMobile = useIsMobile();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background print:bg-white">
      <div
        className={`container mx-auto ${isMobile ? "px-2 py-4" : "px-4 py-8"} max-w-4xl`}
      >
        {/* Header with actions */}
        <div className="flex flex-col mb-8 print:hidden">
          <div className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="h-8 w-8" />
              </Link>
            </Button>
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl font-bold -ml-9">Resume</h1>
            </div>
            <Button onClick={handlePrint} className="hidden sm:block">
              Print Resume
            </Button>
          </div>
          <div className="flex justify-center mt-4 sm:hidden">
            <Button onClick={handlePrint} className="w-full">
              Print Resume
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-card border rounded-lg p-8 print:border-none print:shadow-none">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Alexis Corporal</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Full-Stack Developer & Open Source Contributor
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-1 min-w-0">
                <Mail className="h-4 w-4" />
                <span className="truncate">corporal461@gmail.com</span>
              </div>
              <div className="flex items-center gap-1 min-w-0">
                <Github className="h-4 w-4" />
                <span className="truncate">github.com/Alexis12119</span>
              </div>
              <div className="flex items-center gap-1 min-w-0">
                <MapPin className="h-4 w-4" />
                <span className="truncate">Philippines</span>
              </div>
              <div className="flex items-center gap-1 min-w-0">
                <Globe className="h-4 w-4" />
                <span className="truncate">Available for Remote Work</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed break-words">
              Full-Stack Developer and college student with expertise in modern
              web technologies and a passion for open source contributions.
              Specializes in building fast, maintainable solutions across the
              stack with strong system-level thinking and adaptability to new
              technologies. Active contributor to the Neovim ecosystem with a
              focus on developer experience improvements.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-1 mb-4 w-full">
                  {[
                    "Java",
                    "PHP",
                    "C/C#/C++",
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "Lua",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs flex-shrink-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-1 mb-4 w-full">
                  {["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs flex-shrink-0"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap gap-1 mb-4 w-full">
                  {["Node.js", "FastAPI", "Fastify", "Express"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs flex-shrink-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Databases</h3>
                <div className="flex flex-wrap gap-1 mb-4 w-full">
                  {[
                    "Git",
                    "Docker",
                    "MySQL",
                    "Supabase",
                    "Firebase",
                    "AWS",
                    "Neovim",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs flex-shrink-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Featured Projects
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Sali-Seek</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Mobile attendance and performance monitoring application
                </p>
                <p className="text-sm break-words">
                  Built with Flutter and Supabase for real-time tracking and
                  analytics dashboard
                </p>
              </div>
              <div>
                <h3 className="font-semibold">MessageMe</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Real-time chat application for client communication
                </p>
                <p className="text-sm break-words">
                  Developed using Next.js, Tailwind CSS, and Python FastAPI with
                  file sharing capabilities
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Soroban Solver</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Automated math equation solver with computer vision
                </p>
                <p className="text-sm break-words">
                  Python application that captures screen content and solves
                  detected equations
                </p>
              </div>
              <div>
                <h3 className="font-semibold">nvim-config</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Personalized Neovim configuration
                </p>
                <p className="text-sm break-words">
                  Custom plugins and optimizations shared with the open source
                  community
                </p>
              </div>
            </div>
          </section>

          {/* Education & Status */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm">
                  Currently pursuing Bachelor&apos;s Degree
                </p>
                <p className="text-sm text-muted-foreground">
                  Focus on Information Technology Major in Software Development
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
