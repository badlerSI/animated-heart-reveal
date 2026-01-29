

# Fix Mobile Button Positioning + Product Image Loading

## Issue 1: Mobile Button Positioning

### Current State
The mobile layout uses centered flex items (`items-center`) for both buttons, making them perfectly centered. The user wants:
- "the light" → moved a bit **left and down**
- "The Heavy" → moved a bit **right and up**

### Solution
Apply subtle alignment adjustments using `self-start` / `self-end` and margin tweaks on mobile only:

```text
CURRENT (perfectly centered)     DESIRED (offset positions)
                                  
      the light                      the light
      yours alone                    yours alone
                                  
   ~~~~~~~~~~~~~~~                ~~~~~~~~~~~~~~~
                                  
      The Heavy                          The Heavy
    serve the room                     serve the room
```

### Technical Changes - DualWaveButton.tsx

| Element | Current | New |
|---------|---------|-----|
| "the light" Link | `items-center` | `items-start ml-4` (left-aligned, slight left margin) |
| "The Heavy" Link | `items-center` | `items-end mr-4` (right-aligned, slight right margin) |
| Wave gap | `gap-6` | `gap-4` (tighter to push items outward visually) |

---

## Issue 2: Product Images Loading After Page Renders

### Root Cause Analysis
The current `useImagePreloader` hook:
1. Starts loading ONLY after the component mounts (in `useEffect`)
2. Image download begins AFTER React renders the page
3. Large JPGs take time to download, causing visible delay

### Current Hook Behavior
```text
Page loads → React mounts → useEffect runs → Image.src set → Download starts → setImageLoaded(true)
                                              ^--- This delay is visible
```

### Solution: Multi-pronged Approach

**1. Add `<link rel="preload">` in index.html for critical product images**

This starts downloading images BEFORE React even mounts:
```html
<link rel="preload" as="image" href="/lovable-uploads/heavy-wood.jpg">
<link rel="preload" as="image" href="/lovable-uploads/heavy-skeleton.jpg">
<link rel="preload" as="image" href="/lovable-uploads/light-product.jpg">
```

**2. Show a skeleton placeholder while loading**

Instead of blank space, show a subtle loading state using the existing Skeleton component:
- Maintains layout stability (prevents layout shift)
- User sees immediate content
- Smooth fade transition once image is ready

**3. Add `loading="eager"` and `fetchpriority="high"` to hero images**

Browser hints to prioritize these images:
```tsx
<img
  src="/lovable-uploads/heavy-wood.jpg"
  loading="eager"
  fetchPriority="high"
  ...
/>
```

---

## Implementation Summary

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/DualWaveButton.tsx` | Adjust mobile button alignment with `self-start`/`self-end` and margins |
| `index.html` | Add `<link rel="preload">` for 3 product images |
| `src/pages/Heavy.tsx` | Add skeleton placeholder, `loading="eager"`, `fetchPriority="high"` |
| `src/pages/Light.tsx` | Add skeleton placeholder, `loading="eager"`, `fetchPriority="high"` |

### Expected Results

1. **Mobile buttons**: "the light" sits left/down, "The Heavy" sits right/up, creating visual separation
2. **Image loading**: Images start downloading immediately when browser parses HTML, appear much faster
3. **Loading state**: Elegant skeleton pulse while images load (rare, but graceful fallback)

