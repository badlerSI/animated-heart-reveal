import { Eye, Bug } from "lucide-react";

const ReasoningSection = () => {
  return (
    <section className="reveal py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Reasoning Layer */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <Eye size={48} color="#1bbdc5" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            See Its Reasoning. Every Time.
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Unlike cloud AI that hides its logic in a mysterious black box, Soul Interface shows you exactly how it thinks. Every response includes the full reasoning chain and cites its sources—so you can verify, learn, and trust. No hallucinations. No guesswork.
          </p>
        </div>

        {/* Bug Bounty */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <Bug size={48} color="#1bbdc5" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            $1K Bad Behavior Bug Bounty
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We're so confident in our product—and so committed to making it bulletproof—that we'll pay you $1,000 if you find a way to make it misbehave. Report any exploits and get rewarded.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReasoningSection;
