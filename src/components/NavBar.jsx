import React, { useState } from 'react';
//icon
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
//scss
import '../assets/style/nav.scss'
import ModalCategories from './ModalCategories';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <nav>
      <span className='logo'>Store</span>
      
     {
      isModalOpen ? <ModalCategories /> : null
     } 

      <div 
        className="categories" 
        onClick={handleClick}
        
      >
        <RxHamburgerMenu />
        <span>All categories</span>
      </div>

      <div className='search'>
        <input
          type="text"
          placeholder='Search'
        />
        <div className="search_icon">
          <BsSearch />
        </div>
      </div>
      
      <div className='cart_icon'>
        <AiOutlineShoppingCart />
      </div>
      
      <button>
        Login
        <BsFillPersonFill />
      </button>
    </nav>
  )
}
