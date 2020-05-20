import React from "react"

import NavItems from "./navItems"
import DrawerToggle from "./mobile/drawerToggle"

import styles from "../../styles/stylesheet.module.css"

const comp = props => {
  return (
    <div className={styles.stickyNav}>
      <DrawerToggle open={props.open} clicked={props.drawerToggleClicked} />
      <div className={styles.birdLogoNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 61.999 37.132"
          className={styles.birdLogoSVG}
        >
          <path
            id="Path_393"
            data-name="Path 393"
            d="M387.913,276.611c-2.463-4.149-8.264-13.926-9.17-15.45-6.179-10.412-11.8-9.848-17.345-9.848-2.076,0,1.81-2.64-1.938-6.35a10.7,10.7,0,0,1-1.811-3.737.528.528,0,0,0-1,0,10.7,10.7,0,0,1-1.811,3.737c-3.748,3.711.138,6.35-1.938,6.35-5.545,0-11.166-.565-17.345,9.848-.906,1.525-6.707,11.3-9.17,15.45-1.5,2.522,4.559,1.667,7.379-3.087,1.147-1.933,2.293-4.649,5.759-4.649a5.273,5.273,0,0,0,4.533-2.581c4.921-8.285,8.408-5.076,7.258-3.138L345.776,271c-3.953,6.659,26.7,6.66,22.746,0l-5.538-7.849c-1.149-1.938,2.338-5.147,7.258,3.138a5.273,5.273,0,0,0,4.533,2.581c3.466,0,4.613,2.717,5.759,4.649C383.354,278.278,389.414,279.133,387.913,276.611Z"
            transform="translate(-326.149 -240.865)"
            fill="#001a7d"
          />
        </svg>
      </div>
      <nav className={styles.navbar}>
        <NavItems></NavItems>
      </nav>
    </div>
  )
}
export default comp
