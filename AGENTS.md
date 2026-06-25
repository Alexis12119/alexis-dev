# Portfolio Website Development Specification

## Objective

Build a professional portfolio website for Alexis Corporal using Next.js 16, React 19, TypeScript, and Tailwind CSS.

The website should communicate:

* Software engineering craftsmanship
* Problem solving
* Real-world systems development
* Professional experience
* Reliability and maintainability

The design must avoid the typical AI-generated developer portfolio appearance.

Avoid:

* Blue/purple gradients
* Floating blobs
* Particle effects
* Excessive animations
* Neon cyberpunk aesthetics
* Generic SaaS landing page visuals
* Skill percentages
* Spinning logos
* Typewriter effects

The site should feel:

* Minimalist
* Editorial
* Structured
* Professional
* Timeless
* Clean
* Quietly confident

---

# Technology Stack

* Next.js 16 App Router
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion (minimal usage only)
* Lucide Icons

---

# Design System

## Colors

```css
background: #FAF9F6
foreground: #111111
muted: #6B7280
border: #E5E7EB
accent: #4B5563
```

## Design Rules

* Use whitespace aggressively.
* Prioritize readability.
* Let screenshots be the visual focus.
* Use thin borders.
* Avoid shadows unless subtle.
* Avoid gradients.
* Use max-w-7xl content width.
* Maintain consistent spacing scale.
* Cards have hover:border-2 hover:border-[#111111] and hover:scale-[1.02].
* Side-by-side card layout on desktop (image 40%, details 60%).
* Images use object-cover with consistent aspect ratios.

---

# Typography

Headings: Geist

Body: Inter

Rules:

* Large readable headings
* Comfortable reading widths
* Consistent hierarchy

Components: Heading (h1-h4 via `as` prop), Subheading, BodyText, Caption — all used consistently across sections.

---

# Architecture

No `src/` directory — files are at project root.

```text
app/
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── globals.css
├── icon.png
└── opengraph-image.png

components/
├── layout/
│   ├── Container.tsx    (mx-auto max-w-7xl px-8 md:px-12 lg:px-16)
│   ├── Section.tsx      (scroll-mt-16, py-24 md:py-32)
│   └── SectionHeader.tsx
├── navigation/
│   ├── Navbar.tsx       (sticky, active link, mobile menu, floating back-to-top)
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── SelectedWork.tsx
│   ├── HowIBuild.tsx
│   ├── Technologies.tsx
│   └── Contact.tsx
├── cards/
│   ├── ProjectCard.tsx   (side-by-side, lightbox, carousel thumbnails)
│   ├── ExperienceCard.tsx (side-by-side, lightbox, carousel thumbnails)
│   └── MetricCard.tsx
├── typography/
│   ├── Heading.tsx
│   ├── Subheading.tsx
│   ├── BodyText.tsx
│   └── Caption.tsx
├── ui/
│   └── ImageLightbox.tsx
└── shared/
    ├── Button.tsx
    ├── LinkButton.tsx
    ├── Badge.tsx
    ├── Tag.tsx
    └── Divider.tsx

config/
├── site.ts
├── navigation.ts
└── socials.ts

data/
├── experience.ts
├── projects.ts
└── skills.ts

types/
├── project.ts
├── experience.ts
├── navigation.ts
├── social.ts
└── common.ts

utils/
├── cn.ts
├── formatDate.ts
├── animation.ts
└── project.ts
```

No `constants/` directory (values are in globals.css or inline via Tailwind).
No `hooks/`, `lib/`, `styles/` directories (not needed).

---

# Centralized Types

All interfaces live inside `/types`. Never duplicate interfaces.

```ts
// types/project.ts
export interface Project {
  id: string;
  title: string;
  year: number;
  startDate?: string;
  endDate?: string;
  summary: string;
  achievement?: string;
  technologies: string[];
  screenshot: string;
  screenshots: string[];
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
}
```

---

# Centralized Utils

```text
utils/
├── cn.ts                (clsx + tailwind-merge)
├── formatDate.ts        ("Month Year" format)
├── animation.ts         (fadeIn, fadeInUp, staggerContainer with reduced-motion)
└── project.ts           (sortProjectsByYear)
```

---

# Global Configuration

```ts
// config/site.ts
export const SITE_CONFIG = {
  name: "Alexis Corporal",
  title: "Software Developer",
  location: "Philippines",
  url: "https://alexiscorporal.dev",
  description: "Building software that removes repetitive work and improves operational efficiency.",
};
```

All metadata derives from config. No hardcoded values.

---

# Reusable Components

## Layout
* Container — centered, max-w-7xl with responsive padding
* Section — scroll-mt-16 for navbar offset, consistent vertical padding
* SectionHeader — label + heading + description

## Typography
* Heading — h1-h4 via `as` prop, className overrides via tailwind-merge
* Subheading — muted text-lg with max-w-prose
* BodyText — base text with accent color
* Caption — small muted text

## Navigation
* Navbar — sticky, IntersectionObserver for active link, inline mobile menu with AnimatePresence, **floating back-to-top button** (shows after 400px scroll)
* Footer — copyright, social icons (inline SVGs since Lucide v1 removed brand icons)

## Shared
* Button — primary variant (black bg) with disabled state
* LinkButton — primary, secondary (bordered), ghost variants
* Badge — inline-flex chip
* Tag — small label
* Divider — thin horizontal rule

## Cards
* ProjectCard — side-by-side (md:flex, image 40%), hover:scale-[1.02], hover:border-2 black, image lightbox, thumbnail strip, achievement badge with self-start
* ExperienceCard — same layout as ProjectCard
* MetricCard — icon+heading row, flex col, h-full, hover effects

## UI
* ImageLightbox — full-screen overlay, prev/next, click-to-zoom (125%), keyboard nav (Escape, arrows), close on backdrop click

---

# Website Sections

## Hero

Content:

Alexis Corporal
Software Developer
Philippines

Tagline:
"Building software that removes repetitive work and improves operational efficiency."

Buttons:

* View Work (with bouncing ArrowDown CSS animation)
* Download Resume

No Contact button in hero.

---

## Experience

Web Development Intern at Bakawan Data Analytics, Inc. (Feb 2026 — May 2026)

Highlight: 3rd Best Intern System

3 screenshots with lightbox gallery.

---

## Selected Work

Featured Projects (sorted by year, newest first):

1. OCR Drawing Extractor (2026)
2. DLSP Registrar DocsTrack (2026) — 3rd Best Intern System
3. BakerPass (2025) — Best Capstone Project
4. Soroban Solver (2025)
5. GeoDroid (2025)

Side-by-side card layout. Screenshots use object-cover. Click to open lightbox with zoom and navigation.

---

## How I Build

Four pillars:

* Pragmatic Problem Solving
* Security by Default
* Multi-Role Architecture
* Built for Real Use

---

## Technologies

Categories (no percentages):

* Frontend
* Backend
* Testing & QA
* Languages & Tools
* Infrastructure

---

## Contact

3-column grid on desktop (form | contact info | map).

Contact details:
* Phone: +63 945 468 1904
* Location: Brgy. San Ignacio, San Pablo City, Laguna 4000
* Email: corporal461@gmail.com

Additional info:
* Open to full-time, freelance, and contract opportunities
* Philippine Time (PHT / UTC+8)
* Typically responds within 24 hours
* Email is best

Form fields: Name, Email, Subject, Message — all with focus:ring-1, hover:border-black.

Embedded Google Maps iframe.

Back-to-top as fixed floating button (in Navbar component).

---

# Animations

## Allowed
* Fade in (framer-motion, with reduced-motion support)
* Fade in up
* Hover scale (CSS, cards scale to 1.02)
* Hover border (thick black border-2 on cards)
* ArrowDown bounce on hero button (CSS @keyframes bounce-subtle, 1.5s ease-in-out)
* Smooth scroll (scroll-behavior: smooth on html)

## Forbidden
* Parallax
* Particle systems
* Mouse-following effects
* Auto-playing animations (except hero arrow bounce)
* Excessive motion

All animations respect prefers-reduced-motion.

---

# Performance Rules

* Use Next.js Image.
* Use Server Components by default.
* Client Components only when required (sections with framer-motion).
* Lazy load screenshots.
* Minimize bundle size.
* Avoid unnecessary dependencies.

---

# Accessibility Rules

* Semantic HTML.
* Proper heading hierarchy (h1 in Hero, h2 in section headers, h3 in cards).
* Keyboard navigation.
* ARIA labels where necessary.
* Sufficient contrast.
* Skip-to-content link.
* ESC closes mobile menu and lightbox.

---

# Code Quality Rules

* Strict TypeScript
* No any
* No duplicated logic
* No duplicated interfaces
* No magic strings
* No hardcoded configuration
* Components under 200 lines whenever practical
* Prefer composition over prop explosion

---

# Content Tone

Avoid:

* "Passionate developer"
* "Crafting digital experiences"
* "Building innovative solutions"

Prefer:

* Clear descriptions
* Concrete outcomes
* Real achievements
* Measured statements

The portfolio should feel authored by a professional software engineer, not generated from a developer portfolio template.
