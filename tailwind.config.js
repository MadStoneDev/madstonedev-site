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
    },
  },
  plugins: [],
};
