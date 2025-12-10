import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Car, ArrowLeft } from "lucide-react";

const LandVehicles = () => {
  useEffect(() => {
    document.title = "On the Move — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-center px-6 text-center">
      <Car className="w-20 h-20 mb-8" style={{ color: "#2FC5ED" }} />
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        On the Move
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-12">
        Cloud-free AI for vehicles. Your personal assistant rides with you—offline, private, and always ready.
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

export default LandVehicles;
