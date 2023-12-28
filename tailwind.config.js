/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  theme: {
    extend: {
      backgroundImage:{
        'bgMobile': "url('./images/background-pattern-mobile.svg')",
        'bgDesktop': "url('./images/background-pattern-desktop.svg')"
    },
    backgroundColor: theme => ({
      ...theme('color'),
      'White': '##ffffff',
      'Light-pink': '#f9f0ff',
      'Grayish-purple': '#a249cd',
      'Dark-purple': '#2f1533',
    }),
    textColor: {
      'White': '##ffffff',
      'Light-pink': '#f9f0ff',
      'Paragraph': '#b4acb5',
      'Grayish-purple': '#a249cd',
      'Dark-purple': '#2f1533',
    },
    fontFamily: {
      Workans: ['Work Sans', 'sans-serif'],
    }
  
  },
  },
  plugins: [],
}

