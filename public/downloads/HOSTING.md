# Hosting SOUL Installer on soulinterface.ai

## Option 1: GitHub Gist (Easiest)

1. Go to https://gist.github.com
2. Create a new gist with filename `install.sh`
3. Paste the contents of `install.sh`
4. Click "Create public gist"
5. Click "Raw" button to get the raw URL
6. Your install command becomes:
   ```bash
   curl -fsSL https://gist.githubusercontent.com/YOUR_USERNAME/GIST_ID/raw/install.sh | bash
   ```

Then on soulinterface.ai, add a redirect from `/install.sh` to the gist raw URL.

---

## Option 2: GitHub Repository

1. Create a new GitHub repo: `soul-chromebook-installer`
2. Add `install.sh` to the repo
3. Use GitHub Pages or raw file URL:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/soul-chromebook-installer/main/install.sh | bash
   ```

---

## Option 3: Cloudflare R2 / S3

1. Upload `install.sh` to your bucket
2. Make it publicly accessible
3. Use the public URL

---

## Option 4: Add to Lovable Site (if supported)

If Lovable allows static file hosting:
1. Create a route `/install.sh` that serves the raw script
2. Set Content-Type to `text/plain` or `application/x-sh`

---

## Adding a /chromebook Page to soulinterface.ai

Create a page at `soulinterface.ai/chromebook` with this content:

```html
<h1>SOUL for Chromebook</h1>

<h2>Quick Install</h2>
<p>Open Terminal on your Chromebook and paste:</p>

<pre><code>curl -fsSL https://soulinterface.ai/install.sh | bash</code></pre>

<h2>First Time?</h2>
<ol>
  <li>On your Chromebook, open <strong>Settings</strong></li>
  <li>Click <strong>Advanced</strong> → <strong>Developers</strong></li>
  <li>Click <strong>Turn on</strong> next to "Linux development environment"</li>
  <li>Wait for setup (~5-10 minutes)</li>
  <li>When Terminal opens, paste the command above</li>
</ol>

<h2>Custom Server</h2>
<p>If your teacher gave you a specific server address:</p>
<pre><code>SOUL_URL=http://YOUR_SERVER:3000 curl -fsSL https://soulinterface.ai/install.sh | bash</code></pre>
```

---

## Testing the Installer

You can test locally before hosting:

```bash
# Test from local file
bash /home/badler/soul-system/frontend/chromebook-kiosk/install.sh

# Or serve it locally
cd /home/badler/soul-system/frontend/chromebook-kiosk
python3 -m http.server 8888
# Then: curl -fsSL http://localhost:8888/install.sh | bash
```

---

## Updating the Installer

When you update `install.sh`:
1. Update the file in this folder
2. Upload/push to wherever you're hosting it
3. Users running the installer will get the new version automatically
