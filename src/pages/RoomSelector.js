import React, { useRef, useState, useEffect } from "react"
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
import Unit from '../components/unit/unit'
import UnitSelected from '../components/unitSelected/unitSelected';
import unitOptionData from "../data/unitOptions"
import BookingModal from '../components/bookingModal'
import LeaseApplicationModal from '../components/leaseApplicationModal'
import Overlay from '../components/overlay'
import axios from "axios"

const RoomSelector = props => {
  let unitOptions = unitOptionData.unitOptions
  const [mobile, setMobile] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [select, setSelect] = useState()
  const [selectedUnit, setSelectedUnit] = useState();

  const [showModalLeaseApplication, setShowModalLeaseApplication] = useState(false)

  const openLeaseApplicationModal = () => {
    setShowModalLeaseApplication(true)
    // document.getElementById("bookingModal").classList.add(styles.showModal)
  }

  const closeLeaseApplicationModal = () => {
    setShowModalLeaseApplication(false)
    // document.getElementById("bookingModal").classList.remove(styles.showModal)
    // document.getElementById("bookingModal").classList.add(styles.hideModal)
  }

  const backHandler = () => {
    setSelectedUnit(undefined)
    setSelect()
  }

  const selectUnitHandler = (unit) => {
    setSelectedUnit(<UnitSelected unit={unit} backHandler={backHandler} openLeaseApplicationModal={openLeaseApplicationModal} />)
    localStorage.setItem('aijnweilcoiubciqubc33234-1cc', JSON.stringify(unit))
    setSelect(unit.number)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const [bookings, setBookings] = useState({});
  const [fullyBookedDays, setFullyBookedDays] = useState({})

  const [currentSpace, setCurrentSpace] = useState(props.location.state !== null && props.location.state !== undefined ? props.location.state.clicked.unitKey : "studio");
  // const [nextSpace, setNextSpace] = useState(props.location.state.clicked.unitKey)

  const units =
    [{ number: "100", state: "Available", size: "35m²" },
    { number: "101", state: "Available", size: "35m²" },
    { number: "102", state: "Available", size: "35m²" },
    { number: "103", state: "Available", size: "35m²" },
    { number: "104", state: "Available", size: "35m²" },
    { number: "105", state: "Available", size: "35m²" },
    { number: "106", state: "Available", size: "35m²" },
    { number: "107", state: "Available", size: "35m²" },
    { number: "108", state: "Available", size: "35m²" },
    { number: "109", state: "Available", size: "35m²" },
    { number: "110", state: "Available", size: "35m²" },
    { number: "111", state: "Available", size: "35m²" },
    { number: "112", state: "Available", size: "35m²" },
    { number: "113", state: "Available", size: "35m²" },
    { number: "114", state: "Available", size: "35m²" },
    { number: "115", state: "Available", size: "35m²" },
    { number: "116", state: "Available", size: "35m²" },
    { number: "117", state: "Available", size: "35m²" },
    { number: "118", state: "Available", size: "35m²" },
    { number: "119", state: "Available", size: "35m²" },
    { number: "120", state: "Available", size: "35m²" },
    { number: "121", state: "Available", size: "35m²" },
    { number: "122", state: "Available", size: "35m²" },
    { number: "123", state: "Available", size: "35m²" },
    { number: "124", state: "Available", size: "35m²" },
    { number: "125", state: "Available", size: "35m²" },
    { number: "126", state: "Available", size: "35m²" },
    { number: "127", state: "Available", size: "35m²" },
    { number: "128", state: "Available", size: "35m²" },
    { number: "129", state: "Available", size: "35m²" },
    { number: "130", state: "Available", size: "35m²" },
    { number: "131", state: "Available", size: "35m²" },
    { number: "132", state: "Available", size: "35m²" },
    { number: "133", state: "Available", size: "35m²" },
    { number: "134", state: "Available", size: "35m²" }].map(unit =>
      (<Unit
        key={unit.number}
        unit={unit}
        selectUnitHandler={selectUnitHandler}
        isSelected={select === unit.number}
        isMobile={mobile} />))

  const [toggleFounder, setToggleFounder] = useState(false)

  const changeFounder = () => {
    setToggleFounder(!toggleFounder)
  }

  let headingTypeTransformStyles = [styles.headingNotTransform]

  if (toggleFounder) {
    headingTypeTransformStyles = [styles.headingNotTransform, styles.headingTypeTransform]
  }

  const fetchBookings = async () => {
    await axios
      .get("https://properlivingproperty.firebaseio.com/bookings/bookingsInfo.json")
      .then(response => {
        setBookings(response.data)
      })
      .catch(response => {
        // console.log(response)
      })
  }
  const fetchFullyBooked = async () => {
    await axios
      .get("https://properlivingproperty.firebaseio.com/bookings/fullyBookedDays.json")
      .then(response => {
        setFullyBookedDays(response.data)
      })
      .catch(response => {
        // console.log(response)
      })
  }

  useEffect(() => {
    // setTheNextSpaceVariable()

    let widthMatch = window.matchMedia("(max-width: 700px)");

    if (widthMatch.matches) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    widthMatch.addListener((e) => {
      if (e.matches) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })

    fetchBookings()

    fetchFullyBooked()
  }, [props])

  const scrollDesktopRef = useRef()
  const scrollMobileRef = useRef()

  const titleNextRef = useRef()
  const titleCurrentRef = useRef()

  const scrollRight = (target) => {
    target.scrollLeft += 590;
  }

  const scrollLeft = (target) => {
    target.scrollLeft -= 590
  }

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

  const data = useStaticQuery(graphql`
    query {

      studio: file(relativePath: { eq: "IMG_0406.png" }) {
        childImageSharp {
          fixed(width: 1008, height: 786) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      mobileStudio: file(relativePath: { eq: "mobileRoomSelector.png" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)



  // const setTheNextSpaceVariable = () => {
  //   let keys = Object.keys(props.location.state.unitOptions)
  //   let nextIndex = keys.indexOf(props.location.state.clicked.unitKey) === 4 ? 0 : keys.indexOf(props.location.state.clicked.unitKey) + 1;
  //   setNextSpace(keys[nextIndex])
  // }


  const nextSpaceHandler = () => {
    let keys = Object.keys(unitOptions)
    let nextIndex = keys.indexOf(currentSpace) === 4 ? 0 : keys.indexOf(currentSpace) + 1;
    // let twoAhead = nextIndex === 4 ? 0 : nextIndex + 1;
    let next = keys[nextIndex];
    setCurrentSpace(next)
    // setNextSpace(keys[twoAhead])
    backHandler()
    changeFounder()
  }

  const [showModalBooking, setShowModalBooking] = useState(false)

  const showModalBookingHandler = () => {
    setShowModalBooking(true)
    // document.getElementById("bookingModal").classList.add(styles.showModal)
  }

  const closeBookingModalHandler = () => {
    setShowModalBooking(false)
    // document.getElementById("bookingModal").classList.remove(styles.showModal)
    // document.getElementById("bookingModal").classList.add(styles.hideModal)
  }



  return (
    <Layout>
      <SEO title="Room Selector" />
      <Backdrop
        show={showModal || showModalBooking}
        clicked={() => {
          setShowModal(false)
          setShowModalBooking(false)
        }}

      />
      <Overlay
        show={showModalLeaseApplication}
        close={closeLeaseApplicationModal}
        unitSelected={selectedUnit !== undefined ? selectedUnit.props.unit : undefined} 
      />

      <BookingModal
        show={showModalBooking}
        closeBookingModalHandler={closeBookingModalHandler}
        bookings={bookings}
        fullyBookedDays={fullyBookedDays}
        fetchBookings={fetchBookings}
        fetchFullyBooked={fetchFullyBooked} />

      <div data-scroll>


        <div className={styles.roomSelectorContainer}>

          <div className={selectedUnit !== undefined && mobile ? styles.unitSelectionSectionSelectedMobile : styles.unitSelectionSection}>

            {mobile ?
              selectedUnit === undefined
                ? <>
                  <div className={styles.headingUnitType}>
                    <h1 className={styles.typeHeading}>{unitOptions[currentSpace].copy.unitType}</h1>
                    <div className={styles.unitChangeArrowContainer}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { nextSpaceHandler() }}>
                        <path d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.subHeadingContainer}>
                    <p className={styles.subHeading}>36m<sup>2</sup></p>
                    <div className={styles.seperator}></div>
                    <p className={styles.subHeading}>1 Bathroom</p>
                    <div className={styles.seperator}></div>
                    <p className={styles.subHeading}>R 8000pm</p>
                  </div>
                </>
                : null
              :
              <>
                <div className={styles.headingUnitType}>
                  {/* <div className={styles.rollingHeading}>
                    <div className={headingTypeTransformStyles.join(" ")}>
                      <h1 className={styles.typeHeading} ref={titleNextRef}>
                        {unitOptions[currentSpace].copy.unitType}
                      </h1>
                      <h1 className={styles.typeHeading} ref={titleCurrentRef}>
                        {unitOptions[currentSpace].copy.unitType}
                      </h1>
                    </div>

                  </div> */}
                  <h1 className={styles.typeHeading} ref={titleCurrentRef}>
                    {unitOptions[currentSpace].copy.unitType}
                  </h1>
                  <div className={styles.unitChangeArrowContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { nextSpaceHandler() }}>
                      <path d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                    </svg>
                  </div>
                </div>

                <div className={styles.subHeadingContainer}>
                  <p className={styles.subHeading}>36m<sup>2</sup></p>
                  <div className={styles.seperator}></div>
                  <p className={styles.subHeading}>1 Bathroom</p>
                  <div className={styles.seperator}></div>
                  <p className={styles.subHeading}>R 8000pm</p>
                </div>
              </>}

            {/* MOBILE IS CHECKED IN CSS MEDIA QUERIES - WILL ONLY SHOW ON MOBILE */}
            {selectedUnit === undefined
              ?
              <div className={styles.horizontalMobileScrollContainer}>
                <div className={styles.horizontalMobileScrollContainer} ref={scrollMobileRef}>
                  <div className={styles.MobileRoomImage}>
                    <Img fluid={data.mobileStudio.childImageSharp.fluid} />
                  </div>
                  <div className={styles.MobileRoomImage}>
                    <Img fluid={data.mobileStudio.childImageSharp.fluid} />
                  </div>
                  <div className={styles.MobileRoomImage}>
                    <Img fluid={data.mobileStudio.childImageSharp.fluid} />
                  </div>
                  <div className={styles.MobileRoomImage}>
                    <Img fluid={data.mobileStudio.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
              : null}
            <div className={styles.SelectedUnitViewMobile}>
              {selectedUnit}
            </div>

            {selectedUnit === undefined ? (<h3 className={styles.SelectUnitHeading}>Select A Unit</h3>) : null}
            {mobile
              ? selectedUnit === undefined
                ? <div className={styles.unitBlocksContainer}>
                  <div className={styles.unitBlocks}>
                    {units}
                  </div>
                </div>
                : null
              : <div className={styles.unitBlocks}>
                {units}
              </div>}


            <Cta title="Book A Viewing" clicked={showModalBookingHandler}></Cta>
          </div>

          {selectedUnit === undefined && mobile === false
            ? <div className={styles.arrowsContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftArrow} onClick={() => { scrollLeft(scrollDesktopRef.current) }}>
                <path className="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightArrow} onClick={() => { scrollRight(scrollDesktopRef.current) }}>
                <path className="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
              </svg>
            </div> : null}

          {mobile === false ?
            <div className={styles.unitViewSection} ref={scrollDesktopRef}>
              {selectedUnit === undefined
                ? (<>
                  <div className={styles.RoomImage}>
                    <Img fixed={data.studio.childImageSharp.fixed} />
                    {/* <p className={styles.ProperStudentLivingText}>Proper Student Living</p> */}
                  </div>
                  <div className={styles.RoomImage}>
                    <Img fixed={data.studio.childImageSharp.fixed} />
                    {/* <p className={styles.ProperStudentLivingText}>Proper Student Living</p> */}
                  </div>
                  <div className={styles.RoomImage}>
                    <Img fixed={data.studio.childImageSharp.fixed} />
                    {/* <p className={styles.ProperStudentLivingText}>Proper Student Living</p> */}
                  </div>

                </>)
                : selectedUnit}
            </div> : null}

        </div>
        {mobile ? <Contact
          animateF={animatedPaths}
          svgStartTime={6000}
          showModal={showModal}
          submitted={setShowModal}
        /> : null}
      </div>
    </Layout >
  )
}
export default RoomSelector
