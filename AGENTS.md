# AGENTS.md

This file provides guidance to Codex when working with this repository.

## Project Goal & Context

I am building a single-page apartment rental landing page.

- **Goal:** A responsive, clean, modern design with a persistent call-to-action linking to Booking.com.
- **SEO:** All routes must be prerendered for optimal SEO using `@sveltejs/adapter-static`.

## Commands

npm run dev # Start development server
npm run build # Build for production (static output)
npm run preview # Preview production build
npm run optimize-images # Compress gallery images and generate WebP thumbnails
npm run check # Type-check with svelte-check
npm run check:watch # Type-check in watch mode
npm run lint # Check formatting with prettier
npm run format # Auto-format with prettier

## Architecture & Stack

This is a **SvelteKit 2 / Svelte 5** app configured as a **static site** (`@sveltejs/adapter-static`). There is no server-side rendering or API routes — all output is pre-rendered HTML/CSS/JS.

**Stack:**

- **Svelte 5:** You MUST use Runes (`$props()`, `$state()`, `$derived()`, `$effect()`). Do not use legacy Svelte 4 syntax.
- **SvelteKit 2:** File-based routing under `src/routes/`. The layout uses `{@render children()}` instead of `<slot />`.
- **Tailwind CSS v4:** Configured via `@tailwindcss/vite` plugin, imported in `src/routes/layout.css`.
- **Formatting:** Prettier with Svelte and Tailwind plugins.

**Key files:**

- `src/routes/+layout.svelte` — root layout; imports global CSS and sets favicon
- `src/routes/layout.css` — global stylesheet (`@import 'tailwindcss'`)
- `src/lib/` — shared library code, imported via `$lib/` alias
- `svelte.config.js` — minimal config, only sets static adapter
- `vite.config.ts` — registers Tailwind and SvelteKit Vite plugins

## Image Workflow

- When adding or replacing gallery images in `static/images/`, always run `npm run optimize-images` before finishing the task.
- This process compresses the original JPEGs for lightbox/full-size use and generates matching WebP thumbnails in `static/images/thumbs/` for the gallery grid.
- Gallery pages should use the thumbnail assets for previews and only load the larger optimized image when the user opens the lightbox.
