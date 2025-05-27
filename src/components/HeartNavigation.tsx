
/* -------------------------------------------------------------------
   HeartNavigation.tsx – runtime-loaded SVG with per-stroke hover
   ------------------------------------------------------------------- */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@/components/scrollContent.css";               // glow classes

export default function HeartNavigation() {
  const [svgMarkup, setSvgMarkup] = useState<string>("");

  /* ---------- 1. fetch raw SVG from /public -------------------------- */
  useEffect(() => {
    fetch("/heart-cta.svg")
      .then((r) => r.text())
      .then(setSvgMarkup)
      .catch((err) => console.error("Could not load /heart-cta.svg", err));
  }, []);

  /* ---------- 2. attach listeners once SVG is in the DOM ------------- */
  useEffect(() => {
    if (!svgMarkup) return;                     // nothing to wire yet
    const rootSvg = document.getElementById("heart-cta") as SVGSVGElement | null;
    if (!rootSvg) return;

    const groups = Array.from(
      rootSvg.querySelectorAll<SVGGElement>("g[id^='stroke-']")
    );

    groups.forEach((g) => {
      const slug = g.id.replace("stroke-", ""); // tech, vision, partner, news
      g.setAttribute("tabIndex", "0");
      g.style.cursor = "pointer";

      const enter = () => g.classList.add("heart-glow-hover");
      const leave = () => g.classList.remove("heart-glow-hover");

      g.addEventListener("mouseenter", enter);
      g.addEventListener("focus", enter);
      g.addEventListener("mouseleave", leave);
      g.addEventListener("blur", leave);
      g.addEventListener("click", () => (window.location.href = `/${slug}`));
    });

    return () =>
      groups.forEach((g) => {
        const clone = g.cloneNode(true);
        g.parentNode?.replaceChild(clone, g);
      });
  }, [svgMarkup]);

  /* ---------- 3. render ---------------------------------------------- */
  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div
        className="relative w-64 md:w-96 heart-glow-initial"
        /* svgMarkup empty on first render, filled after fetch */
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      <nav className="sr-only">
        <Link to="/tech">Tech</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/partner">Partner</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
}