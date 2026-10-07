import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mercy palette: primary navy, secondary orange.
        primary: {
          DEFAULT: "#0F172B",
          50: "#E9ECF3",
          100: "#C9D0E0",
          200: "#9AA6C2",
          300: "#6B7CA3",
          400: "#3E5283",
          500: "#1F3161",
          600: "#172547",
          700: "#0F172B",
          800: "#0B1120",
          900: "#070B15",
        },
        accent: {
          DEFAULT: "#FC5A00",
          50: "#FFF0E6",
          100: "#FFD6BF",
          200: "#FFB380",
          300: "#FF8F40",
          400: "#FC6E1A",
          500: "#FC5A00",
          600: "#D94D00",
          700: "#B04000",
        },
        surface: {
          DEFAULT: "#16213A",
          2: "#1C2A47",
          3: "#243556",
        },
        border: "#2A3A5C",
        input: "#2A3A5C",
        ring: "#FC5A00",
        background: "#0F172B",
        foreground: "#F1F5F9",
        muted: { DEFAULT: "#1C2A47", foreground: "#94A3B8" },
      },
      borderRadius: { xl: "0.9rem", "2xl": "1.2rem" },
    },
  },
  plugins: [],
};

export default config;
