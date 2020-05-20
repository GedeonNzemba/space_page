import React, { useState, useRef } from "react"
import axios from "axios"
import Footer from "../components/footer"
import styles from "../styles/stylesheet.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SVG from "../components/svgs/svg"
import Modal from "./confirmationModal"

const Contact = props => {
  const [firstname, setFirstname] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const firstnameHandler = evt => {
    const value = evt.target.value
    setFirstname(value)
  }
  const surnameHandler = evt => {
    const value = evt.target.value
    setSurname(value)
  }
  const emailHandler = evt => {
    const value = evt.target.value
    setEmail(value)
  }
  const messageHandler = evt => {
    const value = evt.target.value
    setMessage(value)
  }

  const data = useStaticQuery(graphql`
  query {
  contactMap: file(relativePath: { eq: "contactMap.png" }) {
    childImageSharp {
      fluid(maxWidth: 525, maxHeight: 501) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

  const svgContactOne = useRef()
  const svgContactTwo = useRef()
  
  const svgMobileContactOne = useRef()
  const svgMobileContactTwo = useRef()
  return (
    <div className={styles.contactFormWrapper}>
      <Modal show={props.showModal} continue={props.submitted}/>
      <SVG
        style={[styles.svgBase, styles.svgContact, styles.svgContactOne].join(
          " "
        )}
        id="Path_424"
        d="M293.662,245.175C291.509,274.22,290,386.733,128.782,465.643"
        transform="translate(-128.562 -245.138)"
        width="165.599"
        height="220.954"
        viewBox="0 0 165.599 220.954"
        ref={svgContactOne}
        animateF={props.animateF}
        time={props.svgStartTime || 500}
      />
      <SVG
        style={[styles.svgBase, styles.svgContact, styles.svgContactTwo].join(
          " "
        )}
        id="Path_424"
        d="M198.572,168.08S270.043,395.553,685.385,476.2"
        transform="translate(-198.095 -167.93)"
        width="487.386"
        height="308.764"
        viewBox="0 0 487.386 308.764"
        ref={svgContactTwo}
        animateF={props.animateF}
        time={props.svgStartTime+1000 || 1000}
      />
      <SVG
        style={[styles.svgMobileBase, styles.svgMobileContact, styles.svgMobileContactOne].join(
          " "
        )}
        id="_9"
        d="M0,0C47.232,21.432,87.789,35.336,135.58,32.086" transform="matrix(0.777, -0.629, 0.629, 0.777, 0.447, 85.698)"
        width="126.631" height="111.505" viewBox="0 0 126.631 111.505"
        ref={svgMobileContactOne}
        animateF={props.animateF}
        time={props.svgStartTime || 500}
      />
      <SVG
        style={[styles.svgMobileBase, styles.svgMobileContact, styles.svgMobileContactTwo].join(
          " "
        )}
        id="_10"
        d="M224.629,0C209.51,30.667,162.071,55.228,46.761,79.481Q23.37,84.4,0,88.52" transform="matrix(0.998, 0.07, -0.07, 0.998, 6.296, 0.227)"
        width="230.84" height="104.723" viewBox="0 0 230.84 104.723"
        ref={svgMobileContactTwo}
        animateF={props.animateF}
        time={props.svgStartTime+1000 || 1000}
      />
      <div className={styles.contactFormHeader}>Contact Us</div>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactFormInternalContainer}>
          <h2 className={styles.contactFormHeading}>
            Have Q's? We have the A’s!
          </h2>

          <form
            method="post"
            action="https://europe-west1-properlivingproperty.cloudfunctions.net/contact"
            className={styles.contactForm}
            encType="multipart/form-data"
          >
            <div className={styles.contactFormInputWrapper}>
              <input
                placeholder="First Name"
                className={styles.firstName}
                type="text"
                name="firstname"
                id="firstname"
                onChange={firstnameHandler}
                value={firstname}
              />

              <input
                placeholder="Last Name"
                className={styles.lastName}
                type="text"
                name="lastname"
                id="lastname"
                onChange={surnameHandler}
                value={surname}
              />
            </div>

            <input
              placeholder="Email Address"
              className={styles.email}
              type="email"
              name="email"
              id="email"
              onChange={emailHandler}
              value={email}
            />

            <textarea
              placeholder="Your Message"
              className={styles.message}
              name="message"
              id="message"
              rows="4"
              onChange={messageHandler}
              value={message}
            />
            <button
              className={styles.formButton}
              type="submit"
              onClick={event => {
                props.submitted(true)
                event.preventDefault()
                const body = {
                  email: email,
                  firstname: firstname,
                  surname: surname,
                  message: message,
                }

                const request = {
                  method: "post",
                  url:
                    "https://europe-west1-properlivingproperty.cloudfunctions.net/contact",
                  data: JSON.stringify(body),
                  headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                  },
                }
                console.log(request)

                axios(request)
                  .then(response => {
                    //handle success
                    console.log(response)
                  })
                  .catch(response => {
                    //handle error
                    console.log(response)
                  })
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className={styles.contactFormMapDiv}>
          <Img
              className={styles.contactFormMap}
              fluid={data.contactMap.childImageSharp.fluid}
            />
        </div>
      </div>

      <Footer light />
    </div>
  )
}

export default Contact