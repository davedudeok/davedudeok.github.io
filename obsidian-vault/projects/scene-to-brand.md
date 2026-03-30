# Project: Scene-to-Brand

## Overview
A modern, client-side web application for designers and brand managers. It extracts 10–15 core colors from uploaded images to generate design-ready palettes for web, print, and apparel.

## Status
- **Current Phase:** MVP Feature Implementation (Color Extraction)
- **Deployment:** Live on Vercel.
- **Tech Stack:** React (TypeScript), Tailwind CSS, Canvas API (Native extraction).

## Roadmap & Milestones
- [x] **Month 1: Foundation & MVP**
    - [x] Repo initialized & Git configured.
    - [x] UI/UX designed and implemented with minimalist aesthetic.
    - [x] Native Canvas-based color extraction logic working.
    - [x] Vercel auto-deployment configured.
- [ ] **Month 2: Polish & Features**
    - [ ] Add copy-to-clipboard functionality (HEX, RGB, HSL).
    - [ ] Export features (CSS Variables, JSON, Tailwind Config).
    - [ ] Permalinks/Shareable palette pages.
- [ ] **Month 3: Growth & Monetization**
    - [ ] Design blog ("Pro Tips") integration.
    - [ ] Ko-fi/Buy Me a Coffee integration.
    - [ ] Influencer outreach.

## Recent Logs
- **2026-03-30:** Replaced node-vibrant with native Canvas API to resolve browser/build conflicts. Optimized build pipeline for Vercel and set up automated Obsidian-to-GitHub cron syncing.
- **2026-03-29:** Initialized repository and PRD. Established the minimalist design pattern.

## Notes
- The "blank page" issue in production was due to build pathing and React hydration conflicts; solved by standardizing the root mounting in `index.tsx` and using relative build paths.
- Future work: Palette management needs state persistence. Consider using `localStorage` to save user palettes across sessions.
EOF
