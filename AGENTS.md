# AGENTS.md — Portfolio Website Specification

## 1. Objective

Build and maintain a professional portfolio website for Alexis Corporal using Next.js 16, React 19, TypeScript, and Tailwind CSS.

The website serves as a professional home for showcasing software engineering work, demonstrating technical judgment, and attracting freelance, contract, and full-time opportunities.

It must communicate:

- Software engineering craftsmanship
- Practical problem-solving ability
- Real-world systems development
- Reliability, security, and maintainability
- Professional experience and demonstrated achievements
- Clear ways to explore projects and initiate contact

### Primary Design Goal

Create a modern, organized, straightforward, and practical website that feels deliberately designed rather than assembled from a generic developer portfolio template.

The website should be easy to scan, easy to navigate, and useful to both technical and nontechnical visitors.

**Core principle: Organization should come from information architecture, alignment, typography, and consistent patterns—not from excessive cards, decorative elements, or animations.**

---

## 2. Design Direction

### 2.1 Visual Identity

Use a structured personal index as the primary design concept.

The homepage should function as a concise overview of Alexis's professional work. Visitors should quickly understand:

1. Who Alexis is and what he builds
2. Which projects best demonstrate his capabilities
3. What professional experience and achievements he has
4. How he approaches engineering problems
5. How to contact him about an opportunity

The site may draw inspiration from technical publications, well-designed documentation, editorial layouts, and modern product interfaces.

These are design references, not templates to reproduce.

### 2.2 Design Characteristics

The interface should be:

- Modern and functional
- Clear and information-dense where appropriate
- Structured without feeling rigid
- Visually distinctive without unnecessary decoration
- Professional without being corporate or impersonal
- Practical on both desktop and mobile
- Consistent across the homepage and project detail pages

### 2.3 Avoid Generic Portfolio Conventions

Do not default to:

- A centered profile photo surrounded by social links
- A generic oversized hero followed by repetitive card grids
- Blue or purple gradient backgrounds
- Floating gradient blobs and particle effects
- Fake terminal windows or decorative code snippets
- Glassmorphism without a functional reason
- Neon cyberpunk aesthetics
- Skill percentages or progress bars
- Spinning technology logos
- Typewriter effects
- Excessive rounded containers
- Decorative statistics without meaningful context
- Generic SaaS landing page patterns
- Repeated badges that add no useful information
- Large animations intended only to make the page feel interactive
- Generic stock imagery in place of real project screenshots

These patterns are not prohibited solely because they are common. They should only be used when they serve a clear purpose and fit the established design system.

### 2.4 Originality

Originality should come from the composition and presentation of the actual content.

Use deliberate choices such as:

- A consistent numbering system for major sections or projects
- Strong alignment and a recognizable grid
- Distinctive but readable typography
- Thoughtful use of metadata, labels, and separators
- Carefully composed project screenshots
- Useful technical diagrams where they explain real systems
- A restrained visual accent
- Consistent project presentation patterns

Do not add visual complexity merely to make the site look different.

---

## 3. Technology Stack

- Next.js 16 App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS
- Framer Motion, used sparingly
- Lucide Icons
- Next.js Image for optimized image rendering

Use the dependencies already present in the project whenever possible.

Do not add dependencies without a clear technical or user-facing benefit.

---

## 4. Design System

### 4.1 Color Palette

Start with the existing warm-neutral palette:

```css
background: #FAF9F6;
foreground: #111111;
muted: #6B7280;
border: #E5E7EB;
accent: #4B5563;
```

These colors establish the default visual foundation.

A restrained additional accent color may be introduced if it improves recognition or hierarchy. It must be used consistently and sparingly.

Rules:

- Maintain sufficient text and interface contrast.
- Use foreground and muted colors according to their semantic roles.
- Use borders to establish relationships and separate content.
- Reserve strong contrast for important actions and primary information.
- Avoid gradients as a default background treatment.
- Avoid shadows unless they communicate genuine layering.
- Do not introduce new colors for individual components without a reason.

Centralize reusable color decisions in the existing design system or Tailwind theme configuration.

### 4.2 Layout and Spacing

Use a consistent layout system rather than styling every section independently.

