#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# SOUL Learning System - Chromebook Installer
# https://soulinterface.ai/chromebook
#
# One-line install:
#   curl -fsSL https://soulinterface.ai/install.sh | bash
#
# With custom server URL:
#   SOUL_URL=http://YOUR_IP:3000 curl -fsSL https://soulinterface.ai/install.sh | bash
# ═══════════════════════════════════════════════════════════════════════════

set -e

# Configuration
SOUL_URL="${SOUL_URL:-http://192.168.1.10:3000}"
INSTALL_DIR="$HOME/soul"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         SOUL Learning System - Installer                  ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "Server URL: ${GREEN}$SOUL_URL${NC}"
echo ""

# Check if running on Chromebook Linux (Crostini)
if [ ! -f /etc/os-release ]; then
    echo -e "${RED}Error: This doesn't appear to be a Linux environment.${NC}"
    echo ""
    echo "To enable Linux on your Chromebook:"
    echo "  1. Open Settings"
    echo "  2. Click 'Advanced' → 'Developers'"
    echo "  3. Click 'Turn on' next to 'Linux development environment'"
    echo "  4. Wait for setup to complete (~5-10 minutes)"
    echo "  5. Run this installer again"
    exit 1
fi

# ─────────────────────────────────────────────────────────────────────────────
# Step 1: Install Docker
# ─────────────────────────────────────────────────────────────────────────────
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}📦 Step 1: Installing Docker...${NC}"
    echo "   This may ask for your password."
    echo ""

    sudo apt-get update -qq
    sudo apt-get install -y -qq docker.io
    sudo usermod -aG docker "$USER"

    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}Docker installed successfully!${NC}"
    echo ""
    echo -e "${YELLOW}⚠️  IMPORTANT: You must LOG OUT and LOG BACK IN${NC}"
    echo "   for Docker permissions to take effect."
    echo ""
    echo "After logging back in, run this command again:"
    echo -e "  ${BLUE}curl -fsSL https://soulinterface.ai/install.sh | bash${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    exit 0
fi

# Check if docker is accessible
if ! docker ps &> /dev/null; then
    echo -e "${RED}Error: Docker is installed but not accessible.${NC}"
    echo ""
    echo "Please LOG OUT and LOG BACK IN, then run this installer again."
    exit 1
fi

# ─────────────────────────────────────────────────────────────────────────────
# Step 2: Create installation directory
# ─────────────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}📁 Step 2: Creating SOUL directory...${NC}"
mkdir -p "$INSTALL_DIR"

# ─────────────────────────────────────────────────────────────────────────────
# Step 3: Create Docker image
# ─────────────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}🐳 Step 3: Building SOUL container...${NC}"
echo "   This may take a few minutes on first install."
echo ""

# Create Dockerfile
cat > "$INSTALL_DIR/Dockerfile" << 'DOCKERFILE'
FROM debian:bookworm-slim

# Install Chromium and dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    fonts-liberation \
    fonts-noto \
    fonts-noto-color-emoji \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    x11-utils \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

# Kiosk startup script
COPY start-kiosk.sh /start-kiosk.sh
RUN chmod +x /start-kiosk.sh

# Create non-root user
RUN useradd -m -s /bin/bash kiosk
USER kiosk

ENV DISPLAY=:0
ENV SOUL_URL=http://192.168.1.10:3000

CMD ["/start-kiosk.sh"]
DOCKERFILE

# Create kiosk startup script
cat > "$INSTALL_DIR/start-kiosk.sh" << 'KIOSK'
#!/bin/bash
# Wait for X display to be ready
echo "Waiting for display..."
attempts=0
while ! xdpyinfo >/dev/null 2>&1; do
    attempts=$((attempts + 1))
    if [ $attempts -ge 30 ]; then
        echo "Error: Display not available"
        exit 1
    fi
    sleep 1
done

echo "Launching SOUL at: ${SOUL_URL}"

