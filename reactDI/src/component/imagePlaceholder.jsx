// eslint-disable-next-line no-unused-vars
import React from 'react';
import'../styles/ImagePlaceholder.css'

export default function ImagePlaceholder(props) {
    return(
        <div className='imagePlaceholder'>
            <img className='imagePlaceholder_image' src={props.image} alt="Imagen" />
            <p className='imagePlaceholder_text'>{props.text}</p>
        </div>
    )
}