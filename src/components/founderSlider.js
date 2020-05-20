import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import styles from "../styles/stylesheet.module.css"

const FounderSlider = props => {
  let founderSliderStyles = [styles.founderSliderImageSubContainer]
  let casparLeeFounderSliderImage = [styles.casparLeeFounderSliderImage]
  // let casparPullStyles = [styles.showCopy]
  let [casparPullStyles, setCasparPullStyles] = useState(styles.showCopy)
  let [benjiPullStyles, setBenjiPullStyles] = useState(styles.hideCopy)
  let quoteTransformStyles = [styles.quoteNotTransform]

  if (props.slide) {
    founderSliderStyles = [
      styles.founderSliderImageSubContainer,
      styles.changeFounder,
    ]
    casparLeeFounderSliderImage = [
      styles.casparLeeFounderSliderImage,
      styles.changeFounder,
    ]

    quoteTransformStyles = [
      styles.quoteNotTransform,
      styles.founderPullQuoteTextTransform,
    ]
  } 

  useEffect(() => {
    props.slide
      ? setCasparPullStyles(styles.hideCopy)
      : setBenjiPullStyles(styles.hideCopy)
    setTimeout(() => {
      props.slide
        ? setBenjiPullStyles(styles.showCopy)
        : setCasparPullStyles(styles.showCopy)
    }, 600)

    // founderPullQuoteTextReverse
  }, [props.slide])

  return (
    <div className={styles.founderSliderContainer}>
      <div className={styles.founderSliderHeading}>
        Meet The People Behind Proper Living
      </div>
      <div className={styles.founderSliderContent}>
        <div className={styles.founderSliderImageContainer}>
          <div className={founderSliderStyles.join(" ")}>
            <div className={styles.imageAnimationItem}>
              <div className={casparLeeFounderSliderImage.join(" ")}>
                <div
                  className={[styles.item__img, styles.item__img__t3].join(" ")}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.founderTwoSliderImageSubContainer}>
            <div className={styles.imageAnimationItem}>
              <div className={styles.benjiFounderSliderImage}>
                <div
                  className={[styles.item__img, styles.item__img__t3].join(" ")}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.founderSliderCopyColumn}>
          <div className={styles.founderName}>
            <span className={casparPullStyles}>Caspar Lee</span>
            <span className={benjiPullStyles}>Benji Schaffer</span>
          </div>
          <div className={styles.founderSliderCopyContainer}>
            <div className={styles.founderPullQuoteContainer}>
              <div className={styles.founderPullQuote}>
                <div className={quoteTransformStyles.join(" ")}>
                  <span className={styles.founderPullQuoteText}>
                    "An interesting B quote goes here."
                  </span>
                  <span className={styles.founderPullQuoteText}>
                    "An interesting C quote goes here."
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.founderDesc}>
              <span className={casparPullStyles}>
                In 2017, Caspar co-founded the influencer marketing platform,
                Influencer.com and took the role of Chief Visionary Officer.
                That same year he became an ambassador to The Queen’s Young
                Leaders and also hosted the BRIT Awards 2017 Worldwide Live
                Stream.
                <br />
                <br />
                In 2018, he co-founded Margravine Management with Joe Sugg. IMG
                invested and is a strategic partner to the company. He continued
                to work alongside The Queen’s Young Leaders and was invited to
                meet the Queen for a second year at Buckingham Palace.
                <br />
                <br />
                In 2019, he co-founded Creative Investment Club which is a
                syndicate of top creators from around the world investing
                together in companies at their Pre-Seed, Seed, Series A, and
                Series B stages. Notable investments include Dash Water and
                Faceit.
              </span>
              <span className={benjiPullStyles}>
                Born and raised in Cape Town, South Africa, 23-year-old Benji
                Schaffer is a forward-thinking entrepreneur and investor who
                co-founded his first company, SchaffSaev Transport Services in
                2014. It owns and operates fleets of vehicles and employs
                drivers to service passengers through Uber. In 2018, he became
                one of the early investors into Influencer.
                <br />
                <br />
                Benji is also a volunteer City of Cape Town Law Enforcement
                Officer and a qualified paramedic. He enjoys playing an active
                role in the local community and creating safer spaces for
                members of the public.
              </span>
            </div>
            <div className={styles.founderCtaContainer}>
              <div className={styles.nextFounder} onClick={props.changeFounder}>
                <div className={styles.founderCtaTextContainer}>
                  <span className={casparPullStyles}>View Benji Schaffer </span>
                  <span className={benjiPullStyles}>View Caspar Lee </span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.6"
                  height="29.3"
                  viewBox="0 0 14.978 14.558"
                >
                  <g
                    id="Icon_awesome-arrow-right"
                    data-name="Icon awesome-arrow-right"
                    transform="translate(-364.236 -296.155)"
                  >
                    <path
                      id="Path_299"
                      data-name="Path 299"
                      d="M379.171,303.531l-7.142,7.142a.138.138,0,0,1-.2,0l-.812-.812a.141.141,0,0,1,0-.2l5.765-5.5H364.377a.141.141,0,0,1-.141-.141v-1.177a.139.139,0,0,1,.141-.138h12.408l-5.767-5.5a.137.137,0,0,1,0-.195l.819-.819a.136.136,0,0,1,.192,0l7.147,7.139A.138.138,0,0,1,379.171,303.531Z"
                      fill="#001a7d"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FounderSlider
