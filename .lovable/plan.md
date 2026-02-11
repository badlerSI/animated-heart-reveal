

# Fix: Mac Certificate Install Without Terminal

## Problem
The current Mac installer is a `.command` shell script that macOS Gatekeeper blocks. Users cannot open it without Terminal commands, which defeats the purpose.

## Solution
Use the same `.mobileconfig` profile approach for Mac that is already used for iPad. macOS has supported `.mobileconfig` files since Lion -- the user simply double-clicks the file, and macOS opens System Settings to install the certificate profile. No Terminal, no Gatekeeper issues.

## Changes

### 1. Update Mac button on Student page (`src/pages/Student.tsx`)
- Change `href` from `install-mac.command` to `install-ios.mobileconfig` (same file works on both platforms)
- Change `hint` to: "Double-click, then approve in System Settings"

### 2. Update Mac button on Teacher page (`src/pages/Teacher.tsx`)
- Same changes as Student page

### 3. Update FAQ entries
- Remove or update the "Mac installer won't open" FAQ if it exists
- Add a note that on macOS Ventura+, users may need to go to System Settings, then Privacy & Security, then Profiles to complete the install

### 4. Update TEACHER-SETUP.txt and README.txt
- Update Mac instructions to reference the `.mobileconfig` approach instead of the `.command` file

## Why This Works
- `.mobileconfig` files are an Apple-native format recognized by both macOS and iOS
- They are not blocked by Gatekeeper since they are handled by the system profile installer, not executed as code
- The existing `install-ios.mobileconfig` already contains the correct `com.apple.security.root` payload type, which works on macOS too
- No additional files need to be created

## Files Modified
- `src/pages/Student.tsx` -- update Mac button href and hint
- `src/pages/Teacher.tsx` -- update Mac button href and hint
- `public/downloads/cert-installers/README.txt` -- update Mac instructions
- `public/downloads/TEACHER-SETUP.txt` -- update Mac instructions

