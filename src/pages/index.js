import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from '../../node_modules/react-markdown'
import TextTruncate from 'react-text-truncate';


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
    <div className="columns container is-fluid">
      <div className="column is-two-thirds is-parent">
      {data.allStrapiArticle.edges.map(document => (
        <Link to={`articles/` + slugify(document.node.title)}>
          <div className="section">
            <div className="container">
              <article key={document.node.id} className="is-child box">
                <Img fluid={document.node.image.childImageSharp.fluid} class="image" alt="." />
                  <h3 className="title"><Link to={`articles/` + slugify(document.node.title)}>{document.node.title}</Link></h3>
                  <h4 className="subtitle">
                    {document.node.standfirst}
                  </h4>        
              </article>
            </div>
          </div>
        </Link>          
      ))}
      </div>
      <div className="column is-one-third is-parent">
        <article className="tile is-child box">
          <p className="title">Side column</p>
          <p className="subtitle">With some content</p>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>
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