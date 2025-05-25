/*──────────────────────────────────────────────────────────────
  ScrollContent.tsx – FULL COMPONENT
  • Pop-up / fade-in on scroll
  • Adds .neon class automatically
  • Injects an OBVIOUS hot-pink double halo on FIRST IMAGE ONLY
    so you can verify the filter applies. Remove imgStyleTest
    after you see the glow.
──────────────────────────────────────────────────────────────*/
import { useEffect, useRef } from "react";
import FeatureBlock from "./FeatureBlock";
import "./scrollContent.css";

const ScrollContent = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    /* ---------- IntersectionObserver for slide / fade ---------- */
    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const r = entry.intersectionRatio;
        if (r > 0) {
          el.classList.add("reveal-visible");
          el.classList.remove("reveal-hidden");
        } else {
          el.classList.remove("reveal-visible");
          el.classList.add("reveal-hidden");
        }
        const op = Math.max(0, Math.min(1, (r - 0.2) / 0.6));
        el.style.opacity = op.toString();
        el.style.transform = `translateY(${60 * (1 - op)}px)`;
      });
    };

    const obs = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px 0px -150% 0px",
      threshold: Array.from({ length: 21 }, (_, i) => i / 20)
    });

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
      obs.observe(el)
    );
    observerRef.current = obs;

    /* ---------- Neon class + random delay on <img> / <svg> ----- */
    document
      .querySelectorAll<HTMLImageElement | SVGElement>(".reveal img, .reveal svg")
      .forEach((g) => {
        g.classList.add("neon");
        g.style.animationDelay = `-${Math.random() * 3}s`;
      });

    return () => obs.disconnect();
  }, []);

  /* ----------- HOT-PINK TEST FILTER (first card only) ---------- */
  const imgStyleTest = {
    filter: "drop-shadow(0 0 12px hotpink) drop-shadow(0 0 32px red)"
  };

  /* ------------------------  page body ------------------------ */
  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      {/* FIRST CARD – should show pink/red halo immediately */}
      <FeatureBlock
        id="soul-inside-car"
        heading="Soul Inside the Car — Not the Cloud"
        imgSrc="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
        imgAlt="Soul Interface illustration"
        className="reveal"
        imgStyle={imgStyleTest}
      >
        All language processing happens on the automotive-grade GPU that rides
        beside the main ECU…
      </FeatureBlock>

      {/* Remaining cards — no test halo, but neon class is attached */}
      <FeatureBlock
        id="no-screens-no-problem"
        heading="No Screens? No Problem"
        imgSrc="/lovable-uploads/c13f6db9-d014-4b65-a508-146774c40386.png"
        imgAlt="Car dashboard with microphone illustration"
        className="reveal"
      >
        Touchscreens can take a driver's eyes off the road…
      </FeatureBlock>

      {/* … repeat for other FeatureBlock instances … */}
    </div>
  );
};

export default ScrollContent;