import React from "react"
import styles from "../styles/stylesheet.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import unitOptionData from "../data/unitOptions"

const unitOption = props => {
  let unitOptions = unitOptionData.unitOptions
  return (
    <AniLink
      cover
      direction="up"
      bg={'#001a7d'}
      to={props.locations ? '/RoomSelector' : '/spaces'}
      state={{ unitOptions: unitOptions, clicked: props }}
      activeClassName={styles.activeLink}
    >
      <div
        className={
          props.locations ? styles.locationsUnitOption : styles.unitOption
        }
      >
        <div
          className={
            props.locations
              ? styles.locationsUnitOptionContent
              : styles.unitOptionContent
          }
        >
          <div 
            className={
              props.locations
                ? styles.locationsMobileUnitOptionImageContainer
                : styles.mobileUnitOptionImageContainer
            }
          >
            {" "}
            <Img
              className={styles.mobileUnitOptionImages}
              fixed={props.imageHover}
            />
          </div>
          <div
            className={
              props.locations
                ? styles.locationsUnitOptionType
                : styles.unitOptionType
            }
          >
            {props.type}
          </div>
          <div>
            <p
              className={
                props.locations
                  ? styles.locationsUnitOptionDesc
                  : styles.unitOptionDesc
              }
            >
              {props.desc}
            </p>
          </div>
          <div
            className={
              props.locations
                ? styles.locationsUnitOptionCta
                : styles.unitOptionCta
            }
          >
            {props.cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.6"
              height="14.3"
              viewBox="0 0 14.978 14.558"
            >
              <g
                id="Icon_awesome-arrow-right"
                data-name="Icon awesome-arrow-right"
                transform="translate(-364.236 -296.155)"
              >
                <path
                className={styles.unitOptionArrowPath}
                  id="Path_299"
                  data-name="Path 299"
                  d="M379.171,303.531l-7.142,7.142a.138.138,0,0,1-.2,0l-.812-.812a.141.141,0,0,1,0-.2l5.765-5.5H364.377a.141.141,0,0,1-.141-.141v-1.177a.139.139,0,0,1,.141-.138h12.408l-5.767-5.5a.137.137,0,0,1,0-.195l.819-.819a.136.136,0,0,1,.192,0l7.147,7.139A.138.138,0,0,1,379.171,303.531Z"
                  fill="#001a7d"
                />
              </g>
            </svg>
          </div>
        </div>
        {props.imageHover === undefined ? null : props.locations ? null : (
          <Img
            className={
              props.locations
                ? styles.locationsUnitHoverOverlay
                : styles.unitHoverOverlay
            }
            fixed={props.imageHover}
          />
        )}
      </div>
      </AniLink>
  )
}
export default unitOption
