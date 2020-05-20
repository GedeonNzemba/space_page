import React from "react"
import styles from "../../../styles/stylesheet.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const comp = props => {
  
  // $light: #fff5e0;
  // $silver: #E5E8E8;
  // $red: #EF3E25;
  // $green: #3b4500;

  // let colours = ['#ff782e','#001a7d','#fff5e0','#EF3E25','#3b4500']

//   let random = Math.round(Math.random() * 5);
// let colour = colours[random];
// console.log(colour)

  return (
    <li className={styles.navitem}>
{/* <Link id={props.id} to={props.link} activeClassName={styles.activeLink}> */}
      <AniLink cover direction="up" bg={'#001a7d'} to={props.link} activeClassName={styles.activeLink}>
        {props.text}
      </AniLink>
    </li>
  )
}
export default comp
