import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Vehicles = () => {
  useEffect(() => {
    document.title = "Vehicles — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 text-center">
      {/* Full-screen background image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/b2023677-4e76-487d-846a-52cf5c1e8d17.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 z-0 bg-[#0d0d12]/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          In 2025 we built our first automotive prototype, and from Monterey to SEMA, we met with enthusiasts and builders from 3 continents. Our message of total privacy "What you say in the car, stays in the car." really resonated.
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          We have garnered interest in putting capable, screen-optional, sovereign AI in conveyances from motorhomes to motorcycles, and are already working on novel solutions to previously unsolvable problems.
        </p>
        
        <p 
          className="text-2xl md:text-3xl font-bold mb-16"
          style={{
            color: '#1bbdc5',
            textShadow: '0 0 10px #1bbdc5, 0 0 20px #1bbdc5, 0 0 30px #1bbdc5, 0 0 40px #1bbdc5'
          }}
        >
          Come meet our prototype 240Z, Ace at CES 2026!
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#1bbdc5] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Vehicles;
