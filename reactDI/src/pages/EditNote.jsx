import React, {useState, useId} from 'react'
import'../styles/EditNote.css' 
import Header from '../component/Header'
import ButtonIcon from '../component/ButtonIcon'
import { IoIosArrowBack } from "react-icons/io"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { FaSave } from "react-icons/fa"
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate } from "react-router-dom";
import colors from '../assets/colors';


export default function EditNote(props) {
    const navigate = useNavigate()
    const id = useId()
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')

    const handlerClickBack = () => {
        navigate('/')
    }
    const handlerChangeTittle = (e) => {
      setTittle(e)
    }
    const handlerChangeDescription = (e) => {
      setDescription(e)
    }
    const handlerClickSave = () => {
      const note = {id: id, date: new Date().toLocaleDateString('es-ES'), tittle, description, color: colors[props.notes.length % colors.length]} //id: id, seria lo mis mo que poner solo id, igual con tittle y description
      props.setNotes([note, ...props.notes])
      navigate('/') 
    }
 
  return(
    <>
    <div className='editNote'>
    <Header>
        <ButtonIcon icon = {<IoIosArrowBack/>} onClick={handlerClickBack}/>
        <div className='editNote_groupIcon'>
        <ButtonIcon icon={<MdOutlineRemoveRedEye/>}/>
        <ButtonIcon icon={<FaSave/>}
          onClick={handlerClickSave}
        />
        </div>
    </Header>
    <div className='editNote__inputWrapper'>
    <TextareaAutosize 
    className='editNote__input editNote__input--tittle' 
    placeholder='Tittle' 
    maxRows={4} 
    onChange={(e) => handlerChangeTittle(e.target.value)}
    value={tittle}
    />
    <TextareaAutosize 
    className='editNote__input editNote__input--description'
    placeholder='Type something...' 
    minRows={3}
    onChange={(e) => handlerChangeDescription(e.target.value)}
    value={description}
    />
    </div>
    </div>   
    </>
    

  )
}
