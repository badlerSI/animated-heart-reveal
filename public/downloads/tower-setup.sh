#!/bin/bash
# ============================================
#   SOUL Tower - One-Shot Setup Script
#   Run this on the machine connected to the
#   Teltonika router via ethernet.
# ============================================

set -e

echo "============================================"
echo "  SOUL Tower Setup"
echo "============================================"
echo ""

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker is not installed."
    echo "Install Docker first: https://docs.docker.com/engine/install/"
    exit 1
fi

if ! command -v docker compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "ERROR: Docker Compose is not available."
    echo "Install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "[1/3] Setting hostname to 'soul'..."
sudo hostnamectl set-hostname soul
echo "      Hostname set. soul.local will resolve to this machine."

# Ensure avahi-daemon is running for .local resolution
if command -v systemctl &> /dev/null; then
    if systemctl is-active --quiet avahi-daemon 2>/dev/null; then
        echo "      avahi-daemon is running."
    else
        echo "      Starting avahi-daemon for .local resolution..."
        sudo systemctl enable avahi-daemon 2>/dev/null || true
        sudo systemctl start avahi-daemon 2>/dev/null || true
    fi
fi

echo ""
echo "[2/3] Building and starting SOUL containers..."
docker compose up -d --build

echo ""
echo "[3/3] Verifying..."
sleep 3

if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    echo "      ✓ Student app is running on port 3000"
else
    echo "      ✗ Student app not responding on port 3000"
fi

if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health | grep -q "200"; then
    echo "      ✓ Health check passed"
else
    echo "      ✗ Health check failed"
fi

if curl -s http://localhost:3000/certs/ | grep -q "SOUL"; then
    echo "      ✓ Certificate files are being served"
else
    echo "      ✗ Certificate files not found at /certs/"
fi

echo ""
echo "============================================"
echo "  SOUL Tower is ready!"
echo "============================================"
echo ""
echo "  WiFi Network:      RUT_xxx_2G"
echo "  Student App:       http://soul.local:3000"
echo "  Cert Downloads:    http://soul.local:3000/certs/"
echo "  Teacher Dashboard: https://soul.local:3001"
echo ""
echo "  Share the WiFi password with students!"
echo "============================================"
