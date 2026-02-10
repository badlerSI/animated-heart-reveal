

# Add Chromebook Setup Page and Downloadable Files

## Overview
Create a `/chromebook` page styled to match your existing dark/cyan aesthetic, host the installer script and support files as static downloads, and update the `install.sh` branding text to say "Soul Interface" consistently.

## What Gets Built

### 1. Static files in `public/`

| File | Purpose |
|------|---------|
| `public/install.sh` | Installer script (served at `/install.sh` for `curl` access) |
| `public/downloads/README.txt` | Downloadable README for teachers |
| `public/downloads/HOSTING.md` | Downloadable hosting guide |

The `install.sh` will be copied as-is from your upload. The Docker container logic, kiosk mode, and boot menu all stay exactly as you wrote them -- those run on the Chromebook, not in the browser.

### 2. New `/chromebook` page (`src/pages/Chromebook.tsx`)

Fully styled React page following the same patterns as your Education page:

- **Background**: `#0a0a0f` dark, `#12121a` card backgrounds
- **Accent**: `#1bbdc5` cyan (matching site brand color)
- **Typography**: Helvetica (site standard)
- **Icons**: Lucide React in cyan (no emojis)
- **Animations**: Framer Motion `initial`/`whileInView` fade-ins

**Page sections:**

1. **Hero** -- "SOUL for Chromebook" title + subtitle
2. **Quick Install card** -- Dark gradient card with monospace `curl` command and a copy-to-clipboard button
3. **Setup Steps** -- 4 numbered cards with Lucide icons (Enable Linux, Run Installer, Log Out/In, Done)
4. **For Teachers** -- Custom server URL instructions + how to exit SOUL (styled as cyan-bordered info cards)
5. **Troubleshooting** -- Accordion FAQ using the same shadcn/ui Accordion component and styling from your existing `FAQSection.tsx` (`bg-white/5`, `border-white/10`, cyan highlight on open)
6. **Downloads** -- Links to README.txt and HOSTING.md
7. **DualWaveButton** -- Same component as other pages
8. **PageFooter** -- Site navigation

### 3. Route registration (`src/App.tsx`)
- Import `Chromebook` page component
- Add `<Route path="/chromebook" element={<Chromebook />} />`

### 4. Footer navigation (`src/components/PageFooter.tsx`)
- Add `{ label: "Chromebook", path: "/chromebook" }` to the `navLinks` array

## What About the Docker App?

The `install.sh` script builds and runs a Docker container with Chromium in kiosk mode. This all executes on the Chromebook's Linux environment -- it's a bash/Docker app, not a web app. The React site can host the script and provide setup instructions, but the container itself (Chromium kiosk, boot menu, start/stop scripts) runs independently on the user's machine.

The script's terminal output branding (the ASCII box art saying "SOUL Learning System") will be kept as-is since that runs in a terminal, not a browser.

## Files Summary

| File | Action |
|------|--------|
| `public/install.sh` | Create (from upload) |
| `public/downloads/README.txt` | Create (from upload) |
| `public/downloads/HOSTING.md` | Create (from upload) |
| `src/pages/Chromebook.tsx` | Create |
| `src/App.tsx` | Add route + import |
| `src/components/PageFooter.tsx` | Add nav link |

## Technical Details

- Vite serves `public/` files as static assets, so `curl -fsSL https://soulinterface.ai/install.sh | bash` will work once deployed
- The copy-to-clipboard button will use `navigator.clipboard.writeText()` with a toast notification via sonner
- Accordion troubleshooting uses the existing `@radix-ui/react-accordion` component, styled identically to `FAQSection.tsx`
- The `LOVABLE-INSTRUCTIONS.md` file is not hosted publicly (it's an internal setup guide)
- The page will be fully responsive (mobile-first) following the same breakpoint patterns as the Education page
