
# Adjust Vertical Positioning of Text Labels

## Current State
- **"the light"**: Positioned at `top-0` with `pt-4` padding (anchored to top edge)
- **"The Heavy"**: Positioned at `bottom-0` with `pb-4` padding (anchored to bottom edge)

## The Fix
Move both labels toward the center by the same amount:
- Push "the light" **down** by changing `top-0` to `top-8`
- Push "The Heavy" **up** by changing `bottom-0` to `bottom-8`

This shifts each label 2rem (32px) toward the diagonal wave divider, creating a tighter, more balanced composition.

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

| Line | Current | Change To |
|------|---------|-----------|
| 46 | `top-0` | `top-8` |
| 78 | `bottom-0` | `bottom-8` |

## Code Diff

```diff
  {/* Upper-Left Region: the light */}
  <Link
    to="/light"
-   className="absolute top-0 left-0 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
+   className="absolute top-8 left-0 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
    ...
  >

  {/* Lower-Right Region: The Heavy */}
  <Link
    to="/heavy"
-   className="absolute bottom-0 right-0 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
+   className="absolute bottom-8 right-0 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
    ...
  >
```

## Result
- "the light" moves down 32px from the top
- "The Heavy" moves up 32px from the bottom
- Both labels shift symmetrically toward the wave divider
- The overall layout feels more centered and cohesive
