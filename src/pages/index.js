import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <>
        <Hero />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Howdy!"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />

          <About />
          <Projects />
          <Contact />
        </Layout>
      </>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageData {
    site {
      siteMetadata {
        title
      }
    }
  }
`
