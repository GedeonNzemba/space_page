import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/stylesheet.module.css"
import hoverEffect from "hover-effect"
import MouseTooltip from 'react-sticky-mouse-tooltip';
import Bird from '../images/birdcursor.png'
import SVG from '../components/svgs/svg'
import { graphql, useStaticQuery } from "gatsby"

const ComingSoon = () => {
    const data = useStaticQuery(graphql`
    query {
      firstImage: file(relativePath: { eq: "first.png" }) {
        childImageSharp {
          fixed(width: 500, height: 550) {
            ...GatsbyImageSharpFixed
          } 
        }
      }
      secondImage: file(relativePath: { eq: "properlivingGreen.png" }) {
        childImageSharp {
          fixed(width: 500, height: 550) {
            ...GatsbyImageSharpFixed
          } 
        }
      }
      distortionMap: file(relativePath: { eq: "distortionMap.png" }) {
        childImageSharp {
          fixed(width: 257, height: 257) {
            ...GatsbyImageSharpFixed
          } 
        }
      }
    }
    `)
  
  
    const distortionElement = useRef(null)
  
    const testLine = useRef()
    const testLine2 = useRef()
    const testLine3 = useRef()
    const testLine4 = useRef()
    const testLine5 = useRef()
  
    const animatedPaths = (path, time) => {
  
      setTimeout(() => {
          if(path){
            let length = path.getTotalLength()
            // Clear any previous transition
            path.style.transition = path.style.WebkitTransition = "none"
            // Set up the starting positions
            path.style.strokeDasharray = length + " " + length
            path.style.strokeDashoffset = length
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path.getBoundingClientRect()
            // Define our transition
            path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 1s ease-in-out"
            // Go!
            path.style.strokeDashoffset = "0"
          }else{
              console.log("Encountered 0 length svg");
          }
      
  
    }, time)
  
    }
    var line1 = null;
    var line2 = null;
    var line3 = null;
    var line4 = null;
    const selectLines =()=>{
      line1 = document.getElementById("testLine");
      line2 = document.getElementById("testLine2");
      line3 = document.getElementById("testLine3");
      line4 = document.getElementById("testLine4");
    }
    useEffect(() => {      
      new hoverEffect({
        parent: distortionElement.current,
        intensity: 0.3,
        image1: data.secondImage.childImageSharp.fixed.src,
        image2: data.firstImage.childImageSharp.fixed.src,
        displacementImage: data.distortionMap.childImageSharp.fixed.src,
      })
    })
  
    let dark = false
    
    const toggleColorsHandler =(hover)=>{

      //background
      var element = document.getElementById("rootContainer");
      //info divs
      var topInfo = document.getElementById("topInfo");
      var bottomInfo = document.getElementById("bottomInfo");
      //svg lines
      selectLines()
      //cursor
      var cursor = document.getElementById("cursor");
  
      if(!dark){
        selectLines()
        element.classList.add(styles.dark);
        topInfo.classList.add(styles.topInfo);
        bottomInfo.classList.add(styles.bottomInfo);
        if(line1&&line2&&line3&&line4){
        line1.classList.add(styles.testLine);
        line2.classList.add(styles.testLine);
        line3.classList.add(styles.testLine);
        line4.classList.add(styles.testLine);
        }
        cursor.classList.add(styles.cursor);
  
      }
      else{
        element.classList.remove(styles.dark);
        topInfo.classList.remove(styles.topInfo);
        bottomInfo.classList.remove(styles.bottomInfo);
        if(line1&&line2&&line3&&line4){
        line1.classList.remove(styles.testLine);
        line2.classList.remove(styles.testLine);
        line3.classList.remove(styles.testLine);
        line4.classList.remove(styles.testLine);
        }
        cursor.classList.remove(styles.cursor); 
      }
      
      dark=!dark;
      
  }
  
    return (
      <Layout>
        <SEO title="Proper Living" />

        <div id="rootContainer" className={styles.container}>
          <div id="svgContainer" className={styles.svgContainer}>
          <SVG //svg1
            style={styles.testLine1}
            id="testLine"
            width="266.694"
            height="266.317"
            viewBox="0 0 266.694 266.317"
            ref={testLine}
            d="m0,100 C0,100 100,150 266.317,100"
            animateF={animatedPaths}
            time={500}
          />
          <SVG //svg2
            id="testLine2"
            style={styles.testLine2}
            width="551.423"
            height="141.388"
            viewBox="0 0 551.423 141.388"
            ref={testLine2}
            d="M3253,666s205,126,551,140"
            transform="translate(-3252.607 -665.361)"
            animateF={animatedPaths}
            time={1000}
          />
          <SVG //svg3
            style={styles.testLine3}
            id="testLine3"
            width="775.677"
            height="170.472"
            viewBox="0 0 775.677 170.472"
            ref={testLine3}
            d="M2850,386s322-146,770-64"
            transform="matrix(0.995, -0.105, 0.105, 0.995, -2865.046, 83.781)"
            animateF={animatedPaths}
            time={2000}
          />
          <SVG //svg4
            style={styles.testLine4}
            id="testLine4"
            width="154.713"
            height="59.591"
            viewBox="0 0 154.713 59.591"
            ref={testLine4}
            d="M4066,1012s56-72,154-56"
            transform="translate(-4065.408 -952.87)"
            animateF={animatedPaths}
            time={2500}
          />
          <SVG //svg5
            style={styles.testLine5}
            id="testLine5"
            width="154.713"
            height="59.591"
            viewBox="0 0 154.713 59.591"
            transform="translate(-4065.408 -952.87)"
            ref={testLine5}
            d="M4066,1012s56-72,154-56"
            animateF={animatedPaths}
            time={1000}
          />
          </div>
          <div className={styles.topInfoContainer} id="topInfo">
            <div className={styles.properLiving} id="PL">
              Proper Living
            </div>
            <div className={styles.studentAccommodation} id="SA">
              Modern Life, Living Proper
            </div>
          </div>

          <div className={styles.subcontainer}>
            <div className={styles.imageColumn}>
              <div
                className={styles.imageContainer}
                ref={distortionElement}
                onMouseEnter={toggleColorsHandler}
                onMouseLeave={toggleColorsHandler}
                role="menuitem"
                tabIndex={-1}
              />{" "}
            </div>

            <div className={styles.textColumn}>
              <h1 className={styles.mainCopy}>
                Save this link...
                <br />
                You'll need it later.
              </h1>
              <h1 className={styles.mobileCopy}>
                Save this link. You'll need it later.
              </h1>
            </div>
          </div>

          <div className={styles.bottomInfoContainer} id="bottomInfo">
            <div className={styles.comingSoon} id="coming">
              Coming Soon
            </div>
            <div className={styles.year} id="20">
              2020
            </div>
          </div>
        </div>

        <MouseTooltip
          visible
          offsetX={-65}
          offsetY={-70}
          className={styles.mouseToolTip}
        >
          <span id="cursor">
            <img
              id="cursorImage"
              src={Bird}
              alt="Bird"
              className={styles.mouseToolTipCursor}
            />
          </span>
        </MouseTooltip>
      </Layout>
    )
}

export default ComingSoon
