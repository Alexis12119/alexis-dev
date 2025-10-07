import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Post Coming Soon</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The blog post for &ldquo;{params.slug}&rdquo; is currently being written. Check back soon for the full content!
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-4">Content Coming Soon</h3>
              <p className="text-muted-foreground">
                This blog post is currently being written. Check back soon for the full content!
              </p>
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
