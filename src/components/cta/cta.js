import React from "react"
import styles from "../../styles/stylesheet.module.css"

const cta = props => {
  return (
    <button className={styles.mainCta} onClick = {props.clicked}>
      {props.title}
    </button>
  )
}
export default cta
