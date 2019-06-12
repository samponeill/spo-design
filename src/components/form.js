import React from 'react'

const Form = () => (
            <form
            id="#message_form" 
            style={{marginBottom: '10rem'}}
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            netlify-honeypot="bot-field"> 
                <div className="grid-form">
                  <div className="chunk form-container">
                    <label htmlFor="Name">Name*</label>
                    <input arial-label="name" id="name" required type="text" name="name" style={{width: '100%'}} />
                  </div>     
                  <div className="chunk form-container">
                    <label htmlFor="email">Email*</label>         
                    <input arial-label="email" id="email" required type="email" name="email" style={{width: '100%'}} />
                    <input arial-label="Ignore" id="number" type="text" name="number" style={{display: 'none'}} />        
                  </div>
                </div>
                <div className="chunk">
                  <label htmlFor="Message">Message*</label>
                  <textarea arial-label="Message box" style={{width: '100%', height: '16rem'}} name="message" cols={40} rows={15} defaultValue={""} />
                </div>
              <input className="shadow" arial-label="submit" id="contact-submit" defaultValue="submit" name="submit" type="submit" />
              <label htmlFor="submit" />
              <div style={{visibility: "hidden"}} className="hidden chunk">
                  <label htmlFor="bot-field">I am a robot</label>
                  <input type="text" name="bot-field" style={{width: '100%'}} />
              </div>
            </form>
    );

  export default Form