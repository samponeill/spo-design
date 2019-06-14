import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import ReactMarkdown from '../../node_modules/react-markdown'
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

const ArticleTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiArticle.title} />
    <main>
      <div className="container">
        <article className="column blog">
            <div className="">
              <Img className="" fluid={data.strapiArticle.image.childImageSharp.fluid} />
              <h1 className="headline">{data.strapiArticle.title}</h1>
              <h2 className="standfirst">
                {data.strapiArticle.standfirst}
              </h2>
              <p className="">
                By <Link to={`/contributors/${slugify(data.strapiArticle.author.username)}`}>{data.strapiArticle.author.username}</Link>
              </p>
              <p>Tags:</p>
              <ul className="">{data.strapiArticle.tags.map(number => (
                <li className="shadow tags"><Link to={`/tags/${slugify(number.name)}`}>{number.name}</Link></li>
              ))}</ul>
              <div style={{margin: "0 0 4rem 0"}} className="divider"></div>
            </div>
          <div className="">
            <ReactMarkdown source={data.strapiArticle.content} />
          </div>
          <div style={{margin: "0 0 4rem 0"}} className="divider"></div>
        </article>
      </div>
      <TalkyardCommentsIframe />
      </main>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(
      draft: { eq: 0 }
      id: { eq: $id }) {
      title
      content
      standfirst
      tags {
          id
          name
      }
      author {
        id
        username
      }      
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