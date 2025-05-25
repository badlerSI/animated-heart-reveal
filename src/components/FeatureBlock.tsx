import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  id: string;
  heading: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

const FeatureBlock = ({ id, heading, imgSrc, imgAlt, children }: Props) => (
  <section
    id={id}
    className="mb-32 flex flex-col md:flex-row items-start gap-8"
  >
    <div className="w-full md:w-1/2">
      <img src={imgSrc} alt={imgAlt} className="w-full" />
    </div>

    <div className="w-full md:w-1/2 space-y-4 text-lg leading-relaxed">
      <h2 className="text-2xl font-bold">{heading}</h2>
      {children}
    </div>
  </section>
);

export default FeatureBlock;