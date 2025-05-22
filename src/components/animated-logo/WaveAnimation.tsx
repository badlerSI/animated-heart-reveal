
import { useEffect, useRef, useState } from "react";
import "./waveAnimation.css";

interface WaveAnimationProps {
  isVisible: boolean;
  prefersReducedMotion: boolean;
  onPlaySound: () => void;
}

/* 40 wave-slice PNG URLs ------------------------------------------------ */
const SLICE_SRC: string[] = [
  "/lovable-uploads/762a95ff-f48e-4efd-9ce0-47a43f218f29.png",
  "/lovable-uploads/3dcd7f9b-3078-4677-b981-9f832697fb70.png",
  "/lovable-uploads/a4d45b17-3873-466b-bb1d-b4e309aeb413.png",
  "/lovable-uploads/d0bedd4d-e14e-4b25-9f74-979bb3a90047.png",
  "/lovable-uploads/3dee6079-aed4-431f-93ea-b4d9b359bb19.png",
  "/lovable-uploads/e432d087-d36a-4fc0-a53f-7acfe95b5ae5.png",
  "/lovable-uploads/0b4b9f26-2191-4c9d-ad31-22cbf144398f.png",
  "/lovable-uploads/d36d9d1b-6397-400e-9e9f-5e4ec2a6689f.png",
  "/lovable-uploads/99b5014e-e70a-4d0e-8304-cfd97522a778.png",
  "/lovable-uploads/064f952a-9a89-4bc4-ac0e-a3c93459eb93.png",
  "/lovable-uploads/6026f58a-ecef-4e25-bce3-a63a9e7369ff.png",
  "/lovable-uploads/c842b6d3-0f2a-47d9-ba13-ad60c354e300.png",
  "/lovable-uploads/248723a8-a3b4-4537-829c-f8254150eaf4.png",
  "/lovable-uploads/695bf637-c9fe-44cb-a0ab-3466c39b2843.png",
  "/lovable-uploads/aa2ae38e-46a3-4e18-822a-6556dbc5dbe4.png",
  "/lovable-uploads/a5592fba-f805-4a58-b239-555471d5e23f.png",
  "/lovable-uploads/63abb9da-5da6-4046-9278-2be5dfa1e8c4.png",
  "/lovable-uploads/a3f8ce69-83f1-4d95-8bc0-468332d2cc4b.png",
  "/lovable-uploads/8c534cbe-8936-4117-961f-b69d4dc16558.png",
  "/lovable-uploads/d7eae518-c316-4840-9c79-6d7ba2a3b468.png",
  "/lovable-uploads/02c1d3f6-c7c7-453b-8e71-b0106ec58795.png",
  "/lovable-uploads/24f4f7f3-66a4-42a5-8709-80febbdeeafa.png",
  "/lovable-uploads/348f3e01-e000-45d9-a59a-5312e3bc13a2.png",
  "/lovable-uploads/5ee59a29-f433-4eb9-b59d-bc8514490bb6.png",
  "/lovable-uploads/2d8a1b97-4560-4c29-b367-e9878e907578.png",
  "/lovable-uploads/095bc20c-a7bd-4323-947a-6b9e88e4c68c.png",
  "/lovable-uploads/37aee880-36fa-41bb-b249-e189d02e4939.png",
  "/lovable-uploads/282caff0-90c8-4495-8410-f240e92d6626.png",
  "/lovable-uploads/a35dc01e-9589-4d0c-9f02-e9528ad650ac.png",
  "/lovable-uploads/7a074875-160d-4dc8-b8e1-0c846a36bc89.png",
  "/lovable-uploads/ad68fc55-5859-4d32-8b7d-b06c1a633902.png",
  "/lovable-uploads/c036a139-7e35-41a1-b43d-9a378121e8ad.png",
  "/lovable-uploads/57ce5828-d3d7-48ae-8dbd-e9cc7c435079.png",
  "/lovable-uploads/86c00fc1-700c-4538-b77d-71d390a9ad88.png",
  "/lovable-uploads/4c6728c4-a020-44c4-b9f5-42cc1b1df716.png",
  "/lovable-uploads/516bb43f-ea69-4649-8624-cfbb58e0c6bf.png",
  "/lovable-uploads/8494515c-3af6-43c9-82db-ef746bad3e30.png",
  "/lovable-uploads/1b55016b-6e62-4202-90a5-7410485cfa04.png",
  "/lovable-uploads/10a93878-38a3-4b53-8510-3e31ce4ce447.png",
  "/lovable-uploads/7f0b2c87-ab43-4627-ac48-d23bda5a7280.png"
];

const WaveAnimation = ({
  isVisible,
  prefersReducedMotion,
  onPlaySound
}: WaveAnimationProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  /* helper ---------------------------------------------------------------- */
  const fitToParent = (totalW: number, totalH: number) => {
    const wrapper = wrapperRef.current!;
    const parentBox = wrapper.parentElement!.getBoundingClientRect();
    const scale = Math.min(
      parentBox.width / totalW,
      parentBox.height / totalH
    );
    wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
  };

  /* build once when visible ---------------------------------------------- */
  useEffect(() => {
    if (!isVisible || ready) return;
    setReady(true);

    const container = containerRef.current!;
    container.innerHTML = "";

    SLICE_SRC.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `wave slice ${i + 1}`;
      img.className = "wave-slice";
      img.style.setProperty("--i", i.toString());
      container.appendChild(img);

      if (i === 0) {
        img.onload = () => {
          const sliceW = img.naturalWidth;
          const sliceH = img.naturalHeight;
          const totalW = sliceW * SLICE_SRC.length;
          const totalH = sliceH;

          container.style.setProperty("--slice-w", `${sliceW}px`);
          container.style.setProperty("--slice-h", `${sliceH}px`);
          container.style.width = `${totalW}px`;
          container.style.height = `${totalH}px`;

          fitToParent(totalW, totalH);
        };
      }
    });

    if (!prefersReducedMotion) onPlaySound();

    /* re-fit on resize ---------------------------------------------------- */
    const onResize = () => {
      const totalW = parseFloat(container.style.width);
      const totalH = parseFloat(container.style.height);
      fitToParent(totalW, totalH);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isVisible, ready, prefersReducedMotion, onPlaySound]);

  if (!isVisible) return null;

  return (
    <div id="wave-wrapper" ref={wrapperRef}>
      <div id="wave-container" ref={containerRef} className="wave-container" />
    </div>
  );
};

export default WaveAnimation;