# Launch Chromium in kiosk mode
exec chromium \
    --no-sandbox \
    --kiosk \
    --no-first-run \
    --disable-translate \
    --disable-infobars \
    --disable-session-crashed-bubble \
    --disable-restore-session-state \
    --noerrdialogs \
    --disable-features=TranslateUI \
    --disable-extensions \
    --disable-background-networking \
    --disable-sync \
    --disable-default-apps \
    --start-fullscreen \
    --app="${SOUL_URL:-http://192.168.1.10:3000}"
KIOSK

# Build the image
docker build -t soul-kiosk "$INSTALL_DIR" --quiet

echo -e "${GREEN}   ✓ Container built successfully${NC}"

# ─────────────────────────────────────────────────────────────────────────────
# Step 4: Create launcher scripts
# ─────────────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}🚀 Step 4: Creating launcher scripts...${NC}"

# Main SOUL launcher
cat > "$INSTALL_DIR/start-soul.sh" << EOF
#!/bin/bash
# SOUL Student App Launcher

# Allow Docker to access X display
xhost +local:docker 2>/dev/null || true

echo "Starting SOUL Student App..."
echo "Press Ctrl+Shift+Q to exit, or use ~/soul/stop-soul.sh"
echo ""

docker run --rm \\
    -e DISPLAY=\$DISPLAY \\
    -e SOUL_URL="$SOUL_URL" \\
    -v /tmp/.X11-unix:/tmp/.X11-unix \\
    --network host \\
    --shm-size=256m \\
    soul-kiosk
EOF
chmod +x "$INSTALL_DIR/start-soul.sh"

# Stop script
cat > "$INSTALL_DIR/stop-soul.sh" << 'EOF'
#!/bin/bash
# Stop SOUL Kiosk

CONTAINER=$(docker ps -q --filter ancestor=soul-kiosk 2>/dev/null)

if [ -n "$CONTAINER" ]; then
    echo "Stopping SOUL..."
    docker stop $CONTAINER >/dev/null
    echo "SOUL stopped."
else
    echo "SOUL is not currently running."
fi
EOF
chmod +x "$INSTALL_DIR/stop-soul.sh"

# ─────────────────────────────────────────────────────────────────────────────
# Step 5: Create boot menu
# ─────────────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}📋 Step 5: Creating boot menu...${NC}"

cat > "$INSTALL_DIR/menu.sh" << 'MENU'
#!/bin/bash
# SOUL Learning System - Boot Menu

show_menu() {
    clear
    echo ""
    echo "  ╔═══════════════════════════════════════════════╗"
    echo "  ║         SOUL Learning System                  ║"
    echo "  ╠═══════════════════════════════════════════════╣"
    echo "  ║                                               ║"
    echo "  ║    [1]  📚  SOUL Student App                  ║"
    echo "  ║    [2]  📝  Testing Mode (coming soon)        ║"
    echo "  ║    [3]  ⚙️   Settings                          ║"
    echo "  ║    [4]  💻  Exit to Terminal                  ║"
    echo "  ║                                               ║"
    echo "  ╚═══════════════════════════════════════════════╝"
    echo ""
}

show_settings() {
    clear
    echo ""
    echo "  ╔═══════════════════════════════════════════════╗"
    echo "  ║              Settings                         ║"
    echo "  ╠═══════════════════════════════════════════════╣"
    echo "  ║                                               ║"
    echo "  ║  Current server: $(cat ~/soul/.server_url 2>/dev/null || echo 'default')  "
    echo "  ║                                               ║"
    echo "  ║    [1]  Change server URL                     ║"
    echo "  ║    [2]  Reinstall SOUL                        ║"
    echo "  ║    [3]  Back to main menu                     ║"
    echo "  ║                                               ║"
    echo "  ╚═══════════════════════════════════════════════╝"
    echo ""
    read -p "  Enter choice [1-3]: " setting_choice

    case $setting_choice in
        1)
            echo ""
            read -p "  Enter new server URL: " new_url
            if [ -n "$new_url" ]; then
                echo "$new_url" > ~/soul/.server_url
                sed -i "s|SOUL_URL=.*|SOUL_URL=\"$new_url\"|" ~/soul/start-soul.sh
                echo "  Server URL updated!"
            fi
            sleep 2
            ;;
        2)
            echo "  Reinstalling..."
            curl -fsSL https://soulinterface.ai/install.sh | bash
            exit 0
            ;;
    esac
}

