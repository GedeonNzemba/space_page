import React, { useState, useRef } from 'react'
import styles from "../styles/stylesheet.module.css"
import Close from '../images/svgs/close.svg'
import Form from '../components/form'
import Calendar from './calendar'
import moment from 'moment'
import OrangeBird from "../images/svgs/birdIconOrange.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SVG from "../components/svgs/svg"

const BookingModal = (props) => {
    const [selectedDate, setSelectedDate] = useState(moment().format("Y-MM-D"))
    const [bookingConfirmed, setBookingConfirmed] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({ time: "15:00 - 15:30", date: moment().format("Y-MM-D") })
    const svgModalLine = useRef()

    const d = moment(bookingDetails.date);
    const time = bookingDetails.time.split(" - ")[0]
    const day = d.format("D") < 10 ? "0" + d.format("D") : d.format("D")

    const confirmBookingHandler = (bookingDetails) => {
        setBookingConfirmed(true)
        setBookingDetails(bookingDetails)
        setSelectedDate(moment().format("Y-MM-D"))
    }
    const closeConfirmBooking = () => {
        setBookingConfirmed(false)
    }

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

    return (
        <div className={props.show ? styles.bookingModalContainer : styles.bookingModalContainerHidden} id="bookingModal">
            <img src={Close} alt="close modal" className={styles.closeModal} onClick={props.closeBookingModalHandler} />
            <div className={styles.ModalHeader}>
                <h1>Book A Viewing</h1>
            </div>

            {bookingConfirmed
                ? <div className={styles.BookingContentContainer_bookingConfirmed}>
                    <div className={styles.confirmationCopy_container}>
                        <h2 className={styles.confirmationBookingCopy}>Your booking has been successfully made for the
                            <span className={styles.orangeDate}> {day + " " + d.format("MMMM") + ", at " + time}</span>
                        ! we look forward to meeting you.
                        </h2>
                        <p className={styles.emailConfirmationText}>An Email has been sent to your inbox as a reminder.</p>
                    </div>
                    <div className={styles.ButtonContainer_bookingModal}>
                        <AniLink cover direction="up" bg={'#001a7d'} to={'/'} activeClassName={styles.activeLink}>
                            <button className={styles.GoHomeButton}>Go Home</button>
                        </AniLink>
                        <button className={styles.CloseMessageButton} onClick={closeConfirmBooking}>Close Message</button>
                    </div>

                    <SVG
                        style={[styles.svgBase, styles.svgModalLine].join(" ")}
                        id="modalSVGLine"
                        d="M0,0C109.65,49.754,203.8,82.033,314.75,74.488"
                        width="287.913" height="264.385" viewBox="0 0 287.913 264.385"
                        ref={svgModalLine}
                        transform="matrix(0.755, -0.656, 0.656, 0.755, 0.455, 206.86)"
                        animateF={animatedPaths}
                        stroke="#3b4500"
                        time={400}
                    />
                    <img src={OrangeBird} alt="orange bird" className={styles.OrangeBird_bookingModal} />
                </div>
                : <div className={styles.BookingContentContainer}>
                    <div className={styles.Calendar}>
                        <h4>Select A Date That Suits You</h4>
                        <Calendar
                            setSelectedDate={setSelectedDate}
                            bookings={props.bookings}
                            fullyBookedDays={props.fullyBookedDays} />
                    </div>

                    <div className={styles.FormBookingModal}>
                        <Form
                            selectedDate={selectedDate}
                            bookings={props.bookings}
                            confirmBookingHandler={confirmBookingHandler}
                            fetchBookings={props.fetchBookings}
                            fetchFullyBooked={props.fetchFullyBooked} />
                    </div>
                    <img src={OrangeBird} alt="orange bird" className={styles.OrangeBird_bookingModal} />
                </div>
            }
        </div>
    )
}

export default BookingModal