

# Update Chromebook Package with Student App and Server Files

## Overview
Replace all existing Chromebook files with the updated versions and add the complete student app (PWA) and server-side Docker infrastructure as downloadable files. The `/chromebook` page gets updated to reflect new paths and architecture.

## What Gets Updated

### 1. Replace existing static files

| File | Action |
|------|--------|
| `public/install.sh` | Replace with updated installer (`install-2.sh`) -- new `~/soul/` paths, boot menu, `.bashrc` auto-start, 352 lines |
| `public/downloads/README.txt` | Replace with complete package docs (`README-2.txt`) -- daily workflow, package sizes, uninstall instructions |
| `public/downloads/HOSTING.md` | Replace with hosting options guide (`HOSTING-2.md`) -- GitHub Gist, R2, Lovable options |

### 2. Add server-side Docker files

| File | Purpose |
|------|---------|
| `public/downloads/Dockerfile` | Nginx-based container for the student app |
| `public/downloads/nginx.conf` | Nginx config with API proxy, WebSocket support, SPA routing, health check, security headers, gzip |
| `public/downloads/docker-compose.yml` | Docker Compose for the teacher's server (port 3000 mapped to 8080) |
| `public/downloads/start-server.sh` | Teacher server startup -- detects local IP, builds and runs the container |
| `public/downloads/stop-server.sh` | Teacher server stop script |

### 3. Add the student app (PWA) bundle

These are the pre-built files the teacher's Docker container serves to Chromebooks:

| File | Purpose |
|------|---------|
| `public/downloads/student-app/index.html` | Main HTML with PWA meta tags, service worker registration |
| `public/downloads/student-app/offline.html` | Offline fallback page ("You're Offline" with retry button) |
| `public/downloads/student-app/icon.svg` | Blue "S" icon for PWA |
| `public/downloads/student-app/manifest.json` | PWA manifest (standalone, education category) |
| `public/downloads/student-app/sw.js` | Service worker -- network-first with cache fallback |
| `public/downloads/student-app/assets/index-BI9yYeNr.js` | Built React app bundle |
| `public/downloads/student-app/assets/index-Q5tyc_K_.css` | Built CSS bundle |

### 4. Update the `/chromebook` page (`src/pages/Chromebook.tsx`)

Changes to match the new installer and architecture:

**Path updates throughout:**
- `~/.soul/` becomes `~/soul/`
- `~/.soul/soul-menu.sh` becomes `~/soul/menu.sh`
- `~/.soul/start-soul.sh` becomes `~/soul/start-soul.sh`
- `~/.soul/stop-soul.sh` becomes `~/soul/stop-soul.sh`

**Step 4 text updated:**
- Old: "Run ~/.soul/start-soul.sh -- your Chromebook is now a learning station."
- New: "Open Terminal -- the SOUL menu appears automatically. Press 1 to launch."

**Custom Server URL card updated:**
- Command changes to: `SOUL_URL=http://YOUR_IP:3000 ~/soul/start-soul.sh`
- Boot menu reference: `~/soul/menu.sh`

**Exit instructions updated:**
- Add `Ctrl+Shift+Q` as force-close option
- Stop command: `~/soul/stop-soul.sh`

**FAQ updates:**
- Add new question: "Linux option not available" with answer about Chromebook model requirements
- Add new question: "Menu doesn't appear" with answer to run `~/soul/menu.sh`
- Update "Can't reach the SOUL server" to mention checking `./start-server.sh` on teacher machine

**Downloads section expanded into two groups:**
- "Setup Guides": README.txt, HOSTING.md
- "Server Files": Dockerfile, nginx.conf, docker-compose.yml, start-server.sh, stop-server.sh

## Files Summary

| File | Action |
|------|--------|
| `public/install.sh` | Replace |
| `public/downloads/README.txt` | Replace |
| `public/downloads/HOSTING.md` | Replace |
| `public/downloads/Dockerfile` | Create |
| `public/downloads/nginx.conf` | Create |
| `public/downloads/docker-compose.yml` | Create |
| `public/downloads/start-server.sh` | Create |
| `public/downloads/stop-server.sh` | Create |
| `public/downloads/student-app/index.html` | Create |
| `public/downloads/student-app/offline.html` | Create |
| `public/downloads/student-app/icon.svg` | Create |
| `public/downloads/student-app/manifest.json` | Create |
| `public/downloads/student-app/sw.js` | Create |
| `public/downloads/student-app/assets/index-BI9yYeNr.js` | Create |
| `public/downloads/student-app/assets/index-Q5tyc_K_.css` | Create |
| `src/pages/Chromebook.tsx` | Update |

## Technical Notes

- The student app JS/CSS bundles are pre-built and served as-is -- they run on the teacher's Docker container, not in the Lovable site
- The `chromebook-page-2.html` and `LOVABLE-INSTRUCTIONS-2.md` are internal reference files and will not be hosted
- Total new download size: approximately 80 KB (the JS and CSS bundles are the largest files)
- The Dockerfile expects the `student-app/` folder to be in the same directory, matching the teacher's workflow of downloading all files into one folder