while true; do
    show_menu
    read -p "  Enter choice [1-4]: " choice

    case $choice in
        1)
            ~/soul/start-soul.sh
            ;;
        2)
            echo ""
            echo "  Testing mode coming soon!"
            sleep 2
            ;;
        3)
            show_settings
            ;;
        4)
            clear
            echo "Exiting to terminal. Run ~/soul/menu.sh to return."
            exit 0
            ;;
        *)
            # Invalid input, just refresh menu
            ;;
    esac
done
MENU
chmod +x "$INSTALL_DIR/menu.sh"

# ─────────────────────────────────────────────────────────────────────────────
# Step 6: Create desktop shortcut
# ─────────────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}🖥️  Step 6: Creating desktop shortcut...${NC}"

# Create Desktop directory if it doesn't exist
mkdir -p ~/Desktop

# Create a simple icon file (SVG)
cat > "$INSTALL_DIR/soul-icon.svg" << 'ICON'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#4A90D9"/>
  <text x="50" y="65" text-anchor="middle" font-size="40" font-family="Arial" fill="white" font-weight="bold">S</text>
</svg>
ICON

# Create .desktop file for the desktop
cat > ~/Desktop/SOUL.desktop << EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=SOUL Learning
Comment=Launch SOUL Student App
Exec=$INSTALL_DIR/start-soul.sh
Icon=$INSTALL_DIR/soul-icon.svg
Terminal=false
Categories=Education;
StartupNotify=true
EOF
chmod +x ~/Desktop/SOUL.desktop

# Also create in applications folder for app launcher
mkdir -p ~/.local/share/applications
cp ~/Desktop/SOUL.desktop ~/.local/share/applications/

# Mark as trusted (Crostini/GNOME)
gio set ~/Desktop/SOUL.desktop metadata::trusted true 2>/dev/null || true

echo -e "${GREEN}   ✓ Desktop shortcut created${NC}"

# ─────────────────────────────────────────────────────────────────────────────
# Step 7: Configure auto-start (optional)
# ─────────────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}⚙️  Step 7: Configuring menu auto-start...${NC}"

# Add to .bashrc if not already there
if ! grep -q "SOUL Learning System" ~/.bashrc 2>/dev/null; then
    cat >> ~/.bashrc << 'BASHRC'

# ═══════════════════════════════════════════════════════════
# SOUL Learning System - App Selector (like state testing)
# ═══════════════════════════════════════════════════════════
if [ -z "$SOUL_MENU_STARTED" ] && [ -f ~/soul/menu.sh ]; then
    export SOUL_MENU_STARTED=1
    ~/soul/menu.sh
fi
BASHRC
fi

# Save the server URL for reference
echo "$SOUL_URL" > "$INSTALL_DIR/.server_url"

# ─────────────────────────────────────────────────────────────────────────────
# Done!
# ─────────────────────────────────────────────────────────────────────────────
echo ""
echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║            ✅ INSTALLATION COMPLETE!                      ║${NC}"
echo -e "${GREEN}╠═══════════════════════════════════════════════════════════╣${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}║  🖥️  A 'SOUL Learning' icon has been added to your        ║${NC}"
echo -e "${GREEN}║     desktop. Just double-click to launch!                 ║${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}║  You can also find it in the Linux apps folder.           ║${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}║  Commands (for teachers):                                 ║${NC}"
echo -e "${GREEN}║    ~/soul/menu.sh       - Show boot menu                  ║${NC}"
echo -e "${GREEN}║    ~/soul/stop-soul.sh  - Stop SOUL                       ║${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

read -p "Launch SOUL now? [Y/n]: " launch
if [[ ! "$launch" =~ ^[Nn] ]]; then
    exec ~/soul/start-soul.sh
fi
