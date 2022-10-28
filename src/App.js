import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal';
import { useEffect } from 'react';
import axios from 'axios'

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const openDropdown = () =>{setOpen(!open)}
  return (
    <div className="App">
      
      <div className='dropdown'>
        <button onClick={openDropdown} className='dropdownBtn'>Dropdown</button>
        {open ? (
          <ul>
            <li>
              <button onClick={() => {{setModalOpen(true);}}} className='modalBtn'>Show modal</button>
            </li>
          </ul>
          ) : null}
      </div>
        
      
      {modalOpen && <Modal setOpenModal={setModalOpen}/>}
    </div>
  );
}

export default App;
