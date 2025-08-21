"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/supabase";

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .order("published_at", { ascending: false });

        if (error) {
          console.error("Error fetching posts:", error);
          // Fall back to placeholder data if database is not set up yet
          setPosts([
            {
              id: "1",
              title: "Building Fast Web Apps with Next.js 14",
              content: "",
              excerpt:
                "Exploring the latest features in Next.js 14 and how they improve developer experience and application performance.",
              category: "Tech",
              published_at: "2024-01-15T00:00:00Z",
              slug: "nextjs-14-features",
              read_time: "5 min read",
              created_at: "2024-01-15T00:00:00Z",
              updated_at: "2024-01-15T00:00:00Z",
            },
            {
              id: "2",
              title: "My Neovim Setup for Web Development",
              content: "",
              excerpt:
                "A deep dive into my personalized Neovim configuration optimized for modern web development workflows.",
              category: "Development",
              published_at: "2024-01-10T00:00:00Z",
              slug: "neovim-web-dev-setup",
              read_time: "8 min read",
              created_at: "2024-01-10T00:00:00Z",
              updated_at: "2024-01-10T00:00:00Z",
            },
            {
              id: "3",
              title: "Contributing to Open Source: A Beginner's Guide",
              content: "",
              excerpt:
                "Tips and strategies for making your first open source contributions and becoming part of the community.",
              category: "Open Source",
              published_at: "2024-01-05T00:00:00Z",
              slug: "open-source-beginners-guide",
              read_time: "6 min read",
              created_at: "2024-01-05T00:00:00Z",
              updated_at: "2024-01-05T00:00:00Z",
            },
          ]);
        } else {
          setPosts(data || []);
        }
      } catch (error) {
        console.error("Error:", error);
        setPosts([]); // Show "Content Coming Soon" message
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded" />
                <div className="h-3 bg-muted rounded w-5/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Content Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            I'm working on some exciting blog posts about web development,
            Neovim, and open source. Stay tuned!
          </p>
          <Button variant="outline" asChild>
            <Link href="/#contact">Get Notified</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow group">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {new Date(post.published_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.read_time}</span>
                </div>
              </div>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <Button
              variant="ghost"
              className="p-0 h-auto font-semibold group-hover:text-primary"
              asChild
            >
              <Link href={`/blog/${post.slug}`}>
                Read More
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
