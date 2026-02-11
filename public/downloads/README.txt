SOUL Learning System - Chromebook Installer
============================================

INSTALLATION (One-Time Setup)
-----------------------------

1. Open Terminal on the Chromebook
   (Settings > Advanced > Developers > Linux > Terminal)

2. Run this command:
   bash install.sh

3. Follow the prompts. You may need to log out and back in
   once for Docker permissions.

4. After installation, a "SOUL Learning" icon will appear
   on the desktop. Just double-click to launch!


DAILY USE
---------
Students just double-click the "SOUL Learning" icon on the
Linux desktop to start learning.

To exit: Press Ctrl+Shift+Q or close the window.


TEACHER COMMANDS
----------------
Open Terminal and type:
  ~/soul/menu.sh       - Show app selector menu
  ~/soul/stop-soul.sh  - Force stop SOUL


SERVER URL
----------
Default server: http://192.168.1.10:3000

To use a different server, run:
  SOUL_URL=http://YOUR_IP:3000 bash install.sh


TROUBLESHOOTING
---------------
- "Docker not accessible": Log out and log back in
- Black screen: Check WiFi connection to classroom network
- Slow to load: First launch downloads components (~2 min)


Support: https://soulinterface.ai/help
