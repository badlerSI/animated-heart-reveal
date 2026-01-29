import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DualWaveButtonProps {
  accentColor?: string;
}

const DualWaveButton = ({ accentColor = "#1bbdc5" }: DualWaveButtonProps) => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const isMobile = useIsMobile();

  // Mobile Layout - Clean vertical stack
  if (isMobile) {
    return (
      <section className="py-20 px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs tracking-[0.4em] uppercase mb-12 text-white/40"
        >
          Two expressions. One soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center gap-0"
        >
          {/* the light - Mobile - offset left */}
          <Link
            to="/light"
            className="flex flex-col items-start self-start ml-0 pt-6 pb-2 px-8 mt-20 group"
          >
            <span
              className="font-outfit text-2xl font-extralight tracking-widest text-white/60 group-hover:text-white transition-all duration-300 lowercase"
              style={{
                textShadow: "0 0 30px rgba(27, 189, 197, 0.5)",
              }}
            >
              the light
            </span>
            <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-white/25 group-hover:text-[#1bbdc5]/70 mt-2 transition-colors duration-300">
              yours alone
            </span>
          </Link>

          {/* Wave Divider - Horizontal on mobile */}
          <img 
            src="/lovable-uploads/wave-transparent-v3.png"
            alt=""
            className="w-48 h-auto opacity-60"
          />

          {/* The Heavy - Mobile - offset right */}
          <Link
            to="/heavy"
            className="flex flex-col items-end self-end mr-0 pt-2 pb-6 px-8 -mt-12 group"
          >
            <span
              className="font-playfair text-2xl font-normal tracking-wide text-white/60 group-hover:text-white transition-all duration-300"
              style={{
                textShadow: "0 0 30px rgba(212, 165, 116, 0.5)",
              }}
            >
              The Heavy
            </span>
            <span className="font-playfair text-[10px] tracking-[0.2em] text-white/25 group-hover:text-[#d4a574]/70 mt-2 transition-colors duration-300 italic">
              serve the room
            </span>
          </Link>
        </motion.div>
      </section>
    );
  }

  // Desktop Layout - Original diagonal design (unchanged)
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
        {/* Wave Divider - Clean transparent PNG */}
        <img 
          src="/lovable-uploads/wave-transparent-v3.png"
          alt=""
          className="absolute left-1/2 top-1/2 w-[42rem] h-auto pointer-events-none z-[1]"
          style={{
            transform: "translate(-50%, -50%) rotate(-20deg)"
          }}
        />

        {/* Upper-Left Region: the light */}
        <Link
          to="/light"
          className="absolute top-[72px] left-[62px] w-1/2 h-1/2 flex flex-col items-start justify-start pt-4 pl-4 group z-20"
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
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
          className="absolute bottom-[72px] right-[72px] w-1/2 h-1/2 flex flex-col items-end justify-end pb-4 pr-4 group z-20"
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
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
