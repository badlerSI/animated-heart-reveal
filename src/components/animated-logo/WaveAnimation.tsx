
import { useEffect, useRef } from "react";
import "./waveAnimation.css";

interface WaveAnimationProps {
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onPlaySound: () => void;
}

const WaveAnimation = ({ isVisible, prefersReducedMotion, onPlaySound }: WaveAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We'll replace this array with new uploads
  const waveSlices: string[] = [];

  useEffect(() => {
    if (isVisible && containerRef.current && waveSlices.length > 0) {
      console.log("Starting wave animation with new images");
      
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Create and append all wave slice images
      waveSlices.forEach((slice, index) => {
        const img = document.createElement('img');
        img.src = slice;
        img.alt = `Wave Slice ${index + 1}`;
        img.className = 'wave-slice';
        img.style.setProperty('--i', index.toString());
        containerRef.current?.appendChild(img);
        
        // Set dimensions based on first image
        if (index === 0) {
          img.onload = () => {
            const container = containerRef.current;
            if (container) {
              const containerWidth = container.clientWidth;
              const containerHeight = container.clientHeight;
              const sliceCount = waveSlices.length;
              
              const sliceWidth = Math.floor(containerWidth / sliceCount);
              
              container.style.setProperty('--slice-w', `${sliceWidth}px`);
              container.style.setProperty('--slice-h', `${containerHeight}px`);
            }
          };
        }
      });
      
      // Play sound if animations are enabled
      if (!prefersReducedMotion) {
        console.log("Playing wave sound effect");
        onPlaySound();
      }
    }
  }, [isVisible, prefersReducedMotion, onPlaySound, waveSlices]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div 
        id="wave-container"
        ref={containerRef} 
        className="wave-container"
      ></div>
    </div>
  );
};

export default WaveAnimation;
