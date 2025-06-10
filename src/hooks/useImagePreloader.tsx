
import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrl: string) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      setImageLoaded(true);
      return;
    }

    const preloadImage = (url: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Still resolve on error to prevent hanging
        img.src = url;
      });
    };

    const loadImage = async () => {
      console.log(`Preloading image: ${imageUrl}`);
      await preloadImage(imageUrl);
      console.log(`Image loaded: ${imageUrl}`);
      setImageLoaded(true);
    };

    loadImage();
  }, [imageUrl]);

  return imageLoaded;
};
