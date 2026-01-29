

# Add PageFooter to Homepage (Without Light/Heavy Links)

## Overview
Replace the simple Footer component on the homepage with the unified PageFooter component used on other pages, but exclude "The Light" and "The Heavy" navigation links.

## Changes

### 1. Update PageFooter Component
**File:** `src/components/PageFooter.tsx`

Add an `excludeLinks` prop to allow filtering out specific navigation items:

```tsx
interface PageFooterProps {
  glowing?: boolean;
  accentColor?: string;
  mutedColor?: string;
  dimColor?: string;
  excludeLinks?: string[];  // NEW: paths to exclude from nav
}
```

Filter the `navLinks` array when rendering to exclude any paths listed in `excludeLinks`.

### 2. Update ScrollContent to Use PageFooter
**File:** `src/components/ScrollContent.tsx`

- Import `PageFooter` instead of `Footer`
- Render `PageFooter` with `excludeLinks={["/light", "/heavy"]}`

## Code Changes

**PageFooter.tsx** - Add filtering logic:
```tsx
// In the nav rendering:
{navLinks
  .filter(link => !excludeLinks?.includes(link.path))
  .map((link) => { ... })}
```

**ScrollContent.tsx** - Swap footer:
```tsx
import PageFooter from "../PageFooter";

// At the bottom of the component:
<PageFooter excludeLinks={["/light", "/heavy"]} />
```

## Result
- Homepage gets the same unified navigation footer as other pages
- "The Light" and "The Heavy" links are excluded from the homepage footer (since they're already accessible via the DualWaveButton)
- Other pages continue to show all links as before

