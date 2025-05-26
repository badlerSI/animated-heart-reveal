
import { Link } from "react-router-dom";
import { useState } from "react";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full max-w-full px-4 py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className={`w-full h-auto transition-all duration-300 ${
          hoveredSection ? 'neon-glow-bright' : 'neon-glow-dim'
        }`}>
          <img 
            src="/src/heart-cta.svg" 
            alt="Heart Navigation" 
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(0 0 8px rgba(51, 243, 240, 0.4))' }}
          />
          
          {/* Invisible clickable overlays positioned over each section */}
          <div className="absolute inset-0">
            {/* Tech Section - Top Left */}
            <Link 
              to="/tech"
              className="absolute top-[10%] left-[10%] w-[25%] h-[30%] cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 rounded-full"
              onMouseEnter={() => setHoveredSection('tech')}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label="Tech"
            />
            
            {/* Partner Section - Top Right */}
            <Link 
              to="/partner"
              className="absolute top-[10%] right-[10%] w-[25%] h-[30%] cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 rounded-full"
              onMouseEnter={() => setHoveredSection('partner')}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label="Partner"
            />
            
            {/* News Section - Bottom Left */}
            <Link 
              to="/news"
              className="absolute bottom-[20%] left-[15%] w-[25%] h-[25%] cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 rounded-full"
              onMouseEnter={() => setHoveredSection('news')}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label="News"
            />
            
            {/* Vision Section - Bottom Right */}
            <Link 
              to="/vision"
              className="absolute bottom-[20%] right-[15%] w-[25%] h-[25%] cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 rounded-full"
              onMouseEnter={() => setHoveredSection('vision')}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label="Vision"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartNavigation;
