/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//import "./node_modules/slick-carousel/slick/slick.css"
import "./node_modules/slick-carousel/slick/slick-theme.css"
import "./src/styles/global.scss"
//import "./src/script/main.js"

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }