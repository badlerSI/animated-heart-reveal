SOUL Learning - Certificate Installers
=======================================

These files install the SOUL Learning CA certificate so HTTPS
connections work without security warnings.

Files:
  install-windows.bat      - Windows (run as Administrator)
  install-ios.mobileconfig  - macOS & iOS (double-click, approve in System Settings)
  install-chromeos.sh       - ChromeOS/Linux (run in Terminal)
  install-ios.mobileconfig  - iPad/iPhone (open file, then enable trust)
  SOUL-Learning-CA.crt      - The certificate file itself

Instructions by platform:

  WINDOWS:
    Right-click install-windows.bat → "Run as administrator"

  MAC:
    Double-click install-ios.mobileconfig → Approve in System Settings
    On macOS Ventura+: System Settings → Privacy & Security → Profiles

  CHROMEBOOK:
    Open Terminal (Ctrl+Alt+T) → Run: bash install-chromeos.sh

  iPAD / iPHONE:
    1. Open install-ios.mobileconfig
    2. Go to Settings → General → VPN & Device Management
    3. Install the "SOUL Learning Security" profile
    4. Go to Settings → General → About → Certificate Trust Settings
    5. Enable trust for "SOUL Learning CA"

After installing, restart your browser.
