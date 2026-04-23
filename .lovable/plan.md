
## Homepage cleanup

Trim the homepage of three content areas the user no longer wants, and tighten the closing CTA copy.

### Changes

**1. `src/components/home/ReasoningSection.tsx`** — Remove the "See Its Reasoning. Every Time." block entirely. Since the file only contains that section plus the "$1K Bad Behavior Bug Bounty" block, rewrite it so it renders only the Bug Bounty (centered, single column) — or remove the section from `ScrollContent.tsx` and delete the file. I'll keep the Bug Bounty by simplifying `ReasoningSection.tsx` to render just that one centered block.

**2. `src/components/ScrollContent.tsx`** — Audit for any persona/backup-related sections currently rendered. Looking at the imports, the rendered sections are: `HeroSection`, `HowItWorksSection`, `ReasoningSection`, `FAQSection`, `ClosingCTASection`. I will read `HeroSection`, `HowItWorksSection`, and `FAQSection` during implementation and strip any copy/blocks that mention:
   - Personas / persona customization / "mix and blend" voices
   - Backing up data / backups / data backup

If an entire section becomes empty after removal, drop it from `ScrollContent.tsx`.

**3. `src/components/home/ClosingCTASection.tsx`** — Update the closing paragraph:
   - Remove: `or <Link to="/extreme">getting prepared for anything</Link>,`
   - Add "or " before the towers link so it reads:

   > Whether you're equipping a **classroom**, running a **private workplace**, or choosing a **tower for your space**, Soul Interface is Powerful, Offline, Sovereign AI.

### Out of scope
No routing, styling, or other page changes. Bug Bounty block stays. FAQ entries unrelated to personas/backups stay.
