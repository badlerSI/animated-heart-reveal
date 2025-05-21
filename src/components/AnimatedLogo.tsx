
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
          softWhooshRef.current.volume = 0.3;
          softWhooshRef.current.play().catch(err => console.log("Audio play error:", err));
        }
      }, 1900); // 1.9s for Wave animation
      
      const crackleTimeout = setTimeout(() => {
        if (electricCrackleRef.current && !prefersReducedMotion) {
          electricCrackleRef.current.volume = 0.3;
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
      x: "-120%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1] // Smooth easing
      }
    },
    undulate: {
      y: [0, -5, 5, -5, 0],
      scale: [1, 1.05, 1, 1.05, 1],
      filter: [
        "brightness(1) hue-rotate(0deg)",
        "brightness(1.2) hue-rotate(10deg)",
        "brightness(1) hue-rotate(0deg)",
        "brightness(1.2) hue-rotate(-10deg)",
        "brightness(1) hue-rotate(0deg)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for heart glow effect
  const heartVariants = {
    initial: { 
      scale: 1.6,
      opacity: 0,
      filter: "brightness(0.8) drop-shadow(0 0 0px rgba(0, 255, 255, 0))"
    },
    animate: { 
      scale: 1.5,
      opacity: 1,
      filter: "brightness(1.2) drop-shadow(0 0 30px rgba(0, 255, 255, 1))",
      transition: { duration: 0.4, ease: "easeOut" }
    },
    glow: {
      scale: [1.5, 1.55, 1.5],
      filter: [
        "brightness(1.2) drop-shadow(0 0 30px rgba(0, 255, 255, 1))",
        "brightness(1.4) drop-shadow(0 0 40px rgba(0, 255, 255, 0.8))",
        "brightness(1.2) drop-shadow(0 0 30px rgba(0, 255, 255, 1))"
      ],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[350px] bg-[#0d0d12] rounded-lg overflow-hidden">
      {/* Audio elements */}
      <audio ref={softWhooshRef} preload="auto">
        <source src="/sounds/soft-whoosh.mp3" type="audio/mp3" />
      </audio>
      <audio ref={electricCrackleRef} preload="auto">
        <source src="/sounds/electric-crackle.mp3" type="audio/mp3" />
      </audio>
      
      {/* Soul.png (z-index 10) - Base layer */}
      <motion.img 
        src="/lovable-uploads/4e803f2d-1f15-4cdd-ae19-e6c61efd3070.png"
        alt="Soul"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.0 }}
      />
      
      {/* Interface.png (z-index 20) */}
      <motion.img 
        src="/lovable-uploads/9e9935d1-5af0-451b-8411-5892665d7346.png"
        alt="Interface"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
      />
      
      {/* Connect Kanji (z-index 30) */}
      <motion.img 
        src="/lovable-uploads/56f1d23a-6c57-4fe3-90e4-17dbac82d91b.png"
        alt="Connect Symbol"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Line Kanji (z-index 40) */}
      <motion.img 
        src="/lovable-uploads/0b053000-25d7-4396-8891-d05e2caf2fa0.png"
        alt="Line Symbol"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
      />
      
      {/* Wave.png (z-index 50) - Improved undulating wave animation */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50 overflow-visible"
        initial="hidden"
        animate={!prefersReducedMotion ? ["visible", "undulate"] : "visible"}
        variants={waveVariants}
      >
        <motion.img 
          src="/lovable-uploads/432c1313-f040-42ca-8f57-f49784ba30b1.png"
          alt="Wave"
          className="w-auto h-[300px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      
      {/* Heart Kanji (z-index 60) - Significantly improved glow effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, delay: 2.5 }}
      >
        <motion.img 
          src="/lovable-uploads/040980d6-36c8-4c96-85be-427c43ddbd76.png"
          alt="Heart Symbol"
          className="w-auto h-[300px]"
          initial="initial"
          animate={!prefersReducedMotion ? ["animate", "glow"] : "animate"}
          variants={heartVariants}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
