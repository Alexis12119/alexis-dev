# ALEXIS CORPORAL

**San Pablo City, Laguna, Philippines 4000**  
📞 +63 945 468 1904 | ✉️ corporal461@gmail.com | 🌐 github.com/Alexis12119

---

## PROFESSIONAL SUMMARY

Full-Stack Developer and Cum Laude graduate with a Bachelor of Science in Information Technology, experienced in developing secure, scalable software for educational institutions, manufacturing, and business operations. Proficient in designing backend services, relational databases, and modern web applications using Go, TypeScript, Python, and PostgreSQL. Passionate about building reliable software that automates workflows and solves real-world problems.

---

## TOOLS & TECHNOLOGIES

### Languages
- TypeScript
- Go
- Python
- Java
- SQL
- Dart
- JavaScript

### Frameworks
- Next.js
- Fastify
- FastAPI
- Spring Boot
- React
- Flutter
- Prisma

### Infrastructure & Database
- Docker Compose
- Nginx
- PostgreSQL
- MySQL
- Supabase
- WebSockets
- Tesseract OCR

### Testing & Tools
- Locust
- Postman
- JMeter
- Neovim
- Git
- VS Code

---

## WORK EXPERIENCE

### Freelance Full-Stack Developer
**May 2023 – Present**

- Architected relational database schemas for inventory tracking, appointment scheduling, and document management systems used in educational, manufacturing, and business environments.
- Automated manual inventory operations by building a QR code generation pipeline and transactional backend services for a school inventory management system.
- Developed a multi-role veterinary management system as a Progressive Web App (PWA) with role-based access control and service worker-based caching to provide offline access to previously loaded images and application resources.

### Bakawan Data Analytics, Inc. — Web Developer Intern
**Awarded 3rd Best System out of 9 Teams**  
**Feb 2026 – May 2026**

- Collaborated within a dedicated engineering team to translate core system blueprints into scalable web applications.
- Developed backend authorization logic including role validation, secure state transitions, and audit logging.
- Verified API performance and stability using automated JMeter and Postman test suites.

---

## KEY PROJECTS

### Digital Information Board Management System (DIBMS)
**Jul 2026 – Present**

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Prisma, Supabase (PostgreSQL + Storage)

- Implemented a role-based access control (RBAC) system supporting four organizational roles (System Admin, Coordinator, Elder, Ministerial Servant) to enforce secure access across the platform.
- Engineered an asset automation and parsing pipeline using `pdfjs-dist` to isolate and rasterize multi-page vector PDFs client-side, offloading processing overhead and delivering immediate interface rendering.
- Designed a normalized schema with 9 relational tables using Prisma-managed foreign keys to ensure transactional consistency across congregation schedules, audit logs, and section assignments.
- Built an event-driven public display interface that auto-detects active congregations based on local timezone schedules, featuring a manual override with automated timeout returns for large TV display deployments.

---

### DLSP Registrar Docs Track
**Feb 2026 – Jun 2026**

**Tech Stack:** Go, Next.js, React, TypeScript, PostgreSQL, Gorilla Mux, Gorilla WebSocket

- Developed a full-stack document tracking system for the College Registrar's Office using a Go API secured with middleware-based rate limiting.
- Architected and implemented a strict 7-stage state machine request workflow (from initial submission through payment tracking to ready for pickup and completion) to govern institutional records securely.
- Built a duplex communication subsystem using Gorilla WebSocket to stream instantaneous status updates and live notifications to connected clients without browser polling.
- Structured a robust JWT authentication layer featuring access/refresh token rotation and an administrative audit trail tracking user actions along with IP and user-agent metadata.

---

### BakerPass
**Aug 2025 – Jan 2026**

**Tech Stack:** Fastify, Next.js, Flutter, MySQL, Nginx, Docker Compose

- Orchestrated a containerized multi-service environment using Docker Compose to isolate and run the frontend, a Fastify API server, and a persistent MySQL database.
- Architected a multi-tenant visitor management lifecycle incorporating a 6-role permission system (Visitor, Employee, Security, HR, Nurse, Super Admin) to govern workflows for protocol-enforced factory environments.
- Configured an Nginx reverse proxy layer handling centralized request routing, automated WebSocket protocol upgrades, and connection rate limiting on authentication endpoints to secure backend nodes against brute-force traffic.
- Built a live synchronization layer using Fastify's WebSocket subsystem to broadcast immediate appointment updates and health declaration statuses simultaneously across a web dashboard and a Flutter mobile companion app.

---

### Engineering Drawing OCR Extractor
**Feb 2026 – Jun 2026**

**Tech Stack:** Python, FastAPI, Tesseract OCR, pypdf, PyMuPDF, Locust

- Engineered a hybrid text extraction engine combining lightweight vector PDF parsing (executing in under 0.5 seconds) with a Tesseract OCR fallback layer to seamlessly ingest dense engineering documentation.
- Optimized layout precision and reduced graphic noise by implementing horizontal band scanning constraints (restricting processing to the top and bottom 20% title blocks) and runtime multi-region coordinate cropping.
- Improved throughput for CPU-bound image rasterization by using `ProcessPoolExecutor` to bypass Python's Global Interpreter Lock (GIL).
- Structured an automated benchmarking harness with Locust to profile backend capabilities under sustained load, mapping hardware performance ceilings during high-resolution 300 DPI processing.

---

## EDUCATION

### Dalubhasaan ng Lungsod ng San Pablo (DLSP)
**2022 – 2026**

**Bachelor of Science in Information Technology (Software Development)**

*Graduated Cum Laude*

---

## TRAINING & CERTIFICATIONS

- **Best in OJT & Best Capstone Project Awards** — Recognized for outstanding performance in Software Development (2026)
- **AWS Certified Cloud Quest: Cloud Practitioner** — AWS Training & Certification (March 2026)
