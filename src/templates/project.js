import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const ogImagePath = project.frontmatter.ogImage ? project.frontmatter.ogImage.childImageSharp.fixed.src : ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
          ogImagePath={ogImagePath}
        />
        <section className="section">
          <h1 className="emphasis is-size-1">{project.frontmatter.title}</h1>
          <p className="is-size-6 mb-4">{project.frontmatter.date}</p>
          <div className="tags mb-3">
            {project.frontmatter.tags.map(tag => {
              return (
                <Link className="tag is-link" key={tag} to={`/tags/${tag}`}>
                  {tag}
                </Link>
              )
            })}
          </div>
          <div className="buttons">
            <a className="button mr-1" href={project.frontmatter.repoUrl}>
              Github
            </a>
            <a className="button" href={project.frontmatter.liveUrl}>
              Live
            </a>
          </div>
          <section dangerouslySetInnerHTML={{ __html: project.html }} />
          <hr />
        </section>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
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
        repoUrl
        liveUrl
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
