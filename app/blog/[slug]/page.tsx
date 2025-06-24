import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).single()

  if (error || !data) {
    return null
  }

  return data
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Alexis Corporal",
    }
  }

  return {
    title: `${post.title} - Alexis Corporal`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center space-x-4 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {post.excerpt && <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>}
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">Content Coming Soon</h3>
                  <p className="text-muted-foreground">
                    This blog post is currently being written. Check back soon for the full content!
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Posts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
