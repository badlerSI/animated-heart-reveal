import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Terminal, Copy, Check, LogOut, CheckCircle, Settings, Server, KeyRound, Download, HelpCircle, Laptop } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";
import DualWaveButton from "@/components/DualWaveButton";
import { toast } from "sonner";

const Chromebook = () => {
  const [copied, setCopied] = useState(false);

  const curlCommand = "curl -fsSL https://soulinterface.ai/install.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
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
      description: "Open the Linux terminal and paste the install command below.",
    },
    {
      icon: LogOut,
      title: "Log Out & Back In",
      description: "Docker requires a new session. Log out of Linux and log back in.",
    },
    {
      icon: CheckCircle,
      title: "Launch SOUL",
      description: "Run ~/.soul/start-soul.sh — your Chromebook is now a learning station.",
    },
  ];

  const faqs = [
    {
      question: "Docker says \"permission denied\"",
      answer: "Log out of Linux and log back in. Docker group changes require a new session to take effect.",
    },
    {
      question: "Chromium won't display anything",
      answer: "Make sure Sommelier (the Wayland bridge) is running. Try: sommelier --peer-cmd-prefix=\"\" chromium --no-sandbox",
    },
    {
      question: "Can't reach the SOUL server",
      answer: "Verify the tower is on and connected to the same network. Try pinging the IP from the Linux terminal: ping 192.168.1.100",
    },
    {
      question: "Students found a way to exit kiosk mode",
      answer: "Report it! We have a $1,000 Bug Bounty for security bypasses. Email: contact@soulinterface.ai",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Laptop className="w-16 h-16 mx-auto mb-6" style={{ color: cyan }} />
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            SOUL for Chromebook
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl mx-auto" style={{ color: cyanMuted }}>
            Turn any Chromebook into a locked-down learning station.
            <br className="hidden sm:block" />
            One command. No internet required after setup.
          </p>
        </motion.div>
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
              Run this in the Linux terminal on your Chromebook. The installer handles everything.
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
              <p className="text-sm mb-4" style={{ color: cyanMuted }}>
                If your Soul Interface tower uses a different IP:
              </p>
              <code className="block text-sm font-mono p-3 rounded-lg bg-black/50 text-[#e0f4ff] border" style={{ borderColor: `${cyan}20` }}>
                SOUL_URL=http://YOUR_IP:3000 ~/.soul/start-soul.sh
              </code>
              <p className="text-sm mt-3" style={{ color: cyanDim }}>
                Or use the boot menu: <code className="font-mono" style={{ color: cyan }}>~/.soul/soul-menu.sh</code>
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
                  Press <code className="font-mono px-1 py-0.5 rounded bg-black/50 text-[#e0f4ff]">Ctrl+Alt+T</code> to open crosh
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: cyan }}>•</span>
                  Run the stop command: <code className="font-mono px-1 py-0.5 rounded bg-black/50 text-[#e0f4ff]">~/.soul/stop-soul.sh</code>
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

      {/* Downloads */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#f0f8ff]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Downloads
          </motion.h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/downloads/README.txt"
              download
              className="flex items-center gap-3 px-6 py-3 rounded-xl border transition-colors hover:bg-white/5"
              style={{ borderColor: `${cyan}40`, color: cyanMuted }}
            >
              <Download className="w-5 h-5" style={{ color: cyan }} />
              README.txt
            </a>
            <a
              href="/downloads/HOSTING.md"
              download
              className="flex items-center gap-3 px-6 py-3 rounded-xl border transition-colors hover:bg-white/5"
              style={{ borderColor: `${cyan}40`, color: cyanMuted }}
            >
              <Download className="w-5 h-5" style={{ color: cyan }} />
              HOSTING.md
            </a>
          </div>
        </div>
      </section>

      {/* Dual Wave Button */}
      <DualWaveButton />

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Chromebook;
