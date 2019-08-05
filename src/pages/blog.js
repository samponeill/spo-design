import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layouts'

export const query = graphql`
{
  prismic{
    allBlog_homes(uid:null){
      edges{
        node{
          meta_title
          meta_description
          _meta{
            uid
            id
            type
          }
        }
      }
    }
    allBlog_posts{
      edges{
        node{
          _meta{
            uid
            id
            type
          }
          title
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }            
          }
          rich_content        
        }
      }
    }
  }
}
`

const RenderPosts = ({ posts }) => {
  return posts.map((item) =>
    <div key={item.node._meta.uid} className="blog-home-post-wrapper">
      <article>
        <Img className="blog-home-post-image" fluid={item.node.imageSharp.childImageSharp.fluid} alt={item.node.image.alt} />
        <h2 className="blog-home-post-title">
          {RichText.asText(item.node.title)}
        </h2>
        <p className="blog-home-post-excerpt">
          {RichText.asText(item.node.rich_content).substring(0, 158)} …
        </p>
        <div className="blog-home-post-button-wrapper">
          <Link className="a-button" to={linkResolver(item.node._meta)}>
            Read post
          </Link>
        </div>
      </article>
    </div>
  )
}

const RenderBody = ({ blogHome, posts }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>

    <section className="blog-home-section">
    <div className="l-wrapper">
        <header className="blog-grid-header">
          <div className="blog-grid-header-title">
            <h1>
              {blogHome.meta_title[0].text}
            </h1>
          </div>
          <div className="blog-grid-header-subtitle">
            <p>{blogHome.meta_description[0].text}</p>
          </div>
        </header>
      </div>
      <div className="blog-home-posts-wrapper">
        <RenderPosts posts={posts} />
      </div>
    </section>

    <div data-wio-id={blogHome._meta.id}></div>
  </React.Fragment>
)

export default ({ data }) => {
  const doc = data.prismic.allBlog_homes.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.meta_title)}</title>
      </Helmet>
      <RenderBody blogHome={doc.node} posts={data.prismic.allBlog_posts.edges} />
    </Layout>
  );
}