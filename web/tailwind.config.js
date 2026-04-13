/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050816",
          bg2: "#0b1224",
        },
        content: {
          primary: "#e8eef7",
          secondary: "#94a3b8",
        },
        neon: {
          cyan: "#00e5ff",
          violet: "#a855f7",
          rose: "#ec4899",
        },
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 6vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,229,255,0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(168,85,247,0.08), transparent)",
        "grid-cyber":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 8px 32px -8px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)",
        "glow-cyan": "0 0 28px -4px rgba(0,229,255,0.4)",
        "glow-violet": "0 0 28px -4px rgba(168,85,247,0.45)",
        nav: "0 4px 24px -4px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        card: "16px",
        nav: "12px",
      },
    },
  },
  plugins: [],
};
