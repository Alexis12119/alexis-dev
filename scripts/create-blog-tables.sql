-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category VARCHAR(100),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  read_time VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table (optional - for storing projects in database)
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  tech_stack TEXT[], -- Array of technologies
  type VARCHAR(100),
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, content, excerpt, category, slug, read_time) VALUES
(
  'Building Fast Web Apps with Next.js 14',
  'Next.js 14 introduces several groundbreaking features that significantly improve both developer experience and application performance...',
  'Exploring the latest features in Next.js 14 and how they improve developer experience and application performance.',
  'Tech',
  'nextjs-14-features',
  '5 min read'
),
(
  'My Neovim Setup for Web Development',
  'After years of tweaking and optimizing, I''ve settled on a Neovim configuration that maximizes productivity for web development...',
  'A deep dive into my personalized Neovim configuration optimized for modern web development workflows.',
  'Development',
  'neovim-web-dev-setup',
  '8 min read'
),
(
  'Contributing to Open Source: A Beginner''s Guide',
  'Open source contribution can seem daunting at first, but with the right approach and mindset, anyone can become a valuable contributor...',
  'Tips and strategies for making your first open source contributions and becoming part of the community.',
  'Open Source',
  'open-source-beginners-guide',
  '6 min read'
);

-- Insert sample projects
INSERT INTO projects (title, description, tech_stack, type, image_url, demo_url, github_url, featured) VALUES
(
  'Sali-Seek',
  'Mobile attendance and performance monitoring application with real-time tracking and analytics dashboard.',
  ARRAY['Flutter', 'Firebase', 'Dart'],
  'Mobile Application',
  '/placeholder.svg?height=300&width=400',
  '#',
  '#',
  TRUE
),
(
  'MessageMe',
  'Real-time chat application for client communication with file sharing and message encryption.',
  ARRAY['Next.js', 'Tailwind CSS', 'Axios', 'Python', 'FastAPI'],
  'Full-Stack Web Application',
  '/placeholder.svg?height=300&width=400',
  '#',
  '#',
  TRUE
),
(
  'Soroban Solver',
  'Python application that captures screen content and automatically solves detected mathematical equations using computer vision.',
  ARRAY['Python', 'OpenCV', 'Computer Vision', 'Screen Capture'],
  'Desktop Application',
  '/placeholder.svg?height=300&width=400',
  '#',
  '#',
  TRUE
);
