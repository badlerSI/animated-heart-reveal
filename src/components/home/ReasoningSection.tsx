import { Bug } from "lucide-react";

const ReasoningSection = () => {
  return (
    <section className="reveal py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Bug size={48} color="#1bbdc5" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          $1K Bad Behavior Bug Bounty
        </h3>
        <p className="text-gray-400 leading-relaxed">
          We're so confident in our product, and so committed to making it bulletproof, that we'll pay you $1,000 if you find a way to make it misbehave. Report any exploits and get rewarded.
        </p>
      </div>
    </section>
  );
};

export default ReasoningSection;
