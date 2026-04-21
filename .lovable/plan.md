

# Soul Interface Site Revamp — Phased Plan

This is a major rewrite. Rather than one giant commit, I'll execute it as **16 sequential prompts** matching the brief's §8 sequence. Each is one approved change, one clean commit, easy to roll back. You approve this overall plan once, then we work through them.

## Memory rule conflicts (need your call before we start)

Two things in the brief contradict locked project memory rules. I want you to pick one before I start writing copy:

1. **Em dashes (—)** — Memory says never use them ("emblematic of AI writing"). The brief uses them everywhere ("Buy once. Own forever.", "AI that amplifies great teaching — without the sharks", etc.). Your call: keep memory rule (rewrite all em dashes as periods/commas/colons) OR allow them in this rewrite.
2. **Emojis in app stub taglines** — Memory says "Lucide icons, NEVER emojis". The brief specifies emoji taglines ("🎲", "💙", "👪") for new Wander/Counselor/Guardian stubs, matching existing stubs which already use emojis. Your call: drop emojis (use Lucide-only) OR allow them since existing stubs already have them.

I'll default to **honoring memory** (no em dashes, no emojis) unless you say otherwise.

## Phase order (16 commits)

Each phase is one approval cycle. Brief copy block in parens.

1. **Global fixes** — email domain (`.com` → `.ai`), default meta title/description, footer entity name (`Soul Interface Inc.`), SOUL backronym (+ "Interface"). Pure find/replace.
2. **App naming** — rename Learn→Learner, Teach→Teacher, Create→Creator, Administrator→Admin in stub configs and Support page. Add 3 new stubs (Wander, Counselor, Guardian) reusing `SoulAppPage`. Register routes for both apex and `si.tools` route trees.
3. **Retire pages** — delete `Autonomous.tsx`, `Sema.tsx`, `Partner.tsx`, `Tech.tsx`. Add `<Navigate>` redirects to `/heritage` (`/tech` → `/for-investors`).
4. **Vehicular → Heritage** — rename route to `/heritage` with `/vehicular` redirect, replace copy with brief §5.9, fold in AiSha paragraph.
5. **Homepage rewrite** — replace `ScrollContent` sections (HeroSection/HowItWorks/etc.) with new sections per §4: tagline, 3 audience cards (Schools/Homeschool/Business), manifesto snippet, Soul Stack, news/CTA. Keep `AnimatedLogo` and `#0d0d12` bg untouched. Update meta tags.
6. **New `/towers` page** — index for Heavy/Light/Extreme. Hero, 3 cards, comparison table, Soul Stack section. Reuse existing tower images.
7. **New `/the-suite` page** — 9-app grid with Lucide icons matching existing stub configs, Practice/Explore explainer, Alma section, teacher widgets section.
8. **Homeschool → /schools** — keep shark hero verbatim. Add audience-selector (Homeschool/Charter/Alternative tabs). Add institutional pilot section. Update demo modal options (drop FETC, add Virtual/Bay Area/Pilot). Rename Parent Dashboard → Parent & Teacher Dashboard. Add "Assessment System of Record" feature card. Update founder bio. Redirect `/homeschool` → `/schools` (and existing `/education` still resolves).
9. **Work expansion** — add 2 industry cards (Dental/Clinical, Small Firms), "Tax math that actually works" section, donate-at-upgrade callout. Pure additions.
10. **Investors minimum surgery** — remove Ansel from Slide 13, recenter Ben card, add `TODO(ben):` placeholders for FETC + Florida $8K stipend slides, update meta title. Don't touch nav/PDF/keyboard logic.
11. **Support page** — replace 6-app list with 9-app, update About paragraph, update backronym.
12. **Vision → /about** — one phrase swap ("vehicle or carryon" → "classroom, a clinic, or a carryon"), add Shares for Shares paragraph, page title "About Soul Interface", route `/about` with `/vision` redirect.
13. **News update** — add Recent Updates section above signup form with placeholder dated items. Form untouched.
14. **Pilots page (optional)** — `/pilots` with placeholder cards (Mariposa, ROP1, Spring 2026 charter). Skip if you say to defer.
15. **`<SiteHeader />`** — shared top nav (Schools/At Work/Towers/The Suite/About) on marketing pages only. Excludes Student/Teacher setup, Privacy, app stubs, Investors deck. Cyan accent for active route, mobile hamburger.
16. **Final audit** — verify meta tags, emails, entity name, nav rendering, route resolution, mobile responsiveness on new pages.

## Locked-down preservation list

I will NOT touch any of these (per brief §6.1 and memory):
- `AnimatedLogo` and all its assets
- All existing images in `/public/lovable-uploads/` and `/src/assets/`
- Per-page color themes (Heavy amber, Light cyan-on-light, Extreme seafoam, Schools/Work cyan)
- Per-page fonts (Playfair on Heavy, Outfit on Light, Helvetica on edu pages)
- Heavy wood/skeleton hover, Light cyan glow, shark + wave machine pulse, Extreme twin-node pulse animations
- `Privacy.tsx` (already current)
- `Pangea.tsx` iframe wrapper
- `Student.tsx` / `Teacher.tsx` setup docs (light copy audit only if needed)

## Routing summary (final state)

```
/                  Index (rewritten)
/about             Vision (renamed)        /vision → /about
/schools           Homeschool (expanded)   /homeschool → /schools, /education → /schools
/work              Work (expanded)
/towers            NEW index page
/the-suite         NEW 9-app page
/heavy /light /extreme   unchanged content, light edits
/heritage          Vehicular (reframed)    /vehicular /autonomous /sema /partner → /heritage
/pilots            NEW (optional)
/news              expanded
/for-investors     Investors (Ansel removed, TODOs added)   /tech → /for-investors
/support /privacy /student /teacher /pangea   minor or no changes
/learn /teach /create /yearbook /etcher /admin   stubs renamed in config
/wander /counselor /guardian   NEW stubs
*                  NotFound
```

## How we proceed

After you approve this plan and answer the two memory-rule questions:
- I'll start with **Phase 1 (Global fixes)** as the first commit. Smallest, lowest-risk, sets the meta foundation.
- Each subsequent phase requires its own approval (Lovable's normal flow).
- If anything mid-phase needs your input (e.g., pricing numbers for Heavy/Light, exact Mariposa pilot date), I'll add a `TODO(ben):` comment and keep moving.

