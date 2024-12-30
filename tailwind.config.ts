import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.4)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
