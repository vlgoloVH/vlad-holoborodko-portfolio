# Vlad Holoborodko — Product Designer Portfolio

A premium, minimal portfolio built with Next.js (App Router), TypeScript,
Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, theme provider, header, sidebar, footer
  page.tsx            Home page (Hero, Logo strip, Cases, About teaser, Testimonials, Contact)
  globals.css         Design tokens (light/dark/inverted color variables)
  sitemap.ts          Sitemap for SEO
  not-found.tsx       404 page
  about/page.tsx      About page (bio, timeline, skills)
  cases/[slug]/page.tsx  Case study detail page

components/
  layout/             Header, Footer, SocialSidebar, ScrollProgress, Preloader, Cursor
  sections/           Home page sections
  about/              Timeline component
  case-detail/        Case sidebar nav + prev/next navigation
  ui/                 Reveal (scroll animation), Counter, ThemeToggle, CoverPlaceholder

lib/
  site.ts             Site-wide constants (nav, socials, metrics, testimonials)
  cases.ts            Case study content & metadata
  experience.ts       Career timeline + skills
```

## Design system

**Colors** — warm paper background, near-black ink, single coral-orange
accent (`#d9552c` light / `#ec6a3c` dark). The About section on the home
page and the "Skills" band on the About page use a permanently-inverted
dark variant (`.section-invert`) for contrast, independent of the light/dark
toggle.

**Type** — Bricolage Grotesque (display/headings, uppercase, tight tracking)
paired with Inter (body) and JetBrains Mono (eyebrows, tags, metadata —
the "spec sheet" voice).

**Signature detail** — a custom cursor that expands into a small accent-
colored label ("View", "Open", "Email"...) over interactive elements, plus
dashed "drafting" corner-marks on every image placeholder and a hairline
ruler divider. These nod to a designer's working materials (grids, specs,
annotations) without being literal.

## Headline variants considered for the hero

1. **"Vlad Holoborodko."** (used) — name-forward, confident, lets the
   subhead carry the positioning.
2. "Product, designed end to end." — positioning-forward, leads with the
   value proposition.
3. "Ten years of making complex things feel obvious." — outcome-forward,
   leans on experience and tone.

## Replacing placeholders

- All imagery uses `CoverPlaceholder` (dashed frame). Swap these for real
  artwork using `next/image` — `lib/cases.ts` already includes a `cover`
  field with placeholder URLs you can point at real assets.
- `app/about/page.tsx` links to `/resume.pdf` — add a real file to `public/`.
- Update `lib/site.ts` for real email/social links and `lib/cases.ts` /
  `lib/experience.ts` with real project and career content.
- `app/layout.tsx` sets `metadataBase` to a placeholder domain — update for
  production, and replace `public/favicon.svg` with a real mark if desired.

## Accessibility & motion

- All interactive elements have visible focus states (accent outline).
- The custom cursor and marquee respect `prefers-reduced-motion`.
- Both themes maintain WCAG AA contrast for body text against their
  backgrounds.
