import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import slugify from 'react-slugify';

const TagTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiTag.name}</h1>
      <ul>
        {data.strapiTag.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/articles/${slugify(article.title)}`}>{article.title}</Link>
            </h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default TagTemplate

export const query = graphql`
  query TagTemplate($id: String!) {
    strapiTag(id: { eq: $id }) {
      id
      name
      articles {
        id
        title
        content
      }
    }
  }
` 