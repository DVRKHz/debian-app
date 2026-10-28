import type { PluginAPI } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#303030",
          900: "#242424",
          950: "#171717",
        },
        debian: {
          DEFAULT: "#C70036",
          hover: "#A5002D",
          light: "#FF5C7C",
          dark: "#800020",
          accent: "#0035C7",
          link: "#0035C7",
          "link-hover": "#00207A",
          "link-dark": "#8AB4F8",
          "link-dark-hover": "#B3CBFA",
          teal: "#38B7C7",
          "teal-dark": "#007986",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 180ms ease-out",
      },
    },
  },
  plugins: [
    ({ addVariant }: PluginAPI) => {
      addVariant("light", ".light &");
    },
  ],
};

export default config;
