import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Primary ── */
        primary: "#0a0c0a",
        "primary-dim": "#345c35",
        "primary-container": "#212220",
        "primary-fixed": "#e4e2df",
        "primary-fixed-dim": "#c7c6c3",
        "on-primary": "#ffffff",
        "on-primary-container": "#898986",
        "on-primary-fixed": "#1b1c1a",
        "on-primary-fixed-variant": "#464745",
        "inverse-primary": "#c7c6c3",

        /* ── Secondary ── */
        secondary: "#5f5e5d",
        "secondary-dim": "#475745",
        "secondary-container": "#e2dfdd",
        "secondary-fixed": "#e5e2e0",
        "secondary-fixed-dim": "#c8c6c4",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#636261",
        "on-secondary-fixed": "#1b1c1b",
        "on-secondary-fixed-variant": "#474745",

        /* ── Tertiary ── */
        tertiary: "#0d0b0b",
        "tertiary-dim": "#525624",
        "tertiary-container": "#242121",
        "tertiary-fixed": "#e8e1e0",
        "tertiary-fixed-dim": "#ccc5c4",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#8d8887",
        "on-tertiary-fixed": "#1e1b1b",
        "on-tertiary-fixed-variant": "#4a4646",

        /* ── Error ── */
        error: "#ba1a1a",
        "error-dim": "#791903",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        /* ── Surface / Background ── */
        surface: "#fcf8f7",
        "surface-dim": "#ddd9d8",
        "surface-bright": "#fcf8f7",
        "surface-tint": "#5e5f5c",
        "surface-variant": "#e5e2e1",
        "surface-container": "#f1edec",
        "surface-container-low": "#f7f3f2",
        "surface-container-high": "#ebe7e6",
        "surface-container-highest": "#e5e2e1",
        "surface-container-lowest": "#ffffff",
        background: "#fcf8f7",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#454843",
        "on-background": "#1c1b1b",
        "inverse-surface": "#313030",
        "inverse-on-surface": "#f4f0ef",

        /* ── Outline ── */
        outline: "#757873",
        "outline-variant": "#c5c7c1",
      },

      fontFamily: {
        headline: ["var(--font-lexend)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-lexend)", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
