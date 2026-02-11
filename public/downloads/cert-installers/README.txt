SOUL Learning - Certificate Installers
=======================================

These files install the SOUL Learning CA certificate so HTTPS
connections work without security warnings.

These files are also served locally from the SOUL Tower at:
  http://soul.local:3000/certs/

Files:
  install-windows.bat      - Windows (run as Administrator)
  install-mac.command       - macOS (double-click, enter password)
  install-ios.mobileconfig  - iOS/iPadOS (open file, approve in Settings)
  install-chromeos.sh       - ChromeOS/Linux (run in Terminal)
  SOUL-Learning-CA.crt      - The certificate file itself

Instructions by platform:

  WINDOWS:
    Right-click install-windows.bat → "Run as administrator"
    If SmartScreen blocks it: click "More info" → "Run anyway"

  MAC:
    Double-click install-mac.command → Enter your password
    On macOS Ventura+: System Settings → Privacy & Security → Profiles

  CHROMEBOOK:
    Download SOUL-Learning-CA.crt
    Open Chrome → chrome://settings/certificates
    Click "Authorities" → "Import"
    Select the .crt file → Check "Trust for websites" → OK

  iPAD / iPHONE:
    1. Open install-ios.mobileconfig
    2. Go to Settings → General → VPN & Device Management
    3. Install the "SOUL Learning Security" profile
    4. Go to Settings → General → About → Certificate Trust Settings
    5. Enable trust for "SOUL Learning CA"

After installing, restart your browser.
