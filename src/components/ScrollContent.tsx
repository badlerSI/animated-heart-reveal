
import { useEffect, useRef } from "react";
import "./scrollContent.css";

/*──────────────────────────────────────────────────────────────
  ScrollContent
  • Pop-up (translateY 60 px → 0) + slight scale via CSS classes
  • Fade-in on entry; fade-out begins much earlier so it's visible
  • intersectionRatio drives opacity; scroll-up bug is gone
──────────────────────────────────────────────────────────────*/
const ScrollContent = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;          // 0 → 1

        /* toggle classes for slide pop-up */
        if (ratio > 0) {
          el.classList.add("reveal-visible");
          el.classList.remove("reveal-hidden");
        } else {
          el.classList.remove("reveal-visible");
          el.classList.add("reveal-hidden");
        }

        /* opacity & slide distance
           – fully opaque while ≥80 % visible
           – fully transparent once ≤20 % visible           */
        const opacity = Math.max(0, Math.min(1, (ratio - 0.20) / 0.60));
        const translate = 60 * (1 - opacity);           // match CSS 60 px
        el.style.opacity = opacity.toString();
        el.style.transform = `translateY(${translate}px)`;
      });
    };

    /* rootMargin bottom –150 %  ➜ element considered "exiting"
       while it's still well inside viewport, giving fade-out time */
    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px 0px -150% 0px",
      threshold: Array.from({ length: 21 }, (_, i) => i / 20) // 0, .05 … 1
    });

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
      observer.observe(el)
    );

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  /* ---------- helper component ---------- */
  const Section = ({
    title,
    children,
    imageSrc
  }: {
    title: React.ReactNode;
    children: React.ReactNode;
    imageSrc?: string;
  }) => (
    <section className="mb-96">
      <div className="reveal overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4 text-cyan-white tracking-wide reveal-element">
            {title}
          </h2>
          {imageSrc && (
            <div className="flex justify-center mb-6 reveal-element">
              <img 
                src={imageSrc}
                alt="Section illustration"
                className="max-w-128 max-h-128 object-contain opacity-80"
              />
            </div>
          )}
          <div className="text-lg md:text-xl text-cyan-white/90 leading-relaxed reveal-element font-outfit">
            {children}
          </div>
        </div>
      </div>
    </section>
  );

  /* ------------------------  page body ------------------------ */
  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      <Section 
        title="Soul Inside the Car — Not the Cloud"
        imageSrc="/lovable-uploads/ef12abac-5da4-4e46-a727-d9f5c1d42d66.png"
      >
        All language processing happens on the automotive-grade GPU that rides beside the main ECU—nothing leaves the cabin. The patent-pending architecture gives you answers in under a second, works even with zero bars, and erases cloud fees and privacy worries.  
      </Section>

      <Section title="No Screens? No Problem">
        Touchscreens can take a driver's eyes off the road for over twenty
        seconds, and can spoil an otherwise gorgeous interior besides.
        <br />
        <br />
        With Soul Interface you speak naturally to run navigation, music,
        climate and much more; no menu mazes, no glare, no "safety lockouts."
        Your dash stays clean, your focus stays forward.
      </Section>

      <Section title="Forge the Soul of Your Ride">
        Ask for a brand-new persona—any accent, attitude, or back-story—and Soul Interface creates it on-device in seconds. No presets, so your imagination is the only limit. A folksy soccer coach? Sure! Winston Churchil trapped in the body of a kindergartner? Hey, you do you! Swapping on the fly is easy thanks to LoRA overlays smaller than a podcast. Your personas load in a snap.
      </Section>

      <Section title="An Intelligent Interface">
        A 16 GB offline knowledge vault rides everywhere you go. Soul Interface
        can answer trivia, quote Mark Twain, decode warning lights in plain language, and
        suggest fixes before you even decide if you need to pull over. Need fresh traffic or weather?
        Drop in a one-way update from your phone—data flows in, never back out.
      </Section>

      <Section title="Rediscover the Joy of the Open Road">
        Fire up Karaoke Mode with your own saved tracks—vocals drop out and
        Soul Interface harmonizes in real time, or sings any part of a duet.
        <br />
        <br />
        Launch a choose-your-own-adventure for the whole family that plays out
        with multiple character voices, sound-effects, and even grammatically
        sound Elvish. Road trips become rolling entertainment, no internet
        required.
      </Section>

      <Section
        title={
          <span className="font-bold italic">
            "To have another language is to possess a second soul"
            <br />
            <br />-Charlemagne
          </span>
        }
      >
        Conversations among passengers from around the globe flow freely: Soul Interface translates
        speech across sixteen languages almost instantly, all offline.
        <br />
        <br />
        Prefer to learn? Switch to Tutor Mode and practice phrases while the
        assistant corrects pronunciation on the fly—perfect prep for that
        long-awaited trip to Italy.
      </Section>

      <Section title="Robotaxi, Meet Your Portable AI Cabbie">
        Your personal chauffeur lives on your phone. Step into a Soul-equipped
        robotaxi and your custom-crafted persona—with your seat settings,
        conversation preferences, and small-talk history—loads in a blink.
        Step out, and it purges itself from the vehicle within seconds. Fleet
        operators deliver bespoke rides; passengers keep total privacy.
      </Section>

      <Section title="Keep Your Car's Soul Safe">
        You can keep a secure backup hidden away—like a horcrux minus the dark magic—in case anything happens to your car, and securely transfer it when you get a new ride. Updates install on a spare software partition first, so there's always a safe version to fall back on. Preserve your treasured personas for life.
      </Section>
    </div>
  );
};

export default ScrollContent;
