import React from 'react'
import Disect from '../static/dissect.svg'

import "../styles/_overrides.scss"
import "../styles/_hero.scss"
import "../styles/_header.scss"


const Hero = ( ) => (
    <>
        <div className="hero-banner">
            <div className="hero-skin" style={{background: "#333"}}>
                <div className="hero-wrapper">                        
                    <div className="chunk" style={{marginTop: '0.5'}}>
                        <img alt="Website icon in the shape of a wire globe" src={Disect} style={{maxHeight: '160px'}} />
                        <h1 className="hero">Straightforward design for small businesses.</h1>
                    </div>
                    <div className="chunk">
                        <p>Looking to develop a brand identity, new website or whip up some marketing materials? You've come to the right&nbsp;place.</p>
                    </div>           
                </div>
            </div>
            <div className="hero-skin">
            </div>            
        </div>
    </>
);

export default Hero

