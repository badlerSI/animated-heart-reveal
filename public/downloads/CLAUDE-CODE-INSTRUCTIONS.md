# SOUL Tower Setup — Claude Code Reference

## What This Machine Is
This is the SOUL Tower — a local server connected to a Teltonika RUT
router broadcasting WiFi network "RUT_xxx_2G". It serves the SOUL
student app and teacher dashboard to devices on the local network.
No internet connection is required once set up.

## Directory Structure
```
~/soul-server/
  Dockerfile
  nginx.conf
  docker-compose.yml
  start-server.sh
  stop-server.sh
  tower-setup.sh
  student-app/          # Pre-built PWA bundle
  cert-installers/      # CA cert + platform installers
  TEACHER-SETUP.txt
  CLAUDE-CODE-INSTRUCTIONS.md
```

## Initial Setup Commands
```bash
cd ~/soul-server
chmod +x tower-setup.sh
./tower-setup.sh
```

Or manually:
```bash
cd ~/soul-server
sudo hostnamectl set-hostname soul
docker compose up -d --build
```

## Verify It Works
```bash
curl http://localhost:3000          # Should return student app HTML
curl http://localhost:3000/certs/   # Should list cert files
curl http://localhost:3000/health   # Should return "OK"
```

## Common Tasks

### Restart the server
```bash
docker compose restart
```

### Rebuild after changes
```bash
docker compose up -d --build
```

### View logs
```bash
docker compose logs -f
```

### Stop everything
```bash
docker compose down
```

### Check what's running
```bash
docker ps
```

### Update the student app
```bash
# Replace files in student-app/ then rebuild:
docker compose up -d --build
```

### Change the WiFi password (on the router)
```
Access router admin at http://192.168.1.1 or http://172.20.10.1
Navigate to Network > Wireless > Security
```

## Network Architecture
- **Router:** Teltonika RUT (broadcasts RUT_xxx_2G)
- **This machine:** Connected via ethernet to the router
- **Student app:** http://soul.local:3000 (plain HTTP)
- **Cert downloads:** http://soul.local:3000/certs/
- **Teacher dashboard:** https://soul.local:3001 (HTTPS, needs cert)

## How Students Connect
1. Connect to RUT_xxx_2G WiFi (teacher gives password)
2. Open Chrome → soul.local:3000
3. Download and install security certificate from the local server
4. Click "Install" to add the PWA

## Troubleshooting
- **"soul.local" not resolving:** Check hostname is set to "soul"
  and avahi-daemon is running: `sudo systemctl start avahi-daemon`
- **Container won't start:** Check `docker compose logs`
- **Students can't connect:** Verify they're on RUT_xxx_2G, not school WiFi
- **Cert files 404:** Verify cert-installers/ dir exists and Dockerfile
  copies it to /usr/share/nginx/certs
- **Port 3000 already in use:** `sudo lsof -i :3000` to find the process
