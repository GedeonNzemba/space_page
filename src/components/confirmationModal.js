import styles from "../styles/stylesheet.module.css"
import React from "react"
// import properCommunity from "../images/properCommunity.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Modal = props => {
  const data = useStaticQuery(graphql`
    query {
      properCommunity: file(relativePath: { eq: "properCommunity.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return props.show ? (
    <div className={styles.Modal}>
      {/* add X */}
      <Img
        className={styles.ModalImage}
        fluid={data.properCommunity.childImageSharp.fluid}
        alt="two people smiling"
      />
      <div className={styles.ModalContent}>
        <h1>
          Thanks you for contacting us!
          <br />
          We will be in contact shortly.
        </h1>
        <div className={styles.ModalButtons}>
          <Link
            className={[styles.ModalHomeButton, styles.ModalButton].join(" ")}
            to="/"
            onClick={() => {
              props.continue(!props.show)
            }}
          >
            Go home
          </Link>
          <button
            className={[styles.ModalContinueButton, styles.ModalButton].join(
              " "
            )}
            onClick={() => {
              props.continue(!props.show)
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  ) : null
}
export default Modal
