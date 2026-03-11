

# SOUL App Landing Pages on si.tools

## Concept

When someone hits `si.tools` or `soulinterface.tools` from the public internet, `App.tsx` detects the hostname and renders a completely separate route tree. The 6 app pages live at `/learn`, `/teach`, `/create`, `/yearbook`, `/admin`, `/etcher` on those domains. Everything else (including `/`) gets a funny "wrong network" catch-all.

The main `soulinterface.ai` site is unaffected.

## Files to Create

### 1. `src/pages/soul-tools/SoulAppPage.tsx` — Shared layout

Reusable component accepting app config (name, primary color, accent, tagline, connection message, features list, Lucide icon). Renders:
- Large Lucide icon (64-80px) in the app's color with subtle glow
- App name heading
- Playful tagline with emoji
- "Connect to your school network" callout card (wifi-off icon, border in app color, the humorous message)
- "What does [App] do?" — 2-col feature grid (1-col mobile), each with icon + title + description
- Footer: links to `soulinterface.ai/privacy`, `soulinterface.ai/support`, mailto link
- Dark bg `#0a0a0f`, framer-motion fade-in

### 2. Six thin config files

Each passes unique props to `SoulAppPage`:

| File | Route on si.tools | Color | Icon |
|---|---|---|---|
| `LearnPage.tsx` | `/learn` | Blue `#3B82F6` | Brain |
| `TeachPage.tsx` | `/teach` | Purple `#8B5CF6` | Shield |
| `CreatePage.tsx` | `/create` | Yellow `#EAB308` | Palette |
| `YearbookPage.tsx` | `/yearbook` | Red `#EF4444` | Camera |
| `AdminPage.tsx` | `/admin` | Green `#22C55E` | Settings |
| `EtcherPage.tsx` | `/etcher` | Orange `#F97316` | Cpu |

Content (taglines, connection messages, features) taken directly from your spec.

### 3. `src/pages/soul-tools/SoulToolsNotFound.tsx` — Funny catch-all

For `/` and any invalid path on si.tools/soulinterface.tools. Randomly picks from ~6 witty messages:
- "You've reached si.tools from the internet. That's like knocking on a submarine from the outside."
- "Plot twist: SOUL runs on your school's WiFi, not the open web. Nice try though."
- "This page intentionally left unhelpful. Connect to your school's network to use SOUL."
- etc.

Shows SOUL branding, link to `soulinterface.ai`.

### 4. `src/App.tsx` — Hostname-based routing

At the top of the App component, check `window.location.hostname`. If it's `si.tools` or `soulinterface.tools`, render a separate `<Routes>` tree:

```
/learn    → LearnPage
/teach    → TeachPage
/create   → CreatePage
/yearbook → YearbookPage
/admin    → AdminPage
/etcher   → EtcherPage
/privacy  → Privacy (reuse existing)
/support  → Support (reuse existing)
*         → SoulToolsNotFound
```

Otherwise render the existing soulinterface.ai routes unchanged.

## Domain Setup

Once built, connect `si.tools` as a custom domain in project settings, pointing public DNS A record to `185.158.133.1`. School local DNS continues resolving to `192.168.1.10` for on-network users.

