
# Update "the light" Product Page

## Changes to Make

**File:** `src/pages/Light.tsx`

### 1. Update Hero Subtitle (Line 90)
Replace the tagline text:
- **Current:** `polished metal. silent power.`
- **New:** `Enough compute for the whole family.`

### 2. Remove Case Spec (Lines 35-39)
Delete the "case" entry from the specs array:
```tsx
{
  icon: Box,
  name: "case",
  value: "polished metal enclosure",
},
```

Also remove the unused `Box` import from lucide-react since it will no longer be needed after removing the case spec (the portability spec also uses `Box`, so we'll keep it).

---

## Technical Details

| Change | Location | Before | After |
|--------|----------|--------|-------|
| Hero tagline | Line 90 | `polished metal. silent power.` | `Enough compute for the whole family.` |
| Specs array | Lines 35-39 | Case spec object | Removed entirely |

The specs grid will now show 6 items instead of 7, which will display nicely in the 2-column (mobile) and 3-column (desktop) grid layout.
