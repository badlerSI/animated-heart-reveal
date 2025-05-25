import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  /* ---------------- SAFELIST ---------------- */
  safelist: [
    "neon",        // ensures the glow rule isn't purged in prod
    "animate-neon" // optional: only relevant if you use the utility below
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /* -------------- FONTS -------------- */
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        outfit: ["Outfit", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },

      /* -------------- COLOURS -------------- */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "cyan-white": "#d0faff",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      /* -------------- RADIUS -------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* -------------- ACCORDION (existing) -------------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        /* -----------  NEON FLICKER (optional utility) ----------- */
        "neon-flicker": {
          "0%,14%,16%,18%,60%,100%": {
            opacity: "1",
            filter:
              "drop-shadow(0 0 4px var(--halo-cyan)) drop-shadow(0 0 12px var(--halo-cyan))",
          },
          "15%,17%,32%,34%,58%": {
            opacity: "0.85",
            filter:
              "drop-shadow(0 0 3px var(--halo-cyan)) drop-shadow(0 0 9px var(--halo-cyan))",
          },
          "33%": {
            opacity: "0.45",
            filter: "none",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        /* attach the keyframes above so you can write className="animate-neon" if desired */
        neon: "neon-flicker 3s infinite",
      },
    },
  },

  /* -------------- PLUGINS -------------- */
  plugins: [require("tailwindcss-animate")],
} satisfies Config;