import React, { useEffect, useRef } from "react"
import styles from "../styles/stylesheet.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cta from "../components/cta/cta"

const NotFoundPage = () => {
  const ctaButtonRef = useRef()

  const test = () => {
      document.getElementById("animateBird").beginElement();
    // console.log("helllo fesfsdfdf")
    console.log(document.getElementById("animateBird"))
  }

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={styles.notFoundContainer}>

        <div className={styles.notFoundTextColumn}>
          <h1 className={styles.headingNotFound}>
            404
           </h1>
          <p className={styles.notFoundBodyCopy}>
            Are you Lost?<br />Find your way home.
           </p>
          <br />

          {/* <Cta title="Go Home"  onClick={test} ></Cta> */}
          <button onClick={test} className = {styles.goHomeButton}>Go Home</button>

          <div className={styles.notFoundSocialsDiv}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.338"
              height="19.333"
              viewBox="0 0 19.338 19.333"
            >
              <path
                id="Icon_awesome-instagram"
                data-name="Icon awesome-instagram"
                d="M9.666,6.948A4.957,4.957,0,1,0,14.622,11.9,4.949,4.949,0,0,0,9.666,6.948Zm0,8.179A3.223,3.223,0,1,1,12.888,11.9a3.228,3.228,0,0,1-3.223,3.223Zm6.316-8.382a1.156,1.156,0,1,1-1.156-1.156A1.153,1.153,0,0,1,15.981,6.745Zm3.283,1.173A5.722,5.722,0,0,0,17.7,3.867a5.759,5.759,0,0,0-4.051-1.562c-1.6-.091-6.38-.091-7.977,0A5.751,5.751,0,0,0,1.624,3.863,5.74,5.74,0,0,0,.063,7.914c-.091,1.6-.091,6.38,0,7.977a5.722,5.722,0,0,0,1.562,4.051A5.766,5.766,0,0,0,5.675,21.5c1.6.091,6.38.091,7.977,0A5.722,5.722,0,0,0,17.7,19.941a5.759,5.759,0,0,0,1.562-4.051c.091-1.6.091-6.376,0-7.972ZM17.2,17.6a3.263,3.263,0,0,1-1.838,1.838c-1.273.5-4.292.388-5.7.388s-4.43.112-5.7-.388A3.263,3.263,0,0,1,2.129,17.6c-.5-1.273-.388-4.292-.388-5.7s-.112-4.431.388-5.7A3.263,3.263,0,0,1,3.967,4.368c1.273-.5,4.292-.388,5.7-.388s4.43-.112,5.7.388A3.263,3.263,0,0,1,17.2,6.206c.5,1.273.388,4.292.388,5.7S17.707,16.335,17.2,17.6Z"
                transform="translate(0.005 -2.238)"
                fill="#001a7d"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.327"
              height="19.327"
              viewBox="0 0 19.327 19.327"
            >
              <path
                id="Icon_awesome-facebook-square"
                data-name="Icon awesome-facebook-square"
                d="M17.256,2.25H2.071A2.071,2.071,0,0,0,0,4.321V19.506a2.071,2.071,0,0,0,2.071,2.071H7.992V15.006H5.274V11.913H7.992V9.556c0-2.681,1.6-4.162,4.041-4.162a16.465,16.465,0,0,1,2.4.209V8.234H13.079a1.546,1.546,0,0,0-1.744,1.671v2.008H14.3l-.475,3.093H11.335v6.571h5.921a2.071,2.071,0,0,0,2.071-2.071V4.321A2.071,2.071,0,0,0,17.256,2.25Z"
                transform="translate(0 -2.25)"
                fill="#001a7d"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 61.999 37.132"
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

        </div>
        <div className={styles.notFoundHero}>

          <p className={styles.studentAccomTextNotFound}>Student Accomodation</p>

        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1167.85" height="841.719" viewBox="-4767 -2822 1270.85 890.719" className={styles.LineSvg} >
        {/* -4767 -2822 1167.85 841.719 */}
        <path fill="none" id="wire" d="M-4766.667-2093.939s292-358.061,476-223.394S-4269.333-1874.667-3952-2028s221.818-437.333,9.576-338.667-154.546,321.212,151.515,272.727,193.333-429.818,17.576-487.394S-4220-2402.667-4429.333-2432s-317.333-102.667-257.333-232,429.091-48.121,474.545-163.273" />
        {/* -323.1, -301.866 */}
        {/* -5000, -2400 */}
        <g id="Path_438" transform="translate( -323.1, -301.866 ) rotate(98)" style={{ transformBox: "fill-box", zIndex: 600 }}>
          <path data-name="Path 438" d="M447.1,310.866c-4.823-8.125-16.184-27.271-17.958-30.257-12.1-20.391-23.109-19.285-33.967-19.285-4.065,0,3.545-5.169-3.794-12.436-1.376-1.376-2.588-4.4-3.547-7.318a1.034,1.034,0,0,0-1.961,0c-.959,2.92-2.171,5.942-3.547,7.318-7.34,7.267.27,12.436-3.794,12.436-10.858,0-21.866-1.106-33.967,19.285-1.774,2.986-13.135,22.132-17.958,30.257-2.94,4.939,8.928,3.265,14.451-6.045,2.245-3.785,4.491-9.105,11.278-9.105a10.326,10.326,0,0,0,8.877-5.054c9.636-16.225,16.465-9.94,14.214-6.145l-10.845,15.37c-7.742,13.041,52.287,13.042,44.543,0l-10.845-15.37c-2.251-3.8,4.578-10.08,14.214,6.145a10.326,10.326,0,0,0,8.876,5.054c6.787,0,9.033,5.32,11.278,9.105C438.175,314.132,450.042,315.806,447.1,310.866Z"
            fill="#ff782e" stroke="#ff782e"></path>
        </g>

        <animateMotion
          xlinkHref="#Path_438"
          dur="8s"
          fill="freeze"
          rotate="auto"
          id="animateBird"
          begin ="indefinite"
        >

          <mpath xlinkHref="#wire"></mpath>

        </animateMotion>

      </svg>
    </Layout>
  )

}

export default NotFoundPage
