"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Skills() {
  const skillCategories = {
    languages: {
      title: "Languages",
      skills: ["Java", "PHP", "C/C#/C++", "JavaScript", "TypeScript", "Python", "Lua"],
    },
    frontend: {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    backend: {
      title: "Backend",
      skills: ["Node.js", "FastAPI", "Fastify", "Express"],
    },
    mobile: {
      title: "Mobile",
      skills: ["Flutter", "React Native"],
    },
    databases: {
      title: "Databases",
      skills: ["MySQL", "Supabase", "Firebase"],
    },
    tools: {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "Ngrok", "AWS", "Neovim", "Visual Studio"],
    },
    systems: {
      title: "Operating Systems",
      skills: ["Windows", "Linux (Endeavour OS)"],
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>skills
            </h2>
            <p className="text-xl text-muted-foreground">Technologies I work with</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="databases">Database</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <Card key={key} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 text-primary">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill) => (
                        <div key={skill} className="p-4 border rounded-lg hover:bg-muted transition-colors text-center">
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
