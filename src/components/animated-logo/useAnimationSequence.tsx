
import { useState, useEffect } from 'react';
import { AnimationElement, AnimationSequenceItem } from './types';

export const useAnimationSequence = (
  initialState: boolean = false,
  prefersReducedMotion: boolean = false
) => {
  const [animationPlayed, setAnimationPlayed] = useState(initialState);
  const [visibleElements, setVisibleElements] = useState<AnimationElement[]>([]);

  useEffect(() => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
      
      // Define the animation sequence with specific timing - UPDATED ORDER
      const sequence: AnimationSequenceItem[] = [
        { element: "connect", delay: 0 },
        { element: "line", delay: 500 },
        { element: "interface", delay: 1000 },
        { element: "soul", delay: 1500 },
        { element: "wave", delay: 2000 },
        // Heart now appears after a delay to match with wave frame 21 (approximately halfway through the wave sequence)
        { element: "heart", delay: 2500 } // Adjusted to appear with Wave_21 (middle of sequence)
      ];
      
      // Show elements in sequence
      sequence.forEach(item => {
        setTimeout(() => {
          setVisibleElements(prev => [...prev, item.element]);
          console.log(`Adding element: ${item.element}`);
        }, item.delay);
      });
    }
  }, [animationPlayed, prefersReducedMotion]);

  return {
    visibleElements,
    isElementVisible: (element: AnimationElement) => visibleElements.includes(element)
  };
};
