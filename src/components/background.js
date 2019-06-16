import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const bgStyle = {
    position: 'fixed',
    display: 'block',
    width: '100vw',
    height: '100vh',
    zIndex: '-100',
    opacity: '0.5'
};

const Background = () => (
  <StaticQuery
    query={graphql`
      query BackgroundQuery {
        strapiBackground {
          pattern {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <BackgroundImage alt="" style={bgStyle} fluid={data.strapiBackground.pattern.childImageSharp.fluid} />
      </>
    )}
  />
)

export default Background
