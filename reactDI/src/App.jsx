import React, {useState} from 'react'
import Note from './pages/Note';
import'./App.css'  
import EditNote from './pages/EditNote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilterInput from './component/FilterInput';

export default function App() {

  const[notes, setNotes] = useState([])
  return(
    <div className='app'>
      <FilterInput/>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Note notes={notes}/>}/>
      <Route path='/edit' element={<EditNote notes={notes} setNotes ={setNotes} />}/>
    </Routes>
    </BrowserRouter> */}
    </div>
  )
}
