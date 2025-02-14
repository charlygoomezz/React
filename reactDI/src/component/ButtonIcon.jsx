import React from "react";
import '../styles/ButtonIcon.css'

export default function ButtonIcon(props){
    return(
        <button onClick={props.clickea} className='buttonIcon'>
            {props.icon}
        </button>
    )
}