import FeatureBlock from "./FeatureBlock";

const ScrollContent = () => (
  <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
    <div className="h-64" />

    <FeatureBlock
      id="test-card"
      heading="IF YOU CAN READ THIS, TEXT WORKS"
      imgSrc="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
      imgAlt="Test illustration"
    >
      If you can also see the red-outlined image above, both the text and the
      image pipelines are fine. Any remaining invisibility must come from later
      CSS overrides, not from React or Tailwind.
    </FeatureBlock>
  </div>
);

export default ScrollContent;