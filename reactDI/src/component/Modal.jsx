// eslint-disable-next-line no-unused-vars
import React from 'react';
import'../styles/Modal.css'
import{FaInfoCircle} from 'react-icons/fa'

export default function Modal(props) {
    return(
        <div className='modal'>
            <FaInfoCircle className='modal__icon'/>
            <p className='modal__text'>{props.message}</p>
            <div className='modal__buttonWrapper'>
                <button className='modal__button modal__button--danger '>{props.buttonText.bTextRed}</button>
                <button className='modal__button modal__button--okey'>{props.buttonText.bTextGreen}</button>
            </div>
        </div>
        

    )
}