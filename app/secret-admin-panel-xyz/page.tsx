"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import { calculateReadTime } from "@/lib/utils"
import { Lock, Eye, EyeOff } from "lucide-react"

export default function SecretAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "",
    slug: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get admin password from environment variable
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "alexis2024admin"

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setAuthError("")
      // Store in sessionStorage so it persists during the session
      sessionStorage.setItem("admin-auth", "true")
    } else {
      setAuthError("Invalid password")
    }
  }

  useEffect(() => {
    // Check if already authenticated in this session
    const isAuth = sessionStorage.getItem("admin-auth")
    if (isAuth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const readTime = calculateReadTime(formData.content)

      const { data, error } = await supabase.from("blog_posts").insert([
        {
          ...formData,
          read_time: readTime,
          published_at: new Date().toISOString(),
        },
      ])

      if (error) {
        console.error("Error creating post:", error)
        alert("Error creating post: " + error.message)
      } else {
        alert("Post created successfully!")
        setFormData({
          title: "",
          content: "",
          excerpt: "",
          category: "",
          slug: "",
        })
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error creating post")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Auto-generate slug from title
    if (field === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    sessionStorage.removeItem("admin-auth")
  }

  // Authentication form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Admin Access Required</CardTitle>
                <p className="text-sm text-muted-foreground">
                  This area is restricted. Please enter the admin password.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAuth} className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {authError && (
                    <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded">{authError}</div>
                  )}

                  <Button type="submit" className="w-full">
                    Access Admin Panel
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">Contact the site owner if you need access</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Admin panel (only shown when authenticated)
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title *
                </label>
                <Input
                  id="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="Blog post title"
                />
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium mb-2">
                  Slug *
                </label>
                <Input
                  id="slug"
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => handleChange("slug", e.target.value)}
                  placeholder="blog-post-slug"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category
                </label>
                <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Open Source">Open Source</SelectItem>
                    <SelectItem value="Tutorial">Tutorial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                  Excerpt
                </label>
                <Textarea
                  id="excerpt"
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => handleChange("excerpt", e.target.value)}
                  placeholder="Brief description of the post..."
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Content *
                </label>
                <Textarea
                  id="content"
                  required
                  rows={12}
                  value={formData.content}
                  onChange={(e) => handleChange("content", e.target.value)}
                  placeholder="Write your blog post content here... (HTML supported)"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Post"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
