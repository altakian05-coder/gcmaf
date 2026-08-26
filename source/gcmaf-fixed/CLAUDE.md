# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # Start local dev server (localhost:3000)
pnpm build        # Next.js production build
pnpm lint         # Run ESLint
pnpm preview      # Build for Cloudflare + run wrangler dev locally
pnpm deploy       # Build for Cloudflare + deploy via wrangler
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** site for GcMAF (a medical immunotherapy product), deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`. It uses **React 19**, **Tailwind v4**, and **TypeScript**.

### Routing (`app/`)

- `/` — Home
- `/about` — About page
- `/product` — Product page (two formulations)
- `/contact` — Contact form (Web3Forms + Cloudflare Turnstile)
- `/research` — Research/publications page
- `/clinical-applications` — Overview + five sub-routes: `/cancer`, `/neurological`, `/autoimmune`, `/chronic-infections`, `/immune-enhancement`

### Components (`components/`)

- `layout/` — `Navbar` and `Footer` (rendered in root layout)
- `sections/` — Page-specific section components used in homepage and product pages
- `clinical/` — Reusable section components shared across all clinical application sub-pages (`ClinicalHero`, `EffectsGrid`, `EvidenceSection`, etc.)
- `ui/` — Primitive UI components (`Button`, `Badge`, `Accordion`, `SectionWrapper`, custom icons)
- `providers/` — `ThemeProvider` (wraps `next-themes`)

### Data & Constants (`lib/`)

- `lib/constants.ts` — Single source of truth for site name, contact info, nav links, and the medical disclaimer. **Always use these constants rather than hardcoding.**
- `lib/data/` — Typed TypeScript data files (`variants.ts`, `benefits.ts`, `features.ts`, `conditions.ts`, `faqs.ts`, `research.ts`) that drive page content. Update these to change copy/content without touching components.

### Styling

Tailwind v4 is configured entirely via `app/globals.css` using `@theme {}`. Brand tokens are CSS variables (`--color-brand`, `--color-ink`, `--color-bg`, etc.) — use the generated utilities (`bg-brand`, `text-ink`, `bg-bg`) rather than raw hex values.

Dark mode is handled by `next-themes`: it adds `.dark` to `<html>`, and `globals.css` overrides the same CSS vars under `.dark {}`. Panels that must stay dark regardless of theme use `bg-panel-dark` (never `bg-footer-bg` as a substitute).

Fonts: `--font-display` (Montserrat) and `--font-body` (Roboto), injected by `next/font` on `<html>`. Use the `font-display` and `font-body` utility classes.

### Environment Variables

Required in `.env.local` (not committed):

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=   # Contact form submissions
NEXT_PUBLIC_TURNSTILE_SITE_KEY=     # Cloudflare Turnstile (bot protection, public)
TURNSTILE_SECRET_KEY=               # Cloudflare Turnstile (server-side verification)
```

### Deployment

Deploys to Cloudflare Workers under the name `gcmaf-biopharma`, serving `gcmaf.net` and `www.gcmaf.net`. The build output goes to `.open-next/`. Cloudflare Workers environment variables must be set separately in the Cloudflare dashboard for production.
