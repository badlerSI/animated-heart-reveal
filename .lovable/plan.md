
# Fix: Z-Index Layering for Wave Image

## The Simple Solution
Move the wave image **behind** the text labels by lowering its `z-index` from `z-10` to `z-0`. The text links already have `z-10`, so they'll render on top.

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

| Line | Current | Change To |
|------|---------|-----------|
| 37 | `className="... z-10"` | `className="... z-0"` |
| 39-40 | `mixBlendMode: "screen"` | Remove this line |

## Code Diff Preview

```diff
  {/* Wave Divider - Clean transparent PNG */}
  <img 
    src="/lovable-uploads/wave-transparent-v3.png"
    alt=""
-   className="absolute left-1/2 top-1/2 w-[42rem] h-auto pointer-events-none z-10"
+   className="absolute left-1/2 top-1/2 w-[42rem] h-auto pointer-events-none z-0"
    style={{
-     transform: "translate(-50%, -50%) rotate(-20deg)",
-     mixBlendMode: "screen"
+     transform: "translate(-50%, -50%) rotate(-20deg)"
    }}
  />
```

## Result
- Wave renders behind both text labels
- "The Heavy" is fully visible
- No blend mode hacks needed
- Wave still visually divides the two regions

## Technical Details
The z-index stack will be:
- `z-0`: Wave image (background decoration)
- `z-10`: Text links ("the light" and "The Heavy")
