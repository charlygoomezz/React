import React from 'react'
import Note from './pages/Note';
import ImagePlaceholder from './component/imagePlaceholder';
import Modal from './component/Modal';
import'./App.css'  
import EditNote from './pages/EditNote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return(
    <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Note />}/>
      <Route path='/edit' element={<EditNote />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
