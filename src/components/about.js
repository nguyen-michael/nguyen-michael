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
        <div className="columns is-8 is-variable">
          <div className="column">
            <p className="is-size-4 has-text-weight-bold mb-2">
              Hi, I'm Michael Nguyen, a Web Developer and Designer. I am a
              problem-solver and solution-seeker for your small business'
              website and online presence needs.
            </p>
            <p>
              Small businesses have goals and needs that are distinct from large
              corporations. I am happy to identify trouble patches your business
              may be experiencing on the web, whether deployment issues,
              customer engagement or slow-loading websites and work with you to
              come up with solutions to get you set for the future.
            </p>
          </div>
          <div className="column is-one-third">
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Jumbotron"
              style={{ borderRadius: `50%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
