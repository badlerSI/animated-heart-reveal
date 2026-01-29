

# Adjust Mobile Button Vertical Spacing

## Current State
The mobile buttons have horizontal offsets but are vertically equidistant from the wave divider. The user wants:
- **"the light"** → move **down** by ~1 line height (~2rem for text-2xl)
- **"The Heavy"** → move **up** by the same amount

## Solution
Add margin adjustments to push each button closer to the wave divider:

```text
CURRENT                          DESIRED
                                  
   the light                         the light
   yours alone                       yours alone
                                  
       ↓ gap-4                           ↓ reduced gap (mt-6)
                                  
   ~~~~~~~~~~~~~~~                ~~~~~~~~~~~~~~~
                                  
       ↓ gap-4                           ↓ reduced gap (negative margin)
                                  
          The Heavy                      The Heavy
        serve the room                 serve the room
```

## Technical Changes - DualWaveButton.tsx (Mobile Only)

| Element | Current | New |
|---------|---------|-----|
| "the light" Link | `py-6 px-8` | `pt-6 pb-2 px-8 mt-6` (add top margin to push down, reduce bottom padding) |
| "The Heavy" Link | `py-6 px-8` | `pt-2 pb-6 px-8 -mt-2` (negative top margin to pull up, reduce top padding) |

The `text-2xl` class is approximately 1.5rem (24px). Adding `mt-6` (1.5rem) to "the light" pushes it down by roughly one line height. Using `-mt-2` on "The Heavy" pulls it up slightly toward the wave.

Desktop layout remains completely unchanged.

