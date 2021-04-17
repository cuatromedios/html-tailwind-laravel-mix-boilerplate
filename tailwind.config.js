const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'sans': ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      secondary: {
        light: '#85d700',
        DEFAULT: '#1fb600',
        dark: '#009e00',
      },
      negative: colors.red,
      warning: colors.amber,
      positive: colors.green
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
