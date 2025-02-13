import React from 'react'
import Note from './pages/Note';
import ImagePlaceholder from './component/imagePlaceholder';
import Modal from './component/Modal';
import'./App.css'  

export default function App() {
  return(
    <div className='app'>
    <Modal message="Save Changes ?"/>
    <Modal message="Are you sure you want discard your changes"/>
    </div>
  )
}
