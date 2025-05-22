
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedLogo = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const [currentWaveSlice, setCurrentWaveSlice] = useState(-1);
  const softWhooshRef = useRef<HTMLAudioElement | null>(null);
  const electricCrackleRef = useRef<HTMLAudioElement | null>(null);

  // Wave slices - paths to all 20 uploaded wave slice images
  const waveSlices = [
    "/lovable-uploads/0706c3d0-ffba-4897-8921-d48c49ed347d.png",
    "/lovable-uploads/1b5faba3-2377-4772-9b69-d5b7cbead5dc.png",
    "/lovable-uploads/140f046f-94eb-4b71-b367-4b074ec51b07.png",
    "/lovable-uploads/dcec6232-d22d-4d46-ad82-fb4d43671e9a.png",
    "/lovable-uploads/aff122c6-217f-4be3-af9d-31e2a6583d61.png",
    "/lovable-uploads/1ea1e9b5-a121-46af-b7e2-5c584044935a.png",
    "/lovable-uploads/19d0fba2-5cab-477a-9a16-04f400f8c2be.png",
    "/lovable-uploads/fe212e97-eaab-47d1-9850-82edf3c3732d.png",
    "/lovable-uploads/2c10a9e6-cd3c-47fd-9e44-0cd4e38b3807.png",
    "/lovable-uploads/c804832a-de15-40d9-9317-a403f9b4a520.png",
    "/lovable-uploads/31b7a062-6644-43ed-9142-b86ffc62fc95.png",
    "/lovable-uploads/3ded11b6-8b55-47e2-aa5c-fbfeb48ddadf.png",
    "/lovable-uploads/ab7f8692-bc1b-4f16-ba47-746f4992e612.png",
    "/lovable-uploads/9f97832b-0315-4aa0-8d19-963a2428a5e1.png",
    "/lovable-uploads/a7a5bd71-e546-4ec3-9d4a-22929a2a3363.png",
    "/lovable-uploads/becc527f-e075-4448-9ccc-0fa61ddc9450.png",
    "/lovable-uploads/2aee823d-bf96-4a41-997b-4d2194fd71d5.png",
    "/lovable-uploads/982d0243-480d-4d98-916a-10f04f281028.png",
    "/lovable-uploads/4619c67f-6cda-4871-8814-65279fba0a0e.png",
    "/lovable-uploads/10ae94f5-8da8-4d84-bc98-a0c6bf4e5c80.png",
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Wave animation controller
  useEffect(() => {
    if (visibleElements.includes("wave") && currentWaveSlice === -1) {
      // Start the wave slice animation at 30fps (approximately 33.33ms per frame)
      const frameInterval = 33.33; // milliseconds
      let sliceIndex = 0;
      
      // Play sound when wave animation starts
      if (softWhooshRef.current && !prefersReducedMotion) {
        softWhooshRef.current.volume = 0.3;
        softWhooshRef.current.play().catch(err => console.log("Audio play error:", err));
      }
      
      // Animate through each slice
      const interval = setInterval(() => {
        if (sliceIndex < waveSlices.length) {
          setCurrentWaveSlice(sliceIndex);
          sliceIndex++;
        } else {
          // Animation complete, clear interval
          clearInterval(interval);
        }
      }, frameInterval);
      
      return () => clearInterval(interval);
    }
  }, [visibleElements, currentWaveSlice, prefersReducedMotion]);

  // Main animation sequence controller
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
        { element: "heart", delay: 3500 } // Extended delay to allow wave animation to complete
      ];
      
      // Show elements in sequence
      sequence.forEach(item => {
        setTimeout(() => {
          setVisibleElements(prev => [...prev, item.element]);
          
          // Play heart sound
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
      
      {/* Wave Slices (z-index 50) - Animated sequentially */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-50 flex overflow-hidden">
        {visibleElements.includes("wave") && currentWaveSlice >= 0 && (
          <div className="relative w-auto h-[300px] flex" style={{ width: "100%" }}>
            {waveSlices.map((slice, index) => (
              <img
                key={index}
                src={slice}
                alt={`Wave Slice ${index + 1}`}
                className="h-[300px] w-auto"
                style={{ 
                  opacity: index <= currentWaveSlice ? 1 : 0,
                  position: "absolute",
                  left: 0,
                  top: 0
                }}
              />
            ))}
          </div>
        )}
      </div>

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
