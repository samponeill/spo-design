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
                <h1>Get in touch</h1>
                <p>Send us a message and we'll get back to you as soon as possible</p>
            </div>
            <ContactForm></ContactForm>
        </main>
    </Layout>
  </>
)

export default ContactPage
