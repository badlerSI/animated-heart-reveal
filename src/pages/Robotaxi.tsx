import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Robotaxi = () => {
  useEffect(() => {
    document.title = "Soul Interface — Robotaxi";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Soul Interface for autonomous vehicles and robotaxis. Cloud-free AI that keeps passengers safe and private.");
    }

    return () => {
      document.title = "Soul Interface — Cloud-Free AI Assistant";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Cloud-free, screen-optional, privacy-centered, in-vehicle, customizable AI assistant");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-center px-4 py-16">
      {/* Hero image */}
      <div className="w-full max-w-md mb-12">
        <img 
          src="/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png"
          alt="Robotaxi AI interface"
          className="w-full h-auto object-contain neon-glow"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
        Robotaxi
      </h1>
      
      <p className="text-xl text-gray-400 text-center max-w-2xl mb-12">
        Autonomous vehicles deserve autonomous AI. Soul Interface brings cloud-free intelligence 
        to the next generation of transportation—keeping passengers safe, entertained, and private.
      </p>

      <p className="text-lg text-[#2FC5ED] text-center mb-12">
        Coming soon.
      </p>

      <Link 
        to="/#use-cases"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default Robotaxi;
