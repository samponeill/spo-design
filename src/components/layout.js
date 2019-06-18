/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Background from "./background"
import Header from "./header"
import Nav from "./nav"
import Aside from "./aside"
import Footer from "./footer"
import Hero from "./hero"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Background></Background>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} tagline={data.site.siteMetadata.tagline} />
        <Hero />
        <div className="grid">
          <Nav></Nav>
          {children}
          <Aside></Aside>
          <Footer></Footer>            
        </div>        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
