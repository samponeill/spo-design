import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = () => (
<header className="grid-header">
<div className="logo header-container">
  <div className="chunk">
    <Link style={{border: 'none'}} to="/"><Logo></Logo></Link>
  </div>
</div>
<div className="nav shadow header-container"> 
  <div className="chunk">
    <div className="navigation">
      <ul className="navbar">
        <li><a href="/#clients">Work</a></li>
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
