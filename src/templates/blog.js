import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"

import "../styles/_blog.scss"

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};


const IndexPage = ({ data, pageContext }) => (
  <Layout className="blog-index">
    <SEO title="Buy it for life: designs to last a lifetime" />
    <main>
        <div className="container">
          <div className="chunk" style={{marginTop: '1rem'}}>
            <h1>Buy it for life blog</h1>
          </div>
          <div className="chunk">
            <p>Hi there <span role="image" aria-label="Waving hand">👋</span></p>
            <p>Welcome to the BIFL blog where we will be showcasing our favourite designs with a focus on real-world products that are designed to last.</p>
            <p>We believe durability, sustainability, and utility are intrinsic to great design and will be scouring the planet for anything and everything that is practical, long-lasting, and doesn't cost the earth.</p>
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
      <div className="pagination">
        <div>
          {pageContext.previousPagePath ? <Link to={pageContext.previousPagePath}>&#60; Previous</Link> : null}
          {pageContext.nextPagePath ? <Link to={pageContext.nextPagePath}>Next&#62;</Link> : null}
        </div>
      </div>        
    </main>
    <script async src={"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}></script>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery($skip: Int!, $limit: Int!) {
    allStrapiArticle(
      sort: {fields: created_at, order: DESC}
      skip: $skip 
      limit: $limit
    ) {    
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
          draft
        }
      }
    }
  }
`