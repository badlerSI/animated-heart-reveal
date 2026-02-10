#!/bin/bash
#
# SOUL Learning System Installer for Chromebook (ChromeOS Linux / Crostini)
#
# Usage:
#   curl -fsSL https://soulinterface.ai/install.sh | bash
#
# This script:
#   1. Installs Docker (if not present)
#   2. Builds a Docker container with Chromium in kiosk mode
#   3. Creates start/stop/boot-menu scripts
#   4. Optionally sets SOUL to launch on login
#
# Requirements:
#   - ChromeOS with Linux (Crostini) enabled
#   - Internet connection (for initial setup only)
#

set -e

# ──────────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────────
SOUL_URL="${SOUL_URL:-http://192.168.1.100:3000}"
CONTAINER_NAME="soul-kiosk"
IMAGE_NAME="soul-kiosk-image"
INSTALL_DIR="$HOME/.soul"
AUTOSTART_DIR="$HOME/.config/autostart"

# ──────────────────────────────────────────────
# Colors
# ──────────────────────────────────────────────
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# ──────────────────────────────────────────────
# Banner
# ──────────────────────────────────────────────
echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║                                              ║${NC}"
echo -e "${CYAN}║     ${BOLD}SOUL Learning System${NC}${CYAN}                    ║${NC}"
echo -e "${CYAN}║     Chromebook Kiosk Installer               ║${NC}"
echo -e "${CYAN}║                                              ║${NC}"
echo -e "${CYAN}║     Soul Interface © 2026                    ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════╝${NC}"
echo ""

# ──────────────────────────────────────────────
# Helper functions
# ──────────────────────────────────────────────
info()    { echo -e "${CYAN}[INFO]${NC} $1"; }
success() { echo -e "${GREEN}[OK]${NC} $1"; }
warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
fail()    { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# ──────────────────────────────────────────────
# Step 1: Check environment
# ──────────────────────────────────────────────
info "Checking environment..."

if ! command -v apt-get &>/dev/null; then
  fail "This installer requires a Debian-based Linux environment (ChromeOS Crostini)."
fi

success "Debian-based environment detected."

# ──────────────────────────────────────────────
# Step 2: Install Docker if needed
# ──────────────────────────────────────────────
if command -v docker &>/dev/null; then
  success "Docker is already installed."
else
  info "Installing Docker..."
  sudo apt-get update -qq
  sudo apt-get install -y -qq \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

  curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg 2>/dev/null

  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  sudo apt-get update -qq
  sudo apt-get install -y -qq docker-ce docker-ce-cli containerd.io

  sudo usermod -aG docker "$USER"
  success "Docker installed. You may need to log out and back in for group changes."
fi

# ──────────────────────────────────────────────
# Step 3: Create install directory
# ──────────────────────────────────────────────
info "Creating install directory at $INSTALL_DIR..."
mkdir -p "$INSTALL_DIR"

# ──────────────────────────────────────────────
# Step 4: Build Docker image
# ──────────────────────────────────────────────
info "Building SOUL kiosk Docker image..."

cat > "$INSTALL_DIR/Dockerfile" << 'DOCKERFILE'
FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    fonts-noto-color-emoji \
    libgbm1 \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    dbus-x11 \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash kiosk

ENV DISPLAY=:0

USER kiosk
WORKDIR /home/kiosk

ENTRYPOINT ["chromium", \
  "--no-sandbox", \
  "--disable-gpu", \
  "--disable-software-rasterizer", \
  "--disable-dev-shm-usage", \
  "--kiosk", \
  "--noerrdialogs", \
  "--disable-infobars", \
  "--disable-session-crashed-bubble", \
  "--disable-translate", \
  "--no-first-run"]
DOCKERFILE

cd "$INSTALL_DIR"
docker build -t "$IMAGE_NAME" . 2>&1 | tail -5
success "Docker image built."

# ──────────────────────────────────────────────
# Step 5: Create start script
# ──────────────────────────────────────────────
info "Creating start script..."

cat > "$INSTALL_DIR/start-soul.sh" << STARTSCRIPT
#!/bin/bash
# Start SOUL Learning System in kiosk mode

SOUL_URL="\${SOUL_URL:-$SOUL_URL}"

echo -e "${CYAN}Starting SOUL Learning System...${NC}"
echo -e "Connecting to: \$SOUL_URL"

# Stop existing container if running
docker rm -f $CONTAINER_NAME 2>/dev/null

# Run kiosk container
docker run -d \\
  --name $CONTAINER_NAME \\
  -e DISPLAY=\$DISPLAY \\
  -v /tmp/.X11-unix:/tmp/.X11-unix \\
  --shm-size=512m \\
  $IMAGE_NAME \\
  "\$SOUL_URL"

echo -e "${GREEN}SOUL is running.${NC}"
echo -e "To stop: ~/.soul/stop-soul.sh"
STARTSCRIPT

chmod +x "$INSTALL_DIR/start-soul.sh"

# ──────────────────────────────────────────────
# Step 6: Create stop script
# ──────────────────────────────────────────────
cat > "$INSTALL_DIR/stop-soul.sh" << 'STOPSCRIPT'
#!/bin/bash
# Stop SOUL Learning System
echo "Stopping SOUL..."
docker rm -f soul-kiosk 2>/dev/null
echo "SOUL stopped."
STOPSCRIPT

chmod +x "$INSTALL_DIR/stop-soul.sh"

# ──────────────────────────────────────────────
# Step 7: Create boot menu script
# ──────────────────────────────────────────────
cat > "$INSTALL_DIR/soul-menu.sh" << 'MENUSCRIPT'
#!/bin/bash
# SOUL Learning System - Boot Menu

CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'
BOLD='\033[1m'

clear
echo ""
echo -e "${CYAN}╔══════════════════════════════════════╗${NC}"
echo -e "${CYAN}║  ${BOLD}SOUL Learning System${NC}${CYAN}               ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${GREEN}1)${NC} Start SOUL"
echo -e "  ${GREEN}2)${NC} Stop SOUL"
echo -e "  ${GREEN}3)${NC} Change server URL"
echo -e "  ${GREEN}4)${NC} Exit to terminal"
echo ""
read -p "  Choose [1-4]: " choice

case $choice in
  1) ~/.soul/start-soul.sh ;;
  2) ~/.soul/stop-soul.sh ;;
  3)
    read -p "  Enter new SOUL URL: " new_url
    export SOUL_URL="$new_url"
    ~/.soul/start-soul.sh
    ;;
  4) exit 0 ;;
  *) echo "Invalid choice"; sleep 1; exec "$0" ;;
