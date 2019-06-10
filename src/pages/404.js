import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
        <div className="container">
          <Link to="https://spo.design"><h1 style={{fontSize: '20vw'}}>404</h1></Link>
          <p>Get outta here</p>
        </div>
  </Layout>
)

export default NotFoundPage
