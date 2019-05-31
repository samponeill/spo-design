import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        strapiLogo {
          logo {
            childImageSharp {
                fixed(width: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
          }
          alt
          strapline
        }
      }
    `}
    render={data => (
      <>
      <Img alt={data.strapiLogo.alt} fixed={data.strapiLogo.logo.childImageSharp.fixed} />
      <p>{data.strapiLogo.strapline}</p>
      </>
    )}
  />
)

export default Logo
