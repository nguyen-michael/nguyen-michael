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
      file(name: { eq: "michael-nguyen-resume" }, relativePath: {}) {
        publicURL
      }
    }
  `)

  const { aboutBlurb, aboutImage } = data.mdx.frontmatter

  const { publicURL } = data.file

  return (
    <Section id="about">
      <p>{aboutBlurb}</p>
      <a href={publicURL} target="_blank" rel="noreferrer">
        Resume
      </a>
      <Img
        fixed={aboutImage.childImageSharp.fixed}
        alt="Jumbotron"
        style={{ borderRadius: `1rem` }}
      />
    </Section>
  )
}

const SkillsList = styled.ul`
  list-style: none;
`

const Section = styled.section`
  min-height: 50vh;
  display: flex;
  margin: 4rem 0;
`
