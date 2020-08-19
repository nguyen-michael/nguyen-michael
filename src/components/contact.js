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
    }
  `)

  const { github, linkedin } = data.site.siteMetadata.social

  return (
    <Section>
      <h1>Let me know how I can serve you.</h1>
      <button>Get in touch</button>
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
  min-height: 100vh;
  background-color: #624641;
  background-image: linear-gradient(180deg, rgba(252, 253, 247, 1) 0%, rgba(0, 0, 0, 0) 40%
  );
`
