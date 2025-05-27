
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@/components/scrollContent.css";

const HeartNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners to each navigation piece
    const navPieces = container.querySelectorAll<HTMLDivElement>(".nav-piece");
    
    navPieces.forEach((piece) => {
      const handleMouseEnter = () => {
        piece.classList.add("heart-glow-hover");
      };
      
      const handleMouseLeave = () => {
        piece.classList.remove("heart-glow-hover");
      };

      piece.addEventListener("mouseenter", handleMouseEnter);
      piece.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        piece.removeEventListener("mouseenter", handleMouseEnter);
        piece.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div ref={containerRef} className="relative w-80 h-80 heart-glow-initial">
        {/* Combined heart background image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img 
            src="/lovable-uploads/fdcca6ff-a71c-46e4-9a64-059c66d59043.png" 
            alt="Heart Navigation"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        {/* News piece - top left area */}
        <Link to="/news">
          <div className="nav-piece absolute inset-0 cursor-pointer transition-all duration-300 hover:scale-105" 
               style={{
                 clipPath: 'polygon(0% 20%, 48% 0%, 48% 48%, 20% 48%, 0% 60%)'
               }}>
            <img 
              src="/lovable-uploads/7bc57b7b-ec7e-45cb-82e4-d098daa974b9.png" 
              alt="News"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </Link>

        {/* Partnerships piece - top right area */}
        <Link to="/partner">
          <div className="nav-piece absolute inset-0 cursor-pointer transition-all duration-300 hover:scale-105"
               style={{
                 clipPath: 'polygon(52% 0%, 100% 20%, 100% 60%, 80% 48%, 52% 48%)'
               }}>
            <img 
              src="/lovable-uploads/46d25664-67ff-4e5a-82fb-473b390f2cb1.png" 
              alt="Partnerships"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </Link>

        {/* Tech piece - bottom left area */}
        <Link to="/tech">
          <div className="nav-piece absolute inset-0 cursor-pointer transition-all duration-300 hover:scale-105"
               style={{
                 clipPath: 'polygon(0% 52%, 20% 52%, 48% 52%, 48% 100%, 0% 80%)'
               }}>
            <img 
              src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png" 
              alt="Tech"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </Link>

        {/* Vision piece - bottom right area */}
        <Link to="/vision">
          <div className="nav-piece absolute inset-0 cursor-pointer transition-all duration-300 hover:scale-105"
               style={{
                 clipPath: 'polygon(52% 52%, 80% 52%, 100% 80%, 100% 100%, 52% 100%)'
               }}>
            <img 
              src="/lovable-uploads/cf5e4b11-5777-42d1-bf53-b818cde95600.png" 
              alt="Vision"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </Link>
      </div>

      {/* Hidden fallback nav for SEO / no-JS */}
      <nav className="sr-only">
        <Link to="/tech">Tech</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/partner">Partner</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
};

export default HeartNavigation;
