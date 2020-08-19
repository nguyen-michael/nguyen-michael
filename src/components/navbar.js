import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Navbar extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavItem>
          <NavLink>
            <Link to="/">Michael Nguyen</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/projects">Projects</Link>
          </NavLink>
          <NavLink>
            <Link to="/blog">Blog</Link>
          </NavLink>
        </NavItem>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  font-family: Belgrano, sans-serif;
  @media (max-width: 800px) {
    justify-content: center;
  }
`

const NavItem = styled.div`
`

const NavLink = styled.span`
  padding: ${rhythm(1)};
  font-weight: bold;
  @media (max-width: 800px) {
    padding: ${rhythm(0.5)};
  }
`

export default Navbar
