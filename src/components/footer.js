import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="level is-size-4">
        <div className="level-item">
          <Link to="/">Home</Link>
        </div>
        <div className="level-item">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="level-item">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="level-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="level is-size-3">
        <div className="level-item">
          <a href="https://github.com/nguyen-michael">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div className="level-item">
          <a href="https://www.linkedin.com/in/nguyen-michael/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="level">
        <div className="level-item">
          <span className="has-text-centered">
            © {new Date().getFullYear()}, Built by Michael Nguyen with&nbsp;
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
