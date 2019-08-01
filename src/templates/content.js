import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layouts'

export const query = graphql`
query ContentQuery($uid: String) {
  prismic{
    allContents(uid: $uid){
      edges{
        node{
          _meta{
            uid
            id
          }
          title
          rich_content
        }
      }
    }
  }
}
`

const RenderBody = ({ content }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>

    <article className="blog-post-article">
      <div className="blog-post-inner">
        <div className="blog-post-title">
          {RichText.render(content.title, linkResolver)}
        </div>
        <div className="blog-post-rich-content">
          {RichText.render(content.rich_content, linkResolver)}
        </div>
      </div>
    </article>

    <div data-wio-id={content._meta.id}></div>
  </React.Fragment>
)

const content = props => {
  const doc = props.data.prismic.allContents.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.title)}</title>
      </Helmet>
      <RenderBody content={doc.node} />
    </Layout>
  )
}

export default content;