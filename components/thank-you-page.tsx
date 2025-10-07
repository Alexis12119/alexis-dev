"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Mail, Clock, Sparkles, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useAchievements } from "@/hooks/use-achievements"

export function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isValidAccess, setIsValidAccess] = useState(false)
  const { unlockAchievement } = useAchievements()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if user came from form submission
    const fromForm = searchParams.get("from") === "contact-form"
    const timestamp = searchParams.get("t")
    const currentTime = Date.now()

    // Allow access if:
    // 1. Came from form submission
    // 2. Timestamp is within last 5 minutes (300000ms)
    if (fromForm && timestamp && currentTime - Number.parseInt(timestamp) < 300000) {
      setIsValidAccess(true)

      // Unlock achievement for contacting
      unlockAchievement("contact-initiator", "Contact Initiator", "Sent a message through the contact form", "📧")

      // Show confetti effect
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    } else {
      // Redirect to home after 3 seconds if invalid access
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }
  }, [unlockAchievement, router, searchParams])

  // Show access denied message for direct access
  if (!isValidAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-primary/5" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border rounded-lg shadow-2xl mb-8 overflow-hidden">
              <div className="bg-muted px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm font-mono text-muted-foreground">~/access-denied</span>
              </div>
              <CardContent className="p-8 font-mono text-left">
                <div className="text-red-500 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span>$ access_thank_you_page</span>
                </div>
                <div className="text-red-500 mb-4">Permission denied: Direct access not allowed</div>
                <div className="text-primary mb-2">$ echo $SUGGESTION</div>
                <div className="text-muted-foreground">Please use the contact form to send a message</div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="bg-red-500/10 p-4 rounded-full">
                  <AlertTriangle className="h-12 w-12 text-red-500" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">Access Denied</h1>
              <p className="text-xl text-muted-foreground mb-8">
                This page is only accessible after submitting the contact form. Redirecting you to the homepage...
              </p>

              <Button size="lg" asChild className="group">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />

      {/* Floating Success Particles */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-500/40 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <Sparkles className="h-4 w-4" />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Terminal-style Success Message */}
          <Card className="bg-card border rounded-lg shadow-2xl mb-8 overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm font-mono text-muted-foreground">~/message-sent</span>
            </div>
            <CardContent className="p-8 font-mono text-left">
              <div className="text-green-500 mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>$ send_message --to=alexis</span>
              </div>
              <div className="text-green-500 mb-4">✓ Message sent successfully!</div>
              <div className="text-primary mb-2">$ echo $STATUS</div>
              <div className="text-muted-foreground mb-4">Message delivered to corporal461@gmail.com</div>
              <div className="text-primary mb-2">$ cat response_time.txt</div>
              <div className="text-muted-foreground">Usually responds within 24 hours</div>
            </CardContent>
          </Card>

          {/* Thank You Content */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500/10 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your message has been sent successfully. I appreciate you reaching out!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">What&apos;s Next?</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I&apos;ll review your message and get back to you with a detailed response about your project.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Response Time</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours, often much sooner during business hours.
                </p>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-3">While You Wait...</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <Link
                  href="/#projects"
                  className="text-primary hover:underline flex items-center justify-center p-2 rounded hover:bg-muted transition-colors"
                >
                  Check out my projects
                </Link>
                <Link
                  href="/blog"
                  className="text-primary hover:underline flex items-center justify-center p-2 rounded hover:bg-muted transition-colors"
                >
                  Read my blog posts
                </Link>
                <Link
                  href="https://github.com/Alexis12119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center justify-center p-2 rounded hover:bg-muted transition-colors"
                >
                  View my GitHub
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:corporal461@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me Directly
                </Link>
              </Button>
            </div>
          </div>

          {/* Fun Terminal Command */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-muted rounded-lg px-4 py-2 font-mono text-sm">
              <span className="text-primary">$</span> <span className="text-muted-foreground">while true; do</span>{" "}
              <span className="text-green-500">echo &quot;Thanks for reaching out!&quot;</span>{" "}
              <span className="text-muted-foreground">; sleep 1; done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
