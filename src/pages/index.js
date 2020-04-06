import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: "blue", fontSize: "2rem" }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="still fancy" />
    <p>this is pretty fancy</p>
    <img
      src="https://source.unsplash.com/random/400x200"
      alt="random unsplash"
    />
  </div>
)
