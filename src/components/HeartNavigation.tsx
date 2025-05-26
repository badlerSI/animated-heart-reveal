
/* -------------------------------------------------------------------
   HeartNavigation.tsx  –  inline SVG menu with per-stroke hover / tap
   ------------------------------------------------------------------- */

import { Link } from "react-router-dom";
import { ReactComponent as HeartSVG } from "@/assets/heart-cta.svg?react"; // SVG compiled as React component
import { useEffect } from "react";
import "@/components/scrollContent.css";                                   // glow classes: .heart-glow-initial / -hover

const HeartNavigation = () => {
  /* ---------------------------------------------------------------
     One-time setup: add hover / focus / tap listeners to SVG groups
  ---------------------------------------------------------------- */
  useEffect(() => {
    const root = document.getElementById("heart-cta");
    if (!root) return;

    const groups = root.querySelectorAll<SVGGElement>("g[id^='stroke-']");

    groups.forEach((g) => {
      const slug = g.id.replace("stroke-", "");          // tech, vision, partner, news
      const path = g.querySelector("path");

      /* keyboard accessibility */
      if (path) {
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

        /* click / tap: keep glow on mobile, then navigate */
        path.addEventListener("click", () => {
          g.classList.add("heart-glow-hover");
          window.location.href = `/${slug}`;             // adjust routes if needed
        });
      }
    });

    /* cleanup listeners on unmount */
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
        {/* Inline SVG component – keeps internal groups for JS to target */}
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
