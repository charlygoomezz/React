/* eslint-disable react/prop-types */
 
import React from 'react'
import'../styles/NoteItem.css'  

export default function NoteItem(props) {
  return(
   <Link className='noteItem' to={"/edit" + props.id} style={{backgroundColor: props.color}}>
        <h1 className='noteItem_tittle'>{props.tittle}</h1>
        <p className='noteItem_description'>{props.description}</p>
        <p className='noteItem_date'>{props.date}</p>
   </Link>
  )
}
