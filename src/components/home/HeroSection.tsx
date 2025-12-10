import { Shield, Car, Key } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="reveal py-24 md:py-32">
      {/* Hero visual */}
      <div className="flex justify-center mb-12">
        <img 
          src="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
          alt="Soul Interface in car dashboard"
          className="max-w-md md:max-w-lg w-full h-auto object-contain neon-glow"
        />
      </div>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Your AI. Your Rules.
          <br />
          <span className="text-[#1bbdc5]">No Cloud Required.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Soul Interface is a sovereign AI that lives with you—not on someone else's server.
          Private by design, powerful by nature.
        </p>
      </div>

      {/* Why Sovereign AI - 3 pillars */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center p-6">
          <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: "#1bbdc5" }} />
          <h3 className="text-xl font-semibold text-white mb-2">Private by Default</h3>
          <p className="text-gray-400">
            Your conversations never leave your device. No eavesdropping, no data mining, no third-party access.
          </p>
        </div>
        <div className="text-center p-6">
          <Car className="w-12 h-12 mx-auto mb-4" style={{ color: "#1bbdc5" }} />
          <h3 className="text-xl font-semibold text-white mb-2">Works Anywhere</h3>
          <p className="text-gray-400">
            Zero bars? No problem. Soul Interface runs entirely offline—in tunnels, deserts, or the middle of the ocean.
          </p>
        </div>
        <div className="text-center p-6">
          <Key className="w-12 h-12 mx-auto mb-4" style={{ color: "#1bbdc5" }} />
          <h3 className="text-xl font-semibold text-white mb-2">Truly Yours</h3>
          <p className="text-gray-400">
            Create custom personas, voices, and knowledge bases. Your AI reflects you—not a corporate template.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
