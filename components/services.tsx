import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Server, Search, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description:
        "Complete web applications using modern frameworks like Next.js, React, and Node.js with responsive design and optimal performance.",
      features: ["React/Next.js Applications", "API Development", "Database Design", "Responsive UI/UX"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using Flutter and React Native for iOS and Android with native performance.",
      features: ["Flutter Development", "React Native Apps", "Cross-platform Solutions", "App Store Deployment"],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API Development & Integration",
      description:
        "RESTful APIs, third-party integrations, and backend services with proper authentication and documentation.",
      features: ["REST API Design", "Third-party Integrations", "Authentication Systems", "API Documentation"],
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Code Review & Optimization",
      description:
        "Performance audits, code quality improvements, and technical consulting to enhance existing applications.",
      features: [
        "Performance Optimization",
        "Code Quality Review",
        "Technical Consulting",
        "Best Practices Implementation",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>services
            </h2>
            <p className="text-xl text-muted-foreground">Available for Freelance Projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-primary">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Available for Projects
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m currently accepting new freelance projects and would love to help bring your ideas to life. Let&apos;s
                discuss how we can work together.
              </p>

              <div className="flex items-center justify-center space-x-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
