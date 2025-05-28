
import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
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

    const loadAllImages = async () => {
      console.log(`Starting to preload ${totalImages} images...`);
      
      await Promise.all(imageUrls.map(preloadImage));
      
      console.log(`All ${totalImages} images preloaded successfully`);
      setImagesLoaded(true);
    };

    loadAllImages();
  }, [imageUrls]);

  return imagesLoaded;
};
