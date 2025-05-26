/* -------------------------------------------------------------------
   HeartNavigation.tsx  –  inline SVG menu with per-stroke hover / tap
   ------------------------------------------------------------------- */

import { Link } from "react-router-dom";
import { ReactComponent as HeartSVG } from "@/assets/heart-cta.svg?react"; // ← works once svgr is active
import { useEffect } from "react";
import "@/components/scrollContent.css";                                   // glow classes

const HeartNavigation = () => {
  /* ---------------------------------------------------------------
     Add hover / focus / tap listeners once after mount
  ---------------------------------------------------------------- */
  useEffect(() => {
    const root = document.getElementById("heart-cta");
    if (!root) return;

    const groups = root.querySelectorAll<SVGGElement>("g[id^='stroke-']");

    groups.forEach((g) => {
      const slug = g.id.replace("stroke-", ""); // tech, vision, partner, news
      const path = g.querySelector("path");

      if (!path) return;

      /* keyboard accessibility */
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
        window.location.href = `/${slug}`; // adjust routes if needed
      });
    });

    /* cleanup on unmount */
    return () =>
      groups.forEach((g) => {
        const clone = g.cloneNode(true);
        g.parentNode?.replaceChild(clone, g);
      });
  }, []);

  /* ---------------------------------------------------------------
     Render
  ---------------------------------------------------------------- */
  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div className="relative w-64 md:w-96">
        <HeartSVG id="heart-cta" className="w-full h-auto heart-glow-initial" />

        {/* Fallback nav for SEO / no-JS users */}
        <nav className="sr-only">
          <Link to="/tech">Tech</Link>
          <Link to="/vision">Vision</Link>
          <Link to="/partner">Partner</Link>
          <Link to="/news">News</Link>
        </nav>
      </div>
    </div>
  );
};

export default HeartNavigation;
