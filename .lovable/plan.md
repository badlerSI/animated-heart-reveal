

# Fix: "The Heavy" Text Visibility

## Root Cause Identified
The z-index is correct (`z-20`), but **the `clipPath` is cutting off the visible area** of "The Heavy" link. 

Looking at line 85:
```jsx
clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
```

This creates a triangle in the bottom-right corner. Combined with the rotated wave image crossing through that area, the text appears behind the wave even though z-index says it should be on top.

The issue: The wave PNG itself likely has visual content that extends into the bottom-right region where "The Heavy" text lives.

## The Fix
**Remove the `clipPath` from "The Heavy" link** and rely solely on z-index for layering. The text will render fully on top of the wave.

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

| Line | Change |
|------|--------|
| 84-86 | Remove the `clipPath` style from "The Heavy" Link |

## Code Diff

```diff
  {/* Lower-Right Region: The Heavy */}
  <Link
    to="/heavy"
    className="absolute bottom-0 right-0 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
    onMouseEnter={() => setHoveredSide("right")}
    onMouseLeave={() => setHoveredSide(null)}
-   style={{
-     clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
-   }}
  >
```

## Optional: Remove clipPath from "the light" too
For consistency, we can also remove the clipPath from "the light" link. The extended hover zones already handle the triangular click areas, so the visible text links don't need to be clipped.

```diff
  {/* Upper-Left Region: the light */}
  <Link
    to="/light"
    className="absolute top-0 left-0 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
    onMouseEnter={() => setHoveredSide("left")}
    onMouseLeave={() => setHoveredSide(null)}
-   style={{
-     clipPath: "polygon(0 0, 100% 0, 0 100%)"
-   }}
  >
```

## Result
- Both text labels render fully visible at `z-20`
- Wave stays at `z-[1]` as background decoration
- Extended hover zones at `z-0` still provide larger click targets
- No clipping interferes with text visibility

