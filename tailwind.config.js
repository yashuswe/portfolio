/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 15%)", // Add this line
        background: "hsl(0, 0%, 4%)",
        foreground: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
