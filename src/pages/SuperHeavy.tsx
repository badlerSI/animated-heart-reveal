import { useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, HardDrive, MemoryStick, Users, Server, Box, Building2, GraduationCap, Network } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import superHeavyTower from "@/assets/superheavy-silhouette.png";

const accent = "#7DD9A8";

const SuperHeavy = () => {
  useEffect(() => {
    document.title = "The SUPER Heavy | Soul Interface";
  }, []);

  const specs = [
    { icon: Users, name: "Users", value: "150 concurrent, scalable" },
    { icon: Cpu, name: "GPU", value: "2x NVIDIA RTX 6000 Blackwell Max-Q" },
    { icon: MemoryStick, name: "Memory", value: "Dual-channel high-capacity ECC RAM" },
    { icon: Cpu, name: "Processor", value: "Server-class multi-core CPU" },
    { icon: HardDrive, name: "Storage", value: "Enterprise NVMe array, hot-swappable" },
    { icon: Network, name: "Network", value: "Multi-gig commercial backbone, dedicated WiFi" },
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Schools",
      description: "One tower serves up to 150 students and staff at once. Add more as enrollment grows.",
    },
    {
      icon: GraduationCap,
      title: "Departments & Labs",
      description: "Research-grade compute that never leaves the room. No cloud bills, no data exfiltration.",
    },
    {
      icon: Server,
      title: "Enterprise & Government",
      description: "Air-gapped AI infrastructure for teams that cannot touch the public cloud.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 30%, ${accent}14 0%, transparent 60%)` }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 relative z-10"
        >
          <h1 className="font-outfit text-6xl md:text-8xl font-light tracking-tight mb-4">
            The <span style={{ color: accent }}>SUPER Heavy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-2">
            Serve the building.
          </p>
          <p className="text-sm text-white/40 tracking-widest uppercase">
            150 concurrent users. scales with your population.
          </p>
        </motion.div>

        {/* Silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md w-full"
        >
          <div className="relative">
            <div
              className="absolute inset-0 blur-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${accent}99 0%, ${accent}33 40%, transparent 70%)`,
                animation: "superheavy-pulse 3s ease-in-out infinite",
              }}
            />
            <img
              src={superHeavyTower}
              alt="The SUPER Heavy tower silhouette"
              className="relative w-full h-auto"
            />
          </div>
          <style>{`
            @keyframes superheavy-pulse {
              0%, 100% { opacity: 0.55; transform: scale(1.18); }
              50% { opacity: 1; transform: scale(1.4); }
            }
          `}</style>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16" style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }} />
        </motion.div>
      </section>

      {/* Specs */}
      <section className="px-6 py-24 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light text-center mb-16"
          >
            Building-scale <span style={{ color: accent }}>Specifications</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#12121a] border transition-colors"
                style={{ borderColor: `${accent}33` }}
              >
                <spec.icon className="w-8 h-8 mb-3" style={{ color: accent }} strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">{spec.name}</p>
                <p className="text-sm text-white/75 leading-relaxed">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 py-24 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light text-center mb-4"
          >
            Built for <span style={{ color: accent }}>scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 mb-16 max-w-2xl mx-auto"
          >
            When one room isn't enough.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ background: `${accent}1a` }}
                >
                  <u.icon className="w-8 h-8" style={{ color: accent }} strokeWidth={1.5} />
                </div>
                <h3 className="font-outfit text-xl font-medium mb-2 text-white">{u.title}</h3>
                <p className="text-white/55 leading-relaxed">{u.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light mb-6 text-white"
          >
            One tower. <span style={{ color: accent }}>150 users.</span> Add more as you grow.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/55 mb-10 text-lg"
          >
            No subscriptions. No cloud. Just sovereign AI at institutional scale.
          </motion.p>
          <motion.a
            href="mailto:contact@soulinterface.ai"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-4 font-medium rounded-full transition-colors"
            style={{ background: accent, color: "#0a0a0f" }}
          >
            Request information
          </motion.a>
        </div>
      </section>

      <PageFooter accentColor={accent} mutedColor="#5BA889" dimColor="#3F7A65" />
    </div>
  );
};

export default SuperHeavy;
