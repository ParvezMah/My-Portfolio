# Parvez Mahamud — Portfolio

> A personal portfolio website built with Vite, React + TypeScript, Tailwind CSS and shadcn/ui components. This repository contains the source for a responsive, accessible portfolio showcasing projects, skills, experience and contact information.

---

## Table of contents

- About
- Demo / Live
- Features
- Tech stack
- Getting started (local)
- Available scripts
- Project structure
- Deployment
- Customization
- Contributing
- License
- Contact
---

## About

This is a modern single-page portfolio built with Vite and React (TypeScript). It uses Tailwind CSS for styling and a component library inspired by shadcn/ui and Radix primitives. The site is designed to be fast, accessible and easy to customize.

## Demo / Live

Live: https://parvez-mahamud-portfolio.vercel.app

*(Update this link after you deploy.)*

## Features

- Modern React + TypeScript codebase
- Vite-powered fast dev server and build
- Responsive layout built with Tailwind CSS
- Reusable UI components (shadcn-style + Radix primitives)
- Dark / Light theme toggle
- Projects, Experience, Skills sections and Contact form (UI)
- Accessible markup and keyboard-friendly components

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- shadcn-style component patterns
- Framer Motion (animations)
- React Router
- TanStack Query (data fetching patterns)
- ESLint + TypeScript for quality checks

## Getting started (local)

Prerequisites

- Node.js 18+ recommended
- npm (or pnpm/bun) installed

Clone the repo and install dependencies:

PowerShell

```powershell
git clone https://github.com/ParvezMah/My-Portfolio.git

npm install
```

Start the dev server:

```powershell
npm run dev
```

## Available scripts

These scripts are defined in `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — build for production (vite build)
- `npm run build:dev` — build in development mode
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the codebase

Use `npm run <script>` or `bun run <script>` depending on your package manager.

## Project structure (important files)

- `index.html` — app shell
- `src/main.tsx` — React entry
- `src/App.tsx` — top-level app
- `src/components/` — page sections and shared components (Hero, About, Projects, Contact, Navbar, Footer, etc.)
- `src/components/ui/` — small UI primitives and re-usable components
- `src/pages/` — route pages (Index, NotFound)
- `src/hooks/` — custom React hooks
- `src/lib/` — small utilities
- `public/` — static assets served as-is

## Deployment

This site can be deployed to Vercel, Cloudflare Pages, or any static hosting provider that supports Vite builds.

Typical steps (Vercel):

1. Connect the GitHub repository.
2. Set the build command: `npm run build` (or `bun build`), and the publish directory: `dist`.
3. Deploy — the provider will run the build and publish the site.

For a manual preview locally after building:

```powershell
npm run build
npm run preview
```

## Customization

- Change your name, headline and bio in `src/components/Hero.tsx` and related components.
- Update projects in `src/components/Projects.tsx` (or wherever your project list is stored).
- Update images/assets in `src/assets/` and reference them from components.
- Theme colors and Tailwind config: `tailwind.config.ts` and `index.css` / `App.css`.

If you want to add analytics or contact form backend, integrate your chosen provider and update the contact component accordingly.


## Contact

Add your contact information or preferred social links here.

Example:

- Email: parvezmahmudaa100@gmail.com
- GitHub: https://github.com/ParvezMah
- Phone: +8801850598057

---


