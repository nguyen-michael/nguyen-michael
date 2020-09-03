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
  const image = props.image || "/project-og-size-placeholder.png"
  const title = props.title || "This Project"
  const slug = props.slug || ""
  const excerpt =
    props.excerpt ||
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam est officia qui laudantium eum vel atque eos veritatis, praesentium, enim sit esse quos aspernatur! Debitis numquam optio quis ratione recusandae?"

  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          {/* <Img fluid={fluid} alt="Project Image" /> */}
          <img src={image} alt="project image" />
        </div>
        <div className="card-content">
          <Link to={`/projects${slug}`}>
            <h1 className="is-size-4">{title}</h1>
          </Link>
          <p className="mb-2">{excerpt}</p>
          <div className="columns has-text-centered">
            <div className="column">
              <button className="button">Link Ext</button>
            </div>
            <div className="column">
              <button className="button">Github Ext</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
