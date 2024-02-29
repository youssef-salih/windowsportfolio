/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#206bb6",
      },
    },
    fontFamily: {
      chakra: "chakra-regular",
      genos: "Roboto",
    },
  },
  plugins: [],
};
