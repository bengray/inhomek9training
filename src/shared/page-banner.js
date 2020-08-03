import React from "react"
import styled from "styled-components"
import { Container } from "./styles"

const Banner = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  margin-bottom: 25px;
  background-image: linear-gradient(
      to bottom,
      rgba(112, 156, 56, 0.8),
      rgba(112, 156, 56, 0.4)
    ),
    url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  display: flex;
  align-items: center;
  background-blend-mode: multiply;
  @media screen and (min-width: 1200px) {
    height: 250px;
  }
`

const Head2 = styled.h2`
  color: white;
  font-size: 30px;
  text-transform: uppercase;
  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`

export default function PageBanner({ image, text }) {
  return (
    <Banner image={image}>
      <Container>
        <Head2>{text}</Head2>
      </Container>
    </Banner>
  )
}
