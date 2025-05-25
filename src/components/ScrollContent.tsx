/*──────────────────────────────────────────────────────────────
  ScrollContent.tsx
  • Renders all eight FeatureBlocks in sequence.
  • Adds the `neon` class + random delay to every img/svg.
  • Gives ONLY the first illustration a hot-pink halo so you can
    verify the filter path.  Delete imgStyleTest afterwards.
  • NOTE: All “reveal” scroll-fade code has been removed so text
    is 100 % visible until you decide to re-enable the effect.
──────────────────────────────────────────────────────────────*/
import { useEffect } from "react";
import FeatureBlock from "./FeatureBlock";
import "./scrollContent.css";

const ScrollContent = () => {
  /* attach glow + random phase once on mount */
  useEffect(() => {
    document
      .querySelectorAll<HTMLImageElement | SVGElement>("img.neon, svg.neon")
      .forEach((el) => {
        el.classList.add("neon");
        el.style.animationDelay = `-${Math.random() * 3}s`;
      });
  }, []);

  /* TEST: pink/red halo on first hero */
  const imgStyleTest = {
    filter: "drop-shadow(0 0 12px hotpink) drop-shadow(0 0 32px red)",
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      {/* 1 ─ Soul inside the car (with test halo) */}
      <FeatureBlock
        id="soul-inside-car"
        heading="Soul Inside the Car — Not the Cloud"
        imgSrc="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
        imgAlt="Soul Interface illustration"
        imgStyle={imgStyleTest}      /* ← remove when satisfied */
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
        imgAlt="Car dashboard with microphone illustration"
      >
        Touchscreens can take a driver's eyes off the road for over twenty
        seconds, and can spoil an otherwise gorgeous interior besides.
        <br />
        <br />
        With Soul Interface you speak naturally to run navigation, music,
        climate and much more—no menu mazes, no glare, no “safety lockouts.”
        Your dash stays clean, your focus stays forward.
      </FeatureBlock>

      {/* 3 ─ Forge a soul */}
      <FeatureBlock
        id="forge-soul-of-ride"
        heading="Forge the Soul of Your Ride"
        imgSrc="/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png"
        imgAlt="Soul forging illustration"
      >
        Ask for a brand-new persona—any accent, attitude, or back-story—and Soul
        Interface creates it on-device in seconds. No presets, so your
        imagination is the only limit.
      </FeatureBlock>

      {/* 4 ─ Intelligent interface */}
      <FeatureBlock
        id="intelligent-interface"
        heading="An Intelligent Interface"
        imgSrc="/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png"
        imgAlt="Brain illustration"
      >
        A 16 GB offline knowledge vault rides everywhere you go. Soul Interface
        can answer trivia, quote Mark Twain, decode warning lights in plain
        language, and suggest fixes before you even decide if you need to pull
        over.
      </FeatureBlock>

      {/* 5 ─ Rediscover joy */}
      <FeatureBlock
        id="rediscover-joy"
        heading="Rediscover the Joy of the Open Road"
        imgSrc="/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png"
        imgAlt="Road trip illustration"
      >
        Fire up Karaoke Mode with your own saved tracks—vocals drop out and Soul
        Interface harmonizes in real time, or sings any part of a duet.
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
        imgAlt="Soul speak illustration"
      >
        Soul Interface translates speech across sixteen languages almost
        instantly, all offline.
      </FeatureBlock>

      {/* 7 ─ Robotaxi */}
      <FeatureBlock
        id="robotaxi-cabbie"
        heading="Robotaxi, Meet Your Portable AI Cabbie"
        imgSrc="/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png"
        imgAlt="Robotaxi illustration"
      >
        Your personal chauffeur lives on your phone. Step into a Soul-equipped
        robotaxi and your custom-crafted persona—with your seat settings,
        conversation preferences, and small-talk history—loads in a blink.
      </FeatureBlock>

      {/* 8 ─ Keep the soul safe */}
      <FeatureBlock
        id="keep-soul-safe"
        heading="Keep Your Car’s Soul Safe"
        imgSrc="/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png"
        imgAlt="Heart lock security illustration"
      >
        Keep a secure backup hidden away—like a horcrux minus the dark magic—in
        case anything happens to your car, and transfer it safely when you get a
        new ride.
      </FeatureBlock>
    </div>
  );
};

export default ScrollContent;