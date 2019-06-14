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
          strapiArticle {
              id
              title
              standfirst
          }
      }
    `}
    render={data => (
    <nav>
        <div className="container">
          <div>
            <Link to={`articles/` + slugify(data.strapiArticle.title)}>
              <div className="chunk bubble blog shadow">
                <div className="">
                  <div className="">
                    <article key={data.strapiArticle.id} className="">
                      <h4 className="title"><Link to={`articles/` + slugify(data.strapiArticle.title)}>{data.strapiArticle.title}</Link></h4>      
                      <p className="title">{data.strapiArticle.standfirst}</p>      
                    </article>
                    </div>
                  </div>
                </div>
            </Link>
          </div>        
      </div>
    </nav>
    )}
/>
)

export default Nav


