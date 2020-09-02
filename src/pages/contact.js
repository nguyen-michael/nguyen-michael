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
              <div className="field">
                <div className="label">Name</div>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="field">
                <div className="label">Email</div>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="field">
                <div className="label">Company</div>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="field">
                <div className="label">Purpose of Inquiry</div>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="field">
                <div className="label">Message</div>
                <div className="control">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="textarea"
                  ></textarea>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
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
