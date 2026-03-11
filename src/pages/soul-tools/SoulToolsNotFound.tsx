import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Waves } from "lucide-react";

const messages = [
  "You've reached si.tools from the internet. That's like knocking on a submarine from the outside. 🚢",
  "Plot twist: SOUL runs on your school's WiFi, not the open web. Nice try though. 😎",
  "This page intentionally left unhelpful. Connect to your school's network to use SOUL. 🏫",
  "You found the front door, but it only opens from inside. Try your school's WiFi! 🚪",
  "SOUL lives on your school's network — think of it as a secret clubhouse with really good AI. 🤫",
  "Error 404: Internet not required. SOUL works offline, on your school's local server. 📡",
];

const SoulToolsNotFound = () => {
  const message = useMemo(
    () => messages[Math.floor(Math.random() * messages.length)],
    []
  );

  useEffect(() => {
    document.title = "SOUL Interface — Connect to School Network";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg text-center"
      >
        <Waves size={64} className="mx-auto mb-8 text-[#1bbdc5]" strokeWidth={1.5} />
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Wrong side of the wall
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          {message}
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Looking for info about SOUL?
          </p>
          <a
            href="https://soulinterface.ai"
            className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
            style={{ background: "#1bbdc5" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#17a5ac")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1bbdc5")}
          >
            Visit soulinterface.ai →
          </a>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-600 flex items-center justify-center gap-5">
          <a href="https://soulinterface.ai/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
          <a href="https://soulinterface.ai/support" className="hover:text-gray-400 transition-colors">Support</a>
          <a href="mailto:contact@soulinterface.ai" className="hover:text-gray-400 transition-colors">Contact</a>
        </footer>
      </motion.div>
    </div>
  );
};

export default SoulToolsNotFound;
