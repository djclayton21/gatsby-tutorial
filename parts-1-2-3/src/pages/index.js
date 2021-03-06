import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <Link to="/about-css-modules/" style={{ padding: 20 }}>
      About Css Modules
    </Link>
    <Link to="/about-styled-components/">About Styled Components</Link>
    <Header headerText="still fancy" />
    <p>this is pretty fancy</p>
    <img
      src="https://source.unsplash.com/random/400x200"
      alt="random unsplash"
    />
  </Layout>
)
