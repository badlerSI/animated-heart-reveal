
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const softWhooshRef = useRef<HTMLAudioElement | null>(null);
  const electricCrackleRef = useRef<HTMLAudioElement | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Play animation once
  useEffect(() => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
      
      // Schedule audio playback
      const whooshTimeout = setTimeout(() => {
        if (softWhooshRef.current && !prefersReducedMotion) {
          softWhooshRef.current.volume = 0.3; // -10 dBFS approximation
          softWhooshRef.current.play().catch(err => console.log("Audio play error:", err));
        }
      }, 1900); // 1.9s for Wave animation
      
      const crackleTimeout = setTimeout(() => {
        if (electricCrackleRef.current && !prefersReducedMotion) {
          electricCrackleRef.current.volume = 0.3; // -10 dBFS approximation
          electricCrackleRef.current.play().catch(err => console.log("Audio play error:", err));
        }
      }, 2500); // 2.5s for heart animation
      
      return () => {
        clearTimeout(whooshTimeout);
        clearTimeout(crackleTimeout);
      };
    }
  }, [animationPlayed, prefersReducedMotion]);

  // Animation variants for wave animation
  const waveVariants = {
    hidden: {
      x: "-100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    },
    wiggle: {
      y: [0, -4, 4, -4, 4, 0],
      rotate: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.35,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    }
  };

  // Animation variants for heart glow effect
  const heartVariants = {
    initial: { 
      scale: 1.3,
      opacity: 0 
    },
    animate: { 
      scale: 1,
      filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.9))",
      opacity: 1,
      transition: { duration: 0.2 }
    },
    glow: {
      filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.65))",
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[300px] bg-[#0d0d12] rounded-lg">
      {/* Audio elements */}
      <audio ref={softWhooshRef} preload="auto">
        <source src="/sounds/soft-whoosh.mp3" type="audio/mp3" />
      </audio>
      <audio ref={electricCrackleRef} preload="auto">
        <source src="/sounds/electric-crackle.mp3" type="audio/mp3" />
      </audio>
      
      {/* Soul.png (z-index 10) */}
      <motion.img 
        src="/lovable-uploads/4e803f2d-1f15-4cdd-ae19-e6c61efd3070.png"
        alt="Soul"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.0 }}
      />
      
      {/* Interface.png (z-index 20) */}
      <motion.img 
        src="/lovable-uploads/9e9935d1-5af0-451b-8411-5892665d7346.png"
        alt="Interface"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
      />
      
      {/* Wave.png (z-index 30) - Now with snake entry animation */}
      <motion.img 
        src="/lovable-uploads/432c1313-f040-42ca-8f57-f49784ba30b1.png"
        alt="Wave"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto z-30"
        initial="hidden"
        animate={!prefersReducedMotion ? ["visible", "wiggle"] : "visible"}
        variants={waveVariants}
        transition={{
          wiggle: { delay: 1.9 }
        }}
      />
      
      {/* Connect Kanji (z-index 40) */}
      <motion.img 
        src="/lovable-uploads/56f1d23a-6c57-4fe3-90e4-17dbac82d91b.png"
        alt="Connect Symbol"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Line Kanji (z-index 50) */}
      <motion.img 
        src="/lovable-uploads/0b053000-25d7-4396-8891-d05e2caf2fa0.png"
        alt="Line Symbol"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
      />
      
      {/* Heart Kanji (z-index 60) - Improved size, flash and glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, delay: 2.5 }}
      >
        <motion.img 
          src="/lovable-uploads/040980d6-36c8-4c96-85be-427c43ddbd76.png"
          alt="Heart Symbol"
          className="w-auto h-auto scale-125"
          initial="initial"
          animate={!prefersReducedMotion ? ["animate", "glow"] : "animate"}
          variants={heartVariants}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
