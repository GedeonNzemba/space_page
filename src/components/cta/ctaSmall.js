import React from "react"
import styles from "../../styles/stylesheet.module.css"

const ctaSmall = props => {
  return (
    <button className={styles.ctaSmall} onClick = {props.clicked}>
      {props.title}
    </button>
  )
}
export default ctaSmall;
