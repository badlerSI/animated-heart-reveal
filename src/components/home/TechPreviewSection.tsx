import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TechPreviewSection = () => {
  return (
    <section className="reveal py-20 md:py-28">
      <div className="bg-gradient-to-br from-[#2FC5ED]/10 to-transparent border border-[#2FC5ED]/20 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Under the Hood
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Automotive-grade silicon, patent-pending architecture, and a passion for privacy. 
          Dive into the technical details.
        </p>
        <Link 
          to="/tech"
          className="inline-flex items-center gap-2 bg-[#2FC5ED] text-black font-semibold px-6 py-3 rounded-lg hover:bg-white transition-colors"
        >
          Explore the Technology
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default TechPreviewSection;
