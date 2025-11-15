/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"], // default
        MontThin: ["Montserrat Thin", "sans-serif"],
        MontExtraLight: ["Montserrat ExtraLight", "sans-serif"],
        MontLight: ["Montserrat Light", "sans-serif"],
        MontRegular: ["Montserrat Regular", "sans-serif"],
        MontMedium: ["Montserrat Medium", "sans-serif"],
        MontSemiBold: ["Montserrat SemiBold", "sans-serif"],
        MontBold: ["Montserrat Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
