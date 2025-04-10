/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "brand-blue": "#3661E1",
        "brand-blue": "#251ec1",
        "brand-dark": "#282828",
        "brand-gray": "#585858",
        "brand-orange": "#ca6615",
        "brand-orange-light": "#d68340",
        "brand-orange-dark": "#93531f",
        "brand-yellow": "#e1b636",
        "brand-yellow-dark": "#e1a836",
      },
      fontFamily: {
        oswald: ["Oswald"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
