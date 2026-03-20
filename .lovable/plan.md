

# Plan: Generate Website Sitemap Documentation

Generate a detailed markdown file documenting every page of the Soul Interface website (both the `soulinterface.ai` domain and the `si.tools`/`soulinterface.tools` domain).

## What I'll create

A comprehensive `.md` file saved to `/mnt/documents/` covering:

**soulinterface.ai domain** (18 pages):
- `/` — Homepage (animated logo, hero, how it works, reasoning, FAQ, closing CTA)
- `/vision` — Company manifesto
- `/tech` — Technology teaser
- `/partner` — Partnership page (AiSha LLC, SEMA)
- `/news` — Newsletter signup (Soul Dispatch)
- `/investors` — 16-slide pitch deck
- `/education` — Education vertical (formerly /homeschool)
- `/vehicular` — Automotive AI vertical
- `/work` — Enterprise/professional vertical
- `/extreme` — Preparedness/off-grid vertical
- `/autonomous` — Robotaxi vertical (coming soon)
- `/light` — Product page (consumer device)
- `/heavy` — Product page (enterprise device)
- `/student` — Student setup guide
- `/teacher` — Teacher deployment guide
- `/pangea` — Embedded iframe app
- `/privacy` — Privacy policy
- `/support` — Support/about page

**si.tools / soulinterface.tools domain** (8 pages):
- `/learn`, `/teach`, `/create`, `/yearbook`, `/admin`, `/etcher` — 6 SOUL app landing pages
- `/privacy`, `/support` — Reused from main site
- `*` (catch-all) — Funny "wrong network" 404 page

Each entry will include: route, page title, description, key sections/content, color scheme, and notable features.

## Approach
- Run a script to write the markdown to `/mnt/documents/site-map.md`
- No code changes needed

