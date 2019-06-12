import React from 'react'
import Branding from '../static/services-01.svg'
import Marketing from '../static/services-02.svg'
import Websites from '../static/services-03.svg'
import Carousel from './carousels'
import ContactForm from './form'

const Content = () => (
            <main className="section">
            <div className="container item">
              <div className="chunk" style={{marginTop: '1rem'}}>
                <h1 className="hero">Straightforward design for small businesses.</h1>
              </div>
              <div className="chunk">
                <p>Looking to develop a brand identity, new website or whip up some marketing materials? You've come to the right&nbsp;place.</p>
                <a style={{border: 'none'}} href="#contact"><button className="shadow button">Get in touch</button></a>
              </div>
            <div className="divider chunk" id="about" />
            <div className="chunk">
              <h2>Why work with us?</h2>
              <p>We work exclusively with small businesses like yours. Why? because we are one ourselves. We've helped dozens of clients find their identity and create meaningful&nbsp;brands that people trust and&nbsp;value.</p>
              <h2>Our approach</h2>
              <p>We love developing design systems that can be applied across all your branding and marketing materials so everything you produce is cohesive and holds together across all your platforms and media.</p>
              <p>We can offer you anything from a comprehensive branding package complete with guidelines, website design and build, and marketing materials to a single package design, van decal or digital ad.</p>
            </div>
            <div className="divider chunk" id="services" />
            <div className="chunk">
              <h2>Services</h2>
            </div>
            <div className="bubble chunk">
                <img alt="Branding Icon in the shape of a parcel tag label" src={Branding} style={{maxHeight: '60px'}} />        
                <h3>Branding</h3>
                <p>Branding done well doesn't have to cost the Earth. Our approach is simple. We'll chat about your target market and requirements, to-and-fro over the design, create a set of guidelines and Bob's your uncle.</p>
                <p style={{display: 'none'}} className="prices">From £120</p>
                <button style={{display: 'none'}} className="shadow button">Find out more</button>
              </div>
            <div className="bubble chunk">
                <img alt="Website icon in the shape of a wire globe" src={Websites} style={{maxHeight: '60px'}} />        
                <h3>Websites</h3>
                <p>Want to take your business to the next level or give an existing site a makeover? We can make blazing fast single-pagers (like the one you're looking at), spruce up a Shopify or Wix page or go totally bespoke.</p>
                <p style={{display: 'none'}} className="prices">From £240</p>        
                <button style={{display: 'none'}} className="shadow button">Find out more</button>      
              </div>
              <div className="bubble chunk">
                <img alt="Marketing icon in the shape of an envelope" src={Marketing} style={{maxHeight: '60px'}} />        
                <h3>Marketing</h3>
                <p>We love getting eyeballs on our work – that's the name of the game. We can help with emails, digital display advertising, fliers, magazines, catalogues – you name it we can design it, get it out there and get it seen.</p>
                <p style={{display: 'none'}} className="prices">From £50</p>
                <button style={{display: 'none'}} className="shadow button">Find out more</button>         
              </div>      
            <Carousel></Carousel>            
            <div className="divider chunk" id="quotes" />
              <div className="chunk">
                <h2>Testimonials</h2>
              </div>

              <div className="chunk">
                <blockquote>I've worked with SPO Design for over 5 years now on a wide range of projects and clients. Each and every time we work together I'm impressed with their creativity and commitment to their&nbsp;work.</blockquote>
                <cite>– James Longhurst, Director, Clear Eyes Media</cite>
              </div>


              <div className="chunk" style={{marginBottom: '3rem'}}>
                <blockquote>SPO Design helped us with our rebrand in record time. They made things extremely clear and straightforward and were great to work with</blockquote>
                <cite>– Tessa Cooper, Founder, Collaborative Future</cite>
              </div>      

            <div className="divider chunk" id="contact" />

              <div className="chunk">
                <h2>Get in touch</h2>
              </div>

            <ContactForm></ContactForm>
            </div>
          </main>
      );

  export default Content