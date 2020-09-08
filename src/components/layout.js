import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./styles.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const currentPath = this.props.location.pathname

    return (
      <div className="layout-wrapper">
        {currentPath !== "/" && <Navbar />}

        <div className={currentPath === "/" ? "" : "layout-bounding"}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
