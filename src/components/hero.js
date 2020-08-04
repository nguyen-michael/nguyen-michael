import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

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
    <BackgroundImage fluid={heroJumbotron.childImageSharp.fluid}>
      <Section>
        <h1>Howdy! My name is {heroName} </h1>
        <h2>{heroJobTitle}</h2>
        <Link to="#about">Learn More</Link>
      </Section>
    </BackgroundImage>
  )
}

const Section = styled.section`
  background: linear-gradient(180deg, rgba(2,0,36,0) 70%, rgba(252,253,247,1) 100%);
  min-height: 100vh;
  padding: 5rem;
`
