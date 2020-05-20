import React, { useState } from 'react'
import moment from 'moment'
import styles from "../styles/stylesheet.module.css"

const Calendar = (props) => {

    const m = moment()
    const currentDate = { day: m.format("D"), month: m.month(), year: m.format("Y") }
    const [dateObject, setDateObject] = useState(moment())
    const [selected, setSelected] = useState({ day: dateObject.format("D"), month: dateObject.month(), year: dateObject.format("Y") })

    let weekdayshort = moment.weekdaysShort();

    let weekDayShortName = weekdayshort.map(day => {
        return (
            <th key={day} className={styles.weekDay}>
                {day}
            </th>
        )
    })

    const year = () => {
        return dateObject.format("Y");
    }
    const month = () => {
        return dateObject.format("MMMM");
    }
    const currentMonth = () => {
        return dateObject.month()
    }
    const daysInMonth = () => {
        return dateObject.daysInMonth();
    }
    // const currentDate = () => {
    //     return dateObject.get("date");
    // }
    const currentDay = () => {
        return dateObject.format("D");
    }

    const firstDayOfMonth = () => {
        let dateObjectCopy = dateObject;
        let firstDay = moment(dateObjectCopy)
            .startOf("month")
            .format("d");
        return firstDay;
    };

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <td className={styles.calendarDayEmpty}>{""}</td>
        );
    }

    const onDayClick = (d) => {
        const mcheck = currentMonth() + 1
        const month = mcheck < 10 ? "0" + mcheck : mcheck
        const day = d < 10 ? "0" + d : d
        const cd = year() + "-" + month + "-" + day
        setSelected({ day: d, month: currentMonth(), year: year() })
        props.setSelectedDate(cd)
    }

    let dim = [];
    const cd = currentDay()

    // const dateFullyBooked = props.dateFullyBooked !== undefined ? props.dateFullyBooked.split('-') : ''
    const fullyBookedDays = props.fullyBookedDays
    if (fullyBookedDays !== undefined) {

        for (let d = 1; d <= daysInMonth(); d++) {
            const dayStyle = styles.calendarDayNumber
            for (let key in fullyBookedDays) {
                // dim = []
                const dateSplit = fullyBookedDays[key].date.split("-")
                if (d == dateSplit[2].replace(/^0+/, '') && dateSplit[1].replace(/^0+/, '') - 1 === currentMonth() && dateSplit[0] === year()) {
                    dayStyle = styles.disabledDay
                    break
                } else {
                    dayStyle =
                        (d == selected.day && selected.month == currentMonth() && selected.year == year()
                            ? styles.calendarDayNumberToday
                            : (d < cd && currentDate.month == currentMonth() && currentDate.year == year() || (currentDate.month > currentMonth() || currentDate.year > year()))
                                ? styles.disabledDay
                                : styles.calendarDayNumber)
                }
            }
            dim.push(
                <td key={d} className={dayStyle} onClick={dayStyle === styles.disabledDay || d < cd && (currentDate.month == currentMonth() && currentDate.year == year() || (currentDate.month > currentMonth() || currentDate.year > year()))
                    ? null
                    : e => onDayClick(d)}>
                    {d}
                </td>
            );
        }


    } else {
        dim = []
        for (let d = 1; d <= daysInMonth(); d++) {
            const dayStyle = (d == selected.day && selected.month == currentMonth() && selected.year == year()
                ? styles.calendarDayNumberToday
                : (d < cd && currentDate.month == currentMonth() && currentDate.year == year() || (currentDate.month > currentMonth() || currentDate.year > year()))
                    ? styles.disabledDay
                    : styles.calendarDayNumber)

            dim.push(
                <td key={d} className={dayStyle} onClick={d < cd && (currentDate.month == currentMonth() && currentDate.year == year() || (currentDate.month > currentMonth() || currentDate.year > year()))
                    ? null
                    : e => onDayClick(d)}>
                    {d}
                </td>
            );
        }
    }

    let totalSlots = [...blanks, ...dim];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows 
            cells = []; // empty container 
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
            rows.push(cells);
        }
    })

    let daysinmonth = rows.map(d => {
        return <tr>{d}</tr>;
    })

    const prevHandler = () => {
        let dateContextCopy = Object.assign({}, dateObject);
        dateContextCopy = moment(dateContextCopy).subtract(1, "month")
        setDateObject(dateContextCopy)
    }

    const nextHandler = () => {
        let dateContextCopy = Object.assign({}, dateObject);
        dateContextCopy = moment(dateContextCopy).add(1, "month")
        setDateObject(dateContextCopy)
    }

    return (
        <div className={styles.Calendar_container}>
            <div className={styles.Calendar_header}>

                <span className={styles.month_year_heading}>{month() + " " + year()} </span>

                <div className={styles.calendarArrowContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.leftCalendarArrow} onClick={() => prevHandler()}>
                        <path className="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="46.604" height="45.299" viewBox="0 0 46.604 45.299" className={styles.rightCalendarArrow} onClick={() => nextHandler()}>
                        <path className="a" d="M410.707,319.107l-22.222,22.222a.43.43,0,0,1-.614-.008l-2.526-2.527a.439.439,0,0,1,0-.629l17.937-17.1H364.674a.437.437,0,0,1-.438-.438v-3.663a.431.431,0,0,1,.438-.431h38.608l-17.945-17.1a.425.425,0,0,1-.008-.606l2.549-2.549a.424.424,0,0,1,.6,0l22.237,22.214A.429.429,0,0,1,410.707,319.107Z" transform="translate(-364.236 -296.155)" />
                    </svg>
                </div>
            </div>


            <table className={styles.calendar}>

                <thead className={styles.thead}>
                    <tr>{weekDayShortName}</tr>
                </thead>
                <tbody>
                    {daysinmonth}
                </tbody>
            </table >

        </div>
    )
}

export default Calendar