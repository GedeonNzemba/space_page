import React from "react"
import styles from "../styles/stylesheet.module.css"

const backdrop = props =>
  props.show ? (
    <div
      role="button"
      className={styles.Backdrop}
      onClick={props.clicked}
      onKeyDown={props.clicked}
      tabIndex={-1}
    ></div>
  ) : null

export default backdrop
