import React, { useState } from 'react'
import styles from "../styles/stylesheet.module.css"
import Input from './input';
import axios from 'axios'
import { updateObject, checkValidity } from '../shared/utility';

const LeaseApplicationForm = (props) => {

    const patterns = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        // saId: /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/
    }
    const [checkAgreement, setCheckAgreement] = useState(false);
    const [application, setApplication] = useState({
        name: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            },
            touched: false,
            isValid: false
        },
        surname: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            },
            touched: false,
            isValid: false
        },
        email: {
            value: "",
            validation: {
                required: true,
                isEmail: true
            }, touched: false,
            isValid: false
        },
        cellNumber: {
            value: "",
            validation: {
                required: true,
                minLength: 10
            }, touched: false,
            isValid: false
        },
        id: {
            value: "",
            validation: {
                required: true,
                minLength: 10
            }, touched: false,
            isValid: false
        },
        nationality: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        leasePeriod: {
            value: "1 Year",
            validation: {
                required: true
            },
            isValid: true
        },
        student: {
            value: true,
            validation: {
                required: true
            },
            isValid: true
        },
        parking: {
            value: true,
            validation: {
                required: true
            },
            isValid: true
        },
        studentNumber: {
            value: "",
            validation: {
                required: true,
                minLength: 3
            }, touched: false,
            isValid: false
        },
        placeOfStudy: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        yearOfStudy: {
            value: "",
            validation: {
                required: true,
                isNumber: true
            }, touched: false,
            isValid: false
        },
        placeOfWork: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        occupation: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        }

    })
    const [applicationLeasee, setApplicationLeasee] = useState({
        leaseeCheck: {
            value: false,
            validation: {
                required: true
            },
            isValid: true
        },

        leaseeName: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        leaseeSurname: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        leaseeEmail: {
            value: "",
            validation: {
                required: true,
                isEmail: true
            }, touched: false,
            isValid: false
        },
        leaseeCellNumber: {
            value: "",
            validation: {
                required: true,
                minLength: 10
            }, touched: false,
            isValid: false
        },
        leaseeId: {
            value: "",
            validation: {
                required: true,
                minLength: 10
            }, touched: false,
            isValid: false
        },
        leaseeNationality: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        leaseeOccupation: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        },
        leaseePlaceOfWork: {
            value: "",
            validation: {
                required: true,
                minLength: 2
            }, touched: false,
            isValid: false
        }
    })

    // console.log(application)
    const handleChange = (e) => {
        let value = e.target.value;

        if (value === "No")
            value = false
        else if (value === "Yes")
            value = true

        let updatedApplication = {}

        if (e.target.name !== "leasePeriod" && e.target.name !== "student" && e.target.name !== "parking") {
            updatedApplication = updateObject(
                {
                    ...application,
                    [e.target.name]: updateObject(application[e.target.name], {
                        value: value,
                        isValid: checkValidity(value, application[e.target.name].validation),
                        touched: true
                    })
                })

        } else {
            updatedApplication = updateObject(
                {
                    ...application,
                    [e.target.name]: updateObject(application[e.target.name], {
                        value: value,
                        isValid: true,
                        touched: true
                    })
                })
        }
        setApplication(updatedApplication);
    }

    const handleLeaseeChange = (e) => {
        let value = e.target.value;

        if (value === "No")
            value = false
        else if (value === "Yes")
            value = true


        let updatedApplication = {}
        if (e.target.name !== "leaseeCheck") {

            updatedApplication = updateObject(
                {
                    ...applicationLeasee,
                    [e.target.name]: updateObject(applicationLeasee[e.target.name], {
                        value: value,
                        isValid: checkValidity(value, applicationLeasee[e.target.name].validation),
                        touched: true
                    })
                })
        } else {
            updatedApplication = updateObject(
                {
                    ...applicationLeasee,
                    [e.target.name]: updateObject(applicationLeasee[e.target.name], {
                        value: value,
                        isValid: true,
                        touched: true
                    })
                })
        }
        setApplicationLeasee(updatedApplication);
    }

    const checkAgreementHandler = (val) => {
        setCheckAgreement(val)
    }

    const checkValidation = () => {
        const applicationInvalid = Object.keys(application).some(key => {
            if (application.student.value) {
                return typeof application[key].value == "string" && key !== "placeOfWork" && key !== "occupation"
                    ? application[key].isValid === false
                    : typeof application[key].value == "double"
            }
            else {
                return typeof application[key].value == "string" && key !== "placeOfStudy" && key !== "studentNumber" && key !== "yearOfStudy"
                    ? application[key].isValid === false
                    : typeof application[key].value == "double"
            }

        })
        console.log(application)
        if (applicationLeasee.leaseeCheck
            && application.nationality.value.localeCompare("south africa", undefined, { sensitivity: 'accent' }) === 0
            && applicationLeasee.leaseeNationality.value.localeCompare("south africa", undefined, { sensitivity: 'accent' }) === 0) {

            const applicationLeaseeInvalid = Object.keys(applicationLeasee).some(key => applicationLeasee[key].isValid === false)
            return patterns.email.test(application.email.value)
                && patterns.email.test(applicationLeasee.leaseeEmail.value)
                && application.id.value.length === 13
                && applicationLeasee.leaseeId.value.length === 13 && (applicationInvalid === false) && (applicationLeaseeInvalid === false)

        } else if (application.leaseeCheck === false
            && application.nationality.value.localeCompare("south africa", undefined, { sensitivity: 'accent' }) === 0) {

            return patterns.email.test(application.email.value)
                && application.id.value.length === 13 && (applicationInvalid === false)
        } else {
            return patterns.email.test(application.email.value) && (applicationInvalid === false)
        }
    }

    const isApplicationIncomplete = () => {
        console.log(application)
        const tenant = Object.keys(application).some(key => {
            if (application.student.value) {
                return typeof application[key].value == "string" && key !== "placeOfWork" && key !== "occupation"
                    ? application[key].value.length === 0
                    : typeof application[key].value == "double"
            }
            else {
                return typeof application[key].value == "string" && key !== "placeOfStudy" && key !== "studentNumber" && key !== "yearOfStudy"
                    ? application[key].value.length === 0
                    : typeof application[key].value == "double"
            }

        }
        );
        let leasee = false;
        if (applicationLeasee.leaseeCheck.value) {
            leasee = Object.keys(applicationLeasee).some(key =>
                typeof applicationLeasee[key].value == "string"
                    ? applicationLeasee[key].value.length === 0
                    : typeof applicationLeasee[key].value == "double"
            );
        }

        return tenant || leasee
    }

    const submitApplication = (e) => {
        e.preventDefault();

        console.log(checkValidation(), isApplicationIncomplete())
        if (checkValidation() && !isApplicationIncomplete() && checkAgreement) {
            //     setValid(true)
            //     setNameValid(true)
            //     let filtered = selection.filter((el) => {
            //         return el != null;
            //     });

            const bodyTenant = {
                unitSelected: props.unitSelected,
                tenant: {
                    name: application.name.value.trim(),
                    surname: application.surname.value.trim(),
                    email: application.email.value.trim(),
                    cellNumber: application.cellNumber.value,
                    id: application.id.value,
                    nationality: application.nationality.value.trim(),
                    leasePeriod: application.leasePeriod.value,
                    student: application.student.value,
                    parking: application.parking.value,
                    studentNumber: application.studentNumber.value.trim(),
                    placeOfWork: application.placeOfWork.value.trim(),
                    occupation: application.occupation.value.trim()
                }
            }

            const bodyLeasee = {
                leasee: {
                    name: applicationLeasee.leaseeName.value.trim(),
                    surname: applicationLeasee.leaseeSurname.value.trim(),
                    email: applicationLeasee.leaseeEmail.value.trim(),
                    cellNumber: applicationLeasee.leaseeCellNumber.value,
                    id: applicationLeasee.leaseeId.value,
                    nationality: applicationLeasee.leaseeNationality.value.trim(),
                    occupation: applicationLeasee.leaseeOccupation.value.trim(),
                    placeOfWork: applicationLeasee.leaseePlaceOfWork.value.trim()
                }
            }
            let body = bodyTenant

            if (applicationLeasee.leaseeCheck.value) {
                body = { ...bodyTenant, ...bodyLeasee }
            }

            const request = {
                method: "post",
                url: "https://europe-west1-properlivingproperty.cloudfunctions.net/submitApplication",
                data: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                },
            }

            axios(request)
                .then(response => {
                    console.log("successfully submitted application")
                    // props.confirmBookingHandler(body)
                    // props.fetchBookings()
                    // props.fetchFullyBooked()
                })
                .catch(err => {
                    console.log("unable to submit application")
                })
        }
        
    }

    const inputsTenant =
        [<Input
            key="name"
            label="Name"
            type="text" handleChange={handleChange}
            name="name"
            value={application.name.value}
            valid={application.name.isValid}
            touched={application.name.touched} />,
        <Input
            key="surname"
            label="Surname"
            type="text" handleChange={handleChange}
            name="surname"
            value={application.surname.value}
            valid={application.surname.isValid}
            touched={application.surname.touched} />,
        <Input
            key="email"
            label="Email"
            type="text" handleChange={handleChange}
            name="email"
            value={application.email.value}
            valid={application.email.isValid}
            touched={application.email.touched} />,
        <Input
            key="cellNumber"
            label="Cell Number"
            type="number" handleChange={handleChange}
            name="cellNumber"
            value={application.cellNumber.value}
            valid={application.cellNumber.isValid}
            touched={application.cellNumber.touched} />,
        <Input
            key="id"
            label="Identity Number (ID)"
            type="number" handleChange={handleChange}
            name="id"
            value={application.id.value}
            valid={application.id.isValid}
            touched={application.id.touched} />,
        <Input
            key="nationality"
            label="Nationality"
            type="text" handleChange={handleChange}
            name="nationality"
            value={application.nationality.value}
            valid={application.nationality.isValid}
            touched={application.nationality.touched} />
        ]

    const inputsTenantConditional =
        application.student.value
            ? [
                <Input
                    key="studentNumber"
                    label="StudentNumber"
                    type="text" handleChange={handleChange}
                    name="studentNumber"
                    value={application.studentNumber.value}
                    valid={application.studentNumber.isValid}
                    touched={application.studentNumber.touched} />,
                <Input
                    key="pos"
                    label="Place Of Study"
                    type="text" handleChange={handleChange}
                    name="placeOfStudy"
                    value={application.placeOfStudy.value}
                    valid={application.placeOfStudy.isValid}
                    touched={application.placeOfStudy.touched} />,
                <Input
                    key="yos"
                    label="Year Of Study"
                    type="number" handleChange={handleChange}
                    name="yearOfStudy"
                    value={application.yearOfStudy.value}
                    valid={application.yearOfStudy.isValid}
                    touched={application.yearOfStudy.touched} />
            ] : [

                <Input
                    key="occupation"
                    label="Occupation"
                    type="text" handleChange={handleChange}
                    name="occupation"
                    value={application.occupation.value}
                    valid={application.occupation.isValid}
                    touched={application.occupation.touched} />,
                <Input
                    key="pow"
                    label="Place of Work"
                    type="text"
                    name="placeOfWork" handleChange={handleChange}
                    value={application.placeOfWork.value}
                    valid={application.placeOfWork.isValid}
                    touched={application.placeOfWork.touched} />

            ]

    const inputsLeasee =
        [<Input
            key="lname"
            label="Name"
            type="text" handleChange={handleLeaseeChange}
            name="leaseeName"
            value={applicationLeasee.leaseeName.value}
            valid={applicationLeasee.leaseeName.isValid}
            touched={applicationLeasee.leaseeName.touched} />,
        <Input
            key="lsurname"
            label="Surname"
            type="text" handleChange={handleLeaseeChange}
            name="leaseeSurname"
            value={applicationLeasee.leaseeSurname.value}
            valid={applicationLeasee.leaseeSurname.isValid}
            touched={applicationLeasee.leaseeSurname.touched} />,
        <Input
            key="lemail"
            label="Email"
            type="text" handleChange={handleLeaseeChange}
            name="leaseeEmail"
            value={applicationLeasee.leaseeEmail.value}
            valid={applicationLeasee.leaseeEmail.isValid}
            touched={applicationLeasee.leaseeEmail.touched} />,
        <Input
            key="lcell"
            label="Cell Number"
            type="number" handleChange={handleLeaseeChange}
            name="leaseeCellNumber"
            value={applicationLeasee.leaseeCellNumber.value}
            valid={applicationLeasee.leaseeCellNumber.isValid}
            touched={applicationLeasee.leaseeCellNumber.touched} />,
        <Input
            key="leaseeID"
            label="Identity Number (ID)"
            type="number" handleChange={handleLeaseeChange}
            name="leaseeId"
            value={applicationLeasee.leaseeId.value}
            valid={applicationLeasee.leaseeId.isValid}
            touched={applicationLeasee.leaseeId.touched} />,
        <Input
            key="easeeNation"
            label="Nationality"
            type="text" handleChange={handleLeaseeChange}
            name="leaseeNationality"
            value={applicationLeasee.leaseeNationality.value}
            valid={applicationLeasee.leaseeNationality.isValid}
            touched={applicationLeasee.leaseeNationality.touched} />,
        <Input
            key="lcop"
            label="Occupation"
            type="text" handleChange={handleLeaseeChange}
            name="leaseeOccupation"
            value={applicationLeasee.leaseeOccupation.value}
            valid={applicationLeasee.leaseeOccupation.isValid}
            touched={applicationLeasee.leaseeOccupation.touched} />,
        <Input
            key="lpow"
            label="Place of Work"
            type="text" handleChange={handleLeaseeChange}
            name="leaseePlaceOfWork"
            value={applicationLeasee.leaseePlaceOfWork.value}
            valid={applicationLeasee.leaseePlaceOfWork.isValid}
            touched={applicationLeasee.leaseePlaceOfWork.touched} />]

    const leasePeriods = ["1 Year", "2 Years", "3 Years", "4 Years"].map(period =>
        <div className={styles.radioPair} key={period} >
            <input
                className={styles.radioButton_time}
                type="radio" id={period}
                name="leasePeriod" value={period}
                checked={application.leasePeriod.value === period}
                onChange={(e) => handleChange(e)}
            />
            <label className={styles.radioButton_title} htmlFor={period}>{period}</label><br />
        </div>
    )

    const student = ["Yes", "No"].map((ans, i) =>
        <div className={styles.radioPair} key={ans + i + 2}>
            <input
                className={styles.radioButton_time}
                type="radio" id={ans + i + 2}
                name="student" value={ans}
                checked={(application.student.value ? "Yes" : "No") === ans}
                onChange={(e) => handleChange(e)}
            />
            <label className={styles.radioButton_title} htmlFor={ans + i + 2}>{ans}</label>
        </div>
    )

    const parking = ["Yes", "No"].map((ans, i) =>
        <div className={styles.radioPair} key={ans + i + 3}>
            <input
                className={styles.radioButton_time}
                type="radio" id={ans + i + 3}
                name="parking" value={ans}
                checked={(application.parking.value ? "Yes" : "No") === ans}
                onChange={(e) => handleChange(e)}
            />
            <label className={styles.radioButton_title} htmlFor={ans + i + 3}>{ans}</label>
        </div>
    )

    const whoLeasing = ["Yes", "No"].map((ans, i) =>
        <div className={styles.radioPair} key={ans + i + 4}>
            <input
                className={styles.radioButton_time}
                type="radio" id={ans + i + 4}
                name="leaseeCheck" value={ans}
                checked={(applicationLeasee.leaseeCheck.value ? "Yes" : "No") === ans}

                onChange={(e) => handleLeaseeChange(e)}
            />
            <label className={styles.radioButton_title} htmlFor={ans + i + 4}>{ans}</label>
        </div>

    )

    const personalDetailsHeading = <h4 className={styles.personalDetailsHeading}>Personal Details</h4>

    return (
        <>
            <h2 className={styles.tenantHeading}>Tenant</h2>
            {personalDetailsHeading}
            <form className={styles.personalDetailsForm}>
                {inputsTenant}
                {/* <div className={styles.radioQuestions_container}> */}
                <div className={styles.radioQuestionSection_LeasePeriod}>
                    <h4 className={styles.questionHeading}>Lease Period</h4>
                    {leasePeriods}
                </div>
                <div className={styles.radioQuestionSection}>
                    <h4 className={styles.questionHeading}>Are You a Student</h4>
                    <div className={styles.yesnoRadioContainer}>
                        {student}
                    </div>

                </div>
                <div className={styles.radioQuestionSection}>
                    <h4 className={styles.questionHeading}>Do You Want Parking?</h4>
                    <div className={styles.yesnoRadioContainer}>
                        {parking}
                    </div>
                </div>
                {inputsTenantConditional}
                <span className={styles.ifApplicable}>*If Applicable</span><br />

                <div className={styles.radioQuestionSection_whoLeasing}>
                    <h4 className={styles.questionHeading}>Are You leasing the property yourself, or is someone doing it on your behalf?</h4>
                    <div className={styles.yesnoRadioContainer}>
                        {whoLeasing}
                    </div>
                </div>
            </form> 

            {applicationLeasee.leaseeCheck.value
                ? <>
                    <h2 className={styles.tenantHeading}>Leasee</h2>
                    {personalDetailsHeading}
                    <form className={styles.personalDetailsForm}>
                        {inputsLeasee}
                    </form>

                </>
                : null}
            <label className={styles.checkBoxContainer}>By checking this checkbox you are agreeing that all information above is correct.
                <input type="checkbox" onChange={(e) => checkAgreementHandler(e.target.value)} />
                <span className={styles.checkmarkAgreement}></span>
            </label>
            <button className={styles.submitBookingApplication} onClick={submitApplication}>Submit Booking Application</button>
        </>
    )
}

export default LeaseApplicationForm
//floating-label-field--s3