import React from 'react'
import Slider from "react-slick";
import LandseerKeel01 from '../static/Old-Display.png'
import LandseerKeel02 from '../static/bottle-mock.png'
import LandseerKeel03 from '../static/Stack-Update.png'

import Urban01 from '../static/Old-Display-urban-falafel.png'
import Urban02 from '../static/instax-falafel.png'
import Urban03 from '../static/uf-businesscards.png'

class Carousel extends React.Component {
    render() {
      var settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 550,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1
            }
          }
        ]
      };
      return (
          <div>
            <div className="divider chunk" id="clients" />
            <div className="container">
              <div className="chunk">
                <h2>Case studies</h2>
                <p>We've been helping businesses be more stylish for almost a decade. Here's a selection of our favourites to feast your eyes&nbsp;on&nbsp;…</p>
              </div>
            </div>
              <div className="chunk">
                <h3><a href="https://www.landseerandkeel.co.uk">Landseer and Keel</a></h3>
                <p>Landseer and Keel's vision is to provide sustainable tools, homeware, and outdoor kit with a focus on utility and durability.</p>
                <p>To reflect this, we worked together to create a brand that would stand the test of time much like the shop's products. By utilising natural hues and combining them with strong yet warm imagery we really connected with the brand's values of environmentalism and mental wellbeing.</p>
              </div>  
              <div className="chunk">
                <div className="carousel bubble" style={{padding: '5rem 0'}}>
                <Slider {...settings}>
                  <div className="image"><img alt="Apple MacBook with Landseer and Keel website on the display" src={LandseerKeel01} /></div>
                  <div className="image"><img alt="Landseer and Keel brand rubbing alcohol bottle" src={LandseerKeel02} /></div>
                  <div className="image"><img alt="Landseer and Keel business plan booklet" src={LandseerKeel03} /></div> 
                  <div className="image"><img alt="Apple MacBook with Landseer and Keel website on the display" src={LandseerKeel01} /></div>
                  <div className="image"><img alt="Landseer and Keel brand rubbing alcohol bottle" src={LandseerKeel02} /></div>
                  <div className="image"><img alt="Landseer and Keel business plan booklet" src={LandseerKeel03} /></div> 
                  <div className="image"><img alt="Apple MacBook with Landseer and Keel website on the display" src={LandseerKeel01} /></div>
                  <div className="image"><img alt="Landseer and Keel brand rubbing alcohol bottle" src={LandseerKeel02} /></div>
                  <div className="image"><img alt="Landseer and Keel business plan booklet" src={LandseerKeel03} /></div> 
                  <div className="image"><img alt="Apple MacBook with Landseer and Keel website on the display" src={LandseerKeel01} /></div>
                  <div className="image"><img alt="Landseer and Keel brand rubbing alcohol bottle" src={LandseerKeel02} /></div>
                  <div className="image"><img alt="Landseer and Keel business plan booklet" src={LandseerKeel03} /></div>                   
                </Slider>
                </div>
              </div>
              <div className="chunk">
                <h3><a href="https://www.instagram.com/urbanfalafel1/?hl=en">Urban Falafel</a></h3>
                <p>Urban Falafel is a street food vendor based in London that sells delicious vegan salads and wraps. We were approached because the owner was having trouble getting spots and entering competitions without a website. They also wanted to move out of the marquee and into a brand new food truck.</p>
                <p>At the onset we knew we wanted a look that was fresh and bold, that stood out from the crowd. Using an existing colour scheme we created a design that could be applied to the food truck to appeal to the desired audience as well as to the website and marketing materials for maximum effect.</p>
              </div>  
              <div className="chunk">
                <div className="carousel bubble" style={{padding: '5rem 0'}}>
                  <Slider {...settings}>
                  <div className="image"><img alt="Apple MacBook with Urban Falafel website on display" src={Urban01} /></div>
                  <div className="image"><img alt="Three Instax photos of the Urban Falafel food truck stacked on top of each other" src={Urban02} /></div>
                  <div className="image"><img alt="A stack of Urban Falafel business cards" src={Urban03} /></div>
                  <div className="image"><img alt="Apple MacBook with Urban Falafel website on display" src={Urban01} /></div>
                  <div className="image"><img alt="Three Instax photos of the Urban Falafel food truck stacked on top of each other" src={Urban02} /></div>
                  <div className="image"><img alt="A stack of Urban Falafel business cards" src={Urban03} /></div>                  
                  </Slider>
                </div>
            </div>    
        </div>
      )
    }
};

  export default Carousel