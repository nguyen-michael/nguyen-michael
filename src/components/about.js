import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutSectionQuery {
      markdownRemark(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          aboutImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const { aboutImage } = data.markdownRemark.frontmatter

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="columns">
          <p className="column mr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            omnis atque eum unde maxime, nisi saepe ex, ab fugiat facere quod
            inventore molestias quam quis tempora odio, accusamus minima
            sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit omnis atque eum unde maxime, nisi saepe ex, ab fugiat
            facere quod inventore molestias quam quis tempora odio, accusamus
            minima sapiente? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit omnis atque eum unde maxime, nisi saepe ex, ab fugiat
            facere quod inventore molestias quam quis tempora odio, accusamus
            minima sapiente? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit omnis atque eum unde maxime, nisi saepe ex, ab fugiat
            facere quod inventore molestias quam quis tempora odio, accusamus
            minima sapiente?
          </p>
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
