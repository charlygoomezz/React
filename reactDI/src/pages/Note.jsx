import React, {useState} from 'react'
import ButtonIcon from '../component/ButtonIcon';
import { FaSearch, FaInfoCircle  } from "react-icons/fa";
import{ IoIosAdd } from 'react-icons/io'
import ImagePlaceholder from '../component/imagePlaceholder';
import Header from '../component/Header';
import NoteItem from '../component/NoteItem';
import'../styles/Note.css'  
import { Link } from 'react-router-dom';
import FilterInput from '../component/FilterInput';


export default function Note(props) {   
  
  const[state, setState] = useState("list")
  const[searchValue, setSearchValue] = useState('')

  const notesFiltered = props.notes.filter((elem) => elem.tittle.toLowerCase().includes(searchValue.toLowerCase()))

  function handlerClickFilter(){
    setState('filter')
  }
  function handlerClickFilterClose(){
    setState('list')
  }
  function handlerChangeInput(e){
    setSearchValue(e.target.value)
  }
  function handlerResetFilter(){}
  return(
    <>
    <Header>
      {state === "list" 
        ? <>
      <h1 className='note_tittle'>Notes</h1>
      <div className='note_groupIcon'>
        <ButtonIcon icon={<FaSearch />} onClick={handlerClickFilter}/>
        <ButtonIcon icon={<FaInfoCircle />}/>
      </div>
      </>
      :<FilterInput onClick={handlerClickFilterClose} onChange={handlerChangeInput}/>}
      
    </Header>
    <div className='note_contanier'>
      {notesFiltered.length > 0 ?
        notesFiltered.map(elem =>  <NoteItem key={elem.id} date={elem.date} tittle={elem.tittle} description={elem.description} color={elem.color}/> )
        : <ImagePlaceholder  image="/src/assets/charmander.jpg" 
        text="Create your first note!"/>}
    </div>
    <Link to='/edit' className='note_add'>
      <IoIosAdd />
    </Link>
    </>
  )
}
