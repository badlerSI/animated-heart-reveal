/* ------------------------------------------------------------------
   vite.config.ts  –  original config + SVGR for inline-SVG components
   ------------------------------------------------------------------ */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";          // ← NEW: enables ?react suffix
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),           // existing
    svgr(),            // ← NEW
    mode === "development" && componentTagger(),  // existing conditional
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),   // existing alias
    },
  },
}));