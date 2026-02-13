

# Add /pangea Easter Egg Page

## Overview
Create the Pangea game as a hidden page and weave a subtle link into the education page's features section using the existing `narrative-link` style (glowing cyan text that turns white on hover).

## Changes

### 1. Create the game page
- Copy `Pangea.html` to `public/pangea.html`
- Create `src/pages/Pangea.tsx` as a full-viewport iframe wrapper loading `/pangea.html` with a dark `#080e1a` background and no visible UI chrome

### 2. Add the route
- Add `import Pangea` and a `/pangea` route in `src/App.tsx` (no nav links anywhere)

### 3. Add the easter egg on the education page (`src/pages/Homeschool.tsx`)
- Import `Link` from `react-router-dom` and the `narrativeLink.css` stylesheet
- After the features grid closing `</div>` (line 327), add a small paragraph like:

  *"The Chromebook Supercharger lets students run heavy creative tools they never could before, or lightweight esoteric simulations you vibe coded yourself for one lesson."*

  Where **"esoteric simulations"** is a `<Link to="/pangea" className="narrative-link">` styled identically to the homepage narrative links (glowing cyan, white on hover)
- The paragraph will be a `motion.p` with fade-in animation, styled in `cyanMuted` color to match surrounding body text, centered under the feature cards

## Technical Details
- Reuses the existing `narrative-link` CSS class from `src/components/home/narrativeLink.css`
- Matches the `Link` + `className="narrative-link"` pattern used in `ClosingCTASection.tsx`
- The paragraph blends naturally into the features section as a closing thought about the Chromebook Supercharger feature

## Files Created
- `public/pangea.html` (uploaded game)
- `src/pages/Pangea.tsx` (iframe wrapper)

## Files Modified
- `src/App.tsx` (add route)
- `src/pages/Homeschool.tsx` (add paragraph with easter egg link, import Link and CSS)
