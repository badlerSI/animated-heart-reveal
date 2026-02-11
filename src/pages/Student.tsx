import { motion } from "framer-motion";
import { Wifi, Globe, Download, HelpCircle, Monitor, Laptop, ShieldCheck, Tablet, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";

const cyan = "#1bbdc5";
const cyanMuted = "#5BA8C4";

const certButtons = [
  {
    label: "Windows",
    href: "http://soul.local:3000/certs/install-windows.bat",
    icon: Monitor,
    hint: "Right-click → Run as administrator",
  },
  {
    label: "Mac",
    href: "http://soul.local:3000/certs/install-mac.command",
    icon: Laptop,
    hint: "Double-click, enter password",
  },
  {
    label: "Chromebook",
    href: "http://soul.local:3000/certs/SOUL-Learning-CA.crt",
    icon: Globe,
    hint: "Import in chrome://settings/certificates",
  },
  {
    label: "iPad",
    href: "http://soul.local:3000/certs/install-ios.mobileconfig",
    icon: Tablet,
    hint: "Open file, then enable trust in Settings",
  },
];

const faqs = [
  {
    question: 'It says "site can\'t be reached"',
    answer:
      "Make sure you're connected to the SOUL Tower WiFi (RUT_xxx_2G), not your school's main network. Ask your teacher for the WiFi password.",
  },
  {
    question: '"soul.local" doesn\'t work',
    answer:
      "Ask your teacher for the backup address (it looks like 192.168.x.x:3000).",
  },
  {
    question: 'I don\'t see an "Install" button',
    answer:
      'Look for a small icon in the address bar, or click the three-dots menu and choose "Install SOUL Student". If you\'ve already installed it, find "SOUL Student" in your apps!',
  },
  {
    question: "Microphone isn't working",
    answer:
      "Make sure you installed the security certificate (Step 3). The certificate lets your browser use the microphone. When SOUL asks for microphone permission, click Allow.",
  },
  {
    question: "Windows SmartScreen blocks the certificate installer",
    answer:
      'Click "More info" then "Run anyway". The installer just adds the SOUL certificate to your computer — it\'s safe.',
  },
  {
    question: "Chromebook: How do I install the certificate?",
    answer:
      'Download the .crt file, then open Chrome and go to chrome://settings/certificates. Click "Authorities" → "Import" and select the downloaded file. Check "Trust this certificate for identifying websites" and click OK.',
  },
  {
    question: "I see a security warning",
    answer:
      "You need to install the security certificate first (Step 3). Download it for your device and follow the instructions.",
  },
];

const Student = () => {
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            SOUL Student Setup
          </h1>
          <p className="text-lg sm:text-xl mt-4" style={{ color: cyanMuted }}>
            Get started in 2 minutes — no internet needed!
          </p>
        </motion.div>
      </section>

      {/* 4 Steps */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto rounded-2xl p-8 text-center"
          style={{
            background: `linear-gradient(135deg, ${cyan}, #0e8a8f)`,
            boxShadow: `0 0 40px ${cyan}30`,
          }}
        >
          <h2 className="text-2xl font-bold text-[#0a0a0f] mb-6">
            4 Easy Steps
          </h2>

          <div className="space-y-4 text-left">
            {/* Step 1 */}
            <div className="flex items-start gap-4 bg-black/15 rounded-xl p-4">
              <Wifi className="w-6 h-6 mt-0.5 flex-shrink-0 text-[#0a0a0f]" />
              <div>
                <span className="font-bold text-[#0a0a0f]">1.</span>{" "}
                <span className="text-[#0a0a0f]">
                  Connect to WiFi network <strong>RUT_xxx_2G</strong>
                </span>
                <p className="text-xs mt-1 text-[#0a0a0f]/70">
                  Ask your teacher for the password
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-black/15 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 mt-0.5 flex-shrink-0 text-[#0a0a0f]" />
                <div>
                  <span className="font-bold text-[#0a0a0f]">2.</span>{" "}
                  <span className="text-[#0a0a0f]">
                    Open Chrome and type:
                  </span>
                </div>
              </div>
              <div className="bg-white/90 rounded-lg px-4 py-3 mt-3 text-center">
                <code
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: "#0e8a8f" }}
                >
                  soul.local:3000
                </code>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 bg-black/15 rounded-xl p-4">
              <ShieldCheck className="w-6 h-6 mt-0.5 flex-shrink-0 text-[#0a0a0f]" />
              <div>
                <span className="font-bold text-[#0a0a0f]">3.</span>{" "}
                <span className="text-[#0a0a0f]">
                  Install the <strong>security certificate</strong> for your device
                </span>
                <p className="text-xs mt-1 text-[#0a0a0f]/70">
                  Download it using the buttons below
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4 bg-black/15 rounded-xl p-4">
              <Download className="w-6 h-6 mt-0.5 flex-shrink-0 text-[#0a0a0f]" />
              <div>
                <span className="font-bold text-[#0a0a0f]">4.</span>{" "}
                <span className="text-[#0a0a0f]">
                  Click <strong>"Install"</strong> when asked
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-lg font-semibold text-[#0a0a0f]">
            That's it! SOUL will appear in your apps.
          </p>
        </motion.div>
      </section>

      {/* Certificate Install Section */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6" style={{ color: cyan }} />
            <h2 className="text-xl font-bold text-[#f0f8ff]">
              Step 3: Install Security Certificate
            </h2>
          </div>
          <p className="text-sm mb-6" style={{ color: cyanMuted }}>
            Download the certificate for your device. This lets SOUL use your microphone without warnings.
          </p>

          <div className="grid grid-cols-2 gap-3">
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
          </div>

          <div
            className="mt-4 rounded-xl p-4 border-l-4 text-sm"
            style={{ background: "#1a1508", borderColor: "#f59e0b", color: cyanMuted }}
          >
            <strong className="text-[#fbbf24]">iPad/iPhone extra step:</strong>{" "}
            After installing, go to Settings → General → About → Certificate Trust Settings
            and enable full trust for "SOUL Learning CA".
          </div>
        </motion.div>
      </section>

      {/* Help FAQ */}
      <section className="px-6 py-16">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6" style={{ color: cyan }} />
            <h2 className="text-2xl font-bold text-[#f0f8ff]">Need Help?</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#1bbdc5]/30"
              >
                <AccordionTrigger className="text-white hover:text-[#1bbdc5] text-left py-4 text-base">
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

      <PageFooter />
    </div>
  );
};

export default Student;
