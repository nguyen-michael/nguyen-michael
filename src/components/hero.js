import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Navbar from "./navbar"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query HeroSectionQuery {
      markdownRemark(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          heroJobTitle
          heroJumbotron {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroName
        }
      }
    }
  `)

  const { heroName, heroJobTitle, heroJumbotron } = data.markdownRemark.frontmatter

  return (
    <BackgroundImage
      fluid={heroJumbotron.childImageSharp.fluid}
      className="hero-bg"
    >
      <section className="hero">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body has-text-centered">
          <h1 className="is-size-1 mb-4">
            Howdy! I'm <span className="emphasis">{heroName}</span>{" "}
          </h1>
          <h2 className="is-size-3 mb-2">{heroJobTitle}</h2>
        </div>
        <div className="hero-foot pb-6 has-text-centered">
          <Link to="#about" className="button is-black is-outlined">
            Learn More
          </Link>
        </div>
      </section>
    </BackgroundImage>
  )
}