# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development Server:** `npm run dev` (starts Vite dev server)
- **Build:** `npm run build` (builds for production)
- **Lint:** `npm run lint` (runs ESLint)
- **Preview Build:** `npm run preview` (preview production build locally)

## Architecture & Structure

This is a single-page React portfolio website built with Vite, Tailwind CSS, and Framer Motion.

- `src/main.jsx`: Entry point mounting the root React application.
- `src/App.jsx`: Main application component assembling all layout sections and components.
- `src/sections/`: Major vertical sections of the portfolio:
  - `Hero.jsx`: Intro/hero banner section.
  - `TechnicalProficiency.jsx`: Skills and technical proficiencies display.
  - `MyProjects.jsx`: Showcase of projects.
  - `AboutMe.jsx`: Personal background/about section.
  - `ContactMe.jsx`: Contact form/details section.
  - `Footer.jsx`: Page footer.
- `src/components/`: Reusable UI components (`Navbar.jsx`, `ProjectCard.jsx`, `ContactInfoCard.jsx`, etc.).
- `src/utils/data.js`: Centralized data definitions for projects, skills, and contact info.
- `src/assets/`: Images and static assets.

## Design System

**Color Palette:**
- Primary: `#F6A64F` (warm orange)
- Secondary: `#B56141` (brown)
- Background: `#FFFCF8` (cream)
- White: `#FFFFFF`

**Typography:** Poppins font family

**Animations:** Framer Motion for micro-interactions and scroll reveals

## Conventions

- Use Tailwind utility classes for styling
- Keep components small and focused
- Store reusable data in `src/utils/data.js`
- Use `react-scroll` for smooth navigation to sections
