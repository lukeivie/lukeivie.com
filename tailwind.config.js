const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#090B10",
        pitchBlack: "#000000",
        gray: colors.slate,
        blue: {
          twitter: "#1da1f2",
        },
        indigo: colors.indigo,
        fuchsia: colors.fuchsia,
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
