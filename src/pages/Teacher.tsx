import { motion } from "framer-motion";
import {
  Download,
  Server,
  Wifi,
  Monitor,
  HelpCircle,
  Globe,
  Router,
  Laptop,
  ShieldCheck,
  Tablet,
  KeyRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";

const cyan = "#1bbdc5";
const cyanMuted = "#5BA8C4";
const cyanDim = "#4A8DA8";

const certButtons = [
  {
    label: "Windows",
    href: "https://soul.local:3000/certs/install-windows.bat",
    icon: Monitor,
    hint: "Right-click → Run as administrator",
  },
  {
    label: "Mac",
    href: "https://soul.local:3000/certs/install-mac.command",
    icon: Laptop,
    hint: "Double-click, enter password",
  },
  {
    label: "Chromebook",
    href: "https://soul.local:3000/certs/SOUL-Learning-CA.crt",
    icon: Globe,
    hint: "Import in chrome://settings/certificates",
  },
  {
    label: "iPad",
    href: "https://soul.local:3000/certs/install-ios.mobileconfig",
    icon: Tablet,
    hint: "Open file → Settings → enable trust",
  },
];

const faqs = [
  {
    question: '"soul.local" doesn\'t work on some devices',
    answer:
      "Some older devices don't support .local addresses. Use the IP address instead: https://192.168.1.10:3001. You can find your server's IP by running hostname -I in terminal.",
  },
  {
    question: "Students can't connect",
    answer:
      "Verify they're on the RUT_xxx_2G WiFi, not the school network. Check that the SOUL server is running. Try the IP address instead of soul.local.",
  },
  {
    question: "Microphone not working",
    answer:
      "Browsers require HTTPS for microphone access on non-localhost addresses. Make sure students have installed the SOUL certificate from soul.local:3000/certs/.",
  },
  {
    question: "Need to exit SOUL on a student device",
    answer:
      "Press Ctrl+Shift+Q (Chromebook) or Cmd+Q (Mac) to close the app.",
  },
  {
    question: "Certificate warning still appears",
    answer:
      'Restart your browser after installing the certificate. On iPad/iPhone, also go to Settings → General → About → Certificate Trust Settings and enable full trust for "SOUL Learning CA".',
  },
  {
    question: "Windows SmartScreen blocks the certificate installer",
    answer:
      'Click "More info" then "Run anyway". The installer just adds the SOUL certificate to the computer — it\'s safe.',
  },
  {
    question: "Chromebook: How do students install the certificate?",
    answer:
      'Download the .crt file from soul.local:3000/certs/, then open Chrome and go to chrome://settings/certificates. Click "Authorities" → "Import" and select the downloaded file. Check "Trust this certificate for identifying websites" and click OK.',
  },
];

const Teacher = () => {
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
            Classroom deployment guide — no internet needed
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
                <td className="py-3">WiFi Network</td>
                <td className="py-3 font-mono text-lg font-bold">RUT_xxx_2G</td>
              </tr>
              <tr className="border-b border-black/15">
                <td className="py-3">Student App</td>
                <td className="py-3 font-mono text-lg font-bold">https://soul.local:3000</td>
              </tr>
              <tr className="border-b border-black/15">
                <td className="py-3">Teacher Dashboard</td>
                <td className="py-3 font-mono text-lg font-bold">https://soul.local:3001</td>
              </tr>
              <tr className="border-b border-black/15">
                <td className="py-3">Cert Downloads</td>
                <td className="py-3 font-mono">https://soul.local:3000/certs/</td>
              </tr>
              <tr>
                <td className="py-3">Backup (if .local fails)</td>
                <td className="py-3 font-mono">192.168.1.10:3000</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* WiFi Password Reminder */}
      <section className="px-6 pb-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border-l-4"
            style={{ background: "#1a1508", borderColor: "#f59e0b" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <KeyRound className="w-5 h-5" style={{ color: "#fbbf24" }} />
              <h3 className="font-bold text-lg" style={{ color: "#fbbf24" }}>
                Share the WiFi Password Before Class
              </h3>
            </div>
            <p className="text-sm" style={{ color: cyanMuted }}>
              Students need to connect to <strong className="text-[#e0f4ff]">RUT_xxx_2G</strong> to
              access SOUL. Write the WiFi password on the board or share it at the start of class.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Device Setup - Certificate Section */}
      <section className="px-6 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6" style={{ color: cyan }} />
            <h2 className="text-2xl font-bold text-[#f0f8ff]">
              Teacher Device Setup
            </h2>
          </div>
          <p className="text-sm mb-6" style={{ color: cyanMuted }}>
            Install the SOUL certificate so you can access the dashboard securely at{" "}
            <code className="font-mono text-[#e0f4ff]">https://soul.local:3001</code>.
            Download from the local server once connected to RUT_xxx_2G.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {certButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className="flex flex-col items-center gap-2 rounded-xl p-4 border transition-all hover:scale-[1.03]"
                style={{
                  background: "#12121a",
                  borderColor: `${cyan}30`,
                }}
              >
                <btn.icon className="w-7 h-7" style={{ color: cyan }} />
                <span className="font-semibold text-[#f0f8ff] text-sm">
                  {btn.label}
                </span>
                <span className="text-[10px] text-center leading-tight" style={{ color: cyanMuted }}>
                  {btn.hint}
                </span>
              </a>
            ))}
          </motion.div>

          <div
            className="mt-4 rounded-xl p-4 border-l-4 text-sm"
            style={{ background: "#1a1508", borderColor: "#f59e0b", color: cyanMuted }}
          >
            <strong className="text-[#fbbf24]">iPad/iPhone extra step:</strong>{" "}
            After installing, go to Settings → General → About → Certificate Trust Settings
            and enable full trust for "SOUL Learning CA".
          </div>
        </div>
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
              Everything Downloads from the SOUL Tower
            </h3>
            <p className="text-sm mb-3" style={{ color: cyanMuted }}>
              No internet required! Students connect to the Tower WiFi and get everything locally:
            </p>
            <ol className="text-sm space-y-1 list-decimal list-inside" style={{ color: cyanMuted }}>
              <li>Connect to WiFi network <strong className="text-[#e0f4ff]">RUT_xxx_2G</strong> (give them the password)</li>
              <li>
                Open Chrome and type{" "}
                <code className="font-mono text-[#e0f4ff]">https://soul.local:3000</code>
              </li>
              <li>Download and install the security certificate for their device</li>
              <li>Click "Install" when prompted — SOUL icon appears in their apps!</li>
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
            Network Architecture
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 mb-6 border-l-4"
            style={{ background: "#1a1508", borderColor: "#f59e0b" }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "#fbbf24" }}>
              All Devices on RUT_xxx_2G
            </h3>
            <p className="text-sm" style={{ color: cyanMuted }}>
              All student devices must be on the <strong className="text-[#e0f4ff]">RUT_xxx_2G</strong> WiFi network
              broadcast by the SOUL Tower's Teltonika router. This is a dedicated local network — no internet required.
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
│     Teltonika Router (RUT_xxx_2G WiFi)      │
└─────────────────┬───────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───▼───┐   ┌────▼────┐   ┌───▼───┐
│Teacher│   │  SOUL   │   │Student│
│Laptop │   │ Tower   │   │Devices│
│:3001  │   │(server) │   │:3000  │
└───────┘   └────┬────┘   └───────┘
                 │
         ┌───────┴───────┐
         │ Serves:       │
         │ • Student app │
         │ • Cert files  │
         │ • Dashboard   │
         └───────────────┘`}
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
              Access from any device on the RUT_xxx_2G network:
            </p>
            <div
              className="rounded-lg p-4 text-center font-mono text-lg font-bold"
              style={{ background: "#1e293b", color: "#22c55e" }}
            >
              https://soul.local:3001
            </div>
            <p className="text-sm mt-4" style={{ color: cyanDim }}>
              Or use the IP address:{" "}
              <code className="font-mono text-[#e0f4ff]">
                https://192.168.1.10:3001
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
              Result: When students connect to RUT_xxx_2G, SOUL opens automatically!
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
              Each Site Has Its Own SOUL Tower
            </h3>
            <p className="text-sm mb-3" style={{ color: cyanMuted }}>
              The <code className="font-mono text-[#e0f4ff]">soul.local</code> address only works when:
            </p>
            <ul className="text-sm space-y-1 list-disc list-inside mb-4" style={{ color: cyanMuted }}>
              <li>A SOUL Tower is running on the local network</li>
              <li>The server's hostname is set to "soul"</li>
              <li>mDNS/Bonjour is enabled (default on most systems)</li>
            </ul>
            <p className="text-sm" style={{ color: cyanMuted }}>
              <strong className="text-[#e0f4ff]">For new sites:</strong> Run the tower-setup.sh script or manually:
            </p>
            <div className="bg-black/40 rounded-lg p-3 mt-2 font-mono text-sm text-[#e0f4ff]">
              sudo hostnamectl set-hostname soul
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f0f8ff] mb-4">
            Downloads
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/downloads/soul-teacher-setup.zip"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              style={{
                background: `linear-gradient(135deg, ${cyan}, #0e8a8f)`,
                color: "#0a0a0f",
                boxShadow: `0 0 30px ${cyan}40`,
              }}
            >
              <Download className="w-5 h-5" />
              Download Teacher Setup
            </motion.a>
            <motion.a
              href="/downloads/soul-student-chromebook.zip"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              style={{
                background: `linear-gradient(135deg, ${cyan}, #0e8a8f)`,
                color: "#0a0a0f",
                boxShadow: `0 0 30px ${cyan}40`,
              }}
            >
              <Download className="w-5 h-5" />
              Download Chromebook Installer
            </motion.a>
          </div>
          <p className="text-sm mt-4" style={{ color: cyanDim }}>
            <strong className="text-[#e0f4ff]">Teacher Setup</strong> — server infrastructure, scripts, docs &amp; cert installers<br />
            <strong className="text-[#e0f4ff]">Chromebook Installer</strong> — student app package for managed Chromebooks
          </p>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default Teacher;
