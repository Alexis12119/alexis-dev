import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import { ProjectsDynamic } from "./projects-dynamic"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>projects
            </h2>
            <p className="text-xl text-muted-foreground">Featured work and side projects</p>
          </div>

          <ProjectsDynamic />

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Alexis12119" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
