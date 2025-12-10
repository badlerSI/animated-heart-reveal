import { Palette } from "lucide-react";

const LikenessSection = () => {
  return (
    <section className="reveal py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Section visual */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png"
            alt="Forge Your Ideal AI Persona"
            className="max-w-xs md:max-w-sm w-full h-auto object-contain neon-glow"
          />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Forge Your Ideal AI Persona
          </h2>
          <p className="text-gray-400 text-lg">
            You wouldn't find your ideal spouse on a list of four personalities, so why does big tech only give you that range for AI? Make any persona you can imagine, for your ideal AI companion (and no, not like that—if you want a bot to talk dirty to you, there are many <em>other</em> companies who want your business).
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg">
            <Palette className="w-10 h-10 mb-4" style={{ color: "#1bbdc5" }} />
            <h3 className="text-xl font-semibold text-white mb-3">Local Training = Family Privacy</h3>
            <p className="text-gray-400">
              Train a model to use your children's faces, or your loved ones' voices entirely on device. Make memorable creations without the keys to your likeness being on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LikenessSection;
