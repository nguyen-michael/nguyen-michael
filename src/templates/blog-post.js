import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const ogImagePath = post.frontmatter.ogImage ? post.frontmatter.ogImage.childImageSharp.fixed.src : ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          ogImagePath={ogImagePath}
        />
        <section className="section">
          <h1 className="emphasis is-size-1">{post.frontmatter.title}</h1>
          <p className="is-size-6 mb-4">{post.frontmatter.date}</p>
          <div className="tags mb-6">
            {post.frontmatter.tags.map(tag => {
              return (
                <Link className="tag is-link" key={tag} to={`/tags/${tag}`}>
                  {tag}
                </Link>
              )
            })}
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        ogImage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
