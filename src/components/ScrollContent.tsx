
import { useEffect, useRef } from "react";
import FeatureBlock from "./FeatureBlock";
import HeartNavigation from "./HeartNavigation";
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
        if (isBecomingVisible || ratio >= 0.70) {
          // Fade-in: starts at 1% visibility, completes at 40% (sooner than before)
          opacity = Math.max(0, Math.min(1, (ratio - 0.01) / 0.39));
        } else {
          // Fade-out: starts at 70% visibility, completes at 10%
          opacity = Math.max(0, Math.min(1, (ratio - 0.10) / 0.60));
        }
        
        const translate = 60 * (1 - opacity);           // match CSS 60 px
        el.style.opacity = opacity.toString();
        el.style.transform = `translateY(${translate}px)`;
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'; // Faster transitions
        
        // Update element state
        elementStates.current.set(entry.target, { lastVisibleRatio: ratio });
      });
    };

    /* rootMargin bottom –50% ➜ element considered "exiting"
       while still giving fade-out time but ensuring visibility */
    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px 0px -50% 0px",
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
      <div className="h-64" />

      <FeatureBlock 
        id="soul-inside-car"
        heading="Soul Inside the Car — Not the Cloud"
        imgSrc="/lovable-uploads/d67c9fd9-4ef2-441c-93c7-3b0ed420d47f.png"
        imgAlt="Soul Interface illustration"
      >
        All language processing happens on the automotive-grade GPU that rides beside the main ECU—nothing leaves the cabin. The patent-pending architecture gives you answers in under a second, works even with zero bars, and erases cloud fees and privacy worries.  
      </FeatureBlock>

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
        climate and much more; no menu mazes, no glare, no "safety lockouts."
        Your dash stays clean, your focus stays forward.
      </FeatureBlock>

      <FeatureBlock 
        id="forge-soul-of-ride"
        heading="Forge the Soul of Your Ride"
        imgSrc="/lovable-uploads/714602df-a4da-4ca2-94aa-d221088d53f3.png"
        imgAlt="Soul forging illustration"
      >
        Ask for a brand-new persona—any accent, attitude, or back-story—and Soul Interface creates it on-device in seconds. No presets, so your imagination is the only limit. A folksy soccer coach? Sure! Winston Churchil trapped in the body of a kindergartner? Hey, you do you! Swapping on the fly is easy thanks to LoRA overlays smaller than a podcast. Your personas load in a snap.
      </FeatureBlock>

      <FeatureBlock 
        id="intelligent-interface"
        heading="An Intelligent Interface"
        imgSrc="/lovable-uploads/c609b325-c513-4588-8286-5c1f49e84b86.png"
        imgAlt="Brain illustration"
      >
        A 16 GB offline knowledge vault rides everywhere you go. Soul Interface
        can answer trivia, quote Mark Twain, decode warning lights in plain language, and
        suggest fixes before you even decide if you need to pull over. Need fresh traffic or weather?
        Drop in a one-way update from your phone—data flows in, never back out.
      </FeatureBlock>

      <FeatureBlock 
        id="rediscover-joy"
        heading="Rediscover the Joy of the Open Road"
        imgSrc="/lovable-uploads/c96b8fff-dfa3-4bcf-a8a4-03a81b0410be.png"
        imgAlt="Road trip illustration"
      >
        Fire up Karaoke Mode with your own saved tracks—vocals drop out and
        Soul Interface harmonizes in real time, or sings any part of a duet.
        <br />
        <br />
        Launch a choose-your-own-adventure for the whole family that plays out
        with multiple character voices, sound-effects, and even grammatically
        sound Elvish. Road trips become rolling entertainment, no internet
        required.
      </FeatureBlock>

      <FeatureBlock 
        id="charlemagne-quote"
        heading={<span className="italic">"To have another language is to possess a second soul"         <br /> —Charlemagne</span>}
        imgSrc="/lovable-uploads/bd79ccdb-0112-437e-b109-b3f284009e34.png"
        imgAlt="Soul speak illustration"
      >
        Conversations among passengers from around the globe flow freely: Soul Interface translates
        speech across sixteen languages almost instantly, all offline.
        <br />
        <br />
        Prefer to learn? Switch to Tutor Mode and practice phrases while the
        assistant corrects pronunciation on the fly—perfect prep for that
        long-awaited trip to Italy.
      </FeatureBlock>

      <FeatureBlock 
        id="robotaxi-cabbie"
        heading="Robotaxi, Meet Your Portable AI Cabbie"
        imgSrc="/lovable-uploads/c8fa6aa6-32f8-4f39-a115-d523a9f46288.png"
        imgAlt="Robotaxi illustration"
      >
        Your personal chauffeur lives on your phone. Step into a Soul Interface-equipped
        robotaxi and your custom-crafted persona—with your seat settings,
        conversation preferences, and small-talk history—loads in a blink.
        Step out, and it purges itself from the vehicle within seconds. Fleet
        operators deliver bespoke rides; passengers keep total privacy.
      </FeatureBlock>

      <FeatureBlock 
        id="keep-soul-safe"
        heading="Keep Your Car's Soul Safe"
        imgSrc="/lovable-uploads/3ac401c6-c7e0-4317-935c-d3a24965b910.png"
        imgAlt="Heart lock security illustration"
      >
        You can keep a secure backup hidden away—like a horcrux minus the dark magic—in case anything happens to your car, and securely transfer it when you get a new ride. Updates install on a spare software partition first, so there's always a safe version to fall back on. Preserve your treasured personas for life.
      </FeatureBlock>

      {/* Heart Navigation */}
      <div className="mt-32">
        <HeartNavigation />
      </div>
    </div>
  );
};

export default ScrollContent;
