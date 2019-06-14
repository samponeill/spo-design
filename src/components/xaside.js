import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

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
          {data.allStrapiArticle.edges.map(document => (
          <div>
            <Link to={`articles/` + slugify(document.node.title)}>
              <div className="chunk bubble blog"> 
                <div className="">
                  <div className="">
                    <article key={document.node.id} className="">
                      <h5 className="title"><Link to={`articles/` + slugify(document.node.title)}>{document.node.title}</Link></h5>      
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


