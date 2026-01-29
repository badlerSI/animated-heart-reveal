
# Move Labels Horizontally Toward Center

## Current State
- **"the light"**: Positioned at `left-0` (anchored to left edge)
- **"The Heavy"**: Positioned at `right-0` (anchored to right edge)

## The Fix
Move both labels toward the center by the same amount:
- Push "the light" **right** by changing `left-0` to `left-8`
- Push "The Heavy" **left** by changing `right-0` to `right-8`

This shifts each label 2rem (32px) toward the center, matching the vertical adjustment we just made.

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

| Line | Current | Change To |
|------|---------|-----------|
| 46 | `left-0` | `left-8` |
| 78 | `right-0` | `right-8` |

## Code Diff

```diff
  {/* Upper-Left Region: the light */}
  <Link
    to="/light"
-   className="absolute top-8 left-0 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
+   className="absolute top-8 left-8 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
    ...
  >

  {/* Lower-Right Region: The Heavy */}
  <Link
    to="/heavy"
-   className="absolute bottom-8 right-0 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
+   className="absolute bottom-8 right-8 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
    ...
  >
```

## Result
- "the light" moves 32px inward from the left
- "The Heavy" moves 32px inward from the right
- Both labels shift symmetrically toward the wave divider
- Combined with the previous vertical shift, labels now cluster closer to the diagonal center
