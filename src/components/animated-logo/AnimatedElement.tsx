
import React from "react";

interface AnimatedElementProps {
  isVisible: boolean;
  imageSrc: string;
  alt: string;
  zIndex: number;
  withGlowEffect?: boolean;
}

const AnimatedElement = ({ 
  isVisible, 
  imageSrc, 
  alt, 
  zIndex, 
  withGlowEffect = false 
}: AnimatedElementProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <img 
      src={imageSrc}
      alt={alt}
      className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1536px] h-[1024px] transition-opacity duration-700 ease-in-out ${withGlowEffect ? 'glow-effect' : ''}`}
      style={{ 
        zIndex,
        filter: withGlowEffect ? 'drop-shadow(0 0 8px #33C3F0)' : 'none'
      }}
    />
  );
};

export default AnimatedElement;
