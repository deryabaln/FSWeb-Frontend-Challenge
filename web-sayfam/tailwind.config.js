/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hero-bg": "#2A262B",
        "circle-bg": "#525252",
        "skills-bg": "#484148",
        "darkmode-text": "#777777",
        "skills-h1": "#F4F4F4",
        "skills-text": "#D9D9D9",
        "pinky": "#EA2678",
        "project1": "#2D3235",
        "project2": "#495351",
        "github": "#1769FF",
        "linkedin": "#0077B5",
        "email": "#AF0C48",
      }
    },
  },
  plugins: [],
}

