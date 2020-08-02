import Typography from "typography"
import altonTheme from "typography-theme-alton"

const typography = new Typography(altonTheme)

/* 
Base styling: 
baseFontSize: "18px"
baseLineHeight: 1.45
blockMarginBottom: 0.8
bodyColor: "black"
bodyFontFamily: (2) ["Open Sans", "sans-serif"]
bodyWeight: 400
boldWeight: 700
googleFonts: (2) [{…}, {…}]
headerFontFamily: (2) ["Belgrano", "sans-serif"]
headerWeight: 700
overrideStyles: ƒ overrideStyles(_ref, options)
title: "Alton"
__proto__: Object
*/

altonTheme.googleFonts[0] = { name: "Belgrano", styles: ["400"] }
altonTheme.headerFontFamily[0] = "Belgrano"

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
