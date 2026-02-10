#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# SOUL Learning System - Teacher Server Startup
# Run this on the teacher's machine to serve the student app
# ═══════════════════════════════════════════════════════════════════════════

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         SOUL Learning System - Server                     ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}Docker not found. Installing...${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Please install Docker Desktop from https://docker.com/products/docker-desktop"
        exit 1
    else
        sudo apt-get update && sudo apt-get install -y docker.io docker-compose
        sudo usermod -aG docker "$USER"
        echo "Docker installed. Please log out and back in, then run this script again."
        exit 0
    fi
fi

# Get local IP
if [[ "$OSTYPE" == "darwin"* ]]; then
    LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "localhost")
else
    LOCAL_IP=$(hostname -I | awk '{print $1}')
fi

echo -e "Your IP address: ${GREEN}$LOCAL_IP${NC}"
echo ""

# Build and start
echo -e "${YELLOW}Building student app container...${NC}"
docker build -t soul-student-app .

echo ""
echo -e "${YELLOW}Starting server on port 3000...${NC}"
docker run -d --rm \
    --name soul-student-app \
    -p 3000:80 \
    --add-host=host.docker.internal:host-gateway \
    soul-student-app

echo ""
echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    SERVER RUNNING                         ║${NC}"
echo -e "${GREEN}╠═══════════════════════════════════════════════════════════╣${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}║  Student App URL: http://$LOCAL_IP:3000                ${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}║  Chromebook Install Command:                              ║${NC}"
echo -e "${GREEN}║  SOUL_URL=http://$LOCAL_IP:3000 \\                      ${NC}"
echo -e "${GREEN}║    curl -fsSL https://soulinterface.ai/install.sh | bash  ║${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}║  To stop: ./stop-server.sh                                ║${NC}"
echo -e "${GREEN}║                                                           ║${NC}"
echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""
