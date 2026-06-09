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

```ts
export const COLORS = {
  background: "#FAF9F6",
  foreground: "#111111",
  muted: "#6B7280",
  border: "#E5E7EB",
  accent: "#4B5563",
};
```

## Design Rules

* Use whitespace aggressively.
* Prioritize readability.
* Let screenshots be the visual focus.
* Use thin borders.
* Avoid shadows unless subtle.
* Avoid gradients unless extremely restrained.
* Use a maximum content width.
* Maintain consistent spacing scale.

---

# Typography

Headings:

* Geist
* Inter Tight
* Manrope

Body:

* Inter

Rules:

* Large readable headings
* Comfortable reading widths
* Consistent hierarchy

---

# Architecture

Follow feature-first architecture.

```text
src/
├── app/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── cards/
│   ├── typography/
│   ├── ui/
│   └── shared/
│
├── config/
│   ├── site.ts
│   ├── navigation.ts
│   └── socials.ts
│
├── constants/
│   ├── colors.ts
│   ├── spacing.ts
│   └── animations.ts
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
│
├── hooks/
│
├── lib/
│
├── types/
│
├── utils/
│
└── styles/
```

---

# Centralized Types

All interfaces must live inside `/types`.

Never duplicate interfaces.

Example:

```text
types/
├── project.ts
├── experience.ts
├── navigation.ts
├── social.ts
└── common.ts
```

Example:

```ts
export interface Project {
  id: string;
  title: string;
  year: number;
  summary: string;
  achievement?: string;
  technologies: string[];
  screenshot: string;
  githubUrl?: string;
  demoUrl?: string;
}
```

All pages and components must consume these centralized types.

---

# Centralized Utils

All helper functions must be reusable.

```text
utils/
├── cn.ts
├── formatDate.ts
├── slugify.ts
├── animation.ts
└── project.ts
```

Rules:

* No utility duplication.
* No anonymous helper functions inside components unless local-only.
* Extract reusable logic.

---

# Global Configuration

Create:

```text
config/
├── site.ts
├── navigation.ts
├── socials.ts
```

Example:

```ts
export const SITE_CONFIG = {
  name: "Alexis Corporal",
  title: "Software Developer",
  location: "Philippines",
};
```

All metadata should derive from config.

No hardcoded values throughout the application.

---

# Reusable Components

Build reusable components first.

## Layout

* Container
* Section
* SectionHeader
* PageWrapper

## Typography

* Heading
* Subheading
* BodyText
* Caption

## Navigation

* Navbar
* MobileMenu
* Footer

## Shared

* Button
* Badge
* Divider
* Tag
* LinkButton

## Cards

* ProjectCard
* ExperienceCard
* MetricCard

All cards should share visual language.

---

# Website Sections

## Hero

Content:

Alexis Corporal

Software Developer

Building software that solves operational,
technical, and workflow challenges.

Buttons:

* View Work
* Download Resume
* Contact

---

## Experience

Show experience before projects.

Highlight:

Software Development Intern

DocsTrack

3rd Best Intern System

---

## Selected Work

Featured Projects:

1. OCR Drawing Extractor (2026)
2. PLSP Registrar DocsTrack (2026)
3. BakerPass (2025)
4. Soroban Solver (2025)
5. GeoDroid (2025)

Display large screenshots.

Achievements should be visually highlighted.

Example:

Best Capstone Project

3rd Best Intern System

---

## How I Build

Security First

Reliability by Design

Scalable Architecture

User-Centered Systems

---

## Technologies

Grouped by category.

Frontend

Backend

Database

Infrastructure

Avoid skill percentages.

---

## Contact

Minimal.

Email

GitHub

LinkedIn

Resume Download

---

# Performance Rules

* Use Next.js Image.
* Use Server Components by default.
* Client Components only when required.
* Lazy load screenshots.
* Minimize bundle size.
* Avoid unnecessary dependencies.

---

# Accessibility Rules

* Semantic HTML.
* Proper heading hierarchy.
* Keyboard navigation.
* ARIA labels where necessary.
* Sufficient contrast.

---

# Animation Rules

Animations must be subtle.

Allowed:

* Fade in
* Slide in
* Hover elevation

Forbidden:

* Parallax
* Particle systems
* Mouse-following effects
* Auto-playing animations
* Excessive motion

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

"Passionate developer"

"Crafting digital experiences"

"Building innovative solutions"

Prefer:

Clear descriptions

Concrete outcomes

Real achievements

Measured statements

The portfolio should feel authored by a professional software engineer, not generated from a developer portfolio template.
