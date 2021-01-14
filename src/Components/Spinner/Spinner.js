import React from "react";
import "./Spinner.css"

const Spinner = (props) => (
    <div id='Spinner' style={{width: `${props.size}px`, height: `${props.size}px`, borderWidth: `${props.size/10}px`, borderColor: props.color}}></div>
)

export default Spinner;