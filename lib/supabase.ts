import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for blog posts
export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  category: string
  published_at: string
  slug: string
  read_time: string
  created_at: string
  updated_at: string
}

// Types for projects (if you want to store them in Supabase)
export interface Project {
  id: string
  title: string
  description: string
  tech_stack: string[]
  type: string
  image_url: string
  demo_url: string
  github_url: string
  featured: boolean
  created_at: string
}
