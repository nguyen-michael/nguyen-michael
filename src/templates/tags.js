import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const blogs = edges.filter(
    ({ node }) => node.frontmatter.pageKey === `blog-post`
  )
  const projects = edges.filter(
    ({ node }) => node.frontmatter.pageKey === `project`
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`"${tag}" tag`} />
      <div>
        <h1>{tagHeader}</h1>
        {projects.length !== 0 && (
          <>
            <h2>Projects</h2>
            <ul>
              {projects.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <li key={slug}>
                    <Link to={`/projects${slug}`}>{title}</Link>
                  </li>
                )
              })}
            </ul>
          </>
        )}
        {blogs.length !== 0 && (
          <>
            <h2>Blogs</h2>
            <ul>
              {blogs.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <li key={slug}>
                    <Link to={`/blog${slug}`}>{title}</Link>
                  </li>
                )
              })}
            </ul>
          </>
        )}
        <Link to="/tags">All tags</Link>
      </div>
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
    allMdx(
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
            title
            pageKey
          }
        }
      }
    }
  }
`
