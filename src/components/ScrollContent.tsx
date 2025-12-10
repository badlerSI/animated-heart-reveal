
import { useEffect, useRef } from "react";
import HeartNavigation from "./HeartNavigation";
import HeroSection from "./home/HeroSection";
import HowItWorksSection from "./home/HowItWorksSection";
import ReasoningSection from "./home/ReasoningSection";
import FAQSection from "./home/FAQSection";
import ClosingCTASection from "./home/ClosingCTASection";
import Footer from "./home/Footer";
import "./scrollContent.css";

/*──────────────────────────────────────────────────────────────
  ScrollContent
  • Pop-up (translateY 60 px → 0) + slight scale via CSS classes
  • Fade-in on entry; fade-out begins much earlier so it's visible
  • intersectionRatio drives opacity; scroll-up bug is gone
──────────────────────────────────────────────────────────────*/
const ScrollContent = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementStates = useRef<Map<Element, { lastVisibleRatio: number }>>(new Map());

  useEffect(() => {
    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;          // 0 → 1
        
        // Track element state to determine if fading in or out
        const currentState = elementStates.current.get(entry.target) || { lastVisibleRatio: 0 };
        const isBecomingVisible = ratio > currentState.lastVisibleRatio;
        
        /* toggle classes for slide pop-up */
        if (ratio > 0) {
          el.classList.add("reveal-visible");
          el.classList.remove("reveal-hidden");
        } else {
          el.classList.remove("reveal-visible");
          el.classList.add("reveal-hidden");
        }

        /* separate opacity calculations for fade-in vs fade-out */
        let opacity;
        const isExtended = el.classList.contains("reveal-extended");
        
        if (isBecomingVisible || ratio >= 0.35) {
          // Fade-in: starts at 0% visibility, completes at 30%
          opacity = Math.min(1, ratio / 0.30);
        } else if (isExtended) {
          // Extended fade-out: more gradual, starts at 26%, gone at 1%
          opacity = Math.max(0, Math.min(1, (ratio - 0.01) / 0.25));
        } else {
          // Normal fade-out: starts at 32%, gone at 2%
          opacity = Math.max(0, Math.min(1, (ratio - 0.02) / 0.30));
        }
        
        const translate = 60 * (1 - opacity);           // match CSS 60 px
        el.style.opacity = opacity.toString();
        el.style.transform = `translateY(${translate}px)`;
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'; // Faster transitions
        
        // Update element state
        elementStates.current.set(entry.target, { lastVisibleRatio: ratio });
      });
    };

    /* rootMargin bottom –20% ➜ elements detected earlier when entering */
    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: Array.from({ length: 21 }, (_, i) => i / 20) // 0, .05 … 1
    });

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
      observer.observe(el)
    );

    observerRef.current = observer;
    return () => {
      observer.disconnect();
      elementStates.current.clear();
    };
  }, []);

  /* ------------------------  page body ------------------------ */
  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-32" />

      {/* New Homepage Sections */}
      <HeroSection />
      <HowItWorksSection />
      <ReasoningSection />
      <FAQSection />
      <ClosingCTASection />

      {/* Heart Navigation */}
      <div className="mt-16">
        <HeartNavigation />
      </div>

      <Footer />
    </div>
  );
};

export default ScrollContent;
