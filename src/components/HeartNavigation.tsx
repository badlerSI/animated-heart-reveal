
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/scrollContent.css";

export default function HeartNavigation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const nav = useNavigate();

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      {/* Container for the heart navigation */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        
        {/* Four heart pieces, perfectly overlapping */}
        <img
          src="/lovable-uploads/7bc57b7b-ec7e-45cb-82e4-d098daa974b9.png"
          alt="News"
          className={`absolute inset-0 w-full h-full object-contain ${
            hovered === "news" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />
        <img
          src="/lovable-uploads/46d25664-67ff-4e5a-82fb-473b390f2cb1.png"
          alt="Partner"
          className={`absolute inset-0 w-full h-full object-contain ${
            hovered === "partner" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />
        <img
          src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png"
          alt="Tech"
          className={`absolute inset-0 w-full h-full object-contain ${
            hovered === "tech" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />
        <img
          src="/lovable-uploads/cf5e4b11-5777-42d1-bf53-b818cde95600.png"
          alt="Vision"
          className={`absolute inset-0 w-full h-full object-contain ${
            hovered === "vision" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
        />

        {/* SVG overlay with more accurate heart-shaped paths */}
        <svg
          viewBox="0 0 320 320"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {/* Tech path - Left lobe of heart */}
          <path
            d="M 80 120 C 60 90, 30 90, 20 120 C 10 150, 30 170, 60 180 L 120 200 L 160 160 C 180 140, 170 110, 150 100 C 130 90, 110 100, 100 120 C 90 130, 85 125, 80 120 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("tech")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/tech")}
            style={{ cursor: "pointer" }}
          />

          {/* Partner path - Right lobe of heart */}
          <path
            d="M 240 120 C 250 90, 280 90, 300 120 C 310 150, 290 170, 260 180 L 200 200 L 160 160 C 140 140, 150 110, 170 100 C 190 90, 210 100, 220 120 C 230 130, 235 125, 240 120 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("partner")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/partner")}
            style={{ cursor: "pointer" }}
          />

          {/* News path - Bottom left of heart */}
          <path
            d="M 120 200 L 60 180 C 40 190, 30 210, 40 230 C 50 250, 70 260, 90 250 L 160 280 L 160 160 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("news")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/news")}
            style={{ cursor: "pointer" }}
          />

          {/* Vision path - Bottom right of heart */}
          <path
            d="M 200 200 L 260 180 C 280 190, 290 210, 280 230 C 270 250, 250 260, 230 250 L 160 280 L 160 160 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/vision")}
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
    </div>
  );
}
