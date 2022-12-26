import React from 'react';
//components
import ModalContacts from './ModalContacts';
//icons
import { FiSun } from 'react-icons/fi'
import { AiTwotoneCheckCircle } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'
//style
import '../assets/style/header.scss'

export default function Header() {
  return (
    <header>
      <AiTwotoneCheckCircle  className='green'/>
      <p>0 789 789 789 89</p>

      {/* Change toggle icon when clicked */}
      <span className='toggle'>
        <BsFillMoonFill />
      </span>
      
      {/* <ModalContacts /> */}
    </header>
  )
}
