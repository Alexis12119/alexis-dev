# Alexis Corporal — Portfolio Website Content

## Personal Info

- **Name:** Alexis Corporal
- **Title:** Software Developer
- **Location:** Philippines
- **Website:** https://alexiscorporal.dev
- **Tagline:** Building software that removes repetitive work and improves operational efficiency.

## Contact

- **Phone:** +63 945 468 1904
- **Email:** corporal461@gmail.com
- **Address:** Brgy. San Ignacio, San Pablo City, Laguna 4000
- **GitHub:** https://github.com/Alexis12119
- **LinkedIn:** https://www.linkedin.com/in/alexis-corporal/
- **Timezone:** Philippine Time (PHT / UTC+8)
- **Response Time:** Typically responds within 24 hours
- **Availability:** Open to full-time, freelance, and contract opportunities

---

## Experience

### Freelance Full-Stack Developer

**Self-Employed** — San Pablo City, Philippines
_May 2023 – Present_

Developed full-stack web applications and database systems for educational, manufacturing, and business environments. Built inventory tracking, appointment scheduling, and document management solutions.

**Achievements:**

- Architected relational database schemas for inventory tracking, appointment scheduling, and document management systems
- Automated manual inventory operations with QR code generation pipeline and transactional backend services for a school inventory management system
- Developed a multi-role veterinary management system as a PWA with role-based access control and service worker caching for offline access

---

### Web Developer Intern

**Bakawan Data Analytics, Inc.** — San Pablo City, Philippines
_Feb 2026 – May 2026_

Built the DLSP Registrar DocsTrack system — a comprehensive student document request and tracking system for Dalubhasaan ng Lungsod ng San Pablo. Went through the full development lifecycle from planning to deployment.

**Achievements:**

- Developed backend authorization logic with role validation, secure state transitions, and audit logging
- Verified API performance and stability using automated JMeter and Postman test suites
- Completed AWS Cloud Quest: Cloud Practitioner to understand cloud fundamentals
- Collaborated within a dedicated engineering team to translate core system blueprints into scalable web applications

**Tools used:** Postman, JMeter

**Highlight:** 3rd Best Intern System

---

## Projects

### OCR Drawing Extractor (2026)

_Feb 2026 – Jun 2026_

Python application for extracting text from engineering drawings. Uses a hybrid approach: pypdf text-layer extraction for vector PDFs with Tesseract OCR fallback for scanned images. Includes both a FastAPI microservice and a Tkinter GUI.

**Technologies:** Python, FastAPI, Tesseract OCR, pypdf, Tkinter

**Details:**

- Hybrid pipeline: text-layer extraction first, OCR fallback for scanned images
- Top + bottom scanning skips graphics-heavy middle for cleaner OCR results
- Custom region selection with zoomable preview and interactive drawing
- Multi-page PDF support with JSON export

---

### DLSP Registrar DocsTrack (2026)

_Feb 2026 – May 2026_

Online Student Document Request and Tracking System for Dalubhasaan ng Lungsod ng San Pablo. Manages the complete document request lifecycle with role-based access, payment tracking, and real-time updates.

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, Go, PostgreSQL, WebSocket, Postman, JMeter

**Achievement:** 3rd Best Intern System

**Details:**

- Role-based access control with Student, Registrar Staff, and Administrator roles
- Document request workflow with payment tracking and real-time WebSocket updates
- Audit logging with IP and user-agent tracking
- Dashboard and analytics with PDF and Excel export
- API endpoint testing with Postman and performance testing with JMeter

---

### BakerPass (2025)

_Aug 2025 – Jan 2026_

Multi-role appointment and visitor management system for Franklin Baker Company of the Philippines. Handles the complete visitor lifecycle from booking to check-out, with special support for high-care protocol areas requiring nurse approval.

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, Fastify, Flutter, MySQL, Docker, WebSocket

**Achievement:** Best Capstone Project

**Details:**

- Multi-role system with six user roles including Nurse and SuperAdmin
- High-care module with medical protocol, health declarations, and PDF generation
- Real-time WebSocket updates for live status changes without page refresh
- Flutter mobile app for visitor-facing appointment booking

---

### Soroban Solver (2025)

_Jun 2025 – Oct 2025_

Real-time math problem solver for the Soroban Android app. Uses OCR to extract equations from screen captures, solves them automatically, and maintains a history of solved problems.

**Technologies:** Python, OCR, OpenCV

**Details:**

- Real-time solving with continuous monitoring of connected Android device
- Adjustable OCR threshold and division mode toggle
- History management with CSV save and load
- Keyboard shortcuts for efficient workflow control

---

### GeoDroid (2025)

_Oct 2025_

A complete classic Asteroids game built with Raylib in C. Features smooth vector-based gameplay, collision detection, a comprehensive menu system, and persistent leaderboards.

**Technologies:** C, Raylib

**Details:**

- Three difficulty modes with bullet-limited gameplay and asteroid speed scaling
- Vector-based movement with realistic momentum and screen wrapping
- Persistent top 10 leaderboards with name entry and date tracking
- Complete audio system with retro sound effects for shooting and explosions

---

## How I Build — Engineering Principles

### Pragmatic Problem Solving

I pick the right tool for each problem — whether that means a hybrid OCR pipeline that tries text extraction before falling back to Tesseract, or a C game engine for pixel-perfect asteroids.

### Security by Default

Rate limiting, brute-force protection, audit logging, OTP-based verification, and Cloudflare Turnstile CAPTCHA built into every system from the start.

### Multi-Role Architecture

Systems designed around real access hierarchies — Students and Registrars, Visitors and Nurses, Employees and SuperAdmins — each with appropriate permissions and workflows.

### Built for Real Use

Real-time WebSocket updates, analytics dashboards with PDF and Excel export, email notifications, and intuitive UIs that people actually want to use every day.

---

## Education & Certifications

### Bachelor of Science in Information Technology (Software Development)

**Dalubhasaan ng Lungsod ng San Pablo (DLSP)** — 2022 – 2026

_Graduated Cum Laude_

### Certifications

- **Best in OJT & Best Capstone Project Awards** — Recognized for outstanding performance in Software Development (2026)
- **AWS Certified Cloud Quest: Cloud Practitioner** — AWS Training & Certification (2026)

---

## Skills & Technologies

### Frontend

Next.js, React, TypeScript, Tailwind CSS, Framer Motion

### Backend

Fastify, FastAPI, Go, Node.js, Python, Spring Boot, REST APIs, WebSocket

### Testing & QA

Locust, Postman, JMeter

### Android & iOS

Flutter

### Languages & Tools

C, Dart, Go, Java, JavaScript, Python, SQL, TypeScript, OpenCV, Tesseract OCR, Raylib

### Infrastructure

Docker, Nginx, MySQL, PostgreSQL, Supabase, Linux

### Version Control & Editors

Git, Neovim, VS Code
