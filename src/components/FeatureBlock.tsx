/*  src/components/FeatureBlock.tsx  */
import React, { ReactNode } from "react";

interface FeatureBlockProps {
  id?: string;               // anchor id for navbar links
  heading: string | ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  children: ReactNode;       // body copy
}

/* ---------  helper arrays (unchanged)  -------------------- */
const largerImages = [
  "/lovable-uploads/dash.png",
  "/lovable-uploads/soulforge.png",
  "/lovable-uploads/RoadTrip.png",
  "/lovable-uploads/SoulSpeak.png",
  "/lovable-uploads/RoboTaxi.png",
];

const glowImages = [
  "/lovable-uploads/be3b360f-fe9c-45f7-aa45-4caff7512c78.png",
  "/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png",
  "/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png",
  "/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png",
  "/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png",
  "/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png",
  "/lovable-uploads/bd79ccdb-0112-437e-b109-b3f284009e34.png",
  "/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png",
  "/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png",
  "/lovable-uploads/54485ca6-5ac5-4c73-b7bd-eace775bc1ee.png",
  "/lovable-uploads/28631674-4b61-4d51-8fea-ef232cea859d.png",
];

export default function FeatureBlock({
  id,
  heading,
  imgSrc,
  imgAlt,
  children,
}: FeatureBlockProps) {
  const shouldBeLarger = imgSrc && largerImages.includes(imgSrc);
  const shouldHaveGlow = imgSrc && glowImages.includes(imgSrc);

  return (
    <section id={id} className="reveal overflow-hidden mb-96">
      <div
        className="
          max-w-6xl mx-auto px-2 md:px-4 lg:px-6 py-16
          flex flex-col md:flex-row md:flex-nowrap items-start gap-8
        "
      >
        {/* LEFT column — heading + image */}
        <div className="md:w-1/2 min-w-0 flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-cyan-white tracking-wide">
            {heading}
          </h2>

          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt || "Section illustration"}
              className={`object-contain opacity-80 w-full ${
                shouldBeLarger ? "max-w-96 max-h-96" : "max-w-64 max-h-64"
              } ${shouldHaveGlow ? "neon-glow" : ""}`}
              loading="lazy"
            />
          )}
        </div>

        {/* RIGHT column — body copy */}
        <div className="md:w-1/2 min-w-0 text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          {children}
        </div>
      </div>
    </section>
  );
}