

## Support Page (`/support`)

Create a simple, clean support page matching the Privacy page style. Apple App Store requires a working support URL with contact info — the provided content covers this well.

### What to build

1. **`src/pages/Support.tsx`** — New page mirroring `Privacy.tsx` structure:
   - Header: "SOUL Support"
   - Contact line with `contact@soulinterface.ai` mailto link
   - Small FAQ accordion (1-2 items) using the existing `Accordion` component, covering the WiFi/server connection tip
   - Privacy policy link to `/privacy`
   - `PageFooter` with matching cyan accent colors
   - Same dark bg (`#0a0a0f`), cyan headings (`#1bbdc5`), gray body text

2. **`src/App.tsx`** — Add route: `<Route path="/support" element={<Support />} />`

### Privacy page review for Apple

The current Privacy page content is solid for Apple review — it covers data collection, children's privacy, COPPA compliance, contact info, and deletion rights. One small addition worth making: add a line about **third-party services** (confirming none are used) since Apple reviewers look for this. The current "Information We Do NOT Collect" section already covers this well, so no changes needed.

