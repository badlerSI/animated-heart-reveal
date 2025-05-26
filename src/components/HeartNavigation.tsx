
/* -------------------------------------------------------------------
   HeartNavigation.tsx  –  inline SVG w/ per-stroke hover-glow
   ------------------------------------------------------------------- */

import { Link } from "react-router-dom";
import { ReactComponent as HeartSVG } from "/heart-cta.svg"; // path to the embedded SVG
import { useEffect } from "react";
import "@/components/scrollContent.css"; // makes sure .heart-glow-* classes exist

const HeartNavigation = () => {
  /* ---------------------------------------------------------------
     Attach hover / focus / tap listeners once after mount
  ---------------------------------------------------------------- */
  useEffect(() => {
    const root = document.getElementById("heart-cta");
    if (!root) return;

    const groups = root.querySelectorAll<SVGGElement>("g[id^='stroke-']");

    groups.forEach((g) => {
      const path = g.querySelector("path");
      const slug = g.id.replace("stroke-", ""); // tech, vision…

      // Make the path focusable for keyboard users
      path?.setAttribute("tabIndex", "0");
      path?.setAttribute("role", "link");
      path?.setAttribute("aria-label", slug);

      /* --- hover / focus glow --- */
      const enter = () => g.classList.add("heart-glow-hover");
      const leave = () => g.classList.remove("heart-glow-hover");

      path?.addEventListener("mouseenter", enter);
      path?.addEventListener("focus", enter);
      path?.addEventListener("mouseleave", leave);
      path?.addEventListener("blur", leave);

      /* --- click / tap navigate + persist glow on mobile --- */
      path?.addEventListener("click", () => {
        g.classList.add("heart-glow-hover");
        window.location.href = `/${slug}`; // adjust to your routes
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
     Render: the SVG sits inside a responsive wrapper
  ---------------------------------------------------------------- */
  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div className="relative w-64 md:w-96">
        {/* Imported SVG component – ID preserved as 'heart-cta' */}
        <HeartSVG id="heart-cta" className="w-full h-auto heart-glow-initial" />

        {/* Invisible links for SEO / routing (fallback if JS disabled) */}
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