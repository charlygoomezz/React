import React from 'react'
import'../styles/EditNote.css' 
import Header from '../component/Header'
import ButtonIcon from '../component/ButtonIcon'
import { IoIosArrowBack } from "react-icons/io"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { FaSave } from "react-icons/fa"
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate } from "react-router-dom";


export default function EditNote() {
    const navigate = useNavigate();

    const handlerClickBack = () => {
        navigate('/')
    }
 
  return(
    <>
    <div className='editNote'>
    <Header>
        <ButtonIcon icon = {<IoIosArrowBack/>} clickea={handlerClickBack}/>
        <div className='editNote_groupIcon'>
        <ButtonIcon icon={<MdOutlineRemoveRedEye/>}/>
        <ButtonIcon icon={<FaSave/>}/>
        </div>
    </Header>
    <div className='editNote__inputWrapper'>
    <TextareaAutosize className='editNote__input editNote__input--tittle' placeholder='Tittle' maxRows={4}/>
    <TextareaAutosize className='editNote__input editNote__input--description'placeholder='Type something...' minRows={3}/>
    </div>
    </div>   
    </>
    

  )
}
