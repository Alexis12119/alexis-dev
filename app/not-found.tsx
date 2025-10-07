"use client"

 import { Button } from "@/components/ui/button"
 import { Card, CardContent } from "@/components/ui/card"
 import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react"
 import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-primary/5"/>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Terminal-style 404 */}
                    <Card className="bg-card border rounded-lg shadow-2xl mb-8 overflow-hidden">
                        <div className="bg-muted px-4 py-2 flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"/>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                            <div className="w-3 h-3 rounded-full bg-green-500"/>
                            <span className="ml-4 text-sm font-mono text-muted-foreground">~/404-error</span>
                        </div>
                        <CardContent className="p-8 font-mono text-left">
                            <div className="text-red-500 mb-2 flex items-center">
                                <AlertTriangle className="h-4 w-4 mr-2"/>
                                <span>$ ls -la requested_page</span>
                            </div>
                            <div className="text-red-500 mb-4">ls: cannot access &apos;requested_page&apos;: No such file or
                                directory
                            </div>
                            <div className="text-primary mb-2">$ echo $ERROR_CODE</div>
                            <div className="text-muted-foreground mb-4">404 - Page Not Found</div>
                            <div className="text-primary mb-2">$ cat suggestion.txt</div>
                            <div className="text-muted-foreground">Try navigating back to the homepage</div>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <div className="flex justify-center mb-6">
                            <div className="bg-red-500/10 p-4 rounded-full">
                                <Terminal className="h-12 w-12 text-red-500"/>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="group">
                                <Link href="/">
                                    <ArrowLeft
                                        className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform"/>
                                    Back to Home
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Fun Terminal Command */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-muted rounded-lg px-4 py-2 font-mono text-sm">
                            <span className="text-primary">$</span> <span
                            className="text-muted-foreground">cd /</span>{" "}
                            <span className="text-green-500">&&</span>{" "}
                            <span className="text-muted-foreground">find . -name &quot;home&quot;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
