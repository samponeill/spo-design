import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/form'
import SEO from "../components/seo"

const ContactPage = () => (
  <>
    <Layout>
        <SEO title="Contact us for a quote" />
        <main>
            <div className="chunk">
                <h1><span role="img" aria-label="Phone hand">🤙 </span>Get in touch</h1>
                <p>Want to talk about your project? Let's have a no-strings-attached chat and see how we can help you stand out</p>
            </div>
            <ContactForm></ContactForm>
        </main>
    </Layout>
  </>
)

export default ContactPage
