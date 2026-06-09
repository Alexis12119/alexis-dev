The projects I'll show and show a screenshot of is OCR Drawing Extractor(2026),PLSP Registrar Docstrack(2026), BakerPass(2025), Soroban Solver(2025), GeoDroid(2025)


Here are the info the projects:

PLSP Registrar Docstrack(2026):
Online Student Document Request and Tracking System — A comprehensive web-based system for managing student document requests at Pamantasan ng Lungsod ng San Pablo.

Features

    Role-based access control (Student, Registrar Staff, Administrator)
    Document request workflow with payment tracking
    Real-time updates via WebSocket
    Email notifications (Gmail SMTP)
    Rate limiting & brute-force protection
    Audit logging with IP/user-agent tracking
    Dashboard & analytics with PDF/Excel export
    Cloudflare Turnstile CAPTCHA
    Password reset flow (OTP-based)
    Staff & student registration with verification
    Appeal submission & management
    File uploads (payment receipts, profile pictures)
    Bulk request import

OCR Drawing Extractor(2026):
A Python application for extracting text from engineering drawings. Uses a hybrid approach: pypdf text-layer extraction for vector PDFs, with Tesseract OCR fallback for scanned images. Includes both a FastAPI microservice and a Tkinter GUI.
Approach

    Hybrid pipeline: For PDFs, tries text-layer extraction first (pypdf) — clean, no OCR noise. Falls back to OCR when no text layer exists.
    Top + bottom scanning: By default scans only the top 20% and bottom 20% of each page, skipping the noisy graphics-heavy middle. This gives much cleaner OCR results on engineering drawings.
    PSM 3: Uses Tesseract's automatic page segmentation (PSM 3) — handles mixed font sizes and title block layouts better than uniform block mode.
    No preprocessing: Passes raw images to Tesseract — adaptive thresholding and resizing were destroying fine text detail.
    No hardcoded labels: The API returns all detected text with coordinates — no field labels, no pattern matching.

Features

    Hybrid PDF text-layer + OCR extraction
    Top/bottom scanning for cleaner results on dense drawings
    Custom region selection — draw boxes on the preview to OCR specific areas
    Multi-page PDF support
    FastAPI microservice with two endpoints
    GUI with zoomable preview and interactive region drawing
    JSON export

Installation
Prerequisites

    Python 3.10+
    Tesseract OCR

BakerPass(2025):

A multi-tenant appointment and visitor management system designed for **Franklin Baker Corporation**. The system handles the complete visitor lifecycle from booking to check-out, with special support for high-care/protocol areas requiring nurse approval.

## Features

### User Roles

| Role | Description |
|------|-------------|
| **Visitor** | External persons booking appointments via web or mobile app |
| **Employee** | Internal staff receiving visitors and managing schedules |
| **Security** | Gate/security staff managing check-ins and approval statuses |
| **Human Resources** | View visit statistics, employee comment history, and analytics |
| **Nurse** | Medical staff handling high-care requests, health declarations, and prohibited items |
| **SuperAdmin** | System administration: user management, logo management, logs, and settings |

### Core Functionality

- **Appointment Management**: Time slot scheduling, visitor booking, walk-in visitor support, approval workflow
- **High-Care Module**: Medical/safety protocol with areas/equipment tracking, health declarations, prohibited items logging, nurse permissions, and PDF generation
- **Security Features**: JWT authentication, rate limiting, OTP-based password reset, audit logging
- **Real-time Updates**: WebSocket-based live status changes without page refresh
- **Analytics & Reporting**: HR visit statistics, employee comment history, nurse audit reports, CSV export
- **User Management**: Role-based access control, profile images, department management, first-login password reset

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    NGINX Reverse Proxy (Port 8080)          │
│          Handles routing, WebSocket proxying,               │
│          rate limiting for auth endpoints                    │
└──────────────┬──────────────┬───────────────────────────────┘
               │              │
       ┌───────▼───────┐  ┌──▼──────────────────┐
       │   Next.js     │  │   Fastify Backend   │
       │   Frontend    │  │      (Port 5001)    │
       │   (Port 3000) │  │                      │
       └───────────────┘  └──────────┬───────────┘
                                      │
                            ┌────────▼────────┐
                            │    MySQL 8.0    │
                            │   (Port 3307)   │
                            └─────────────────┘
