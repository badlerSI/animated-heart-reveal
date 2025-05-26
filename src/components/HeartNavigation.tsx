
import { Link } from "react-router-dom";
import { useState } from "react";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full max-w-full px-4 py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative w-full h-auto">
          {/* Base heart image with individual section overlays */}
          <img 
            src="/src/heart-cta.svg" 
            alt="Heart Navigation" 
            className="w-full h-auto heart-glow-base"
          />
          
          {/* Individual section images that light up on hover */}
          <img 
            src="/src/heart-cta.svg" 
            alt="Tech section" 
            className={`absolute inset-0 w-full h-auto transition-opacity duration-300 ${
              hoveredSection === 'tech' ? 'opacity-100 heart-section-glow' : 'opacity-0'
            }`}
            style={{ 
              clipPath: "url(#tech-clip)",
              filter: hoveredSection === 'tech' ? 'drop-shadow(0 0 8px rgba(51, 243, 240, 1))' : 'none'
            }}
          />
          
          <img 
            src="/src/heart-cta.svg" 
            alt="Vision section" 
            className={`absolute inset-0 w-full h-auto transition-opacity duration-300 ${
              hoveredSection === 'vision' ? 'opacity-100 heart-section-glow' : 'opacity-0'
            }`}
            style={{ 
              clipPath: "url(#vision-clip)",
              filter: hoveredSection === 'vision' ? 'drop-shadow(0 0 8px rgba(51, 243, 240, 1))' : 'none'
            }}
          />
          
          <img 
            src="/src/heart-cta.svg" 
            alt="Partner section" 
            className={`absolute inset-0 w-full h-auto transition-opacity duration-300 ${
              hoveredSection === 'partner' ? 'opacity-100 heart-section-glow' : 'opacity-0'
            }`}
            style={{ 
              clipPath: "url(#partner-clip)",
              filter: hoveredSection === 'partner' ? 'drop-shadow(0 0 8px rgba(51, 243, 240, 1))' : 'none'
            }}
          />
          
          <img 
            src="/src/heart-cta.svg" 
            alt="News section" 
            className={`absolute inset-0 w-full h-auto transition-opacity duration-300 ${
              hoveredSection === 'news' ? 'opacity-100 heart-section-glow' : 'opacity-0'
            }`}
            style={{ 
              clipPath: "url(#news-clip)",
              filter: hoveredSection === 'news' ? 'drop-shadow(0 0 8px rgba(51, 243, 240, 1))' : 'none'
            }}
          />
          
          {/* Invisible clickable areas */}
          <svg 
            viewBox="0 0 400 400" 
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
          >
            {/* Define clip paths for each section */}
            <defs>
              <clipPath id="tech-clip">
                <g id="stroke-tech">
                  <path d="M 100 120 C 80 100, 60 100, 50 120 C 40 140, 50 160, 70 170 L 120 200 L 150 170 C 170 160, 180 140, 170 120 C 160 100, 140 100, 120 120 C 110 130, 105 125, 100 120 Z" />
                </g>
              </clipPath>
              
              <clipPath id="vision-clip">
                <g id="stroke-vision">
                  <path d="M 280 200 L 250 170 L 200 220 L 220 280 L 260 260 C 280 250, 290 230, 280 200 Z" />
                </g>
              </clipPath>
              
              <clipPath id="partner-clip">
                <g id="stroke-partner">
                  <path d="M 300 120 C 320 100, 340 100, 350 120 C 360 140, 350 160, 330 170 L 280 200 L 250 170 C 230 160, 220 140, 230 120 C 240 100, 260 100, 280 120 C 290 130, 295 125, 300 120 Z" />
                </g>
              </clipPath>
              
              <clipPath id="news-clip">
                <g id="stroke-news">
                  <path d="M 120 200 L 150 170 L 200 220 L 180 280 L 140 260 C 120 250, 110 230, 120 200 Z" />
                </g>
              </clipPath>
            </defs>
            
            {/* Tech Section */}
            <Link to="/tech">
              <g className="cursor-pointer" style={{ pointerEvents: 'all' }}>
                <path
                  id="stroke-tech-edge"
                  d="M 100 120 C 80 100, 60 100, 50 120 C 40 140, 50 160, 70 170 L 120 200 L 150 170 C 170 160, 180 140, 170 120 C 160 100, 140 100, 120 120 C 110 130, 105 125, 100 120 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredSection('tech')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="Tech"
                />
              </g>
            </Link>
            
            {/* Vision Section */}
            <Link to="/vision">
              <g className="cursor-pointer" style={{ pointerEvents: 'all' }}>
                <path
                  id="stroke-vision-edge"
                  d="M 280 200 L 250 170 L 200 220 L 220 280 L 260 260 C 280 250, 290 230, 280 200 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredSection('vision')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="Vision"
                />
              </g>
            </Link>
            
            {/* Partner Section */}
            <Link to="/partner">
              <g className="cursor-pointer" style={{ pointerEvents: 'all' }}>
                <path
                  id="stroke-partner-edge"
                  d="M 300 120 C 320 100, 340 100, 350 120 C 360 140, 350 160, 330 170 L 280 200 L 250 170 C 230 160, 220 140, 230 120 C 240 100, 260 100, 280 120 C 290 130, 295 125, 300 120 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredSection('partner')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="Partner"
                />
              </g>
            </Link>
            
            {/* News Section */}
            <Link to="/news">
              <g className="cursor-pointer" style={{ pointerEvents: 'all' }}>
                <path
                  id="stroke-news-edge"
                  d="M 120 200 L 150 170 L 200 220 L 180 280 L 140 260 C 120 250, 110 230, 120 200 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredSection('news')}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label="News"
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
