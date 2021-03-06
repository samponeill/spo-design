import React from 'react'

const Footer = () => (
<footer>
    <div className="container">
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
    <div className="chunk" style={{marginTop: "2rem", marginBottom: "4rem"}}>
        <span style={{fontSize: "4rem"}} role="img" arial-label="Peace sign or V sign">✌️</span>
    </div>
    </div>
</footer>
      );

  export default Footer