import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface DualWaveButtonProps {
  accentColor?: string;
}

const DualWaveButton = ({ accentColor = "#1bbdc5" }: DualWaveButtonProps) => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  // Wave glow color based on hover state
  const getWaveGlow = () => {
    if (hoveredSide === "left") return "drop-shadow(0 0 12px rgba(27, 189, 197, 0.7))";
    if (hoveredSide === "right") return "drop-shadow(0 0 12px rgba(212, 165, 116, 0.7))";
    return "drop-shadow(0 0 4px rgba(255, 255, 255, 0.1))";
  };

  const getWaveStroke = () => {
    if (hoveredSide === "left") return "#1bbdc5";
    if (hoveredSide === "right") return "#d4a574";
    return "rgba(255, 255, 255, 0.2)";
  };

  return (
    <section className="py-16 px-4">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm tracking-[0.3em] uppercase mb-8"
        style={{ color: accentColor, opacity: 0.7 }}
      >
        Two paths. One soul.
      </motion.p>

      {/* Yin-Yang Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-2xl mx-auto"
      >
        <div className="relative flex overflow-hidden rounded-2xl border border-white/10">
          {/* Left Half: the light */}
          <Link
            to="/light"
            className="relative flex-1 py-12 px-8 flex flex-col items-center justify-center text-center transition-all duration-500 group"
            style={{ backgroundColor: "#0a0a0f" }}
            onMouseEnter={() => setHoveredSide("left")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at right center, rgba(27, 189, 197, 0.08) 0%, transparent 70%)",
              }}
            />
            <span
              className="font-outfit text-2xl md:text-3xl font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300 relative z-10"
              style={{
                textShadow: hoveredSide === "left" ? "0 0 20px rgba(27, 189, 197, 0.5)" : "none",
              }}
            >
              the light
            </span>
            <span className="font-outfit text-xs tracking-[0.2em] text-white/30 group-hover:text-[#1bbdc5]/60 mt-3 transition-colors duration-300 relative z-10">
              yours alone
            </span>
          </Link>

          {/* Wave Divider SVG - Authentic Soul Interface curve */}
          <svg
            className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 z-20 pointer-events-none transition-all duration-500"
            viewBox="0 0 80 200"
            preserveAspectRatio="none"
            style={{ filter: getWaveGlow() }}
          >
            <path
              d="M 40,0 
                 Q 25,25 45,50 
                 Q 65,75 35,100 
                 Q 15,125 55,150 
                 Q 75,175 40,200"
              stroke={getWaveStroke()}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>

          {/* Right Half: The Heavy */}
          <Link
            to="/heavy"
            className="relative flex-1 py-12 px-8 flex flex-col items-center justify-center text-center transition-all duration-500 group"
            style={{ backgroundColor: "#0f0e0c" }}
            onMouseEnter={() => setHoveredSide("right")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at left center, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
              }}
            />
            <span
              className="font-playfair text-2xl md:text-3xl font-medium tracking-wide text-white/80 group-hover:text-white transition-colors duration-300 relative z-10"
              style={{
                textShadow: hoveredSide === "right" ? "0 0 20px rgba(212, 165, 116, 0.5)" : "none",
              }}
            >
              The Heavy
            </span>
            <span className="font-playfair text-xs tracking-[0.15em] text-white/30 group-hover:text-[#d4a574]/60 mt-3 transition-colors duration-300 relative z-10 italic">
              serve the room
            </span>
          </Link>
        </div>

        {/* Subtle outer glow based on hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-700"
          style={{
            boxShadow:
              hoveredSide === "left"
                ? "0 0 40px rgba(27, 189, 197, 0.15), inset 0 0 30px rgba(27, 189, 197, 0.05)"
                : hoveredSide === "right"
                ? "0 0 40px rgba(212, 165, 116, 0.15), inset 0 0 30px rgba(212, 165, 116, 0.05)"
                : "0 0 20px rgba(255, 255, 255, 0.03)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default DualWaveButton;
