

# Simplify Setup: Replace Chromebook Page with Student + Teacher Pages

## Overview
The current `/chromebook` page is a complex terminal-based installer guide. The new approach is much simpler: students just open a browser and install a PWA -- no Linux, no Terminal, no downloads. We'll replace the single Chromebook page with two focused pages and copy the uploaded teacher setup text into the downloads folder.

## What Changes

### 1. New Student Page (`src/pages/Student.tsx`) at `/student`
A simple, friendly page with the site's dark theme and cyan accent. Content from the uploaded student HTML:
- Hero: "SOUL Student Setup" -- "Get started in 2 minutes!"
- 3 Easy Steps card: Connect WiFi, type `soul.local:3000`, click Install
- Help/FAQ accordion: "site can't be reached", "soul.local doesn't work", microphone issues, no Install button

### 2. New Teacher Page (`src/pages/Teacher.tsx`) at `/teacher`
A more detailed setup guide for classroom deployment. Content from the uploaded teacher HTML:
- Quick Reference table: Student App (`soul.local:3000`), Teacher Dashboard (`soul.local:3002`), backup IP
- Student Setup section: "No Installation Required!" -- PWA explanation, works-on list (Chromebooks, Windows, Mac, iPad, Android)
- Network Requirements: same-network warning, ASCII network diagram
- Teacher Dashboard access info
- Optional Captive Portal setup (from TEACHER-SETUP.txt): Teltonika router instructions
- Troubleshooting FAQ: .local not working, students can't connect, microphone, exit SOUL
- Deploying to different sites: hostname setup
- Server Package download button (keep the existing JSZip download logic from current Chromebook page)

### 3. Save `TEACHER-SETUP.txt` to downloads
Copy `TEACHER-SETUP.txt` into `public/downloads/` so it's included in the ZIP download package.

### 4. Update Routes (`src/App.tsx`)
- Add `/student` route pointing to Student page
- Add `/teacher` route pointing to Teacher page
- Redirect `/chromebook` to `/student` (preserves any existing links)

### 5. Remove old Chromebook page
Delete `src/pages/Chromebook.tsx` (replaced by the redirect).

### 6. Update ZIP_FILES
Add `TEACHER-SETUP.txt` to the ZIP file list in the Teacher page.

## Files

| File | Action |
|------|--------|
| `src/pages/Student.tsx` | Create -- simple 3-step student setup page |
| `src/pages/Teacher.tsx` | Create -- full teacher deployment guide with ZIP download |
| `src/App.tsx` | Add `/student`, `/teacher` routes; redirect `/chromebook` to `/student` |
| `src/pages/Chromebook.tsx` | Delete (replaced by redirect) |
| `public/downloads/TEACHER-SETUP.txt` | Copy uploaded file |

## Design Notes
- Both pages use the existing dark theme (`bg-[#0a0a0f]`) and cyan accent (`#1bbdc5`) consistent with the rest of the site
- Both include `PageFooter` for navigation
- The Student page is intentionally minimal -- it's meant for kids
- The Teacher page carries over the ZIP download button from the old Chromebook page
- Neither page is added to the PageFooter nav links (same hidden-but-accessible pattern as `/news`, `/partner`, etc.)

