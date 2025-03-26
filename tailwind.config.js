/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Europa"],
      },
      colors: {
        primary: {
          DEFAULT: "#e81863",
        },
      },
      backgroundPosition: {
        "left-sm": "20% 0",
        "left-lg": "115% 0",
      },
    },
  },
  plugins: [],
};
