#!/bin/bash
echo "============================================"
echo "  SOUL Learning CA Certificate Installer"
echo "  ChromeOS / Linux"
echo "============================================"
echo ""
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
echo "Installing SOUL Learning CA certificate..."
sudo cp "$SCRIPT_DIR/SOUL-Learning-CA.crt" /usr/local/share/ca-certificates/SOUL-Learning-CA.crt
sudo update-ca-certificates
echo ""
echo "Certificate installed for system use."
echo ""
echo "For Chrome: Open chrome://settings/certificates"
echo "  -> Authorities tab -> Import -> Select SOUL-Learning-CA.crt"
echo "  -> Check 'Trust this certificate for identifying websites'"
echo ""
echo "Please restart your browser."
