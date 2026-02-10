

# Simplify Chromebook Page: One-Click Download + Remove from Navigation

## Overview
Strip the `/chromebook` page down to a technical setup/support page (not a product page), bundle all download files into a single ZIP, and remove the page from site-wide navigation since it's only needed by people setting up Chromebooks.

## Changes

### 1. Remove "Chromebook" from PageFooter navigation

In `src/components/PageFooter.tsx`, remove line 18 (`{ label: "Chromebook", path: "/chromebook" }`). The route itself stays in `App.tsx` so the page is still accessible by direct URL -- it just won't appear in the footer nav on every page. This follows the same "archived but accessible" pattern used for `/news`, `/partner`, `/tech`, and `/investors`.

### 2. Create a single ZIP download containing all server files

Bundle these files into one ZIP: `README.txt`, `HOSTING.md`, `Dockerfile`, `nginx.conf`, `docker-compose.yml`, `start-server.sh`, `stop-server.sh`, plus the entire `student-app/` folder. The ZIP will be placed at `public/downloads/soul-server-package.zip`.

Since Lovable can't run shell commands to create a ZIP, we have two options:
- **Option A**: Generate the ZIP programmatically using JSZip in a build step or edge function
- **Option B (recommended)**: You provide the pre-built ZIP file and we host it, OR we add a "Download All" button that uses JSZip in the browser to bundle the files on-the-fly when clicked

We'll go with **Option B (client-side ZIP)**: install `jszip` and `file-saver`, then create a "Download Complete Package" button that fetches all the files and zips them in the browser. This avoids needing to maintain a static ZIP file.

### 3. Simplify the Chromebook page

Strip the page down to a focused setup/support page:

- **Keep**: Hero (but tone down -- it's a setup guide, not a product pitch), Quick Install command box, Setup Steps, Teacher/Admin section, Troubleshooting FAQ
- **Remove**: The DualWaveButton (product-page element)
- **Replace**: The multi-file Downloads section with a single prominent "Download Server Package" button that triggers the client-side ZIP download
- **Keep**: PageFooter (for basic navigation back to the rest of the site)

### 4. Dependencies to add

- `jszip` -- for creating ZIP files in the browser
- `file-saver` -- for triggering the download

## Files Changed

| File | Change |
|------|--------|
| `src/components/PageFooter.tsx` | Remove Chromebook from `navLinks` array |
| `src/pages/Chromebook.tsx` | Replace Downloads section with single ZIP button, remove DualWaveButton, simplify hero |
| `package.json` | Add `jszip` and `file-saver` dependencies |

## Technical Detail: Client-Side ZIP Download

When the user clicks "Download Server Package," the button handler will:
1. Fetch all files from `/downloads/` (README.txt, HOSTING.md, Dockerfile, nginx.conf, docker-compose.yml, start-server.sh, stop-server.sh, and the student-app folder contents)
2. Add them to a JSZip instance preserving the folder structure
3. Generate the ZIP blob
4. Trigger a download as `soul-server-package.zip`

A loading spinner will show while the ZIP is being assembled.
