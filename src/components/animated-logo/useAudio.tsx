
import { useRef, useCallback } from 'react';

export const useAudio = (audioPath: string, volume: number = 0.3) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(err => console.log("Audio play error:", err));
    }
  }, [volume]);

  return {
    audioRef,
    play
  };
};
