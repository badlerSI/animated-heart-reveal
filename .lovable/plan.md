
# Improve Tagline Readability

## Current Issue
The taglines "yours alone" and "serve the room" are difficult to read because:
- Font size is very small: `text-[10px]`
- Color is too dim: `text-white/25` (25% opacity)
- No glow effect on the taglines

## Proposed Changes

### Font Size
- **Current**: `text-[10px]` (10px)
- **New Mobile**: `text-xs` (12px)
- **New Desktop**: `text-[11px]` (11px)

### Color Opacity
- **Current**: `text-white/25` (25% opacity)
- **New**: `text-white/50` (50% opacity - doubles visibility)

### Add Subtle Glow
Add a soft text-shadow glow that matches each button's accent color:
- "yours alone" → subtle cyan glow: `text-shadow: 0 0 8px rgba(27, 189, 197, 0.3)`
- "serve the room" → subtle amber glow: `text-shadow: 0 0 8px rgba(212, 165, 116, 0.3)`

## Files to Modify
- `src/components/DualWaveButton.tsx`

## Locations (4 total spans)

| Location | Line | Element |
|----------|------|---------|
| Mobile | 40 | "yours alone" |
| Mobile | 73 | "serve the room" |
| Desktop | 121 | "yours alone" |
| Desktop | 161 | "serve the room" |

## Technical Details

Each tagline span will be updated from:
```tsx
<span className="... text-[10px] ... text-white/25 ...">
```

To:
```tsx
<span 
  className="... text-xs md:text-[11px] ... text-white/50 ..."
  style={{ textShadow: "0 0 8px rgba(COLOR)" }}
>
```

The glow uses a tight 8px blur radius per the iOS Safari compatibility guidelines.
