/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    spacing: {
      25: "2px",
      50: "4px",
      100: "8px",
      150: "12px",
      200: "16px",
      300: "24px",
      400: "32px",
      500: "40px",
      600: "48px",
      800: "64px",
      1000: "80px",
      1200: "96px",
      1600: "128px",
    },
    fontFamily: {
      barlow: "Barlow,  serif",
      barlow_condensed: "Barlow Condensed, sans-serif",
      bellefair: "Bellefair, serif",
    },
    colors: {
      blue: {
        300: "#D0D6F9",
        900: "#0B0D17",
      },
    },
  },
  plugins: [],
};
