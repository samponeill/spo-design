import React from 'react'
import Disect from '../static/blob.svg'
import { useSpring, animated } from "react-spring"

import "../styles/_overrides.scss"
import "../styles/_hero.scss"
import "../styles/_header.scss"

const Hero = ( ) => (
    <>
        <div className="hero-banner">
            <animated.div className="hero-skin" style={
                    useSpring({
                        opacity: "1",
                        from : {
                            opacity: "0",
                        }
                    })
                }>
                <div className="hero-wrapper">                        
                    <div className="chunk" style={{marginTop: '0.5'}}>
                        <img alt="Mobile phone illustration" src={Disect} style={{maxHeight: '160px'}} />
                        <h1 className="hero">Straightforward design for small businesses.</h1>
                    </div>
                    <div className="chunk">
                        <p>Looking to develop a brand identity, new website or whip up some marketing materials? We can help you stand&nbsp;out</p>
                    </div>           
                </div>
            </animated.div>
            <div className="hero-skin">
            </div>            
        </div>
    </>
);

export default Hero

