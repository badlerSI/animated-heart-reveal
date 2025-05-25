
import React, { ReactNode } from 'react';

interface FeatureBlockProps {
  id?: string;           // anchor id for navbar links
  heading: string | ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  children: ReactNode;  // body copy
}

const FeatureBlock = ({ id, heading, imgSrc, imgAlt, children }: FeatureBlockProps) => (
  <section
    id={id}
    className="reveal overflow-hidden mb-96"
  >
    <div className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6 py-16
                   flex flex-col md:flex-row items-start md:items-center gap-5">
      {/* LEFT COLUMN — heading + image */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-2">
        <h2 className="text-2xl md:text-3xl font-sans font-semibold text-cyan-white tracking-wide">
          {heading}
        </h2>

        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt || "Section illustration"}
            className="w-full max-w-64 max-h-64 object-contain opacity-80"
            loading="lazy"
          />
        )}
      </div>

      {/* RIGHT COLUMN — body copy */}
      <div className="md:w-1/2 text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
        {children}
      </div>
    </div>
  </section>
);

export default FeatureBlock;
