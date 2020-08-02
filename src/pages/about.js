import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"

export default function About({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <Container>
        <h1>About</h1>
      </Container>
    </Layout>
  )
}
