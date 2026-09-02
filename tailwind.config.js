/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'terl-black': '#080808',
        'terl-near-black': '#121214',
        'terl-card-dark': '#17171a',
        'terl-card-dark-hover': '#202024',
        'terl-white': '#ffffff',
        'terl-off-white': '#f8f8f6',
        'terl-yellow': '#ffd400',
        'terl-yellow-hover': '#ffe033',
        'terl-gray-900': '#1a1a1a',
        'terl-gray-700': '#4a4a4a',
        'terl-gray-600': '#6b6b6b',
        'terl-gray-400': '#9e9e9a',
        'terl-gray-300': '#d4d4cf',
        'terl-gray-200': '#e8e8e3',
        'terl-border': '#e2e2dc',
        'terl-border-dark': '#26262a',
      },
      fontFamily: {
        'display': ['SpaceGrotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['IBMPlexMono', 'monospace'],
      }
    },
  },
  plugins: [],
}
