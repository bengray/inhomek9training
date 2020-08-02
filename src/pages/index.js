import React from "react"
import Layout from "../components/layout"
import { Container } from "../shared/styles"
import styled from "styled-components"
import dorner_logo_large from "../images/dorner_logo_large.png"
import homeBanner from "../images/homeBanner.jpg"

const HomeBanner = styled.img`
  z-index: 1;
  width: 100%;
  position: relative;
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
  line-height: 38px;
  font-weight: 700;
  font-size: 14px;
  margin: 90px 0 0 20px;
  line-height: 1.25rem;

  @media screen and (min-width: 480px) {
    margin: 130px 0 0 20px;
    line-height: 1.25rem;
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
      <HomeBanner src={homeBanner} />
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada
        aliquet velit, ut maximus enim condimentum dignissim. Nulla sagittis
        laoreet ante id blandit. Fusce venenatis, nunc ac lacinia molestie,
        sapien risus lacinia magna, ac fermentum nunc sem et purus. Vivamus a
        ornare nulla, a vehicula ante. Donec eu sagittis arcu. Nullam placerat
        sed lacus at rutrum. Vestibulum sapien libero, malesuada a porta sed,
        commodo in nulla. Vestibulum tempor euismod tincidunt. Nunc semper ipsum
        ut viverra malesuada. Proin egestas ante arcu, eu fringilla eros
        vulputate vel. Proin dapibus, nisi et eleifend vehicula, lorem enim
        semper lorem, vitae bibendum risus augue nec diam. Etiam finibus, justo
        eu tristique venenatis, risus turpis varius ligula, non tempor orci urna
        nec diam. Duis porta maximus enim et elementum. Donec nec ante vel purus
        condimentum tincidunt vitae nec justo. Integer purus lacus, lobortis ut
        auctor eget, porttitor in lorem. Nulla facilisi. Aliquam imperdiet lacus
        vitae orci blandit, sollicitudin efficitur nisl molestie. Donec
        vestibulum justo nec venenatis sodales. Nam convallis consectetur
        consectetur. Fusce egestas turpis ac justo condimentum volutpat. Aenean
        tincidunt diam et mauris tristique posuere. Vivamus non laoreet lectus.
        Donec sed leo sollicitudin, sollicitudin odio bibendum, mattis magna.
        Pellentesque eu mauris quis ex viverra aliquet vel ut ligula. Phasellus
        egestas justo et erat tincidunt, id varius nisi congue. Mauris varius
        arcu metus, non tempus lorem mollis non. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam vitae diam vel quam imperdiet
        condimentum. Sed sed nibh massa. Morbi posuere eros purus, nec ultricies
        urna volutpat ut. In enim elit, porta ac dictum sollicitudin, euismod
        fringilla turpis. Vestibulum non magna at ipsum sagittis tempor.
        Suspendisse potenti. Sed posuere, diam pretium dapibus dignissim, ex
        ante tempus tellus, et pulvinar purus mi et nisl. Curabitur in tortor
        velit. Fusce ut malesuada odio. Etiam rhoncus lorem id tellus pretium,
        id porttitor lectus bibendum. Sed mi augue, convallis et fermentum ac,
        rhoncus eu erat. Nullam id tortor et enim aliquam vehicula. Duis lorem
        tortor, ultrices eu ipsum congue, hendrerit egestas dui. Etiam nibh ex,
        aliquet eu mi quis, tempus molestie nibh. Suspendisse risus elit,
        iaculis sed nisl ac, auctor imperdiet mi. Integer congue dapibus justo,
        in maximus felis cursus et. Curabitur ultricies risus vitae imperdiet
        congue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aliquam ut rutrum nulla. Suspendisse enim elit,
        dapibus non mi at, convallis dapibus magna. Ut augue neque, placerat id
        hendrerit pellentesque, faucibus sed nulla. Integer tempus tellus vitae
        vulputate ornare.
      </Container>
    </Layout>
  )
}
