import React, { useState } from 'react'
import styles from "../styles/stylesheet.module.css"
import axios from "axios"

const Form = (props) => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    const [valid, setValid] = useState(true)
    const [nameValid, setNameValid] = useState(true)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const times = ["15:00 - 15:30", "15:45 - 16:15", "16:30 - 16:45", "17:00 - 17:30"];

    const [selectedTime, setSelectedTime] = useState("15:00 - 15:30")

    const bookings = props.bookings
    // let validIndices = [0, 1, 2, 3]
    let selection = times.map(time =>
        <div className={styles.radioPair} key={time}>
            <input className={styles.radioButton_time} type="radio" id={time} name="time" value={time} checked={selectedTime === time} onChange={(e) => timeSelectionHandler(e.target.value)} />
            <label className={styles.radioButton_title} htmlFor={time}>{time}</label><br />
        </div>)

    if (bookings !== null && bookings !== undefined) {
        // validIndices = [0, 1, 2, 3]
        const selectedMonth = props.selectedDate.split('-')[1]
        outerloop: for (let key in bookings) {
            if (bookings[key].date === props.selectedDate) {
                for (let i = 0; i < times.length; i++) {
                    if (bookings[key].time === times[i]) {
                        if (selection.length > 1) {
                            selection[i] = null
                            // validIndices.splice(validIndices.indexOf(i), 1)
                            if(times[i] === selectedTime){
                                setSelectedTime(times[i+1]!==undefined? times[i+1]:times[0])
                            }
                        }
                        else {
                            // validIndices = []
                            selection = []
                            break outerloop;
                        }
                    }
                }
            }
            else if (selectedMonth === bookings[key].date) {
                selection = times.map(time => <div className={styles.radioPair} key={time}>
                    <input className={styles.radioButton_time} type="radio" id={time} name="time" value={time} checked={selectedTime === time} onChange={(e) => timeSelectionHandler(e.target.value)} />
                    <label className={styles.radioButton_title} htmlFor={time}>{time}</label><br />
                </div>)
            }

        }
    } else {
        // validIndices = [0, 1, 2, 3]
        selection = times.map(time => <div className={styles.radioPair} key={time}>
            <input className={styles.radioButton_time} type="radio" id={time} name="time" value={time} checked={selectedTime === time} onChange={(e) => timeSelectionHandler(e.target.value)} />
            <label className={styles.radioButton_title} htmlFor={time}>{time}</label><br />
        </div>)
    }
    // let temp = validIndices[0]!==null?validIndices[0]: 0;
    // setSelectedTime(times[temp])

    const nameHandler = (value) => {
        setName(value.trim())

        if (!nameValid) {
            setNameValid(value.trim().length >= 2)
        }
    }
    const emailHandler = (value) => {
        setEmail(value.trim())
        if (!valid) {
            setValid(pattern.test(value.trim()))
        }
    }

    const timeSelectionHandler = (value) => {
        setSelectedTime(value)
    }

    const submitBooking = (e) => {
        e.preventDefault()

        if (pattern.test(email) && name.length >= 2) {
            setValid(true)
            setNameValid(true)
            let filtered = selection.filter((el) => {
                return el != null;
            });

            const body = {
                email: email,
                fullname: name,
                date: props.selectedDate,
                time: selectedTime,
                selection: filtered.length
            }

            const request = {
                method: "post",
                url: "https://europe-west1-properlivingproperty.cloudfunctions.net/booking",
                data: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                },
            }

            axios(request)
                .then(response => {
                    console.log("successfully booked")
                    props.confirmBookingHandler(body)
                    props.fetchBookings()
                    props.fetchFullyBooked()
                })
                .catch(err => {
                    console.log("unable to make book")
                })
        } else {
            setValid(pattern.test(email))
            setNameValid(name.length >= 2)
        }
    }

    return (
        <form className={styles.form_component_container}>

            <p className={styles.fullName} >Full Name</p>
            <input type="text" className={nameValid ? styles.nameInput : styles.nameInput_error} placeholder="Enter your full name" onChange={(e) => { nameHandler(e.target.value) }} />
            {nameValid ? null : <p className={styles.errorNameMessage}>Enter a full name</p>}

            <input type="email" placeholder="email@gmail.com" className={valid ? styles.emailInput : styles.emailInput_error} onChange={(e) => { emailHandler(e.target.value) }} />
            {valid ? null : <p className={styles.errorEmailMessage}>Enter a valid email address</p>}

            <input type="date" placeholder="---/ ---/ ---" className={styles.dateInput} readOnly value={props.selectedDate} />

            <h4 className={styles.timeHeading}>Select A Time That Suits You</h4>
            <div className={styles.timeContainer}> 
                {selection}
            </div>

            <button className={styles.submitButton} onClick={(e) => submitBooking(e)}>Submit</button>

        </form>
    )
}

export default Form