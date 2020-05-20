import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/stylesheet.module.css"
import "../styles/stylesheet.module.css"
import SVG from "../components/svgs/svg"

import { animatedPaths } from "./Home"
import UnitOption from "../components/unitOption"
import { useStaticQuery, graphql } from "gatsby"
import Contact from "../components/contact"
import FounderSlider from "../components/founderSlider"
import AppFeatures from "../components/appFeatures"
import WrappedText from "../components/wrappedText/wrappedText"
import Backdrop from "../components/backdrop"
import Img from "gatsby-image"

const VisionPage = props => {
  useEffect(() => {
    require("../interactions/innerImage")
  }, [props])
  const [showModal, setShowModal] = useState(false)
  const [toggleFounder, setToggleFounder] = useState(false)

  //Desktop SVGS
  const svgVisionHeroTop = useRef()
  const svgVisionHeroBottom = useRef()
  const svgVisionOne = useRef()
  const svgVisionTwo = useRef()
  const svgVisionThree = useRef()
  const svgVisionFour = useRef()
  const svgVisionFive = useRef()
  const svgVisionSix = useRef()
  const svgVisionSeven = useRef()
  const svgVisionEight = useRef()
  const svgVisionNine = useRef()
  const svgVisionTen = useRef()
  const svgVisionEleven = useRef()
  const svgVisionTwelve = useRef()
  const svgVisionThirteen = useRef()
  const svgVisionFourteen = useRef()
  // Mobile SVGS
  const svgVisionMobileOne = useRef()
  const svgVisionMobileTwo = useRef()
  const svgVisionMobileThree = useRef()
  const svgVisionMobileFour = useRef()
  const svgVisionMobileFive = useRef()
  const svgVisionMobileSix = useRef()
  const svgVisionMobileSeven = useRef()
  const svgVisionMobileEight = useRef()
  const svgVisionMobileNine = useRef()
  const svgVisionMobileTen = useRef()
  //Brandmarks
  const svgRedBrandmark = useRef()

  const data = useStaticQuery(graphql`
    query {
      generator: file(relativePath: { eq: "13.png" }) {
        childImageSharp {
          fixed(width: 960, height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      signIn: file(relativePath: { eq: "14.png" }) {
        childImageSharp {
          fixed(width: 960, height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      biometric: file(relativePath: { eq: "15.png" }) {
        childImageSharp {
          fixed(width: 960, height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      guards: file(relativePath: { eq: "16.png" }) {
        childImageSharp {
          fixed(width: 960, height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      cameras: file(relativePath: { eq: "17.png" }) {
        childImageSharp {
          fixed(width: 960, height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    
      orangeBrandmark: file(relativePath: { eq: "PLHoldingBrandmarkOrange.png" }) {
        childImageSharp {
          fixed(width: 285, height: 177) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      orangeBrandmarkMobile: file(relativePath: { eq: "PLHoldingBrandmarkOrange.png" }) {
        childImageSharp {
          fixed(width: 285, height: 177) {
            ...GatsbyImageSharpFixed
          }
        }
      }

    }

  `)

  const changeFounder = () => {
    setToggleFounder(!toggleFounder)
  }

  return (
    <Layout>
      <SEO title="Vision" />
      {/* from locations_page merge
      <div className={styles.visionHero}>
      <svg className={styles.visionHeroSvgTop} xmlns="http://www.w3.org/2000/svg" width="299.425" height="326.69" viewBox="0 0 299.425 326.69">
  <path id="_1_vision" data-name="1_vision" d="M198.572,168.08s40.441,128.712,275.457,174.347" transform="matrix(0.559, -0.829, 0.829, 0.559, -249.994, 299.161)" fill="none" stroke="#001a7d" stroke-miterlimit="10" stroke-width="1"/>
</svg>
<svg className={styles.visionHeroSvgBottom} xmlns="http://www.w3.org/2000/svg" width="521.684" height="89.443" viewBox="0 0 521.684 89.443">
  <path id="_2_vision" data-name="2_vision" d="M314.016,203.067c93.274-18.737,261.9-25.678,522.313-24.928" transform="translate(-333.22 -74.34) rotate(-7)" fill="none" stroke="#001a7d" stroke-miterlimit="10" stroke-width="1"/>
</svg>

        <div className={styles.content}>
          <img className={styles.content__img} src={one} alt="security guards" />
          <img className={styles.content__img} src={two} alt="proper living community" />
          <img className={styles.content__img} src={three} alt="proper living blog" />
          <img className={styles.content__img} src={four} alt="girl with book" />
          <img className={styles.content__img} src={five} alt="proper living spaces" />
          <img className={styles.content__img} src={six} alt="stylised fingerprint reader" />
          <img className={styles.content__img} src={seven} alt="two students smiling" />
          <img className={styles.content__img} src={eight} alt="weaver birds" />
          <img className={styles.content__img} src={nine} alt="light bulb on split background" />
          <img className={styles.content__img} src={ten} alt="five friends facing away on a beach" />
          <img className={styles.content__img} src={eleven} alt="iphone and ear pods face down on a table" />
          <img className={styles.content__img} src={twelve} alt="stylised security camera" />
          <img className={styles.content__img} src={thirteen} alt="person working on tablet with phone beside them" />
          <img className={styles.content__img} src={fourteen} alt="three uniformed security guards"/>
          <img className={styles.content__img} src={fifteen} alt="security guard watching cctv monitors and talking into walkie-talkie" />
          <h3 className={styles.content__title}>
            We design modern communities that advance the wellbeing of young
            adults.
          </h3>
          <div className={styles.scrollSVG}>
            <div className={styles.scrollSVGText}>Scroll Down</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="45"
              viewBox="0 0 25 60"
            >
              <g
                id="scroll_down"
                data-name="scroll down"
                transform="translate(-929 -666)" */}
      <div data-scroll>
        <Backdrop
          show={showModal}
          clicked={() => {
            setShowModal(false)
          }}
        />
        <div className={styles.visionHeroContainer}>
        <div className={styles.visionHero}>
          <div className={styles.content}>
          <SVG
            style={[styles.svgVisionBase, styles.svgVisionHeroTop].join(" ")}
            width="299.425"
            height="326.69"
            viewBox="0 0 299.425 326.69"
            id="visionHeroTop"
            d="M198.572,168.08s40.441,128.712,275.457,174.347"
            transform="matrix(0.559, -0.829, 0.829, 0.559, -249.994, 299.161)"
            fill="none"
            ref={svgVisionHeroTop}
            animateF={animatedPaths}
            time={200}
            />
            {/* <img className={styles.content__img} src={one} alt="Some image" />
          <img className={styles.content__img} src={two} alt="Some image" />
          <img className={styles.content__img} src={three} alt="Some image" />
          <img className={styles.content__img} src={four} alt="Some image" />
          <img className={styles.content__img} src={five} alt="Some image" />
          <img className={styles.content__img} src={six} alt="Some image" />
          <img className={styles.content__img} src={seven} alt="Some image" />
          <img className={styles.content__img} src={eight} alt="Some image" />
          <img className={styles.content__img} src={nine} alt="Some image" />
          <img className={styles.content__img} src={ten} alt="Some image" />
          <img className={styles.content__img} src={eleven} alt="Some image" />
          <img className={styles.content__img} src={twelve} alt="Some image" />
          <img
            className={styles.content__img}
            src={thirteen}
            alt="Some image"
          />
          <img
            className={styles.content__img}
            src={fourteen}
            alt="Some image"
          />
          <img className={styles.content__img} src={fifteen} alt="Some image" /> */}

            <div className={styles.vision_hero_topImage}>
              <div className={styles.imageAnimationItem}>
                <SVG
                style={[styles.svgVisionBase, styles.svgVisionMobileOne].join(" ")}
                width="80.908" 
                height="65.229"
                viewBox="0 0 80.908 65.229"
                id="svgVisionMobileOne"
                d="M48.778,0C17.6,17.063,5.2,31.183,0,70.535"
                transform="translate(12.284 64.642) rotate(-104)"
                fill="none"
                ref={svgVisionMobileOne}
                animateF={animatedPaths}
                time={1000}
                />
                {/* <div className={styles.sectionImageContainer}> */}
                <div className={styles.mobileHeroTop}>
                  <div
                    className={[styles.item__img, styles.item__img__t0].join(
                      " "
                    )}
                  ></div>
                  {/* </div> */}
                </div>
              </div>
            </div>

            <h3 className={styles.content__title}>
              We design modern communities <br /> that advance the wellbeing of <br /> young
              adults.
            </h3>
            <h3 className={styles.content__title_mobile}>
              Modern Communities, Designed For Young Adults.
            </h3>
            <div className={styles.vision_hero_bottomImage}>
              <div className={styles.imageAnimationItem}>
                <SVG
                style={[styles.svgVisionBase, styles.svgVisionMobileTwo].join(" ")}
                width="591.282"
                height="39.552"
                viewBox="0 0 591.282 39.552"
                id="3"
                d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
                transform="translate(-316.969 -161.77) rotate(-1)"
                fill="none"
                ref={svgVisionMobileTwo}
                animateF={animatedPaths}
                time={200}
                />
                {/* <div className={styles.sectionImageContainer}> */}
                <div className={styles.mobileHeroBottom}>
                  <div
                    className={[styles.item__img, styles.item__img__t0].join(
                      " "
                    )}
                  ></div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroFooter}>
            <SVG
            style={[styles.svgVisionBase, styles.svgVisionHeroBottom].join(" ")}
            width="591.282"
            height="39.552"
            viewBox="0 0 591.282 39.552"
            id="3"
            d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
            transform="translate(-316.969 -161.77) rotate(-1)"
            fill="none"
            ref={svgVisionHeroBottom}
            animateF={animatedPaths}
            time={200}
            />
            <div className={styles.heroFooterSocials}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.338"
                height="19.333"
                viewBox="0 0 19.338 19.333"
              >
                <path
                  id="Icon_awesome-instagram"
                  data-name="Icon awesome-instagram"
                  d="M9.666,6.948A4.957,4.957,0,1,0,14.622,11.9,4.949,4.949,0,0,0,9.666,6.948Zm0,8.179A3.223,3.223,0,1,1,12.888,11.9a3.228,3.228,0,0,1-3.223,3.223Zm6.316-8.382a1.156,1.156,0,1,1-1.156-1.156A1.153,1.153,0,0,1,15.981,6.745Zm3.283,1.173A5.722,5.722,0,0,0,17.7,3.867a5.759,5.759,0,0,0-4.051-1.562c-1.6-.091-6.38-.091-7.977,0A5.751,5.751,0,0,0,1.624,3.863,5.74,5.74,0,0,0,.063,7.914c-.091,1.6-.091,6.38,0,7.977a5.722,5.722,0,0,0,1.562,4.051A5.766,5.766,0,0,0,5.675,21.5c1.6.091,6.38.091,7.977,0A5.722,5.722,0,0,0,17.7,19.941a5.759,5.759,0,0,0,1.562-4.051c.091-1.6.091-6.376,0-7.972ZM17.2,17.6a3.263,3.263,0,0,1-1.838,1.838c-1.273.5-4.292.388-5.7.388s-4.43.112-5.7-.388A3.263,3.263,0,0,1,2.129,17.6c-.5-1.273-.388-4.292-.388-5.7s-.112-4.431.388-5.7A3.263,3.263,0,0,1,3.967,4.368c1.273-.5,4.292-.388,5.7-.388s4.43-.112,5.7.388A3.263,3.263,0,0,1,17.2,6.206c.5,1.273.388,4.292.388,5.7S17.707,16.335,17.2,17.6Z"
                  transform="translate(0.005 -2.238)"
                  fill="#001a7d"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.327"
                height="19.327"
                viewBox="0 0 19.327 19.327"
              >
                <path
                  id="Icon_awesome-facebook-square"
                  data-name="Icon awesome-facebook-square"
                  d="M17.256,2.25H2.071A2.071,2.071,0,0,0,0,4.321V19.506a2.071,2.071,0,0,0,2.071,2.071H7.992V15.006H5.274V11.913H7.992V9.556c0-2.681,1.6-4.162,4.041-4.162a16.465,16.465,0,0,1,2.4.209V8.234H13.079a1.546,1.546,0,0,0-1.744,1.671v2.008H14.3l-.475,3.093H11.335v6.571h5.921a2.071,2.071,0,0,0,2.071-2.071V4.321A2.071,2.071,0,0,0,17.256,2.25Z"
                  transform="translate(0 -2.25)"
                  fill="#001a7d"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 61.999 37.132"
              >
                <path
                  id="Path_393"
                  data-name="Path 393"
                  d="M387.913,276.611c-2.463-4.149-8.264-13.926-9.17-15.45-6.179-10.412-11.8-9.848-17.345-9.848-2.076,0,1.81-2.64-1.938-6.35a10.7,10.7,0,0,1-1.811-3.737.528.528,0,0,0-1,0,10.7,10.7,0,0,1-1.811,3.737c-3.748,3.711.138,6.35-1.938,6.35-5.545,0-11.166-.565-17.345,9.848-.906,1.525-6.707,11.3-9.17,15.45-1.5,2.522,4.559,1.667,7.379-3.087,1.147-1.933,2.293-4.649,5.759-4.649a5.273,5.273,0,0,0,4.533-2.581c4.921-8.285,8.408-5.076,7.258-3.138L345.776,271c-3.953,6.659,26.7,6.66,22.746,0l-5.538-7.849c-1.149-1.938,2.338-5.147,7.258,3.138a5.273,5.273,0,0,0,4.533,2.581c3.466,0,4.613,2.717,5.759,4.649C383.354,278.278,389.414,279.133,387.913,276.611Z"
                  transform="translate(-326.149 -240.865)"
                  fill="#001a7d"
                />
              </svg>
            </div>
            <div className={styles.heroFooterText}>Student Accomodation</div>
          </div>
        </div>
        </div>

        <div className={styles.visionSectionsContainer}>
          <SVG
            style={[styles.svgBase, styles.svgVisionOne].join(" ")}
            width="264.355"
            height="260.392"
            viewBox="0 0 264.355 260.392"
            id="svgVisionOne"
            d="M556.7,347.617c-17.856,36.221-73.888,65.229-210.08,93.875q-27.628,5.812-55.229,10.676"
            transform="matrix(0.719, 0.695, -0.695, 0.719, 104.898, -452.252)"
            fill="none"
            ref={svgVisionOne}
            animateF={animatedPaths}
            time={1500}
          />
          <div className={styles.imageContent}>
            <div className={styles.imageAnimationItem}>
              <div className={styles.visionMainSectionContainer}>
                <div className={[styles.visionSectionImageContainer, styles.modernLifeImageContainer].join(" ")}>
                  <div className={styles.visionModernLifeWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t0].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>

                <div className={styles.visionMainSectionInfoContainer} id="properCommunity">
                  <h2 className={styles.visionSectionInfoHeading}>
                    Modern Life, Lived Proper.
                  </h2>
                  <p className={styles.visionSectionInfoBody}>
                    At Proper Living we believe that we can make a significant
                    improvement to the lives of thousands of young people
                    through <WrappedText color="red">modern</WrappedText> design
                    and by creating communities.
                    <span className={styles.nonMobileText}>
                      {" "}
                      <br />
                      <br />
                      We invite people from all walks of life to join us live
                      their modern lives properly. Our inspiration comes from a
                      very <WrappedText color="red">special</WrappedText> South
                      African bird called the Sociable weaver. <br />
                      <br />
                      They build large compound community nests, a rarity among
                      birds. These nests are perhaps the most spectacular
                      structure built by any bird. Please feel free to{" "}
                      <WrappedText color="red">fly down</WrappedText> the page
                      and find out more about this incredible bird and
                      information a key aspect to why people loves us, our
                      security.
                    </span>
                  </p>
                </div>
                <SVG
                style={[styles.svgBase, styles.svgVisionMobileThree].join(" ")}
                width="171.626"
                height="179.574"
                viewBox="0 0 171.626 179.574"
                id="svgVisionMobileThree"
                d="M164.985,0C133.931,95.74,97.491,131.427,0,173.285"
                transform="matrix(0.999, 0.035, -0.035, 0.999, 6.261, 0.161)"
                fill="none"
                ref={svgVisionMobileThree}
                animateF={animatedPaths}
                time={1500}
                />
              </div>
            </div>

            <div className={styles.visionTestimonialContainer}>
              <SVG
              style={[styles.svgVisionBase, styles.svgVisionTwo].join(" ")}
              width="591.282"
              height="39.552"
              viewBox="0 0 591.282 39.552"
              id="3"
              d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
              transform="translate(-316.969 -161.77) rotate(-1)"
              fill="none"
              ref={svgVisionTwo}
              animateF={animatedPaths}
              time={2000}
              />
              <div className={styles.visionTestimonialCopy}>
                "Our inspiration comes from a very special South African bird
                called the Sociable Weaver"
              </div>
            </div>

            <div className={styles.imageAnimationItem}>
              <div className={styles.visionSubSectionContainer}>
                <div className={styles.visionSubSectionInfoContainerLeft}>
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionThree].join(" ")}
                  width="214.174"
                  height="206.5"
                  viewBox="0 0 214.174 206.5"
                  id="svgVisionThree"
                  d="M610.421,407.917c-1.165,78.439-61.1,126.125-163.74,175.19"
                  transform="translate(437.889 -541.605) rotate(74)"
                  fill="none"
                  ref={svgVisionThree}
                  animateF={animatedPaths}
                  time={1500}
                  />
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionMobileFour].join(" ")}
                  width="145.046"
                  height="150.944"
                  viewBox="0 0 145.046 150.944"
                  id="svgVisionMobileFour"
                  d="M125.478,0C45.284,28.415,13.374,51.932,0,117.466"
                  transform="translate(30.854 150.355) rotate(-104)"
                  fill="none"
                  ref={svgVisionMobileFour}
                  animateF={animatedPaths}
                  time={1500}
                  />
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionMobileFive].join(" ")}
                  width="136.861"
                  height="111.703"
                  viewBox="0 0 136.861 111.703"
                  id="svgVisionMobileFive"
                  d="M0,0C53.123,15.712,98.739,25.9,152.491,23.522"
                  transform="translate(0.402 92.167) rotate(-37)"
                  fill="none"
                  ref={svgVisionMobileFive}
                  animateF={animatedPaths}
                  time={1000}
                  />
                  <h2 className={styles.visionSubSectionInfoHeading}>
                    The Sociable Weaver
                  </h2>

                  <p className={styles.visionSectionInfoBody}>
                    This beautiful bird{" "}
                    <WrappedText color="red">inspired</WrappedText> our logo and
                    impacted many elements of our brand. They're a species of
                    bird in the weaver family that is endemic to{" "}
                    <WrappedText color="red">Southern Africa</WrappedText>. it's
                    found in South Africa, Namibia and Botswana, but their range
                    is cantered within the Northern Cape Province of South
                    Africa.
                    <span className={styles.nonMobileText}>
                      {" "}
                      <br />
                      <br />
                      Sociable Weavers use and maintain their nests throughout
                      the year. They nest in colonies as small as 10 individuals
                      and up to 400-500 birds. Their nests are{" "}
                      <WrappedText color="red">
                        instantly recognisable
                      </WrappedText>
                      , massive and resembling huge apartment blocks.
                    </span>
                  </p>
                </div>

                <div className={[styles.visionSectionImageContainer, styles.weaverImageContainer].join(" ")}>
                  <div className={styles.visionWeaverWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t1].join(" ")    
                    }></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.pullQuote}>
              <div className={styles.weaverPullQuote}>
                "They nest in colonies as small as 10 individuals and up to 400-500 birds"
              </div>
              <div className={styles.visionOrangeBrandmark}>
              <Img fixed={data.orangeBrandmark.childImageSharp.fixed}/> 
              </div>
            </div>
            
            <div className={styles.founderSliderCompleteCont}>
              <SVG
              style={[styles.svgVisionBase, styles.svgVisionFour].join(" ")}
              width="562.153"
              height="302.806"
              viewBox="0 0 562.153 302.806"
              id="svgVisionFour"
              d="M453.115,453.995C756.48,442.151,857.631,391.81,985.726,258.561"
              transform="matrix(0.978, -0.208, 0.208, 0.978, -496.88, -47.553)"
              fill="none"
              ref={svgVisionFour}
              animateF={animatedPaths}
              time={1500}
              />
              <SVG
              style={[styles.svgVisionBase, styles.svgVisionFive].join(" ")}
              width="531.658"
              height="310.164"
              viewBox="0 0 531.658 310.164"
              id="Path_435"
              d="M941.526,49.316S891.461,364.607,650.212,570.638"
              transform="translate(547.99 -651.21) rotate(88)"
              fill="none"
              ref={svgVisionFive}
              animateF={animatedPaths}
              time={1500}
              />
              <FounderSlider
                changeFounder={changeFounder}
                slide={toggleFounder}
              />
              <div className={styles.mobileFounderSection}>
                <SVG
                style={[styles.svgVisionBase, styles.svgVisionMobileSix].join(" ")}
                width="180.489"
                height="143.056"
                viewBox="0 0 180.489 143.056"
                id="svgVisionMobileSix"
                d="M254.227,245.175c-1.638,22.1-2.784,107.7-125.445,167.737"
                transform="matrix(0.105, 0.995, -0.995, 0.105, 397.658, -153.482)"
                fill="none"
                ref={svgVisionMobileSix}
                animateF={animatedPaths}
                time={1500}
                />
                  <div className={styles.founderSliderHeading}>
                    Meet The People Behind Proper Living
                  </div>
                  <div className={styles.mobileFounderSubContainer}>
                  <div className={styles.imageAnimationItem}>
                    <div className={styles.casparMobilePic}>
                      <div
                        className={[
                          styles.item__img,
                          styles.item__img__t4,
                        ].join(" ")}
                      ></div>
                    </div>
                    </div>
                    <div className={styles.mobileFounderCopyCont}>
                      <div className={styles.mobileFounderName}>Caspar Lee</div>
                      <div className={styles.mobileFounderDesc}>
                        "An interesting quote or sort paragraph about yourself
                        or business goals.
                      </div>
                    </div>
                  </div>
                  <div className={styles.mobileFounderSubContainer}>
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionMobileSeven].join(" ")}
                  width="198.88"
                  height="170.845"
                  viewBox="0 0 180.489 143.056"
                  id="svgVisionMobileSeven"
                  d="M2.525,0C-13.355,48.723,45.46,72.229,184.641,80.563"
                  transform="translate(198.429 67.449) rotate(146)"
                  fill="none"
                  ref={svgVisionMobileSeven}
                  animateF={animatedPaths}
                  time={1500}
                  />
                    <div className={styles.mobileFounderCopyCont}>
                      <div className={styles.mobileFounderName}>Benji Schaffer</div>
                      <div className={styles.mobileFounderDesc}>
                        "An interesting quote or sort paragraph about yourself
                        or business goals.
                      </div>
                    </div>
                    <div className={styles.imageAnimationItem}>
                    <div className={styles.benjiMobilePic}>
                      <div
                        className={[
                          styles.item__img,
                          styles.item__img__t3,
                        ].join(" ")}
                      ></div>
                    </div>
                    </div>
                  </div>
                    <div className={styles.visionOrangeBrandmarkMobile}>
                    <Img fixed={data.orangeBrandmarkMobile.childImageSharp.fixed}/> 
                    </div>
                </div>
            </div>

            <div className={styles.imageAnimationItem}>
              <div className={styles.visionMainSectionContainer}>
                <div className={[styles.visionSectionImageContainer, styles.securityImageContainer].join(" ")}>
                  <div className={styles.visionSecurityWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t2].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>

                <div className={styles.visionMainSectionInfoContainer} id="properSecurity">
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionMobileEight].join(" ")}
                  width="80.908"
                  height="65.229"
                  viewBox="0 0 80.908 65.229"
                  id="svgVisionMobileEight"
                  d="M48.778,0C17.6,17.063,5.2,31.183,0,70.535"
                  transform="translate(12.284 64.642) rotate(-104)"
                  fill="none"
                  ref={svgVisionMobileEight}
                  animateF={animatedPaths}
                  time={1500}
                  /> 
                  <h2 className={styles.visionSectionInfoHeading}>
                    <span className={styles.nonMobileText}>
                      An in-depth description of Security at Proper Living.
                    </span>
                    <span className={styles.nonDesktopText}>
                      Our security is next-level.
                    </span>
                  </h2>
                  <p className={styles.visionSectionInfoBody}>
                    We take <WrappedText color="red">security</WrappedText> very{" "}
                    <WrappedText color="red">seriously</WrappedText>. That’s why
                    we provide 24/7 guards, biometric fingerprint scanners,
                    state of the art surveillance and have partnerships with
                    leading{" "}
                    <WrappedText color="red">rapid response </WrappedText>
                    companies.
                    <span className={styles.nonMobileText}>
                      {" "}
                      <br />
                      <br /> Whether you’re{" "}
                      <WrappedText color="red">moving out</WrappedText> for the
                      first time or have decided to join us slightly later, we
                      know how big of a deal leaving your home can be. Rest
                      assured, we’ve put in everything we can do make sure your
                      time with us is{" "}
                      <WrappedText color="red">safe</WrappedText>. This is what
                      we pride ourselves on.
                    </span>
                  </p>
                </div>
                
              </div>

              <div className={[styles.unitOptionContainer, styles.visionOptionContainer].join(" ")}>
                <SVG
                style={[styles.svgVisionBase, styles.svgVisionMobileNine].join(" ")}
                width="139.988"
                height="120.9"
                viewBox="0 0 139.988 120.9"
                id="svgVisionMobileNine"
                d="M0,0C49.238,28.8,91.518,47.479,141.339,43.112"
                transform="translate(0.461 85.431) rotate(-37)"
                fill="none"
                ref={svgVisionMobileNine}
                animateF={animatedPaths}
                time={1500}
                />
                <div className={styles.visionUnitOptionSubContainer}>
                  <UnitOption
                    type={"24/7 CCTV Camera"}
                    desc={""}
                    cta={""}
                    imageHover={data.cameras.childImageSharp.fixed}
                  />
                  <UnitOption
                    type={"Rotational Guards"}
                    desc={""}
                    cta={""}
                    imageHover={data.guards.childImageSharp.fixed}
                  />
                  <UnitOption
                    type={"Biometric System"}
                    desc={""}
                    cta={""}
                    imageHover={data.biometric.childImageSharp.fixed}
                  />
                  <UnitOption
                    type={"Digital Guest Sign-in Tracking"}
                    desc={""}
                    cta={""}
                    imageHover={data.signIn.childImageSharp.fixed}
                  />
                  <UnitOption
                    type={"Secure Generator"}
                    desc={""}
                    cta={""}
                    imageHover={data.generator.childImageSharp.fixed}
                  />
                </div>
              </div>
            </div>

            <div className={styles.visionTestimonialContainer}>
              <SVG
              style={[styles.svgVisionBase, styles.svgVisionSix].join(" ")}
              width="187.139"
              height="206.504"
              viewBox="0 0 187.139 206.504"
              id="svgVisionSix"
              d="M254.227,245.175c-1.638,22.1-2.784,107.7-125.445,167.737" 
              transform="translate(65.655 -276.687) rotate(26)"
              fill="none"
              ref={svgVisionSix}
              animateF={animatedPaths}
              time={1000}
              />
              <SVG
              style={[styles.svgVisionBase, styles.svgVisionSeven].join(" ")}
              width="531.684"
              height="320.476"
              viewBox="0 0 531.684 320.476"
              id="3"
              d="M569.737,392.532c-63.489,136.931,453.475,384.931,510.645,258"
              transform="translate(-583.582 -335.217) rotate(-3)"
              fill="none"
              ref={svgVisionSeven}
              animateF={animatedPaths}
              time={1000}
              />
              <div className={styles.visionTestimonialCopy}>
                "24/7 guards, biometric fingerprint <br /> scanners, state of the art
                surveillance"
              </div>
            </div>

            <div className={[styles.imageAnimationItem, styles.cctv].join(" ")}>
              <div className={styles.visionSubSectionContainer}>
                <div className={styles.visionSubSectionInfoContainerLeft}>
                  <h2 className={styles.visionSubSectionInfoHeading}>
                    24/7 CCTV Cameras
                  </h2>

                  <p className={styles.visionSectionInfoBody}>
                    Common and external spaces within and nearby the premises
                    are
                    <WrappedText color="red"> protected</WrappedText> by state
                    of the art{" "}
                    <WrappedText color="red">surveillance </WrappedText>{" "}
                    cameras. We’ve gone a step further by ensuring streams are{" "}
                    <WrappedText color="red">monitored</WrappedText> by a{" "}
                    <WrappedText color="red">specialist </WrappedText>
                    monitoring team who will immediately dispatch resources if
                    any suspicious activity occurs. 
                  </p>
                </div>

                <div className={styles.sectionImageContainerRight}>
                  <div className={styles.visionCamerasWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t3].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.pullQuote}>
              <div className={styles.cameraPullQuote}>
                "monitored by a specialist monitoring team."
              </div>
            </div>

            <div className={[styles.imageAnimationItem, styles.guards].join(" ")}>
              <div className={styles.visionSubSectionContainer}>
                <SVG
                style={[styles.svgVisionBase, styles.svgVisionEight].join(" ")}
                width="591.282"
                height="39.552"
                viewBox="0 0 591.282 39.552"
                id="3"
                d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
                transform="translate(-316.969 -161.77) rotate(-1)"
                fill="none"
                ref={svgVisionEight}
                animateF={animatedPaths}
                time={200}
                />
                <div className={styles.sectionImageContainerLeft}>
                  <div className={styles.visionGuardsWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t4].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>

                <div className={styles.visionSubSectionInfoContainerRight}>
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionNine].join(" ")}
                  width="425.47"
                  height="252.138"
                  viewBox="0 0 425.47 252.138"
                  id="3"
                  d="M453.115,468.672c230.8-12.733,307.754-66.854,405.207-210.11"
                  transform="matrix(0.995, -0.105, 0.105, 0.995, -477.603, -167.103)"
                  fill="none"
                  ref={svgVisionNine}
                  animateF={animatedPaths}
                  time={1000}
                  />
                  <h2 className={styles.visionSubSectionInfoHeading}>
                    Rotational Guards
                  </h2>
                  <p className={styles.visionSectionInfoBody}>
                    We’ve hired an{" "}
                    <WrappedText color="red">exceptional security</WrappedText>{" "}
                    team and demand the highest standards. All guards must have{" "}
                    <WrappedText color="red">high-level</WrappedText>{" "}
                    qualifications in line with PSIRA registration policies. The
                    guards are on <WrappedText color="red">24/7 </WrappedText>
                    rotation and are well connected to the rest of our security
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.pullQuote}>
              <div className={styles.guardsPullQuote}>
              "High-level qualifications in line with PSIRA registration
              policies"
              </div>
            </div>

            <div className={[styles.imageAnimationItem, styles.biometric].join(" ")}>
              <div className={styles.visionSubSectionContainer}>
                <div className={styles.visionSubSectionInfoContainerLeft}>
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionTen].join(" ")}
                  width="255.553"
                  height="161.487" 
                  viewBox="0 0 255.553 161.487"
                  id="svgVisionTen"
                  d="M268.752,245.175c-1.828,32.114-3.106,156.517-139.97,243.766"
                  transform="translate(476.3 -149.39) rotate(85)"
                  fill="none"
                  ref={svgVisionTen}
                  animateF={animatedPaths}
                  time={1000}
                  />
                  <h2 className={styles.visionSubSectionInfoHeading}>
                    Biometric System
                  </h2>

                  <p className={styles.visionSectionInfoBody}>
                    We’ve brought in a proper{" "}
                    <WrappedText color="red">biometric</WrappedText> system
                    which allows residents to use their{" "}
                    <WrappedText color="red">fingerprints</WrappedText> as keys
                    to their rooms.{" "}
                    <WrappedText color="red"> No more</WrappedText> worrying
                    about lost or stolen{" "}
                    <WrappedText color="red">keys</WrappedText>. Obviously, this
                    helps in terms of security but we mainly did this because
                    our co-founder Caspar Lee{" "}
                    <WrappedText color="red">always</WrappedText> loses his
                    keys!
                  </p>
                </div>

                <div className={styles.sectionImageContainerRight}>
                  <div className={styles.visionBiometricWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t5].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.pullQuote}>
              <div className={styles.biometricPullQuote}>
              "No more worrying about stolen or lost keys."
              </div>
            </div>

            <div className={[styles.imageAnimationItem, styles.guestSignIn].join(" ")}>
              <div className={styles.visionSubSectionContainer}>
                <div className={styles.sectionImageContainerLeft}>
                  <div className={styles.visionGuestWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t6].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>

                <div className={styles.visionSubSectionInfoContainerRight}>
                  <SVG
                  style={[styles.svgBase, styles.svgVisionEleven].join(" ")}
                  id="45"
                  d="M493.992,379.148c104.73,200.774-47.955,340.47-358.591,450.017q-21.766,7.675-43.59,14.812"
                  transform="translate(-59 -378.917)"
                  width="435.544"
                  height="465.536"
                  viewBox="0 0 435.544 465.536"
                  ref={svgVisionEleven}
                  animateF={animatedPaths}
                  time={4500}
                  />
                  <h2 className={styles.visionSubSectionInfoHeading}>
                    Digital Guest Sign-in Tracking
                  </h2>
                  <p className={styles.visionSectionInfoBody}>
                    In order to track your guests, we’ve placed tablets with
                    proper
                    <WrappedText color="red">
                      {" "}
                      sign-in/sign-out
                    </WrappedText>{" "}
                    software in our reception area. When your guest comes to{" "}
                    <WrappedText color="red">visit</WrappedText>, as they sign
                    in, you’ll receive an email
                    <WrappedText color="red"> informing you</WrappedText> that
                    they’ve arrived. The software also allows us to{" "}
                    <WrappedText color="red">track</WrappedText> everyone in the
                    building in case of an evacuation.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.pullQuote}>
              <div className={styles.signInPullQuote}>
                "You will receive an email to notify you when your guest comes
                to visit"
              </div>
            </div>

            <div className={[styles.imageAnimationItem, styles.generator].join(" ")}>
              <div className={styles.visionSubSectionContainer}>
                <div className={styles.visionSubSectionInfoContainerLeft}>
                  <h2 className={styles.visionSubSectionInfoHeading}>
                    Secure Generator
                  </h2>
                  <p className={styles.visionSectionInfoBody}>
                    We’ve ensured that there is a{" "}
                    <WrappedText color="red">secure generator</WrappedText> to
                    power
                    <WrappedText color="red"> necessities</WrappedText> during
                    any power outage including our security system.
                  </p>
                </div>

                <div className={styles.sectionImageContainerRight}>
                  <SVG
                  style={[styles.svgVisionBase, styles.svgVisionThirteen].join(" ")}
                  width="122.868"
                  height="95.253"
                  viewBox="0 0 122.868 95.253"
                  id="svgVisionThirteen"
                  d="M682.865,301.873c4.5,4.426,32.913,28.611,122.162,34.889" 
                  transform="matrix(-0.848, 0.53, -0.53, -0.848, 861.452, -75.664)"
                  fill="none"
                  ref={svgVisionThirteen}
                  animateF={animatedPaths}
                  time={4500}
                  />
                  <div className={styles.visionGeneratorWrap}>
                    <div
                      className={[styles.item__img, styles.item__img__t7].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.pullQuote}>
              <SVG
              style={[styles.svgVisionBrandmarkBase, styles.svgRedBrandmark].join(" ")}
              width="92.999"
              height="55.699"
              viewBox="0 0 92.999 55.699"
              id="svgRedBrandmark"
              d="M418.8,294.484c-3.695-6.224-12.4-20.888-13.755-23.176-9.269-15.619-17.7-14.772-26.017-14.772-3.113,0,2.716-3.96-2.906-9.525-1.054-1.054-1.982-3.368-2.717-5.605a.792.792,0,0,0-1.5,0c-.734,2.237-1.663,4.551-2.716,5.605-5.622,5.566.207,9.525-2.906,9.525-8.317,0-16.748-.847-26.017,14.772C338.9,273.6,330.2,288.26,326.5,294.484c-2.252,3.783,6.838,2.5,11.069-4.631,1.72-2.9,3.44-6.974,8.639-6.974a7.91,7.91,0,0,0,6.8-3.871c7.381-12.428,12.612-7.614,10.888-4.707l-8.307,11.773c-5.93,9.989,40.05,9.99,34.119,0L381.4,274.3c-1.724-2.907,3.507-7.721,10.888,4.707a7.909,7.909,0,0,0,6.8,3.871c5.2,0,6.919,4.075,8.639,6.974C411.957,296.985,421.047,298.267,418.8,294.484Z" 
              transform="translate(-326.149 -240.865)"
              fill="#f03d26"
              ref={svgRedBrandmark}
              animateF={animatedPaths}
              time={0}
              />
              <div className={styles.generatorPullQuote}>
                "Cheers Eskom"
                </div>
            </div>
          </div>
        </div>

        <div className={styles.appFeaturesDiv} id="properApp">
          <SVG
          style={[styles.svgVisionBase, styles.svgVisionTwelve].join(" ")}
          width="506.231" 
          height="294.406" 
          viewBox="0 0 506.231 294.406"
          id="svgVisionTwelve"
          d="M575.626,57.626c171.536,176.525,318.829,291.048,492.394,264.28" 
          transform="translate(-577.477 -1.299) rotate(-3)"
          fill="none"
          ref={svgVisionTwelve}
          animateF={animatedPaths}
          time={4500}
          />
          <SVG
          style={[styles.svgVisionBase, styles.svgVisionFourteen].join(" ")}
          width="627.05"
          height="663.617"
          viewBox="0 0 627.05 663.617"
          id="svgVisionFourteen"
          d="M156.306,68.624c285.043,88.251,477.344,205.124,553.1,367.218" 
          transform="translate(775.452 137.71) rotate(127)"
          fill="none"
          ref={svgVisionFourteen}
          animateF={animatedPaths}
          time={4500}
          />
          <SVG
          style={[styles.svgVisionBase, styles.svgVisionMobileTen].join(" ")}
          width="171.038"
          height="94.899"
          viewBox="0 0 171.038 94.899"
          id="svgVisionMobileTen"
          d="M206.187,245.175c-1.011,21.519-1.718,104.878-77.4,163.341"
          transform="matrix(0.105, 0.995, -0.995, 0.105, 393.242, -153.398)"
          fill="none"
          ref={svgVisionMobileTen}
          animateF={animatedPaths}
          time={2000}
          />
          <AppFeatures />
        </div>
        <Contact
          animateF={animatedPaths}
          svgStartTime={6000}
          showModal={showModal}
          submitted={setShowModal}
        />
      </div>
    </Layout>
  )
}
export default VisionPage