import React, { useState } from 'react';
//components
import Modal from './Modal';
//icons
import { FiSun } from 'react-icons/fi'
import { AiTwotoneCheckCircle } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'
//style
import '../assets/style/header.scss'

export default function Header() {
  const [isModaOpen, setIsModalOpen] =  useState(false)
  return (
    <header>
      <AiTwotoneCheckCircle  className='green'/>
      <p onClick={() => setIsModalOpen(!isModaOpen)}>0 789 789 789 89</p>

      {/* Change toggle icon when clicked */}
      <span className='toggle'>
        <BsFillMoonFill />
      </span>
      
      {
        isModaOpen && (
          <Modal>
            <div className="contacts">
              <div>
                <h5>Opening hours: </h5>
                <p><span>Mon - Fri</span> 8 AM - 5 PM</p>
                <p><span>Sat - Sun</span> 9 AM - 3 PM</p>
              </div>
              <div>
                <h5>Contacts:</h5>
                <p><span>Phone:</span> 0 789 789 789 78</p>
                <p><span>Email:</span> store2023@mail.com</p>
              </div>
            </div>
            
          </Modal>
        )
      }
    </header>
  )
}
