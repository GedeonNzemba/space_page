import React, { useRef, useState } from 'react'
import styles from "../../styles/stylesheet.module.css"

const Unit = (props) => {
    let [hover, _setHover] = useState(false);
    const hoverRef = useRef(hover);

    const setHover = data => {
        hoverRef.current = data;
        _setHover(data);
    }

    const onMouseEnter = e => {
        setHover(true);
    };

    const onMouseLeave = e => {
        setHover(false);
    };

    const styleContainer = hoverRef.current ? { backgroundColor: "#001a7d", transition: "all 0.3s linear" } : props.isSelected ? { backgroundColor: "#001a7d", transition: "all 0.3s linear" } : {};
    const styleName = hoverRef.current ? { borderBottom: "1px solid #E5E8E8", color: "#E5E8E8", transition: "all 0.3s linear" } : props.isSelected ? { borderBottom: "1px solid #E5E8E8", color: "#E5E8E8", transition: "all 0.3s linear" } : {};
    const styleState = hoverRef.current ? { color: "#E5E8E8", transition: "all 0.3s linear" } : props.isSelected ? { color: "#E5E8E8", transition: "all 0.3s linear" } : {};
    const styleSize = hoverRef.current ? { color: "#E5E8E8", transition: "all 0.3s linear" } : props.isSelected ? { color: "#E5E8E8", transition: "all 0.3s linear" } : {};
    return (
        <div className={styles.unitContainer}
            style={styleContainer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => { props.selectUnitHandler(props.unit) }}
        >
            <div>
                <h6 className={styles.nameOfUnit} style={styleName} >Unit {props.unit.number}</h6>
                <p className={styles.state} style={styleState} >{props.unit.state}</p>
                <p className={styles.sizeUnit} style={styleSize}>{props.unit.size}</p>
            </div>

        </div >
    );
}

export default Unit;