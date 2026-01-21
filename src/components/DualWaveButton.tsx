import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface DualWaveButtonProps {
  accentColor?: string;
}

const DualWaveButton = ({ accentColor = "#1bbdc5" }: DualWaveButtonProps) => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <section className="py-20 px-4">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs tracking-[0.4em] uppercase mb-16 text-white/40"
      >
        Two expressions. One soul.
      </motion.p>

      {/* Organic Diagonal Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-lg mx-auto h-64"
      >
        {/* Original Wave.png with CSS filters for ethereal look */}
        <img 
          src="/lovable-uploads/be3b360f-fe9c-45f7-aa45-4caff7512c78.png"
          alt=""
          className="absolute left-1/2 top-1/2 w-[28rem] h-auto pointer-events-none transition-all duration-500 z-10"
          style={{
            transform: "translate(-50%, -50%) rotate(-20deg)",
            opacity: hoveredSide ? 0.7 : 0.4,
            filter: `brightness(2) saturate(0) contrast(0.7) ${hoveredSide ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" : ""}`
          }}
        />

        {/* Upper-Left Region: the light */}
        <Link
          to="/light"
          className="absolute top-0 left-0 w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-10"
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)"
          }}
        >
          <span
            className="font-outfit text-2xl md:text-3xl font-extralight tracking-widest text-white/60 group-hover:text-white transition-all duration-300 lowercase"
            style={{
              textShadow: hoveredSide === "left" ? "0 0 30px rgba(27, 189, 197, 0.7)" : "none",
            }}
          >
            the light
          </span>
          <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-white/25 group-hover:text-[#1bbdc5]/70 mt-2 transition-colors duration-300">
            yours alone
          </span>
        </Link>

        {/* Extended hover zone for upper-left */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            clipPath: "polygon(0 0, 70% 0, 0 70%)"
          }}
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <Link to="/light" className="block w-full h-full" />
        </div>

        {/* Lower-Right Region: The Heavy */}
        <Link
          to="/heavy"
          className="absolute bottom-0 right-0 w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-10"
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
          }}
        >
          <span
            className="font-playfair text-2xl md:text-3xl font-normal tracking-wide text-white/60 group-hover:text-white transition-all duration-300"
            style={{
              textShadow: hoveredSide === "right" ? "0 0 30px rgba(212, 165, 116, 0.7)" : "none",
            }}
          >
            The Heavy
          </span>
          <span className="font-playfair text-[10px] tracking-[0.2em] text-white/25 group-hover:text-[#d4a574]/70 mt-2 transition-colors duration-300 italic">
            serve the room
          </span>
        </Link>

        {/* Extended hover zone for lower-right */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            clipPath: "polygon(100% 30%, 100% 100%, 30% 100%)"
          }}
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <Link to="/heavy" className="block w-full h-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default DualWaveButton;
