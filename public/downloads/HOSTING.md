# SOUL Learning System — Self-Hosting Guide

**Soul Interface © 2026**

---

## Overview

This guide explains how to host the SOUL Learning System installer
and web interface on your own server, for schools or organizations
that want full control over deployment.

---

## Architecture

```
┌─────────────────┐     Wi-Fi      ┌──────────────────┐
│   Chromebook     │ ◄────────────► │  Soul Interface  │
│   (kiosk mode)   │                │  Tower (GPU)     │
│   Docker+Chromium│                │  Local AI Server │
└─────────────────┘                └──────────────────┘
```

- **Chromebooks** run a Docker container with Chromium in kiosk mode
- **Soul Interface Tower** runs the AI and serves the learning interface
- Everything stays on the **local network** — no cloud required

---

## Hosting the Installer

### Option 1: Use our hosted installer (recommended)

```bash
curl -fsSL https://soulinterface.ai/install.sh | bash
```

### Option 2: Host it yourself

1. Download `install.sh` from https://soulinterface.ai/install.sh
2. Place it on your internal web server
3. Update the `SOUL_URL` default in the script to match your tower's IP
4. Have students run:

```bash
curl -fsSL http://your-server/install.sh | bash
```

---

## Configuring the Server URL

The default server URL is `http://192.168.1.100:3000`. To change it:

### Per-session
```bash
SOUL_URL=http://10.0.0.5:3000 ~/.soul/start-soul.sh
```

### Permanent change
Edit `~/.soul/start-soul.sh` and change the `SOUL_URL` line.

### During installation
```bash
SOUL_URL=http://10.0.0.5:3000 curl -fsSL https://soulinterface.ai/install.sh | bash
```

---

## Network Requirements

| Port | Service | Direction |
|------|---------|-----------|
| 3000 | SOUL Web UI | Tower → Chromebooks |
| 443  | HTTPS (installer download) | Chromebooks → Internet (one-time) |

- Chromebooks need to reach the tower on port 3000
- Internet access is only needed for the initial Docker setup
- After installation, everything runs offline

---

## Fleet Deployment

For deploying to many Chromebooks at once:

1. Set up one Chromebook manually using the installer
2. Use ChromeOS's managed Linux container feature (if available)
3. Or create a USB drive with the pre-built Docker image:

```bash
# On the configured Chromebook:
docker save soul-kiosk-image > soul-image.tar

# On a new Chromebook:
docker load < soul-image.tar
cp -r ~/.soul ~/  # Copy scripts
```

---

## Security Notes

- The kiosk container runs Chromium with `--no-sandbox` inside Docker
  (the container itself provides isolation)
- Students cannot access the URL bar or open new tabs
- To exit kiosk mode requires terminal access (Ctrl+Alt+T → crosh)
- Report bypass vulnerabilities: contact@soulinterface.ai ($1K bounty)

---

## Support

- **Setup page**: https://soulinterface.ai/chromebook
- **Email**: contact@soulinterface.ai
