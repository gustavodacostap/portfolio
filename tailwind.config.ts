/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkOrange: "#F97316",
        dodgerblue: "#3B82F6",
        bluishBlack: "#0F172A",
        surfaceDark: "#1E293B",
        whitesmoke: "#F9FAFB",
        softWhite: "E2E8F0",
        darkslategray: "#334155",
        darkslategray2: "#17344F",
      },
      sans: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
