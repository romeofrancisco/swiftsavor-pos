/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Background: "#2D303E",
      DarkBackground: "#1F1D2B",
      Primary: "#da0054",
      LightText: "#ABBBC2",
      Input: "#2D303E",
      Border: "#393C49",
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
};
