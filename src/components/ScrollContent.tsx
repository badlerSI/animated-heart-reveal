/*──────────────────────────────────────────────────────────────
  ScrollContent.tsx
  • Renders eight complete FeatureBlocks.
  • Attaches `.neon` to every img/svg + random flicker phase.
  • FIRST illustration gets hot-pink halo for verification.
──────────────────────────────────────────────────────────────*/
import { useEffect } from "react";
import FeatureBlock from "./FeatureBlock";

const ScrollContent = () => {
  /* give every illustration the neon class once */
  useEffect(() => {
    document
      .querySelectorAll<HTMLImageElement | SVGElement>("img.neon, svg.neon")
      .forEach((g) => {
        g.classList.add("neon");
        g.style.animationDelay = `-${Math.random() * 3}s`;
      });
  }, []);

  /* HOT-PINK test halo (delete when happy) */
  const imgStyleTest = {
    filter: "drop-shadow(0 0 12px hotpink) drop-shadow(0 0 32px red)",
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      {/* 1 ─ Soul inside the car (pink halo) */}
      <FeatureBlock
        id="soul-inside-car"
        heading="Soul Inside the Car — Not the Cloud"
        imgSrc="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
        imgAlt="Soul Interface illustration"
        imgStyle={imgStyleTest}
      >
        All language processing happens on the automotive-grade GPU that rides
        beside the main ECU—nothing leaves the cabin. Answers in under a second,
        even with zero bars.
      </FeatureBlock>

      {/* 2 ─ No screens, no problem */}
      <FeatureBlock
        id="no-screens-no-problem"
        heading="No Screens? No Problem"
        imgSrc="/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png"
        imgAlt="Dashboard microphone illustration"
      >
        Touchscreens can steal a driver’s eyes for twenty seconds and spoil a
        gorgeous interior. Speak naturally—no glare, no menu mazes.
      </FeatureBlock>

      {/* 3 ─ Forge a soul */}
      <FeatureBlock
        id="forge-soul-of-ride"
        heading="Forge the Soul of Your Ride"
        imgSrc="/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png"
        imgAlt="Soul forging illustration"
      >
        Ask for any persona—accent, attitude, or back-story—and Soul Interface
        creates it on-device in seconds. No presets; your imagination is the
        limit.
      </FeatureBlock>

      {/* 4 ─ Intelligent interface */}
      <FeatureBlock
        id="intelligent-interface"
        heading="An Intelligent Interface"
        imgSrc="/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png"
        imgAlt="Brain icon illustration"
      >
        A 16 GB offline knowledge vault rides everywhere you go. Soul Interface
        decodes warning lights in plain language and suggests fixes instantly.
      </FeatureBlock>

      {/* 5 ─ Rediscover joy */}
      <FeatureBlock
        id="rediscover-joy"
        heading="Rediscover the Joy of the Open Road"
        imgSrc="/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png"
        imgAlt="Road-trip illustration"
      >
        Fire up Karaoke Mode, launch a choose-your-own-adventure, or let Soul
        Interface harmonise—no internet required.
      </FeatureBlock>

      {/* 6 ─ Quote */}
      <FeatureBlock
        id="charlemagne-quote"
        heading={
          <span className="italic">
            “To have another language is to possess a second soul”
            <br />— Charlemagne
          </span>
        }
        imgSrc="/lovable-uploads/bd79ccdb-0112-437e-b109-b3f284009e34.png"
        imgAlt="Speech bubble illustration"
      >
        Translate conversations across sixteen languages instantly, all
        offline—or switch to Tutor Mode for on-the-fly practice.
      </FeatureBlock>

      {/* 7 ─ Robotaxi */}
      <FeatureBlock
        id="robotaxi-cabbie"
        heading="Robotaxi, Meet Your Portable AI Cabbie"
        imgSrc="/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png"
        imgAlt="Robotaxi illustration"
      >
        Step into a Soul-equipped robotaxi and your custom personality loads in
        a blink; step out and it purges itself within seconds.
      </FeatureBlock>

      {/* 8 ─ Keep the soul safe */}
      <FeatureBlock
        id="keep-soul-safe"
        heading="Keep Your Car’s Soul Safe"
        imgSrc="/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png"
        imgAlt="Heart-lock illustration"
      >
        Maintain a secure backup—like a horcrux minus the dark magic—and
        transfer it safely when you get a new ride.
      </FeatureBlock>
    </div>
  );
};

export default ScrollContent;