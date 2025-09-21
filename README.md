**Blog MX (mustafasarac.com)**

- Next.js 14 + TypeScript blog/portfolio with MDX content, Tailwind CSS styling, SEO, Open Graph image generation, and RSS/Sitemap automation.
- Open source under MIT.

**Features**
- MDX content pipeline with custom remark plugins (`remark-sectionize` fork, figure captions, code meta) — `lib/mdx.ts`, `lib/remark-*`
- SEO + structured data via `next-seo` and per-post OG images — `core/components/Seo/*`, `lib/generate-opengraph-images.ts`
- Dynamic OG image template with shapes and blended text — `pages/og.tsx`, `core/components/OG/*`
- RSS and sitemap generators — `scripts/generate-rss.js`, `scripts/generate-sitemap.js`
- Analytics with consent banner (Google Analytics) — `pages/_app.tsx`, `core/components/ConsentBanner.tsx`, `core/components/GoogleAnalytics.tsx`
- CI automation for linting, type-checking, and builds — `.github/workflows/ci.yml`

**Tech Stack**
- Next.js 14, React 18, TypeScript
- MDX via `next-mdx-remote`
- Tailwind CSS 3
- Playwright (headless) for OG image capture
- ESLint + Prettier for linting/formatting

**Getting Started**
- Prerequisites: Node `18.17.0` (`.nvmrc`), pnpm 8 recommended.
- Install: `pnpm install`
- Dev: `pnpm dev` (http://localhost:3000)
- Type-check: `pnpm type-check`
- Lint/format: `pnpm lint` and `pnpm format`
- Tests: add your preferred framework; no automated test runner is currently configured.

Note: The build step runs a prebuild that generates RSS/Sitemap. CI and Netlify config target Node 18.17.0.

**Content Authoring (MDX)**
- Add posts under `content/` as `.mdx`. Required frontmatter example:
  ```yaml
  ---
  title: 'Post Title'
  subtitle: 'Short summary'
  date: '2024-01-01T00:00:00.000Z'
  updated: '2024-01-01T00:00:00.000Z'
  slug: my-post-slug
  language: 'en' # or 'tr'
  featured: false
  # optional styling
  colorFeatured: 'linear-gradient(214deg, #A0A0A0 0%, #1F2426 96.12%)'
  fontFeatured: '#ffffff'
  ---
  ```
- Custom MDX components: `Image` and `Callout` are available — `core/components/MDX/MDXComponents.tsx`.

**Open Graph Images**
- A Playwright script captures the OG template as an image per post.
- Start dev server (`pnpm dev`), then run `pnpm generate:og`. Images are written under `public/static/og/` and resolved via `lib/generate-opengraph-images.ts`.

**Deployment**
- Netlify: configured via `netlify.toml` with `@netlify/plugin-nextjs`.
- Vercel: works as a standard Next.js app.

**Useful Scripts**
- `pnpm generate:rss` — build RSS feed at `public/rss.xml`
- `pnpm generate:sitemap` — build sitemap at `public/sitemap.xml`
- `pnpm analyze` — bundle analyzer

**Repository Structure (high level)**
- `pages/` — Next.js routes (posts page, API endpoints, OG route)
- `content/` — MDX posts
- `core/` — UI building blocks (Seo, MDX components, OG, layout)
- `lib/` — MDX + OG helpers and remark plugins
- `scripts/` — generate RSS/Sitemap/OG images

**Acknowledgements**
- `next-mdx-remote` community for MDX serialization and remark hooks.
- `@vercel/og` and Playwright teams for OG image tooling.

**License**
- MIT — see `LICENSE`.
