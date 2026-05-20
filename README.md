# Clutch Detailing

Mobile car detailing site for Clutch Detailing, Toronto. Next.js 15 · React 19 · TypeScript · Tailwind v4 · Motion · react-calendly.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Motion**: `motion` (Framer Motion v11+)
- **Booking**: `react-calendly` (popup + inline embed)
- **Fonts**: Fraunces (display) + Manrope (body) via `next/font/google`

## Setup

```bash
cp .env.example .env.local
# edit NEXT_PUBLIC_CALENDLY_URL with the real Calendly link

npm install
npm run dev
```

Open http://localhost:3000.

## Environment

- `NEXT_PUBLIC_CALENDLY_URL` — Calendly event URL used by the popup + inline embeds
- `NEXT_PUBLIC_SITE_URL` — canonical site URL (used for OG, sitemap, schema)

## Structure

```
src/
  app/
    layout.tsx          # Fonts, metadata, nav, footer
    page.tsx            # Home
    about/page.tsx
    team/page.tsx
    services/page.tsx
    book/page.tsx
    globals.css         # Design tokens + Tailwind v4 theme
    sitemap.ts
    robots.ts
  components/           # All UI components
  lib/                  # Data: services, team, testimonials, faq, site config
```

## Design system

Eco-luxe palette in `src/app/globals.css` as Tailwind v4 `@theme` tokens:

- `--color-bone` `#f4f1ea` — warm background
- `--color-forest` `#1a2e1f` — primary ink
- `--color-moss` `#4a6741` — secondary accent
- `--color-sand` `#c9b896` — highlight
- `--font-display` — Fraunces (variable, with SOFT/opsz axes)
- `--font-body` — Manrope

## Editing content

- **Services & pricing** — `src/lib/services.ts`
- **Team** — `src/lib/team.ts`
- **Testimonials** — `src/lib/testimonials.ts`
- **FAQ** — `src/lib/faq.ts`
- **Site config (NAP, social)** — `src/lib/site.ts`

## Deploying

Vercel (recommended): connect the repo, set the two env vars, deploy.
