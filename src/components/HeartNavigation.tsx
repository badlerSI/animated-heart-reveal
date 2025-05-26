
import { Link } from "react-router-dom";
import { useState } from "react";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full max-w-full px-4 py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <svg
          viewBox="0 0 400 400"
          className={`w-full h-auto transition-all duration-300 ${
            hoveredSection ? 'neon-glow-bright' : 'neon-glow-dim'
          }`}
          style={{ filter: 'drop-shadow(0 0 8px rgba(51, 243, 240, 0.4))' }}
        >
          {/* Tech Section - Top Left */}
          <Link to="/tech">
            <path
              id="stroke-tech"
              d="M50 150 Q100 50, 200 100 L150 200 Q100 150, 50 150 Z"
              fill="transparent"
              stroke="rgba(51, 243, 240, 0.6)"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:stroke-[rgba(51,243,240,1)]"
              onMouseEnter={() => setHoveredSection('tech')}
              onMouseLeave={() => setHoveredSection(null)}
            />
          </Link>

          {/* Partner Section - Top Right */}
          <Link to="/partner">
            <path
              id="stroke-partner"
              d="M200 100 Q300 50, 350 150 Q300 150, 250 200 L200 100 Z"
              fill="transparent"
              stroke="rgba(51, 243, 240, 0.6)"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:stroke-[rgba(51,243,240,1)]"
              onMouseEnter={() => setHoveredSection('partner')}
              onMouseLeave={() => setHoveredSection(null)}
            />
          </Link>

          {/* News Section - Bottom Left */}
          <Link to="/news">
            <path
              id="stroke-news"
              d="M150 200 Q100 250, 50 300 Q100 250, 150 250 L200 300 L150 200 Z"
              fill="transparent"
              stroke="rgba(51, 243, 240, 0.6)"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:stroke-[rgba(51,243,240,1)]"
              onMouseEnter={() => setHoveredSection('news')}
              onMouseLeave={() => setHoveredSection(null)}
            />
          </Link>

          {/* Vision Section - Bottom Right */}
          <Link to="/vision">
            <path
              id="stroke-vision"
              d="M250 200 L200 300 Q300 250, 350 300 Q300 250, 250 250 L250 200 Z"
              fill="transparent"
              stroke="rgba(51, 243, 240, 0.6)"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:stroke-[rgba(51,243,240,1)]"
              onMouseEnter={() => setHoveredSection('vision')}
              onMouseLeave={() => setHoveredSection(null)}
            />
          </Link>

          {/* Center connecting element */}
          <circle
            cx="200"
            cy="200"
            r="15"
            fill="rgba(51, 243, 240, 0.3)"
            stroke="rgba(51, 243, 240, 0.8)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartNavigation;
