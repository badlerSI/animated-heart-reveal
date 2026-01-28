

# Fix: Simplify Z-Index Layering for Dual Wave Button

## Root Cause
The current component has **overlapping elements fighting for z-index priority**:
1. Wave image at `z-0`
2. Extended hover zones at `z-0` with full-size invisible Links covering the container
3. Text links at `z-10` that should be on top

The extended hover zones (lines 67-76 and 102-111) with `w-full h-full` are creating invisible blocking layers that interfere with the text visibility and click behavior.

## The Fix
Restructure z-index layers clearly:

| Element | Current | New |
|---------|---------|-----|
| Extended hover zones | `z-0` | `z-0` |
| Wave image | `z-0` | `z-10` |
| Text Links ("the light", "The Heavy") | `z-10` | `z-20` |

This ensures:
1. Hover zones are at the bottom for expanded click areas
2. Wave image renders above hover zones as visual decoration
3. Text labels render on top of everything and are always visible/clickable

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

```text
Line 37: Wave image
  - Change: z-0 → z-10

Line 46: "the light" Link
  - Change: z-10 → z-20

Line 81: "The Heavy" Link  
  - Change: z-10 → z-20
```

## Code Preview

```jsx
{/* Wave Divider */}
<img 
  className="... z-10"  // Was z-0, now middle layer
/>

{/* Upper-Left: the light */}
<Link className="... z-20">  // Was z-10, now top layer
  ...
</Link>

{/* Lower-Right: The Heavy */}
<Link className="... z-20">  // Was z-10, now top layer
  ...
</Link>
```

## Result
- Text labels ("the light" and "The Heavy") always render on top and are clickable
- Wave image sits in the middle as visual decoration
- Extended hover zones remain at bottom for larger click targets
- No CSS blend mode hacks needed

