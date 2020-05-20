import React from 'react'
import styles from "../styles/stylesheet.module.css"
import Close from '../images/svgs/close.svg'
import PL_Stamp from '../images/PL_Stamp_BRandmark_Red.png'
import LeaseApplicationForm from './leaseApplicationForm';

const LeaseApplicationModal = (props) => {
    
    let unitSelected =  props.unitSelected === undefined 
    ? JSON.stringify(localStorage.getItem('aijnweilcoiubciqubc33234'))
    : props.unitSelected
    
    return (
        <div className={props.show ? styles.leaseApplicationModal : styles.leaseApplicationModal_hidden}>

            <img src={Close} alt="close modal" className={styles.closeModal_LeaseModal} onClick={props.close} />
            <div className={styles.UnitLocationContainer}> 
                <div className = {styles.locationCopy}>
                    <p>Unit {unitSelected.number}</p>
                    <p>6 Nansen Street, Observatory</p>
                    <p className = {styles.CapeTownText}>Cape Town</p>
                </div>
                <img className={styles.PL_Stamp_red} src={PL_Stamp} alt="PL_Stamp brandmark" />
            </div>
            <div className={styles.ModalHeader}>
                <h1>Lease Application</h1>
            </div>
            <div className = {styles.leaseApplication_content}>
                <p className = {styles.applicationCopy}>Some information detailing the process from here. " please fill out this form to secure your spot at 6 Nansen and we will get back to you shortly.</p>
                <LeaseApplicationForm
                unitSelected = {unitSelected}/>
            </div>
        </div>
    )
}

export default LeaseApplicationModal