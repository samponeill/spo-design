import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
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

const Aside = () => (
    <StaticQuery
        query={graphql`
            query asideQuery {
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
        `}
    render={data => (
    <aside>
        <div className="container">
          <div className="chunk" style={{marginTop: '1rem'}}>
            <h1>Buy it for life blog</h1>
          </div>
          <div className="chunk">
            <p>Latest from the blog</p>
          </div>
          {data.allStrapiArticle.edges.map(document => (
          <div>
            <Link to={`articles/` + slugify(document.node.title)}>
              <div className="chunk bubble blog"> 
                <div className="">
                  <div className="">
                    <article key={document.node.id} className="">
                      <h3 className="title"><Link to={`articles/` + slugify(document.node.title)}>{document.node.title}</Link></h3>      
                    </article>
                    </div>
                  </div>
                </div>
            </Link>
          </div>        
          ))}
      </div>
    </aside>
    )}
/>
)

export default Aside


