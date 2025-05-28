
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/scrollContent.css";

export default function HeartNavigation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);
  const nav = useNavigate();

  const handleNavigation = (section: string, path: string) => {
    setClicked(section);
    setTimeout(() => {
      nav(path);
    }, 500); // Brief delay to show the effect
  };

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      {/* Container for the heart navigation */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        
        {/* Four heart pieces, perfectly overlapping */}
        <img
          src="/lovable-uploads/7bc57b7b-ec7e-45cb-82e4-d098daa974b9.png"
          alt="News"
          className={`absolute inset-0 w-full h-full object-contain ${
            clicked === "news" ? "heart-glow-clicked" :
            hovered === "news" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />
        <img
          src="/lovable-uploads/46d25664-67ff-4e5a-82fb-473b390f2cb1.png"
          alt="Partner"
          className={`absolute inset-0 w-full h-full object-contain ${
            clicked === "partner" ? "heart-glow-clicked" :
            hovered === "partner" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />
        <img
          src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png"
          alt="Tech"
          className={`absolute inset-0 w-full h-full object-contain ${
            clicked === "tech" ? "heart-glow-clicked" :
            hovered === "tech" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />
        <img
          src="/lovable-uploads/cf5e4b11-5777-42d1-bf53-b818cde95600.png"
          alt="Vision"
          className={`absolute inset-0 w-full h-full object-contain ${
            clicked === "vision" ? "heart-glow-clicked" :
            hovered === "vision" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />

        {/* SVG overlay with Chinese heart character stroke paths */}
        <svg
          viewBox="0 0 320 320"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {/* News path - Left stroke of 心 (50% larger, moved down 10%) */}
          <path
            d="M 35 112 L 65 142 L 95 202 L 80 262 L 50 292 L 20 262 L 5 202 L 20 142 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("news")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation("news", "/news")}
            style={{ cursor: "pointer" }}
          />

          {/* Tech path - Top stroke of 心 (50% larger, moved up 5%) */}
          <path
            d="M 90 44 L 230 44 L 260 74 L 230 104 L 90 104 L 60 74 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("tech")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation("tech", "/tech")}
            style={{ cursor: "pointer" }}
          />

          {/* Vision path - Right stroke of 心 (50% larger, moved up 10%) */}
          <path
            d="M 285 80 L 315 110 L 300 170 L 315 230 L 285 260 L 255 230 L 240 170 L 255 110 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation("vision", "/vision")}
            style={{ cursor: "pointer" }}
          />

          {/* Partner path - Central large stroke of 心 (50% larger, moved up 10%) */}
          <path
            d="M 90 168 L 230 168 L 260 198 L 245 258 L 230 318 L 160 348 L 90 318 L 75 258 L 60 198 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("partner")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation("partner", "/partner")}
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
    </div>
  );
}
