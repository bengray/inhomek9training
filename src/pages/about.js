import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import dog3 from "../images/dog3.png"
import PageBanner from "../shared/page-banner"
import { Container } from "../shared/styles"
import trainer from "../images/trainer.jpg"

const Head3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1em;
`

const Paragraph = styled.div`
  margin: 10px 0 10px;
`

const TrainerPhoto = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  height: 200px;
  width: 150px;
  margin: 20px 10px 0 10px;
  background-position: top;
  filter: drop-shadow(3px 3px 3px #ccc);
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 250px;
  }
  @media screen and (min-width: 992px) {
    height: 200px;
    width: 150px;
  }
  @media screen and (min-width: 1200px) {
    height: 400px;
    width: 250px;
  }
`

export default function About({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <PageBanner image={dog3} text="About" />
      <Container>
        <Head3>Welcome to Dorner Canine Training</Head3>
        <TrainerPhoto image={trainer} />
        <Paragraph>
          I’d like to tell you a little about myself and our commitment.
        </Paragraph>

        <Paragraph>
          I am a Graduate from National K-9 School for Dog Trainers and a
          Certified Master Trainer.
        </Paragraph>

        <Paragraph>
          I have been training for over 18 years, and was honored to have a dog
          I trained last year (2015) in the Puppy Bowl!
        </Paragraph>

        <Paragraph>
          Our commitment is to help all of out clients establish a loving and
          healthy relationship with their dogs.
        </Paragraph>

        <Paragraph>
          We do that by providing expert, customized training services for your
          dog, in your home.
        </Paragraph>

        <Paragraph>
          We do that by teaching our clients and their families to establish
          easy-to-learn, consistent training techniques that become a way of
          life for you and your dog.
        </Paragraph>
      </Container>
    </Layout>
  )
}
