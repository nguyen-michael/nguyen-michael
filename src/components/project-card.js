import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ProjectCard(props) {
  /*   const data = useStaticQuery(graphql`
    query ProjectCardQuery {
      file(
        relativePath: {
          eq: "../../content/assets/project-og-size-placeholder.png"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fluid = data.file.childImageSharp.fluid */

  // Place holder defaults
  const image = props.ogImage || "/project-og-size-placeholder.png"
  const title = props.title || "This Project"
  const slug = props.slug || ""
  const excerpt =
    props.description ||
    props.excerpt ||
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam est officia qui laudantium eum vel atque eos veritatis, praesentium, enim sit esse quos aspernatur! Debitis numquam optio quis ratione recusandae?"
  const liveUrl = props.liveUrl || "#"
  const repoUrl = props.repoUrl || "#"

  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          {props.ogImage ? (
            <Img fluid={image.childImageSharp.fluid} alt="Project Image" />
          ) : (
            <img src={image} alt="project image" />
          )}
        </div>
        <div className="card-content">
          <Link to={`/projects${slug}`}>
            <h1 className="is-size-4 mb-2">{title}</h1>
          </Link>
          <p className="mb-2">{excerpt}</p>
        </div>
        <footer className="card-footer has-text-centered">
          <a className="card-footer-item" href={repoUrl}>
            Github
          </a>
          <a className="card-footer-item" href={liveUrl}>
            Live
          </a>
        </footer>
      </div>
    </div>
  )
}
