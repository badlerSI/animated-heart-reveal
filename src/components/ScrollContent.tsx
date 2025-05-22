
import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import "./scrollContent.css";

const ScrollContent = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Set up the Intersection Observer for scroll animations
    const options = {
      root: null, // viewport
      rootMargin: "0px 0px -20% 0px", // Trigger when element is only 20% above bottom of viewport
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // Multiple thresholds for smoother transitions
    };
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Calculate how far the element has scrolled past the viewport
        const boundingRect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;
        
        if (entry.isIntersecting) {
          // Element is entering the viewport
          entry.target.classList.add("reveal-visible");
          entry.target.classList.remove("reveal-hidden");
          
          // Calculate fade based on position
          if (boundingRect.top < windowHeight * 0.5) {
            const opacity = Math.max(0, (boundingRect.bottom / windowHeight) - 0.1);
            (entry.target as HTMLElement).style.opacity = opacity.toString();
          } else {
            // Element is coming into view from below - ensure full visibility
            (entry.target as HTMLElement).style.opacity = "";
          }
        } else {
          // Element is completely out of view
          if (boundingRect.top <= 0) {
            // Ensure it's completely hidden when above viewport
            entry.target.classList.remove("reveal-visible");
            entry.target.classList.add("reveal-hidden");
            (entry.target as HTMLElement).style.opacity = "0";
          } else if (boundingRect.top > windowHeight) {
            // Element is below the viewport - reset for fade-in
            entry.target.classList.remove("reveal-visible");
            // Remove inline opacity to let CSS handle it
            (entry.target as HTMLElement).style.removeProperty("opacity");
          }
        }
      });
    }, options);
    
    // Observe all elements with the reveal class
    document.querySelectorAll(".reveal").forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      {/* Add extra space before the first section */}
      <div className="h-64"></div>
      
      <section className="mb-96">
        <TextCard title="Soul Inside the Car — Not the Cloud">
          Open the door and your assistant is already awake. All language processing happens on the automotive-grade GPU that rides beside the main ECU—nothing leaves the cabin. The patent-pending architecture gives you answers in under a second, works even with zero bars, and erases cloud fees and privacy worries.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title="No Screens? No Problem">
          Touchscreens can take a driver's eyes off the road for over twenty seconds, and can spoil otherwise gorgeous interiors besides.
          <br /><br />
          With Soul Interface you speak naturally to run navigation, music, climate and much more; no menu mazes, no glare, no "safety lockouts." Your dash stays clean, your focus stays forward.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title="Forge the Soul of Your Ride">
          Ask for a brand-new persona—any accent, attitude, or back-story—and Soul Interface forges it on-device in about 30 seconds. Once saved, your library of characters loads instantaneously whenever you call for them. You're not picking from a short list; you're creating anything you can imagine. Popeye the Sailor Dog? Sure! Winston Churchil trapped in the body of kindergartner? Hey, you do you! Swapping on the fly is easy thanks to LoRA overlays smaller than a podcast.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title="An Intelligent Interface">
          A 16 GB offline knowledge vault rides everywhere you go. Soul Interface can quote history, decode warning lights in plain language, and suggest fixes before you open the hood. Need fresh traffic or weather? Drop in a one-way update from your phone—data flows in, never back out.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title="Rediscover the Joy of the Open Road">
          Fire up Karaoke Mode with your own saved tracks—vocals drop out and Soul Interface harmonizes in real time, or sing any part of a duet.
          <br /><br />
          Launch a choose-your-own-adventure for the whole family that plays out with multiple character voices, sound-effects, and even grammatically sound Elvish. Road trips become rolling entertainment, no internet required.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title={<span className="font-bold italic">"To have another language is to possess a second soul" <br /><br /> -Charlemagne</span>}>
          Conversations among passengers flow freely: Soul Interface translates speech across sixteen languages almost instantly, all offline.
          <br /><br />
          Prefer to learn? Switch to Tutor Mode and practice phrases while the assistant corrects pronunciation on the fly—perfect prep for that long-awaited trip to Italy.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title="Robotaxi, Meet Your Portable AI Cabbie">
          Your personal chauffeur lives on your phone. Step into a Soul-equipped robotaxi and your custom crafted persona—with your seat settings, conversation preferences, and small-talk history—loads in a blink. Step out, and it purges itself from the vehicle within seconds. Fleet operators deliver bespoke rides; passengers keep total privacy.
        </TextCard>
      </section>
      
      <section className="mb-96">
        <TextCard title="Keep Your Car's Soul Safe">
          You can keep a secure backup hidden away—like a horcrux minus the dark magic—in case anything happens to your car, or you get a new one. Updates install on a spare software partition first, so there's always a safe version to fall back on. Preserve your treasured personas for life.
        </TextCard>
      </section>
    </div>
  );
};

// Card component for text sections
const TextCard = ({ title, children, className = "" }) => {
  return (
    <div className={`reveal overflow-hidden ${className}`}>
      <div className="p-6 md:p-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-4 text-cyan-white tracking-wide reveal-element">
            {title}
          </h2>
        )}
        <p className="text-lg md:text-xl text-cyan-white/90 leading-relaxed reveal-element">
          {children}
        </p>
      </div>
    </div>
  );
};

export default ScrollContent;
