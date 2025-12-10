import { Cpu, Brain, Globe, Lock } from "lucide-react";

const HowItWorksSection = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Local Processing",
      description: "An automotive-grade GPU handles everything—no cloud roundtrips, sub-second responses."
    },
    {
      icon: Brain,
      title: "Smart Knowledge",
      description: "16GB offline vault with Wikipedia, manuals, and custom databases you control."
    },
    {
      icon: Globe,
      title: "16 Languages",
      description: "Real-time translation and language tutoring, all processed on-device."
    },
    {
      icon: Lock,
      title: "Your Data, Locked",
      description: "Encrypted storage, secure backups, and zero external transmission."
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
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#2FC5ED]/30 transition-colors"
          >
            <pillar.icon className="w-10 h-10 mb-4" style={{ color: "#2FC5ED" }} />
            <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
            <p className="text-gray-400 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
