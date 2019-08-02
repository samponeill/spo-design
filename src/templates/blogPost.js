import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/layouts'

export const query = graphql`
query BlogPostQuery($uid: String) {
  prismic{
    allBlog_posts(uid: $uid){
      edges{
        node{
          _meta{
            uid
            id
          }
          author{
            _linkType
            ... on PRISMIC_Author{
              name
              bio
              picture
              pictureSharp {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }            
              }              
            }
          }
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }            
          }          
          title
          rich_content
        }
      }
    }
  }
}
`

const RenderBody = ({ blogPost }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>

    <article className="blog-post-article">
      <div className="l-wrapper blog-post-image-wrapper">
        <Img className="blog-post-image" fluid={blogPost.imageSharp.childImageSharp.fluid} alt={blogPost.image.alt}/>
      </div>      
      <div className="blog-post-inner">
        <div className="blog-post-title">
          {RichText.render(blogPost.title, linkResolver)}
        </div>
        <div className="blog-post-rich-content">
          {RichText.render(blogPost.rich_content, linkResolver)}
        </div>
        <div className="blog-post-author-wrapper">
          {blogPost.author && blogPost.author.picture
            ? <Img className="blog-post-author-picture" fluid={blogPost.author.pictureSharp.childImageSharp.fluid} alt={blogPost.author.picture.alt} />
            : ''
          }
          <div>
            {blogPost.author && blogPost.author.name
              ? <p className="blog-post-author-name">{RichText.asText(blogPost.author.name)}</p>
              : ''
            }
            {blogPost.author && blogPost.author.bio
              ? <p className="blog-post-author-bio">{RichText.asText(blogPost.author.bio)}</p>
              : ''
            }
          </div>
        </div>
      </div>
    </article>

    <div data-wio-id={blogPost._meta.id}></div>
  </React.Fragment>
)

const BlogPost = props => {
  const doc = props.data.prismic.allBlog_posts.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.title)}</title>
      </Helmet>
      <RenderBody blogPost={doc.node} />
    </Layout>
  )
}

export default BlogPost;