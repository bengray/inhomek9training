import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Container } from "../shared/styles"

library.add(faFacebook)

const Bar = styled.div`
  height: 54px;
  background-color: #83b541;
  width: 100%;
  display: flex;
  align-items: center;
`

const ContactInfo = styled.div`
  color: white;
  > a {
    color: white;
    text-decoration: none;
  }
`

const FacebookLink = styled(Link)`
  color: #efefef;
  &:hover {
    color: white;
  }
`

export default function TopBar() {
  return (
    <Bar>
      <Container>
        <ContactInfo>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp; Summerville, SC &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <FontAwesomeIcon icon={faPhone} />
          &nbsp; <a href="tel:8439007475">(843) 900-7475</a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <FacebookLink
            target="_blank"
            rel="noreferrer"
            to="https://www.facebook.com/Dorner-Canine-Training-120605697974984/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </FacebookLink>
        </ContactInfo>
      </Container>
    </Bar>
  )
}
