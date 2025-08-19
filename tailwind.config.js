/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        ttuPattern: "url('https://picsum.photos/450/300?grayscale')",
      },
    },
  },
  plugins: [require('daisyui')],
}