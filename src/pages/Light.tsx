import { useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Monitor, Briefcase, GraduationCap, Palette, Globe } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const Light = () => {
  useEffect(() => {
    document.title = "The Light | Soul Interface";
  }, []);

  const features = [
    {
      icon: Monitor,
      title: "Vivid Display",
      description: "Crystal-clear LCD panel for intuitive interaction and visual feedback.",
    },
    {
      icon: Zap,
      title: "Portable Power",
      description: "Compact form factor delivers full AI capabilities anywhere you go.",
    },
    {
      icon: Globe,
      title: "Offline Intelligence",
      description: "Complete privacy with no cloud dependency. Your AI, truly yours.",
    },
  ];

  const useCases = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Safe, offline AI tutoring for students of all ages.",
    },
    {
      icon: Briefcase,
      title: "Home Office",
      description: "Professional AI assistance without corporate surveillance.",
    },
    {
      icon: Palette,
      title: "Creative Work",
      description: "Generate, iterate, and create with private AI collaboration.",
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
          className="text-center mb-12"
        >
          <h1 className="font-outfit text-6xl md:text-8xl font-light tracking-tight mb-4">
            The <span className="text-[#1bbdc5]">Light</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#1a1a1a]/60 font-light tracking-wide">
            Brilliance. Portable.
          </p>
        </motion.div>

        {/* Product Image with Cyan Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-3xl w-full"
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
              alt="The Light - Portable AI Device"
              className="relative w-full aspect-[4/3] object-cover object-center rounded-lg shadow-2xl"
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

      {/* Features Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-light text-center mb-16"
          >
            Designed for <span className="text-[#1bbdc5]">Clarity</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#faf9f7] border border-[#1bbdc5]/20 hover:border-[#1bbdc5]/50 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-[#1bbdc5] mb-4" strokeWidth={1.5} />
                <h3 className="font-outfit text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed">{feature.description}</p>
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
            Built for <span className="text-[#1bbdc5]">Everyone</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#1a1a1a]/50 mb-16 max-w-2xl mx-auto"
          >
            From students to professionals, The Light adapts to your world.
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
            Illuminate Your <span className="text-[#1bbdc5]">Potential</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 mb-10 text-lg"
          >
            Ready to experience AI that's truly yours?
          </motion.p>
          <motion.a
            href="mailto:hello@soulinterface.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-4 bg-[#1bbdc5] text-[#1a1a1a] font-medium rounded-full hover:bg-[#1bbdc5]/90 transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <PageFooter accentColor="#1bbdc5" mutedColor="#5BA8C4" dimColor="#4A8DA8" />
    </div>
  );
};

export default Light;
