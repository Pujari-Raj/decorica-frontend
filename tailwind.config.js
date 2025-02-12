/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        MontThin: ["Montserrat Thin"],
        MontExtraLight: ["Montserrat ExtraLight"],
        MontLight: ["Montserrat Light"],
        MontRegular: ["Montserrat Regular"],
        MontMedium:["Montserrat Medium"],
        MontSemiBold:["Montserrat SemiBold"],
        MontBold: ["Montserrat Bold"],
      },
    },
  },
  plugins: [],
};
