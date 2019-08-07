import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"
import { linkResolver } from '../../utils/linkResolver'
import Img from 'gatsby-image'

export default ({ slice }) =>
  <section>
    <div className="cta-banner-inner">
      <Img className="cta-banner-image" fluid={slice.primary.image_bannerSharp.childImageSharp.fluid} alt={slice.primary.image_banner.alt} />
      <div className="cta-banner-content">
        <div className="cta-banner-box">
          <div className="cta-banner-title">
            {RichText.render(slice.primary.banner_title, linkResolver)}
          </div>
          <div className="cta-banner-text">
            {RichText.render(slice.primary.banner_text, linkResolver)}
            <div className="cta-banner-link-wrapper">
              {console.log(slice.primary.cta_link)}
              <Link className="cta-banner-link" to={linkResolver(slice.primary.cta_link._meta)}>
                {slice.primary.cta_label}
              </Link>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </section>
