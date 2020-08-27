import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutSectionQuery {
      mdx(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          aboutBlurb
          aboutImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          aboutSkills
        }
      }
    }
  `)

  const { aboutBlurb, aboutImage } = data.mdx.frontmatter

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="columns">
          <p className="column mr-6">{aboutBlurb}</p>
          <Img
            className="column is-one-third"
            fluid={aboutImage.childImageSharp.fluid}
            alt="Jumbotron"
            style={{ borderRadius: `50%` }}
          />
        </div>
      </div>
    </section>
  )
}
