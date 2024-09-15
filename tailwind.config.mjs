/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
    },
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/typography")],
};
