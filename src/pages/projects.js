import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectsPage extends React.Component {
  render() {
    /* Data comes to the gatsby page component as a prop from the page query */
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <Bio />
        <div>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link to={`/projects${node.fields.slug}`}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt, 
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage

export const pageQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { pageKey: { eq: "project" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            liveUrl
            repoUrl
          }
        }
      }
    }
  }
`
