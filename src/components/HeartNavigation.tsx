
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
            {/* Tech Section - stroke-tech-edge */}
            <Link to="/tech">
              <g id="stroke-tech-edge" className="cursor-pointer transition-all duration-300" style={{ pointerEvents: 'all' }}>
                <path
                  d="M 100 120 C 80 100, 60 100, 50 120 C 40 140, 50 160, 70 170 L 120 200 L 150 170 C 170 160, 180 140, 170 120 C 160 100, 140 100, 120 120 C 110 130, 105 125, 100 120 Z"
                  fill="transparent"
                  onMouseEnter={() => setHoveredSection('tech')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="Tech"
                />
              </g>
            </Link>
            
            {/* Partner Section - stroke-partner-edge */}
            <Link to="/partner">
              <g id="stroke-partner-edge" className="cursor-pointer transition-all duration-300" style={{ pointerEvents: 'all' }}>
                <path
                  d="M 300 120 C 320 100, 340 100, 350 120 C 360 140, 350 160, 330 170 L 280 200 L 250 170 C 230 160, 220 140, 230 120 C 240 100, 260 100, 280 120 C 290 130, 295 125, 300 120 Z"
                  fill="transparent"
                  onMouseEnter={() => setHoveredSection('partner')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="Partner"
                />
              </g>
            </Link>
            
            {/* News Section - stroke-news-edge */}
            <Link to="/news">
              <g id="stroke-news-edge" className="cursor-pointer transition-all duration-300" style={{ pointerEvents: 'all' }}>
                <path
                  d="M 120 200 L 150 170 L 200 220 L 180 280 L 140 260 C 120 250, 110 230, 120 200 Z"
                  fill="transparent"
                  onMouseEnter={() => setHoveredSection('news')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="News"
                />
              </g>
            </Link>
            
            {/* Vision Section - stroke-vision-edge */}
            <Link to="/vision">
              <g id="stroke-vision-edge" className="cursor-pointer transition-all duration-300" style={{ pointerEvents: 'all' }}>
                <path
                  d="M 280 200 L 250 170 L 200 220 L 220 280 L 260 260 C 280 250, 290 230, 280 200 Z"
                  fill="transparent"
                  onMouseEnter={() => setHoveredSection('vision')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="Vision"
                />
              </g>
            </Link>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeartNavigation;
