import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Users, Heart } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Development",
      description: "Quick learner who adapts rapidly to new technologies and delivers solutions efficiently",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "System-level thinking combined with modern web skills for maintainable solutions",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative",
      description: "Active open source contributor with strong communication skills",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Neovim Enthusiast",
      description: "Passionate about developer tools and optimizing the coding experience",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>about
            </h2>
             <p className="text-xl text-muted-foreground">Student by day, freelancer by night</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="prose prose-lg dark:prose-invert">
                 <p className="text-lg leading-relaxed mb-6">
                   I'm a college student and freelance developer who thrives on building fast, maintainable solutions
                   across the full stack. My journey combines academic learning with real-world client projects, giving
                   me a unique perspective on both theoretical foundations and practical implementation.
                 </p>
                 <p className="text-lg leading-relaxed mb-6">
                   What sets me apart is my adaptability and speed in learning new technologies. Whether it's diving into
                   a new framework or optimizing existing code, I approach every challenge with system-level thinking and
                   a focus on long-term maintainability.
                 </p>
                 <p className="text-lg leading-relaxed">
                   When I'm not coding, you'll find me contributing to the Neovim ecosystem or exploring the latest
                   developments in developer tooling. I believe that great tools make great developers, and I'm
                   passionate about both using and creating them.
                 </p>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
