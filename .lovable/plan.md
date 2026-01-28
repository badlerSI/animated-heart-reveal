

# Root Cause Analysis

## The Real Problem
Your `Wave-3.png` wave image was designed for display on a **white/light background**. The wispy brush stroke effects around the cyan core contain semi-transparent dark gray pixels that:
- Look natural on white backgrounds (gray on white = subtle shadow)
- Look like dark smudges on dark backgrounds (gray on dark = visible darkness)

This is why "The Heavy" text is being obscured - the dark gray brush strokes in the wave's wispy edges are covering it.

## Solution: Export a Dark-Background-Optimized Version

### Option 1: Re-export from Your Design Tool (Best)
Create a version specifically for dark backgrounds:
1. In Photoshop/Illustrator, select only the **cyan glow core** without the dark wispy brush strokes
2. OR invert the brush stroke colors so they're light/white instead of dark gray
3. Export with true alpha transparency (checkered background visible)

### Option 2: CSS Blend Mode Workaround
Apply `mix-blend-mode: screen` to the image in `DualWaveButton.tsx`:

```jsx
<img 
  src="/lovable-uploads/wave-transparent-v3.png"
  className="absolute left-1/2 top-1/2 w-[42rem] h-auto pointer-events-none z-10"
  style={{
    transform: "translate(-50%, -50%) rotate(-20deg)",
    mixBlendMode: "screen"  // Makes dark pixels transparent
  }}
/>
```

**How `screen` blend mode works:**
- Dark pixels (black/gray) become transparent
- Light pixels (cyan glow, white) remain visible
- This effectively removes those dark wispy brush strokes

**Trade-off:** May slightly reduce the intensity of the cyan glow since it's blending with the dark background.

### Option 3: Use a Different Wave Asset
If you have or can create a wave with:
- Pure cyan/white glow on true transparent background
- No dark brush stroke effects
- Just the glowing S-curve

This would work perfectly without any CSS hacks.

## Files to Modify

| File | Change |
|------|--------|
| `src/components/DualWaveButton.tsx` | Add `mixBlendMode: "screen"` to the img style (line 38-40) |

## Expected Result
- The dark wispy brush strokes become invisible
- The cyan glow core remains visible
- "The Heavy" text is no longer obscured
- Wave sits cleanly over the dark page background

