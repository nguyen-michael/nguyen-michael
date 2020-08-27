import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ProjectCard() {
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

  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          {/* <Img fluid={fluid} alt="Project Image" /> */}
          <img src={"/project-og-size-placeholder.png"} alt="project image" />
        </div>
        <div className="card-content">
          <Link to="/">
            <h1 className="is-size-4">THIS PROJECT</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            est officia qui laudantium eum vel atque eos veritatis, praesentium,
            enim sit esse quos aspernatur! Debitis numquam optio quis ratione
            recusandae?
          </p>
        </div>
      </div>
    </div>
  )
}
