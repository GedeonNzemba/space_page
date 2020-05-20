import React from 'react'
import styles from "../styles/stylesheet.module.css"

const Input = (props) => {
    let invalid = false;
    if (!props.valid && props.touched) {
        invalid = true;
    }

    return (
        <div className={styles.inputSection}>
            <div className={styles.field}>
                <input
                    type={props.type}
                    required
                    onChange={(e) => props.handleChange(e)}
                    name={props.name}
                    value={props.value} />
                <label>{props.label}</label>
            </div>
            {invalid ? <p className={styles.inputInvalid}>Incorrect input</p> : null}
        </div>
    )
}

export default Input