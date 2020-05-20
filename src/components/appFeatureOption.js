import React from "react"
import styles from "../styles/stylesheet.module.css"

const appFeatureOption = props => {
  return (
    <div className={styles.visionuUnitOption}>
      <div className={styles.visioUnitOptionContent}>
      <div className={styles.appFeatureOptionTitle}>{props.type}</div>
        <div className={styles.appFeatureOptionDesc}>{props.desc}</div>
      </div>
    </div>
  )
}
export default appFeatureOption
