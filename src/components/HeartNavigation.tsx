import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/scrollContent.css";

export default function HeartNavigation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const nav = useNavigate();

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      {/* Container exactly as before */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        
        {/* Four slices, perfectly overlapping */}
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

        {/* Invisible SVG hit-zones on top */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {/* News path */}
          <path
            d="M 120 200 L 150 170 L 200 220 L 180 280 L 140 260 C 120 250, 110 230, 120 200 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("news")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/news")}
          />

          {/* Partner path */}
          <path
            d="M 300 120 C 320 100, 340 100, 350 120 C 360 140, 350 160, 330 170 L 280 200 L 250 170 C 230 160, 220 140, 230 120 C 240 100, 260 100, 280 120 C 290 130, 295 125, 300 120 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("partner")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/partner")}
          />

          {/* Tech path */}
          <path
            d="M 100 120 C 80 100, 60 100, 50 120 C 40 140, 50 160, 70 170 L 120 200 L 150 170 C 170 160, 180 140, 170 120 C 160 100, 140 100, 120 120 C 110 130, 105 125, 100 120 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("tech")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/tech")}
          />

          {/* Vision path */}
          <path
            d="M 280 200 L 250 170 L 200 220 L 220 280 L 260 260 C 280 250, 290 230, 280 200 Z"
            fill="transparent"
            pointerEvents="all"
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/vision")}
          />
        </svg>
      </div>
    </div>
  );
}
