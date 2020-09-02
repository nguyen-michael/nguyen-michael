import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <section className="section">
          <h1 className="has-text-centered is-size-1 mb-4 emphasis">Blog</h1>
          <h2 className="has-text-centered is-size-5 mb-6">
            Public Journal, Dev Journal, Life Blogs, Musings, Thoughts
          </h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="columns blog-link" key={node.fields.slug}>
                <div class="column is-2">
                  <small>{node.frontmatter.date}</small>
                </div>
                <div class="column is-three-fifths">
                  <h3>
                    <Link to={`/blog${node.fields.slug}`}>{title}</Link>
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
                <div className="column tags">
                  {node.frontmatter.tags.map(tag => {
                    return (
                      <Link to={`/tags/${tag}`} className="tag is-link">
                        {tag}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { pageKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMM, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
