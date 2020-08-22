import React from "react"
import { Link } from "gatsby"

class Navbar extends React.Component {
  render() {
    return (
      <nav
          class="navbar is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <Link class="navbar-item" href="/">
              <p className="is-size-4">Michael Nguyen</p>
            </Link>

            <div
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-start">
                <Link to="/projects" className="navbar-item">
                  <p className="is-size-4">
                    Projects
                  </p>
                </Link>
                <Link to="/blog" className="navbar-item">
                  <p className="is-size-4">
                    Blog
                  </p>
                </Link>
                <Link to="/contact" className="navbar-item">
                  <p className="is-size-4">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar
