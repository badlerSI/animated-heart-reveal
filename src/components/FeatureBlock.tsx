/*──────────────────────────────────────────────────────────────
  FeatureBlock.tsx
  • Clean card: hero illustration + heading + copy.
  • NO hidden prose classes; colour inherits from index.css.
──────────────────────────────────────────────────────────────*/
import React, { PropsWithChildren, CSSProperties } from "react";

interface Props extends PropsWithChildren {
  id: string;
  heading: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  imgStyle?: CSSProperties;   /* optional test halo */
}

const FeatureBlock = ({
  id,
  heading,
  imgSrc,
  imgAlt,
  imgStyle = {},
  children,
}: Props) => (
  <section
    id={id}
    className="mb-32 flex flex-col md:flex-row items-start gap-8"
  >
    <div className="w-full md:w-1/2">
      <img src={imgSrc} alt={imgAlt} className="w-full neon" style={imgStyle} />
    </div>

    <div className="w-full md:w-1/2 space-y-4 text-lg leading-relaxed">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      {children}
    </div>
  </section>
);

export default FeatureBlock;