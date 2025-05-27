
/* -------------------------------------------------------------------
   HeartNavigation.tsx – loads heart-cta.svg at runtime and adds
   per-stroke hover / tap with minimal markup
   ------------------------------------------------------------------- */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "@/components/scrollContent.css";               // .heart-glow-initial / -hover classes

export default function HeartNavigation() {
  /* hold the raw SVG markup once it’s fetched */
  const [svgMarkup, setSvgMarkup] = useState<string>("");

  /* ---------------------------------------------------------------
     1.  fetch the SVG exactly once after mount
  ---------------------------------------------------------------- */
  useEffect(() => {
    fetch("/src/assets/heart-cta.svg")
      .then((r) => r.text())
      .then(setSvgMarkup)
      .catch((err) => console.error("Failed to load SVG", err));
  }, []);

  /* ---------------------------------------------------------------
     2.  once the SVG is inserted into the DOM, wire up listeners
  ---------------------------------------------------------------- */
  useEffect(() => {
    if (!svgMarkup) return;                       // nothing to wire yet

    const root = document.getElementById("heart-cta");
    if (!root) return;

    const groups = root.querySelectorAll<SVGGElement>("g[id^='stroke-']");
    groups.forEach((g) => {
      const slug = g.id.replace("stroke-", "");   // tech, vision, partner, news
      const path = g.querySelector("path");
      if (!path) return;

      /* keyboard focus */
      path.setAttribute("tabIndex", "0");
      path.setAttribute("role", "link");
      path.setAttribute("aria-label", slug);

      /* hover / focus glow */
      const enter = () => g.classList.add("heart-glow-hover");
      const leave = () => g.classList.remove("heart-glow-hover");

      path.addEventListener("mouseenter", enter);
      path.addEventListener("focus", enter);
      path.addEventListener("mouseleave", leave);
      path.addEventListener("blur", leave);

      /* click / tap navigate + keep glow on mobile */
      path.addEventListener("click", () => {
        g.classList.add("heart-glow-hover");
        window.location.href = `/${slug}`;        // adjust if your routes differ
      });
    });

    /* cleanup listeners on unmount --------------------------------------- */
    return () =>
      groups.forEach((g) => {
        const clone = g.cloneNode(true);
        g.parentNode?.replaceChild(clone, g);
      });
  }, [svgMarkup]);

  /* ---------------------------------------------------------------
     render – SVG injected via dangerouslySetInnerHTML
  ---------------------------------------------------------------- */
  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div
        className="relative w-64 md:w-96 heart-glow-initial"
        /* svgMarkup will be empty on first render, filled after fetch */
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />

      {/* fallback nav for SEO / no-JS users */}
      <nav className="sr-only">
        <Link to="/tech">Tech</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/partner">Partner</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
}