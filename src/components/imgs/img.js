import React from "react"
import styles from "../../styles/stylesheet.module.css"
const IMG = React.forwardRef((props, ref) => {
    return (
        <div className={props.imageSection} ref={ref}>

            <div className={props.imageStyle} >
                <div className={[styles.item__img, styles.item__img__t2].join(" ")} ></div>
            </div>

        </div>

    );
})

export default IMG;