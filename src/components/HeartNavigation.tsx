
import { Link } from "react-router-dom";
import { useState } from "react";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full max-w-full px-4 py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className={`w-full h-auto transition-all duration-300 ${
          hoveredSection ? 'heart-glow-hover' : 'heart-glow-initial'
        }`}>
          <img 
            src="/src/heart-cta.svg" 
            alt="Heart Navigation" 
            className="w-full h-auto"
          />
          
          {/* SVG overlay with precise clickable paths */}
          <svg 
            viewBox="0 0 400 400" 
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
          >
            {/* Tech Section - Top Left heart lobe */}
            <Link to="/tech">
              <path
                d="M 120 80 C 80 40, 20 40, 20 100 C 20 140, 80 180, 120 220 L 160 180 C 160 140, 140 100, 120 80 Z"
                fill="transparent"
                className="cursor-pointer transition-all duration-300"
                style={{ pointerEvents: 'all' }}
                onMouseEnter={() => setHoveredSection('tech')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Tech"
              />
            </Link>
            
            {/* Partner Section - Top Right heart lobe */}
            <Link to="/partner">
              <path
                d="M 280 80 C 320 40, 380 40, 380 100 C 380 140, 320 180, 280 220 L 240 180 C 240 140, 260 100, 280 80 Z"
                fill="transparent"
                className="cursor-pointer transition-all duration-300"
                style={{ pointerEvents: 'all' }}
                onMouseEnter={() => setHoveredSection('partner')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Partner"
              />
            </Link>
            
            {/* News Section - Bottom Left heart point */}
            <Link to="/news">
              <path
                d="M 120 220 L 160 180 L 200 240 L 170 280 C 150 260, 130 240, 120 220 Z"
                fill="transparent"
                className="cursor-pointer transition-all duration-300"
                style={{ pointerEvents: 'all' }}
                onMouseEnter={() => setHoveredSection('news')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="News"
              />
            </Link>
            
            {/* Vision Section - Bottom Right heart point */}
            <Link to="/vision">
              <path
                d="M 280 220 L 240 180 L 200 240 L 230 280 C 250 260, 270 240, 280 220 Z"
                fill="transparent"
                className="cursor-pointer transition-all duration-300"
                style={{ pointerEvents: 'all' }}
                onMouseEnter={() => setHoveredSection('vision')}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label="Vision"
              />
            </Link>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeartNavigation;
