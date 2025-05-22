
import { useEffect, useRef, useState } from "react";
import "./waveAnimation.css";

interface WaveAnimationProps {
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onPlaySound: () => void;
}

const WaveAnimation = ({ isVisible, prefersReducedMotion, onPlaySound }: WaveAnimationProps) => {
  const [activeFrames, setActiveFrames] = useState<number[]>([]);
  const animationRef = useRef<number | null>(null);
  
  // Complete set of 40 frames for the wave animation
  const waveFrames = [
    // First 20 frames
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
    "/lovable-uploads/d7eae518-c316-4840-9c79-6d7ba2a3b468.png",  // Wave_20
    
    // Second set of 20 frames (frames 21-40)
    "/lovable-uploads/02c1d3f6-c7c7-453b-8e71-b0106ec58795.png", // Wave_21
    "/lovable-uploads/24f4f7f3-66a4-42a5-8709-80febbdeeafa.png", // Wave_22
    "/lovable-uploads/348f3e01-e000-45d9-a59a-5312e3bc13a2.png", // Wave_23
    "/lovable-uploads/5ee59a29-f433-4eb9-b59d-bc8514490bb6.png", // Wave_24
    "/lovable-uploads/2d8a1b97-4560-4c29-b367-e9878e907578.png", // Wave_25
    "/lovable-uploads/095bc20c-a7bd-4323-947a-6b9e88e4c68c.png", // Wave_26
    "/lovable-uploads/37aee880-36fa-41bb-b249-e189d02e4939.png", // Wave_27
    "/lovable-uploads/282caff0-90c8-4495-8410-f240e92d6626.png", // Wave_28
    "/lovable-uploads/a35dc01e-9589-4d0c-9f02-e9528ad650ac.png", // Wave_29
    "/lovable-uploads/7a074875-160d-4dc8-b8e1-0c846a36bc89.png", // Wave_30
    "/lovable-uploads/ad68fc55-5859-4d32-8b7d-b06c1a633902.png", // Wave_31
    "/lovable-uploads/c036a139-7e35-41a1-b43d-9a378121e8ad.png", // Wave_32
    "/lovable-uploads/57ce5828-d3d7-48ae-8dbd-e9cc7c435079.png", // Wave_33
    "/lovable-uploads/86c00fc1-700c-4538-b77d-71d390a9ad88.png", // Wave_34
    "/lovable-uploads/4c6728c4-a020-44c4-b9f5-42cc1b1df716.png", // Wave_35
    "/lovable-uploads/516bb43f-ea69-4649-8624-cfbb58e0c6bf.png", // Wave_36
    "/lovable-uploads/8494515c-3af6-43c9-82db-ef746bad3e30.png", // Wave_37
    "/lovable-uploads/1b55016b-6e62-4202-90a5-7410485cfa04.png", // Wave_38
    "/lovable-uploads/10a93878-38a3-4b53-8510-3e31ce4ce447.png", // Wave_39
    "/lovable-uploads/7f0b2c87-ab43-4627-ac48-d23bda5a7280.png"   // Wave_40
  ];

  useEffect(() => {
    // Only start animation when component becomes visible
    if (isVisible) {
      console.log("Starting wave animation - horizontal sequence with persistent frames");
      
      // Play sound if animations are enabled
      if (!prefersReducedMotion) {
        try {
          onPlaySound();
        } catch (error) {
          console.log("Audio play error:", error);
        }
      }

      // Set up animation timing
      const framesPerSecond = 30;
      const frameDuration = 1000 / framesPerSecond;
      let frameIndex = 0;

      // Reset active frames
      setActiveFrames([]);

      // Function to step through frames
      const animateFrames = () => {
        // Add the current frame to active frames
        setActiveFrames(prev => [...prev, frameIndex]);
        
        frameIndex++;

        // Continue animation until we've shown all frames
        if (frameIndex < waveFrames.length) {
          animationRef.current = window.setTimeout(animateFrames, frameDuration);
        }
      };

      // Start the animation
      animateFrames();

      // Cleanup function to clear the timeout if the component unmounts
      return () => {
        if (animationRef.current !== null) {
          clearTimeout(animationRef.current);
        }
      };
    }
  }, [isVisible, prefersReducedMotion, onPlaySound, waveFrames.length]);

  // Don't render anything if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-50">
      <div className="wave-container">
        <div className="wave-slice-container">
          <div className="wave-frames">
            {waveFrames.map((frame, index) => (
              <img
                key={`wave-frame-${index}`}
                src={frame}
                alt={`Wave Frame ${index + 1}`}
                className={`wave-frame ${activeFrames.includes(index) ? 'active' : ''}`}
                style={{ order: index }} // Ensure proper sequence order
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveAnimation;
