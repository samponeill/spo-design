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
                fixed(height: 65) {
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
      <Img alt={data.strapiLogo.alt} alt="SPO Design Co logo" style={{margin: '6rem auto 3rem'}} fixed={data.strapiLogo.logo.childImageSharp.fixed} />
      </>
    )}
  />
)

export default Logo
