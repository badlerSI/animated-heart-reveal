import { useState } from "react";
import { motion } from "framer-motion";

interface ProductRevealProps {
  exteriorSrc: string;
  interiorSrc: string;
  exteriorAlt: string;
  interiorAlt: string;
}

const ProductReveal = ({
  exteriorSrc,
  interiorSrc,
  exteriorAlt,
  interiorAlt,
}: ProductRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Instruction text */}
      <motion.p
        className="text-center mb-4 text-amber-400/70 text-sm tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isRevealed ? "The soul within" : "Hover to reveal what's inside"}
      </motion.p>

      {/* Image container */}
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        onTouchStart={() => setIsRevealed(!isRevealed)}
      >
        {/* Exterior image (wood case) */}
        <motion.img
          src={exteriorSrc}
          alt={exteriorAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          animate={{ opacity: isRevealed ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Interior image (skeleton) */}
        <motion.img
          src={interiorSrc}
          alt={interiorAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          animate={{ opacity: isRevealed ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Warm glow overlay when revealed */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            boxShadow: isRevealed
              ? "inset 0 0 60px rgba(212, 165, 116, 0.3)"
              : "inset 0 0 0px rgba(212, 165, 116, 0)",
          }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Caption */}
      <motion.p
        className="text-center mt-6 font-playfair text-xl text-amber-200/80 italic"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Beautiful outside. Powerful within.
      </motion.p>
    </div>
  );
};

export default ProductReveal;
