# Shine With Shree — Personal Brand Site

Personal branding site for **Shree Sharma** with TinaCMS-backed publishing for long-form **Insights** and short-form **Perspectives**. Success stories remain in TypeScript (`src/data/successStories.ts`) and are not managed by Tina in v1.

## Stack

- Vite + React 19 + React Router 7
- Tailwind CSS 4
- TinaCMS + Tina Cloud (Git-backed markdown editor)
- Markdown content in `content/insights/` and `content/perspectives/`

## Local development

**Prerequisites:** Node.js 20+

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Start the site with Tina admin (recommended for editing):

   ```bash
   npm run dev
   ```

   - Public site: [http://localhost:3000](http://localhost:3000)
   - Tina admin: [http://localhost:3000/admin/index.html](http://localhost:3000/admin/index.html)

4. Site-only dev (no Tina wrapper):

   ```bash
   npm run dev:site
   ```

## Tina Cloud setup

1. Go to [app.tina.io](https://app.tina.io) and create a **new project** for this repository.
2. Connect your Git provider and select the branch used for production (usually `main`).
3. Copy the **Client ID** and **Read-only Token** into `.env`:

   ```env
   TINA_CLIENT_ID=your_client_id
   TINA_TOKEN=your_read_token
   TINA_BRANCH=main
   ```

4. In Tina Cloud project settings, ensure the content paths match:
   - `content/insights`
   - `content/perspectives`
   - Media root: `public/uploads`

5. Invite editors in Tina Cloud — they authenticate via Tina, not a custom admin panel.

## Publish workflow

1. Editor opens `/admin` and signs in via Tina Cloud.
2. Create or edit an **Insight** or **Perspective** markdown file.
3. Set `draft: false` to publish (drafts are **never** included in the public bundle).
4. Save — Tina commits changes to Git.
5. Hosting rebuilds on push → live URL.

### Draft safety

Draft posts are excluded in `scripts/generate-content.ts` at build time. Draft markdown never enters `src/data/content.generated.ts`, so draft bodies are not shipped in the JS bundle.

## Content collections

| Collection    | Folder                 | Route pattern              |
|---------------|------------------------|----------------------------|
| Insights      | `content/insights/`    | `/insights/:slug`          |
| Perspectives  | `content/perspectives/`| `/perspectives/:slug`      |

### Frontmatter fields

```yaml
---
title: "Post title"
description: "SEO + card summary"
date: 2026-01-15T09:00:00.000Z
draft: false
tag: "Topic tag"
heroImage: /uploads/example.jpg  # optional, stored in public/uploads
---
```

Body is standard markdown below the frontmatter.

## Build

```bash
npm run build
```

Build steps:

1. `generate:content` — bundles published markdown only
2. `tinacms build` — generates admin UI into `admin/`
3. `vite build` — outputs static site to `dist/`

Preview production build:

```bash
npm run preview
```

## Deploy (Hostinger)

This site is a static Vite build. Hostinger shared hosting serves the contents of `dist/` from your domain's document root (usually `public_html`).

### Build locally

Set Tina env vars in `.env` (see [Tina Cloud setup](#tina-cloud-setup)), then:

```bash
npm run build
```

The build copies the Tina admin UI into `dist/admin/` and includes `public/.htaccess` for Apache SPA routing.

### Upload to Hostinger

1. In hPanel, open **File Manager** (or connect via FTP/SFTP).
2. Upload **everything inside** `dist/` to `public_html` (not the `dist` folder itself).
3. Ensure `.htaccess` is present in `public_html` — it handles client-side routes and `/admin` redirects.

After Tina commits new content, rebuild locally and re-upload `dist/`, or automate with a CI job that builds and deploys via FTP.

### Environment variables

Tina credentials are only needed at **build time** (not on the Hostinger server):

- `TINA_CLIENT_ID`
- `TINA_TOKEN`
- `TINA_BRANCH` (e.g. `main`)

## Site configuration

Brand values live in `src/config/site.ts` (domain, email, SEO defaults, social links). Content components read from this module — do not hardcode brand copy in page components.

## Sample content

- Published insight: `/insights/meddic-without-the-theater`
- Published perspective: `/perspectives/the-monday-pipeline-trap`
- Draft sample (excluded from build): `content/insights/draft-sample-do-not-publish.md`

## Project structure

```
content/insights/          # Tina-managed long-form markdown
content/perspectives/      # Tina-managed short-form markdown
public/uploads/            # Tina-managed images (in repo)
scripts/generate-content.ts
src/config/site.ts         # Brand + SEO config
src/data/content.generated.ts  # Build-time published content bundle
tina/config.ts             # Tina collections schema
admin/                     # Generated Tina admin (after build)
```
