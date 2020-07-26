import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Greetings{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          Here is where We'll add components for the main index page, such as a hero, an about section, latest projects, contact call to action and links to blog and projects page.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
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
