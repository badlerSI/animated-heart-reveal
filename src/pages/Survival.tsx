import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";

const Survival = () => {
  useEffect(() => {
    document.title = "Just in Case — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-center px-6 text-center">
      <Shield className="w-20 h-20 mb-8" style={{ color: "#2FC5ED" }} />
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Just in Case
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-12">
        Off-grid AI for when the world goes dark. Run your own weather station, access critical knowledge, and stay informed—no internet required.
      </p>
      <Link 
        to="/#use-cases" 
        className="inline-flex items-center gap-2 text-[#2FC5ED] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default Survival;
