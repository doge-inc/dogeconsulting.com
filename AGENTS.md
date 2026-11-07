# AGENTS.md

This file provides guidance to AI coding agents working with code in this repository.

## Project

Single-page marketing site for Doge Consulting Inc. (dogeconsulting.com), built with Next.js (App Router) and Mantine. Yarn 4 is the package manager; the release is vendored in `.yarn/releases/`.

## Commands

```sh
yarn dev            # dev server
yarn build          # static export to out/
yarn lint           # oxlint (skips .mjs, .cjs, .js and .d.ts files)
yarn fmt            # oxfmt, rewrites files in place (100-column print width)
yarn tsc --noEmit   # typecheck
```

There is no test suite.

## Deployment

Every push to `main` deploys to production on GitHub Pages (`.github/workflows/deploy.yml`). The workflow only installs and builds, so it does not run `yarn lint`. `public/CNAME` sets the custom domain.

`next.config.mjs` sets `output: "export"`, so the site must stay fully static: no API routes, server actions, middleware, or request-time rendering. `next/image` optimization is off. `yarn start` does not serve an exported build; to preview one, serve `out/` with a static file server.

## Architecture

**Sections are driven by a registry.** `SECTION` in `contants/layout.ts` (the directory name is misspelled; imports depend on it) lists each section's `id`, nav `label`, `Component`, and `enabled` flag. `app/page.tsx` renders the enabled sections and `components/Header/Header.tsx` builds the nav links from the same list, so `enabled` controls both. `Hero` sits outside the registry and is always rendered first. About is disabled until `components/About/About.tsx` has the real founder details.

To add a section, add a `SECTION` entry and have the component set `id={SECTION.<key>.id}` and `data-nav-section` on its root (the header's active link reads it), plus `scrollMarginTop` so anchor links clear the fixed header.

**Circular import.** `contants/layout.ts` imports the section components, and they import `SECTION` back from it. This only works because components read `SECTION` at render time, so don't read it at a section module's top level.

**Header shrink on scroll spans three files.** `hooks/useScrollProgress.ts` produces a 0 to 1 value, `Header.tsx` passes it as the `--header-shrink` CSS variable, and `Header.module.css` uses it to interpolate the header and logo sizes. The heights are duplicated and must be kept in sync by hand: `HEADER_HEIGHT` (`contants/layout.ts`) and `SHRINK_HEADER_HEIGHT` (`Header.tsx`) must match `$header-height-max` and `$header-height-min` in the CSS module.

**Theming.** `theme.ts` defines `doge` (the primary color) and `dogeReversed` as Mantine virtual colors that swap palettes between light and dark schemes. Prefer these over literal colors so both schemes keep working. The color scheme defaults to `auto`. The header, hero and contact band stay navy in both schemes; `components/Cta/Cta.module.css` holds the button styles for navy and page surfaces, and `app/global.css` holds the brand tokens.

**Client confidentiality.** The repo is public and clients are anonymized on purpose. Never put client or client product names in site copy, data, or commit history.

**Motion.** Scroll reveals use the global `.reveal` class (`app/global.css`), a CSS scroll-driven animation with no JavaScript, so content stays visible where it is unsupported. Gate all animation behind `prefers-reduced-motion: no-preference`.

**Contact.** Email is the only contact path. Build CTA links with `mailtoFor(subject)` from `contants/contact.ts`, giving each CTA its own subject, since subject lines are the only record of which CTA produced an inquiry.

**Styling.** Use Mantine style props first, and CSS modules beside the component for anything beyond them. `postcss.config.cjs` enables `postcss-preset-mantine` and `postcss-simple-vars`, so `$variables` and `$mantine-breakpoint-*` work in CSS files. Styles for a new Mantine extension package must be imported in `app/layout.tsx`.

**SVGs import as React components.** The SVGR loader is configured only under `turbopack.rules` in `next.config.mjs`, with types in `svgr.d.ts`. An imported `.svg` is a component, not a URL (see `Logo` in `Header.tsx`).
