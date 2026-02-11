import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, LogOut, CheckCircle, Settings, Server, KeyRound, HelpCircle, Laptop, Download, Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";
import { toast } from "sonner";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const ZIP_FILES = [
  { path: "README.txt", zipPath: "README.txt" },
  { path: "HOSTING.md", zipPath: "HOSTING.md" },
  { path: "Dockerfile", zipPath: "Dockerfile" },
  { path: "nginx.conf", zipPath: "nginx.conf" },
  { path: "docker-compose.yml", zipPath: "docker-compose.yml" },
  { path: "start-server.sh", zipPath: "start-server.sh" },
  { path: "stop-server.sh", zipPath: "stop-server.sh" },
  { path: "student-app/index.html", zipPath: "student-app/index.html" },
  { path: "student-app/offline.html", zipPath: "student-app/offline.html" },
  { path: "student-app/icon.svg", zipPath: "student-app/icon.svg" },
  { path: "student-app/manifest.json", zipPath: "student-app/manifest.json" },
  { path: "student-app/sw.js", zipPath: "student-app/sw.js" },
  { path: "student-app/assets/index-BI9yYeNr.js", zipPath: "student-app/assets/index-BI9yYeNr.js" },
  { path: "student-app/assets/index-Q5tyc_K_.css", zipPath: "student-app/assets/index-Q5tyc_K_.css" },
];

