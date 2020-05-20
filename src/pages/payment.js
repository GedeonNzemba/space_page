import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"
import styles from "../styles/stylesheet.module.css"
import SEO from "../components/seo"
import Cta from "../components/cta/cta"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Contact from "../components/contact"
import SVG from "../components/svgs/svg"
import WrappedText from "../components/wrappedText/wrappedText"
import IMG from '../components/imgs/img'
import Overlay from '../components/overlay'
import axios from "axios"

const Payment = props => {

    const animatedPaths = (path, time) => {
        setTimeout(() => {
            if (path) {
                let length = path.getTotalLength()
                path.style.transition = path.style.WebkitTransition = "none"
                path.style.strokeDasharray = length + " " + length
                path.style.strokeDashoffset = length
                path.getBoundingClientRect()
                path.style.transition = path.style.WebkitTransition =
                    "stroke-dashoffset 1s ease-in-out"
                path.style.strokeDashoffset = "0"
            } else {
                console.log("Encountered 0 length svg")
            }
        }, time)
    }

    const data = useStaticQuery(graphql`
        query {
    
          picture: file(relativePath: { eq: "properCommunity.png" }) {
            childImageSharp {
              fixed(width: 1008, height: 786) {
                ...GatsbyImageSharpFixed
              }
            }
          }
    
          mobileStudio: file(relativePath: { eq: "mobileRoomSelector.png" }) {
            childImageSharp {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    
        }
      `)

    return (
        <Layout>
            <SEO title="Payment" />
            <div data-scroll>
            <div className={styles.PaymentContainer}>
                <div className={styles.HeroPurchasePicture}>
                    {/* <Img fluid={data.picture.childImageSharp.fluid} /> */}
                    image
                </div>
                <div className={styles.PaymentContent_Container}>
                    <div>This is navigator </div>
                    <h1>Welcome Back Jared!</h1>
                </div>
            </div>
            <Contact />
            </div>
        </Layout>
    )
}

export default Payment