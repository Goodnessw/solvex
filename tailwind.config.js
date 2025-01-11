// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // You can customize the primary color
        secondary: '#edf2f7', // Secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example of using a custom font
      },
    },
  },
  plugins: [],
}
