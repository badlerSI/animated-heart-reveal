import { useEffect } from "react";
import { Link } from "react-router-dom";
import { WifiOff, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface AppFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SoulAppConfig {
  name: string;
  primary: string;
  accent: string;
  tagline: string;
  connectionMessage: string;
  features: AppFeature[];
  MainIcon: LucideIcon;
}

const SoulAppPage = ({ config }: { config: SoulAppConfig }) => {
  const { name, primary, accent, tagline, connectionMessage, features, MainIcon } = config;

  useEffect(() => {
    document.title = `${name} — SOUL Interface`;
  }, [name]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 py-16 md:py-24"
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="rounded-2xl p-6"
            style={{
              background: `${primary}15`,
              boxShadow: `0 0 40px ${primary}20, 0 0 80px ${primary}10`,
            }}
          >
            <MainIcon size={72} style={{ color: primary }} strokeWidth={1.5} />
          </div>
        </div>

        {/* Name + Tagline */}
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-3"
          style={{ color: primary }}
        >
          {name}
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-400 mb-12">
          {tagline}
        </p>

        {/* Connection callout */}
        <div
          className="rounded-xl p-6 mb-14"
          style={{
            border: `1px solid ${accent}40`,
            background: `${primary}08`,
          }}
        >
          <div className="flex items-start gap-4">
            <WifiOff
              size={28}
              className="shrink-0 mt-0.5"
              style={{ color: accent }}
            />
            <div>
              <h2 className="font-semibold text-white text-lg mb-2">
                Connect to your school network
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {connectionMessage}
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <h2
          className="text-xl md:text-2xl font-semibold mb-8"
          style={{ color: primary }}
        >
          What does {name} do?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg p-5"
              style={{ background: `${primary}08`, border: `1px solid ${primary}15` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <f.icon size={22} style={{ color: accent }} />
                <h3 className="font-semibold text-white">{f.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Soul Interface Inc. © 2026</p>
          <nav className="flex items-center gap-5">
            <a
              href="https://soulinterface.ai/privacy"
              className="hover:text-white transition-colors"
              style={{ color: accent }}
            >
              Privacy
            </a>
            <a
              href="https://soulinterface.ai/support"
              className="hover:text-white transition-colors"
              style={{ color: accent }}
            >
              Support
            </a>
            <a
              href="mailto:contact@soulinterface.ai"
              className="hover:text-white transition-colors"
              style={{ color: accent }}
            >
              Contact
            </a>
          </nav>
        </footer>
      </motion.div>
    </div>
  );
};

export default SoulAppPage;
