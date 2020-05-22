import React, { useRef, useState, useEffect } from "react"

// flickity slider
import Slider from '../components/flickity_slider/js/Slider'
import SliderTWO from '../components/flickity_slider/js/Slider_2'
import SliderTHREE from "../components/flickity_slider/js/Slide_3"

// SLICK SLIDER
import Slick from "../components/Slick/Slick"
import Slick2 from "../components/Slick/Slick2"
import Slick3 from "../components/Slick/Slick3"
import Slick4 from "../components/Slick/Slick4"
import Slick5 from "../components/Slick/Slick5"
import SliderMedium1 from '../components/flickity_slider/js/Slider_medium1'
import SliderFOUR from "../components/flickity_slider/js/Slide_4"
import SliderFIVE from "../components/flickity_slider/js/Slide_5"

// INLINE STYLE
import styled from 'styled-components'

// LAYOUT FOR TABLET BREAKPOINT
import SpaceMobileLayout from "../components/SpaceMobileLayout"
import ctaSmall from "../components/cta/ctaSmall"
import Layout from "../components/layout"
import styles from "../styles/stylesheet.module.css"
import SEO from "../components/seo"
import Cta from "../components/cta/cta"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Contact from "../components/contact"
import Backdrop from "../components/backdrop"
import SVG from "../components/svgs/svg"
import WrappedText from "../components/wrappedText/wrappedText"
import IMG from '../components/imgs/img'











