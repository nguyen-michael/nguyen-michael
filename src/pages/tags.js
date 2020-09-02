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
        <h1>Tags</h1>
        {allMarkdownRemark.group.map(group => {
          const tag = group.fieldValue
          const count = group.totalCount

          return (
            <div key={tag}>
              <Link to={`/tags/${tag}`}>{tag} ({count})</Link>
            </div>
          )
        })}
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
