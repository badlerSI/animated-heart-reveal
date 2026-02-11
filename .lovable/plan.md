

# Replace Client-Side ZIP with Pre-Built Download Files

## Overview
Replace the current client-side ZIP assembly (using JSZip/file-saver) with two pre-built ZIP files uploaded by the user. Also fix all `soul.local` URLs to use `https://` as specified.

## Changes

### 1. Copy uploaded ZIP files to `public/downloads/`
- `soul-teacher-setup-2.zip` -> `public/downloads/soul-teacher-setup.zip`
- `soul-student-chromebook-2.zip` -> `public/downloads/soul-student-chromebook.zip`

### 2. Simplify `src/pages/Teacher.tsx`
- Remove the `ZIP_FILES` array, `useState`, JSZip import, file-saver import, and `downloadZip` function
- Remove `Loader2` from lucide imports
- Replace the "Server Package" download section with **two static download links**:
  - "Download Teacher Setup" -> `/downloads/soul-teacher-setup.zip`
  - "Download Chromebook Student Installer" -> `/downloads/soul-student-chromebook.zip`
- Each link includes a description of what's inside
- Fix all `soul.local` URLs from `http://` to `https://` in the Quick Reference table and throughout

### 3. Update `src/pages/Student.tsx`
- Fix `soul.local` cert button URLs from `http://` to `https://` (the cert buttons point to the local server, but per the instructions these should use `https://`)
- Update the step 2 URL display from `soul.local:3000` to `https://soul.local:3000`

### 4. URL corrections (both pages)
Per the uploaded instructions, all soul.local references should use `https://`:
- Student App: `https://soul.local:3000`
- Teacher Dashboard: `https://soul.local:3001`

## Files Modified
- `src/pages/Teacher.tsx` -- remove JSZip logic, add two static download buttons, fix URLs to https
- `src/pages/Student.tsx` -- fix URLs to https

## Files Copied
- `user-uploads://soul-teacher-setup-2.zip` -> `public/downloads/soul-teacher-setup.zip`
- `user-uploads://soul-student-chromebook-2.zip` -> `public/downloads/soul-student-chromebook.zip`

