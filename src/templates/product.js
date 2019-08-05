import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import ImageSlice from '../components/slices/ImageSlice'
import Img from 'gatsby-image'

import Layout from '../components/layouts'

export const query = graphql`
query ProductQuery($uid: String) {
  prismic {
    allCase_studys(uid: $uid) {
      edges {
        node {
          _meta {
            type
            id
            uid
          }
          case_study_name
          case_study_image
          case_study_imageSharp {
            childImageSharp {
              fluid(maxWidth: 1900, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }   
          }
          sub_title
          rich_content
          button_label
          title
          case_study_description
          meta_description
          meta_title
          body {
            ... on PRISMIC_Case_studyBodySupporting_image {
              type
              label
              primary {
                image
                imageSharp {
                  childImageSharp {
                    fluid(maxWidth: 1900, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }   
                }
              }
            }
          }
          button_link {
            __typename
            ... on PRISMIC__ExternalLink {
              url
            }
            ... on PRISMIC_Case_study {
              case_study_image
              case_study_name
              button_link {
                ... on PRISMIC_Case_study {
                  case_study_name
                  _linkType
                }
              }
            }
            _linkType
          }
        }
      }
    }
  }
}
`
function handleClickAddCart(event) {
  event.preventDefault()
  window.alert(`No. Not today.\nWe're integrating the GraphQL API at the moment, so coffee delivery is temporarily unavailable.`)
}

const RenderSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'supporting_image': return (
          <div key={index} className="product-slice-wrapper">
            <ImageSlice slice={slice} />
          </div>
        )
        default: return
      }
    })();
    return res;
  })
}

const RenderBody = ({ product }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>

    <div className="product-sections-wrapper">
      <section>
        <div className="l-wrapper">
          <div className="product-hero-inner">
            <Img className="product-hero-image" fluid={product.case_study_imageSharp.childImageSharp.fluid} alt={product.case_study_image.alt} />
            <div className="product-hero-content">
              <div className="product-hero-name">
                {RichText.render(product.case_study_name, linkResolver)}
              </div>
              <div className="product-hero-rich-content">
                {RichText.render(product.rich_content, linkResolver)}
              </div>
              <div className="product-hero-button-wrapper">
                <a className="a-button a-button--filled" href={product.button_link.url} onClick={handleClickAddCart}>
                  {RichText.asText(product.button_label)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-description">
        <div className="l-wrapper">
          <div className="product-description-title">
            {RichText.render(product.title, linkResolver)}
          </div>
          <div className="product-description-content">
            {RichText.render(product.case_study_description, linkResolver)}
          </div>
          <div className="homepage-slices-wrapper">
            <RenderSlices slices={product.body} />
          </div>
        </div>
      </section>

      <div className="product-separator-wrapper">
        <div className="l-wrapper">
          <hr className="separator-hr" />
        </div>
      </div>

    </div>

    <div data-wio-id={product._meta.id}></div>
  </React.Fragment>
)

const Product = props => {
  const doc = props.data.prismic.allCase_studys.edges.slice(0,1).pop();
  if(!doc) return null;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.case_study_name)}</title>
      </Helmet>
      <RenderBody product={doc.node} />
    </Layout>
  )
}

export default Product