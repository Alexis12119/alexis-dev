"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Full-Stack Developer & Open Source Contributor"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-card border rounded-lg shadow-2xl mb-8 overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm font-mono text-muted-foreground">~/alexis-corporal</span>
            </div>
            <div className="p-6 font-mono text-left">
              <div className="text-primary mb-2">$ whoami</div>
              <div className="text-2xl md:text-4xl font-bold mb-4">Alexis Corporal</div>
              <div className="text-primary mb-2">$ echo $ROLE</div>
              <div className="text-lg md:text-xl mb-4 h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
              <div className="text-primary mb-2">$ cat mission.txt</div>
              <div className="text-muted-foreground mb-6">Building fast, maintainable solutions across the stack</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://github.com/Alexis12119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:alexis@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
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
  )
}
