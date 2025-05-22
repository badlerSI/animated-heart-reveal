import { useEffect, useRef } from "react";
import "./scrollContent.css";

/*  ScrollContent
    – cards fade & slide in while visible, fade out earlier (~25 % before exit)
------------------------------------------------------------------------ */
const ScrollContent = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        let r = entry.intersectionRatio;          // 0 → 1

        /* Bias: start fade-out when r < 1, reach 0 at r ≈ 0.10 */
        const opacity = Math.max(0, Math.min(1, (r - 0.10) / 0.90));
        const translate = 24 * (1 - opacity);     // match old 24 px slide

        el.style.setProperty("--revealOpacity", opacity.toString());
        el.style.setProperty("--revealTranslate", translate.toString());
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px 0px -25% 0px",         // fade-out begins sooner
      threshold: Array.from({ length: 21 }, (_, i) => i / 20)  // 0, .05 … 1
    });

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
      observerRef.current!.observe(el)
    );

    return () => observerRef.current?.disconnect();
  }, []);

  /* helper component */
  const Section = ({
    title,
    children
  }: {
    title: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <section className="mb-96">
      <div className="reveal">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-4 text-cyan-white tracking-wide">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-cyan-white/90 leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </section>
  );

  /*  page body  */
  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      <Section title="Soul Inside the Car — Not the Cloud">
        Open the door and your assistant is already awake…
      </Section>

      <Section title="No Screens? No Problem">
        Touchscreens can take a driver's eyes off the road for over twenty seconds…
      </Section>

      <Section title="Forge the Soul of Your Ride">
        Ask for a brand-new persona—any accent, attitude, or back-story…
      </Section>

      <Section title="An Intelligent Interface">
        A 16 GB offline knowledge vault rides everywhere you go…
      </Section>

      <Section title="Rediscover the Joy of the Open Road">
        Fire up Karaoke Mode with your own saved tracks…
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
        Conversations among passengers flow freely…
      </Section>

      <Section title="Robotaxi, Meet Your Portable AI Cabbie">
        Your personal chauffeur lives on your phone…
      </Section>

      <Section title="Keep Your Car's Soul Safe">
        You can keep a secure backup hidden away—like a horcrux minus the dark magic…
      </Section>
    </div>
  );
};

export default ScrollContent;