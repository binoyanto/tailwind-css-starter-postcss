const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
            fontFamily: 'Inter-roman.var',
            src: 'url(https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.13.1/Inter%20(web)/Inter-roman.var.woff2) format(\'woff2\')'
        }
      })
    }),
  ],
}
