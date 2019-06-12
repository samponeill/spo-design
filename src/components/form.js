import React from 'react'

class ContactForm extends Component {
    constructor(props) {
      super(props)
      this.ContactForm = React.createRef()
      this.state = {}
    }
    encode = data => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit = e => {
      e.preventDefault()
      const form = this.ContactForm.current
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(response => {
          console.log("====================================")
          console.log(`${JSON.stringify(response, null, 2)}`)
          console.log("====================================")
          navigate(form.getAttribute("action"))
        })
        .catch(error => {
          console.log("====================================")
          console.log(`error in submiting the form data:${error}`)
          console.log("====================================")
        })
    }
    render() {
      return (
            <form
            id="#message_form" 
            style={{marginBottom: '10rem'}}
            name="contact"
            method="POST"
            action="/success"
            netlify
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
                  <input type="hidden" name="bot-field" style={{width: '100%'}} />
              </div>
              <input type="hidden" name="contact" value="contact" />
            </form>
    )
    }
}
export default ContactForm