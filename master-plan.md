# Master Plan: Scene-to-Brand

## Overview
A modern, client-side web application that takes an uploaded photo and extracts 10-15 core colors to generate a design-ready palette.

## Project Structure
- Frontend: React or Svelte (for reactive UI) + Vite (for fast build)
- Styling: Tailwind CSS (for modern, responsive design)
- Processing: Vibrant.js or Color Thief (for local client-side extraction)

## Roadmap & Issues

### 1. Setup & Architecture
- Initialize Vite + React project.
- Configure Tailwind CSS.
- Create project structure.

### 2. File Upload & Preprocessing
- Implement drag-and-drop file upload.
- Handle image validation (size, format).
- Create image preview component.

### 3. Core Logic: Color Extraction
- Integrate extraction library (e.g., Vibrant.js).
- Implement algorithm to isolate 10-15 dominant colors.
- Map extracted colors to UI/branding categories.

### 4. Palette UI & Export
- Create interactive palette dashboard.
- Add copy-to-clipboard functionality (hex/rgb/hsl).
- Add basic export features (CSS variables, JSON, Tailwind config).

### 5. Final Polish & Deployment
- Responsive design tuning.
- Add theme toggling (Light/Dark).
- Deploy to Vercel/Netlify.
