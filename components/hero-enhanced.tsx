"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Terminal, Zap } from "lucide-react";
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
     // Unlock hero achievement only once
     if (!localStorage.getItem('welcomeShown')) {
       unlockAchievement("welcome", "Welcome!", "You've arrived at the portfolio");
       localStorage.setItem('welcomeShown', 'true');
     }

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
            <div className="p-4 sm:p-6 font-mono text-left">
              <div className="text-primary mb-2 flex items-center text-xs sm:text-sm">
                <Terminal className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate">$ whoami</span>
              </div>
              <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">
                Alexis Corporal
              </div>
              <div className="text-primary mb-2 flex items-center text-xs sm:text-sm">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate">$ echo $ROLE</span>
              </div>
              <div className="text-sm sm:text-base md:text-xl mb-4 min-h-[1.5rem] sm:min-h-[2rem] break-words">
                {displayText}
                <span
                  className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                >
                  |
                </span>
              </div>
              <div className="text-primary mb-1 sm:mb-2 text-xs sm:text-sm">$ cat mission.txt</div>
              <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                Building fast, maintainable solutions across the stack
              </div>
              <div className="text-primary mb-1 sm:mb-2 text-xs sm:text-sm">$ ls achievements/</div>
              <div className="text-xs sm:text-sm text-muted-foreground mb-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-2 gap-y-1">
                <span className="truncate">college-student.txt</span>
                <span className="truncate">freelancer.txt</span>
                <span className="truncate">neovim-enthusiast.txt</span>
                <span className="truncate">open-source-contributor.txt</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
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
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 flex items-center justify-center"
              aria-label="GitHub profile"
              title="View on GitHub"
            >
              <svg 
                className="h-6 w-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
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
