import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Navbar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <Link to="/">Hello</Link>
        </Title>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  height: ${rhythm(3)};
  justify-content: space-between;
`

const Title = styled.div`
  margin: 10px;
`

export default Navbar
