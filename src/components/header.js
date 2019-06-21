import { Link, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef }  from "react"
import Logo from "./logo"
import Helmet from "react-helmet"

const Header = () => (
<>
<Helmet>
  <script type="text/javascript">
    {`
        const headerEl = document.querySelector('.grid-header')
        const sentinalEl = document.querySelector('.hero-banner')

        if (sentinalEl == undefined) {
          headerEl.classList.add('enabled','shadow');
        } else {
        
        const handler = (entries) => {          
          // entries is an array of observed dom nodes
          // we're only interested in the first one at [0]
          // because that's our .sentinal node.
          // Here observe whether or not that node is in the viewport
          if (!entries[0].isIntersecting) {
            headerEl.classList.add('enabled','shadow')
            console.log("Look Ma, no scroll event")
          } else {
            headerEl.classList.remove('enabled','shadow')
          }
        }

        }
        
        // create the observer
        const observer = new window.IntersectionObserver(handler)
        // give the observer some dom nodes to keep an eye on
        observer.observe(sentinalEl)
      
    `}
  </script>
</Helmet>
<header className="grid-header">
<div className="logo header-container">
  <div className="chunk">
    <Link style={{border: 'none'}} to="/"><Logo></Logo></Link>
  </div>
</div>
<div className="nav header-container"> 
  <div className="chunk">
    <div className="navigation">
      <ul className="navbar">
        <li><a href="/#clients">Work</a></li>
        <li><a href="/contact">Contact</a></li>             
        <li><a href="/blog">Design blog</a></li>             
      </ul>
    </div>        
  </div>
</div>
</header>
</>
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
