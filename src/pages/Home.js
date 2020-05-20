import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SVG from "../components/svgs/svg"

// import { trackCustomEvent,OutboundLink } from "gatsby-plugin-google-analytics"

import Contact from "../components/contact"
import InstagramSection from "../components/InstagramSection/InstagramSection"
import SEO from "../components/seo"
import Cta from "../components/cta/cta"
// import BasicSection from "../components/basicSection"
import UnitOption from "../components/unitOption"
import Layout from "../components/layout"
// import sectionData from "../data/basicSections"
import unitOptionData from "../data/unitOptions"
import Backdrop from "../components/backdrop"

// import HomeSVGs from "../components/homeSVGs/homeSVGs"
// import * as HomeSvgsCollection from "../components/svgs/homeSvgs"
import ProperLivingName from "../images/svgs/properLivingName.svg"
import styles from "../styles/stylesheet.module.css"
import WrappedText from "../components/wrappedText/wrappedText"

export const animatedPaths = (path, time) => {
  setTimeout(() => {
    if (path) {
      let length = path.getTotalLength()
      path.style.transition = path.style.WebkitTransition = "none"
      path.style.strokeDasharray = length + " " + length
      path.style.strokeDashoffset = length
      path.getBoundingClientRect()
      path.style.transition = path.style.WebkitTransition =
        "stroke-dashoffset 1s ease-in-out"
      path.style.strokeDashoffset = "0"
    } else {
      console.log("Encountered 0 length svg")
    }
  }, time)
}

