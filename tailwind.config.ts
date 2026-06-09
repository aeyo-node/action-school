import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "aviation-blue": "#0ea5e9",
        "aviation-navy": "#0f172a",
        "metallic-gray": "#94a3b8",
        "rich-black": "#020617",
        "off-white": "#f8fafc",
        "dim": "#64748b",
      },
    },
  },
  plugins: [],
};
export default config;
