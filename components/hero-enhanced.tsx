"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { useAchievements } from "@/hooks/use-achievements";

export function HeroEnhanced() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const { unlockAchievement } = useAchievements();
  const fullText = "Full-Stack Developer & Open Source Contributor";
  const [codeParticles, setCodeParticles] = useState<string[]>([]);

  useEffect(() => {
    const snippets = [
      "const",
      "function",
      "=>",
      "{}",
      "[]",
      "npm",
      "git",
      "vim",
    ];
    const generated = Array.from(
      { length: 20 },
      () => snippets[Math.floor(Math.random() * snippets.length)],
    );
    setCodeParticles(generated);
  }, []);

  useEffect(() => {
    // Unlock hero achievement
    unlockAchievement("welcome", "Welcome!", "You've arrived at the portfolio");

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, unlockAchievement]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeParticles.map((snippet, i) => (
          <div
            key={i}
            className="absolute text-primary/20 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-card border rounded-lg shadow-2xl mb-8 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-muted px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
              <span className="ml-4 text-sm font-mono text-muted-foreground">
                ~/alexis-corporal
              </span>
            </div>
            <div className="p-6 font-mono text-left">
              <div className="text-primary mb-2 flex items-center">
                <Terminal className="h-4 w-4 mr-2" />
                <span>$ whoami</span>
              </div>
              <div className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
                Alexis Corporal
              </div>
              <div className="text-primary mb-2 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span>$ echo $ROLE</span>
              </div>
              <div className="text-lg md:text-xl mb-4 h-8">
                {displayText}
                <span
                  className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                >
                  |
                </span>
              </div>
              <div className="text-primary mb-2">$ cat mission.txt</div>
              <div className="text-muted-foreground mb-6">
                Building fast, maintainable solutions across the stack
              </div>
              <div className="text-primary mb-2">$ ls achievements/</div>
              <div className="text-sm text-muted-foreground mb-4">
                college-student.txt &nbsp; freelancer.txt &nbsp;
                neovim-enthusiast.txt &nbsp; open-source-contributor.txt
              </div>
            </div>
          </div>

          {/* Command Prompt Navigation */}
          <div className="bg-card border rounded-lg p-4 mb-8 font-mono text-left">
            <div className="text-primary mb-2">$ ls sections/</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <Link
                href="#about"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
                onClick={() =>
                  unlockAchievement(
                    "navigator",
                    "Navigator",
                    "Used terminal navigation",
                  )
                }
              >
                about.md
              </Link>
              <Link
                href="#skills"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
              >
                skills.json
              </Link>
              <Link
                href="#projects"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
              >
                projects/
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
              >
                blog/
              </Link>
              <Link
                href="#resume"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
              >
                resume.rpg
              </Link>
              <Link
                href="#services"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
              >
                services.sh
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary transition-colors cursor-pointer hover:bg-muted px-2 py-1 rounded"
              >
                contact.form
              </Link>
              <div className="text-muted-foreground">...</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="group">
              <Link href="#projects">
                <Terminal className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                ./view_projects.sh
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group">
              <Link href="/resume" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                ./hire_me.sh
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://github.com/Alexis12119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:corporal461@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
