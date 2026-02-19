/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Rich Black for deep dark mode
        primary: '#ffffff',    // White text
        secondary: '#a1a1aa',  // Muted gray for secondary text
        accent: '#3498db',     // Keep existing blue or tweak to match
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'], // For Headings
      },
    },
  },
  plugins: [],
}
