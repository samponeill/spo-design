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
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
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
        {data.strapiLogo.alt}
      </>
    )}
  />
)

export default Logo
