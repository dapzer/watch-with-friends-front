/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 20px rgba(0,0,0,.4)",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "3.5xl": "2rem",
        "1sm": "0.8rem",
        "1.25sm": "1.25rem",
        default: "1rem",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        default: "1432px",
      },
    },
  },
  plugins: [],
};
