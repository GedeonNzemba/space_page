import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/stylesheet.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={styles.headerHeader}
  >
    <div
      className={styles.headerContainer}
    >
      <h1 className={styles.headerH1}>
        <Link
          to="/"
          className={styles.headerLink}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
