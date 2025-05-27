import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/scrollContent.css";

export default function HeartNavigation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const nav = useNavigate();

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      {/* 1. container must be same aspect as your heart art */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        
        {/* 2. draw your four PNG slices, exactly where they go */}
        <img
          src="/lovable-uploads/7bc57b7b-ec7e-45cb-82e4-d098daa974b9.png"
          alt="News"
          className={`absolute top-0 left-8 w-24 h-32 object-contain ${
            hovered === "news" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
          style={{ transform: "rotate(-15deg)", transformOrigin: "center" }}
        />
        <img
          src="/lovable-uploads/46d25664-67ff-4e5a-82fb-473b390f2cb1.png"
          alt="Partner"
          className={`absolute top-4 right-4 w-32 h-28 object-contain ${
            hovered === "partner" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
          style={{ transform: "rotate(10deg)", transformOrigin: "center" }}
        />
        <img
          src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png"
          alt="Tech"
          className={`absolute bottom-8 left-4 w-24 h-32 object-contain ${
            hovered === "tech" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
          style={{ transform: "rotate(25deg)", transformOrigin: "center" }}
        />
        <img
          src="/lovable-uploads/cf5e4b11-5777-42d1-bf53-b818cde95600.png"
          alt="Vision"
          className={`absolute bottom-4 right-8 w-28 h-32 object-contain ${
            hovered === "vision" ? "heart-glow-hover" : "heart-glow-initial"
          }`}
          style={{ transform: "rotate(-20deg)", transformOrigin: "center" }}
        />

        {/* 3. overlay SVG transparent paths for hit-testing */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* News region */}
          <path
            d="M 120 200 L 150 170 L 200 220 L 180 280 L 140 260 C 120 250, 110 230, 120 200 Z"
            fill="transparent"
            stroke="none"
            pointerEvents="all"
            onMouseEnter={() => setHovered("news")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/news")}
          />

          {/* Partner region */}
          <path
            d="M 300 120 C 320 100, 340 100, 350 120 C 360 140, 350 160, 330 170 L 280 200 L 250 170 C 230 160, 220 140, 230 120 C 240 100, 260 100, 280 120 C 290 130, 295 125, 300 120 Z"
            fill="transparent"
            stroke="none"
            pointerEvents="all"
            onMouseEnter={() => setHovered("partner")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/partner")}
          />

          {/* Tech region */}
          <path
            d="M 100 120 C 80 100, 60 100, 50 120 C 40 140, 50 160, 70 170 L 120 200 L 150 170 C 170 160, 180 140, 170 120 C 160 100, 140 100, 120 120 C 110 130, 105 125, 100 120 Z"
            fill="transparent"
            stroke="none"
            pointerEvents="all"
            onMouseEnter={() => setHovered("tech")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => nav("/tech")}
          />

          {/* Vision region */}
          <path
            d="M 280 200 L 250 170 L 200 220 L 220 280 L 260 260 C 280 250, 290 230, 280 200 Z"
            fill="transparent"
            stroke="none"
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