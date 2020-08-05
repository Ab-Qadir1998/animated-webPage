import React from 'react'
import '../App.css'
const Btn = (props) => {
    return (
        <div>
            <button className="btns">
                {props.text}
            </button>
        </div>
    )
}

export default Btn;