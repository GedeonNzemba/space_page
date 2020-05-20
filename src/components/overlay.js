import React from "react"
import styles from "../styles/stylesheet.module.css"
import LeaseApplicationModal from './leaseApplicationModal'
const overlay = props =>
    props.show ? (
        <div
            className={styles.overlay}
            tabIndex={-1}
        >
            <div
                role="button"
                onClick={props.close}
                className={styles.exitModalDiv}
            >
            </div>
            <LeaseApplicationModal
                show={props.show}
                close={props.close}
                unitSelected={props.unitSelected} /> 
        </div>
    ) : null

export default overlay
