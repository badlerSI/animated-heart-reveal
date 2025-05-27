import { Link } from "react-router-dom";
import { useState } from "react";
import "@/components/scrollContent.css";

const HeartNavigation = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      {/* fixed-size container that holds all four slices */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        
        {/* News piece – top left */}
        <Link
          to="/news"
          className={`nav-piece absolute top-0 left-0 w-24 h-32 transition-all duration-300 ${
            hoveredSection === "news" ? "heart-glow-hover" : ""
          }`}
          style={{ transform: "rotate(-15deg)" }}
          onMouseEnter={() => setHoveredSection("news")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <img
            src="/lovable-uploads/7bc57b7b-ec7e-45cb-82e4-d098daa974b9.png"
            alt="News"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Partnerships piece – top right */}
        <Link
          to="/partner"
          className={`nav-piece absolute top-0 right-0 w-24 h-32 transition-all duration-300 ${
            hoveredSection === "partner" ? "heart-glow-hover" : ""
          }`}
          style={{ transform: "rotate(10deg)" }}
          onMouseEnter={() => setHoveredSection("partner")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <img
            src="/lovable-uploads/46d25664-67ff-4e5a-82fb-473b390f2cb1.png"
            alt="Partner"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Tech piece – bottom left */}
        <Link
          to="/tech"
          className={`nav-piece absolute bottom-0 left-0 w-24 h-32 transition-all duration-300 ${
            hoveredSection === "tech" ? "heart-glow-hover" : ""
          }`}
          style={{ transform: "rotate(25deg)" }}
          onMouseEnter={() => setHoveredSection("tech")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <img
            src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png"
            alt="Tech"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Vision piece – bottom right */}
        <Link
          to="/vision"
          className={`nav-piece absolute bottom-0 right-0 w-24 h-32 transition-all duration-300 ${
            hoveredSection === "vision" ? "heart-glow-hover" : ""
          }`}
          style={{ transform: "rotate(-20deg)" }}
          onMouseEnter={() => setHoveredSection("vision")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <img
            src="/lovable-uploads/cf5e4b11-5777-42d1-bf53-b818cde95600.png"
            alt="Vision"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      {/* fallback nav for no-JS / SEO */}
      <nav className="sr-only">
        <Link to="/tech">Tech</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/partner">Partner</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
};

export default HeartNavigation;