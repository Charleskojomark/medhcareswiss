import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        navy: "#05427B",
        green: "#3CAA35",
        gold: "#3CAA35",
        surface: "#F4F9F4",
        dark: "#0D1B2A",
        brand: "#1A1A2E",
        "gold-tint": "#EEF7EE",
      },
      fontFamily: {
        baskerville: ["var(--font-baskerville)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-dot": "pulse 1.5s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2.4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out 2s infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-ring": "pulseRing 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
        "slide-left": "slideLeft 30s linear infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "1" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.2)" },
          "70%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