- Main content container: `mx-auto max-w-7xl px-8 md:px-12 lg:px-16`
- Use consistent horizontal alignment across sections.
- Establish a predictable spacing scale.
- Give major sections enough vertical separation to remain distinct.
- Use narrower reading widths for longer descriptions.
- Allow denser layouts for project indexes, metadata, and technical information.
- Use responsive grids only when they improve comprehension.
- Avoid unnecessary empty space that pushes useful content below the fold.
- Avoid compressing content merely to fit everything into one viewport.

Whitespace must support hierarchy and readability, not function as decoration.

### 4.3 Borders and Containers

Prefer open layouts with aligned content and thin dividers.

Not every section, project, or piece of information needs its own card.

Use bordered containers when they help distinguish interactive elements, related information, or important content groups.

Avoid making every component look like an independent floating panel.

Hover effects must not cause disruptive layout shifts. Prefer color, border, or background changes that preserve the component's dimensions.

### 4.4 Responsive Design

Design for mobile, tablet, and desktop.

- Preserve a clear reading order on small screens.
- Prevent horizontal overflow.
- Make navigation usable on touch devices.
- Stack complex layouts when necessary.
- Keep screenshots legible at their displayed sizes.
- Ensure actions remain visible and easy to operate.
- Avoid hiding essential information on mobile.
- Use responsive typography and spacing rather than simply shrinking desktop layouts.

---

## 5. Typography

### Font Families

- Headings: Geist
- Body text: Inter

Use the font loading mechanism already supported by the application.

### Typography Principles

- Establish a clear hierarchy between headings, body text, metadata, and labels.
- Use large headings when they improve hierarchy, not as a default visual trick.
- Maintain comfortable reading widths.
- Keep body text readable on small screens.
- Use muted text for secondary metadata without sacrificing contrast.
- Use monospace typography sparingly for technical identifiers, dates, project numbers, and code-related details.
- Avoid excessive capitalization, letter spacing, and inconsistent font weights.

### Shared Typography Components

Maintain reusable components:

- `Heading` — semantic heading levels via an `as` prop
- `Subheading` — supporting section descriptions
- `BodyText` — standard body copy
- `Caption` — secondary metadata and concise labels

Use `tailwind-merge` where appropriate for safe class overrides.

---

## 6. Information Architecture

### 6.1 Primary Homepage Structure

Use this recommended order:

1. Identity and positioning
2. Selected work
3. Professional experience and recognition
4. Engineering approach
5. Technologies
6. Contact

The order may be adjusted when usability or content quality justifies a change.

### 6.2 Identity and Positioning

Present the following information clearly:

- Alexis Corporal
- Software Developer
- Philippines
- Primary value proposition
- Availability for professional opportunities

Preferred positioning:

"Building software that removes repetitive work and improves operational efficiency."

Alternative supporting copy may clarify that Alexis builds web applications, workflow automation, and practical systems.

Do not introduce unsupported business claims, quantified results, or exaggerated promises.

Primary actions:

- View selected work
- Download résumé

Do not make a contact button mandatory in the hero. Contact information should remain accessible through navigation and the contact section.

### 6.3 Selected Work

Projects should be the primary evidence of engineering capability.

The homepage should feature a curated selection rather than treating every project as equally important.

Each project entry should make it easy to identify:

- Project name
- Year or duration
- Problem addressed
- Main contribution or distinguishing capability
- Relevant technologies
- Achievement, if applicable
- Available screenshots, repository, or live demonstration

Prefer a concise description of what the software does over a long list of implementation details.

Use real screenshots whenever available.

Do not invent screenshots, metrics, customers, testimonials, or production outcomes.

### 6.4 Project Archive and Detail Pages

The homepage may link to a full project archive and individual project case studies.

Recommended routes:

- `/work`
- `/work/ocr-drawing-extractor`
- `/work/dlsp-registrar-docstrack`
- `/work/bakerpass`
- `/work/soroban-solver`
- `/work/geodroid`

Only implement routes that are useful for the existing project and its content.

Individual case studies should prioritize:

1. Project overview
2. Problem and context
3. Alexis's role and contribution
4. Important engineering decisions
5. Architecture or workflow diagrams, where useful
6. Screenshots of the actual system
7. Technical stack
8. Results, achievements, and known limitations
9. Repository or live demonstration, when available

Clearly distinguish individual contributions from team accomplishments.

If a project cannot be publicly demonstrated, explain the limitation honestly and show only material that can be shared.

### 6.5 Professional Experience

Present experience as a concise professional history.

Include the organization, role, dates, responsibilities, relevant technical contributions, and verified achievements.

Internship details:

