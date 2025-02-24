import React from 'react';
import '../styles/FilterInput.css'
import {IoMdClose} from "react-icons/io"

export default function FilterInput(props){
    return(
       <div className='filterInput'>
              <input onChange={(e) => props.onChange(e)} type="text" className='filterInput__input' placeholder='Search by keyword...'/>
              <button onClick={props.onClick} className='filterInput__button'>IoMdClose</button>
       </div>
    )
}