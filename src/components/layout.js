import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import Footer from "./footer"
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
          {currentPath !== "/" && <Navbar />}
          <main>{children}</main>
          <Footer />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #fcfdf7;
  min-height: 100vh;
`

export default Layout
