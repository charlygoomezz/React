import React from 'react';
import'../styles/Modal.css'

export default function Modal(props) {
    return(
        <div className='modal'>
            <div className='modal_info'>i</div>
            <p className='modal_question'>{props.message}</p>
            <div className='modal_buttons'>
                <button className='modal_buttons-no' onClick={props.onCancel}>Discard</button>
                <button className='modal_buttons-yes' onClick={props.onSave} >Save</button>
            </div>
        </div>
        

    )
}