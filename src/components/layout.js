import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const currentPath = this.props.location.pathname

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `0 ${rhythm(3 / 4)}`,
            flexGrow: `1`,
          }}
        >
          {/* No navbar on index Screen */}
          {(currentPath !== "/" && <Navbar />)}
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built by Michael Nguyen with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #fcfdf7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
