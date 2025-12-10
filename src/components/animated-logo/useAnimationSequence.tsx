
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
        
        // Define the animation sequence with specific timing
        const sequence: AnimationSequenceItem[] = [
          { element: "connect", delay: 0 },
          { element: "line", delay: 400 },
          { element: "interface", delay: 800 },
          { element: "soul", delay: 1200 },
          { element: "wave", delay: 1600 },
          { element: "heart", delay: 2200 }
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
