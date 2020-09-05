import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class TagsPage extends React.Component {
  render() {
    const { site, allMarkdownRemark } = this.props.data
    const siteTitle = site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Tags" />
        <section className="section">
          <h1 className="has-text-centered is-size-1 mb-4 emphasis">Tags</h1>
          <div className="tags">
            {allMarkdownRemark.group.map(group => {
              const tag = group.fieldValue
              const count = group.totalCount

              return (
                <Link to={`/tags/${tag}`} className="tag is-link is-large">
                  {tag} ({count})
                </Link>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
