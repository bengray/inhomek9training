import React from "react"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import { Container } from "../shared/styles"
import dog4 from "../images/dog4.png"
import PageBanner from "../components/page-banner"
import styled from "styled-components"

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 75px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin-right: 50px;
  }
`

const Label = styled.label`
  margin: 10px 0 10px;
`

const LabelText = styled.div`
  margin-bottom: 5px;
  letter-spacing: 1px;
`

const Input = styled.input`
  width: 100%;
  height: 2em;
  border: 1px solid #e0e0e0;
  background: #f5f5f5;
`

const Textarea = styled.textarea`
  height: 10em;
  width: 100%;
  border: 1px solid #e0e0e0;
  background: #f5f5f5;
`

const SubmitButton = styled.button`
  border: none;
  background-color: #83b541;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  height: 50px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

const ContactInfo = styled.div`
  margin: 50px 0 50px;
  @media screen and (min-width: 768px) {
    margin: 25px 0 50px;
  }
`

const ContactTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`

const Paragraph = styled.p`
  > a {
    color: #212121;
    text-decoration: none;
  }
`

export default function Contact({ location }) {
  return (
    <>
      <SEO
        page="Contact"
        description="Contact Dorner Canine Training"
        href={location.href}
      />
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
            <Form
              method="post"
              action="https://getform.io/f/800d25db-6253-45b2-8de0-6f420dcc37a2"
            >
              <Label>
                <LabelText>Full Name</LabelText>
                <Input type="text" name="name" />
              </Label>
              <Label>
                <LabelText>Email</LabelText>
                <Input type="email" name="email" />
              </Label>
              <Label>
                <LabelText>Phone</LabelText>
                <Input type="phone" name="phone" />
              </Label>
              <Label>
                <LabelText>Dog Breed</LabelText>
                <Input type="breed" name="breed" />
              </Label>
              <Label>
                <LabelText>Tell Me About Your Needs</LabelText>
                <Textarea type="text" name="message" className="message" />
              </Label>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            <ContactInfo>
              <ContactTitle>Dorner Canine Training</ContactTitle>
              <Paragraph>
                In-Home Obedience Training & Customized Training Services Phone:
                <br />
                <a href="tel:8439007475">
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp;(843) 900-7475
                </a>
              </Paragraph>
            </ContactInfo>
          </ContactBlock>
        </Container>
      </Layout>
    </>
  )
}
