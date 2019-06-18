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
        <Img alt={data.strapiLogo.alt} fluid={data.strapiLogo.logo.childImageSharp.fluid} />
      </>
    )}
  />
)

export default Logo
