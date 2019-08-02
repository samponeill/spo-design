import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layouts'

export const query = graphql`
query ProductQuery($uid: String) {
  prismic{
    allCase_studys(uid: $uid){
      edges{
        node{
          _meta{
            type
            id
            uid
          }
          case_study_name
          case_study_image
          sub_title
          rich_content
          button_link{
            __typename
            ... on PRISMIC__ExternalLink{
              url
            }
          }
          button_label
          title
          case_study_description
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

const RenderBody = ({ product }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>

    <div className="product-sections-wrapper">
      <section>
        <div className="l-wrapper">
          <div className="product-hero-inner">
            <img className="product-hero-image" src={product.case_study_image.url} alt={product.case_study_image.alt} />
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