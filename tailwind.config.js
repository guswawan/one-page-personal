/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      // backgroundImage: {
      //   'yellow-card': "url('public/card-background.png')",
      // },
    },
  },
  plugins: [],
};
