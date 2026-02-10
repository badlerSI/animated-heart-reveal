SOUL Learning System — Chromebook Setup Guide
==============================================

Soul Interface © 2026


WHAT IS THIS?
─────────────
SOUL turns any Chromebook into a locked-down learning station
that connects to your Soul Interface tower. Students get a
full-screen browser pointed at your SOUL server — no tabs,
no URL bar, no distractions.


REQUIREMENTS
────────────
- A Chromebook with ChromeOS Linux (Crostini) enabled
- A Soul Interface tower running on your local network
- Internet connection for initial setup only


QUICK INSTALL
─────────────
1. On the Chromebook, open Settings → Advanced → Developers
2. Turn on "Linux development environment" and follow the prompts
3. Open the Linux terminal and run:

   curl -fsSL https://soulinterface.ai/install.sh | bash

4. Log out and back in (required for Docker permissions)
5. Run: ~/.soul/start-soul.sh


CUSTOM SERVER URL
─────────────────
If your Soul Interface tower is at a different IP address:

   SOUL_URL=http://YOUR_IP:3000 ~/.soul/start-soul.sh

Or use the boot menu:

   ~/.soul/soul-menu.sh


EXITING SOUL (FOR TEACHERS)
───────────────────────────
To exit the kiosk and return to the normal desktop:
- Press Ctrl+Alt+T to open crosh (ChromeOS shell)
- Type: vmc container termina penguin -- ~/.soul/stop-soul.sh
- Or simply restart the Chromebook


TROUBLESHOOTING
───────────────
Q: Docker says "permission denied"
A: Log out of Linux and log back in. Docker group changes
   require a new session.

Q: Chromium won't display
A: Make sure Sommelier (the Wayland bridge) is running.
   Try: sommelier --peer-cmd-prefix="" chromium --no-sandbox

Q: Can't reach the SOUL server
A: Verify the tower is on and connected to the same network.
   Try pinging the IP from the Linux terminal:
   ping 192.168.1.100

Q: Students found a way to exit kiosk mode
A: Report it! We have a $1,000 Bug Bounty for security bypasses.
   Email: contact@soulinterface.ai


SUPPORT
───────
Web:   https://soulinterface.ai/chromebook
Email: contact@soulinterface.ai
