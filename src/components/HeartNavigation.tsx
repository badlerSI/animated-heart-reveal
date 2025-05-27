
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
      <div ref={containerRef} className="relative w-80 md:w-96 heart-glow-initial">
        {/* News piece - top left */}
        <Link to="/news">
          <div 
            className="nav-piece absolute top-0 left-8 w-24 h-32 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ transform: 'rotate(-15deg)' }}
          >
            <img 
              src="/lovable-uploads/7bc57b7b-ec7e-45cb-82e4-d098daa974b9.png" 
              alt="News"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Partnerships piece - top right */}
        <Link to="/partner">
          <div 
            className="nav-piece absolute top-4 right-4 w-32 h-28 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ transform: 'rotate(10deg)' }}
          >
            <img 
              src="/lovable-uploads/46d25664-67ff-4e5a-82fb-473b390f2cb1.png" 
              alt="Partnerships"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Tech piece - bottom left */}
        <Link to="/tech">
          <div 
            className="nav-piece absolute bottom-8 left-4 w-24 h-32 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ transform: 'rotate(25deg)' }}
          >
            <img 
              src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png" 
              alt="Tech"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Vision piece - bottom right */}
        <Link to="/vision">
          <div 
            className="nav-piece absolute bottom-4 right-8 w-28 h-32 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ transform: 'rotate(-20deg)' }}
          >
            <img 
              src="/lovable-uploads/cf5e4b11-5777-42d1-bf53-b818cde95600.png" 
              alt="Vision"
              className="w-full h-full object-contain"
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
