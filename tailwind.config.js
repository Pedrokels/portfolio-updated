/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Arial', 'sans-serif']
        // sans: ['Fira Code', 'monospace'],
        // mono: ['Fira Code', 'monospace']
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
