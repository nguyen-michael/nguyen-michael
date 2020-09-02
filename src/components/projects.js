import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./project-card"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsSectionQuery {
      markdownRemark(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          projectsTitle
        }
      }
    }
  `)

  const { projectsTitle } = data.markdownRemark.frontmatter

  return (
    <section className="section">
      <div className="container fluid">
        <h1 className="has-text-centered is-size-2 has-text-link mb-5">
          {projectsTitle}{" "}
          <span className="is-size-6">
            <Link to="/projects" className="has-text-grey-light">view all</Link>
          </span>
        </h1>
        <div className="columns">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}
