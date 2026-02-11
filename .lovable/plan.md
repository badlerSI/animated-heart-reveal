

# Add Per-Platform Certificate Installer Buttons to Student and Teacher Pages

## Overview
Both the Student and Teacher pages will get a new "Security Setup" section with per-platform download buttons. Each button directly downloads the appropriate certificate installer file for that device type -- no ZIPs, no complexity. This lets students and teachers install the SOUL CA certificate so HTTPS connections work without security warnings.

## Shared Assets

Copy the uploaded installer files to `public/downloads/cert-installers/`:

| Source | Destination |
|--------|-------------|
| `install-windows.bat` | `public/downloads/cert-installers/install-windows.bat` |
| `install-mac.command` | `public/downloads/cert-installers/install-mac.command` |
| `install-chromeos.sh` | `public/downloads/cert-installers/install-chromeos.sh` |
| `install-ios.mobileconfig.xml` | `public/downloads/cert-installers/install-ios.mobileconfig` |
| `SOUL-Learning-CA.crt` | `public/downloads/cert-installers/SOUL-Learning-CA.crt` |
| `README-6.txt` | `public/downloads/cert-installers/README.txt` |

## Student Page Changes (`src/pages/Student.tsx`)

Add a new section between the "3 Easy Steps" and "Need Help?" sections:

**"First Time? Install Security Certificate"**
- Brief kid-friendly explanation: "Your teacher may ask you to install this so SOUL works without warnings."
- Four styled buttons in a 2x2 grid, one per platform:
  - **Windows** -- downloads `install-windows.bat`
  - **Mac** -- downloads `install-mac.command`
  - **Chromebook** -- downloads `install-chromeos.sh`
  - **iPad** -- downloads `install-ios.mobileconfig`
- Each button uses an `<a>` tag with `download` attribute pointing to `/downloads/cert-installers/...`
- Simple one-line instruction under each: "Run as administrator", "Double-click and enter password", "Open Terminal and run it", "Open file, then enable trust in Settings"

Also add a new FAQ entry:
- "I see a security warning" -- "Ask your teacher to help you install the security certificate using the buttons above."

## Teacher Page Changes (`src/pages/Teacher.tsx`)

**Update Teacher Dashboard port** from `3002` to `3001` (HTTPS) throughout:
- Quick Reference table
- Teacher Dashboard section
- Backup IP references

**Add "Teacher Device Setup" section** (after Quick Reference, before Student Setup):
- Explanation: "Install the SOUL certificate so you can access the dashboard securely at https://soul.local:3001"
- Same 4 per-platform buttons as the Student page, with slightly more detailed instructions per platform
- Extra note for iOS about enabling Full Trust in Settings

**Update/add troubleshooting FAQ**:
- "Certificate warning still appears" -- restart browser; iOS full trust step

**Update `TEACHER-SETUP.txt`**: Replace with the uploaded `TEACHER-SETUP-2.txt`.

## Files Summary

| File | Action |
|------|--------|
| `public/downloads/cert-installers/install-windows.bat` | Create (copy) |
| `public/downloads/cert-installers/install-mac.command` | Create (copy) |
| `public/downloads/cert-installers/install-chromeos.sh` | Create (copy) |
| `public/downloads/cert-installers/install-ios.mobileconfig` | Create (copy, renamed) |
| `public/downloads/cert-installers/SOUL-Learning-CA.crt` | Create (copy) |
| `public/downloads/cert-installers/README.txt` | Create (copy) |
| `public/downloads/TEACHER-SETUP.txt` | Replace with uploaded version |
| `src/pages/Student.tsx` | Add certificate download section + new FAQ |
| `src/pages/Teacher.tsx` | Add certificate section, update ports to 3001/HTTPS, update FAQ |

## Technical Details

Each download button is a simple anchor link -- no JavaScript needed:

```tsx
<a
  href="/downloads/cert-installers/install-windows.bat"
  download
  className="..."
>
  Windows
</a>
```

The buttons will use platform-appropriate Lucide icons (Monitor for Windows, Laptop for Mac, etc.) and match the existing dark/cyan design language.

