import React from 'react'
import Img from 'gatsby-image'

export default ({ slice }) =>
  <div className="product-supporting-image-inner">
    <Img className="product-supporting-image" fluid={slice.primary.imageSharp.childImageSharp.fluid} alt={slice.primary.image.alt} />
  </div>
