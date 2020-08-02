import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"

export default function Contact({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <Container>
        <h1>Contact</h1>
      </Container>
    </Layout>
  )
}