- Web Developer Intern
- Bakawan Data Analytics, Inc.
- February 2026 – May 2026
- DLSP Registrar DocsTrack
- 3rd Best Intern System

Do not duplicate the entire project case study inside the experience section.

Use the experience section to explain the professional context and link to the relevant project when appropriate.

### 6.6 Engineering Approach

Retain the four established engineering principles:

- Pragmatic Problem Solving
- Security by Default
- Multi-Role Architecture
- Built for Real Use

Explain each principle with concrete examples from actual work.

Avoid presenting generic statements about quality or passion without supporting evidence.

### 6.7 Technologies

Display technologies as readable, categorized information.

Categories:

- Frontend
- Backend
- Testing & QA
- Languages & Tools
- Infrastructure

Additional categories may be introduced when they improve clarity.

Do not use skill percentages, arbitrary proficiency ratings, or decorative technology logo walls.

Prioritize technologies relevant to the featured projects.

### 6.8 Contact

Make contact straightforward and accessible.

Include:

- Email: corporal461@gmail.com
- Phone: +63 945 468 1904
- Location: San Pablo City, Laguna, Philippines
- GitHub: https://github.com/Alexis12119
- LinkedIn: https://www.linkedin.com/in/alexis-corporal/
- Availability: Open to full-time, freelance, and contract opportunities
- Timezone: Philippine Time (PHT / UTC+8)
- Response time: Typically within 24 hours
- Preferred contact method: Email

Use a clear call to action related to project inquiries and professional opportunities.

A contact form may include Name, Email, Subject, and Message. It must have real submission behavior, validation, appropriate feedback, and accessible labels.

Do not display a form that appears functional but does not send messages.

An embedded map is optional. Include one only if it provides genuine value. Do not let a map compete visually with the contact information.

Avoid exposing the full residential street address unless there is a clear reason to publish it. City-level location is sufficient for the public portfolio.

---

## 7. Project Presentation and Visual Hierarchy

### 7.1 No Mandatory Card Layout

Do not force all projects into the same side-by-side card layout.

Choose a presentation pattern based on the information and available visual assets.

Appropriate patterns include:

- Structured project index
- Numbered project list
- Editorial project rows
- Image-and-description layouts
- Case-study feature layouts
- Compact archive tables, when accessible and responsive

Consistency should come from typography, spacing, alignment, and metadata—not from forcing identical card shapes everywhere.

### 7.2 Project Imagery

- Use Next.js Image.
- Preserve image aspect ratios where possible.
- Use `object-cover` only when cropping does not remove important information.
- Use `object-contain` for dashboards, diagrams, and application interfaces when the full image matters.
- Provide meaningful alt text.
- Lazy-load below-the-fold images.
- Use suitable image sizes and responsive sizing.
- Avoid generic stock imagery as a substitute for actual work.

Do not create large visual mockups that misrepresent the actual application.

### 7.3 Interactions

Interactive elements should communicate their behavior clearly.

Use hover and focus states for links, buttons, navigation items, and interactive project entries.

Avoid mandatory scale effects on every card or element.

Prefer stable transitions that do not change surrounding layout or cause content to shift.

Provide keyboard-accessible alternatives to pointer interactions.

---

## 8. Architecture

Do not introduce a `src/` directory. Keep the application structure at the project root.

Recommended structure:

```text
app/
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── globals.css
├── icon.png
├── opengraph-image.png
├── work/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

components/
├── layout/
│   ├── Container.tsx
│   ├── Section.tsx
│   └── SectionHeader.tsx
├── navigation/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── SelectedWork.tsx
│   ├── Experience.tsx
│   ├── HowIBuild.tsx
│   ├── Technologies.tsx
│   └── Contact.tsx
├── projects/
│   ├── ProjectIndex.tsx
│   ├── ProjectEntry.tsx
│   └── ProjectCaseStudy.tsx
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

This structure is a guideline, not a requirement to create empty files or unnecessary abstractions.

Do not create components solely to match the directory tree.

Do not add `constants/`, `hooks/`, `lib/`, or `styles/` directories unless a real project requirement justifies them.

Keep the architecture aligned with actual application needs.

---

## 9. Centralized Types

All shared interfaces and types must live inside `/types`.

Never duplicate interfaces across components or data files.

Recommended project type:

```ts
// types/project.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: number;
  startDate?: string;
  endDate?: string;
  summary: string;
  problem?: string;
  role?: string;
  achievement?: string;
  technologies: string[];
  screenshot?: string;
  screenshots: string[];
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
}
```

Use optional properties only when the data may genuinely be unavailable.

Update existing types carefully rather than breaking established data structures unnecessarily.

Use centralized types for experience, navigation, social links, and shared component data when those types are needed.

---

## 10. Centralized Utilities

Recommended utilities:

```text
utils/
├── cn.ts
├── formatDate.ts
├── animation.ts
└── project.ts
```

Responsibilities:

- `cn.ts`: Combine class names using `clsx` and `tailwind-merge`.
- `formatDate.ts`: Format dates consistently, such as "February 2026".
- `animation.ts`: Provide reusable, reduced-motion-aware animation variants.
- `project.ts`: Sort projects and provide shared project-data helpers.

Avoid duplicating sorting, formatting, and data-transformation logic across components.

Do not add abstractions for one-off operations without a clear benefit.

---

## 11. Global Configuration and Metadata

Centralize website identity and metadata.

```ts
// config/site.ts

