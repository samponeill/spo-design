import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Buy it for life: the best things are designed to last a lifetime" />
    <main>
        <div className="container">
          <div className="chunk" style={{marginTop: '1rem'}}>
            <h1>Buy it for life</h1>
          </div>
          <div className="chunk">
            <p>We believe durability and utility are intrinsic to great design. Here we have put together a showcase of out favourite designs.</p>
          </div>
          {data.allStrapiArticle.edges.map(document => (
          <div>
            <Link to={`articles/` + slugify(document.node.title)}>
              <div className="chunk bubble blog"> 
                <div className="">
                  <div className="">
                    <article key={document.node.id} className="">
                      <Img fluid={document.node.image.childImageSharp.fluid} class="image" alt="." />
                      <h3 className="title"><Link to={`articles/` + slugify(document.node.title)}>{document.node.title}</Link></h3>
                      <h4 className="standfirst">
                        {document.node.standfirst}
                      </h4>        
                    </article>
                    </div>
                  </div>
                </div>
            </Link>
          </div>        
          ))}
      </div>
    </main>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          standfirst
          content
        }
      }
    }
  }
`