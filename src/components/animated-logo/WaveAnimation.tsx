
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface WaveAnimationProps {
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onPlaySound: () => void;
}

const WaveAnimation = ({ isVisible, prefersReducedMotion, onPlaySound }: WaveAnimationProps) => {
  const [currentWaveSlice, setCurrentWaveSlice] = useState(-1);

  // Wave slices - paths to all 40 uploaded wave slice images
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
    // Adding the next 20 slices (21-40)
    "/lovable-uploads/ee8feb5c-8c1d-4632-859a-6564afe6a702.png",
    "/lovable-uploads/c086a73b-66ce-4264-bd40-ecd097b23bd5.png",
    "/lovable-uploads/38fd9be8-fa67-4026-ab4f-220eca8ccbcd.png",
    "/lovable-uploads/21471639-46a4-465d-8789-4c7172df9377.png",
    "/lovable-uploads/d0efb4e4-4971-49ba-81ee-2fa5eb8c4eab.png",
    "/lovable-uploads/16d2e2d6-2122-43c9-a610-300b30df27cb.png",
    "/lovable-uploads/e0147a6c-7c3b-4b84-9a5e-6667e9aa5946.png",
    "/lovable-uploads/4debf835-93fd-4960-bf6a-7e5202d3085a.png",
    "/lovable-uploads/a1f5c654-4561-442a-a5f0-5a1ad82fdfb3.png",
    "/lovable-uploads/0edd779f-420d-4a82-ab69-dc04f793e273.png",
    "/lovable-uploads/107f9490-bf06-424c-b7db-60fa1bcf469c.png",
    "/lovable-uploads/2541e752-4092-4300-a16f-be1b77c3c131.png",
    "/lovable-uploads/b6563b5f-96a4-4101-9c8c-d35ce14644c2.png",
    "/lovable-uploads/d30ec800-8d20-41f7-9d21-64891c733e22.png",
    "/lovable-uploads/fa29d50c-1bb3-49f2-8667-7ea4f79a33f8.png",
    "/lovable-uploads/adbfe605-257a-4453-97a5-c4020d5153a2.png",
    "/lovable-uploads/77db4f90-1fb3-4567-b2fd-b2d6785ea2df.png",
    "/lovable-uploads/4cf1dffc-199d-4f90-8cfb-071afc596e59.png",
    "/lovable-uploads/edfb016f-8d5c-4572-bbaa-1ce1c26b6549.png",
    "/lovable-uploads/a03e77d4-21a0-4f1c-9d36-7a6fcef004cd.png",
  ];

  // Wave animation controller
  useEffect(() => {
    if (isVisible && currentWaveSlice === -1) {
      console.log("Starting wave animation");
      // Start the wave slice animation at 30fps (approximately 33.33ms per frame)
      const frameInterval = 33.33; // milliseconds
      let sliceIndex = 0;
      
      // Play sound when wave animation starts
      if (!prefersReducedMotion) {
        onPlaySound();
      }
      
      // Animate through each slice
      const interval = setInterval(() => {
        if (sliceIndex < waveSlices.length) {
          setCurrentWaveSlice(sliceIndex);
          console.log(`Showing wave slice: ${sliceIndex}`);
          sliceIndex++;
        } else {
          // Animation complete, clear interval
          console.log("Wave animation complete");
          clearInterval(interval);
        }
      }, frameInterval);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, currentWaveSlice, prefersReducedMotion, waveSlices.length, onPlaySound]);

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px] z-50 flex overflow-hidden">
      {isVisible && currentWaveSlice >= 0 && (
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
  );
};

export default WaveAnimation;