esac
MENUSCRIPT

chmod +x "$INSTALL_DIR/soul-menu.sh"

# ──────────────────────────────────────────────
# Step 8: Ask about autostart
# ──────────────────────────────────────────────
echo ""
echo -e "${CYAN}Would you like SOUL to start automatically when Linux launches?${NC}"
read -p "  [y/N]: " autostart_choice

if [[ "$autostart_choice" =~ ^[Yy]$ ]]; then
  mkdir -p "$AUTOSTART_DIR"
  cat > "$AUTOSTART_DIR/soul-kiosk.desktop" << DESKTOP
[Desktop Entry]
Type=Application
Name=SOUL Learning System
Exec=$INSTALL_DIR/start-soul.sh
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
DESKTOP
  success "Autostart enabled."
else
  info "Skipping autostart. You can run SOUL manually with: ~/.soul/start-soul.sh"
fi

# ──────────────────────────────────────────────
# Done
# ──────────────────────────────────────────────
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  Installation complete!                      ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${BOLD}Quick start:${NC}"
echo -e "    ~/.soul/start-soul.sh    Start SOUL"
echo -e "    ~/.soul/stop-soul.sh     Stop SOUL"
echo -e "    ~/.soul/soul-menu.sh     Boot menu"
echo ""
echo -e "  ${BOLD}Custom server:${NC}"
echo -e "    SOUL_URL=http://10.0.0.5:3000 ~/.soul/start-soul.sh"
echo ""
echo -e "  ${CYAN}For help: https://soulinterface.ai/chromebook${NC}"
echo ""
