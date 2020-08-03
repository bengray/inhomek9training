import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"
import dog2 from "../images/dog2.jpg"
import stars from "../images/stars.png"
import PageBanner from "../components/page-banner"
import { Container } from "../shared/styles"

const Testimonial = styled.div`
  width: 98%;
  margin-bottom: 50px;
`

const Family = styled.div`
  display: flex;
  flex-direction: column;
`

const FamilyName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 1em;
  text-align: center;
`

const Stars = styled.div`
  background-image: url(${stars});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
`

const Text = styled.div`
  text-indent: 25px;
`

const HorizontalRule = styled.hr`
  width: 175px;
  height: 3px;
  background: #efefef;
  border: none;
  margin: 20px auto;
`

export default function Testimonials({ location }) {
  return (
    <>
      <SEO
        page="Testimonials"
        description="Customer testimonials for Dorner Canine Training"
      />
      <Layout pathName={location.pathname}>
        <PageBanner image={dog2} text="Testimonials" />
        <Container>
          <Testimonial>
            <Family>
              <FamilyName>The Punzel Family</FamilyName>

              <Stars />
            </Family>
            <Text>
              We brought our mini poodle mix, Winnie, home over Christmas of
              2016. We had never had a dog before, so we knew we needed help
              with basic training. Jen was referred to us by a neighbor of ours
              who had used her services and spoke very highly of her business.
              Jen began helping us right away with potty training, crate
              training, discipline, and even helped the girls’ teach Winnie some
              tricks. But more than that, she taught us the ins and outs of how
              to successfully bring a dog into our family and home. No question
              we asked was too simple or too silly. Because of this, we were
              able to better understand what was behind Winnie’s actions and we
              could respond accordingly. Winnie proved to be a bit stubborn in
              training, so Jen would adjust her techniques to best fit Winnie’s
              personality. She was very patient with her and with us, making
              sure everyone in the family was doing the corrections consistently
              and correctly. Jen was always reliable, punctual and easy to
              communicate with. We found it very helpful that she came right to
              the house and trained Winnie in her own surroundings. We also used
              Jen as a boarder when we went on vacations. Winnie was always very
              happy to be in her home and loved the attention and care she
              received there. We knew she was well cared for and was also
              getting consistent training and discipline while we were away. We
              highly recommend Jen Dorner as a trainer and boarder. We couldn’t
              be happier with the service we received and the training and care
              Winnie was given.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Margaret Cahill</FamilyName>
              <Stars />
            </Family>
            <Text>
              I first met Jennifer at the recommendation of my brother. He had
              used her with their puppy. We’ve had a few puppies but I think
              most people like a well behaved puppy/dog especially- with
              company. We had an older dog at the same time with the puppy who
              was easily trained in his youth. Our new guy needed a little more
              structure. The 1st time I met Jennifer and our puppy met Jennifer
              there was a connection. She had total control of the situation and
              he was listening and obeying her 10 minutes after their meeting.
              Her demeanor and control is subtle but refreshing. Best decision I
              ever made with a new dog. We’ll miss her.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Christa Renello</FamilyName>
              <Stars />
            </Family>
            <Text>
              We hired Jennifer to help with our 6 month old Goldendoodle puppy,
              Lucy. While we were over the moon about adding Lucy to our family,
              we were a bit stressed about her “puppy” behavior of chewing,
              jumping, coming when called, and possession issues. Jennifer
              helped by providing us realistic tools and behaviors that we could
              do as a family to help give Lucy boundaries that would keep her
              safe and happy. Jennifer was honest and confident and helped give
              us confidence in utilizing the tools she taught us. She was always
              super responsive in between sessions too when we had a question
              and needed support. Lucy is now a happy almost two year old and
              while she still has her “puppy ways” at times, we still
              incorporate good training techniques we were taught by Jennifer
              and are so grateful for her help and guidance!
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Mike, Anita and Su Shanahan (and Wilson)</FamilyName>
              <Stars />
            </Family>
            <Text>
              There aren't enough good words to say about Jennifer and the
              wonderful work she did with Wilson, our 5-year old German
              Shepherd. Our family had just recently rescued Wilson from a local
              shelter and, while he had some endearing, loving qualities, it was
              obvious that there would be a lot to work through. His past was
              sketchy at best, and left a lot of behavioral "baggage" to try to
              better understand and improve. Jennifer came to us via a referral.
              We had been looking for a trainer that could work with our busy
              schedules and also was comfortable with German Shepherds. And we
              also wanted a trainer that would match up well with our goals and
              preferred methods. For example, we were not looking for a "treat
              training" approach, as many trainers we spoke with were proposing.
              When Jennifer first arrived at our house, we were immediately
              comfortable with her, as she assessed Wilson's temperament and
              listened to us talk about our wishes for him. She asked all the
              right questions and was flexible in her approach, offering her
              experiences and expertise, and worked out a training plan that we
              could start immediately, with tasks to work on independently as
              well. The changes in Wilson were quick. But we also kept
              uncovering more and more interesting facets in his personality --
              not unusual in a rescue, especially one that was getting more and
              more comfortable in his new home. Wilson demonstrated a high level
              of intelligence, but also a lot of neurotic behavior. Haha.
              Through the process, Jennifer picked up on all of the new
              "surprises" and revamped her plan accordingly, with much success!
              With Wilson fully comfortable in his home -- and with our training
              goals attained -- it was sad to have to say goodbye to Jennifer.
              She is a fun, personable trainer and extremely good at what she
              does. She has so much knowledge and also understands the
              psychology behind dog behavior. We looked forward to her showing
              up on training days, and even Wilson loved seeing her, before he
              remembered that he'd have to work that day. 🙂 We highly recommend
              Jennifer!
            </Text>
            <HorizontalRule />
          </Testimonial>
        </Container>
      </Layout>
    </>
  )
}
