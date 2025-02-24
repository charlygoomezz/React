import React, {useState, useId} from 'react'
import'../styles/EditNote.css' 
import Header from '../component/Header'
import ButtonIcon from '../component/ButtonIcon'
import { IoIosArrowBack } from "react-icons/io"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { FaSave } from "react-icons/fa"
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate, useParams } from "react-router-dom";
import colors from '../assets/colors';
import { RiPencilFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'


export default function EditNote(props) {
  const params = useParams()
  const idNote = params.id 

  const noteSelected = props.notes.find((elem) => elem.id === idNote)
  
    const navigate = useNavigate()
    const id = useId()
    const [tittle, setTittle] = useState(noteSelected ? noteSelected.tittle : '')
    const [description, setDescription] = useState(noteSelected ? noteSelected.description : '')
    const [isEditable, setIsEditable] = useState(!noteSelected) // Lectura, Escritura
    const [isRemovable, setIsRemovable] = useState(!!noteSelected)

   

    const handlerClickBack = () => {
        navigate('/')
    }
    const handlerChangeTittle = (e) => {
      setTittle(e)
      setIsRemovable(false)
    }
    const handlerChangeDescription = (e) => {
      setDescription(e)
      setIsRemovable(false)
    }
    const handlerClickSave = () => {
      if (noteSelected){
        const notesUnmodified = props.notes.filter(elem => elem.id !== idNote) //Elimino la nota modificada
        const note = {id: noteSelected.id, date: noteSelected.date('es-ES'), tittle, description, color: noteSelected.color} // Generar la modificacion de la nota
        props.setNotes([noteSelected, ...notesUnmodified]) //Guardar la nota modificada
      }else{
      const note = {id: id, date: new Date().toLocaleDateString('es-ES'), tittle, description, color: colors[props.notes.length % colors.length]} //id: id, seria lo mis mo que poner solo id, igual con tittle y description
      props.setNotes([note, ...props.notes])
      }
      navigate('/') 
    }
    const handlerClickRemove = () =>{
      if (noteSelected){
      const notesUnmodified = props.notes.filter(elem => elem.id !== idNote)
      props.setNotes([...notesUnmodified])
      }
      navigate('/')
    }
 
  return(
    <>
    <div className='editNote'>
    <Header>
        <ButtonIcon icon = {isEditable ? <IoIosArrowBack/> : <RiPencilFill/> } onClick={handlerClickBack}/>
        <div className='editNote_groupIcon'>
        <ButtonIcon icon={<MdOutlineRemoveRedEye/>}
          onClick={() => setIsEditable(!isEditable)}/>
        <ButtonIcon icon={isRemovable ? <MdDelete/> : <FaSave/>}
          onClick={isRemovable ? handlerClickRemove : handlerClickSave}
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
    disabled ={!isEditable}
    />
    <TextareaAutosize 
    className='editNote__input editNote__input--description'
    placeholder='Type something...' 
    minRows={3}
    onChange={(e) => handlerChangeDescription(e.target.value)}
    value={description}
    disabled ={!isEditable}
    />
    </div>
    </div>   
    </>
    

  )
}
