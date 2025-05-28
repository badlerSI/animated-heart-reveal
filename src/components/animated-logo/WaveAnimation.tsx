import { useEffect, useRef } from "react";
import "./waveAnimation.css";

interface WaveAnimationProps {
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onPlaySound: () => void;
}

const STATIC_WAVE_SRC =
  "/lovable-uploads/be3b360f-fe9c-45f7-aa45-4caff7512c78.png";

const SLICE_SRC: string[] = [
  /* ... your 40 slice URLs ... */
];

const WaveAnimation = ({
  isVisible,
  prefersReducedMotion,
  onPlaySound,
}: WaveAnimationProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const staticRef = useRef<HTMLImageElement>(null);

  /* scale wrapper to fit parent */
  const fit = (w: number, h: number) => {
    const parent = wrapperRef.current!.parentElement!.getBoundingClientRect();
    const s = Math.min(parent.width / w, parent.height / h);
    const el = wrapperRef.current!;
    el.style.transform = `translate(-50%, -50%) scale(${s})`;
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
  };

  useEffect(() => {
    if (!isVisible) return;
    const container = containerRef.current!;
    const wrapper = wrapperRef.current!;

    // reset wrapper & container classes
    wrapper.classList.remove("fade-out-smooth");
    container.innerHTML = "";

    SLICE_SRC.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `wave slice ${i + 1}`;
      img.className = "wave-slice";
      img.style.setProperty("--i", i.toString());
      container.appendChild(img);

      // on first slice load, size & fit
      if (i === 0) {
        img.onload = () => {
          const sliceW = img.naturalWidth;
          const sliceH = img.naturalHeight;
          const totalW = sliceW * SLICE_SRC.length;
          container.style.setProperty("--slice-w", `${sliceW}px`);
          container.style.setProperty("--slice-h", `${sliceH}px`);
          container.style.width = `${totalW}px`;
          container.style.height = `${sliceH}px`;
          fit(totalW, sliceH);
        };
      }

      // when slice 34 starts animating, fade out slices & fade in static
      if (i === 33) {
        img.addEventListener("animationstart", () => {
          // schedule wrapper class toggle at frame 34 timing
          setTimeout(() => {
            wrapper.classList.add("fade-out-smooth");
          }, (34 / 30) * 1000);
        });
      }
    });

    if (!prefersReducedMotion) {
      onPlaySound();
    }
  }, [isVisible, prefersReducedMotion, onPlaySound]);

  useEffect(() => {
    if (!isVisible) return;
    const onResize = () => {
      const w = parseFloat(wrapperRef.current!.style.width);
      const h = parseFloat(wrapperRef.current!.style.height);
      fit(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div id="wave-wrapper" ref={wrapperRef} style={{ zIndex: 50 }}>
      <img
        ref={staticRef}
        src={STATIC_WAVE_SRC}
        alt="wave"
        className="static-wave neon-glow"
      />
      <div id="wave-container" ref={containerRef} className="wave-container" />
    </div>
  );
};

export default WaveAnimation;
