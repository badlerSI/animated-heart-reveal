
import { useState, useEffect } from 'react';
import { AnimationElement, AnimationSequenceItem } from './types';

export const useAnimationSequence = (
  imagesLoaded: boolean = false,
  prefersReducedMotion: boolean = false
) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [visibleElements, setVisibleElements] = useState<AnimationElement[]>([]);

  useEffect(() => {
    if (!imagesLoaded || !animationPlayed) {
      if (imagesLoaded && !animationPlayed) {
        console.log('Images loaded, starting animation sequence');
        setAnimationPlayed(true);
        
        // Calculate when Wave_25 appears (index 24) based on FPS
        const fps = 30; // Same as defined in CSS
        const wave25Delay = 2000 + ((24 / fps) * 1000); // Base wave delay + time until frame 25
        
        // Define the animation sequence with specific timing - UPDATED ORDER
        const sequence: AnimationSequenceItem[] = [
          { element: "connect", delay: 0 },
          { element: "line", delay: 500 },
          { element: "interface", delay: 1000 },
          { element: "soul", delay: 1500 },
          { element: "wave", delay: 2000 },
          { element: "heart", delay: wave25Delay } // Synchronized with Wave_25
        ];
        
        // Show elements in sequence
        sequence.forEach(item => {
          setTimeout(() => {
            setVisibleElements(prev => [...prev, item.element]);
            console.log(`Adding element: ${item.element}`);
          }, item.delay);
        });
      }
    }
  }, [imagesLoaded, animationPlayed, prefersReducedMotion]);

  return {
    visibleElements,
    isElementVisible: (element: AnimationElement) => visibleElements.includes(element)
  };
};
