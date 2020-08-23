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
        href={location.href}
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
              her demeanor and control is subtle but refreshing. Best decision I
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

          <Testimonial>
            <Family>
              <FamilyName>Don & Pat Smith</FamilyName>
              <Stars />
            </Family>
            <Text>
              We have two Standard Poodles who are very nice dogs, but were
              unruly. Our walks were nightmares - they walked us. When our
              grandchildren came over, they would be over-whelmed by them. They
              would jump on them and sometimes knock them down. We needed help.
              We needed some obedience training. We found Jennifer Buchman's
              name in the paper and hired her With just one hour of training,
              she's made new dogs out of our Poodles. She has taught us so much
              and gave us so many good tips, that our dogs are a joy to walk and
              be around our grandchildren. We highly recommend Jennifer to
              anyone who's in need of dog obedience training.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Tom and Mary Breitzke</FamilyName>
              <Stars />
            </Family>
            <Text>
              I would like you to know that Tom and I would gladly recommend
              your dog training services. I would hope that at some point we
              would meet someone who would be very impressed with the good
              manners that our dog, Matea, displays and would want to know how
              we trained her. I would be sure to tell them that we had excellent
              guidance from you and that we couldn't have managed her without
              your excellent advice. Too many dogs are given away because people
              don't realize what a commitment of time and training it takes to
              have a well behaved dog and one that will be a valuable member of
              the family. Tom and I both thank you for all your help and
              especially for being available to return our calls when we needed
              to ask questions or advice. You are very professional and your
              relaxed manner with Matea helped us to overcome some of our
              initial fears of failure. Thank you for your help and be assured
              that we will highly recommend you to other dog owners that we
              meet.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Robert C. and Deborah J. Plautz</FamilyName>
              <Stars />
            </Family>
            <Text>
              We engaged the services of Jennifer Buchman to train our
              16-month-old cocker spaniel, Lady Girl. From the first meeting we
              were impressed with her professionalism. She always arrived at our
              home promptly at the agreed upon time. At our first session, she
              was prepared with a questionnaire to ascertain what training Lady
              required and what aspects of Lady's behavior we wanted to
              concentrate on. Before leaving, she gave us a few tips to start
              working on behavior corrections. During the subsequent training
              sessions, she was enthusiastic, diligent, and patient. She quickly
              earned our confidence that we have made the right decision in
              hiring her. Jennifer is one that we can recomend with complete
              confidence.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Mary Ann Carroll</FamilyName>
              <Stars />
            </Family>
            <Text>
              My husband and I have used the services of Jennifer Buchman to
              train our Rhodesian Ridgeback, Sammy. Jennifer has been working
              with us for about 5 months. Our dog was about 8 months old when
              Jennifer came to help us and Sammy was very strong-willed and hard
              to handle. Especially for me as she listened to my husband better
              than to me. The change is unbelieveable and has made the
              experience of training a puppy much more pleasant. Sammy is now
              well-mannered, listens most of the time and is starting to follow
              some of the more difficult commands such as "place" and "down."
              <br />
              <br />
              Jennifer is patient and extremely knowledgeable in how to train a
              dog, or really how to train us to train the dog. That is what we
              like about her services. We go at our own pace and she works with
              the dog and us, so it is us who are training the dog. Jennifer is
              punctual and extremely professional and I would recommend her
              highly.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Tammy E. Hicks</FamilyName>
              <Stars />
            </Family>
            <Text>
              Jennifer has been working with our family to train our dog since
              about March. She has taught us as a family the skills we needed to
              be able to guide/control our Doberman. When Jennifer first started
              with us, our dog wouldn't so much as sit when we commanded. Now,
              not only does he sit, we are able to walk with him without a leash
              through our neighborhood, and other places. Jennifer's training
              techniques are patient and consistent. She also has been flexible
              with us for our schedule. I am not very good with putting things
              into a letter, but in a word Jennifer has been "Awesome" for my
              dog and our family.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Ellen Toland</FamilyName>
              <Stars />
            </Family>
            <Text>
              I wanted to take this opportunity to praise the work you have done
              with our dog Paws. As you know, Paws had attended three group
              obedience classes prior to me finding you. Paws being a Dalmatian
              and almost three years old we thought we would never be able to
              walk her on a leash. I was embarrassed every time someone would
              knock on our door because she would lose control. We would scurry
              to lock her in a room and would have to leave her until the guests
              were gone. You provided me the knowledge and skill to work with
              her and control her unacceptable behavior. My only regret is I
              didn't find you sooner. I think of all the frustrating years and
              how we almost gave up on her. Thanks for giving us the dog we
              always wanted. I no longer dread a knock at the door and I can
              even walk her at the park. She developed to the point I can have
              her off leash in our unfenced yard and she will come to me and not
              run off. I can't think you enough. If you ever need recommendation
              please don't hesitate to have someone call me.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Susan J. Kinney</FamilyName>
              <Stars />
            </Family>
            <Text>
              Our family highly recommends Jennifer Buchman for the training of
              your dog. She has been working with us in the training of our
              eighteen month old Rottweiler and with her guidance we have had
              great success. She had instilled in us the need that this becomes
              a way of life for our dog and in doing so we have broken many bad
              habits. This has made living with our dog a pleasure. Jennifer is
              very professional. She answers all of our questions and directs
              the member of our family in the proper training. We have found
              working with her to be a wonderful experience and plan to continue
              until we are comforable that we have learned all that we can
              learn. Again, we recommend her to anyone who is serious about
              having a well-behaved dog.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Carol Leli</FamilyName>
              <Stars />
            </Family>
            <Text>
              I have known Jennifer Buchman since May of 2001. She has been my
              "in home" dog trainer. I found her service in the yellow pages and
              called her for an appointment for an evaluation of my dog.
              Jennifer was prompt in returning my call and scheduling a time to
              meet with me and evaluate my dog's needs.
              <br />
              <br />
              When we met, Jennifer was great with my dog. I have a black
              miniature Schnauzer who was about seven months old at the time. We
              discussed various manners I would like to see my dog have. We also
              discussed other necessities such as potty training, excessive
              barking, walking/heeling on a leash, chewing, and commands such as
              and "sit", "down" and "stay". Each lesson was intense and very
              productive. It was extra nice to train at my house because we
              could discuss particular things I wanted my dog to do and what I
              didn't want her to do in and around the house. We had five
              lessons, each about two weeks apart. Jennifer worked with my dog
              and me during each lesson. She was confident about her dog
              training and working with humans as well! Jennifer was efficient,
              prompt, and knowledgeable. I highly recommend her to train your
              dog and YOU.
            </Text>
            <HorizontalRule />
          </Testimonial>

          <Testimonial>
            <Family>
              <FamilyName>Crystal Smith</FamilyName>
              <Stars />
            </Family>
            <Text>
              I am writing this letter of recommendation to Jennifer Dorner as
              an excellent dog trainer. Our personal experience has changed the
              stress level of our home.
              <br />
              <br />
              We are new at being dog owners. We have had only cats for over 20
              years. We decided it was time to get our girls a puppy. We decided
              to adopt a puppy that needed a home. We found Libby (a black lab
              mix) at Pet Helpers near Folly. She was a typical puppy. She
              wasn't potty trained, had tons of energy, loved to dig in the
              yard, ate her own waste, tugged and pulled us when trying to walk
              her. She would also jump on people and almost knocked my great
              aunt and mom over. We needed help with making Libby fit into our
              family. When we met with Jennifer we told her how frustrated we
              were with these behaviors and that we loved her but she was
              causing a huge amount of stress in the home. Jennifer never acted
              intimidated by the challenge. She told us Libby's behavior was
              typical and she was fully capable of fitting into our lives versus
              us fitting into her life. I was skeptical because we had
              interviewed a different trainer and took Libby to all three
              training classes at our local pet store. Nothing was working. We
              got started with Jennifer immediately. Within the first hour of
              training we were amazed at the fact that Libby quickly understood
              what was being commanded by Jennifer. In other words, Libby had
              been playing us and knew she had the upper hand in our home. By
              the end of the hour, Libby was staying in position and was
              obedient and fully capable of not jumping. My husband (was not a
              dog person) started telling people at work about how impressed he
              was and that she was a completely different dog. He has passed her
              name along to a few there.
              <br />
              <br />
              Jennifer is supportive and encouraging to work with. She doesn't
              make you feel stupid. She takes her job seriously but makes it
              fun. She is very knowledgeable about the different breeds and
              their unique personalities. She has helped us so much and I cannot
              say enough about how our home is at peace again. We always loved
              our Libby but it was difficult to like her sometimes until
              Jennifer came into our lives.
            </Text>
            <HorizontalRule />
          </Testimonial>
        </Container>
      </Layout>
    </>
  )
}
