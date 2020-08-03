import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MobileNav from "./mobile-nav"

const NavList = styled.ul`
  list-style: none;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
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
    border-bottom: ${({ currentPage }) =>
      currentPage ? "3px solid #83b541" : "none"};
    padding-bottom: 8px;
    &:hover {
      border-bottom: 3px solid #83b541;
      color: #83b541;
    }
  }
`

const ListLink = props => (
  <NavItem currentPage={props.isCurrent}>
    <Link to={props.to}>{props.children}</Link>
  </NavItem>
)

export default function Navigation({ pathName }) {
  return (
    <>
      <MobileNav />
      <NavList>
        <ListLink isCurrent={pathName === "/"} to="/">
          Home
        </ListLink>
        <ListLink isCurrent={pathName === "/testimonials/"} to="/testimonials/">
          Testimonials
        </ListLink>
        <ListLink isCurrent={pathName === "/about/"} to="/about/">
          About
        </ListLink>
        <ListLink isCurrent={pathName === "/contact/"} to="/contact/">
          Contact
        </ListLink>
      </NavList>
    </>
  )
}
