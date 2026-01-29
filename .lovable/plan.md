
# More Movement for Mobile Buttons

## Current State
- **"the light"**: `ml-6 mt-6` (left margin, top margin to push down)
- **"The Heavy"**: `mr-6 -mt-2` (right margin, slight negative top margin)
- **Gap**: `gap-4` between flex items

## Requested Changes
- **"the light"** → more SW (more left + more down)
- **"The Heavy"** → more NE (more right + more up)
- Tighten the gap that seems to have grown

## Solution

| Element | Current | New |
|---------|---------|-----|
| Flex container | `gap-4` | `gap-2` (tighter spacing) |
| "the light" Link | `ml-6 mt-6` | `ml-4 mt-10` (slightly more left via less margin, more down via larger top margin) |
| "The Heavy" Link | `mr-6 -mt-2` | `mr-4 -mt-4` (slightly more right via less margin, more up via larger negative margin) |

Wait - to go more **left** we need a smaller left margin? No, the `self-start` pushes it left, and `ml-6` adds spacing from the edge. To go more left (closer to edge), we'd reduce `ml`, but the user said "more SW" which is more left AND down. Let me reconsider:

Actually for a more pronounced diagonal effect:
- **More left**: reduce `ml-6` to `ml-4` 
- **More down**: increase `mt-6` to `mt-8`
- **More right**: reduce `mr-6` to `mr-4`
- **More up**: increase negative margin from `-mt-2` to `-mt-4`

## Technical Changes

| Element | Current | New |
|---------|---------|-----|
| Flex container | `gap-4` | `gap-2` |
| "the light" Link | `ml-6 ... mt-6` | `ml-4 ... mt-8` |
| "The Heavy" Link | `mr-6 ... -mt-2` | `mr-4 ... -mt-4` |

Desktop layout remains completely unchanged.
