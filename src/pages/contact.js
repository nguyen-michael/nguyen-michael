import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="How Can I Help?"
          keywords={[`contact`, `web development`, `web design`]}
        />
        <section className="section">
          <h1 className="has-text-centered is-size-1 mb-6">
            Let's Get In Touch!
          </h1>
          <div className="columns">
            <div className="column">
              <form name="contact">
                <div className="field">
                  <div className="label">Name</div>
                  <div className="control">
                    <input type="text" className="input" name="name" />
                  </div>
                </div>
                <div className="field">
                  <div className="label">Email</div>
                  <div className="control">
                    <input type="text" className="input" name="email" />
                  </div>
                </div>
                <div className="field">
                  <div className="label">Company</div>
                  <div className="control">
                    <input type="text" className="input" name="company" />
                  </div>
                </div>
                <div className="field">
                  <div className="label">Purpose of Inquiry</div>
                  <div className="control">
                    <input type="text" className="input" name="purpose" />
                  </div>
                </div>
                <div className="field">
                  <div className="label">Message</div>
                  <div className="control">
                    <textarea
                      name="message"
                      rows="8"
                      className="textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link" type="submit">
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light" type="reset">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="column">
              <div className="container is-size-1">
                <h2>
                  Great partnerships start with a simple message. Shoot me a
                  line,&nbsp;
                  <span className="emphasis">let's talk</span>.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
