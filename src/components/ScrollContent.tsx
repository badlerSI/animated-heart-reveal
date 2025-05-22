import { useEffect, useRef } from "react";
import "./scrollContent.css";

/* ───────────────────────────────────────────────
   ScrollContent
   – Each .reveal card fades & slides in while its
     intersectionRatio grows from 0 → 1, and fades
     back out symmetrically as it leaves.
   – No manual math: we rely on intersectionRatio
     provided by IntersectionObserver.
──────────────────────────────────────────────── */
const ScrollContent = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    /* callback adjusts CSS custom properties on each tick */
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;        // 0 → 1
        el.style.setProperty("--revealOpacity", ratio.toString());
        el.style.setProperty("--revealTranslate", (24 * (1 - ratio)).toString());
      });
    };

    /* fire at fine-grained ratios for smoother fade */
    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px 0px -10% 0px",   // start exit fade a bit before leaving
      threshold: Array.from({ length: 21 }, (_, i) => i / 20) // 0, .05, …1
    });

    /* observe every .reveal element */
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
      observerRef.current!.observe(el)
    );

    return () => observerRef.current?.disconnect();
  }, []);

  /* ---------- helper for each section ---------- */
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

  /* -------------  render ------------- */
  return (
    <div className="px-4 md:px-8 lg:px-16 pb-24 max-w-6xl mx-auto">
      <div className="h-64" />

      <Section title="Soul Inside the Car — Not the Cloud">
        Open the door and your assistant is already awake. All language processing
        happens on the automotive-grade GPU that rides beside the main ECU—nothing
        leaves the cabin. The patent-pending architecture gives you answers in
        under a second, works even with zero bars, and erases cloud fees and
        privacy worries.
      </Section>

      <Section title="No Screens? No Problem">
        Touchscreens can take a driver's eyes off the road for over twenty seconds,
        and can spoil an otherwise gorgeous interior besides.
        <br />
        <br />
        With Soul Interface you speak naturally to run navigation, music, climate
        and much more; no menu mazes, no glare, no "safety lockouts." Your dash
        stays clean, your focus stays forward.
      </Section>

      <Section title="Forge the Soul of Your Ride">
        Ask for a brand-new persona—any accent, attitude, or back-story—and Soul
        Interface forges it on-device in about 30 seconds. Once saved, your library
        of characters loads instantaneously whenever you call for them. You're not
        picking from a short list; you're creating anything you can imagine.
        Popeye the Sailor Dog? Sure! Winston Churchill trapped in the body of
        kindergartner? Hey, you do you! Swapping on the fly is easy thanks to LoRA
        overlays smaller than a podcast.
      </Section>

      <Section title="An Intelligent Interface">
        A 16 GB offline knowledge vault rides everywhere you go. Soul Interface can
        quote history, decode warning lights in plain language, and suggest fixes
        before you open the hood. Need fresh traffic or weather? Drop in a one-way
        update from your phone—data flows in, never back out.
      </Section>

      <Section title="Rediscover the Joy of the Open Road">
        Fire up Karaoke Mode with your own saved tracks—vocals drop out and Soul
        Interface harmonizes in real time, or sing any part of a duet.
        <br />
        <br />
        Launch a choose-your-own-adventure for the whole family that plays out with
        multiple character voices, sound-effects, and even grammatically sound
        Elvish. Road trips become rolling entertainment, no internet required.
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
        Conversations among passengers flow freely: Soul Interface translates
        speech across sixteen languages almost instantly, all offline.
        <br />
        <br />
        Prefer to learn? Switch to Tutor Mode and practice phrases while the
        assistant corrects pronunciation on the fly—perfect prep for that long-awaited
        trip to Italy.
      </Section>

      <Section title="Robotaxi, Meet Your Portable AI Cabbie">
        Your personal chauffeur lives on your phone. Step into a Soul-equipped
        robotaxi and your custom crafted persona—with your seat settings, conversation
        preferences, and small-talk history—loads in a blink. Step out, and it purges
        itself from the vehicle within seconds. Fleet operators deliver bespoke
        rides; passengers keep total privacy.
      </Section>

      <Section title="Keep Your Car's Soul Safe">
        You can keep a secure backup hidden away—like a horcrux minus the dark
        magic—in case anything happens to your car, or you get a new one. Updates
        install on a spare software partition first, so there's always a safe
        version to fall back on. Preserve your treasured personas for life.
      </Section>
    </div>
  );
};

export default ScrollContent;