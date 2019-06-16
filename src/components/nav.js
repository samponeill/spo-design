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

const Nav = () => (
  <StaticQuery
    query={graphql`
      query navQuery {
          allArticle(
            sort: {fields: created_at, order: DESC},
            limit: 1
          ) {
            edges {
              node {
                id
                title
                standfirst
                draft
            }
          }
        }
      }
    `}
    render={data => (
    <nav>
        <div className="container">
          <div>
          {data.allArticle.edges.map(document => (
            <Link to={`articles/` + slugify(document.node.title)}>
              <div className="chunk bubble blog shadow">
                <div className="">
                  <div className="">
                    <article key={document.node.id} className="">
                      <h4 className="title"><Link to={`articles/` + slugify(document.node.title)}>{document.node.title}</Link></h4>      
                      <p className="title">{document.node.standfirst}</p>      
                    </article>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
          </div>        
      </div>
    </nav>
    )}
/>
)

export default Nav


