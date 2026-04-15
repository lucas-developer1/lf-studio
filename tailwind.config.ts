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
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        bg: {
          base: "#000000",
          surface: "rgba(255,255,255,0.055)",
          elevated: "rgba(255,255,255,0.085)",
        },
        accent: {
          dark: "#0d5bbf",
          mid: "#1a6fd4",
          light: "#2484e8",
        },
        text: {
          primary: "#f5f5f7",
          secondary: "#a1a1a6",
          tertiary: "#6e6e73",
          accent: "#2484e8",
        },
      },
      backgroundImage: {
        "btn-grad": "linear-gradient(145deg, #0d5bbf 0%, #1a6fd4 50%, #1e7de0 100%)",
        "btn-grad-hover": "linear-gradient(145deg, #0f68d8 0%, #1e7de0 50%, #2484e8 100%)",
        "hero-glow": "radial-gradient(ellipse at 50% 10%, rgba(26,111,212,0.22) 0%, transparent 62%)",
        "section-glow": "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(26,111,212,0.06) 0%, transparent 65%)",
        "cta-glow": "radial-gradient(ellipse at 50% 100%, rgba(26,111,212,0.18) 0%, transparent 62%)",
      },
      maxWidth: {
        container: "1100px",
      },
      borderColor: {
        glass: "rgba(255,255,255,0.09)",
        "glass-hover": "rgba(26,111,212,0.50)",
        shine: "rgba(255,255,255,0.14)",
      },
      boxShadow: {
        glass: "inset 0 1px 0 rgba(255,255,255,0.14), 0 4px 32px rgba(0,0,0,0.35)",
        "glass-hover": "inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 48px rgba(0,0,0,0.50), 0 0 60px rgba(26,111,212,0.12)",
        btn: "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(26,111,212,0.32)",
        "btn-hover": "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(26,111,212,0.55)",
      },
    },
  },
  plugins: [],
};
export default config;
