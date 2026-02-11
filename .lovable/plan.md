

# All-Local Setup: Download Everything from the SOUL Tower

## Overview
Restructure the entire setup flow so that **no internet is needed**. Students connect to the SOUL Tower WiFi (RUT_xxx_2G), then download certificate files directly from the local server at `soul.local:3000`. The student app already runs over plain HTTP on port 3000, so no certificate is needed just to reach the download page.

## How It Works

1. Student connects to **RUT_xxx_2G** WiFi (password from teacher)
2. Opens browser to **soul.local:3000** (plain HTTP -- no cert needed)
3. The student app page has cert download buttons that pull files from the same local server
4. Student installs the cert on their device
5. Now HTTPS features (mic access, teacher dashboard on :3001) work without warnings
6. Student clicks "Install" to add the PWA

## Changes

### 1. Serve cert files from the Docker container

**`public/downloads/nginx.conf`** -- Add a `/certs/` location block that serves certificate installer files:
```
location /certs/ {
    alias /usr/share/nginx/certs/;
    autoindex on;
}
```

**`public/downloads/Dockerfile`** -- Add a COPY line for the cert files:
```
COPY cert-installers /usr/share/nginx/certs
```

### 2. Include cert-installers in the ZIP package

**`src/pages/Teacher.tsx`** -- Add cert-installer files to the `ZIP_FILES` array so they are bundled in the server package download:
- `cert-installers/SOUL-Learning-CA.crt`
- `cert-installers/install-windows.bat`
- `cert-installers/install-ios.mobileconfig`
- `cert-installers/install-chromeos.sh`
- `cert-installers/README.txt`

### 3. Update Student page flow (`src/pages/Student.tsx`)

Replace the "3 Easy Steps" with **4 steps**:
1. **Connect to SOUL Tower WiFi** -- Join the network named **RUT_xxx_2G** (ask your teacher for the password)
2. **Open Chrome** -- Type `soul.local:3000`
3. **Install the security certificate** -- Download for your device using the buttons below, then install it
4. **Click "Install"** when prompted to add SOUL to your apps

Update cert download button `href` values to point to the local server path:
- Windows: `http://soul.local:3000/certs/install-windows.bat`
- Mac: `http://soul.local:3000/certs/install-ios.mobileconfig`
- Chromebook: `http://soul.local:3000/certs/SOUL-Learning-CA.crt`
- iPad: `http://soul.local:3000/certs/install-ios.mobileconfig`

Remove `download` attribute from cert buttons since they now point to absolute local URLs.

Add the Windows SmartScreen FAQ and Chromebook cert FAQ entries as previously planned.

### 4. Update Teacher page flow (`src/pages/Teacher.tsx`)

- Add **WiFi Network: RUT_xxx_2G** row to the Quick Reference table
- Add a reminder callout: "Share the WiFi password with students before class"
- Update the "Setting Up Student Devices" steps to the new 4-step order
- Update cert button hrefs to local server paths (same as Student page)
- Update the Network Diagram to show **RUT_xxx_2G** as the WiFi name
- Add the same new FAQ entries (SmartScreen, Chromebook cert)

### 5. Update documentation files

**`public/downloads/TEACHER-SETUP.txt`**:
- Update STUDENT SETUP section with new 4-step flow (connect WiFi first, then browse to server)
- Add WiFi network name (RUT_xxx_2G) and password reminder
- Add note that cert files are served locally from `soul.local:3000/certs/`
- Add SmartScreen and Chromebook notes

**`public/downloads/cert-installers/README.txt`**:
- Add note that these files are also served from the local server at `/certs/`

### 6. Create Tower setup script and Claude Code instructions

**`public/downloads/tower-setup.sh`** -- A bash script to run on the SOUL Tower (the machine connected to the Teltonika router) that:
- Checks for Docker
- Sets hostname to `soul`
- Unzips the server package (or builds from the local files)
- Starts the container
- Prints the WiFi setup summary

**`public/downloads/CLAUDE-CODE-INSTRUCTIONS.md`** -- Instructions for Claude Code running in terminal on the tower:

```markdown
# SOUL Tower Setup -- Claude Code Reference

## What This Machine Is
This is the SOUL Tower -- a local server connected to a Teltonika RUT
router broadcasting WiFi network "RUT_xxx_2G". It serves the SOUL
student app and teacher dashboard to devices on the local network.
No internet connection is required once set up.

## Directory Structure
~/soul-server/
  Dockerfile
  nginx.conf
  docker-compose.yml
  start-server.sh
  stop-server.sh
  student-app/          # Pre-built PWA bundle
  cert-installers/      # CA cert + platform installers

## Initial Setup Commands
cd ~/soul-server
sudo hostnamectl set-hostname soul
docker compose up -d --build

## Verify It Works
curl http://localhost:3000          # Should return student app HTML
curl http://localhost:3000/certs/   # Should list cert files
curl http://localhost:3000/health   # Should return "OK"

## Common Tasks

### Restart the server
docker compose restart

### Rebuild after changes
docker compose up -d --build

### View logs
docker compose logs -f

### Stop everything
docker compose down

### Check what's running
docker ps

### Update the student app
# Replace files in student-app/ then rebuild:
docker compose up -d --build

### Change the WiFi password (on the router)
# Access router admin at http://192.168.1.1 or http://172.20.10.1
# Navigate to Network > Wireless > Security

## Network Architecture
- Router: Teltonika RUT (broadcasts RUT_xxx_2G)
- This machine: Connected via ethernet to the router
- Student app: http://soul.local:3000 (plain HTTP)
- Cert downloads: http://soul.local:3000/certs/
- Teacher dashboard: https://soul.local:3001 (HTTPS, needs cert)

## Troubleshooting
- "soul.local" not resolving: Check that hostname is set to "soul"
  and avahi-daemon is running (sudo systemctl start avahi-daemon)
- Container won't start: Check docker compose logs
- Students can't connect: Verify they're on RUT_xxx_2G, not school WiFi
- Cert files 404: Verify cert-installers/ dir exists and Dockerfile
  copies it to /usr/share/nginx/certs
```

## Files Modified
- `src/pages/Student.tsx` -- new 4-step flow, local cert URLs, new FAQs
- `src/pages/Teacher.tsx` -- WiFi info in Quick Reference, updated steps, local cert URLs, new FAQs, updated ZIP_FILES
- `public/downloads/nginx.conf` -- add `/certs/` location
- `public/downloads/Dockerfile` -- COPY cert-installers
- `public/downloads/TEACHER-SETUP.txt` -- updated flow and WiFi info
- `public/downloads/cert-installers/README.txt` -- local serving note

## New Files
- `public/downloads/CLAUDE-CODE-INSTRUCTIONS.md` -- reference doc for Claude Code on the tower
- `public/downloads/tower-setup.sh` -- one-shot setup script for the tower machine

