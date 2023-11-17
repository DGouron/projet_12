import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020203",
        secondary: "#FFFFFF",
        title: "#20253A",
        legend: "#74798C",
        highlight: "#FF0101",
        infoValue: "#282D30",
        infoTitle: "#74798C",
      },
      boxShadow: {
        layout: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".grid-page": {
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          paddingBottom: "1.25rem",
          "@screen sm": {
            gap: "1.5rem",
          },
          "@screen md": {
            gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
          },
          "@screen lg": {
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          },
          "@screen xl": {
            gap: "1rem",
          },
        },
      });
    }),
  ],
};
