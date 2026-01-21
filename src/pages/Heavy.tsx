import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, HardDrive, MemoryStick, Wifi, Box, Server, Building2, BookOpen, Music } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const Heavy = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Preload both images
  const woodLoaded = useImagePreloader("/lovable-uploads/heavy-wood.jpg");
  const skeletonLoaded = useImagePreloader("/lovable-uploads/heavy-skeleton.jpg");
  const imagesLoaded = woodLoaded && skeletonLoaded;

  useEffect(() => {
    document.title = "The Heavy | Soul Interface";
  }, []);

  const specs = [
    {
      icon: Cpu,
      name: "GPU",
      value: "NVIDIA RTX 6000 Blackwell, 96GB VRAM",
    },
    {
      icon: MemoryStick,
      name: "Memory",
      value: "96GB system RAM",
    },
    {
      icon: Cpu,
      name: "Processor",
      value: "AMD Ryzen 9, 5th Generation",
    },
    {
      icon: HardDrive,
      name: "Primary Storage",
      value: "4TB Gen 5 SSD for instant model switching",
    },
    {
      icon: Server,
      name: "Backup Storage",
      value: "4TB Gen 4 SSD for redundancy",
    },
    {
      icon: Wifi,
      name: "Network",
      value: "Commercial-grade router, broadcasts dedicated WiFi",
    },
    {
      icon: Box,
      name: "Case",
      value: "Real wood enclosure with built-in handle and chrome 心 emblem",
    },
    {
      icon: Box,
      name: "Portability",
      value: "Carry-on compatible for easy transport or secure storage",
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Classrooms",
      description: "AI for an entire class. Every student, every device, one local network.",
    },
    {
      icon: Music,
      title: "Recording Studios",
      description: "Run multiple AI workstations off a single tower with zero latency.",
    },
    {
      icon: BookOpen,
      title: "Enterprise Offices",
      description: "Air-gapped AI infrastructure for teams that can't touch the cloud.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#faf7f2] overflow-x-hidden">
      {/* Hero Section with Integrated Reveal */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Warm gradient accent */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(212, 165, 116, 0.08) 0%, transparent 60%)",
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-playfair text-6xl md:text-8xl font-normal tracking-tight mb-4">
            The <span className="text-amber-400">Heavy</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#faf7f2]/50 font-light tracking-wide mb-2">
            Serve the Room.
          </p>
          <p className="text-sm text-[#faf7f2]/30 tracking-widest uppercase">
            real wood. commercial power.
          </p>
        </motion.div>

        {/* Product Image with Hover-to-Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: imagesLoaded ? 1 : 0, scale: imagesLoaded ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-3xl w-full cursor-pointer"
          onMouseEnter={() => setIsRevealed(true)}
          onMouseLeave={() => setIsRevealed(false)}
          onTouchStart={() => setIsRevealed(!isRevealed)}
        >
          {/* Instruction text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-sm text-[#faf7f2]/40 mb-4 tracking-wide"
          >
            {isRevealed ? "the soul within" : "hover to reveal what's inside"}
          </motion.p>

          <div className="relative">
            {/* Warm amber glow effect - intensifies on reveal */}
            <motion.div 
              className="absolute inset-0 blur-3xl pointer-events-none"
              animate={{
                opacity: isRevealed ? 0.5 : 0.3,
              }}
              transition={{ duration: 0.6 }}
              style={{
                background: "radial-gradient(ellipse at center, #d4a574 0%, transparent 70%)",
                transform: "scale(1.1)",
              }}
            />
            
            {/* Exterior Image (Wood) */}
            <motion.img
              src="/lovable-uploads/heavy-wood.jpg"
              alt="The Heavy - Artisanal AI Device"
              className="relative w-full aspect-[4/3] object-cover object-center rounded-lg shadow-2xl"
              animate={{
                opacity: isRevealed ? 0 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Interior Image (Skeleton) - revealed on hover */}
            <motion.img
              src="/lovable-uploads/heavy-skeleton.jpg"
              alt="The Heavy - Internal Engineering"
              className="absolute inset-0 w-full aspect-[4/3] object-cover object-center rounded-lg shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isRevealed ? 1 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Inner glow overlay on reveal */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              animate={{
                boxShadow: isRevealed 
                  ? "inset 0 0 60px rgba(212, 165, 116, 0.3)" 
                  : "inset 0 0 0px rgba(212, 165, 116, 0)",
              }}
              transition={{ duration: 0.6 }}
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
          <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent" />
        </motion.div>
      </section>

      {/* Specs Section */}
      <section className="px-6 py-24 bg-[#0a0908]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-normal text-center mb-16"
          >
            Enterprise <span className="text-amber-400">Specifications</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#13120f] border border-amber-900/30 hover:border-amber-700/50 transition-colors"
              >
                <spec.icon className="w-8 h-8 text-amber-400 mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-[#faf7f2]/40 mb-1">{spec.name}</p>
                <p className="text-sm text-[#faf7f2]/70 leading-relaxed">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 py-24 bg-[#0d0c0a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-normal text-center mb-4"
          >
            Made for <span className="text-amber-400">Many</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#faf7f2]/40 mb-16 max-w-2xl mx-auto"
          >
            For spaces that demand more than function.
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
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-900/20 flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-2">{useCase.title}</h3>
                <p className="text-[#faf7f2]/50 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-[#faf7f2] text-[#0a0908]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-normal mb-6"
          >
            Timeless <span className="text-amber-700">Investment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#0a0908]/60 mb-10 text-lg"
          >
            Own a piece of the future, crafted for generations.
          </motion.p>
          <motion.a
            href="mailto:hello@soulinterface.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-4 bg-[#0a0908] text-[#faf7f2] font-medium rounded-full hover:bg-[#0a0908]/80 transition-colors"
          >
            Request Information
          </motion.a>
        </div>
      </section>

      <PageFooter 
        accentColor="#d4a574" 
        mutedColor="#a68b6a" 
        dimColor="#7a6650" 
      />
    </div>
  );
};

export default Heavy;
