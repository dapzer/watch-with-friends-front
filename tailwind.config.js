/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "45xl": "2.5rem",
        "35xl": "2rem",
        "1sm": "0.8rem",
        "125sm": "1.25rem",
        default: "1rem",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1432px",
      },
    },
  },
  plugins: [],
};
