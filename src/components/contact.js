import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query ContactsSectionQuery {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
      mdx(frontmatter: { pageKey: { eq: "index" } }) {
        frontmatter {
          contactTitle
          contactCallToAction
          contactEmail
        }
      }
    }
  `)

  const {
    contactTitle,
    contactCallToAction,
    contactEmail,
  } = data.mdx.frontmatter

  const { github, linkedin } = data.site.siteMetadata.social

  return (
    <Section>
      <h1>{contactTitle}</h1>
      <h2>{contactCallToAction}</h2>
      <h3>{contactEmail}</h3>
      <p>
        Find me on{" "}
        <a href={`https://www.linkedin.com/in/${linkedin}`}>LinkedIn</a>
      </p>
      <p>
        Find me on <a href={`https://www.github.com/${github}`}>Github</a>
      </p>
    </Section>
  )
}

const Section = styled.section`
  min-height: 50vh;
`
