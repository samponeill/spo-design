import React from 'react'
import { Link, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout' 
import ReactMarkdown from '../../node_modules/react-markdown'
import slugify from 'react-slugify';

const ArticleTemplate = ({ data }) => (
  <Layout>
    <article className="post">
      <BackgroundImage className="" fluid={data.strapiArticle.image.childImageSharp.fluid}>
        <div className="">   
          <h3 className="">{data.strapiArticle.title}</h3>
          <h4 className="">
            {data.strapiArticle.standfirst}
          </h4>
          <p className="">
            <Link to={`/contributors/${slugify(data.strapiArticle.author.username)}`}>{data.strapiArticle.author.username}</Link>
          </p>
          <ul className="">{data.strapiArticle.tags.map(number => (
            <li className="tags"><Link to={`/tags/${slugify(number.name)}`}>{number.name}</Link></li>
          ))}</ul>        
        </div>
      </BackgroundImage>
      <div className="">
        <ReactMarkdown source={data.strapiArticle.content} />
      </div>
    </article>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
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