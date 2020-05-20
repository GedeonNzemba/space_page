import React from "react"

import NavItem from "./navitem/navitem"

import styles from "../../styles/stylesheet.module.css"

const comp = props => {
  return (
    <ul className={styles.navItems}>
      <NavItem id="home-link" text="Home" link="/" active />
      <NavItem id="locations-link" text="Locations" link="/locations" />
      <NavItem id="spaces-link" text="Spaces" link="/spaces" />
      <NavItem id="vision-link" text="Vision" link="/vision" />
      <NavItem id="contact-link" text="Contact" link="/contact" />
    </ul>
  )
}
export default comp
