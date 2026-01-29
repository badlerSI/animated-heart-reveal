

# Fix Mobile Overlap for "the light" / "The Heavy" Buttons

## The Problem
The DualWaveButton uses fixed pixel offsets in a 256px tall container. On mobile:
- "the light" is at `top: 72px, left: 62px`
- "The Heavy" is at `bottom: 72px, right: 72px`
- Both have `w-1/2 h-1/2` sizing

On narrow screens, the text collides in the middle.

## Solution: Responsive Stacked Layout for Mobile

On mobile, switch from the diagonal artistic layout to a clean **vertical stack** - keeping the wave divider as a horizontal separator between them.

```text
DESKTOP (keep as-is)          MOBILE (new)
+------------------+          +------------------+
|  the light       |          |                  |
|       \          |          |    the light     |
|        \~~~      |          |    yours alone   |
|         ~~~\     |          |                  |
|             \    |          |  ~~~~~~~~~~~~~~~  |
|        The Heavy |          |                  |
+------------------+          |    The Heavy     |
                              |  serve the room  |
                              |                  |
                              +------------------+
```

## Implementation

### 1. Add Mobile Detection
Import the existing `useIsMobile` hook to conditionally render layouts.

### 2. Create Two Layout Modes

**Desktop (md and up):** Keep the current diagonal layout with wave image rotated -20deg.

**Mobile:** 
- Stack the two buttons vertically with flexbox
- Wave divider sits horizontally between them (rotate 0deg, smaller width)
- Remove absolute positioning - use natural flow
- Add touch-friendly tap targets

### 3. Preserve the Essence
- Same fonts, colors, and glow effects
- Same taglines ("yours alone" / "serve the room")
- Wave still visually separates the two
- Hover/tap states still work

---

## Technical Changes

| Aspect | Desktop | Mobile |
|--------|---------|--------|
| Container | `relative h-64` | `flex flex-col items-center` |
| Wave rotation | `-20deg` | `0deg` (horizontal) |
| Wave width | `w-[42rem]` | `w-64` or similar |
| Button positions | Absolute with px offsets | Flex items, natural flow |
| Hover zones | clipPath triangles | Not needed (simple tap) |
| Container height | `h-64` fixed | Auto based on content |

The desktop experience remains completely unchanged - we only add mobile-specific styling using Tailwind's responsive prefixes and conditional rendering for the complex hover zones.

