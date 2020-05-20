import React from "react"
import styles from "../../../styles/stylesheet.module.css"

const drawerToggle = props => {
  let attachedStyles = [styles.DrawerToggle]
  if (props.open) {
    attachedStyles = [styles.DrawerToggle, styles.active]
  }

  return (
    <div
      className={attachedStyles.join(" ")}
      onClick={props.clicked}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      <div></div>
    </div>
  )
}

export default drawerToggle
