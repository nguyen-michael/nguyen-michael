import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <p className="is-size-4">Michael Nguyen</p>
        </Link>

        <button
          onClick={() => {
            setisActive(!isActive)
          }}
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <Link to="/projects" className="navbar-item">
            <p className="is-size-4">Projects</p>
          </Link>
          <Link to="/blog" className="navbar-item">
            <p className="is-size-4">Blog</p>
          </Link>
          <Link to="/contact" className="navbar-item">
            <p className="is-size-4">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
