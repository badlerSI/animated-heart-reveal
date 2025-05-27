
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

        {/* SVG overlay with Chinese heart character stroke paths */}
        <svg
          viewBox="0 0 320 320"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {/* News path - Left stroke of 心 */}
          <path
            d="M 60 80 L 80 100 L 100 140 L 90 180 L 70 200 L 50 180 L 40 140 L 50 100 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("news")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/news")}
            style={{ cursor: "pointer" }}
          />

          {/* Tech path - Top stroke of 心 */}
          <path
            d="M 120 60 L 200 60 L 220 80 L 200 100 L 120 100 L 100 80 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("tech")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/tech")}
            style={{ cursor: "pointer" }}
          />

          {/* Vision path - Right stroke of 心 */}
          <path
            d="M 260 80 L 280 100 L 270 140 L 280 180 L 260 200 L 240 180 L 230 140 L 240 100 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/vision")}
            style={{ cursor: "pointer" }}
          />

          {/* Partner path - Central large stroke of 心 (doubled size, moved down 25%) */}
          <path
            d="M 120 200 L 200 200 L 220 220 L 210 260 L 200 300 L 160 320 L 120 300 L 110 260 L 100 220 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("partner")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/partner")}
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
    </div>
  );
}