const Spaces = props => {
  const svgFortyOne = useRef()
  const svgFortyTwo = useRef()
  const svgFortyThree = useRef()
  const svgFortyFour = useRef()
  const svgFortyFive = useRef()
  // const svgFortySix = useRef()
  const svgFortySeven = useRef()
  const svgFortyEight = useRef()

  const svgMobileFortyOne = useRef()
  const svgMobileFortyTwo = useRef()
  const svgMobileFortyThree = useRef()
  const svgMobileFortyFour = useRef()
  const svgMobileFortyFive = useRef()
  const svgMobileFortySix = useRef()
  const svgMobileFortySeven = useRef()
  const svgMobileFortyEight = useRef()
  const svgMobileFortyNine = useRef()

  const scrollRefOne = useRef()
  const scrollRefTwo = useRef()
  const scrollRefThree = useRef()
  const scrollRefFour = useRef()
  const scrollRefFive = useRef()

  const studioRefOne = useRef()
  const studioRefTwo = useRef()
  const studioRefThree = useRef()

  const studioPlusRefOne = useRef()
  const studioPlusRefTwo = useRef()
  const studioPlusRefThree = useRef()

  const twoBedRefOne = useRef()
  const twoBedRefTwo = useRef()
  const twoBedRefThree = useRef()

  const threeBedRefOne = useRef()
  const threeBedRefTwo = useRef()
  const threeBedRefThree = useRef()

  const fourBedRefOne = useRef()
  const fourBedRefTwo = useRef()
  const fourBedRefThree = useRef()

  const scrollDesktopRefOne = useRef()
  const scrollDesktopRefTwo = useRef()
  const scrollDesktopRefThree = useRef()
  const scrollDesktopRefFour = useRef()
  const scrollDesktopRefFive = useRef()

  const [showModal, setShowModal] = useState(false)
  const equipmentRow1 = ["Double bed", "Wardrobe with shelves", "Full length mirror ", "Large desk space", "Chair", "Pin board"].map(equ => <li className={styles.equipTitles}>-{" " + equ}</li>)
  const equipmentRow2 = ["42\" Smart TV", "Induction stove", "Microwave", "Kettle", "Toaster", "Pots, pans and cutlery"].map(equ => <li className={styles.equipTitles}>-{" " + equ}</li>)
  const equipmentRow3 = ["Pots, pans and cutlery", "Fridge/freezer", "Proper welcome pack ", "Biometric access", "Unlimited WiFi", "Access to our Swift App"].map(equ => <li className={styles.equipTitles}>-{" " + equ}</li>)

  const scrollRight = (target) => {
    target.scrollLeft += 590;
  }

  const scrollLeft = (target) => {
    target.scrollLeft -= 590
  }

  useEffect(() => {
    let horizontal = null;
    let widthMatch = window.matchMedia("(min-width: 900px)");

    widthMatch.addListener((e) => {
      if (!e.matches) {

        if (scrollRefOne.current !== null) {
          scrollRefOne.current.style.display = "flex"
          scrollRefTwo.current.style.display = "flex"
          scrollRefThree.current.style.display = "flex"
          scrollRefFour.current.style.display = "flex"
          scrollRefFive.current.style.display = "flex"


          scrollRefOne.current.addEventListener('scroll',
            (e) => {
              horizontal = e.currentTarget.scrollLeft;
              if (horizontal >= 150) {
                studioRefOne.current.style.opacity = 0.6
                studioRefOne.current.style.transition = "0.20s ease-in-out"
              } else {
                studioRefOne.current.style.opacity = 1
                studioRefOne.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 150 || horizontal >= 398) {
                studioRefTwo.current.style.opacity = 0.6
                studioRefTwo.current.style.transition = "0.20s ease-in-out"
              } else {
                studioRefTwo.current.style.opacity = 1
                studioRefTwo.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 398) {
                studioRefThree.current.style.opacity = 0.6
                studioRefThree.current.style.transition = "0.20s ease-in-out"
              } else {
                studioRefThree.current.style.opacity = 1
                studioRefThree.current.style.transition = "0.20s ease-in-out"
              }
            })

          scrollRefTwo.current.addEventListener('scroll',
            (e) => {
              horizontal = e.currentTarget.scrollLeft;
              if (horizontal >= 150) {
                studioPlusRefOne.current.style.opacity = 0.6
                studioPlusRefOne.current.style.transition = "0.20s ease-in-out"
              } else {
                studioPlusRefOne.current.style.opacity = 1
                studioPlusRefOne.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 150 || horizontal >= 398) {
                studioPlusRefTwo.current.style.opacity = 0.6
                studioPlusRefTwo.current.style.transition = "0.20s ease-in-out"
              } else {
                studioPlusRefTwo.current.style.opacity = 1
                studioPlusRefTwo.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 398) {
                studioPlusRefThree.current.style.opacity = 0.6
                studioRefThree.current.style.transition = "0.20s ease-in-out"
              } else {
                studioPlusRefThree.current.style.opacity = 1
                studioPlusRefThree.current.style.transition = "0.20s ease-in-out"
              }
            })

          scrollRefThree.current.addEventListener('scroll',
            (e) => {
              horizontal = e.currentTarget.scrollLeft;

              if (horizontal >= 150) {
                twoBedRefOne.current.style.opacity = 0.6
                twoBedRefOne.current.style.transition = "0.20s ease-in-out"
              } else {
                twoBedRefOne.current.style.opacity = 1
                twoBedRefOne.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 150 || horizontal >= 398) {
                twoBedRefTwo.current.style.opacity = 0.6
                twoBedRefTwo.current.style.transition = "0.20s ease-in-out"
              } else {
                twoBedRefTwo.current.style.opacity = 1
                twoBedRefTwo.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 398) {
                twoBedRefThree.current.style.opacity = 0.6
                twoBedRefThree.current.style.transition = "0.20s ease-in-out"
              } else {
                twoBedRefThree.current.style.opacity = 1
                twoBedRefThree.current.style.transition = "0.20s ease-in-out"
              }
            })

          scrollRefFour.current.addEventListener('scroll',
            (e) => {
              horizontal = e.currentTarget.scrollLeft;

              if (horizontal >= 150) {
                threeBedRefOne.current.style.opacity = 0.6
                threeBedRefOne.current.style.transition = "0.20s ease-in-out"
              } else {
                threeBedRefOne.current.style.opacity = 1
                threeBedRefOne.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 150 || horizontal >= 398) {
                threeBedRefTwo.current.style.opacity = 0.6
                threeBedRefTwo.current.style.transition = "0.20s ease-in-out"
              } else {
                threeBedRefTwo.current.style.opacity = 1
                threeBedRefTwo.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 398) {
                threeBedRefThree.current.style.opacity = 0.6
                threeBedRefThree.current.style.transition = "0.20s ease-in-out"
              } else {
                threeBedRefThree.current.style.opacity = 1
                threeBedRefThree.current.style.transition = "0.20s ease-in-out"
              }
            })

          scrollRefFive.current.addEventListener('scroll',
            (e) => {
              horizontal = e.currentTarget.scrollLeft;

              if (horizontal >= 150) {
                fourBedRefOne.current.style.opacity = 0.6
                fourBedRefOne.current.style.transition = "0.20s ease-in-out"
              } else {
                fourBedRefOne.current.style.opacity = 1
                fourBedRefOne.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 150 || horizontal >= 398) {
                fourBedRefTwo.current.style.opacity = 0.6
                fourBedRefTwo.current.style.transition = "0.20s ease-in-out"
              } else {
                fourBedRefTwo.current.style.opacity = 1
                fourBedRefTwo.current.style.transition = "0.20s ease-in-out"
              }

              if (horizontal < 398) {
                fourBedRefThree.current.style.opacity = 0.6
                fourBedRefThree.current.style.transition = "0.20s ease-in-out"
              } else {
                fourBedRefThree.current.style.opacity = 1
                fourBedRefThree.current.style.transition = "0.20s ease-in-out"
              }
            })
        }
      } else {
        if (scrollRefOne.current !== null) {
          scrollRefOne.current.removeEventListener('scroll', (e) => { });
          scrollRefTwo.current.removeEventListener('scroll', (e) => { });
          scrollRefThree.current.removeEventListener('scroll', (e) => { });
          scrollRefFour.current.removeEventListener('scroll', (e) => { });
          scrollRefFive.current.removeEventListener('scroll', (e) => { });

          scrollRefOne.current.style.display = "none"
          scrollRefTwo.current.style.display = "none"
          scrollRefThree.current.style.display = "none"
          scrollRefFour.current.style.display = "none"
          scrollRefFive.current.style.display = "none"
        }
      }
    });
  }, [props])

  const animatedPaths = (path, time) => {
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


  //  TEMPORARY TYPEWRITE IMPLEMENTATION
  var ReactRotatingText = require('react-rotating-text');

  // THE GRAPHQL QUERY
  const data = useStaticQuery(graphql`
    query {
     

      spacesHero: file(relativePath: { eq: "1.png"}) {
        childImageSharp  {
          fixed(width: 1600) {
            aspectRatio
            ...GatsbyImageSharpFixed
          }
        }
      }

    
      spacesHeroSmall: file(relativePath: { eq: "IMG_0406.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }

      spacesHeroXXsmall: file(relativePath: { eq: "spacesHero(mobile).png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      

 

    }
  `)



  return (
    <Layout>
      <SEO title="Spaces" />
      <div data-scroll className="main-wrapper">
        <Backdrop
          show={showModal}
          clicked={() => {
            setShowModal(false)
          }}
        />

        {/* HEADER */}

        <div className={styles.spacesContainer}>
          <div className={styles.spacesTextColumn}>
            <h1 className={styles.headingSpaces} id="headingSpaces--main">
              <ReactRotatingText items={['We Create Founctional']} /> <br />
              Spaces With You <br />
              In Mind
           </h1>

            <h1 className={styles.headingSpaces__tab} id="headingSpaces--tab">
              We Have Created Functional Spaces With You In Mind
           </h1>
            <p className={styles.spacesBodyCopy}>
              We create spaces for <span>everybody</span>, from those who value their own
              company to the sociable weavers among us. Please <span>explore</span> our
              options to see what best suits you.
           </p>

            <div className="button-desktop">
              <Cta title="View Our Spaces"></Cta>
            </div>



            <div className={styles.spacesSocialsDiv}>
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

          </div>
          <div className={styles.spacesHero} >
            <Img fixed={data.spacesHero.childImageSharp.fixed}
              imgStyle={{ objectFit: 'contain' }}
            />
            {/* <p className={styles.studentAccomText}>Student Accomodation</p> */}

          </div>
          <div className={styles.spacesHeroSmall}>
            <Img fluid={data.spacesHeroSmall.childImageSharp.fluid}
            />
          </div>

          <div className={styles.spacesHeroXXsmall}>
            <Img fluid={data.spacesHeroXXsmall.childImageSharp.fluid}
            />
          </div>
        </div>
        <SVG
          style={[styles.svgBase, styles.svgFortyOne].join(" ")}
          id="41"
          d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
          width="591.282"
          height="39.552"
          viewBox="0 0 591.282 39.552"
          ref={svgFortyOne}
          transform="translate(-316.969 -161.77) rotate(-1)"
          animateF={animatedPaths}
          time={500}
        />

        <SVG
          style={[styles.svgMobileBase, styles.svgMobileFortyOne].join(" ")}
          id="mobileSpaces1"
          width="330.194" height="189.023" viewBox="0 0 330.194 189.023"
          d="M575.626,358.861c123.426-5.973,233.438.874,354.458,28.982"
          transform="matrix(-0.891, 0.454, -0.454, -0.891, 1004.971, 84.495)"
          ref={svgMobileFortyOne}
          animateF={animatedPaths}
          time={1000}
        />

        <SVG
          style={[styles.svgBase, styles.svgFortyThree].join(" ")}
          id="43"
          d="M302.43,245.175c-2.268,18.99-3.853,92.551-173.648,144.142"
          width="10.09rem"
          height="8.5335rem"
          viewBox="0 0 181.622 153.603"
          ref={svgFortyThree}
          transform="translate(-6.003rem -13.973rem) rotate(3)"
          animateF={animatedPaths}
          time={500}
        />

        <SVG
          style={[styles.svgMobileBase, styles.svgMobileFortyTwo].join(" ")}
          id="mobileSpaces2"
          width="57.278" height="49.796" viewBox="0 0 57.278 49.796"
          d="M110.092,205.334c-34.393,3.434-45.6,19.374-46.676,54.6"
          transform="translate(-199.008 123.574) rotate(-93)"
          ref={svgMobileFortyTwo}
          animateF={animatedPaths}
          time={1000}
        />
        {/* header ends here */}

        {/************ LAYOUT FOR TABLET AND < BELOW *****************/}
        <SpaceMobileLayout
          slider_1={<Slick />}
          info_1=
          {<div className={styles.sectionInfoContainer}>
            <h2 className={styles.sectionInfoHeading}>
              Studio
            </h2>
            <div className={styles.spaceInfo}>
              <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
              <div className={styles.divider}></div>
              <p className={styles.rightNumberBathroom}>1 En-Suite Bathroom</p>
            </div>
            <p style={{ fontSize: "16px", margin: 0 }}>
                    Wanna do yoga in your underwear whilst cooking up a storm?
                    This is for you. Our open plan studio apartments were designed
                    with the ultimate <WrappedText color="red">independent</WrappedText> individual in mind. It comes fully
                    furnished and fitted with <WrappedText color="red">absolutely everything</WrappedText>, from an induction
                    stove and microwave to the pots, pans and cutlery - we want to
                    see you hone in on those master chef cooking skills (or ready made meals).
            </p>
          </div>}
          slider_2={<Slick2 />}
          info_2={
            <div className={styles.sectionInfoContainer}>
              <h2 className={styles.sectionInfoHeading}>
                Studio +
              </h2>

              <div className={styles.spaceInfo}>
                <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                <div className={styles.divider}></div>
                <p className={styles.rightNumberBathroom}>1 En-Suite Bathroom</p>
              </div>
              <p style={{ fontSize: "16px", margin: 0 }}>
                    Our studio+ apartments offer Xm<sup>2</sup> of open plan living, furnished and fitted with absolutely everything.
                    It features a <WrappedText color="red">modern</WrappedText> and ergonomically designed kitchenette, lounge area, desk space and bed.
                    Each apartment comes with a <WrappedText color="red">Juliette balcony</WrappedText>, with the exception of those from the 4th floor up.
              </p>
            </div>
          }
          slider_3={<Slick3 />}
          info_3={
            <div className={styles.sectionInfoContainer}>
              <h2 className={styles.sectionInfoHeading}>
                Two Bedroom
              </h2>
              <div className={styles.spaceInfo}>
                <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                <div className={styles.divider}></div>
                <p className={styles.rightNumberBathroom}>2 En-Suite Bathroom</p>
              </div>
              <p style={{ fontSize: "16px", margin: 0 }}>
                    Got an ideal living partner or looking to find one? These two bedroom apartments are
                    perfect for those who like <WrappedText color="red">sharing</WrappedText> their <WrappedText color="red">space</WrappedText> (but not too much of it).
                    Each bedroom has its own en-suite bathroom, with a living area and kitchen to
                    share with your fellow mate.
              </p>
            </div>}

          slider_4={<Slick4 />}
          info_4={
            <div className={styles.sectionInfoContainer}>
              <h2 className={styles.sectionInfoHeading}>
                Three Bedroom
              </h2>
              <div className={styles.spaceInfo}>
                <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                <div className={styles.divider}></div>
                <p className={styles.rightNumberBathroom}>3 En-Suite Bathroom</p>
              </div>
              <p style={{ fontSize: "16px", margin: 0 }}>
                    Two’s company, three’s a crowd. Our three bed option offers you your own <WrappedText color="red">personal </WrappedText>
                    space as well as a lounge area to have the ultimate movie nights. All of our apartments
                    are <WrappedText color="red">fully</WrappedText> fitted and furnished to make your transition to apartment living as
                    seamless as possible. Each room has their own wardrobe and desk space, whilst the
                    <WrappedText color="red"> lounge</WrappedText> and kitchen are modern and ergonomically designed to allow for ample space and movement.
              </p>
            </div>}

          slider_5={<Slick5 />}
          info_5={
            <div className={styles.sectionInfoContainer}>
              <h2 className={styles.sectionInfoHeading}>
                Four Bedroom
              </h2>
              <div className={styles.spaceInfo}>
                <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                <div className={styles.divider}></div>
                <p className={styles.rightNumberBathroom}>4 En-Suite Bathroom</p>
              </div>
              <p style={{ fontSize: "16px", margin: 0 }}>
                    If you are our defined version of a sociable weaver, this is the option for you.
                    Come with a group of <WrappedText color="red">mates</WrappedText> or find them here. All of our apartments are fully fitted
                    and furnished to make your transition to apartment living as <WrappedText color="red">seamless</WrappedText> as possible.
                    Each room has their own wardrobe and desk space, whilst the lounge and kitchen are
                    modern and ergonomically designed to allow for ample space and movement.
              </p>
            </div>}
        />
        {/******************** LAYOUT FOR TABLET AND BELOW ENDS HERE*********/}


        {/* START OF SPACE MAIN */}

        <div className={styles.spacesSectionsContainer}>
          <div className={styles.imageContentSpaces}>
            <div className={styles.imageAnimationItem}>
              <div className={styles.basicSectionLeftContainer}>
                <div className={styles.horizontalScrollContainer} ref={scrollRefOne}>
                  <SliderMedium1 />
                </div>
                <div className={styles.desktopImages} ref={scrollDesktopRefOne}>
                  <Slider />
                  <div className={styles.arrowsPictureLeft_top} id="button_one">
                    <div className="button-group" id="button_one">
                      <div className="button button--previous-one">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftArrow} onClick={() => { scrollLeft(scrollDesktopRefOne.current) }} >
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>

                    <div className="button-group" id="button_one">
                      <div className="button button--next-one">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { scrollRight(scrollDesktopRefOne.current) }}>
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>


                <div className={styles.sectionInfoContainer}>
                  <h2 className={styles.sectionInfoHeading}>
                    Studio
                  </h2>
                  <div className={styles.spaceInfo}>
                    <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                    <div className={styles.divider}></div>
                    <p className={styles.rightNumberBathroom}>1 En-Suite Bathroom</p>
                  </div>
                  <p style={{ fontSize: "16px", margin: 0 }}>
                    Wanna do yoga in your underwear whilst cooking up a storm?
                    This is for you. Our open plan studio apartments were designed
                    with the ultimate <WrappedText color="red">independent</WrappedText> individual in mind. It comes fully
                    furnished and fitted with <WrappedText color="red">absolutely everything</WrappedText>, from an induction
                    stove and microwave to the pots, pans and cutlery - we want to
                    see you hone in on those master chef cooking skills (or ready made meals).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileFortyThree].join(" ")}
            id="mobileSpaces3"
            width="133.707" height="75.826" viewBox="0 0 133.707 75.826"
            d="M453.115,304.774c71.735-2.8,95.653-14.7,125.943-46.213"
            transform="translate(-502.149 -110.554) rotate(-14)"
            ref={svgMobileFortyThree}
            animateF={animatedPaths}
            time={1000}
          />
          <SVG
            style={[styles.svgBase, styles.svgFortyFour].join(" ")}
            id="44"
            d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
            width="591.282"
            height="39.552"
            viewBox="0 0 591.282 39.552"
            ref={svgFortyFour}
            transform="translate(-316.969 -161.77) rotate(-1)"
            animateF={animatedPaths}
            time={500}
          />

          <div className={styles.imageContentSpaces}>
            <div className={styles.imageAnimationItem}>
              <div className={styles.basicSectionRightContainer}>
                <div className={styles.sectionInfoContainer}>
                  <h2 className={styles.sectionInfoHeading}>
                    Studio +
                  </h2>

                  <div className={styles.spaceInfo}>
                    <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                    <div className={styles.divider}></div>
                    <p className={styles.rightNumberBathroom}>1 En-Suite Bathroom</p>
                  </div>
                  <p style={{ fontSize: "16px", margin: 0 }}>
                    Our studio+ apartments offer Xm<sup>2</sup> of open plan living, furnished and fitted with absolutely everything.
                    It features a <WrappedText color="red">modern</WrappedText> and ergonomically designed kitchenette, lounge area, desk space and bed.
                    Each apartment comes with a <WrappedText color="red">Juliette balcony</WrappedText>, with the exception of those from the 4th floor up.
                  </p>
                </div>

                <div className={styles.horizontalScrollContainer} ref={scrollRefTwo}></div>

                <div className={styles.desktopImages} ref={scrollDesktopRefTwo}>
                  <SliderTWO />
                  {/* BUTTON 2 */}
                  <div className={styles.arrowsPictureRight} id="button_2">
                    <div className="button-group" id="button">
                      <div className="button button--previous btn--previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftArrow} onClick={() => { scrollLeft(scrollDesktopRefOne.current) }} >
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>

                    <div className="button-group" id="button">
                      <div className="button button--next btn--next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { scrollRight(scrollDesktopRefOne.current) }}>
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <SVG
            style={[styles.svgBase, styles.svgFortyFive].join(" ")}
            id="45"
            d="M493.992,379.148c104.73,200.774-47.955,340.47-358.591,450.017q-21.766,7.675-43.59,14.812"
            transform="translate(-59 -378.917)"
            width="435.544"
            height="465.536"
            viewBox="0 0 435.544 465.536"
            ref={svgFortyFive}
            animateF={animatedPaths}
            time={4500}
          />
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileFortyFour].join(" ")}
            id="mobileSpaces4"
            width="300.094" height="20.485" viewBox="0 0 300.094 20.485"
            d="M368.241,347.753C245.919,346.618,155.8,352.561,68.2,367.545"
            transform="translate(-68.149 -347.339)"
            ref={svgMobileFortyFour}
            animateF={animatedPaths}
            time={1000}
          />
          <div className={styles.imageContentSpaces}>

            <div className={styles.imageAnimationItem}>
              <div className={styles.basicSectionLeftContainer}>

                <div className={styles.horizontalScrollContainer} ref={scrollRefThree}></div>
                <div className={styles.desktopImages} ref={scrollDesktopRefThree}>
                  <SliderTHREE />
                  <div className={styles.arrowsPictureLeft} id="button_3">
                    <div className="button-group" id="button">
                      <div className="button button--previous btn--previous btn--previous_3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftArrow} onClick={() => { scrollLeft(scrollDesktopRefOne.current) }} >
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>

                    <div className="button-group" id="button">
                      <div className="button button--next btn--next btn--next_3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { scrollRight(scrollDesktopRefOne.current) }}>
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.sectionInfoContainer}>
                  <h2 className={styles.sectionInfoHeading}>
                    Two Bedroom
                  </h2>
                  <div className={styles.spaceInfo}>
                    <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                    <div className={styles.divider}></div>
                    <p className={styles.rightNumberBathroom}>2 En-Suite Bathroom</p>
                  </div>
                  <p style={{ fontSize: "16px", margin: 0 }}>
                    Got an ideal living partner or looking to find one? These two bedroom apartments are
                    perfect for those who like <WrappedText color="red">sharing</WrappedText> their <WrappedText color="red">space</WrappedText> (but not too much of it).
                    Each bedroom has its own en-suite bathroom, with a living area and kitchen to
                    share with your fellow mate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileFortyFive].join(" ")}
            id="mobileSpaces5"
            width="168.803" height="66.806" viewBox="0 0 168.803 66.806"
            d="M459.89,347.617c-11.341,23-46.927,41.428-133.423,59.621q-17.546,3.691-35.077,6.781"
            transform="translate(-291.341 -347.492)"
            ref={svgMobileFortyFive}
            animateF={animatedPaths}
            time={1000}
          />

          <div className={styles.imageContentSpaces}>
            <div className={styles.imageAnimationItem}>
              <div className={styles.basicSectionRightContainer}>
                <div className={styles.sectionInfoContainer}>
                  <h2 className={styles.sectionInfoHeading}>
                    Three Bedroom
                  </h2>
                  <div className={styles.spaceInfo}>
                    <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                    <div className={styles.divider}></div>
                    <p className={styles.rightNumberBathroom}>3 En-Suite Bathroom</p>
                  </div>
                  <p style={{ fontSize: "16px", margin: 0 }}>
                    Two’s company, three’s a crowd. Our three bed option offers you your own <WrappedText color="red">personal </WrappedText>
                    space as well as a lounge area to have the ultimate movie nights. All of our apartments
                    are <WrappedText color="red">fully</WrappedText> fitted and furnished to make your transition to apartment living as
                    seamless as possible. Each room has their own wardrobe and desk space, whilst the
                    <WrappedText color="red"> lounge</WrappedText> and kitchen are modern and ergonomically designed to allow for ample space and movement.
                  </p>
                </div>

                <div className={styles.horizontalScrollContainer} ref={scrollRefFour}></div>
                <div className={styles.desktopImages} ref={scrollDesktopRefFour}>
                  <SliderFOUR />
                  <div className={styles.arrowsPictureRight} id="button_4">
                    <div className="button-group" id="button">
                      <div className="button button--previous btn--previous btn--previous_4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftArrow} onClick={() => { scrollLeft(scrollDesktopRefOne.current) }} >
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>

                    <div className="button-group" id="button">
                      <div className="button button--next btn--next btn--next_4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { scrollRight(scrollDesktopRefOne.current) }}>
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SVG
            style={[styles.svgBase, styles.svgFortySeven].join(" ")}
            id="47"
            d="M219.861,39.871
              C125.821,131.275,
              77.477,192.847,
              68.2,336.428"
            transform="translate(293.015 -77.129) rotate(70)"
            width="331.202"
            height="244.876"
            viewBox="0 0 331.202 244.876"
            ref={svgFortySeven}
            animateF={animatedPaths}
            time={3500}
          />
          <SVG
            style={[styles.svgMobileBase, styles.svgMobileFortySix].join(" ")}
            id="mobileSpaces6"
            width="159.357" height="154.513" viewBox="0 0 159.357 154.513"
            d="M564.664,407.917c-.84,56.52-44.023,90.88-117.983,126.234"
            transform="translate(349.446 -559.142) rotate(70)"
            ref={svgMobileFortySix}
            animateF={animatedPaths}
            time={1000}
          />
          {/* START OF LAST COMPONENT */}
          <div className={styles.imageContentSpaces} style={{ paddingBottom: "12rem" }}>
            <div className={styles.imageAnimationItem}>
              <div className={styles.basicSectionLeftContainer}>
                <div className={styles.horizontalScrollContainer} ref={scrollRefFive}></div>
                {/* FOR DESKTOP */}
                <div className={styles.desktopImages} ref={scrollDesktopRefFive}>
                  <SliderFIVE />
                  <div className={styles.arrowsPictureLeft} id="button_5">
                    <div className="button-group " id="button">
                      <div className="button button--previous btn--previous btn--previous_5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftArrow} onClick={() => { scrollLeft(scrollDesktopRefOne.current) }} >
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>

                    <div className="button-group" id="button">
                      <div className="button button--next btn--next btn--next_5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { scrollRight(scrollDesktopRefOne.current) }}>
                          <path class="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END OF IMG */}


                <div className={styles.sectionInfoContainer}>
                  {/* START OF TITLE */}
                  <h2 className={styles.sectionInfoHeading}>
                    Four Bedroom
                  </h2>
                  {/* START OF SUB TITLE */}
                  <div className={styles.spaceInfo}>
                    <p className={styles.leftLivingArea}>36m<sup>2</sup> Open Plan Living</p>
                    <div className={styles.divider}></div>
                    <p className={styles.rightNumberBathroom}>4 En-Suite Bathroom</p>
                  </div>
                  {/* END OF SUB TITLE */}
                  <p style={{ fontSize: "16px", margin: 0 }}>
                    If you are our defined version of a sociable weaver, this is the option for you.
                    Come with a group of <WrappedText color="red">mates</WrappedText> or find them here. All of our apartments are fully fitted
                    and furnished to make your transition to apartment living as <WrappedText color="red">seamless</WrappedText> as possible.
                    Each room has their own wardrobe and desk space, whilst the lounge and kitchen are
                    modern and ergonomically designed to allow for ample space and movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* END OF LAST COMPONENT */}

        </div>
        <SVG
          style={[styles.svgBase, styles.svgFortyTwo].join(" ")}
          id="42"
          d="M610.421,407.917c-1.165,78.439-61.1,126.125-163.74,175.19"
          transform="translate(503.503 706.029) rotate(-167)"
          width="199.753"
          height="208.141"
          viewBox="0 0 199.753 208.141"
          ref={svgFortyTwo}
          animateF={animatedPaths}
          time={500}
        />
        <SVG
          style={[styles.svgMobileBase, styles.svgMobileFortySeven].join(" ")}
          id="mobileSpaces7"
          width="73.115" height="78.054" viewBox="0 0 73.115 78.054"
          d="M519.39,407.917c-.517,34.831-27.13,56.006-72.709,77.794"
          transform="translate(-446.559 -407.913)"
          ref={svgMobileFortySeven}
          animateF={animatedPaths}
          time={1000}
        />
        <SVG
          style={[styles.svgMobileBase, styles.svgMobileFortyEight].join(" ")}
          id="mobileSpaces8"
          width="121.602" height="85.521" viewBox="0 0 121.602 85.521"
          d="M575.626,57.626C618.24,76.962,654.832,89.507,697.95,86.575"
          transform="matrix(-0.875, 0.485, -0.485, -0.875, 652.766, -202.686)"
          ref={svgMobileFortyEight}
          animateF={animatedPaths}
          time={1000}
        />

        <div className={styles.equipSection}>
          <div className={styles.equipSectionHeader}>
            <h2 className={styles.equipSectionHeading}>Each Space will be equipped with:</h2>
          </div>
          <div className={styles.equipmentColumns}>
            <ul className={styles.equipmentColumn} style={{ marginLeft: "0" }}>
              {equipmentRow1}
            </ul>
            <ul className={styles.equipmentColumn}>
              {equipmentRow2}
            </ul>
            <ul className={styles.equipmentColumn}>
              {equipmentRow3}
            </ul>
          </div>
          <div className={styles.footerLine}></div>
          <div className={styles.bottomButton}>
            <Cta title="Book A Space" ></Cta>
          </div>
          <div className={styles.orangeBird}>
            <svg xmlns="http://www.w3.org/2000/svg" width="163" height="97.623" viewBox="0 0 163 97.623">
              <path class="a" d="M488.529,334.842c-6.476-10.908-21.727-36.611-24.109-40.62-16.246-27.375-31.024-25.89-45.6-25.89-5.457,0,4.76-6.94-5.094-16.7-1.847-1.848-3.474-5.9-4.761-9.824a1.388,1.388,0,0,0-2.633,0c-1.287,3.92-2.914,7.977-4.761,9.824-9.854,9.755.363,16.7-5.094,16.7-14.577,0-29.355-1.485-45.6,25.89-2.381,4.009-17.633,29.712-24.109,40.62-3.947,6.631,11.986,4.384,19.4-8.116,3.014-5.081,6.029-12.224,15.141-12.224a13.863,13.863,0,0,0,11.917-6.785c12.937-21.782,22.1-13.345,19.083-8.25L377.749,320.1c-10.393,17.508,70.195,17.509,59.8,0l-14.56-20.635c-3.022-5.095,6.146-13.532,19.083,8.25a13.863,13.863,0,0,0,11.917,6.785c9.112,0,12.127,7.143,15.141,12.224C476.544,339.226,492.476,341.473,488.529,334.842Z" transform="translate(-326.149 -240.865)" />
            </svg>
          </div>
        </div>
        <SVG
          style={[styles.svgBase, styles.svgFortyEight].join(" ")}
          id="412"
          d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
          width="591.282"
          height="39.552"
          viewBox="0 0 591.282 39.552"
          ref={svgFortyEight}
          transform="translate(-316.969 -161.77) rotate(-1)"
          animateF={animatedPaths}
          time={500}
        />
        <SVG
          style={[styles.svgMobileBase, styles.svgMobileFortyNine].join(" ")}
          id="mobileSpaces9"
          width="124.433" height="129.263" viewBox="0 0 124.433 129.263"
          d="M446.681,407.917c.71,47.785,37.22,76.835,99.75,106.726"
          transform="matrix(0.966, -0.259, 0.259, 0.966, -536.762, -252.555)"
          ref={svgMobileFortyNine}
          animateF={animatedPaths}
          time={1000}
        />
        <Contact
          animateF={animatedPaths}
          svgStartTime={6000}
          showModal={showModal}
          submitted={setShowModal}
        />
      </div>
    </Layout >
  )
}
export default Spaces
