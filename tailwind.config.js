/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        25: "0.125rem",
        50: "0.25rem",
        100: "0.5rem",
        150: "0.75rem",
        200: "1rem",
        300: "1.5rem",
        400: "2rem",
        500: "2.5rem",
        600: "3rem",
        800: "4rem",
        1000: "5rem",
        1200: "6rem",
        1600: "8rem",
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
        exploreOutline: "rgba(255,255,255,0.1)",
        navLine: "rgba(151,151,151,0.25)",
        tabletNavBg: "rgba(255,255,255,0.05)",
        tabsHoverBg: "rgba(255,255,255,0.5)",
        headingNumber: "rgba(255,255,255,0.25)"
      },
      backdropBlur: {
        "4xl": "80px",
      },
    },
  },
  plugins: [],
};
