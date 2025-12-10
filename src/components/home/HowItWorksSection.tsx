import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const pillars = [
    {
      title: "Under the Hood",
      description: "Powered by cutting-edge NVIDIA® chips, patent-pending architecture, and a passion for privacy.",
      image: "/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png",
      link: "/tech"
    },
    {
      title: "Offline Knowledge Base",
      description: "Massive offline vault with Wikipedia, manuals, and custom databases you control.",
      image: "/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png"
    },
    {
      title: "Dozens of Languages",
      description: "Able to understand >100 and speak >30 languages, Soul Interface can interpret or tutor in many tongues.",
      image: "/lovable-uploads/multilingual-soul.png"
    },
    {
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
        {pillars.map((pillar, index) => {
          const CardContent = (
            <>
              <img 
                src={pillar.image}
                alt={pillar.title}
                className="w-40 h-40 object-contain mb-4 neon-glow"
              />
              <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm">{pillar.description}</p>
            </>
          );

          return pillar.link ? (
            <Link 
              key={index}
              to={pillar.link}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#1bbdc5]/30 transition-colors flex flex-col items-center text-center cursor-pointer"
            >
              {CardContent}
            </Link>
          ) : (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#1bbdc5]/30 transition-colors flex flex-col items-center text-center"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;