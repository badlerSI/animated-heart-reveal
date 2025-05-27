/* ------------------------------------------------------------------
   HeartNavigation.tsx  –  inline SVG strokes with per-stroke glow
   ------------------------------------------------------------------ */
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@/components/scrollContent.css";           // .heart-glow-* rules

const HeartNavigation = () => {
  /* ---------- 1. Inline SVG markup -------------------------------- */
  /*  (Paste your final heart-cta.svg here.  I’ve kept only the core
      structure so the file isn’t 1000-lines long.)                  */
  const svgMarkup = /* html */ `
    <svg id="heart-cta" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
      <g id="stroke-tech">
        <image id="tech-img" href="/tech.png" x="0" y="0" width="900" height="900"/>
        <path id="stroke-tech-edge"
              d="M 100 120 C 80 100, 60 100, ... Z"
              fill="transparent"/>
      </g>
      <g id="stroke-vision">
        <image id="vision-img" href="/vision.png" x="0" y="0" width="900" height="900"/>
        <path id="stroke-vision-edge"
              d="M 300 120 C 320 100, 340 100, ... Z"
              fill="transparent"/>
      </g>
      <g id="stroke-partner">
        <image id="partner-img" href="/partner.png" x="0" y="0" width="900" height="900"/>
        <path id="stroke-partner-edge"
              d="M 450 400 ... Z"
              fill="transparent"/>
      </g>
      <g id="stroke-news">
        <image id="news-img" href="/news.png" x="0" y="0" width="900" height="900"/>
        <path id="stroke-news-edge"
              d="M 600 200 ... Z"
              fill="transparent"/>
      </g>
    </svg>
  `;

  /* ---------- 2. Ref gives us the actual <svg> element ------------ */
  const svgRef = useRef<SVGSVGElement | null>(null);

  /* ---------- 3. One-time listener wiring ------------------------- */
  useEffect(() => {
    const root = svgRef.current;
    if (!root) return;

    /* Every group (stroke-tech, stroke-vision …) */
    root.querySelectorAll<SVGGElement>("g[id^='stroke-']").forEach((g) => {
      const slug = g.id.replace("stroke-", "");          // tech, vision …
      const edge = g.querySelector<SVGPathElement>("path");

      if (!edge) return;

      /* keyboard / a11y */
      edge.setAttribute("tabIndex", "0");
      edge.setAttribute("role", "link");
      edge.setAttribute("aria-label", slug);

      /* hover / focus */
      const enter = () => g.classList.add("heart-glow-hover");
      const leave = () => g.classList.remove("heart-glow-hover");

      edge.addEventListener("mouseenter", enter);
      edge.addEventListener("focus", enter);
      edge.addEventListener("mouseleave", leave);
      edge.addEventListener("blur", leave);

      /* click / tap navigates */
      edge.addEventListener("click", () => (window.location.href = `/${slug}`));
    });

    /* cleanup on unmount */
    return () => {
      root.querySelectorAll("path").forEach((p) => {
        const clone = p.cloneNode(true);
        p.parentNode?.replaceChild(clone, p);
      });
    };
  }, []);

  /* ---------- 4. Render ------------------------------------------ */
  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div
        className="relative w-64 md:w-96 heart-glow-initial"
        /* Dangerously inject raw SVG once */
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
        /* ref receives the <svg> element after injection */
        ref={(node) => {
          /* node is the wrapping div; its firstChild is the svg */
          svgRef.current = node?.firstElementChild as SVGSVGElement | null;
        }}
      />

      {/* Hidden fallback nav for SEO / no-JS */}
      <nav className="sr-only">
        <Link to="/tech">Tech</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/partner">Partner</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
};

export default HeartNavigation;