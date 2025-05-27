
import { Link } from "react-router-dom";
import { useState } from "react";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full max-w-full px-4 py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative w-full h-auto">
          {/* Base heart image */}
          <img 
            src="/src/heart-cta.svg" 
            alt="Heart Navigation" 
            className="w-full h-auto"
          />
          
          {/* Individual PNG images positioned over the heart */}
          <div className="absolute inset-0">
            {/* Tech section - top left */}
            <img 
              src="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
              alt="Tech"
              className={`absolute top-[15%] left-[20%] w-[25%] h-auto transition-all duration-300 ${
                hoveredSection === 'tech' ? 'drop-shadow-[0_0_15px_rgba(51,243,240,0.8)]' : 'drop-shadow-[0_0_5px_rgba(51,243,240,0.3)]'
              }`}
            />
            
            {/* Partner section - top right */}
            <img 
              src="/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png"
              alt="Partner"
              className={`absolute top-[15%] right-[20%] w-[25%] h-auto transition-all duration-300 ${
                hoveredSection === 'partner' ? 'drop-shadow-[0_0_15px_rgba(51,243,240,0.8)]' : 'drop-shadow-[0_0_5px_rgba(51,243,240,0.3)]'
              }`}
            />
            
            {/* News section - bottom left */}
            <img 
              src="/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png"
              alt="News"
              className={`absolute bottom-[25%] left-[15%] w-[25%] h-auto transition-all duration-300 ${
                hoveredSection === 'news' ? 'drop-shadow-[0_0_15px_rgba(51,243,240,0.8)]' : 'drop-shadow-[0_0_5px_rgba(51,243,240,0.3)]'
              }`}
            />
            
            {/* Vision section - bottom right */}
            <img 
              src="/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png"
              alt="Vision"
              className={`absolute bottom-[25%] right-[15%] w-[25%] h-auto transition-all duration-300 ${
                hoveredSection === 'vision' ? 'drop-shadow-[0_0_15px_rgba(51,243,240,0.8)]' : 'drop-shadow-[0_0_5px_rgba(51,243,240,0.3)]'
              }`}
            />
          </div>
          
          {/* Invisible clickable areas that outline each PNG */}
          <svg 
            viewBox="0 0 400 400" 
            className="absolute inset-0 w-full h-full"
          >
            {/* Tech Section outline - top left around PNG */}
            <Link to="/tech">
              <path
                d="M 60 50 L 140 50 L 140 130 L 60 130 Z"
                fill="transparent"
                stroke="transparent"
                strokeWidth="2"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredSection('tech')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Tech Section"
              />
            </Link>
            
            {/* Partner Section outline - top right around PNG */}
            <Link to="/partner">
              <path
                d="M 260 50 L 340 50 L 340 130 L 260 130 Z"
                fill="transparent"
                stroke="transparent"
                strokeWidth="2"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredSection('partner')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Partner Section"
              />
            </Link>
            
            {/* News Section outline - bottom left around PNG */}
            <Link to="/news">
              <path
                d="M 45 270 L 125 270 L 125 350 L 45 350 Z"
                fill="transparent"
                stroke="transparent"
                strokeWidth="2"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredSection('news')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="News Section"
              />
            </Link>
            
            {/* Vision Section outline - bottom right around PNG */}
            <Link to="/vision">
              <path
                d="M 275 270 L 355 270 L 355 350 L 275 350 Z"
                fill="transparent"
                stroke="transparent"
                strokeWidth="2"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredSection('vision')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Vision Section"
              />
            </Link>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeartNavigation;
