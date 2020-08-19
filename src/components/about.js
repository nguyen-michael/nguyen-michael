import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutSectionQuery {
      mdx(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          aboutBlurb
          aboutImage {
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
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
    <Section id="about">
      <p>{aboutBlurb}</p>
      <Img
        fixed={aboutImage.childImageSharp.fixed}
        alt="Jumbotron"
        style={{ borderRadius: `50%` }}
      />
    </Section>
  )
}

const Section = styled.section`
  min-height: 50vh;
`
