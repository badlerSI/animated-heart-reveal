

# Fix Chromebook Setup Instructions

## Problem
The setup steps on the `/chromebook` page don't accurately reflect what the installer actually does. The installer is a two-pass process (first run installs Docker and exits, second run after re-login does the actual setup), but the page presents it as a seamless 4-step flow.

## Changes

### Update the steps array in `src/pages/Chromebook.tsx`

Replace the current 4 steps with 5 steps that match reality:

| Step | Current | Fixed |
|------|---------|-------|
| 1 | Enable Linux (Settings -> Advanced -> Developers) | Same -- no change needed |
| 2 | "Run the Installer" -- paste the curl command | "Install Docker" -- paste the curl command. The installer will install Docker and then ask you to log out. |
| 3 | "Log Out & Back In" -- Docker requires a new session | "Log Out & Back In" -- Log out of the Linux terminal and log back in for Docker permissions to take effect. |
| 4 | "Launch SOUL" -- menu appears automatically, press 1 | "Run the Installer Again" -- paste the same curl command a second time. This time it builds the kiosk container and sets everything up. |
| (new) 5 | -- | "Launch SOUL" -- Open Terminal. The SOUL menu appears automatically. Press 1 to start. |

### Update the Quick Install section

Add a note below the curl command:
"Run this in the Linux terminal on your Chromebook. The first run installs Docker (you'll need to log out and back in, then run it again). The second run completes the setup."

### Update the "Custom Server URL" card

Add the install-time variant alongside the existing post-install command:

- **During install:** `SOUL_URL=http://YOUR_IP:3000 curl -fsSL https://soulinterface.ai/install.sh | bash`
- **After install:** `SOUL_URL=http://YOUR_IP:3000 ~/soul/start-soul.sh`

### File changed

| File | Change |
|------|--------|
| `src/pages/Chromebook.tsx` | Update `steps` array (4 -> 5 steps), update Quick Install description, update Custom Server URL card |

