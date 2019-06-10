import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 
import ReactMarkdown from 'react-markdown'

const PageTemplate = ({ data }) => (
  <Layout>
    <div className="row">
    <article style={{marginTop: "3rem"}} className="bubble offset-by-three six columns">
        <div className="">
          <h1 className="">{data.strapiPage.title}</h1>
        </div>
      <div className="">
        <ReactMarkdown source={data.strapiPage.content} />
      </div>
    </article>
    </div>    
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