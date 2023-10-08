/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const netflixTheme = require('./themes/netflix/netflix.theme.js')
const purpleTheme = require('./themes/purple/purple.theme.js')

module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: ['react', 'prettier-plugin-tailwindcss', nextui(
    {
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: { // common layout tokens (applied to all themes)
        // below ones are for all themes
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: { // dark theme colors
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "red",
          },
        },
        // ... custom themes
        purple: {
          ...purpleTheme
        },
        netflix: {
          ...netflixTheme,
        },
      },
    }
  )],
}

