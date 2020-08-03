import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"
import dog4 from "../images/dog4.png"
import PageBanner from "../shared/page-banner"
import styled from "styled-components"

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactForm = styled.div``

const ContactInfo = styled.div``

const ContactTitle = styled.div``

const Paragraph = styled.p``

export default function Contact({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <PageBanner image={dog4} text="Contact" />
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53538.40331070127!2d-80.21515689499672!3d32.99981516164912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fef4c413e7e34b%3A0x122792328064d4f!2sSummerville%2C+SC!5e0!3m2!1sen!2sus!4v1520868979836"
          width="100%"
          height="450"
          allowfullscreen=""
        ></iframe>
        <ContactBlock>
          <ContactForm>
            <form
              method="post"
              action="https://getform.io/f/800d25db-6253-45b2-8de0-6f420dcc37a2"
            >
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <label>
                Name
                <input type="text" name="name" />
              </label>
              <label>
                Message
                <input type="text" name="message" />
              </label>
              <button type="submit">Send</button>
            </form>
          </ContactForm>
          <ContactInfo>
            <ContactTitle>Dorner Canine Training</ContactTitle>
            <Paragraph>
              In-Home Obedience Training & Customized Training Services Phone:
              <br />
              (843) 900-7475
            </Paragraph>
          </ContactInfo>
        </ContactBlock>
      </Container>
    </Layout>
  )
}
