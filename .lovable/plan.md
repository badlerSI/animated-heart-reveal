
# Color Mixing and Visual Effects for Pangea Game

## Overview
Add dynamic color behavior to the continents so that when they overlap during dragging, their colors visually "mix" in a pleasing way (not muddy). When continents lock into their target positions at the same location, overlapping areas become full opacity with a bright glow. Colors also shift subtly between geological eras to reinforce the sense of time passing.

## Effects

### 1. Overlap Color Mixing (SVG Blend Modes)
- Set `mix-blend-mode: screen` on continent `<g>` elements while they are being dragged or unlocked
- "Screen" blend mode combines colors additively (like light mixing), producing vibrant results instead of muddy paint-mixing -- orange + green = bright yellow, blue + pink = lavender, etc.
- This gives a "colors mixing like light" effect that is visually fun without ever producing brown/mud

### 2. Full Opacity + Glow When Locked Together
- When a continent snaps into place (`snapContinent`), transition its opacity from 0.55 to **0.9** (instead of the current 0.75)
- Add a CSS `drop-shadow` glow filter matching the continent's color (small radius, 8-15px per the design memory) to locked continents
- When **all** continents are placed in a step, briefly pulse all locked continents with a synchronized glow burst (a single 0.6s animation), then settle to steady glow
- Update the `.continent.locked` CSS to include the brighter opacity and glow filter

### 3. Era-Based Color Shifts
- Define per-era color palettes that subtly shift each continent's fill color:
  - **Pangea (step 0)**: warm-shifted -- all colors slightly warmer/more saturated (ancient supercontinent feel)
  - **Break Apart (step 1)**: colors begin cooling -- blues deepen, greens shift teal
  - **Cretaceous (step 2)**: modern-leaning colors -- close to the base COLORS but slightly more vivid
- In `goToStep()`, update each continent path's `fill` attribute to the era-appropriate color
- Add a CSS `transition: fill 0.8s ease` on continent paths so color changes animate smoothly

### 4. Ocean Background Transition
- Transition the ocean `<rect>` fill between eras:
  - Pangea: `#091a30` (deep dark)
  - Break Apart: `#0a1e2e` (slightly warmer)
  - Cretaceous: `#081e28` (teal tint)
- Add CSS transition on the rect fill

## Technical Changes (all in `public/pangea.html`)

### CSS additions (~15 lines)
- `.continent path { transition: fill 0.8s ease; }`
- `.continent:not(.locked) { mix-blend-mode: screen; }` -- color mixing on overlap
- `.continent.locked { opacity: 0.9 !important; }` -- brighter when placed
- `.continent.locked path { filter: drop-shadow(0 0 10px var(--glow-color)); }` -- per-continent glow
- `@keyframes lock-burst` -- brief brightness pulse on snap (0.6s)
- `#mapSvg rect { transition: fill 0.8s ease; }` -- ocean color transition

### JavaScript changes

**New constant: `ERA_COLORS`** -- object mapping step index to per-continent color overrides:
```text
ERA_COLORS = {
  0: { namerica:"#e88050", samerica:"#50c068", africa:"#e0a838", ... },  // warmer
  1: { namerica:"#d07040", samerica:"#40a858", africa:"#c89828", ... },  // cooling
  2: { namerica:"#e07848", samerica:"#48b860", africa:"#d8a030", ... },  // near-base
}
```

**`goToStep()` function** (line 707):
- After resetting positions, update each continent path fill to `ERA_COLORS[step][id]`
- Update ocean rect fill based on step
- Set CSS custom property `--glow-color` on each continent group for the glow filter

**`snapContinent()` function** (line 661):
- After locking, add a brief `lock-burst` animation class, remove after 600ms
- The glow comes from the updated `.locked` CSS

**`buildContinents()` function** (line 411):
- Set `style.setProperty('--glow-color', COLORS[id])` on each continent group for the CSS glow variable

### What stays the same
- All game logic, quiz system, drag mechanics, fossil/mountain overlays, translations
- The existing `pulse-glow` hint animation
- No new dependencies

## Files Modified
- `public/pangea.html` -- CSS and JS additions for color mixing, era shifts, and lock effects
