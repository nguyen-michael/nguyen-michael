import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} item${
    totalCount === 1 ? "" : "s"
  } tagged "${tag}"`

  const blogs = edges.filter(
    ({ node }) => node.frontmatter.pageKey === `blog-post`
  )
  const projects = edges.filter(
    ({ node }) => node.frontmatter.pageKey === `project`
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`"${tag}" tag`} />
      <section className="section">
        <h1 className="has-text-centered is-size-1 mb-3">
          Tag: <span className="emphasis">{tag}</span>
        </h1>
        <h2 className="has-text-centered is-size-6 mb-6">{tagHeader}</h2>
        {projects.length !== 0 && (
          <>
            <h3 className="is-size-3 mb-4">Projects</h3>
            {projects.map(({ node }) => {
              const { slug } = node.fields
              const { title, date, tags } = node.frontmatter
              return (
                <div className="columns blog-link" key={slug}>
                  <div className="column is-8">
                    <h3>
                      <p className="is-size-7">{date}</p>
                      <Link className="is-size-5" to={`/projects${slug}`}>
                        {title}
                      </Link>
                    </h3>
                  </div>
                  <div className="column tags">
                    {tags.map(tag => {
                      return (
                        <Link
                          to={`/tags/${tag}`}
                          className="tag is-link"
                          key={tag}
                        >
                          {tag}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </>
        )}
        {blogs.length !== 0 && (
          <>
            <h3 className="is-size-3 mb-4">Blogs</h3>
            {blogs.map(({ node }) => {
              const { slug } = node.fields
              const { title, date, tags } = node.frontmatter
              return (
                <div className="columns blog-link" key={slug}>
                  <div className="column is-8">
                    <h3>
                      <p className="is-size-7">{date}</p>
                      <Link className="is-size-5" to={`/blog${slug}`}>
                        {title}
                      </Link>
                    </h3>
                  </div>
                  <div className="column tags">
                    {tags.map(tag => {
                      return (
                        <Link
                          to={`/tags/${tag}`}
                          className="tag is-link"
                          key={tag}
                        >
                          {tag}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </>
        )}
        <Link to="/tags">All tags</Link>
      </section>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMM, YYYY")
            title
            pageKey
            tags
          }
        }
      }
    }
  }
`
