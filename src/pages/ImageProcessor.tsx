import { useState } from 'react';
import { removeDarkBackgroundProtectBlue } from '@/utils/removeBackground';
import { Button } from '@/components/ui/button';

const ImageProcessor = () => {
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processImage = async () => {
    setProcessing(true);
    setError(null);
    
    try {
      const blob = await removeDarkBackgroundProtectBlue(
        '/lovable-uploads/SoulWaveMachine4.png',
        0.2
      );
      
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Processing failed');
    } finally {
      setProcessing(false);
    }
  };

  const downloadImage = () => {
    if (resultUrl) {
      const a = document.createElement('a');
      a.href = resultUrl;
      a.download = 'SoulWave_Transparent.png';
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      <h1 className="text-2xl font-bold text-white mb-8">Image Background Remover</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Original */}
        <div>
          <h2 className="text-white mb-4">Original</h2>
          <div className="bg-gray-800 p-4 rounded">
            <img 
              src="/lovable-uploads/SoulWaveMachine4.png" 
              alt="Original"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        
        {/* Processed */}
        <div>
          <h2 className="text-white mb-4">Processed (Transparent)</h2>
          <div 
            className="p-4 rounded"
            style={{
              background: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px'
            }}
          >
            {resultUrl ? (
              <img 
                src={resultUrl} 
                alt="Processed"
                className="max-w-full h-auto"
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-400">
                Click "Process" to remove background
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex gap-4">
        <Button 
          onClick={processImage} 
          disabled={processing}
          className="bg-cyan-500 hover:bg-cyan-600"
        >
          {processing ? 'Processing...' : 'Process Image'}
        </Button>
        
        {resultUrl && (
          <Button 
            onClick={downloadImage}
            variant="outline"
            className="border-cyan-500 text-cyan-500"
          >
            Download Transparent PNG
          </Button>
        )}
      </div>
      
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
    </div>
  );
};

export default ImageProcessor;
