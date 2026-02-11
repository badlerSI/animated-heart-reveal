import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Loader2,
  Server,
  Wifi,
  Monitor,
  HelpCircle,
  Globe,
  Router,
} from "lucide-react";
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
  { path: "TEACHER-SETUP.txt", zipPath: "TEACHER-SETUP.txt" },
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

const cyan = "#1bbdc5";
const cyanMuted = "#5BA8C4";
const cyanDim = "#4A8DA8";

const faqs = [
  {
    question: '"soul.local" doesn\'t work on some devices',
    answer:
      "Some older devices don't support .local addresses. Use the IP address instead: http://192.168.1.10:3000. You can find your server's IP by running hostname -I in terminal.",
  },
  {
    question: "Students can't connect",
    answer:
      "Verify they're on the classroom WiFi, not the school network. Check that the SOUL server is running. Try the IP address instead of soul.local.",
  },
  {
    question: "Microphone not working",
    answer:
      "Browsers require HTTPS for microphone access on non-localhost addresses. If using IP address, students may need to accept a security warning.",
  },
  {
    question: "Need to exit SOUL on a student device",
    answer:
      "Press Ctrl+Shift+Q (Chromebook) or Cmd+Q (Mac) to close the app.",
  },
];

const Teacher = () => {
  const [zipping, setZipping] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="py-20 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            SOUL Teacher Setup
          </h1>
          <p className="text-base sm:text-lg mt-4" style={{ color: cyanMuted }}>
            Classroom deployment guide
          </p>
        </motion.div>
      </section>

      {/* Quick Reference */}
      <section className="px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl p-8"
          style={{
            background: `linear-gradient(135deg, ${cyan}, #0e8a8f)`,
            boxShadow: `0 0 40px ${cyan}30`,
          }}
        >
          <h2 className="text-xl font-bold text-[#0a0a0f] mb-4">
            Quick Reference
          </h2>
          <table className="w-full text-[#0a0a0f]">
            <tbody>
              <tr className="border-b border-black/15">
                <td className="py-3">Student App</td>
                <td className="py-3 font-mono text-lg font-bold">soul.local:3000</td>
              </tr>
              <tr className="border-b border-black/15">
                <td className="py-3">Teacher Dashboard</td>
                <td className="py-3 font-mono text-lg font-bold">soul.local:3002</td>
              </tr>
              <tr>
                <td className="py-3">Backup (if .local fails)</td>
                <td className="py-3 font-mono">192.168.1.10:3000</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Student Setup */}
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-6">
            Setting Up Student Devices
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 mb-6 border-l-4"
            style={{ background: "#0d1a14", borderColor: "#22c55e" }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "#4ade80" }}>
              No Installation Required!
            </h3>
            <p className="text-sm mb-3" style={{ color: cyanMuted }}>
              SOUL uses PWA (Progressive Web App) technology. Students just:
            </p>
            <ol className="text-sm space-y-1 list-decimal list-inside" style={{ color: cyanMuted }}>
              <li>Connect to classroom WiFi</li>
              <li>
                Open Chrome and type{" "}
                <code className="font-mono text-[#e0f4ff]">soul.local:3000</code>
              </li>
              <li>Click "Install" when prompted</li>
              <li>Done — SOUL icon appears in their apps!</li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border-l-4"
            style={{ background: "#0d1520", borderColor: "#3b82f6" }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "#60a5fa" }}>
              Works On
            </h3>
            <ul
              className="text-sm columns-2 space-y-1"
              style={{ color: cyanMuted }}
            >
              <li>Chromebooks</li>
              <li>Windows laptops</li>
              <li>MacBooks</li>
              <li>iPads (Safari)</li>
              <li>Android tablets</li>
              <li>Any device with a browser</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Network Requirements */}
      <section className="px-6 py-12 bg-[#0d0d14]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-6">
            Network Requirements
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 mb-6 border-l-4"
            style={{ background: "#1a1508", borderColor: "#f59e0b" }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "#fbbf24" }}>
              Important: Same Network Required
            </h3>
            <p className="text-sm" style={{ color: cyanMuted }}>
              All student devices must be on the <strong className="text-[#e0f4ff]">same WiFi network</strong> as
              the SOUL server. This is typically your classroom's dedicated
              WiFi, separate from the school's main network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border"
            style={{ background: "#12121a", borderColor: `${cyan}30` }}
          >
            <h3 className="font-bold text-lg mb-4 text-[#f0f8ff]">
              Network Diagram
            </h3>
            <pre
              className="text-xs sm:text-sm font-mono overflow-x-auto p-4 rounded-lg"
              style={{ background: "#1e293b", color: "#22c55e" }}
            >
{`┌─────────────────────────────────────────────┐
│          Classroom WiFi Router              │
│              (Teltonika)                    │
└─────────────────┬───────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───▼───┐   ┌────▼────┐   ┌───▼───┐
│Teacher│   │  SOUL   │   │Student│
│Laptop │   │ Server  │   │Devices│
│       │   │(this PC)│   │       │
└───────┘   └─────────┘   └───────┘
    │             │             │
    └─────────────┴─────────────┘
          soul.local:3000`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Teacher Dashboard */}
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-6">
            Teacher Dashboard
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border"
            style={{ background: "#12121a", borderColor: `${cyan}30` }}
          >
            <p className="text-sm mb-4" style={{ color: cyanMuted }}>
              Access from any device on the classroom network:
            </p>
            <div
              className="rounded-lg p-4 text-center font-mono text-lg font-bold"
              style={{ background: "#1e293b", color: "#22c55e" }}
            >
              soul.local:3002
            </div>
            <p className="text-sm mt-4" style={{ color: cyanDim }}>
              Or use the IP address:{" "}
              <code className="font-mono text-[#e0f4ff]">
                http://192.168.1.10:3002
              </code>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Optional Captive Portal */}
      <section className="px-6 py-12 bg-[#0d0d14]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-6">
            Optional: Captive Portal Setup
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border"
            style={{ background: "#12121a", borderColor: `${cyan}30` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Router className="w-5 h-5" style={{ color: cyan }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: cyan }}>
                Auto-open SOUL on WiFi connect
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: cyanMuted }}>
              Configure your Teltonika router to redirect students to SOUL automatically:
            </p>
            <ol className="text-sm space-y-2 list-decimal list-inside" style={{ color: cyanMuted }}>
              <li>Access router admin at <code className="font-mono text-[#e0f4ff]">http://172.20.10.1</code></li>
              <li>Navigate to <strong className="text-[#e0f4ff]">Services → Hotspot → General</strong></li>
              <li>Enable Hotspot mode</li>
              <li>
                Set landing page to{" "}
                <code className="font-mono text-[#e0f4ff]">http://192.168.1.10:3000</code>{" "}
                with External redirect
              </li>
              <li>Save and apply</li>
            </ol>
            <p className="text-sm mt-4" style={{ color: "#4ade80" }}>
              Result: When students connect to WiFi, SOUL opens automatically!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6" style={{ color: cyan }} />
            <h2 className="text-2xl font-bold text-[#f0f8ff]">
              Troubleshooting
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#1bbdc5]/30"
              >
                <AccordionTrigger className="text-white hover:text-[#1bbdc5] text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Deploying to Different Sites */}
      <section className="px-6 py-12 bg-[#0d0d14]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-6">
            Deploying to Different Sites
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border-l-4"
            style={{ background: "#1a1508", borderColor: "#f59e0b" }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "#fbbf24" }}>
              Each Site Has Its Own Server
            </h3>
            <p className="text-sm mb-3" style={{ color: cyanMuted }}>
              The <code className="font-mono text-[#e0f4ff]">soul.local</code> address only works when:
            </p>
            <ul className="text-sm space-y-1 list-disc list-inside mb-4" style={{ color: cyanMuted }}>
              <li>A SOUL server is running on the local network</li>
              <li>The server's hostname is set to "soul"</li>
              <li>mDNS/Bonjour is enabled (default on most systems)</li>
            </ul>
            <p className="text-sm" style={{ color: cyanMuted }}>
              <strong className="text-[#e0f4ff]">For new sites:</strong> Set up the SOUL server, then run:
            </p>
            <div className="bg-black/40 rounded-lg p-3 mt-2 font-mono text-sm text-[#e0f4ff]">
              sudo hostnamectl set-hostname soul
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-4">
            Server Package
          </h2>
          <p className="text-sm mb-6" style={{ color: cyanDim }}>
            Includes Dockerfile, nginx config, compose file, startup scripts, student app, teacher setup docs.
          </p>
          <motion.button
            onClick={downloadZip}
            disabled={zipping}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition-all disabled:opacity-60"
            style={{
              background: `linear-gradient(135deg, ${cyan}, #0e8a8f)`,
              color: "#0a0a0f",
              boxShadow: `0 0 30px ${cyan}40`,
            }}
          >
            {zipping ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            {zipping ? "Assembling package…" : "Download Server Package"}
          </motion.button>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default Teacher;
