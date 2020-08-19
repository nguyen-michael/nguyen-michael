import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import "./styles.scss"

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
          }}
        >
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
`

const Footer = styled.footer`
  text-align: center;
`

export default Layout
