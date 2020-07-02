/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// tailwindcss.config.js

const typography = require('@manishrc/tailwindcss-typography-js')
// console.log('typography', typography)
const parnassusTheme = require('typography-theme-parnassus')
// console.log('parnassusTheme', parnassusTheme)

// Option 1 - Using a configuration
// const typographyTheme = typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   headerFontFamily: ['Helvetica Neue', 'sans-serif'],
//   bodyFontFamily: ['Georgia', 'serif'],
// })

// Option 2 - Using a theme
const typographyTheme = typography(parnassusTheme)

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: [typographyTheme],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}

// Add to the plugin list.
// module.exports = {
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [typographyTheme],
//   corePlugins: {},
// };
