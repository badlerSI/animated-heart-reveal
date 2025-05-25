/*──────────────────────────────────────────────────────────────
  ScrollContent.tsx
  • Renders eight FeatureBlocks.
  • Adds `.neon` + random phase to every <img>/<svg>.
  • First hero gets a glaring pink/red halo for verification.
    Delete `imgStyleTest` after you confirm the effect.
──────────────────────────────────────────────────────────────*/
import { useEffect } from "react";
import FeatureBlock from "./FeatureBlock";
import "./scrollContent.css";

const ScrollContent = () => {
  /* attach glow once on mount */
  useEffect(() => {
    document
      .querySelectorAll<HTMLImageElement | SVGElement>("img.neon, svg.neon")
      .forEach((g) => {
        g.classList.add("neon");
        g.style.animationDelay = `-${Math.random() * 3}s`;
      });
  }, []);

  /* hot-pink halo (only first hero) */
  const imgStyleTest = {
    filter: "drop-shadow(0 0 12px hotpink) drop-shadow(0 0 32px red)",
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      {/* 1 ─ Soul inside the car */}
      <FeatureBlock
        id="soul-inside-car"
        heading="Soul Inside the Car — Not the Cloud"
        imgSrc="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
        imgAlt="Soul Interface illustration"
        imgStyle={imgStyleTest}             /* ← delete when happy */
      >
        All language processing happens on the automotive-grade GPU that rides
        beside the main ECU—nothing leaves the cabin. The patent-pending
        architecture gives you answers in under a second, works even with zero
        bars, and erases cloud fees and privacy worries.
      </FeatureBlock>

      {/* 2 ─ No screens, no problem */}
      <FeatureBlock
        id="no-screens-no-problem"
        heading="No Screens? No Problem"
        imgSrc="/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png"
        imgAlt="Dashboard microphone illustration"
      >
        Touch-screens can steal a driver’s eyes for over twenty seconds and ruin
        an otherwise gorgeous interior. With Soul Interface you just speak—no
        menu mazes, no glare, no “safety lockouts.”
      </FeatureBlock>

      {/* 3 ─ Forge a soul */}
      <FeatureBlock
        id="forge-soul-of-ride"
        heading="Forge the Soul of Your Ride"
        imgSrc="/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png"
        imgAlt="Soul forging illustration"
      >
        Ask for a persona—any accent, attitude, or back-story—and Soul Interface
        creates it on-device in seconds. No presets, so your imagination is the
        only limit.
      </FeatureBlock>

      {/* 4 ─ Intelligent interface */}
      <FeatureBlock
        id="intelligent-interface"
        heading="An Intelligent Interface"
        imgSrc="/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png"
        imgAlt="Brain icon illustration"
      >
        A 16 GB offline knowledge vault rides everywhere you go. Soul Interface
        decodes warning lights in plain language and suggests fixes before you
        even decide if you need to pull over.
      </FeatureBlock>

      {/* 5 ─ Rediscover joy */}
      <FeatureBlock
        id="rediscover-joy"
        heading="Rediscover the Joy of the Open Road"
        imgSrc="/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png"
        imgAlt="Road-trip illustration"
      >
        Fire up Karaoke Mode, launch a choose-your-own-adventure in flawless
        Elvish, or let Soul Interface harmonise—no internet required.
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
        Soul Interface translates conversations across sixteen languages
        instantly, all offline, or switches to Tutor Mode so you can practise on
        the fly.
      </FeatureBlock>

      {/* 7 ─ Robotaxi */}
      <FeatureBlock
        id="robotaxi-cabbie"
        heading="Robotaxi, Meet Your Portable AI Cabbie"
        imgSrc="/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png"
        imgAlt="Robotaxi illustration"
      >
        Step into a Soul-equipped robotaxi and your custom personality—with seat
        settings and conversation history—loads in a blink; step out and it
        purges itself within seconds.
      </FeatureBlock>

      {/* 8 ─ Keep the soul safe */}
      <FeatureBlock
        id="keep-soul-safe"
        heading="Keep Your Car’s Soul Safe"
        imgSrc="/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png"
        imgAlt="Heart-lock illustration"
      >
        Maintain a secure backup—like a horcrux minus the dark magic—and
        transfer it safely when you get a new ride. Updates install on a spare
        partition first, so there’s always a safe version to fall back on.
      </FeatureBlock>
    </div>
  );
};

export default ScrollContent;