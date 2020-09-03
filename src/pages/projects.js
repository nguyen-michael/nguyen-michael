import React from "react"
import { graphql } from "gatsby"
import ProjectCard from "../components/project-card"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectsPage extends React.Component {
  render() {
    /* Data comes to the gatsby page component as a prop from the page query */
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <section className="section">
          <h1 className="has-text-centered is-size-1 mb-4 emphasis">
            Projects
          </h1>
          <h2 className="has-text-centered is-size-5 mb-6">
            Works, Projects, Commissions and Experiments
          </h2>
          <div className="columns is-multiline">
            {projects.map(({ node }) => {
              const slug = node.fields.slug
              const title = node.frontmatter.title || node.fields.slug
              const image = node.frontmatter.ogImage
              const excerpt = node.frontmatter.description || node.excerpt
              return (
                <ProjectCard
                  key={slug}
                  slug={slug}
                  excerpt={excerpt}
                  title={title}
                  ogImage={image}
                  {...node.frontmatter}
                />
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
            ogImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
