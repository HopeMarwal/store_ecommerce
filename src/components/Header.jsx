import React, { useState } from 'react';
//components
import Modal from './Modal';
//icons
import { FiSun } from 'react-icons/fi'
import { AiTwotoneCheckCircle } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'
//style
import '../assets/style/header.scss'
//context
import { useThemeContext } from '../context/ThemeContext';

export default function Header() {
  const [isModaOpen, setIsModalOpen] =  useState(false)
  //context 
  const { isDark, setIsDark } = useThemeContext()
  

  return (
    <div className={ isDark ? 'dark header' : 'header'}>
      <AiTwotoneCheckCircle  className='green'/>
      
      {/* Toggle open modal contacts  */}
      <p onClick={() => setIsModalOpen(!isModaOpen)}>0 789 789 789 89</p>

      {/* Change toggle icon when clicked */}
      <span className='toggle' onClick={() => setIsDark(!isDark)}>
        { isDark ? <FiSun /> : <BsFillMoonFill /> }   
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
    </div>
  )
}
