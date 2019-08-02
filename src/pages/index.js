import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { graphql } from 'gatsby';
import { CTABanner, FeaturedItems, NumberedItems, Separator, TextBlock } from '../components/slices'
import Img from 'gatsby-image'

import Layout from '../components/layouts'

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node{
          _meta{
            uid
            id
            type
          }
          title
          banner_image
          banner_imageSharp {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }            
          }          
          banner_text
          cta_label
          body {
            __typename
            ... on PRISMIC_HomepageBodyFeatured_items {
              type
              primary {
                section_title
                button_label
                button_link{
                  __typename
                  ... on PRISMIC_Case_study {
                    title
                    _meta {
                      uid
                      id
                      lang
                      type
                      tags
                    }
                  }
                }
              }
              fields {
                link_to_product {
                  __typename
                  _linkType
                  ... on PRISMIC_Case_study {
                    case_study_name
                    case_study_image
                    case_study_imageSharp {
                      childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }            
                    }                    
                    sub_title
                    _meta{
                      uid
                      id
                      lang
                      type
                      tags
                    }
                  }
                }
              }
            }
            ... on PRISMIC_HomepageBodyCta_banner {
              type
              primary {
                image_banner
                image_bannerSharp {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }            
                }                
                banner_title
                banner_text
                cta_label
                cta_link {
                  __typename
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
            ... on PRISMIC_HomepageBodyBig_bullet_item {
              type
              primary {
                title_section
              }
              fields {
                description_paragraph
              }
            }
            ... on PRISMIC_HomepageBodySeparator {
              type
            }
            ... on PRISMIC_HomepageBodyText_block {
              type
              primary {
                title1
                paragraph
              }
            }
          }
        }
      }
    }
  }
}
`

const RenderSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'cta_banner': return (
          <div key={index} className="homepage-slice-wrapper">
            <CTABanner slice={slice} />
          </div>
        )

        case 'featured_items': return (
          <div key={index} className="homepage-slice-wrapper">
            <FeaturedItems slice={slice} />
          </div>
        )

        case 'big_bullet_item': return (
          <div key={index} className="homepage-slice-wrapper">
            <NumberedItems slice={slice} />
          </div>
        )

        case 'separator': return (
          <div key={index} className="homepage-slice-wrapper">
            <Separator />
          </div>
        )

        case 'text_block': return (
          <div key={index} className="homepage-slice-wrapper">
            <TextBlock slice={slice} />
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

const RenderIndexBody = ({ home }) => (
  <React.Fragment>
    <header className="homepage-header">
      <div className="l-wrapper">
        <div className="homepage-header-title">
          {RichText.render(home.title, linkResolver)}
        </div>
      </div>
    </header>

    <section className="homepage-banner">
      <Img className="homepage-banner-image" fluid={home.banner_imageSharp.childImageSharp.fluid} alt={home.banner_image.alt} />
      <div className="homepage-banner-box-wrapper">
        <div className="homepage-banner-box">
        {RichText.render(home.banner_text, linkResolver)}   
        </div>
      </div>
    </section>

    <div className="homepage-slices-wrapper">
      <RenderSlices slices={home.body} />
    </div>
  </React.Fragment>
);

export default ({ data }) => {
  // Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0,1).pop();
  if(!doc) return console.log(doc);
  
  return(
    <Layout>
      <RenderIndexBody home={doc.node} />
    </Layout>
  )

}

