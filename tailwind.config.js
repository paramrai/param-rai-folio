/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6a64f",
        secondary: "b56141",
        background: "#fffcf8",
        white: "#fbfbfb",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #f4a44f,#ac573f)",
      },
    },
  },
  plugins: [],
};
