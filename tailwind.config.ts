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
      },
    },
  },
  plugins: [],
};
export default config;
