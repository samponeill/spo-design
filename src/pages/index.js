import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <SEO title="Straightforward, ethical design for small businesses" />
      <Content className="index-content"></Content>
    </Layout>
  </>
)

export default IndexPage
