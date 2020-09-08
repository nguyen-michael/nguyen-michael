import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./project-card"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsSectionQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { pageKey: { eq: "project" } } }
        limit: 3
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              description
              liveUrl
              repoUrl
              ogImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const latestProjects = data.allMarkdownRemark.edges

  return (
    <section className="section">
      <div className="container fluid">
        <h1 className="has-text-centered is-size-2 has-text-link mb-5">
          Latest Projects{" "}
          <span className="is-size-6">
            <Link to="/projects" className="has-text-grey-light">
              view all
            </Link>
          </span>
        </h1>
        <div className="columns">
          {latestProjects.map(({ node }) => {
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
      </div>
    </section>
  )
}
