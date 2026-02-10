═══════════════════════════════════════════════════════════════════════════════
                    SOUL LEARNING SYSTEM - COMPLETE PACKAGE
═══════════════════════════════════════════════════════════════════════════════

This folder contains EVERYTHING needed to run SOUL on Chromebooks:
  - The complete Student App (pre-built, ready to run)
  - Teacher server startup scripts
  - Chromebook installer script


QUICK START
───────────

1. TEACHER'S MACHINE (this computer):

   cd /home/badler/Desktop/soul-chromebook-installer
   ./start-server.sh

   This starts the SOUL Student App on port 3000.
   The script will display your IP address.


2. EACH CHROMEBOOK:

   a) Enable Linux: Settings → Advanced → Developers → Turn on Linux
   b) Open Terminal and paste:

      SOUL_URL=http://YOUR_IP:3000 curl -fsSL https://soulinterface.ai/install.sh | bash

   Replace YOUR_IP with the IP shown by start-server.sh


WHAT'S IN THIS FOLDER
─────────────────────

student-app/          The complete built web app (404 KB)
  index.html          Main HTML file
  assets/             JavaScript & CSS bundles
  sw.js               Service worker for offline support
  manifest.json       PWA manifest

Dockerfile            Docker configuration for the app
nginx.conf            Web server configuration
docker-compose.yml    Docker Compose file (alternative to start-server.sh)

start-server.sh       Start the SOUL server (TEACHER)
stop-server.sh        Stop the SOUL server (TEACHER)

install.sh            Chromebook installer (HOST ON YOUR WEBSITE)

LOVABLE-INSTRUCTIONS.md   How to add this to soulinterface.ai
chromebook-page.html      Ready-to-use HTML for /chromebook page
HOSTING.md                Alternative hosting options


HOSTING ON SOULINTERFACE.AI
───────────────────────────

To enable the one-line install command:

1. Upload install.sh to https://soulinterface.ai/install.sh
   - In Lovable, add to public folder or create API route
   - Alternatively: Upload to GitHub Gist and redirect

2. Create a /chromebook page with the content from chromebook-page.html

3. Share the install command with teachers/students:
   curl -fsSL https://soulinterface.ai/install.sh | bash


DAILY WORKFLOW
──────────────

MORNING (Teacher):
  1. Run ./start-server.sh on teacher machine
  2. Note the IP address displayed

STUDENTS:
  1. Open Terminal on Chromebook
  2. Menu appears automatically
  3. Press [1] to launch SOUL

END OF DAY (Teacher):
  1. Run ./stop-server.sh to stop the server

TO EXIT SOUL (Teacher only):
  - Press Ctrl+Alt+T to open new terminal
  - Run: ~/soul/stop-soul.sh


PACKAGE SIZE
────────────

Total folder:     ~470 KB (source files)
Docker image:     ~25 MB (nginx:alpine + app)
Chromebook image: ~250 MB (Debian + Chromium)


CUSTOMIZATION
─────────────

Change server URL after install:
  On Chromebook: Press [3] in the menu → Change server URL

Change default URL in installer:
  Edit install.sh line 16: SOUL_URL="${SOUL_URL:-http://YOUR_DEFAULT_IP:3000}"


TROUBLESHOOTING
───────────────

"Cannot connect" on Chromebook:
  → Check teacher server is running (./start-server.sh)
  → Check IP address is correct
  → Check firewall allows port 3000

"Docker not found" on teacher machine:
  → Install Docker: sudo apt install docker.io
  → Add yourself to docker group: sudo usermod -aG docker $USER
  → Log out and back in

Menu doesn't appear on Chromebook:
  → Run: ~/soul/menu.sh
  → Or reinstall: curl -fsSL https://soulinterface.ai/install.sh | bash


UNINSTALLING
────────────

To remove SOUL from a Chromebook:

  rm -rf ~/soul
  # Remove auto-start from .bashrc:
  nano ~/.bashrc
  # Delete the "SOUL Learning System" section at the bottom


═══════════════════════════════════════════════════════════════════════════════
                        Questions? Visit soulinterface.ai/help
═══════════════════════════════════════════════════════════════════════════════
