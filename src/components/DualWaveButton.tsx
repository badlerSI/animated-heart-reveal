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
    if (hoveredSide === "left") return "drop-shadow(0 0 8px rgba(27, 189, 197, 0.8))";
    if (hoveredSide === "right") return "drop-shadow(0 0 8px rgba(212, 165, 116, 0.8))";
    return "none";
  };

  const getWaveStroke = () => {
    if (hoveredSide === "left") return "#1bbdc5";
    if (hoveredSide === "right") return "#d4a574";
    return "rgba(255, 255, 255, 0.15)";
  };

  // Corner accent colors
  const getTopLeftAccent = () => {
    if (hoveredSide === "left") return "#1bbdc5";
    return "rgba(27, 189, 197, 0.2)";
  };

  const getBottomRightAccent = () => {
    if (hoveredSide === "right") return "#d4a574";
    return "rgba(212, 165, 116, 0.2)";
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
        {/* Top-left decorative wave accent */}
        <svg
          className="absolute -top-3 -left-3 w-12 h-12 pointer-events-none transition-all duration-500"
          viewBox="0 0 48 48"
          style={{ filter: hoveredSide === "left" ? "drop-shadow(0 0 6px rgba(27, 189, 197, 0.6))" : "none" }}
        >
          <path
            d="M 8,40 Q 8,20 24,16 Q 40,12 44,8"
            stroke={getTopLeftAccent()}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>

        {/* Bottom-right decorative wave accent */}
        <svg
          className="absolute -bottom-3 -right-3 w-12 h-12 pointer-events-none transition-all duration-500"
          viewBox="0 0 48 48"
          style={{ filter: hoveredSide === "right" ? "drop-shadow(0 0 6px rgba(212, 165, 116, 0.6))" : "none" }}
        >
          <path
            d="M 4,40 Q 8,36 24,32 Q 40,28 40,8"
            stroke={getBottomRightAccent()}
            strokeWidth="1.5"
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

          {/* Wave Divider SVG - Single clean sine wave */}
          <svg
            className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 z-20 pointer-events-none transition-all duration-500"
            viewBox="0 0 40 100"
            preserveAspectRatio="none"
            style={{ filter: getWaveGlow() }}
          >
            <path
              d="M 20,0 C 35,25 5,25 20,50 C 35,75 5,75 20,100"
              stroke={getWaveStroke()}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>

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
