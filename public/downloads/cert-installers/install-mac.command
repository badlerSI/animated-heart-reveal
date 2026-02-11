#!/bin/bash
echo "============================================"
echo "  SOUL Learning CA Certificate Installer"
echo "  macOS"
echo "============================================"
echo ""
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
echo "Installing SOUL Learning CA certificate..."
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "$SCRIPT_DIR/SOUL-Learning-CA.crt"
if [ $? -eq 0 ]; then
    echo ""
    echo "SUCCESS! Certificate installed."
    echo "Please restart your browser."
else
    echo ""
    echo "ERROR: Installation failed. Make sure you entered your password correctly."
fi
