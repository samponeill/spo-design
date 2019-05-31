import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 
import ReactMarkdown from 'react-markdown'
import slugify from 'react-slugify';

const PageTemplate = ({ data }) => (
  <Layout>
    <article className="post">
      <h3 className="ph0 pv2 f1 b mv0">{data.strapiPage.title}</h3>
      <div className="center pv0 lh-copy ph0">
        <ReactMarkdown source={data.strapiPage.content} />
      </div>
    </article>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplate($id: String!) {
    strapiPage(id: { eq: $id }) {
      title
      content  
    }    
  }
`;