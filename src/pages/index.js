import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"
import styled from "styled-components"
import { Link } from "gatsby"
import dorner_logo_large from "../images/dorner_logo_large.png"
import dorner_k9_training from "../images/dorner_k9_training.jpg"
import services_dog from "../images/services_dog.png"
import homeBanner from "../images/homeBanner.jpg"

const HomeBanner = styled.img`
  z-index: 1;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
  height: 200px;
  background-image: linear-gradient(
      to bottom,
      rgba(95, 95, 95, 0.52),
      rgba(255, 255, 255, 0.73)
    ),
    url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  @media screen and (min-width: 768px) {
    height: 275px;
  }
  @media screen and (min-width: 992px) {
    height: 350px;
  }
  @media screen and (min-width: 1200px) {
    height: 450px;
  }
`

const LargeLogo = styled.img`
  z-index: 2;
  width: 30%;
  margin-top: 20px;
  position: absolute;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-left: 30px;
  }
`

const TagLine = styled.div`
  z-index: 2;
  position: absolute;
  text-shadow: rgb(0, 0, 0) 1px 1px 5px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin: 90px 0 0 20px;
  line-height: 1.5em;

  @media screen and (min-width: 480px) {
    margin: 130px 0 0 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin: 150px 0 0 50px;
    line-height: 2.25rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 30px;
    margin: 230px 0 0 50px;
    line-height: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 38px;
    margin: 275px 0 0 50px;
    line-height: 3rem;
  }
`

const Head1 = styled.h1`
  font-size: 38px;
  font-weight: 700;
  line-height: 1em;
  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
  @media screen and (min-width: 992px) {
    font-size: 62px;
  }
`

const Head2 = styled.h2`
  font-size: 36px;
  line-height: 1em;
`

const Head3 = styled.h3`
  font-size: 24px;
  line-height: 1em;
`

const Lead = styled.div`
  font-size: 16px;
  line-height: 1em;
  margin: 15px 0 15px;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`

const Paragraph = styled.p`
  margin: 5px 0;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

const GreenDoggo = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 300px;
  background-image: url(${dorner_k9_training});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`

const SignUpText = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
`

const ServicesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

const ServicesList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 25px;
`

const ServiceDoggo = styled.img`
  width: 0;
  height: 0;
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: auto;
    height: 300px;
    margin-right: 20px;
  }
`

const RequestEvaluationWrapper = styled.div`
  background-color: #83b541;
  color: white;
`

const RequestEvaluation = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  > span {
    font-weight: 400;
    font-style: italic;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

const RequestButton = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid white;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: center;
  > a {
    color: white;
    text-decoration: none;
    padding: 20px;
    width: 100%;
    transition: background-color 0.4s;
    &:hover {
      background-color: white;
      color: #57792a;
    }
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export default function Home({ location }) {
  return (
    <Layout pathName={location.pathname}>
      <Container>
        <LargeLogo src={dorner_logo_large} />
        <TagLine>
          In-Home Obedience Training & <br />
          Customized Training Services
        </TagLine>
      </Container>
      <HomeBanner image={homeBanner} />
      <Container>
        <Head2>Welcome to</Head2>
        <Head1>Dorner Canine Training</Head1>
        <Lead>In-Home Obedience Training & Customized Training Services</Lead>
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
      <GreenDoggo>
        <Container>
          <SignUpText>
            Sign up for 3 lessons in the evaluation and receive 10% of the total
            cost of the lessons
          </SignUpText>
        </Container>
      </GreenDoggo>
      <Container>
        <ServicesBlock>
          <ServiceDoggo src={services_dog} />
          <Service>
            <Head3>Basic Services:</Head3>
            <Paragraph>
              <ServicesList>
                <li>Behavioral Counseling</li>
                <li>Puppy Training</li>
                <li>Basic Obedience</li>
                <li>Advanced Obedience</li>
                <li>Off-Lead Work</li>
              </ServicesList>
            </Paragraph>
          </Service>
          <Service>
            <Head3>Special Services:</Head3>
            <Paragraph>
              <ServicesList>
                <li>Assistance Dog Training</li>
                <li>Therapy Dog Training</li>
                <li>Emotional Support Dog Training</li>
                <li>Temperament Testing</li>
                <li>Puppy Selection</li>
                <li>Client Boarding</li>
              </ServicesList>
            </Paragraph>
          </Service>
        </ServicesBlock>
      </Container>
      <RequestEvaluationWrapper>
        <Container>
          <RequestEvaluation>
            <Text>
              REQUEST AN EVALUATION <span>With Dorner Canine Training</span>
            </Text>
            <RequestButton>
              <Link to="/contact/">Let's Get Started</Link>
            </RequestButton>
          </RequestEvaluation>
        </Container>
      </RequestEvaluationWrapper>
    </Layout>
  )
}
