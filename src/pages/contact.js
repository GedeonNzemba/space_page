import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/stylesheet.module.css"

import Backdrop from "../components/backdrop"
import { animatedPaths } from "./Home"
import Contact from "../components/contact"

const ContactPage = props => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Layout>
      <Backdrop
        show={showModal}
        clicked={() => {
          setShowModal(false)
        }}
      />
      <SEO title="Contact" />
      <div className={styles.visionHero}>
        Contact
        <Contact
          full //full page bool
          animateF={animatedPaths}
          svgStartTime={6000}
          submitted={() => {
            setShowModal(true)
          }}
        />
      </div>
    </Layout>
  )
}
export default ContactPage