

# Fix: Move Wave to Back Layer

## The Simple Fix
Drop the wave image's `z-index` below the text labels. Since text links are at `z-20`, putting the wave at `z-1` (or even `z-0`) ensures it renders behind the text.

## Changes to Make

**File:** `src/components/DualWaveButton.tsx`

| Line | Current | Change To |
|------|---------|-----------|
| 37 | `z-10` | `z-[1]` |

## Code Diff

```diff
  {/* Wave Divider - Clean transparent PNG */}
  <img 
    src="/lovable-uploads/wave-transparent-v3.png"
    alt=""
-   className="absolute left-1/2 top-1/2 w-[42rem] h-auto pointer-events-none z-10"
+   className="absolute left-1/2 top-1/2 w-[42rem] h-auto pointer-events-none z-[1]"
    style={{
      transform: "translate(-50%, -50%) rotate(-20deg)"
    }}
  />
```

## Final Z-Index Stack

| Layer | Z-Index | Element |
|-------|---------|---------|
| Bottom | `z-0` | Extended hover zones |
| Middle | `z-[1]` | Wave image |
| Top | `z-20` | Text links ("the light", "The Heavy") |

## Result
- Wave renders behind everything visible
- Text labels ("the light" and "The Heavy") are fully visible on top
- Hover zones still work for expanded click areas
- Wave still provides visual separation as a background decoration

