/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quantum-purple': '#6C3CE9',
        'quantum-blue': '#00D4FF',
        'quantum-dark': '#1A1A2E',
        'quantum-light': '#E6E6FA',
        'quantum-secondary': '#FF00FF',
        'quantum-teal': '#00FFCC',
        'quantum-pink': '#FF6EFF',
        'quantum-navy': '#0F0F1A',
        'quantum-primary': '#6C3CE9',
      },
      fontFamily: {
        'quantum': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
