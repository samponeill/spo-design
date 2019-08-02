import React from 'react'
import { Link as PrismicLink, RichText } from 'prismic-reactjs'
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
              <a className="cta-banner-link" href={PrismicLink.url(slice.primary.cta_link, linkResolver)}>
              {slice.primary.cta_label}
              </a>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </section>
