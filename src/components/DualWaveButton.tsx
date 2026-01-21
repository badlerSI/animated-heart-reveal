import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface DualWaveButtonProps {
  accentColor?: string;
}

const DualWaveButton = ({ accentColor = "#1bbdc5" }: DualWaveButtonProps) => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  // Wave colors based on hover state
  const getTopLeftWaveColor = () => {
    if (hoveredSide === "left") return "#1bbdc5";
    if (hoveredSide === "right") return "rgba(27, 189, 197, 0.15)";
    return "rgba(27, 189, 197, 0.3)";
  };

  const getBottomRightWaveColor = () => {
    if (hoveredSide === "right") return "#d4a574";
    if (hoveredSide === "left") return "rgba(212, 165, 116, 0.15)";
    return "rgba(212, 165, 116, 0.3)";
  };

  return (
    <section className="py-20 px-4">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs tracking-[0.4em] uppercase mb-10 text-white/40"
      >
        Two expressions. One soul.
      </motion.p>

      {/* Yin-Yang Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-xl mx-auto"
      >
        {/* Top-left Soul Wave (Cyan) - reaching toward center */}
        <svg
          className="absolute -top-4 -left-4 w-56 h-20 pointer-events-none transition-all duration-500 z-10"
          viewBox="0 0 220 80"
          preserveAspectRatio="xMinYMin meet"
          style={{
            filter: hoveredSide === "left"
              ? "drop-shadow(0 0 12px rgba(27, 189, 197, 0.8)) drop-shadow(0 0 24px rgba(27, 189, 197, 0.4))"
              : "none"
          }}
        >
          {/* Authentic Soul Wave path - flowing from top-left toward center-right */}
          <path
            d="M 0,50 C 30,50 45,15 90,20 C 135,25 165,55 210,45"
            stroke={getTopLeftWaveColor()}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>

        {/* Bottom-right Soul Wave (Amber) - mirrored, reaching toward center */}
        <svg
          className="absolute -bottom-4 -right-4 w-56 h-20 pointer-events-none transition-all duration-500 z-10"
          viewBox="0 0 220 80"
          preserveAspectRatio="xMaxYMax meet"
          style={{
            filter: hoveredSide === "right"
              ? "drop-shadow(0 0 12px rgba(212, 165, 116, 0.8)) drop-shadow(0 0 24px rgba(212, 165, 116, 0.4))"
              : "none",
            transform: "scaleX(-1) scaleY(-1)"
          }}
        >
          {/* Same Soul Wave path, flipped via CSS transform */}
          <path
            d="M 0,50 C 30,50 45,15 90,20 C 135,25 165,55 210,45"
            stroke={getBottomRightWaveColor()}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>

        <div className="relative flex overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0c]">
          {/* Left Half: the light */}
          <Link
            to="/light"
            className="relative flex-1 py-14 px-10 flex flex-col items-center justify-center text-center transition-all duration-500 group"
            onMouseEnter={() => setHoveredSide("left")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at 70% 50%, rgba(27, 189, 197, 0.1) 0%, transparent 60%)",
              }}
            />
            <span
              className="font-outfit text-2xl md:text-3xl font-extralight tracking-widest text-white/70 group-hover:text-white transition-all duration-300 relative z-10 lowercase"
              style={{
                textShadow: hoveredSide === "left" ? "0 0 30px rgba(27, 189, 197, 0.6)" : "none",
              }}
            >
              the light
            </span>
            <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-white/25 group-hover:text-[#1bbdc5]/70 mt-4 transition-colors duration-300 relative z-10">
              yours alone
            </span>
          </Link>

          {/* Subtle center divider line */}
          <div className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-white/[0.06] -translate-x-1/2 z-0" />

          {/* Right Half: The Heavy */}
          <Link
            to="/heavy"
            className="relative flex-1 py-14 px-10 flex flex-col items-center justify-center text-center transition-all duration-500 group"
            onMouseEnter={() => setHoveredSide("right")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at 30% 50%, rgba(212, 165, 116, 0.1) 0%, transparent 60%)",
              }}
            />
            <span
              className="font-playfair text-2xl md:text-3xl font-normal tracking-wide text-white/70 group-hover:text-white transition-all duration-300 relative z-10"
              style={{
                textShadow: hoveredSide === "right" ? "0 0 30px rgba(212, 165, 116, 0.6)" : "none",
              }}
            >
              The Heavy
            </span>
            <span className="font-playfair text-[10px] tracking-[0.2em] text-white/25 group-hover:text-[#d4a574]/70 mt-4 transition-colors duration-300 relative z-10 italic">
              serve the room
            </span>
          </Link>
        </div>

        {/* Subtle outer glow based on hover */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-700"
          style={{
            boxShadow:
              hoveredSide === "left"
                ? "0 0 50px rgba(27, 189, 197, 0.12)"
                : hoveredSide === "right"
                ? "0 0 50px rgba(212, 165, 116, 0.12)"
                : "none",
          }}
        />
      </motion.div>
    </section>
  );
};

export default DualWaveButton;
