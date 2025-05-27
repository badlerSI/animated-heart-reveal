
/* -------------------------------------------------------------------
   HeartNavigation.tsx  –  per-stroke hover / tap glow navigation
   ------------------------------------------------------------------- */

import { useEffect, useState } from "react";
import "@/components/scrollContent.css";     // we'll append new rules there

export default function HeartNavigation() {
  const [svgMarkup, setSvgMarkup] = useState<string>("");

  /* 1 ▸ fetch the raw SVG once --------------------------------------- */
  useEffect(() => {
    fetch("/heart-cta.svg")                 // ← file lives in /public
      .then((r) => r.text())
      .then(setSvgMarkup)
      .catch((err) => console.error("Could not load /heart-cta.svg", err));
  }, []);

  /* 2 ▸ after the SVG is in the DOM wire up listeners ---------------- */
  useEffect(() => {
    if (!svgMarkup) return;                 // nothing yet

    const rootSvg = document.getElementById("heart-cta") as SVGSVGElement | null;
    if (!rootSvg) return;

    const groups = Array.from(
      rootSvg.querySelectorAll<SVGGElement>("g[id^='stroke-']")
    );

    groups.forEach((g) => {
      const slug = g.id.replace("stroke-", "");   // tech | vision | partner | news
      g.setAttribute("tabIndex", "0");
      g.setAttribute("role", "link");
      g.setAttribute("aria-label", slug);
      g.style.cursor = "pointer";

      /* glow on hover / keyboard focus */
      const enter = () => g.classList.add("stroke-glow");
      const leave = () => g.classList.remove("stroke-glow");

      g.addEventListener("mouseenter", enter);
      g.addEventListener("focus", enter);
      g.addEventListener("mouseleave", leave);
      g.addEventListener("blur", leave);

      /* click / tap */
      g.addEventListener("click", () => {
        g.classList.add("stroke-glow");         // keep bright on mobile tap
        window.location.href = `/${slug}`;      // adjust routes if different
      });
    });

    /* cleanup on unmount */
    return () =>
      groups.forEach((g) => {
        const clone = g.cloneNode(true);
        g.parentNode?.replaceChild(clone, g);
      });
  }, [svgMarkup]);

  /* 3 ▸ render -------------------------------------------------------- */
  return (
    <div className="w-full px-4 py-12 flex justify-center">
      {/* inject SVG markup here */}
      <div
        className="relative w-64 md:w-96"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      {/* no-JS fallback nav (screen readers / SEO) */}
      <nav className="sr-only">
        <a href="/tech">Tech</a>
        <a href="/vision">Vision</a>
        <a href="/partner">Partner</a>
        <a href="/news">News</a>
      </nav>
    </div>
  );
}