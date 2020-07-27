import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query HeroSectionQuery {
      mdx(frontmatter: { pageKey: { eq: "index" } }) {
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

  const { heroName, heroJobTitle, heroJumbotron } = data.mdx.frontmatter

  return (
    <Section>
      <h1>Howdy! My name is {heroName} </h1>
      <h2>{heroJobTitle}</h2>
      <Img fluid={heroJumbotron.childImageSharp.fluid} alt="Jumbotron" />
      <Button>
        <Link to="#about">Learn More</Link>
      </Button>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
`
