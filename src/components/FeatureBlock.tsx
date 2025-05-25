/*──────────────────────────────────────────────────────────────
  FeatureBlock.tsx
  • Generic card that shows a heading, body text, and a hero image.
  • Props:
      – id          (anchor / key)
      – heading     (string or JSX)
      – imgSrc      (URL)
      – imgAlt      (alt text)
      – className   (extra classes for wrapper, e.g. "reveal")
      – imgStyle    (inline styles for <img>, e.g. test halo)
──────────────────────────────────────────────────────────────*/
import React, { PropsWithChildren, CSSProperties } from "react";

interface Props extends PropsWithChildren {
  id: string;
  heading: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  className?: string;
  imgStyle?: CSSProperties;
}

const FeatureBlock = ({
  id,
  heading,
  imgSrc,
  imgAlt,
  className = "",
  imgStyle = {},
  children,
}: Props) => (
  <section
    id={id}
    className={`mb-32 flex flex-col md:flex-row items-center gap-8 ${className}`}
  >
    {/* hero illustration */}
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-full md:w-1/2 neon"
      style={imgStyle}
    />

    {/* copy block */}
    <div className="w-full md:w-1/2 prose prose-lg text-foreground">
      <h2>{heading}</h2>
      {children}
    </div>
  </section>
);

export default FeatureBlock;