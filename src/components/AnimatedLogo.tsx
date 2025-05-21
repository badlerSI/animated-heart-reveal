
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedLogo = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
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

  // Animation sequence controller
  useEffect(() => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
      
      // Define the animation sequence with specific timing - UPDATED ORDER
      const sequence = [
        { element: "connect", delay: 0 },
        { element: "line", delay: 500 },
        { element: "interface", delay: 1000 },
        { element: "soul", delay: 1500 },
        { element: "wave", delay: 2000 },
        { element: "heart", delay: 2500 }
      ];
      
      // Show elements in sequence
      sequence.forEach(item => {
        setTimeout(() => {
          setVisibleElements(prev => [...prev, item.element]);
          
          // Play sounds at appropriate times
          if (item.element === "wave" && softWhooshRef.current && !prefersReducedMotion) {
            softWhooshRef.current.volume = 0.3;
            softWhooshRef.current.play().catch(err => console.log("Audio play error:", err));
          }
          
          if (item.element === "heart" && electricCrackleRef.current && !prefersReducedMotion) {
            electricCrackleRef.current.volume = 0.3;
            electricCrackleRef.current.play().catch(err => console.log("Audio play error:", err));
          }
        }, item.delay);
      });
    }
  }, [animationPlayed, prefersReducedMotion]);

  return (
    <div className="relative w-full max-w-md mx-auto h-[350px] bg-[#0d0d12] rounded-lg overflow-hidden">
      {/* Audio elements */}
      <audio ref={softWhooshRef} preload="auto">
        <source src="/sounds/soft-whoosh.mp3" type="audio/mp3" />
      </audio>
      <audio ref={electricCrackleRef} preload="auto">
        <source src="/sounds/electric-crackle.mp3" type="audio/mp3" />
      </audio>
      
      {/* Soul.png (z-index 10) - Base layer - NOW APPEARS AFTER INTERFACE */}
      <AnimatePresence>
        {visibleElements.includes("soul") && (
          <motion.img 
            src="/lovable-uploads/4e803f2d-1f15-4cdd-ae19-e6c61efd3070.png"
            alt="Soul"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      
      {/* Connect Kanji (z-index 20) */}
      <AnimatePresence>
        {visibleElements.includes("connect") && (
          <motion.img 
            src="/lovable-uploads/56f1d23a-6c57-4fe3-90e4-17dbac82d91b.png"
            alt="Connect Symbol"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      
      {/* Line Kanji (z-index 30) */}
      <AnimatePresence>
        {visibleElements.includes("line") && (
          <motion.img 
            src="/lovable-uploads/0b053000-25d7-4396-8891-d05e2caf2fa0.png"
            alt="Line Symbol"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      
      {/* Interface.png (z-index 40) */}
      <AnimatePresence>
        {visibleElements.includes("interface") && (
          <motion.img 
            src="/lovable-uploads/9e9935d1-5af0-451b-8411-5892665d7346.png"
            alt="Interface"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      
      {/* Wave.png (z-index 50) */}
      <AnimatePresence>
        {visibleElements.includes("wave") && (
          <motion.img 
            src="/lovable-uploads/432c1313-f040-42ca-8f57-f49784ba30b1.png"
            alt="Wave"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Heart Kanji (z-index 60) - With cyan glow effect, appears last */}
      <AnimatePresence>
        {visibleElements.includes("heart") && (
          <motion.img 
            src="/lovable-uploads/040980d6-36c8-4c96-85be-427c43ddbd76.png"
            alt="Heart Symbol"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-60"
            initial={{ opacity: 0, filter: "drop-shadow(0 0 0px #33C3F0)" }}
            animate={{ 
              opacity: 1,
              filter: [
                "drop-shadow(0 0 0px #33C3F0)",
                "drop-shadow(0 0 15px #33C3F0)",
                "drop-shadow(0 0 5px #33C3F0)"
              ]
            }}
            transition={{ 
              opacity: { duration: 0.7, ease: "easeInOut" },
              filter: { duration: 1.5, times: [0, 0.5, 1] }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;
