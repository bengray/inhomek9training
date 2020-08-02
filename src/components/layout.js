import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import TopBar from "./topBar"
import styled from "styled-components"
import { Container } from "../shared/styles"
import dorner_logo from "../images/dorner_logo.png"
import "../shared/reset.css"

const Wrapper = styled.div`
  color: #212121;
  font-family: "montserratlight", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.8;
  > a {
    color: #adda72;
  }
`

const SiteHeader = styled.header`
  margin: 0.5rem 0 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)``

const Footer = styled.div``

const HiddenH1 = styled.h1`
  font-size: 0;
  width: 1px;
  height: 1px;
  display: inline-block;
  overflow: hidden;
  position: absolute !important;
  border: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
`

const LogoImage = styled.img`
  height: 90px;
`

const HeaderWrapper = styled.div`
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`

export default function Layout({ children, pathName }) {
  return (
    <Wrapper>
      <TopBar />
      <HeaderWrapper>
        <Container>
          <SiteHeader>
            <Logo to="/">
              <HiddenH1>Dorner Canine Training</HiddenH1>
              <LogoImage src={dorner_logo} />
            </Logo>
            <Navigation pathName={pathName} />
          </SiteHeader>
        </Container>
      </HeaderWrapper>
      {children}
      <Container>
        <Footer>Copyright 2020</Footer>
      </Container>
    </Wrapper>
  )
}
