import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image';

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const TagTemplate = ({ data }) => (
    <Layout>
        <div className="grid">
        <div className="container"></div>
        <div className="container">         
          <div className="offset-by-three six columns" style={{marginTop: '1rem'}}>
            <h1>{data.strapiTag.name}</h1>
          </div>
          <div className="offset-by-three six columns">
            <p>Everything with the {data.strapiTag.name} tag</p>
          </div>
        </div>
        {data.strapiTag.articles.map(article => (
        <div>     
            <Link to={`articles/` + slugify(article.title)}>
              <div className="offset-by-three six columns bubble blog"> 
                <div className="">
                  <div className="">
                    <article key={article.id} className="">
                        <Img fluid={article.image.childImageSharp.fluid} class="image" alt="." />
                        <h3 className="title"><Link to={`articles/` + slugify(article.title)}>{article.title}</Link></h3>
                        <h4 className="subtitle">
                          {article.standfirst}
                        </h4>        
                    </article>
                  </div>
                </div>
              </div>
            </Link>          
          </div>
          ))}
          <div className="container"></div>
        </div>
    </Layout>
  )
  
export default TagTemplate

export const query = graphql`
  query TagTemplate($id: String!) {
    strapiTag(id: { eq: $id }) {
      id
      name
      articles {
        id
        title
        standfirst
        content
        image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }          
        }
      }
    }
  }
` 