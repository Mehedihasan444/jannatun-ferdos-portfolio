# Jannatun Ferdos — Portfolio

Personal academic and professional portfolio for **Jannatun Ferdos**, an agriculture
graduate and entomology researcher based in Chapai Nawabganj, Bangladesh.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Fully static,
no client-side data fetching, and deployed as a single prerendered page.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Editing the content](#editing-the-content)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Accessibility](#accessibility)
- [License](#license)

---

## Features

- **Single prerendered page** — every route is static; no runtime data fetching.
- **Dark and light themes** — OKLCH-based token system, no flash of the wrong theme
  on load, and the choice persists.
- **Responsive** — verified with no horizontal overflow at 390 px and 1440 px.
- **Keyboard accessible** — skip-to-content link, visible focus rings, a focus-trapped
  mobile drawer that restores focus to its trigger on close, and Escape to dismiss.
- **Progressive enhancement** — scroll-reveal animations are scoped behind a `.js`
  class, so content stays fully visible if JavaScript is disabled or fails to load.
- **Reduced-motion aware** — all transitions and animations are neutralised for users
  who request it at the OS level.
- **SEO** — generated `sitemap.xml` and `robots.txt`, canonical URL, Open Graph and
  Twitter card metadata, and a `Person` JSON-LD schema.
- **Optimized images** — WebP portrait with explicit dimensions (no layout shift),
  a generated blur placeholder, and a `sizes` attribute matched to the real grid.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.3.6 (App Router, React 19.2) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Package manager | pnpm 11.10.0 (pinned via `packageManager`) |
| UI primitives | Radix Dialog (mobile navigation drawer only) |
| Class merging | `clsx` + `tailwind-merge` |
| Linting | ESLint 9 flat config (`eslint-config-next`) |

Runtime dependencies are kept deliberately small: only Radix Dialog is used from a
component library, and icons are hand-rolled inline SVG rather than an icon package.

## Getting started

Requires **Node.js 20+** and **pnpm 11**.

```bash
git clone https://github.com/Mehedihasan444/jannatun-ferdos-portfolio.git
cd jannatun-ferdos-portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | In production | Absolute origin of the deployed site, e.g. `https://example.com`. Used for canonical URLs, Open Graph tags, `sitemap.xml`, and `robots.txt`. |

Copy `.env.example` to `.env.local` to set it for development. If it is unset the site
falls back to `http://localhost:3000`, so a local build works with no configuration.

> **Note:** if this variable is missing in production, the sitemap and social previews
> will point at `localhost`. Set it in your host's dashboard before going live.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, JSON-LD, theme script
│   ├── page.tsx          # Composes the sections in reading order
│   ├── globals.css       # Design tokens, keyframes, base styles
│   ├── icon.svg          # Favicon
│   ├── robots.ts         # Generated robots.txt
│   └── sitemap.ts        # Generated sitemap.xml
├── components/
│   ├── layout/           # Navbar, footer, theme toggle, reveal observer
│   ├── sections/         # One component per page section
│   └── ui/               # Section, SectionHeading, ActionLink, icons, motifs
├── data/
│   └── portfolio.ts      # All site content, fully typed
├── lib/
│   ├── url.ts            # absoluteUrl() built on the site origin
│   └── utils.ts          # cn() class-name helper
└── types/
    └── css.d.ts          # Types the custom animation utilities
public/
├── cv/                   # Downloadable CV (PDF)
└── images/              # Portrait (WebP)
```

## Editing the content

**All page content lives in [`src/data/portfolio.ts`](./src/data/portfolio.ts).**
You should not need to touch a component to change text, links, dates, or ordering.

The file exports one typed object per section — `site`, `navigation`, `hero`, `about`,
`education`, `research`, `training`, `achievements`, `activities`, `languages`, and
`references`. Every record is typed, so a typo or a missing field is caught by
`pnpm build` rather than failing silently at runtime.

Two conventions worth knowing:

- **Optional links are explicitly `null`.** Publication `url` and `doi` fields are
  `string | null`. The research section renders a linked title only when a URL exists
  and a plain title when it does not, so no dead anchor is ever produced.
- **Don't invent data.** The content is a faithful representation of the source CV.
  If a value is unknown, leave it `null` or omit it rather than filling in a plausible
  figure.

To change the **contact details, social links, or CV path**, edit the `site` object at
the top of that file. Those values feed the navbar, footer, hero, contact section, and
the JSON-LD schema simultaneously.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run `tsc --noEmit` |

Run `pnpm typecheck && pnpm lint && pnpm build` before pushing — that is exactly what
the CI workflow does.

## Deployment

The project deploys to any Node host. On **Vercel** the zero-config path works because
the framework is detected automatically.

1. Import the repository into your host.
2. Set `NEXT_PUBLIC_SITE_URL` to the production origin.
3. Deploy.

For any other host, build and run directly:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

## Accessibility

Verified in a real browser:

- Semantic landmarks, a single `h1`, and no skipped heading levels.
- Every image has descriptive `alt` text; icon-only controls carry accessible names.
- The mobile drawer traps focus, closes on `Escape`, and returns focus to its trigger.
- Decorative SVG is hidden from assistive technology.
- Colour contrast meets WCAG AA in both themes.

## License

Released under the [MIT License](./LICENSE). The CV PDF and portrait image remain the
property of Jannatun Ferdos and are included here for personal and professional
presentation purposes.
