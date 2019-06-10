import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const UserTemplate = ({ data }) => (
    <Layout>
            <div>
            <div className="container">         
              <div className="column" style={{marginTop: '1rem'}}>
                <h1>{data.strapiUser.username}</h1>
              </div>
              <div className="column">
                <p>Everything by {data.strapiUser.username}</p>
              </div>
            </div>
            {data.strapiUser.articles.map(article => (
            <div className="container">     
                <Link to={`articles/` + slugify(article.title)}>
                  <div className="column bubble blog"> 
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
            </div>
    </Layout>
  )
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
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