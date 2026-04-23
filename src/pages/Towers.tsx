import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Server, Mountain, ArrowRight, Database, Wifi, Box } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const Towers = () => {
  useEffect(() => {
    document.title = "Towers — Soul Interface";
  }, []);

  const towers = [
    {
      slug: "/light",
      name: "the light",
      tagline: "Enough compute for the whole family.",
      desc: "Polished metal AI for 3-4 users. Homeschool, home office, creative studio.",
      icon: Cpu,
      accent: "#1bbdc5",
    },
    {
      slug: "/heavy",
      name: "The Heavy",
      tagline: "Serve the room.",
      desc: "Real wood, commercial-grade infrastructure. Classrooms, studios, offices.",
      icon: Server,
      accent: "#d4a574",
    },
    {
      slug: "/extreme",
      name: "Just in Case",
      tagline: "When the grid goes dark, your AI stays on.",
      desc: "Ruggedized twin-node architecture for off-grid, maritime, and emergency use.",
      icon: Mountain,
      accent: "#4CAF7C",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200">
      <section className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Choose Your <span style={{ color: "#1bbdc5" }}>Tower</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Same soul, different expression. Every Soul Interface tower runs the full Soul Stack offline. Pick the form factor that fits your room, your budget, and your environment.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {towers.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border p-8 bg-[#12121a] hover:bg-[#16161e] transition-colors flex flex-col"
              style={{ borderColor: `${t.accent}40` }}
            >
              <t.icon className="w-12 h-12 mb-4" style={{ color: t.accent }} strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-white mb-1">{t.name}</h2>
              <p className="text-sm mb-4" style={{ color: t.accent }}>{t.tagline}</p>
              <p className="text-gray-400 leading-relaxed flex-1 mb-6">{t.desc}</p>
              <Link
                to={t.slug}
                className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                style={{ color: t.accent }}
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">At a glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-4 text-gray-500 font-medium"></th>
                  <th className="py-4 px-4 text-[#1bbdc5] font-semibold">the light</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">The Heavy</th>
                  <th className="py-4 px-4 text-[#7DD9A8] font-semibold">Just in Case</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["Users", "3–4", "Whole classroom or office", "Field team / household"],
                  ["GPU", "RTX 5090, 32GB VRAM", "RTX 6000 Blackwell, 96GB VRAM", "Ruggedized GPU node"],
                  ["Form factor", "Polished metal, carry-on", "Real wood, commercial chassis", "Twin-node: vehicle + base"],
                  ["Best for", "Homes, small studios", "Schools, studios, enterprise", "Off-grid, maritime, prep"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 ${j === 0 ? "pr-4 text-gray-500" : "px-4"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Soul Stack */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Every tower ships with the Soul Stack</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Our complete software suite and curated knowledge base, included with every unit. No empty box, no subscriptions, free quarterly updates for life.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "Curated Knowledge", desc: "All of Wikipedia, classic literature, manuals, encyclopedias." },
              { icon: Wifi, title: "Offline by Default", desc: "Nothing phones home. No cloud. Works in tunnels, deserts, bunkers." },
              { icon: Box, title: "Full Suite Included", desc: "Nine apps for learning, teaching, creating, and managing." },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-[#12121a] border border-white/10">
                <f.icon className="w-8 h-8 mb-3 mx-auto" style={{ color: "#1bbdc5" }} />
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default Towers;
