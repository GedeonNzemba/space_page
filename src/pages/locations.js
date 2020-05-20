import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import styles from "../styles/stylesheet.module.css"
import SEO from "../components/seo"
import BrandmarkRed from "../images/brandmark_red.png"
import SVG from "../components/svgs/svg"
import UnitOption from "../components/unitOption"
import unitOptionData from "../data/unitOptions"
// import BasicSection from "../components/basicSection"
import Contact from "../components/contact"
import WrappedText from "../components/wrappedText/wrappedText"
import Cta from "../components/cta/cta"

const Locations = props => {
  const locationsSvgOne = useRef()
  const locationsSvgTwo = useRef()
  const locationsSvgThree = useRef()
  const locationsSvgFour = useRef()
  const locationsSvgFive = useRef()
  const locationsSvgSix = useRef()
  const locationsSvgSeven = useRef()
  const locationsSvgEight = useRef()
  const locationsSvgNine = useRef()
  const locationsSvgTen = useRef()
  const locationsSvgEleven = useRef()

  let unitOptions = unitOptionData.unitOptions

  const data = useStaticQuery(graphql`
    query {
      appMockup: file(relativePath: { eq: "appMockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 960, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adobeStockBuidling: file(relativePath: { eq: "AdobeStockBuidling.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adobeStockBuidlingMobile: file(
        relativePath: { eq: "AdobeStockBuidlingMobile.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brandmarkWithText2x: file(
        relativePath: { eq: "PLHoldingBrandmarkOrange2x.png" }
      ) {
        childImageSharp {
          fluid {
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
      space: file(relativePath: { eq: "space.png" }) {
        childImageSharp {
          fixed(width: 700, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      functionalDesign: file(relativePath: { eq: "functionalDesign.png" }) {
        childImageSharp {
          fluid(maxWidth: 960, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      functionalDesignMobile: file(
        relativePath: { eq: "functionalDesignMobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 269, maxHeight: 279) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adobeStockBuidlingFull: file(
        relativePath: { eq: "AdobeStockBuidlingFull.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsMap: file(relativePath: { eq: "locationsMap.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsPlacesToEat: file(
        relativePath: { eq: "locationsPlacesToEat.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsPlacesToEatMobile: file(
        relativePath: { eq: "locationsPlacesToEatMobile.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsPlacesToEat2: file(
        relativePath: { eq: "locationsPlacesToEat2.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsPlacesToEat3: file(
        relativePath: { eq: "locationsPlacesToEat3.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsTransport: file(relativePath: { eq: "locationsTransport.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsTransportMobile: file(
        relativePath: { eq: "locationsTransportMobile.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationsThingsToDoMobile: file(
        relativePath: { eq: "locationsThingsToDoMobile.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thumbprint: file(relativePath: { eq: "15.png" }) {
        childImageSharp {
          fixed(width: 960, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      coffeeShops: file(relativePath: { eq: "coffeeShops.png" }) {
        childImageSharp {
          fixed(width: 372, height: 453) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  let palcesToEatImage = (
    <Img
      fluid={data.locationsPlacesToEat.childImageSharp.fluid}
      className={styles.locationsAdvancedSectionImage}
    />
  )
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
  var buzzwordSecurity = null
  var buzzwordCoffeeShops = null
  var buzzwordParking = null
  var buzzwordSupport = null
  const buzzwordFlip = (
    element,
    firstDiv,
    firstClass,
    secondDiv,
    secondClass
  ) => {
    element = document.getElementById(firstDiv)
    element.classList.add(firstClass)
    setTimeout(() => {
      element = document.getElementById(secondDiv)
      element.classList.add(secondClass)
    }, 500)
  }
  const buzzwordFlop = (
    element,
    firstDiv,
    firstClass,
    secondDiv,
    secondClass
  ) => {
    element = document.getElementById(firstDiv)
    element.classList.remove(firstClass)
    setTimeout(() => {
      element = document.getElementById(secondDiv)
      element.classList.remove(secondClass)
    }, 500)
  }
  return (
    <Layout>
      <SEO title="Locations" />
      <div className={styles.locationsHero}>
        <div className={styles.locationsHeroLeft}>
          <SVG
            style={[styles.locationsSvgOne, styles.locationsSvgs].join(" ")}
            width="660.31"
            height="398.061"
            viewBox="0 0 660.31 398.061"
            id="Path_435"
            d="M650.212,677.695
            S926.259,429.354,983.544,49.316"
            transform="matrix(0.105, 0.995, -0.995, 0.105, 606.421, -651.465)"
            fill="none"
            ref={locationsSvgOne}
            animateF={animatedPaths}
            time={100}
          />
          <Img
            fluid={data.adobeStockBuidling.childImageSharp.fluid}
            className={styles.locationsHeroImage}
            alt="building sideview"
          />
          <Img
            fluid={data.adobeStockBuidlingMobile.childImageSharp.fluid}
            className={styles.locationsHeroImageMobile}
            alt="building sideview"
          />
        </div>
        <div className={styles.locationsHeroRight}>
          <div className={styles.locationsHeroText}>
            <p>Cape Town</p>
            <h1>6 Nansen Street</h1>
            <p className={styles.locationsHeroCopy}>
              Our first development, 6 Nansen Street is nestled in the heart of
              Observatory. It’s a stone's throw away from AFDA and many other
              top tertiary institutions including UCT. Constructed with leading
              architects and interior designers, we are very proud of our
              original Proper Living pad.
            </p>
            <p className={styles.locationsHeroCopyMobile}>
              This is our first development, nestled in the heart of
              Observatory.
            </p>
            <Cta title="Book a room"></Cta>
          </div>
          <div className={styles.locationsBrandmarkDiv}>
            <img
              className={styles.locationsBrandmark}
              src={BrandmarkRed}
              alt="proper living brandmark in red"
            />
          </div>
          <p className={styles.locationsBrandmarkText}>Student acommodation</p>
        </div>
      </div>
      <div className={styles.spacesSectionContainer}>
        <SVG
          style={[styles.locationsSvgTwo, styles.locationsSvgs].join(" ")}
          width="562.153"
          height="302.806"
          viewBox="0 0 562.153 302.806"
          id="Path_435"
          d="M453.115,453.995
            C
            756.48,442.151,
            857.631,391.81,
            985.726,258.561"
          transform="matrix(0.978, -0.208, 0.208, 0.978, -496.88, -47.553)"
          fill="none"
          ref={locationsSvgTwo}
          animateF={animatedPaths}
          time={200}
        />
        <div
          className={[
            // styles.spacesSectionTextColumn,
            styles.locationsSpacesTextColumn,
          ].join(" ")}
        >
          <h2 className={styles.spacesSectionTextHeading} id="bookASpace">
            Book Your Room At
            <br /> 6 Nansen Street
          </h2>
          <p
            className={[
              styles.spacesSectionParagraph,
              styles.locationsSpacesSectionParagraph,
            ].join(" ")}
          >
            No matter the size we have you covered, from studio
            <br /> to full four bedroom apartments. Have a look at our
            <br /> options and click on the one that best suits you.
          </p>
        </div>
      </div>
      <div
        className={[
          styles.unitOptionContainer,
          styles.locationsUnitOptionContainer,
        ].join(" ")}
      >
        <div
          className={[
            styles.unitOptionSubContainer,
            styles.locationsUnitOptionSubContainer,
          ].join(" ")}
        >
          <UnitOption
            locations
            unitKey = "studio"
            type={unitOptions.studio.copy.unitType}
            desc={unitOptions.studio.copy.unitDesc}
            cta={unitOptions.studio.copy.unitCta}
            imageHover={data.unitHover.childImageSharp.fixed}
          />
          <UnitOption
            locations
            unitKey = "studioPlus"
            type={unitOptions.studioPlus.copy.unitType}
            desc={unitOptions.studioPlus.copy.unitDesc}
            cta={unitOptions.studioPlus.copy.unitCta}
            imageHover={data.unitHover.childImageSharp.fixed}
          />
          <UnitOption
            locations
            unitKey = "twoBedroom"
            type={unitOptions.twoBedroom.copy.unitType}
            desc={unitOptions.twoBedroom.copy.unitDesc}
            cta={unitOptions.twoBedroom.copy.unitCta}
            imageHover={data.unitHover.childImageSharp.fixed}
          />
          <UnitOption
            locations
            unitKey = "threeBedroom"
            type={unitOptions.threeBedroom.copy.unitType}
            desc={unitOptions.threeBedroom.copy.unitDesc}
            cta={unitOptions.threeBedroom.copy.unitCta}
            imageHover={data.unitHover.childImageSharp.fixed}
          />
          <UnitOption
            locations
            unitKey = "fourBedroom"
            type={unitOptions.fourBedroom.copy.unitType}
            desc={unitOptions.fourBedroom.copy.unitDesc}
            cta={unitOptions.fourBedroom.copy.unitCta}
            imageHover={data.unitHover.childImageSharp.fixed}
          />
        </div>
        <SVG
          style={[styles.locationsSvgThree, styles.locationsSvgs].join(" ")}
          width="180.489"
          height="143.056"
          viewBox="0 0 180.489 143.056"
          id="3"
          d="M254.227,245.175
          c-1.638,22.1
          -2.784,107.7
          -125.445,167.737"
          transform="matrix(0.105, 0.995, -0.995, 0.105, 397.658, -153.482)"
          fill="none"
          ref={locationsSvgThree}
          animateF={animatedPaths}
          time={200}
        />
      </div>
      <div className={styles.locationsTestimonialContainer}>
        <div className={styles.locationsTestimonialCopy}>
          "6 Nansen Street was
          <br />
          built in 2020 so you’ll
          <br />
          be its first inhabitants."
        </div>
        <SVG
          style={[styles.locationsSvgFour, styles.locationsSvgs].join(" ")}
          width="591.282"
          height="39.552"
          viewBox="0 0 591.282 39.552"
          id="3"
          d="M314.016,206.341c105.5-21.193,296.223-29.043,590.762-28.2"
          transform="translate(-316.969 -161.77) rotate(-1)"
          fill="none"
          ref={locationsSvgFour}
          animateF={animatedPaths}
          time={200}
        />
      </div>
      <div className={styles.locationsBasicSectionLeftContainer}>
        <Img
          fluid={data.brandmarkWithText2x.childImageSharp.fluid}
          className={styles.locationsBrandmarkWithText}
        />
        <SVG
          style={[styles.locationsSvgFive, styles.locationsSvgs].join(" ")}
          width="301.189"
          height="162.521"
          viewBox="0 0 301.189 162.521"
          id="3"
          d="M453.115,363.182c162.4-6.34,216.548-33.289,285.12-104.621"
          transform="matrix(0.978, -0.208, 0.208, 0.978, -496.88, -99.009)"
          fill="none"
          ref={locationsSvgFive}
          animateF={animatedPaths}
          time={200}
        />
        <div className={styles.locationsSectionImageContainer}>
          <div className={styles.sectionImage}>
            <Img fluid={data.functionalDesign.childImageSharp.fluid} />
          </div>
        </div>
        <div className={styles.locationsSectionImageLeftContainerMobile}>
          <div className={styles.sectionImage}>
            <Img fluid={data.functionalDesignMobile.childImageSharp.fluid} />
          </div>
        </div>
        <div className={styles.locationsSectionInfoContainer}>
          <h2 className={styles.sectionInfoHeading}>Find Proper Flatmates</h2>
          <p style={{ fontSize: "16px" }}>
            We have created our “Join Space” tool for those who don’t yet have
            flatmates and want to live in our more social 2, 3 and 4 bedroom
            apartments.
          </p>
          <Cta title="Join Space"></Cta>
        </div>
      </div>
      <div className={styles.locationsBasicSectionLeftContainer} id="properDesign">
        <SVG
          style={[styles.locationsSvgSix, styles.locationsSvgs].join(" ")}
          width="189.908"
          height="199.212"
          viewBox="0 0 189.908 199.212"
          id="3"
          d="M610.421,407.917c-1.165,78.439-61.1,126.125-163.74,175.19"
          transform="translate(539.588 671.942) rotate(-171)"
          fill="none"
          ref={locationsSvgSix}
          animateF={animatedPaths}
          time={200}
        />
        <div className={styles.locationsSectionImageContainer}>
          <div className={styles.sectionImage}>
            <Img fluid={data.adobeStockBuidlingFull.childImageSharp.fluid} />
          </div>
        </div>
        <div className={styles.locationsSectionImageRightContainerMobile}>
          <div className={styles.sectionImage}>
            <Img fluid={data.functionalDesignMobile.childImageSharp.fluid} />
          </div>
        </div>
        <div className={styles.locationsSectionInfoContainer}>
          <h2 className={styles.sectionInfoHeading}>Proper Modern Design</h2>
          <p style={{ fontSize: "16px" }}>
            We have designed 6 Nansen street with you, the tenant in mind. We
            have maximized your space in all ways possible and have fully fitted
            and furnished every room with proper modern appliances.
          </p>
          {/* <Cta title="Join Space"></Cta> */}
        </div>
      </div>
      <div className={styles.locationsBuzzwords}>
        <SVG
          style={[styles.locationsSvgSeven, styles.locationsSvgs].join(" ")}
          width="462.953"
          height="300.873"
          viewBox="0 0 462.953 300.873"
          id="3"
          d="M453.115,535.567C708.609,518.78,793.8,447.427,901.681,258.561"
          transform="translate(-465.98 -210.746) rotate(-3)"
          fill="none"
          ref={locationsSvgSeven}
          animateF={animatedPaths}
          time={200}
        />
        {/* svg eight (on card) */}
        <div className={styles.locationsBuzzwordDiv}>
          <div
            role="button"
            tabIndex={0}
            id="buzzwordSecurityBefore"
            className={[
              styles.locationsBuzzwordsSecurityBefore,
              styles.locationBuzzwordCards,
            ].join(" ")}
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlip(
                buzzwordSecurity,
                "buzzwordSecurityBefore",
                styles.locationsBuzzwordsSecurityBeforeHide,
                "buzzwordSecurityAfter",
                styles.locationsBuzzwordsSecurityAfterShow
              )
            }}
          >
            <Img
              fixed={data.thumbprint.childImageSharp.fixed}
              className={styles.locationsSecurityAfterImage}
              alt="thumprint security image"
            />
            <p className={styles.locationsBuzzwordParagraph}>Security</p>
          </div>
          <div
            role="button"
            tabIndex={0}
            id="buzzwordSecurityAfter"
            className={[
              styles.locationsBuzzwordsSecurityAfter,
              styles.locationBuzzwordCards,
              styles.locationBuzzwordCardsAfter,
            ].join(" ")}
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlop(
                buzzwordSecurity,
                "buzzwordSecurityAfter",
                styles.locationsBuzzwordsSecurityAfterShow,
                "buzzwordSecurityBefore",
                styles.locationsBuzzwordsSecurityBeforeHide
              )
            }}
          >
            <p className={styles.locationsBuzzwordParagraph}>
              Content about the security of the system etc
            </p>
          </div>
        </div>
        <div
          className={styles.locationsBuzzwordDiv}
          // onMouseLeave={()=>{
          //   buzzwordParking = document.getElementById("buzzwordParkingAfter")
          //   buzzwordParking.classList.remove(
          //     styles.locationsBuzzwordsParkingAfterShow
          //   )
          //   setTimeout(() => {
          //     buzzwordParking = document.getElementById(
          //       "buzzwordParkingBefore"
          //     )
          //     buzzwordParking.classList.remove(
          //       styles.locationsBuzzwordsParkingBeforeHide
          //     )
          //   }, 500)
          // }}
        >
          <div
            role="button"
            tabIndex={0}
            className={[
              styles.locationsBuzzwordsParkingBefore,
              styles.locationBuzzwordCards,
            ].join(" ")}
            id="buzzwordParkingBefore"
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlip(
                buzzwordParking,
                "buzzwordParkingBefore",
                styles.locationsBuzzwordsParkingBeforeHide,
                "buzzwordParkingAfter",
                styles.locationsBuzzwordsParkingAfterShow
              )
            }}
          >
            <p className={styles.locationsBuzzwordParagraph}>Parking before</p>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={[
              styles.locationsBuzzwordsParkingAfter,
              styles.locationBuzzwordCards,
              styles.locationBuzzwordCardsAfter,
            ].join(" ")}
            id="buzzwordParkingAfter"
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlop(
                buzzwordParking,
                "buzzwordParkingAfter",
                styles.locationsBuzzwordsParkingAfterShow,
                "buzzwordParkingBefore",
                styles.locationsBuzzwordsParkingBeforeHide
              )
            }}
          >
            <p className={styles.locationsBuzzwordParagraph}>Parking after</p>
          </div>
        </div>
        <div className={styles.locationsBuzzwordDiv}>
          <div
            role="button"
            tabIndex={0}
            className={[
              styles.locationsBuzzwordsCoffeeShopsBefore,
              styles.locationBuzzwordCards,
            ].join(" ")}
            id="buzzwordCoffeeShopsBefore"
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlip(
                buzzwordCoffeeShops,
                "buzzwordCoffeeShopsBefore",
                styles.locationsBuzzwordsCoffeeShopsBeforeHide,
                "buzzwordCoffeeShopsAfter",
                styles.locationsBuzzwordsCoffeeShopsAfterShow
              )
            }}
          >
            <Img
              fixed={data.coffeeShops.childImageSharp.fixed}
              className={styles.locationsSecurityAfterImage}
              alt="some coffee on a table in a coffee shop"
            />
            <p className={styles.locationsBuzzwordParagraph}>Coffee Shops</p>
          </div>
          <div
            role="button"
            tabIndex={0}
            id="buzzwordCoffeeShopsAfter"
            className={[
              styles.locationsBuzzwordsCoffeeShopsAfter,
              styles.locationBuzzwordCards,
              styles.locationBuzzwordCardsAfter,
            ].join(" ")}
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlop(
                buzzwordCoffeeShops,
                "buzzwordCoffeeShopsAfter",
                styles.locationsBuzzwordsCoffeeShopsAfterShow,
                "buzzwordCoffeeShopsBefore",
                styles.locationsBuzzwordsCoffeeShopsBeforeHide
              )
            }}
          >
            <p className={styles.locationsBuzzwordParagraph}>
              Did you know that light roasted coffee has more caffeine than
              dark?
            </p>
          </div>
        </div>
        <div className={styles.locationsBuzzwordDiv}>
          <div
            role="button"
            tabIndex={0}
            className={[
              styles.locationsBuzzwordsSupportBefore,
              styles.locationBuzzwordCards,
            ].join(" ")}
            id="buzzwordSupportBefore"
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlip(
                buzzwordSupport,
                "buzzwordSupportBefore",
                styles.locationsBuzzwordsSupportBeforeHide,
                "buzzwordSupportAfter",
                styles.locationsBuzzwordsSupportAfterShow
              )
            }}
          >
            <p className={styles.locationsBuzzwordParagraph}>
              24/7 Support before
            </p>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={[
              styles.locationsBuzzwordsSupportAfter,
              styles.locationBuzzwordCards,
              styles.locationBuzzwordCardsAfter,
            ].join(" ")}
            id="buzzwordSupportAfter"
            onKeyDown={() => {}}
            onClick={() => {
              buzzwordFlop(
                buzzwordSupport,
                "buzzwordSupportAfter",
                styles.locationsBuzzwordsSupportAfterShow,
                "buzzwordSupportBefore",
                styles.locationsBuzzwordsSupportBeforeHide
              )
            }}
          >
            <p className={styles.locationsBuzzwordParagraph}>
              24/7 Support after
            </p>
          </div>
        </div>
      </div>

      <div className={styles.locationsBuzzwordsMobile}>
        <h1>Not Convinced?</h1>
        <p>- Security</p>
        <p>- Fully Furnished</p>
        <p>- Good Coffee</p>
        <p>- Uncapped Wifi</p>
      </div>
      <div className={styles.locationsMapDiv}>
        <Img
          fluid={data.locationsMap.childImageSharp.fluid}
          alt="map of cape town"
          className={styles.locationsMap}
        />

        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            font: "Brown",
            letterSpacing: "-1.62px",
            color: "#001A7D",
          }}
        >
          Discover The Area Around You
        </h1>
        <SVG
          style={[styles.locationsSvgNine, styles.locationsSvgs].join(" ")}
          width="178.578"
          height="140.345"
          viewBox="0 0 178.578 140.345"
          id="3"
          d="M254.227,245.175c-1.638,22.1-2.784,107.7-125.445,167.737"
          transform="translate(-222.004 289.783) rotate(-95)"
          fill="none"
          ref={locationsSvgNine}
          animateF={animatedPaths}
          time={200}
        />
        <p
          style={{
            textAlign: "center",
            fontWeight: "Regular",
            fontSize: "1rem",
            font: "Akkurat",
            letterSpacing: 0,
          }}
        >
          We’ve partnered with leading interior designers to focus on
          functionality.
          <br /> Everything fits in properly.
        </p>
      </div>
      {/* places to eat */}
      <div className={styles.basicSectionLeftContainer}>
        <div className={styles.locationsImageContainer}>
          <div className={styles.locationsSectionImage}>
            <div
              id="placesToEatImage1"
              className={styles.locationsForceShowImage}
            >
              <Img
                fluid={data.locationsPlacesToEat.childImageSharp.fluid}
                className={[styles.locationsAdvancedSectionImage].join(" ")}
              />
            </div>
            <div
              id="placesToEatImage2"
              className={styles.locationsForceHideImage}
            >
              <Img
                id="placesToEatImage2"
                fluid={data.locationsPlacesToEat2.childImageSharp.fluid}
                className={[styles.locationsAdvancedSectionImage].join(" ")}
              />
            </div>
            <div
              id="placesToEatImage3"
              className={styles.locationsForceHideImage}
            >
              <Img
                fluid={data.locationsPlacesToEat3.childImageSharp.fluid}
                className={[styles.locationsAdvancedSectionImage].join(" ")}
              />
            </div>
          </div>
        </div>
        <div className={styles.locationsSectionInfoContainer}>
          <h2 className={styles.sectionInfoHeading}>Places To Eat</h2>
          <p style={{ fontSize: "16px" }}>
            We’ve partnered with leading interior designers to focus on
            functionality. Everything fits in properly.
          </p>
          <Img
            fluid={data.locationsPlacesToEatMobile.childImageSharp.fluid}
            className={[styles.locationsSectionImageWideContainerMobile].join(
              " "
            )}
          />
          <div
            className={[
              styles.locationsAdvancedSectionExtra,
              styles.locationsAdvancedSectionExtraRight,
            ].join(" ")}
          >
            <div
              className={styles.locationsAdvancedSectionExtraBlock}
              onMouseEnter={() => {
                const imageTwo = document.getElementById("placesToEatImage2")
                imageTwo.classList.add(styles.locationsForceHideImage)
                if (
                  imageTwo.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageTwo.classList.remove(styles.locationsForceShowImage)
                }
                const imageThree = document.getElementById("placesToEatImage3")
                imageThree.classList.add(styles.locationsForceHideImage)
                if (
                  imageThree.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageThree.classList.remove(styles.locationsForceShowImage)
                }
                const imageOne = document.getElementById("placesToEatImage1")
                imageOne.classList.add(styles.locationsForceShowImage)
                if (
                  imageOne.classList.contains(styles.locationsForceHideImage)
                ) {
                  imageOne.classList.remove(styles.locationsForceHideImage)
                }
              }}
            >
              <p className={styles.locationsAdvancedSectionExtraHeadings}>
                Reverie Social Table
              </p>
              <p className={styles.locationsAdvancedSectionExtraDistance}>
                120 m | 2 min walk
              </p>
              <p className={styles.locationsAdvancedSectionExtraContent}>
                Reverie Social Table is a proper sharing experience that feels
                like home. With Chef Julia’s friendliness and her hearty food,
                you’ll cruise through any homesick vibes.
              </p>
              <p className={styles.locationsAdvancedSectionExtraLink}>
                Open In Maps
              </p>
            </div>
            <div
              className={styles.locationsAdvancedSectionExtraBlock}
              onMouseEnter={() => {
                const imageOne = document.getElementById("placesToEatImage1")
                imageOne.classList.add(styles.locationsForceHideImage)
                if (
                  imageOne.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageOne.classList.remove(styles.locationsForceShowImage)
                }
                const imageThree = document.getElementById("placesToEatImage3")
                if (
                  imageThree.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageThree.classList.remove(styles.locationsForceShowImage)
                }
                imageThree.classList.add(styles.locationsForceHideImage)
                const imageTwo = document.getElementById("placesToEatImage2")
                imageTwo.classList.add(styles.locationsForceShowImage)
                if (
                  imageTwo.classList.contains(styles.locationsForceHideImage)
                ) {
                  imageTwo.classList.remove(styles.locationsForceHideImage)
                }
              }}
            >
              <p className={styles.locationsAdvancedSectionExtraHeadings}>
                Nourish’d
              </p>
              <p className={styles.locationsAdvancedSectionExtraDistance}>
                130 m | 2 min walk
              </p>
              <p className={styles.locationsAdvancedSectionExtraContent}>
                Right around the corner, Nourish’d will nourish your body and
                soul. See what we did there? From smoothies and juices to oats
                and veggie burgers - this cafe is tough to resist.
              </p>
              <p className={styles.locationsAdvancedSectionExtraLink}>
                Open In Maps
              </p>
            </div>
            <div
              className={styles.locationsAdvancedSectionExtraBlock}
              onMouseEnter={() => {
                const imageOne = document.getElementById("placesToEatImage1")
                imageOne.classList.add(styles.locationsForceHideImage)
                if (
                  imageOne.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageOne.classList.remove(styles.locationsForceShowImage)
                }
                const imageTwo = document.getElementById("placesToEatImage2")
                imageTwo.classList.add(styles.locationsForceHideImage)
                if (
                  imageTwo.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageTwo.classList.remove(styles.locationsForceShowImage)
                }
                const imageThree = document.getElementById("placesToEatImage3")
                imageThree.classList.add(styles.locationsForceShowImage)
                if (
                  imageThree.classList.contains(styles.locationsForceHideImage)
                ) {
                  imageThree.classList.remove(styles.locationsForceHideImage)
                }
              }}
            >
              <p className={styles.locationsAdvancedSectionExtraHeadings}>
                Obz Cafe
              </p>
              <p className={styles.locationsAdvancedSectionExtraDistance}>
                900 m | 10 min walk
              </p>
              <p className={styles.locationsAdvancedSectionExtraContent}>
                Obz Cafe has been an iconic restaurant Obs spot for 20 years,
                they’re known for their popular thin-based pizzas and the ‘best
                burgers in town’.
              </p>
              <p className={styles.locationsAdvancedSectionExtraLink}>
                Open In Maps
              </p>
            </div>
          </div>
        </div>
        <SVG
          style={[styles.locationsSvgTen, styles.locationsSvgs].join(" ")}
          width="531.684"
          height="320.476"
          viewBox="0 0 531.684 320.476"
          id="3"
          d="M569.737,392.532c-63.489,136.931,453.475,384.931,510.645,258"
          transform="translate(-583.582 -335.217) rotate(-3)"
          fill="none"
          ref={locationsSvgTen}
          animateF={animatedPaths}
          time={200}
        />
      </div>
      {/* transport section */}
      <div style={{ marginBottom: "10%" }}>
        <div className={styles.basicSectionRightContainer}>
          <div className={styles.locationsSectionInfoContainer}>
            <h2 className={styles.sectionInfoHeading}>How To Get Around</h2>
            <p style={{ fontSize: "16px" }}>
              We’ve partnered with{" "}
              <WrappedText color="orange">leading</WrappedText> interior
              designers to focus on functionality. Everything fits in properly.
            </p>
            <Img
              fluid={data.locationsPlacesToEatMobile.childImageSharp.fluid}
              className={[styles.locationsSectionImageWideContainerMobile].join(
                " "
              )}
            />
            <div
              className={[
                styles.locationsAdvancedSectionExtra,
                styles.locationsAdvancedSectionExtraLeft,
                styles.locationsAdvancedSectionExtraTwo,
              ].join(" ")}
            >
              <div
                className={styles.locationsAdvancedSectionExtraBlock}
                onMouseEnter={() => {
                  const imageTwo = document.getElementById("transportImage2")
                  imageTwo.classList.add(styles.locationsForceHideImage)
                  if (
                    imageTwo.classList.contains(styles.locationsForceShowImage)
                  ) {
                    imageTwo.classList.remove(styles.locationsForceShowImage)
                  }
                  const imageOne = document.getElementById("transportImage1")
                  imageOne.classList.add(styles.locationsForceShowImage)
                  if (
                    imageOne.classList.contains(styles.locationsForceHideImage)
                  ) {
                    imageOne.classList.remove(styles.locationsForceHideImage)
                  }
                }}
              >
                <p className={styles.locationsAdvancedSectionExtraHeadings}>
                  Jammie Shuttle
                </p>
                <p className={styles.locationsAdvancedSectionExtraDistance}>
                  1.4 km | 18 min walk
                </p>
                <p className={styles.locationsAdvancedSectionExtraContent}>
                  For those UCT students living with us, there’s a Jammie stop
                  at Obz Square.
                </p>
                <p className={styles.locationsAdvancedSectionExtraLink}>
                  Open In Maps
                </p>
              </div>
              <div
                className={styles.locationsAdvancedSectionExtraBlock}
                onMouseEnter={() => {
                  const imageOne = document.getElementById("transportImage1")
                  imageOne.classList.add(styles.locationsForceHideImage)
                  if (
                    imageOne.classList.contains(styles.locationsForceShowImage)
                  ) {
                    imageOne.classList.remove(styles.locationsForceShowImage)
                  }
                  const imageTwo = document.getElementById("transportImage2")
                  imageTwo.classList.add(styles.locationsForceShowImage)
                  if (
                    imageTwo.classList.contains(styles.locationsForceHideImage)
                  ) {
                    imageTwo.classList.remove(styles.locationsForceHideImage)
                  }
                }}
              >
                <p className={styles.locationsAdvancedSectionExtraHeadings}>
                  MyCiti Bus
                </p>
                <p className={styles.locationsAdvancedSectionExtraDistance}>
                  7 km | 2 min walk
                </p>
                <p className={styles.locationsAdvancedSectionExtraContent}>
                  MyCiti is Cape Towns official public bus that can get you to
                  most places.
                </p>
                <p className={styles.locationsAdvancedSectionExtraLink}>
                  Open In Maps
                </p>
              </div>
            </div>
          </div>
          <div className={styles.locationsImageContainer}>
            <div className={styles.locationsSectionImage}>
              {/* <Img
                fluid={data.locationsTransport.childImageSharp.fluid}
                className={styles.locationsAdvancedSectionImage}
              /> */}

              <div className={styles.locationsSectionImage}>
                <div
                  id="transportImage1"
                  className={styles.locationsForceShowImage}
                >
                  <Img
                    fluid={data.locationsTransport.childImageSharp.fluid}
                    className={[
                      styles.locationsAdvancedSectionImage,
                      styles.locationsTransportImageOneAdjustment,
                    ].join(" ")}
                  />
                </div>
                <div
                  id="transportImage2"
                  className={styles.locationsForceHideImage}
                >
                  <Img
                    fluid={data.locationsPlacesToEat2.childImageSharp.fluid}
                    className={[styles.locationsAdvancedSectionImage].join(" ")}
                  />
                </div>
              </div>
            </div>
          </div>
          <SVG
            style={[styles.locationsSvgEleven, styles.locationsSvgs].join(" ")}
            width="670.393"
            height="362.805"
            viewBox="0 0 670.393 362.805"
            id="3"
            d="M575.626,369.255C799.03,332.1,998.154,374.69,1217.2,549.531"
            transform="translate(-401.669 -501.406) rotate(16)"
            fill="none"
            ref={locationsSvgEleven}
            animateF={animatedPaths}
            time={200}
          />
        </div>
      </div>
      {/* things to do */}
      <div className={styles.basicSectionLeftContainer}>
        <div className={styles.locationsImageContainer}>
          <div className={styles.locationsSectionImage}>
            <div
              id="thingsToDoImage1"
              className={styles.locationsForceShowImage}
            >
              <Img
                fluid={data.locationsPlacesToEat.childImageSharp.fluid}
                className={[styles.locationsAdvancedSectionImage].join(" ")}
              />
            </div>
            <div
              id="thingsToDoImage2"
              className={styles.locationsForceHideImage}
            >
              <Img
                fluid={data.locationsPlacesToEat2.childImageSharp.fluid}
                className={[styles.locationsAdvancedSectionImage].join(" ")}
              />
            </div>
            <div
              id="thingsToDoImage3"
              className={styles.locationsForceHideImage}
            >
              <Img
                fluid={data.locationsPlacesToEat3.childImageSharp.fluid}
                className={[styles.locationsAdvancedSectionImage].join(" ")}
              />
            </div>
          </div>
        </div>
        <div className={styles.locationsSectionInfoContainer}>
          <h2 className={styles.sectionInfoHeading}>Things To Do</h2>
          <p style={{ fontSize: "16px" }}>
            Cape Town is an interesting city with plenty of things for you to
            see and do from shopping centres to our beautiful beaches.
          </p>
          <Img
            fluid={data.locationsThingsToDoMobile.childImageSharp.fluid}
            className={[styles.locationsSectionImageWideContainerMobile].join(
              " "
            )}
          />
          <div
            className={[
              styles.locationsAdvancedSectionExtra,
              styles.locationsAdvancedSectionExtraRight,
            ].join(" ")}
          >
            <div
              className={styles.locationsAdvancedSectionExtraBlock}
              onMouseEnter={() => {
                const imageTwo = document.getElementById("thingsToDoImage2")
                imageTwo.classList.add(styles.locationsForceHideImage)
                if (
                  imageTwo.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageTwo.classList.remove(styles.locationsForceShowImage)
                }
                const imageThree = document.getElementById("thingsToDoImage3")
                imageThree.classList.add(styles.locationsForceHideImage)
                if (
                  imageThree.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageThree.classList.remove(styles.locationsForceShowImage)
                }
                const imageOne = document.getElementById("thingsToDoImage1")
                imageOne.classList.add(styles.locationsForceShowImage)
                if (
                  imageOne.classList.contains(styles.locationsForceHideImage)
                ) {
                  imageOne.classList.remove(styles.locationsForceHideImage)
                }
              }}
            >
              <p className={styles.locationsAdvancedSectionExtraHeadings}>
                Reverie Social Table
              </p>
              <p className={styles.locationsAdvancedSectionExtraDistance}>
                7 km | 2 min walk
              </p>
              <p className={styles.locationsAdvancedSectionExtraContent}>
                Two Bedroom apartments fit those who value company. We love a
                duo.
              </p>
              <p className={styles.locationsAdvancedSectionExtraLink}>
                Open In Maps
              </p>
            </div>
            <div
              className={styles.locationsAdvancedSectionExtraBlock}
              onMouseEnter={() => {
                const imageOne = document.getElementById("thingsToDoImage1")
                imageOne.classList.add(styles.locationsForceHideImage)
                if (
                  imageOne.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageOne.classList.remove(styles.locationsForceShowImage)
                }
                const imageThree = document.getElementById("thingsToDoImage3")
                imageThree.classList.add(styles.locationsForceHideImage)
                if (
                  imageThree.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageThree.classList.remove(styles.locationsForceShowImage)
                }
                const imageTwo = document.getElementById("thingsToDoImage2")
                imageTwo.classList.add(styles.locationsForceShowImage)
                if (
                  imageTwo.classList.contains(styles.locationsForceHideImage)
                ) {
                  imageTwo.classList.remove(styles.locationsForceHideImage)
                }
              }}
            >
              <p className={styles.locationsAdvancedSectionExtraHeadings}>
                Reverie Social Table
              </p>
              <p className={styles.locationsAdvancedSectionExtraDistance}>
                7 km | 2 min walk
              </p>
              <p className={styles.locationsAdvancedSectionExtraContent}>
                Two Bedroom apartments fit those who value company. We love a
                duo.
              </p>
              <p className={styles.locationsAdvancedSectionExtraLink}>
                Open In Maps
              </p>
            </div>
            <div
              className={styles.locationsAdvancedSectionExtraBlock}
              onMouseEnter={() => {
                const imageOne = document.getElementById("thingsToDoImage1")
                imageOne.classList.add(styles.locationsForceHideImage)
                if (
                  imageOne.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageOne.classList.remove(styles.locationsForceShowImage)
                }
                const imageTwo = document.getElementById("thingsToDoImage2")
                imageTwo.classList.add(styles.locationsForceHideImage)
                if (
                  imageTwo.classList.contains(styles.locationsForceShowImage)
                ) {
                  imageTwo.classList.remove(styles.locationsForceShowImage)
                }
                const imageThree = document.getElementById("thingsToDoImage3")
                imageThree.classList.add(styles.locationsForceShowImage)
                if (
                  imageThree.classList.contains(styles.locationsForceHideImage)
                ) {
                  imageThree.classList.remove(styles.locationsForceHideImage)
                }
              }}
            >
              <p className={styles.locationsAdvancedSectionExtraHeadings}>
                Reverie Social Table
              </p>
              <p className={styles.locationsAdvancedSectionExtraDistance}>
                7 km | 2 min walk
              </p>
              <p className={styles.locationsAdvancedSectionExtraContent}>
                Two Bedroom apartments fit those who value company. We love a
                duo.
              </p>
              <p className={styles.locationsAdvancedSectionExtraLink}>
                Open In Maps
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact animateF={animatedPaths} svgStartTime={3000} />
    </Layout>
  )
}
export default Locations