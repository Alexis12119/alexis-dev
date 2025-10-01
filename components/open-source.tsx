"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, GitFork, Star, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useGithubData } from "@/hooks/use-github-data"

export function OpenSource() {
  const { data, loading, error } = useGithubData()
  const { repos, events } = data
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalContributions = events.length > 0 ? events.filter(event => ['PushEvent', 'IssuesEvent', 'PullRequestEvent'].includes(event.type)).length : 50
  const totalRepos = repos.length > 0 ? repos.length : 15
  const totalStars = repos.length > 0 ? repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) : 100

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent': return <Star className="h-4 w-4 text-yellow-500" />
      case 'IssuesEvent': return <Github className="h-4 w-4" />
      case 'PullRequestEvent': return <GitFork className="h-4 w-4 text-blue-500" />
      default: return <Github className="h-4 w-4" />
    }
  }

  const getEventMessage = (event: any) => {
    switch (event.type) {
      case 'PushEvent': return `Pushed to ${event.repo.name}`
      case 'IssuesEvent': return `Opened issue in ${event.repo.name}`
      case 'PullRequestEvent': return `Opened PR in ${event.repo.name}`
      default: return `Activity in ${event.repo.name}`
    }
  }

  const recentContributions = events.length > 0 ? events.slice(0, 3).map(event => ({
    icon: getEventIcon(event.type),
    message: getEventMessage(event),
    date: new Date(event.created_at).toLocaleDateString()
  })) : [
    {
      icon: <Star className="h-4 w-4 text-yellow-500" />,
      message: "Enhanced nvim-config with new plugin integrations",
      date: "2 days ago"
    },
    {
      icon: <GitFork className="h-4 w-4 text-blue-500" />,
      message: "Contributed to community Neovim plugin",
      date: "1 week ago"
    },
    {
      icon: <Github className="h-4 w-4" />,
      message: "Fixed bug in terminal integration",
      date: "2 weeks ago"
    }
  ]



  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="font-mono text-primary">~/</span>open-source
              </h2>
              <p className="text-xl text-muted-foreground">Loading GitHub data...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
                  <div className="text-3xl font-bold text-primary mb-2">{totalContributions}+</div>
                  <div className="text-muted-foreground">Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{totalRepos}+</div>
                  <div className="text-muted-foreground">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{totalStars}+</div>
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
             <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
             <div className="space-y-3 text-sm">
               {recentContributions.map((contrib, index) => (
                 <div key={index} className="flex items-center justify-between p-3 bg-background rounded border">
                   <div className="flex items-center space-x-3">
                     {contrib.icon}
                     <span>{contrib.message}</span>
                   </div>
                   <span className="text-muted-foreground">{contrib.date}</span>
                 </div>
               ))}
               {events.length > 3 && (
                 <div className="flex justify-center mt-4">
                   <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                     <DialogTrigger asChild>
                       <Button variant="outline" size="sm">
                         <ChevronDown className="h-4 w-4 mr-2" />
                         View More Activities
                       </Button>
                     </DialogTrigger>
                     <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                       <DialogHeader>
                         <DialogTitle>All Recent Activities</DialogTitle>
                       </DialogHeader>
                       <div className="space-y-3 text-sm">
                         {events.slice(0, 10).map((event, index) => (
                           <div key={index} className="flex items-center justify-between p-3 bg-background rounded border">
                             <div className="flex items-center space-x-3">
                               {getEventIcon(event.type)}
                               <span>{getEventMessage(event)}</span>
                             </div>
                             <span className="text-muted-foreground">{new Date(event.created_at).toLocaleDateString()}</span>
                           </div>
                         ))}
                       </div>
                     </DialogContent>
                   </Dialog>
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}
