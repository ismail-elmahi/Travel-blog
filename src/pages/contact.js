import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact__header">
        <div className="contact__section">
          <div className="contact__form">
            <h1>Contact</h1>
            <div className="inner">
              <form
                method="psot"
                action="/thanks"
                data-netlify="true"
                netlify-honeypot="bot"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="field__hidden">
                  <label>Don't fill this out, human</label>
                  <input name="bot" />
                </div>
                <div className="field">
                  <label>Name</label>
                  <input type="text" name="name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="text" name="email" />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea name="message" row="16">
                    {" "}
                  </textarea>
                </div>
                <div className="submit">
                  <button type="submit" className="btn__med">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
