"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, GitFork, Star } from "lucide-react"
import Link from "next/link"

export function OpenSource() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>open-source
            </h2>
            <p className="text-xl text-muted-foreground">Contributing to the Neovim Ecosystem</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Github className="h-6 w-6" />
                <span>GitHub Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Stars Earned</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Active contributor to the Neovim plugins community, focusing on developer experience improvements and
                configuration optimizations. My contributions range from bug fixes to feature implementations across
                various projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="https://github.com/Alexis12119" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View GitHub Profile
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/Alexis12119?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitFork className="h-4 w-4 mr-2" />
                    Browse Repositories
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Contributions</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-background rounded border">
                <div className="flex items-center space-x-3">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Enhanced nvim-config with new plugin integrations</span>
                </div>
                <span className="text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded border">
                <div className="flex items-center space-x-3">
                  <GitFork className="h-4 w-4 text-blue-500" />
                  <span>Contributed to community Neovim plugin</span>
                </div>
                <span className="text-muted-foreground">1 week ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded border">
                <div className="flex items-center space-x-3">
                  <Github className="h-4 w-4" />
                  <span>Fixed bug in terminal integration</span>
                </div>
                <span className="text-muted-foreground">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
