import { useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, HardDrive, MemoryStick, Monitor, Box, Users, GraduationCap, Briefcase, Palette } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { Skeleton } from "@/components/ui/skeleton";

const Light = () => {
  const imageLoaded = useImagePreloader("/lovable-uploads/light-product.jpg");

  useEffect(() => {
    document.title = "the light | soul interface";
  }, []);

  const specs = [
    {
      icon: Cpu,
      name: "gpu",
      value: "NVIDIA RTX 5090, 32GB VRAM",
    },
    {
      icon: MemoryStick,
      name: "memory",
      value: "64GB or 96GB system RAM",
    },
    {
      icon: Cpu,
      name: "processor",
      value: "Intel Core i7",
    },
    {
      icon: HardDrive,
      name: "storage",
      value: "4TB, 6TB, or 8TB SSD options",
    },
    {
      icon: Monitor,
      name: "display",
      value: "crystal-clear LCD panel",
    },
    {
      icon: Box,
      name: "portability",
      value: "carry-on compatible for easy transport or secure storage",
    },
  ];

  const useCases = [
    {
      icon: GraduationCap,
      title: "homeschool",
      description: "AI tutoring for 3-4 students simultaneously. No subscriptions, no surveillance.",
    },
    {
      icon: Briefcase,
      title: "home office",
      description: "Private AI assistance for the whole family, running entirely offline.",
    },
    {
      icon: Palette,
      title: "creative studio",
      description: "Generate, render, and create with GPU power that stays in your space.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Subtle cyan gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#1bbdc5]/10 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-outfit text-6xl md:text-8xl font-light tracking-tight mb-4">
            <span className="text-[#1bbdc5]">the light</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#1a1a1a]/60 font-light tracking-wide mb-2">
            3-4 users. one machine.
          </p>
          <p className="text-sm text-[#1a1a1a]/40 tracking-widest uppercase">
            Enough compute for the whole family.
          </p>
        </motion.div>

        {/* Skeleton placeholder while loading */}
        {!imageLoaded && (
          <div className="relative max-w-3xl w-full">
            <Skeleton className="w-full aspect-[4/3] rounded-lg bg-[#1bbdc5]/10" />
          </div>
        )}

        {/* Product Image with Cyan Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.95 }}
          transition={{ duration: 0.5 }}
          className={`relative max-w-3xl w-full ${!imageLoaded ? 'absolute' : ''}`}
        >
          <div className="relative">
            {/* Cyan glow effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background: "radial-gradient(ellipse at center, #1bbdc5 0%, transparent 70%)",
                transform: "scale(1.1)",
              }}
            />
            <img
              src="/lovable-uploads/light-product.jpg"
              alt="the light - portable AI device"
              className="relative w-full aspect-[4/3] object-cover object-center rounded-lg shadow-2xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#1bbdc5] to-transparent" />
        </motion.div>
      </section>

      {/* Specs Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light text-center mb-16"
          >
            what's <span className="text-[#1bbdc5]">inside</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#faf9f7] border border-[#1bbdc5]/20 hover:border-[#1bbdc5]/50 transition-colors"
              >
                <spec.icon className="w-8 h-8 text-[#1bbdc5] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-[#1a1a1a]/40 mb-1">{spec.name}</p>
                <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 py-24 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light text-center mb-4"
          >
            built for <span className="text-[#1bbdc5]">small groups</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#1a1a1a]/50 mb-16 max-w-2xl mx-auto"
          >
            from students to professionals, the light adapts to your world.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#1bbdc5]/10 flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-[#1bbdc5]" strokeWidth={1.5} />
                </div>
                <h3 className="font-outfit text-xl font-medium mb-2">{useCase.title}</h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light mb-6"
          >
            illuminate your <span className="text-[#1bbdc5]">potential</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 mb-10 text-lg"
          >
            ready to experience AI that's truly yours?
          </motion.p>
          <motion.a
            href="mailto:hello@soulinterface.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-4 bg-[#1bbdc5] text-[#1a1a1a] font-medium rounded-full hover:bg-[#1bbdc5]/90 transition-colors"
          >
            get in touch
          </motion.a>
        </div>
      </section>

      <PageFooter accentColor="#1bbdc5" mutedColor="#5BA8C4" dimColor="#4A8DA8" />
    </div>
  );
};

export default Light;
