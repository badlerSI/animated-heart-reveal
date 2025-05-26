
import { Link } from "react-router-dom";
import { useState } from "react";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full max-w-full px-4 py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative w-full h-auto">
          {/* Base heart image with subtle glow */}
          <img 
            src="/src/heart-cta.svg" 
            alt="Heart Navigation" 
            className="w-full h-auto heart-glow-base"
          />
          
          {/* Invisible clickable areas overlaid on top */}
          <svg 
            viewBox="0 0 400 400" 
            className="absolute inset-0 w-full h-full"
          >
            {/* Tech Section - Top Left */}
            <Link to="/tech">
              <path
                d="M 80 120 C 60 100, 40 100, 30 120 C 20 140, 30 160, 50 170 L 100 200 L 130 170 C 150 160, 160 140, 150 120 C 140 100, 120 100, 100 120 C 90 130, 85 125, 80 120 Z"
                fill="rgba(51, 243, 240, 0.1)"
                stroke="transparent"
                strokeWidth="2"
                className={`cursor-pointer transition-all duration-300 ${
                  hoveredSection === 'tech' 
                    ? 'fill-cyan-400/30 drop-shadow-[0_0_12px_rgba(51,243,240,1)]' 
                    : 'hover:fill-cyan-400/20'
                }`}
                onMouseEnter={() => setHoveredSection('tech')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Tech Section"
              />
            </Link>
            
            {/* Partner Section - Top Right */}
            <Link to="/partner">
              <path
                d="M 320 120 C 340 100, 360 100, 370 120 C 380 140, 370 160, 350 170 L 300 200 L 270 170 C 250 160, 240 140, 250 120 C 260 100, 280 100, 300 120 C 310 130, 315 125, 320 120 Z"
                fill="rgba(51, 243, 240, 0.1)"
                stroke="transparent"
                strokeWidth="2"
                className={`cursor-pointer transition-all duration-300 ${
                  hoveredSection === 'partner' 
                    ? 'fill-cyan-400/30 drop-shadow-[0_0_12px_rgba(51,243,240,1)]' 
                    : 'hover:fill-cyan-400/20'
                }`}
                onMouseEnter={() => setHoveredSection('partner')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Partner Section"
              />
            </Link>
            
            {/* News Section - Bottom Left */}
            <Link to="/news">
              <path
                d="M 100 200 L 130 170 L 180 220 L 160 280 L 120 260 C 100 250, 90 230, 100 200 Z"
                fill="rgba(51, 243, 240, 0.1)"
                stroke="transparent"
                strokeWidth="2"
                className={`cursor-pointer transition-all duration-300 ${
                  hoveredSection === 'news' 
                    ? 'fill-cyan-400/30 drop-shadow-[0_0_12px_rgba(51,243,240,1)]' 
                    : 'hover:fill-cyan-400/20'
                }`}
                onMouseEnter={() => setHoveredSection('news')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="News Section"
              />
            </Link>
            
            {/* Vision Section - Bottom Right */}
            <Link to="/vision">
              <path
                d="M 300 200 L 270 170 L 220 220 L 240 280 L 280 260 C 300 250, 310 230, 300 200 Z"
                fill="rgba(51, 243, 240, 0.1)"
                stroke="transparent"
                strokeWidth="2"
                className={`cursor-pointer transition-all duration-300 ${
                  hoveredSection === 'vision' 
                    ? 'fill-cyan-400/30 drop-shadow-[0_0_12px_rgba(51,243,240,1)]' 
                    : 'hover:fill-cyan-400/20'
                }`}
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
