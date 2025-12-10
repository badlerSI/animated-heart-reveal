import { Cpu, Brain, Globe, Lock } from "lucide-react";

const HowItWorksSection = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Local Processing",
      description: "An automotive-grade GPU handles everything—no cloud roundtrips, sub-second responses.",
      image: "/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png"
    },
    {
      icon: Brain,
      title: "Smart Knowledge",
      description: "16GB offline vault with Wikipedia, manuals, and custom databases you control.",
      image: "/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png"
    },
    {
      icon: Globe,
      title: "16 Languages",
      description: "Real-time translation and language tutoring, all processed on-device.",
      image: "/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png"
    },
    {
      icon: Lock,
      title: "Your Data, Locked",
      description: "Encrypted storage, secure backups, and zero external transmission.",
      image: "/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png"
    }
  ];

  return (
    <section className="reveal py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
        How It Works
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Patent-pending architecture that puts AI power in your hands—literally.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div 
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#2FC5ED]/30 transition-colors flex flex-col items-center text-center"
          >
            <img 
              src={pillar.image}
              alt={pillar.title}
              className="w-24 h-24 object-contain mb-4 neon-glow"
            />
            <pillar.icon className="w-6 h-6 mb-2" style={{ color: "#2FC5ED" }} />
            <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
            <p className="text-gray-400 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
