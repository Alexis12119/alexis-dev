import { BlogList } from "@/components/blog/blog-list";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog - Alexis Corporal",
  description: "Thoughts on development, open source, and technology",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button size="lg" asChild className="group">
            <Link href="/">
              <ArrowLeft className="h-8 w-8 mr-2 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="font-mono text-primary">~/</span>blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on development, open source, and technology
          </p>
        </div>

        <Suspense
          fallback={<div className="text-center">Loading posts...</div>}
        >
          <BlogList />
        </Suspense>
      </div>
    </div>
  );
}
