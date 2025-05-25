/*──────────────────────────────────────────────────────────────
  FeatureBlock.tsx
  • Presentational card: image + text
  • Forwards className to outer wrapper, imgStyle to <img>
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
  children
}: Props) => (
  <section
    id={id}
    className={`mb-32 flex flex-col md:flex-row items-center gap-8 ${className}`}
  >
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-full md:w-1/2 neon"
      style={imgStyle}
    />

    <div className="w-full md:w-1/2 prose prose-lg text-foreground">
      <h2>{heading}</h2>
      {children}
    </div>
  </section>
);

export default FeatureBlock;