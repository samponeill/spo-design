import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layouts'

export const query = graphql`
{
  prismic{
    allWorks(uid:null){
      edges{
        node{
          title
          meta_title
          meta_description
          _meta{
            uid
            id
            type
          }
        }
      }
    }
    allCase_studys{
      edges{
        node{
          _meta{
            type
            id
            uid
          }
          case_study_name
          case_study_image
          case_study_imageSharp {
            childImageSharp {
              fluid(maxWidth: 500, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }        
          }
          sub_title
        }
      }
    }
  }
}
`

const RenderProductList = ({ products }) => {
  return products.map((item) =>
    <div key={item.node._meta.uid} className="products-grid-item-wrapper">
      <Link to={linkResolver(item.node._meta)}>
        <Img className="products-grid-item-image" fluid={item.node.case_study_imageSharp.childImageSharp.fluid} alt={item.node.case_study_image.alt}/>
        <p className="products-grid-item-name">
            {RichText.asText(item.node.case_study_name)}
        </p>
      </Link>
      <p className="products-grid-item-subtitle">{RichText.asText(item.node.sub_title)}</p>
    </div>
  )
}

const RenderBody = ({ productHome, products }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>

    <section className="products-section">
      <div className="l-wrapper">
        <header className="products-grid-header">
          <div className="products-grid-header-title">
            {RichText.render(productHome.title, linkResolver)}
          </div>
        </header>
      </div>
      <div className="products-grid-items-wrapper">
        <RenderProductList products={products} />
      </div>
    </section>

    <div data-wio-id={productHome._meta.id}></div>
  </React.Fragment>
)


export default ({ data }) => {
  const doc = data.prismic.allWorks.edges.slice(0,1).pop();
  if(!doc) return null;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.title)}</title>
      </Helmet>
      <RenderBody productHome={doc.node} products={data.prismic.allCase_studys.edges} />
    </Layout>
  );
}
