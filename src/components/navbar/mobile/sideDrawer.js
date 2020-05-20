import React from "react"
import NavItems from "../navItems"
import styles from "../../../styles/stylesheet.module.css"
import Backdrop from "../../backdrop"

const sideDrawer = props => {
  let attachedStyles = [styles.SideDrawer, styles.Close]
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open]
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(" ")}>
        <div className={styles.SideDrawerNavContainer}>
          <svg
            style={{ position: "absolute", top: "90px", left: "30%" }}
            xmlns="http://www.w3.org/2000/svg"
            width="166.907"
            height="76.565"
            viewBox="0 0 166.907 76.565"
          >
            <path
              id="Path_491"
              data-name="Path 491"
              d="M682.865,301.873c5.913,5.817,43.259,37.606,160.566,45.857"
              transform="translate(770.437 502.772) rotate(-169)"
              fill="none"
              stroke="#fff5e0"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </svg>
          <nav>
            <NavItems />
          </nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168.835"
            height="193.601"
            viewBox="0 0 168.835 193.601"
            style={{ position: "absolute", bottom: "-150px", right: "50px" }}
          >
            <path
              id="Path_446"
              data-name="Path 446"
              d="M198.572,168.08s23.985,76.339,163.373,103.405"
              transform="translate(410.108 -47.223) rotate(118)"
              fill="none"
              stroke="#fff5e0"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className={styles.SideDrawerSocialsContainer}>
          <div style={{width:"25%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.338"
            height="19.333"
            style={{marginTop:"10px",marginLeft:"5px"}}
            viewBox="0 0 19.338 19.333"
          >
            <path
              id="Icon_awesome-instagram"
              data-name="Icon awesome-instagram"
              d="M9.666,6.948A4.957,4.957,0,1,0,14.622,11.9,4.949,4.949,0,0,0,9.666,6.948Zm0,8.179A3.223,3.223,0,1,1,12.888,11.9a3.228,3.228,0,0,1-3.223,3.223Zm6.316-8.382a1.156,1.156,0,1,1-1.156-1.156A1.153,1.153,0,0,1,15.981,6.745Zm3.283,1.173A5.722,5.722,0,0,0,17.7,3.867a5.759,5.759,0,0,0-4.051-1.562c-1.6-.091-6.38-.091-7.977,0A5.751,5.751,0,0,0,1.624,3.863,5.74,5.74,0,0,0,.063,7.914c-.091,1.6-.091,6.38,0,7.977a5.722,5.722,0,0,0,1.562,4.051A5.766,5.766,0,0,0,5.675,21.5c1.6.091,6.38.091,7.977,0A5.722,5.722,0,0,0,17.7,19.941a5.759,5.759,0,0,0,1.562-4.051c.091-1.6.091-6.376,0-7.972ZM17.2,17.6a3.263,3.263,0,0,1-1.838,1.838c-1.273.5-4.292.388-5.7.388s-4.43.112-5.7-.388A3.263,3.263,0,0,1,2.129,17.6c-.5-1.273-.388-4.292-.388-5.7s-.112-4.431.388-5.7A3.263,3.263,0,0,1,3.967,4.368c1.273-.5,4.292-.388,5.7-.388s4.43-.112,5.7.388A3.263,3.263,0,0,1,17.2,6.206c.5,1.273.388,4.292.388,5.7S17.707,16.335,17.2,17.6Z"
              transform="translate(0.005 -2.238)"
              fill="#FFF4DF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.327"
            height="19.327"
            style={{marginTop:"10px"}}
            viewBox="0 0 19.327 19.327"
          >
            <path
              id="Icon_awesome-facebook-square"
              data-name="Icon awesome-facebook-square"
              d="M17.256,2.25H2.071A2.071,2.071,0,0,0,0,4.321V19.506a2.071,2.071,0,0,0,2.071,2.071H7.992V15.006H5.274V11.913H7.992V9.556c0-2.681,1.6-4.162,4.041-4.162a16.465,16.465,0,0,1,2.4.209V8.234H13.079a1.546,1.546,0,0,0-1.744,1.671v2.008H14.3l-.475,3.093H11.335v6.571h5.921a2.071,2.071,0,0,0,2.071-2.071V4.321A2.071,2.071,0,0,0,17.256,2.25Z"
              transform="translate(0 -2.25)"
              fill="#FFF4DF"
            />
          </svg>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default sideDrawer