const Chromebook = () => {
  const [copied, setCopied] = useState(false);
  const [zipping, setZipping] = useState(false);

  const curlCommand = "curl -fsSL https://soulinterface.ai/install.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadZip = async () => {
    setZipping(true);
    try {
      const zip = new JSZip();
      const results = await Promise.all(
        ZIP_FILES.map(async (f) => {
          const res = await fetch(`/downloads/${f.path}`);
          if (!res.ok) throw new Error(`Failed to fetch ${f.path}`);
          const blob = await res.blob();
          return { zipPath: f.zipPath, blob };
        })
      );
      results.forEach(({ zipPath, blob }) => zip.file(zipPath, blob));
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "soul-server-package.zip");
      toast.success("Download started");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create download package");
    } finally {
      setZipping(false);
    }
  };

  const cyan = "#1bbdc5";
  const cyanMuted = "#5BA8C4";
  const cyanDim = "#4A8DA8";

  const steps = [
    {
      icon: Settings,
      title: "Enable Linux",
      description: "Go to Settings → Advanced → Developers and turn on \"Linux development environment.\"",
    },
    {
      icon: Terminal,
      title: "Run the Installer",
      description: "Open the Linux terminal and paste the install command below. The first run installs Docker and may ask you to log out.",
    },
    {
      icon: LogOut,
      title: "Log Out & Back In",
      description: "Log out of the Linux terminal and log back in for Docker permissions to take effect. Then run the same command again.",
    },
    {
      icon: CheckCircle,
      title: "Launch SOUL",
      description: "A \"SOUL Learning\" icon appears on your desktop. Double-click it to launch! You can also use ~/soul/menu.sh from the terminal.",
    },
  ];

  const faqs = [
    {
      question: "Docker says \"permission denied\"",
      answer: "Log out of Linux and log back in. Docker group changes require a new session to take effect.",
    },
    {
      question: "Linux option not available",
      answer: "Your Chromebook may not support Linux (Crostini). Most Chromebooks from 2019 or later support it. Check your model at chromeos.dev.",
    },
    {
      question: "Menu doesn't appear",
      answer: "Run ~/soul/menu.sh manually from the Terminal. If that works, the auto-start may not have been added to .bashrc — reinstall to fix.",
    },
    {
      question: "Can't reach the SOUL server",
      answer: "Check that ./start-server.sh is running on the teacher's machine and note the IP displayed. Verify the Chromebook is on the same network.",
    },
    {
      question: "Students found a way to exit kiosk mode",
      answer: "Report it! We have a $1,000 Bug Bounty for security bypasses. Email: contact@soulinterface.ai",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="py-20 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Laptop className="w-12 h-12 mx-auto mb-4" style={{ color: cyan }} />
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Chromebook Setup Guide
          </h1>
          <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto" style={{ color: cyanMuted }}>
            Everything you need to turn Chromebooks into locked-down SOUL learning stations.
          </p>
        </motion.div>
      </section>

      {/* Download Package */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.button
            onClick={downloadZip}
            disabled={zipping}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition-all disabled:opacity-60"
            style={{
              background: `linear-gradient(135deg, ${cyan}, #0e8a8f)`,
              color: "#0a0a0f",
              boxShadow: `0 0 30px ${cyan}40`,
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {zipping ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            {zipping ? "Assembling package…" : "Download Server Package"}
          </motion.button>
          <p className="text-sm mt-3" style={{ color: cyanDim }}>
            Includes Dockerfile, nginx config, compose file, startup scripts, student app, and docs.
          </p>
        </div>
      </section>

      {/* Quick Install */}
      <section className="px-6 py-16 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 sm:p-8 border"
            style={{
              background: "linear-gradient(135deg, #12121a 0%, #0d1520 100%)",
              borderColor: `${cyan}30`,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5" style={{ color: cyan }} />
              <span className="text-sm font-bold tracking-wider uppercase" style={{ color: cyan }}>
                Quick Install
              </span>
            </div>
            <div className="flex items-center gap-3 bg-black/50 rounded-lg p-4 border" style={{ borderColor: `${cyan}20` }}>
              <code className="flex-1 text-sm sm:text-base font-mono text-[#e0f4ff] break-all">
                {curlCommand}
              </code>
              <button
                onClick={copyToClipboard}
                className="flex-shrink-0 p-2 rounded-lg transition-colors hover:bg-white/10"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5" style={{ color: cyan }} />
                ) : (
                  <Copy className="w-5 h-5" style={{ color: cyanMuted }} />
                )}
              </button>
            </div>
            <p className="text-sm mt-4" style={{ color: cyanDim }}>
              Run this in the Linux terminal on your Chromebook. You may need to log out and back in once for Docker permissions, then run it again to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Setup in 4 Steps
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border bg-[#12121a] relative"
                style={{ borderColor: `${cyan}30` }}
              >
                <span
                  className="absolute top-4 right-4 text-3xl font-bold opacity-20"
                  style={{ color: cyan }}
                >
                  {index + 1}
                </span>
                <step.icon className="w-8 h-8 mb-4" style={{ color: cyan }} />
                <h3 className="font-bold text-lg mb-2 text-[#f0f8ff]">{step.title}</h3>
                <p className="text-sm" style={{ color: cyanMuted }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            For Teachers & Administrators
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-[#12121a]"
              style={{ borderColor: `${cyan}40` }}
            >
              <Server className="w-8 h-8 mb-4" style={{ color: cyan }} />
              <h3 className="font-bold text-lg mb-3 text-[#f0f8ff]">Custom Server URL</h3>
              <p className="text-sm mb-3" style={{ color: cyanMuted }}>
                If your Soul Interface tower uses a different IP:
              </p>
              <p className="text-xs font-semibold mb-1" style={{ color: cyan }}>During install:</p>
              <code className="block text-sm font-mono p-3 rounded-lg bg-black/50 text-[#e0f4ff] border mb-3" style={{ borderColor: `${cyan}20` }}>
                SOUL_URL=http://YOUR_IP:3000 curl -fsSL https://soulinterface.ai/install.sh | bash
              </code>
              <p className="text-xs font-semibold mb-1" style={{ color: cyan }}>After install:</p>
              <code className="block text-sm font-mono p-3 rounded-lg bg-black/50 text-[#e0f4ff] border" style={{ borderColor: `${cyan}20` }}>
                SOUL_URL=http://YOUR_IP:3000 ~/soul/start-soul.sh
              </code>
              <p className="text-sm mt-3" style={{ color: cyanDim }}>
                Or use the boot menu: <code className="font-mono" style={{ color: cyan }}>~/soul/menu.sh</code>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl border bg-[#12121a]"
              style={{ borderColor: `${cyan}40` }}
            >
              <KeyRound className="w-8 h-8 mb-4" style={{ color: cyan }} />
              <h3 className="font-bold text-lg mb-3 text-[#f0f8ff]">Exiting SOUL</h3>
              <p className="text-sm mb-2" style={{ color: cyanMuted }}>
                To exit kiosk mode and return to the desktop:
              </p>
              <ul className="space-y-2 text-sm" style={{ color: cyanMuted }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: cyan }}>•</span>
                  Press <code className="font-mono px-1 py-0.5 rounded bg-black/50 text-[#e0f4ff]">Ctrl+Shift+Q</code> to force-close
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: cyan }}>•</span>
                  Press <code className="font-mono px-1 py-0.5 rounded bg-black/50 text-[#e0f4ff]">Ctrl+Alt+T</code> to open crosh
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: cyan }}>•</span>
                  Run: <code className="font-mono px-1 py-0.5 rounded bg-black/50 text-[#e0f4ff]">~/soul/stop-soul.sh</code>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: cyan }}>•</span>
                  Or simply restart the Chromebook
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Troubleshooting
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#1bbdc5]/30"
              >
                <AccordionTrigger className="text-white hover:text-[#1bbdc5] text-left py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Chromebook;
