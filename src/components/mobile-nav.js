import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const MobileWrapper = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const BarsBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: #95cf4b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`

const Menu = styled.div`
  background-color: #ccc;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding-top: 50px;
  background-color: #83b541;
  z-index: 9;
  overflow-x: hidden;
  width: ${({ shouldShow }) => (shouldShow ? "300px" : "0px")};
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`

const NavList = styled.ul`
  list-style: none;
  border-bottom: 1px solid #5f832f;
`

const NavItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
  border-top: 1px solid #5f832f;
  > a {
    color: white;
    width: 270px;
    padding: 0 15px;
    height: 50px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 8;
  visibility: ${({ shouldShow }) => (shouldShow ? "visible" : "hidden")};
`

const CloseButton = styled.div`
  font-size: 30px;
  position: absolute;
  right: 15px;
  top: 0;
  overflow: hidden;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
`

export default function MobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const ListLink = props => (
    <NavItem>
      <Link onClick={handleClose} to={props.to}>
        {props.children}
      </Link>
    </NavItem>
  )
  const handleOpen = () => {
    setShowMobileNav(true)
  }

  const handleClose = () => {
    setShowMobileNav(false)
  }

  return (
    <MobileWrapper>
      <BarsBox onClick={handleOpen}>
        <FontAwesomeIcon icon={faBars} />
      </BarsBox>

      <Menu shouldShow={showMobileNav}>
        <CloseButton onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <NavList>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/testimonials/">Testimonials</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </NavList>
      </Menu>
      <Overlay shouldShow={showMobileNav} onClick={handleClose} />
    </MobileWrapper>
  )
}
