import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { linkResolver } from '../utils/linkResolver'
import ContactForm from "../components/slices/ContactForm"

import Layout from '../components/layouts'

export const query = graphql`
query FormQuery($uid: String) {
    prismic {
        allForms(uid: $uid) {
          edges {
            node {
              _linkType
              form_name
              label_one
              label_three
              label_two
              _meta {
                id
                type
              }
            }
          }
        }
      }
}
`

const RenderBody = ({ form }) => (
  <React.Fragment>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>      
    <div className="blog-post-article">
        <div className="blog-post-inner">
            <div className="blog-post-title">
                <h1>{RichText.render(form.form_name, linkResolver)}</h1>
            </div>
            <div className="blog-post-rich-content">
                <p>Want to talk about your project? Let's have a no-strings-attached chat and see how we can help you stand out</p>
                <ContactForm></ContactForm>
            </div>
        </div>
    </div>
    <div data-wio-id={form._meta.id}></div>
  </React.Fragment>
)

const form = props => {
  const doc = props.data.prismic.allForms.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.form_name)}</title>
      </Helmet>
      <RenderBody form={doc.node} />
    </Layout>
  )
}

export default form;