export const SITE_CONFIG = {
  name: "Alexis Corporal",
  title: "Software Developer",
  location: "Philippines",
  url: "https://alexiscorporal.dev",
  description:
    "Building software that removes repetitive work and improves operational efficiency.",
};
```

Derive page metadata from centralized configuration and project data where appropriate.

Do not hardcode duplicated website names, URLs, or descriptions across layouts and metadata files.

The canonical production URL is:

`https://alexiscorporal.dev`

If the deployed preview uses a different hostname, keep canonical metadata aligned with the intended production domain.

---

## 12. Navigation and Shared Components

### Navigation

The navigation should provide direct access to the most useful areas.

Recommended destinations:

- Work
- Experience
- Engineering approach
- About or technologies, if needed
- Contact

Requirements:

- Responsive navigation
- Clear active or current-page indication where useful
- Keyboard accessibility
- Visible focus states
- Escape key support for open mobile menus
- Correct anchor offsets for sticky navigation
- No unnecessary navigation items

A floating back-to-top button is optional. Add it only if the page length makes it useful.

Do not implement complex scroll tracking if ordinary anchor navigation provides a better experience.

### Shared Components

Use reusable components for genuinely repeated patterns:

- Container
- Section
- SectionHeader
- Heading
- Subheading
- BodyText
- Caption
- Button
- LinkButton
- Badge
- Tag
- Divider

Avoid excessive component abstraction and prop-heavy APIs.

Components should generally remain under 200 lines when practical, but readability and cohesive responsibility are more important than arbitrary line counts.

### Image Lightbox

An image lightbox may be used for project galleries when it improves inspection of application screenshots.

If implemented, it must support:

- Keyboard navigation
- Escape to close
- Previous and next image controls
- Closing through a clearly identified backdrop interaction
- Appropriate focus management
- Accessible labels
- Responsive image sizing

Click-to-zoom is optional and should not interfere with normal navigation.

Do not implement a lightbox when a dedicated project detail page would communicate the work more effectively.

---

## 13. Animations and Motion

Motion is optional and subordinate to usability.

### Allowed

- Subtle entrance transitions
- Small hover and focus transitions
- Smooth anchor scrolling
- Minimal section transitions
- Lightbox transitions
- Small directional indicators where useful

### Avoid

- Parallax
- Particle systems
- Mouse-following effects
- Continuous decorative motion
- Typewriter effects
- Spinning logos
- Large scroll-triggered animations
- Excessive staggered animations
- Animated counters without meaningful data
- Motion that delays access to content

Respect `prefers-reduced-motion`.

Do not animate every section simply because Framer Motion is available.

Prefer CSS transitions for simple interaction states.

---

## 14. Performance

- Use Server Components by default.
- Introduce Client Components only when interactivity requires them.
- Use Next.js Image for local and supported remote images.
- Provide appropriate image dimensions and responsive sizing.
- Lazy-load noncritical imagery.
- Avoid unnecessarily large client bundles.
- Minimize third-party scripts.
- Avoid unnecessary dependencies.
- Keep font loading efficient.
- Use appropriate metadata and image assets for social sharing.
- Avoid layout shifts during image loading and interaction.
- Validate production builds after significant changes.

Do not add client-side state or effects when the same behavior can be implemented more simply.

---

## 15. Accessibility

