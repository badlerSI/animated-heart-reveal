

# Increase Font Size for "serve the room" Only

## Current State
Both taglines currently use `text-xs` (12px on mobile) and `text-xs md:text-[11px]` (desktop):
- "yours alone" - keep as is
- "serve the room" - make bigger

## Changes

### Mobile (line 76)
- Current: `text-xs` (12px)
- New: `text-sm` (14px)

### Desktop (line 170)
- Current: `text-xs md:text-[11px]`
- New: `text-xs md:text-[13px]`

## Files to Modify
- `src/components/DualWaveButton.tsx` (2 locations)

## Technical Details

Only the "serve the room" spans will be updated:

| Location | Current | New |
|----------|---------|-----|
| Mobile (line 76) | `text-xs` | `text-sm` |
| Desktop (line 170) | `text-xs md:text-[11px]` | `text-xs md:text-[13px]` |

