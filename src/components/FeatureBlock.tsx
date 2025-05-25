/*──────────────────────────────────────────────────────────────
  FeatureBlock.tsx
  • Clean, self-contained hero card.
  • Uses plain Tailwind text classes (no `prose`) so colour
    inheritance never hides your copy.
──────────────────────────────────────────────────────────────*/
import React, { PropsWithChildren, CSSProperties } from "react";

interface Props extends PropsWithChildren {
  id: string;
  heading: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  imgStyle?: CSSProperties;   // hot-pink test halo
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
    {/* illustration */}
    <div className="w-full md:w-1/2">
      <img src={imgSrc} alt={imgAlt} className="w-full neon" style={imgStyle} />
    </div>

    {/* copy block */}
    <div className="w-full md:w-1/2 space-y-4 text-lg leading-relaxed text-foreground">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      {children}
    </div>
  </section>
);

export default FeatureBlock;