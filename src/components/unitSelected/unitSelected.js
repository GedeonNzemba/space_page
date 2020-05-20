import React from 'react'
import styles from "../../styles/stylesheet.module.css"
import Cta from "../../components/cta/cta"
import FloorPlan from '../../images/floorplan.png'

const unitSelected = (props) => {

    // const data = useStaticQuery(graphql`
    // query {
    //   studio: file(relativePath: { eq: "IMG_0406.png" }) {
    //     childImageSharp {
    //       fixed(width: 1008, height: 804) {
    //         ...GatsbyImageSharpFixed
    //       }
    //     }
    //   }
    // }`
    // )

    return (
        <div className={styles.UnitSelectedContainer}>

            <div className={styles.informationSection}>
                <h2 className={styles.Heading}>Unit {props.unit.number}</h2>
                <ul>
                    <li>- 35m<sup>2</sup> Internal</li>
                    <li>- 2m<sup>2</sup> Belcony</li>
                    <li>- 35m<sup>2</sup> Total</li>
                </ul>
                <p>Large spacious room with x, y and z to look foward to.</p>

                <Cta title="Book This Room" clicked={()=>props.openLeaseApplicationModal()}></Cta>
            </div>
            <div className={styles.floorPlan}>
                <img src={FloorPlan} />
            </div>

            <h2 className={styles.MobileHeading}>
                <div className={styles.goBackArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.backArrow} onClick={() => { props.backHandler()}}>
                        <path className="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                    </svg>
                </div>
                Unit {props.unit.number}
            </h2>

        </div>
    );
}

export default unitSelected;