```

### Components

- **Frontend**: Next.js 16 (React 19) with TypeScript and Tailwind CSS v4
- **Backend**: Fastify 5 (Node.js) with ES modules
- **Database**: MySQL 8.0
- **Proxy**: Nginx reverse proxy
- **Mobile**: Flutter app (visitor-facing)
- **Real-time**: WebSocket-based live updates via Fastify WebSocket plugin

## Technology Stack

### Frontend (`/frontend/`)
- **Next.js 16** (canary) - React SSR framework
- **React 19** - UI library
- **TypeScript 5.4** - Type safety
- **Tailwind CSS 4** - Styling
- **ShadCN/UI** - Component library
- **React Hook Form + Zod** - Form handling and validation
- **Recharts** - Data visualization/charts
- **Axios** - HTTP client
- **html2canvas / jsPDF** - PDF generation for high care forms
- **next-themes** - Dark mode support

### Backend (`/backend/`)
- **Fastify 5.2** - High-performance web framework
- **MySQL2** - Database driver with connection pooling
- **JWT** (`@fastify/jwt`) - Authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email notifications
- **WebSocket** (`@fastify/websocket`) - Real-time updates
- **dayjs** - Date/time handling with timezone support
- **Pino** - Structured logging with file rotation
- **Jest + Supertest** - Backend testing
- **Faker.js** - Data seeding for development

### Infrastructure
- **Docker Compose** - Container orchestration
- **Nginx** - Reverse proxy, WebSocket upgrade, rate limiting
- **MySQL 8** - Persistent database


Soroban Solver(2025): Personal Project
A real-time math problem solver for the Soroban app on Android devices. Uses OCR to extract equations from screen captures, solves them automatically, and maintains a history of solved problems.
Features

    Real-time Solving: Continuously monitors and solves math problems from connected Android device
    OCR Integration: Adjustable threshold for accurate text recognition
    Division Mode: Toggle support for division operations
    History Management: Saves and loads solved problems to CSV
    Keyboard Shortcuts:
        Space: Toggle solving on/off
        Ctrl+D: Toggle division mode
        Ctrl+L: Reset application
    Live UI: Displays captured images, recognized text, and solutions
    Error Handling: Robust processing with logging and retry mechanisms

 GeoDroid(2025): Personal Project
A complete classic Asteroids game built with Raylib in C, featuring smooth vector-based gameplay, collision detection, comprehensive menu system, and persistent leaderboards.
🎮 Features

    Classic Gameplay: Rotate, thrust, and shoot to destroy asteroids
    Progressive Difficulty: Asteroids split into smaller, faster pieces
    Strategic Difficulty System: Bullet-limited gameplay with asteroid speed scaling
        Easy Mode: 15 bullets, slower asteroids (30-80 speed)
        Normal Mode: 10 bullets, standard asteroids (50-150 speed)
        Hard Mode: 5 bullets, blazing-fast asteroids (100-200 speed)
    Resource Management: Bullets decrement on fire, increment on hits (up to difficulty limit)
    Game Over Conditions: No lives remaining OR zero bullets remaining
    Smooth Physics: Vector-based movement with realistic momentum and velocity capping
    Score System: Points for destroying asteroids (Large: 20, Medium: 50, Small: 100)
    Lives System: 3 lives with respawn mechanics and safe positioning
    Screen Wrapping: Seamless edge-to-edge gameplay
    Complete Menu System: Main menu, settings, leaderboard, and pause functionality
    Persistent Leaderboards: Top 10 high scores with names and dates
    Audio System: Retro sound effects for shooting and explosions
    Settings Persistence: Sound, difficulty, and volume settings saved to disk
    Pause System: ESC to pause/resume during gameplay
    Name Entry: Enter your name for high score records