- Use semantic HTML.
- Maintain a logical heading hierarchy.
- Include a skip-to-content link.
- Ensure keyboard navigation works.
- Provide visible focus states.
- Use accessible labels for controls and form fields.
- Provide useful alt text for meaningful images.
- Maintain sufficient contrast.
- Do not rely on color alone to communicate status.
- Respect reduced-motion preferences.
- Support Escape to close appropriate overlays and mobile navigation.
- Avoid clickable noninteractive elements without keyboard support.
- Ensure touch targets are appropriately sized.
- Announce relevant form submission feedback accessibly.

Accessibility is part of the implementation, not a final decorative pass.

---

## 16. Content and Accuracy

The portfolio must use clear, specific, and measured language.

Avoid phrases such as:

- "Passionate developer"
- "Crafting digital experiences"
- "Building innovative solutions"
- "Revolutionizing the industry"
- Unsupported claims of expertise or impact

Prefer descriptions of:

- The actual problem
- The implemented system
- The developer's specific contribution
- Relevant engineering decisions
- Verified achievements
- Known constraints and limitations

Do not fabricate testimonials, client relationships, performance improvements, user counts, revenue figures, or business outcomes.

Clearly label personal projects, academic projects, team projects, and professional client work.

Do not imply that a repository contains a complete production implementation if it does not.

Do not publish confidential screenshots, credentials, personal data, or proprietary implementation details.

---

## 17. Professional Content Reference

### Identity

- Name: Alexis Corporal
- Title: Software Developer
- Location: Philippines
- Website: https://alexiscorporal.dev
- Tagline: Building software that removes repetitive work and improves operational efficiency.

### Professional Experience

**Freelance Full-Stack Developer**  
Self-employed · May 2023 – Present

Experience includes inventory tracking, appointment scheduling, document management, QR code automation, and role-based web applications.

**Web Developer Intern**  
Bakawan Data Analytics, Inc. · February 2026 – May 2026

Contributed to the DLSP Registrar DocsTrack system, including backend authorization, workflow handling, audit logging, and API and performance testing.

Recognition: 3rd Best Intern System.

### Featured Projects

Recommended project ordering:

1. OCR Drawing Extractor — 2026
2. DLSP Registrar DocsTrack — 2026
3. BakerPass — 2025–2026
4. Soroban Solver — 2025
5. GeoDroid — 2025

The Digital Information Board Management System may also be featured when its current status and screenshots support inclusion.

Sort projects using explicit dates or a consistent ranking strategy. Do not rely on year alone when multiple projects share the same year.

Recognitions:

- BakerPass: Best Capstone Project
- DLSP Registrar DocsTrack: 3rd Best Intern System
- Education: Bachelor of Science in Information Technology (Software Development), graduated Cum Laude

### Engineering Principles

- Pragmatic Problem Solving
- Security by Default
- Multi-Role Architecture
- Built for Real Use

### Availability

Open to full-time, freelance, and contract opportunities.

Keep personal contact information centralized and publish only the details required for professional inquiries.

---

## 18. Implementation Workflow

When modifying the website:

1. Inspect the existing implementation before making changes.
2. Identify the current components, styles, assets, routes, and data structures.
3. Preserve working functionality unless a change is justified.
4. Define the intended information hierarchy before styling.
5. Reuse existing components when appropriate.
6. Implement responsive behavior alongside desktop layouts.
7. Validate keyboard interactions and accessibility.
8. Run linting, type checks, and production builds using the scripts available in `package.json`.
9. Fix regressions introduced by the change.
10. Summarize the important changes and any remaining limitations.

Do not replace the entire website merely to implement a visual refresh.

Prefer incremental, verifiable improvements.

When a design decision is uncertain, choose the simplest solution that improves clarity, usefulness, or maintainability.

---

## 19. Definition of Done

A change is complete when:

- The intended design and information hierarchy are implemented.
- The layout works on mobile and desktop.
- Existing content and functionality remain accurate.
- Links and actions behave as expected.
- No avoidable horizontal overflow or layout shifts are introduced.
- Interactive elements are keyboard accessible.
- Reduced-motion preferences are respected.
- TypeScript checks and relevant production checks pass.
- No unnecessary dependencies or abstractions are introduced.
- The result remains consistent with the established visual identity.

**Final standard:** The website should feel like a carefully organized interface for understanding Alexis's work—not a generic developer template, an online résumé pasted into a webpage, or a decorative showcase that obscures the actual software.
