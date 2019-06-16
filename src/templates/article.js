import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import SEO from '../components/seo'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const ArticleTemplate = ({ data, pageContext }) => (
  <Layout>
    <SEO title={data.article.title} />
    <main>
      <div className="container">
        <article className="column blog">
            <div className="">
              <Img alt={data.article.alt} className="" fluid={data.article.image.childImageSharp.fluid} />
              <h1 className="headline">{data.article.title}</h1>
              <h2 className="standfirst">
                {data.article.standfirst}
              </h2>
              <p className="">
                By <Link to={`/contributors/${slugify(data.article.author.username)}`}>{data.article.author.username}</Link>
              </p>
              <p>Tags:</p>
              <ul className="">{data.article.tags.map(number => (
                <li className="shadow tags"><Link to={`/tags/${slugify(number.name)}`}>{number.name}</Link></li>
              ))}</ul>
              <div style={{margin: "0 0 4rem 0"}} className="divider"></div>
            </div>
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: data.article.childMarkdownRemark.html }} />
          </div>
          <div style={{margin: "0 0 4rem 0"}} className="divider"></div>
        </article>
      </div>
      <div className="pagination">
        <div>
          {pageContext.nextPagePath ? <Link to={pageContext.nextPagePath}>Next article&#62;</Link> : null}
        </div>
      </div>              
      <TalkyardCommentsIframe />
      </main>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    article(id: { eq: $id }) {
      title
      childMarkdownRemark {
        html
      }
      standfirst
      tags {
          id
          name
      }
      author {
        id
        username
      }      
      alt
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }    
  }
`;