import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Source Serif 4", "Georgia", "serif"],
      },
      colors: {
        brand: {
          50: "#f2f5f9",
          100: "#e2e8f0",
          300: "#94a3b8",
          400: "#64748b",
          500: "#3b5b84",
          600: "#1e3a5f",
          700: "#152a45",
          900: "#0c1a2c",
        },
      },
      keyframes: {
        "hero-drift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "print-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "hero-drift": "hero-drift 18s ease-in-out infinite",
        "print-fade": "print-fade 0.8s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