const HomePage = (props) => {
  useEffect(() => {
    require("../interactions/innerImage")
  }, [props])

  const [showModal, setShowModal] = useState(false);
  const svgOne = useRef()
  const svgTwo = useRef()
  const svgThree = useRef()
  const svgFour = useRef()
  const svgFive = useRef()
  const svgSix = useRef()
  const svgSeven = useRef()
  const svgEight = useRef()
  const svgNine = useRef()
  const svgTen = useRef()
  const svgEleven = useRef()
  const svgTwelve = useRef()
  const svgThirteen = useRef()
  const svgFourteen = useRef()

  const svgMobileHomeOne = useRef()
  const svgMobileHomeTwo = useRef()
  const svgMobileHomeThree = useRef()
  const svgMobileHomeFour = useRef()
  const svgMobileHomeFive = useRef()
  const svgMobileHomeSix = useRef()
  const svgMobileHomeSeven = useRef()
  const svgMobileHomeEight = useRef()
  // const svgMobileHomeNine = useRef()
  // const svgMobileTen = useRef()

  const data = useStaticQuery(graphql`
    query {
      heroLarge: file(relativePath: { eq: "homeHero.jpeg" }) {
        childImageSharp {
          fixed(width: 1244, height: 1081) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      heroSmall: file(relativePath: { eq: "homeHero.jpeg" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redBrandmark: file(relativePath: { eq: "brandmark_red.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      textColumnImage: file(relativePath: { eq: "TextColumnImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 398, maxHeight: 538) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      space: file(relativePath: { eq: "space.png" }) {
        childImageSharp {
          fluid(maxWidth: 1075, maxHeight: 528) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      unitHover: file(relativePath: { eq: "unitHover.png" }) {
        childImageSharp {
          fixed(width: 319, height: 418) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let unitOptions = unitOptionData.unitOptions
  // let homeSectionData = sectionData.basicSections.homePage

  return (
    <div style={{ overflow: "hidden" }}>
      <Backdrop show={showModal} clicked={()=>{setShowModal(false)}} />
      {/* <HomeSVGs /> */}
      <Layout>
      <div data-scroll>
        <SEO title="Home" />
        
        <div className={styles.homeContainer}>
          <div className={styles.homeTextColumn}>
            <div style={{ position: "absolute", top: "5%" }}>
              {/* <Img fixed={data.redBrandmark.childImageSharp.fixed}  /> */}
            </div>
            {/* <h3>Proper Living</h3> */}
            <img
              className={styles.homeColumnName}
              src={ProperLivingName}
              alt=""
            />
            <h1 className={styles.homeHeroHeading}>
              Modern life,
              <br />
              lived proper.
            </h1>
            <p className={styles.homeHeroCopy}>
              Designed for students and young professionals in Cape Town. Where
              next-level security gives you freedom to live your best life.
            </p>
            <p className={styles.mobileHomeHeroCopy}>
              Designed for students and young professionals in Cape Town.
            </p>
            <br />
            <AniLink cover direction="up" bg={'#001a7d'} to="/locations/#bookASpace" activeClassName={styles.activeLink}>
            <Cta title="Book Space"></Cta>
            </AniLink>
            <Img
              className={styles.homeTextColumnStampSmall}
              fluid={data.redBrandmark.childImageSharp.fluid}
            />
            <div className={styles.homeHerofooterDiv}>
            <div className={styles.homeHeroFooterText}>Student Accommodation</div>
            </div>
              <div className={styles.homeSocialsDiv}>
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
            <div className={styles.homeTextColumnImage}>
              <Img
                className={styles.homeTextColumnStamp}
                fluid={data.redBrandmark.childImageSharp.fluid}
              />
              <Img 
                fluid={data.textColumnImage.childImageSharp.fluid} 
              />
            </div>
          </div>
          <div className={styles.homeHeroLargeImageContainer}>
            <Img 
              fixed={data.heroLarge.childImageSharp.fixed} 
            />
          </div>
          <div className={styles.homeHeroSmallImageContainer}>
            <div className={styles.heroGradient}></div>
            <Img 
              fluid={data.heroSmall.childImageSharp.fluid} 
            />
          </div>
          <SVG
            style={[styles.svgBase, styles.svgOne].join(" ")}
            id="Path_401"
            d="M685.385,476.2S270.043,395.553,198.572,168.08"
            width="558.212"
            height="567.028"
            viewBox="0 0 558.212 567.028"
            ref={svgOne}
            transform="translate(-257.917 386.801) rotate(-47)"
            animateF={animatedPaths}
            time={500}
          />
          <SVG
            style={[styles.svgBase, styles.svgTwo].join(" ")}
            id="Path_394"
            d="M983.544,49.316S926.259,429.354,650.212,677.695"
            width="640.104"
            height="355.903"
            viewBox="0 0 640.104 355.903"
            ref={svgTwo}
            transform="matrix(0.035, 0.999, -0.999, 0.035, 654.973, -651.2) "
            animateF={animatedPaths}
            time={1000}
          />
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileHomeOne].join(" ")}
            id="svgMobileHomeOne"
            d="M224.629,0C209.51,30.667,162.071,55.228,46.761,79.481Q23.37,84.4,0,88.52"
            transform="translate(0.098 12) rotate(-3)"
            width="229.526"
            height="100.895"
            viewBox="0 0 229.526 100.895"
            ref={svgMobileHomeOne}
            animateF={animatedPaths}
            time={1000}
          />
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileHomeTwo].join(" ")}
            id="svgMobileHomeTwo"
            d="M77.161,0C62.637,26.64,45.6,36.57,0,48.218"
            transform="translate(40.445 0.236) rotate(56)"
            width="84.037"
            height="91.804"
            viewBox="0 0 84.037 91.804"
            ref={svgMobileHomeTwo}
            animateF={animatedPaths}
            time={1000}
          />
        </div>
        <div className={styles.properSpacesHomeContainer}>
          <SVG
            style={[styles.svgBase, styles.svgThree].join(" ")}
            id="Path_428"
            d="M663.032,407.917C661.493,511.56,582.3,574.567,446.681,639.4"
            transform="translate(-412.366 -430.717) rotate(3)"
            width="228.908"
            height="242.982"
            viewBox="0 0 228.908 242.982"
            ref={svgThree}
            animateF={animatedPaths}
            time={1500}
          />
        <div className={styles.imageAnimationItem}>
          <div className={styles.homeSpacesContainer}>
            <div className={styles.homeSpacesSectionImageColumn}>
              
              <div className={[styles.homeSectionImageContainerLeft, styles.homeSectionImageContainerSpaces].join(" ")}>
                  <div className={styles.properSpacesSectionImage}>
                    <div
                      className={[styles.item__img, styles.item__img__t1].join(" ")}>
                    </div>
                  </div>
                </div>
              {/* <Img 
                className={styles.properSpacesSectionImage}
                fluid={data.space.childImageSharp.fluid} 
              /> */}
            </div>
            <div className={styles.homeSpacesSectionTextColumn}>
              <h2 className={styles.homeSpacesSectionHeading}>
                Proper spaces made for living.
              </h2>
              <p className={styles.spacesSectionParagraph}>
                Students and young professionals deserve space to 
                <WrappedText color="red"> live properly</WrappedText>.
                We designed our apartments with this in mind, focusing on 
                <WrappedText color="red"> size </WrappedText>and
                <WrappedText color="red"> functionality</WrappedText>.
              </p>
            </div>
          </div>
        </div>
          <div className={styles.unitOptionContainer}>
            <div className={styles.unitOptionSubContainer}>
              <UnitOption
                type={unitOptions.studio.copy.unitType}
                desc={unitOptions.studio.copy.unitDesc}
                cta={unitOptions.studio.copy.unitCta}
                imageHover={data.unitHover.childImageSharp.fixed}
              />
              <UnitOption
                type={unitOptions.studioPlus.copy.unitType}
                desc={unitOptions.studioPlus.copy.unitDesc}
                cta={unitOptions.studioPlus.copy.unitCta}
                imageHover={data.unitHover.childImageSharp.fixed}
              />
              <UnitOption
                type={unitOptions.twoBedroom.copy.unitType}
                desc={unitOptions.twoBedroom.copy.unitDesc}
                cta={unitOptions.twoBedroom.copy.unitCta}
                imageHover={data.unitHover.childImageSharp.fixed}
              />
              <UnitOption
                type={unitOptions.threeBedroom.copy.unitType}
                desc={unitOptions.threeBedroom.copy.unitDesc}
                cta={unitOptions.threeBedroom.copy.unitCta}
                imageHover={data.unitHover.childImageSharp.fixed}
              />
              <UnitOption
                type={unitOptions.fourBedroom.copy.unitType}
                desc={unitOptions.fourBedroom.copy.unitDesc}
                cta={unitOptions.fourBedroom.copy.unitCta}
                imageHover={data.unitHover.childImageSharp.fixed}
              />
            </div>
          </div>

          <SVG
            style={[styles.svgBase, styles.svgFour].join(" ")}
            id="Path_428"
            d="M198.572,168.08S270.043,395.553,685.385,476.2"
            transform="translate(-198.095 -167.93)"
            width="487.386"
            height="308.764"
            viewBox="0 0 487.386 308.764"
            ref={svgFour}
            animateF={animatedPaths}
            time={2000}
          />
        </div>
        <div className={styles.homeSectionsContainer}>
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileHomeThree].join(" ")}
            id="svgMobileHomeThree"
            d="M0,0C47.232,21.432,87.789,35.336,135.58,32.086" 
            transform="matrix(0.875, -0.485, 0.485, 0.875, 0.401, 66.145)"
            width="135.03"
            height="95.142"
            viewBox="0 0 135.03 95.142"
            ref={svgMobileHomeThree}
            animateF={animatedPaths}
            time={1000}
          />
          <div className={styles.homeSecurityContainer}>
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileHomeFour].join(" ")}
            id="svgMobileHomeFour"
            d="M48.778,0C17.6,17.063,5.2,31.183,0,70.535"
            transform="translate(12.284 64.642) rotate(-104)"
            width="80.908"
            height="65.229"
            viewBox="0 0 80.908 65.229"
            ref={svgMobileHomeFour}
            animateF={animatedPaths}
            time={1000}
          />
          <SVG
              style={[styles.svgBase, styles.svgFive].join(" ")}
              id="Path_426"
              d="
            M682.865,301.873
            c5.913,5.817,
            43.259,37.606,
            160.566,45.857"
              width="167.146"
              height="79.155"
              viewBox="0 0 167.146 79.155"
              ref={svgFive}
              transform="matrix(-0.978, 0.208, -0.208, -0.978, 897.435, 198.717)"
              animateF={animatedPaths}
              time={2000}
            />
            <SVG
              style={[styles.svgBase, styles.svgSix].join(" ")}
              id="Path_436"
              d="M219.861,39.871C125.821,131.275,77.477,192.847,68.2,336.428"
              width="331.202"
              height="244.876"
              viewBox="0 0 331.202 244.876"
              ref={svgSix}
              transform="translate(293.015 -77.129) rotate(70)"
              animateF={animatedPaths}
              time={1500}
            />
            <div className={styles.imageAnimationItem}>
              <div className={[styles.homeSectionContainerRight, styles.homeSectionContainerFirstRight].join(" ")}>

                <div className={styles.homeSectionInfoContainer}>
                  <h2 className={[styles.homeSectionInfoHeading, styles.mobileHeading].join(" ")}>
                  Our security is next-level.
                  </h2>
                  <p className={styles.homeSectionInfoBody}>
                    We take security very seriously. That’s why we provide 
                    <WrappedText color="red"> 24/7 guards</WrappedText>, biometric fingerprint scanners, 
                    state of the art surveillance and have partnerships with leading 
                    <WrappedText color="red"> rapid response</WrappedText> companies.
                  </p>
                  <AniLink cover direction="up" bg={'#001a7d'} to="/vision/#properSecurity" activeClassName={styles.activeLink}>
                  <Cta title={"Proper Security"}></Cta>
                  </AniLink>
                </div>

                <div className={styles.homeSectionImageContainerLeft}>
                  <div className={styles.homeSecuritySection}>
                    <div
                      className={[styles.item__img, styles.item__img__t1].join(" ")}>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className={styles.homeCommunityContainer}>
            <SVG
              style={[styles.svgBase, styles.svgSeven].join(" ")}
              id="Path_427"
              d="M493.992,379.148c104.73,200.774-47.955,340.47-358.591,450.017q-21.766,7.675-43.59,14.812"
              transform="translate(-91.656 -378.917)"
              width="435.544"
              height="465.536"
              viewBox="0 0 435.544 465.536"
              ref={svgSeven}
              animateF={animatedPaths}
              time={2500}
            />
            <SVG
              style={[styles.svgMobileBase, styles.svgMobileHomeFive].join(" ")}
              id="svgMobileHomeFive"
              d="M682.865,301.873c5.913,5.817,43.259,37.606,160.566,45.857"
              transform="translate(-740.322 175.967) rotate(-31)"
              width="162.021"
              height="122.936"
              viewBox="0 0 162.021 122.936"
              ref={svgMobileHomeFive}
              animateF={animatedPaths}
              time={1000}
            />
            <div className={styles.imageAnimationItem}>
              <div className={styles.homeSectionContainerLeft}>
                <div className={styles.homeSectionImageContainerRight}>
                  <div className={styles.homeCommunitySection}>
                    <div
                      className={[styles.item__img, styles.item__img__t3].join(" ")}>
                    </div>
                  </div>
                </div>

                <div className={[styles.homeSectionInfoContainer, styles.homeSectionInfoContainerRight].join(" ")}>
                  <h2 className={styles.homeSectionInfoHeading}>
                  We’re creating a <br /> proper community.
                  </h2>

                  <p className={styles.homeSectionInfoBody}>
                  We’ve partnered with <WrappedText color="red"> leading architects </WrappedText>
                  to design our spaces to promote 
                  <WrappedText color="red"> interaction </WrappedText> with fellow residents.</p>
                  <AniLink cover direction="up" bg={'#001a7d'} to="/vision/#properCommunity" activeClassName={styles.activeLink}>
                  <Cta title={"Proper Community"}></Cta>
                  </AniLink>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.homeFunctionalContainer}>
            <SVG
              style={[styles.svgMobileBase, styles.svgMobileHomeSix].join(" ")}
              id="svgMobileHomeSix"
              d="M128.8,39.871C91.223,76.4,71.905,101,68.2,158.372"
              transform="translate(201.756 20.574) rotate(120)"
              width="133.688"
              height="112.663"
              viewBox="0 0 133.688 112.663"
              ref={svgMobileHomeSix}
              animateF={animatedPaths}
              time={1000}
            />
            <SVG
              style={[styles.svgBase, styles.svgEight].join(" ")}
              id="Path_429"
              d="M570.417,392.532c-71.492,172.076,510.633,483.729,575.009,324.221"
              transform="translate(-563.818 -392.34)"
              width="582.071"
              height="369.035"
              viewBox="0 0 582.071 369.035"
              ref={svgEight}
              animateF={animatedPaths}
              time={3000}
            />
            <SVG
              style={[styles.svgBase, styles.svgNine].join(" ")}
              id="Path_431"
              d="M219.861,39.871
              C125.821,131.275,
              77.477,192.847,
              68.2,336.428"
              transform="translate(293.015 -77.129) rotate(70)"
              width="331.202"
              height="244.876"
              viewBox="0 0 331.202 244.876"
              ref={svgNine}
              animateF={animatedPaths}
              time={3500}
            />
          <div className={styles.imageAnimationItem}>
              <div className={styles.homeSectionContainerRight}>
                
                <div className={styles.homeSectionInfoContainer}>
                  <h2 className={styles.homeSectionInfoHeading}>
                  Designed to be functional.
                  </h2>
                  <p className={styles.homeSectionInfoBody}>
                  We’ve partnered with <WrappedText color="red"> leading </WrappedText>interior 
                  <WrappedText color="red"> designers </WrappedText>to focus on functionality. 
                  Everything fits in properly.</p>
                  <AniLink cover direction="up" bg={'#001a7d'} to="/locations/#properDesign" activeClassName={styles.activeLink}>
                  <Cta title={"Proper Design"}></Cta>
                  </AniLink>
                </div>

                <div className={styles.homeSectionImageContainerLeft}>
                  <div className={styles.homeFunctionalSection}>
                    <div
                      className={[styles.item__img, styles.item__img__t1].join(" ")}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>

          <div className={styles.homeSwiftContainer}>
            <SVG
              style={[styles.svgMobileBase, styles.svgMobileHomeSeven].join(" ")}
              id="svgMobileHomeSeven"
              d="M566,392.532c-19.537,41.455,139.545,116.536,157.138,78.109"
              transform="translate(-563.778 -392.319)"
              width="159.819"
              height="89.487"
              viewBox="0 0 159.819 89.487"
              ref={svgMobileHomeSeven}
              animateF={animatedPaths}
              time={1000}
            />
            <SVG
                style={[styles.svgBase, styles.svgTen].join(" ")}
                id="Path_438"
                d="M456.413,316.255c-5.195-8.751-17.43-29.37-19.34-32.586-13.032-21.96-24.888-20.769-36.581-20.769-4.377,0,3.818-5.567-4.086-13.393-1.481-1.482-2.787-4.736-3.82-7.881a1.114,1.114,0,0,0-2.112,0c-1.033,3.145-2.338,6.4-3.819,7.881-7.9,7.826.291,13.393-4.087,13.393-11.694,0-23.549-1.191-36.581,20.769-1.91,3.216-14.146,23.835-19.34,32.586-3.166,5.32,9.615,3.517,15.563-6.511,2.418-4.076,4.837-9.806,12.146-9.806a11.121,11.121,0,0,0,9.56-5.443c10.378-17.474,17.733-10.705,15.308-6.618l-11.68,16.553c-8.338,14.045,56.311,14.046,47.972,0l-11.68-16.553c-2.424-4.087,4.931-10.856,15.308,6.618a11.121,11.121,0,0,0,9.56,5.443c7.309,0,9.728,5.73,12.146,9.806C446.8,319.772,459.579,321.574,456.413,316.255Z"
                transform="translate(-326.149 -240.865)"
                width="130.76"
                height="78.314"
                viewBox="0 0 130.76 78.314"
                ref={svgTen}
                fill="#ff782e"
                animateF={animatedPaths}
                time={3500}
              />
              <div className={styles.imageAnimationItem}>
                <div className={styles.homeSectionContainerLeft}>

                  <div className={styles.homeSectionImageContainerRight}>
                    <div className={styles.homeAppSection}>
                      <div
                        className={[styles.item__img, styles.item__img__t3].join(" ")}>
                      </div>
                    </div> 
                  </div>

                  <div className={[styles.homeSectionInfoContainer, styles.homeSectionInfoContainerRight].join(" ")}>
                    <h2 className={[styles.homeSectionInfoHeading, styles.mobileHeading].join(" ")}>
                    Swift By Proper Living.
                    </h2>
                    <p className={styles.homeSectionInfoBody}>
                    Residents get <WrappedText color="red">exclusive access</WrappedText> to our app “Swift”. 
                    We’ve built it as your digital door to everything Proper Living. 
                    From <WrappedText color="red">social features</WrappedText> to 
                    <WrappedText color="red"> security</WrappedText> assistance, 
                    all its functions enhance your time with us.</p>
                    <AniLink cover direction="up" bg={'#001a7d'} to="/vision/#properApp" activeClassName={styles.activeLink}>
                    <Cta title={"Proper App"}></Cta>
                    </AniLink>
                  </div>

                </div>
              </div>
            </div>
    

          {/* <BasicSection
            left
            img={data.appMockup.childImageSharp.fluid}
            heading={homeSectionData.app.heading}
            body={homeSectionData.app.body}
            buttonTitle={homeSectionData.app.buttonTitle}
            className={styles.swiftHomeContainer}
          > */}
            
          {/* </BasicSection> */}
          <div className={styles.homeBlogContainer}>
          <SVG
              style={[styles.svgBase, styles.svgEleven].join(" ")}
              id="Path_440"
              d="M493.992,379.148c104.73,200.774-47.955,340.47-358.591,450.017q-21.766,7.675-43.59,14.812"
              transform="matrix(0.602, 0.799, -0.799, 0.602, 619.25, -301.237)"
              width="633.91"
              height="628.007"
              viewBox="0 0 633.91 628.007"
              ref={svgEleven}
              animateF={animatedPaths}
              time={4000}
            />
            <SVG
              style={[styles.svgMobileBase, styles.svgMobileHomeEight].join(" ")}
              id="svgMobileHomeEight"
              d="M80.588,0C80.015,38.606,50.518,62.075,0,86.224"
              transform="translate(0.216 4.251) rotate(-3)"
              width="85.729"
              height="90.819"
              viewBox="0 0 85.729 90.819"
              ref={svgMobileHomeEight}
              animateF={animatedPaths}
              time={1000}
            />
          <div className={styles.imageAnimationItem}>
              <div className={styles.homeSectionContainerRight}>

                <div className={[styles.homeSectionInfoContainer, styles.sectionInfoContainerLast].join(" ")}> 
                  <h2 className={styles.homeSectionInfoHeading}>
                  Proper Living Blog.
                  </h2>

                  <p className={styles.homeSectionInfoBody}>
                  Our co-founder <WrappedText color="red">Caspar Lee</WrappedText> is obsessed with creating 
                  content online so we decided to put him in charge of our blog.</p>
                  <Cta title={"Have a Read"}></Cta>
                </div>

                <div className={styles.homeSectionImageContainerBlog}>
                  <div className={styles.homeBlogSection}>
                    <div
                      className={[styles.item__img, styles.item__img__t1].join(" ")}>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
         
            
        </div>
        <div className={styles.homeInstagramContainer} />
          <InstagramSection
            twelve={
              <SVG
                style={[styles.svgBase, styles.svgTwelve].join(" ")}
                id="Path_433"
                d="M493.992,379.148c104.73,200.774-47.955,340.47-358.591,450.017q-21.766,7.675-43.59,14.812"
                transform="translate(-59 -378.917)"
                width="435.544"
                height="465.536"
                viewBox="0 0 435.544 465.536"
                ref={svgTwelve}
                animateF={animatedPaths}
                time={4500}
              />
            }
            thirteen={
              <SVG
                style={[styles.svgBase, styles.svgThirteen].join(" ")}
                id="Path_434"
                d="M304.288,457.884c-26.735,136.825,72.283,202.835,306.6,226.237"
                transform="translate(-299.552 -457.788)"
                width="311.388"
                height="226.831"
                viewBox="0 0 311.388 226.831"
                ref={svgThirteen}
                animateF={animatedPaths}
                time={5000}
              />
            }
            fourteen={
              <SVG
                style={[styles.svgBase, styles.svgFourteen].join(" ")}
                id="Path_435"
                d="M650.212,677.695
                S926.259,429.354,983.544,49.316"
                transform="matrix(0.105, 0.995, -0.995, 0.105, 606.421, -651.465)"
                width="660.31"
                height="398.061"
                viewBox="0 0 660.31 398.061"
                ref={svgFourteen}
                animateF={animatedPaths}
                time={6000}
              />
            }
          />
          <Contact animateF={animatedPaths} svgStartTime={6000} showModal={showModal} submitted={setShowModal}/>
        </div>
      </Layout>
    </div>
  )
}
export default HomePage