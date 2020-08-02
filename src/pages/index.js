import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"

export default function Home({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <Container>
        <h1>Home page</h1>
      </Container>
    </Layout>
  )
}
