
# Mobile "Tap to Reveal" Text on Heavy Page

## Overview
Update the X-Ray reveal instruction on /heavy to say "tap to reveal.." on mobile devices while keeping "hover to reveal.." on desktop.

---

## Changes

### 1. Import Mobile Hook
Add the `useIsMobile` hook import to detect device type.

### 2. Update Instruction Text
Change line 116 to show device-appropriate text:
- **Mobile**: "tap to reveal.."
- **Desktop**: "hover to reveal.."

---

## Technical Details

| Change | Location | Current | New |
|--------|----------|---------|-----|
| Import | Line 1-6 | No mobile hook | Add `useIsMobile` import |
| Text | Line 116 | `"hover to reveal.."` | `isMobile ? "tap to reveal.." : "hover to reveal.."` |

**Code change:**
```tsx
// Add import
import { useIsMobile } from "@/hooks/use-mobile";

// Inside component
const isMobile = useIsMobile();

// Update instruction text (line 116)
{isRevealed ? "the soul within" : (isMobile ? "tap to reveal.." : "hover to reveal..")}
```

The "the soul within" revealed state text remains the same for both mobile and desktop.
