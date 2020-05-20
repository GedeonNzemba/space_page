import React from "react"
import styles from "../../styles/stylesheet.module.css"

const WrappedText = props => {
  let style = "unset"
  switch (props.color) {
    case "orange":
      style = styles.wrappedTextOrange
      break
    case "blue":
      style = styles.wrappedTextBlue
      break
    case "red":
      style = styles.wrappedTextRed
      break
    default:
      break
  }
  return <span className={style}>{props.children}</span>
}
export default WrappedText
