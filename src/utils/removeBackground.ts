/**
 * Removes dark background while protecting blue lines and white text
 * Based on brightness + saturation masking algorithm
 */
export async function removeDarkBackgroundProtectBlue(
  imagePath: string,
  limit: number = 0.2
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Calculate brightness (luminance)
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Calculate saturation
        const maxRGB = Math.max(r, g, b);
        const minRGB = Math.min(r, g, b);
        const saturation = maxRGB > 0 ? (maxRGB - minRGB) / maxRGB : 0;
        
        // Alpha = max of brightness or saturation (protects white AND blue)
        let alpha = Math.max(brightness, saturation);
        
        // Clean up: anything below limit becomes fully transparent
        if (alpha < limit) {
          alpha = 0;
        } else {
          // Smooth transition for remaining pixels
          alpha = (alpha - limit) / (1 - limit);
        }
        
        // Apply alpha
        data[i + 3] = Math.round(alpha * 255);
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create blob'));
        }
      }, 'image/png');
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imagePath;
  });
}
