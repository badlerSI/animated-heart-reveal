import { Palette, Users } from "lucide-react";

const LikenessSection = () => {
  return (
    <section className="reveal py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Likeness. Your Legacy.
          </h2>
          <p className="text-gray-400 text-lg">
            Create AI art, preserve memories, and build digital experiences—all without your data ever leaving home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <Palette className="w-10 h-10 mb-4" style={{ color: "#2FC5ED" }} />
            <h3 className="text-xl font-semibold text-white mb-3">Local AI Art</h3>
            <p className="text-gray-400">
              Generate images of your family, your pets, your imagination—processed entirely on your device. 
              No uploads, no training data harvesting, no surprises.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <Users className="w-10 h-10 mb-4" style={{ color: "#2FC5ED" }} />
            <h3 className="text-xl font-semibold text-white mb-3">Family Privacy</h3>
            <p className="text-gray-400">
              Your children's faces, your loved ones' voices—they stay with you. 
              Create memories and experiences without feeding the machine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LikenessSection;
