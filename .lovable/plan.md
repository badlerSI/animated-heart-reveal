
# Shift Buttons: Desktop Heavy Left, Mobile Light Down

## Changes Required

### 1. Desktop: Shift "The Heavy" 20px left
- Current: `right-[72px]` on line 149
- New: `right-[92px]` (72 + 20 = 92px from right edge)

### 2. Mobile: Shift "the light" 20px down
- Current: `mt-20` on line 38 (which is 5rem = 80px)
- New: `mt-[100px]` (80 + 20 = 100px from current position)

## Technical Details

| Target | Platform | Current | New |
|--------|----------|---------|-----|
| The Heavy | Desktop | `right-[72px]` | `right-[92px]` |
| the light | Mobile | `mt-20` | `mt-[100px]` |

Both changes use Tailwind's arbitrary value syntax `[Xpx]` for precise pixel control.
