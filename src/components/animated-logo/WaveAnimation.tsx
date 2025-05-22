
import { useEffect, useRef } from "react";
import "./waveAnimation.css";

interface WaveAnimationProps {
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onPlaySound: () => void;
}

const WaveAnimation = ({ isVisible, prefersReducedMotion, onPlaySound }: WaveAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // First 20 frames of the wave animation
  const waveSlices = [
    "/lovable-uploads/762a95ff-f48e-4efd-9ce0-47a43f218f29.png", // Wave_01
    "/lovable-uploads/3dcd7f9b-3078-4677-b981-9f832697fb70.png", // Wave_02
    "/lovable-uploads/a4d45b17-3873-466b-bb1d-b4e309aeb413.png", // Wave_03
    "/lovable-uploads/d0bedd4d-e14e-4b25-9f74-979bb3a90047.png", // Wave_04
    "/lovable-uploads/3dee6079-aed4-431f-93ea-b4d9b359bb19.png", // Wave_05
    "/lovable-uploads/e432d087-d36a-4fc0-a53f-7acfe95b5ae5.png", // Wave_06
    "/lovable-uploads/0b4b9f26-2191-4c9d-ad31-22cbf144398f.png", // Wave_07
    "/lovable-uploads/d36d9d1b-6397-400e-9e9f-5e4ec2a6689f.png", // Wave_08
    "/lovable-uploads/99b5014e-e70a-4d0e-8304-cfd97522a778.png", // Wave_09
    "/lovable-uploads/064f952a-9a89-4bc4-ac0e-a3c93459eb93.png", // Wave_10
    "/lovable-uploads/6026f58a-ecef-4e25-bce3-a63a9e7369ff.png", // Wave_11
    "/lovable-uploads/c842b6d3-0f2a-47d9-ba13-ad60c354e300.png", // Wave_12
    "/lovable-uploads/248723a8-a3b4-4537-829c-f8254150eaf4.png", // Wave_13
    "/lovable-uploads/695bf637-c9fe-44cb-a0ab-3466c39b2843.png", // Wave_14
    "/lovable-uploads/aa2ae38e-46a3-4e18-822a-6556dbc5dbe4.png", // Wave_15
    "/lovable-uploads/a5592fba-f805-4a58-b239-555471d5e23f.png", // Wave_16
    "/lovable-uploads/63abb9da-5da6-4046-9278-2be5dfa1e8c4.png", // Wave_17
    "/lovable-uploads/a3f8ce69-83f1-4d95-8bc0-468332d2cc4b.png", // Wave_18
    "/lovable-uploads/8c534cbe-8936-4117-961f-b69d4dc16558.png", // Wave_19
    "/lovable-uploads/d7eae518-c316-4840-9c79-6d7ba2a3b468.png"  // Wave_20
  ];

  useEffect(() => {
    if (isVisible && containerRef.current && waveSlices.length > 0) {
      console.log("Starting wave animation with new first 20 frames");
      
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
