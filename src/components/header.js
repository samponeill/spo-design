import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = () => (
<header>
<div className="container">
<div className="chunk">
  <Link style={{border: 'none'}} to="/"><Logo></Logo></Link>
</div>
  <div className="chunk">
    <div className="navigation">
      <ul className="navbar">
        <li><a href="/#about">About</a></li>
        <li><a href="/#clients">Case studies</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#quotes">Testimonials</a></li>
        <li><a href="/#contact">Contact</a></li>             
        <li><a href="/blog">Design blog</a></li>             
      </ul>
    </div>        
  </div>
</div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.string,
  tagline: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: ``,  
  tagline: ``,  
}

export default Header
