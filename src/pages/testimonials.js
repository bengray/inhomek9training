import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"

export default function Testimonials({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <Container>
        <h1>Testimonials</h1>
      </Container>
    </Layout>
  )
}
