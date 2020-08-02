import React from "react"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
import styled from "styled-components"
import MobileNav from "./mobile-nav"

const NavList = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  > a {
    color: #212121;
    transition: color 0.4s;
    text-decoration: none;
    &:hover {
      border-bottom: 3px solid #83b541;
      color: #83b541;
    }
  }
`

const ListLink = props => (
  <NavItem>
    <Link to={props.to}>{props.children}</Link>
  </NavItem>
)

export default function Navigation() {
  if (isMobile) {
    return <MobileNav />
  }
  return (
    <NavList>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/testimonials/">Testimonials</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </NavList>
  )
}
