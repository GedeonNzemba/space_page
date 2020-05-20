import React, { useEffect } from "react"

const SVG = React.forwardRef((props, ref) => {
  let animate = null
  useEffect(() => {
    if (ref && animate && props.time) {
      animate(props.time)
    }
  }, [ref, animate, props.time])
  const svg = (
    <svg
      className={props.style}
      id={props.id}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      transition="inherit"
      style={{ stroke: props.stroke }}
    >
      <path
        ref={ref}
        d={props.d}
        fill={props.fill || "none"}
        transform={props.transform}
        strokeWidth="1"
      />
    </svg>
  )
  if (props.animateF) {
    animate = time => props.animateF(ref.current, time)
  }
  return svg
})
export default SVG
