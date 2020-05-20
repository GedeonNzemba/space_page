import React from "react"
import Img from "gatsby-image"
import Cta from "../components/cta/cta"
import styles from "../styles/stylesheet.module.css"

const basicSection = props => {
  return (
    <div
      className={
        props.left
          ? styles.basicSectionLeftContainer
          : styles.basicSectionRightContainer
      }
    >
      {props.children}
      {props.left ? (
        <div className={styles.sectionImageContainer}>
          <div className={styles.sectionImage}>
            <Img fluid={props.img} />
          </div>
        </div>
      ) : (
        <div className={styles.sectionInfoContainer}>
          <h2 className={styles.sectionInfoHeading}>{props.heading}</h2>

          <p style={{ fontSize: "16px" }}>{props.body}</p>
          {props.ctaHidden ? null: <Cta title={props.buttonTitle}></Cta>}
        </div>
      )}

      {props.left ? (
        <div className={styles.sectionInfoContainer}>
          <h2 className={styles.sectionInfoHeading}>{props.heading}</h2>
          <p style={{ fontSize: "16px" }}>{props.body}</p>
          {props.ctaHidden ? null: <Cta title={props.buttonTitle}></Cta>}
        </div>
      ) : (
        <div className={styles.sectionImageContainer}>
          <div className={styles.sectionImage}>
            <Img fluid={props.img} />
          </div>
        </div>
      )}
    </div>
  )
}
export default basicSection
