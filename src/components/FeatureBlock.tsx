
import React, { ReactNode } from 'react';

interface FeatureBlockProps {
  id?: string;           // anchor id for navbar links
  heading: string | ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  children: ReactNode;  // body copy
}

const FeatureBlock = ({ id, heading, imgSrc, imgAlt, children }: FeatureBlockProps) => {
  // Define which images should be larger
  const largerImages = [
    '/lovable-uploads/dash.png',
    '/lovable-uploads/soulforge.png', 
    '/lovable-uploads/RoadTrip.png',
    '/lovable-uploads/SoulSpeak.png',
    '/lovable-uploads/RoboTaxi.png'
  ];
  
  // Define which images should have neon glow
  const glowImages = [
    '/lovable-uploads/be3b360f-fe9c-45f7-aa45-4caff7512c78.png', // wave.png
    '/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png', // nocloud.png
    '/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png', // dash.png
    '/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png', // soulforge.png
    '/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png', // brain.png
    '/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png', // RoadTrip.png
    '/lovable-uploads/bd79ccdb-0112-437e-b109-b3f284009e34.png', // SoulSpeak.png
    '/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png', // RoboTaxi.png
    '/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png', // LockHeart.png
    '/lovable-uploads/54485ca6-5ac5-4c73-b7bd-eace775bc1ee.png', // tech page diagram
    '/lovable-uploads/28631674-4b61-4d51-8fea-ef232cea859d.png'  // partner page car
  ];
  
  const shouldBeLarger = imgSrc && largerImages.includes(imgSrc);
  const shouldHaveGlow = imgSrc && glowImages.includes(imgSrc);
  
  return (
    <section
      id={id}
      className="reveal overflow-hidden mb-96"
    >
      <div className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6 py-16">
        {/* Mobile layout - single column */}
        <div className="lg:hidden flex flex-col items-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-cyan-white tracking-wide text-center">
            {heading}
          </h2>
          
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt || "Section illustration"}
              className={`w-full object-contain opacity-80 ${
                shouldBeLarger ? 'max-w-96 max-h-96' : 'max-w-64 max-h-64'
              } ${shouldHaveGlow ? 'neon-glow' : ''}`}
              loading="lazy"
            />
          )}
          
          <div className="w-full text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
            {children}
          </div>
        </div>

        {/* Desktop layout - two columns using CSS Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* LEFT COLUMN — heading + image */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold text-cyan-white tracking-wide">
              {heading}
            </h2>

            {imgSrc && (
              <img
                src={imgSrc}
                alt={imgAlt || "Section illustration"}
                className={`w-full object-contain opacity-80 ${
                  shouldBeLarger ? 'max-w-96 max-h-96' : 'max-w-64 max-h-64'
                } ${shouldHaveGlow ? 'neon-glow' : ''}`}
                loading="lazy"
              />
            )}
          </div>

          {/* RIGHT COLUMN — body copy */}
          <div className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
