import { useEffect } from "react";
import PageFooter from "@/components/PageFooter";

const Vehicular = () => {
  useEffect(() => {
    document.title = "Vehicular — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Main content area */}
      <div className="flex-1 relative flex flex-col items-center justify-center px-6 text-center">
        {/* Background image on black base with lower opacity */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/b2023677-4e76-487d-846a-52cf5c1e8d17.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.22
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            In 2025 we built our first automotive prototype, and from Monterey to SEMA, we met with enthusiasts and builders from 3 continents. Our promise of privacy, "What you say in the car, stays in the car," as well as navigation and full infotainment control, even with no screen and zero bars of service, really resonated.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            We have garnered interest in putting reasoning, capable, sovereign AI in conveyances from motorhomes to motorcycles, and are already working on novel solutions to previously intractable problems.
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
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <PageFooter />
      </div>
    </div>
  );
};

export default Vehicular;
