import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsSectionQuery {
      mdx(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          projectsTitle
        }
      }
    }
  `)

  const { projectsTitle } = data.mdx.frontmatter

  return (
    <Section>
      <h1>{projectsTitle}</h1>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
`