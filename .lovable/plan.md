

# Shift Labels 20px More Toward Center (Both Axes)

## Current State
- **"the light"**: `top-8 left-8` (32px from top-left corner)
- **"The Heavy"**: `bottom-8 right-8` (32px from bottom-right corner)

## The Change
Add 20 pixels to each position, shifting both labels closer to the center:
- **New total offset**: 32px + 20px = 52px

Since 52px isn't a standard Tailwind spacing value, we'll use arbitrary values for precision.

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

| Label | Current | New |
|-------|---------|-----|
| "the light" | `top-8 left-8` | `top-[52px] left-[52px]` |
| "The Heavy" | `bottom-8 right-8` | `bottom-[52px] right-[52px]` |

## Code Diff

```diff
  {/* Upper-Left Region: the light */}
  <Link
    to="/light"
-   className="absolute top-8 left-8 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
+   className="absolute top-[52px] left-[52px] w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
    ...
  >

  {/* Lower-Right Region: The Heavy */}
  <Link
    to="/heavy"
-   className="absolute bottom-8 right-8 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
+   className="absolute bottom-[52px] right-[52px] w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
    ...
  >
```

## Result
- Both labels shift 20px closer to the center on both axes
- "the light" now 52px from top and left edges
- "The Heavy" now 52px from bottom and right edges
- Symmetric positioning maintained

