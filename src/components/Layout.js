import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LayoutWrapper = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
  h1 {
    border: 2px solid purple;
  }
`

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
  li {
    list-style: none;
  }
`
export default ({ children }) => (
  <LayoutWrapper>
    <Nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Nav>
    <h1>Frankenstein Gatsby Tutorial</h1>
    <div>{children}</div>
  </LayoutWrapper>
)
