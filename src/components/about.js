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
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          aboutSkills
          aboutResume
        }
      }
    }
  `)

  const {
    aboutBlurb,
    aboutImage,
    aboutSkills,
    aboutResume,
  } = data.mdx.frontmatter

  return (
    <Section id="about">
      <div>
        <p>{aboutBlurb}</p>
        <p>{aboutResume}</p>
      </div>
      <div>
        <SkillsList>
          {aboutSkills.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </SkillsList>
      </div>
      <Img fluid={aboutImage.childImageSharp.fluid} alt="Jumbotron" />
    </Section>
  )
}

const SkillsList = styled.ul`
  list-style: none;
`

const Section = styled.section`
  min-height: 50vh;
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
