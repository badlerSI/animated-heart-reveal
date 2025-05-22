
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
    <div 
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out"
      style={{ zIndex }}
    >
      <img 
        src={imageSrc}
        alt={alt}
        className={`max-w-full max-h-full object-contain ${withGlowEffect ? 'glow-effect' : ''}`}
        style={{ 
          filter: withGlowEffect ? 'drop-shadow(0 0 8px #33C3F0)' : 'none'
        }}
      />
    </div>
  );
};

export default AnimatedElement;
