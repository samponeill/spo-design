import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle, menuLinks, tagline }) => (

<header className="">
  <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div className="container is-fluid">
      <div class="navbar-brand">
        <Link className="navbar-item logo" to="/">
          <Logo />
        </Link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true">
          {menuLinks.map(link =>
            <Link className="navbar-item" to={link.link}>{link.name}</Link>
          )}        
          </span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          {menuLinks.map(link =>
            <Link className="navbar-item" to={link.link}>{link.name}</Link>
          )}
        </div>
      </div>
  </div>
</nav>  
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
