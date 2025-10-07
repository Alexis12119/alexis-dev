"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Mail, Github, MapPin, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ResumeDocument() {

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a more detailed resume content for download
    const resumeContent = `
ALEXIS CORPORAL
Full-Stack Developer & Open Source Contributor
Email: corporal461@gmail.com | GitHub: github.com/Alexis12119
Location: Philippines | Status: Available for Freelance Projects

SUMMARY
Full-Stack Developer and college student with expertise in modern web technologies and a passion for open source contributions. Specializes in building fast, maintainable solutions across the stack with strong system-level thinking and adaptability to new technologies.

TECHNICAL SKILLS
Languages: Java, PHP, C/C#/C++, JavaScript, TypeScript, Python, Lua
Frontend: React.js, Next.js, Tailwind CSS, HTML/CSS
Backend: Node.js, FastAPI, Fastify, Express
Mobile: Flutter, React Native
Databases: MySQL, Supabase, Firebase
Tools & DevOps: Git, Docker, Ngrok, AWS, Neovim, Visual Studio
Operating Systems: Windows, Linux (Endeavour OS)

FEATURED PROJECTS
Sali-Seek - Mobile attendance and performance monitoring application
• Built with Flutter and Firebase for real-time tracking
• Implemented analytics dashboard for performance monitoring

MessageMe - Real-time chat application for client communication
• Developed using Next.js, Tailwind CSS, and Python FastAPI
• Features file sharing and secure messaging

Soroban Solver - Automated math equation solver
• Python application with computer vision capabilities
• Automatically captures screen and solves detected equations

BakerPass - Multi-role appointment scheduling system
• Full-stack web application with QR code integration
• Streamlined check-in and management processes

nvim-config - Personalized Neovim configuration
• Custom plugins and optimizations for development workflow
• Shared with the open source community

OPEN SOURCE CONTRIBUTIONS
• Active contributor to the Neovim ecosystem
• 50+ contributions across various projects
• Focus on developer experience improvements and configuration optimizations

SERVICES OFFERED
• Full-Stack Web Development (React/Next.js, Node.js)
• Mobile App Development (Flutter, React Native)
• API Development & Integration
• Code Review & Optimization
• Technical Consulting

EDUCATION
Currently pursuing Bachelor's Degree (In Progress)
Focus on Computer Science and Software Development

AVAILABILITY
Status: Available for freelance projects
Response Time: Usually within 24 hours
Location: Philippines (Remote work preferred)
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Alexis_Corporal_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background print:bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with actions */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="h-8 w-8 mr-2" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Resume</h1>
          </div>
           <div className="flex gap-2">
             <Button onClick={handleDownload} variant="outline">
               <Download className="h-4 w-4 mr-2" />
               Download
             </Button>
             <Button onClick={handlePrint}>Print Resume</Button>
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
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>corporal461@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <span>github.com/Alexis12119</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Philippines</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Available for Remote Work</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

           {/* Summary */}
           <section className="mb-8">
             <h2 className="text-2xl font-semibold mb-4 text-primary">
               Professional Summary
             </h2>
             <p className="text-muted-foreground leading-relaxed">
               Full-Stack Developer and college student with expertise in modern web technologies and a passion for open source contributions. Specializes in building fast, maintainable solutions across the stack with strong system-level thinking and adaptability to new technologies. Active contributor to the Neovim ecosystem with a focus on developer experience improvements.
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
                <div className="flex flex-wrap gap-1 mb-4">
                  {[
                    "Java",
                    "PHP",
                    "C/C#/C++",
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "Lua",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Node.js", "FastAPI", "Fastify", "Express"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Databases</h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {[
                    "Git",
                    "Docker",
                    "MySQL",
                    "Supabase",
                    "Firebase",
                    "AWS",
                    "Neovim",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
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
                <p className="text-sm">
                  Built with Flutter and Firebase for real-time tracking and
                  analytics dashboard
                </p>
              </div>
              <div>
                <h3 className="font-semibold">MessageMe</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Real-time chat application for client communication
                </p>
                <p className="text-sm">
                  Developed using Next.js, Tailwind CSS, and Python FastAPI with
                  file sharing capabilities
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Soroban Solver</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Automated math equation solver with computer vision
                </p>
                <p className="text-sm">
                  Python application that captures screen content and solves
                  detected equations
                </p>
              </div>
              <div>
                <h3 className="font-semibold">nvim-config</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Personalized Neovim configuration
                </p>
                <p className="text-sm">
                  Custom plugins and optimizations shared with the open source
                  community
                </p>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Open Source Contributions
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Active contributor to the Neovim ecosystem</li>
              <li>50+ contributions across various open source projects</li>
              <li>
                Focus on developer experience improvements and configuration
                optimizations
              </li>
              <li>Community engagement and plugin development</li>
            </ul>
          </section>

          {/* Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Services Offered
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Full-Stack Web Development</li>
                <li>Mobile App Development</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>API Development & Integration</li>
                <li>Code Review & Optimization</li>
              </ul>
            </div>
          </section>

          {/* Education & Status */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Education & Availability
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm">Currently pursuing Bachelor&apos;s Degree</p>
                <p className="text-sm text-muted-foreground">
                  Focus on Computer Science and Software Development
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-sm">Available for freelance projects</p>
                <p className="text-sm text-muted-foreground">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground print:hidden">
          <p>This resume was generated automatically from my portfolio data.</p>
          <p>
            For the most up-to-date information, visit my portfolio website.
          </p>
        </div>
      </div>
    </div>
  );
}
