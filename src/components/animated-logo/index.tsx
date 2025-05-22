
import { useReducedMotion } from './useReducedMotion';
import { useAnimationSequence } from './useAnimationSequence';
import { useAudio } from './useAudio';
import AnimatedElement from './AnimatedElement';
import WaveAnimation from './WaveAnimation';
import './animatedLogo.css';

const AnimatedLogo = () => {
  const prefersReducedMotion = useReducedMotion();
  const { isElementVisible } = useAnimationSequence(false, prefersReducedMotion);
  
  const { audioRef: softWhooshRef, play: playSoftWhoosh } = useAudio('/sounds/soft-whoosh.mp3');
  const { audioRef: electricCrackleRef, play: playElectricCrackle } = useAudio('/sounds/electric-crackle.mp3');

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
      <AnimatedElement 
        isVisible={isElementVisible("soul")}
        imageSrc="/lovable-uploads/4e803f2d-1f15-4cdd-ae19-e6c61efd3070.png"
        alt="Soul"
        zIndex={10}
      />
      
      {/* Connect Kanji (z-index 20) */}
      <AnimatedElement 
        isVisible={isElementVisible("connect")}
        imageSrc="/lovable-uploads/56f1d23a-6c57-4fe3-90e4-17dbac82d91b.png"
        alt="Connect Symbol"
        zIndex={20}
      />
      
      {/* Line Kanji (z-index 30) */}
      <AnimatedElement 
        isVisible={isElementVisible("line")}
        imageSrc="/lovable-uploads/0b053000-25d7-4396-8891-d05e2caf2fa0.png"
        alt="Line Symbol"
        zIndex={30}
      />
      
      {/* Interface.png (z-index 40) */}
      <AnimatedElement 
        isVisible={isElementVisible("interface")}
        imageSrc="/lovable-uploads/9e9935d1-5af0-451b-8411-5892665d7346.png"
        alt="Interface"
        zIndex={40}
      />
      
      {/* Wave Slices (z-index 50) - Animated sequentially */}
      <WaveAnimation 
        isVisible={isElementVisible("wave")}
        prefersReducedMotion={prefersReducedMotion}
        onPlaySound={playSoftWhoosh}
      />

      {/* Heart Kanji (z-index 60) - With cyan glow effect, appears last */}
      <AnimatedElement 
        isVisible={isElementVisible("heart")}
        imageSrc="/lovable-uploads/040980d6-36c8-4c96-85be-427c43ddbd76.png"
        alt="Heart Symbol"
        zIndex={60}
        withGlowEffect={true}
      />
    </div>
  );
};

export default AnimatedLogo;
