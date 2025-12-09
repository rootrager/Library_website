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
        amethyst: "#0D042D", // بنفش تیره (پس‌زمینه)
        mint: "#00E1A2",     // سبز نئونی (دکمه‌ها)
        ocean: "#0287B4",    // آبی (متن‌ها)
        taupe: "#8A7771",    // قهوه‌ای (بردرها)
        almond: "#E0C8BF",   // بژ (متن روشن)
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        pixel: ["var(--font-press-start)"], 
      },
    },
  },
  plugins: [],
};
export default config;