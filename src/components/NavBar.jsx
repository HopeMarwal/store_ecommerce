import React, { useEffect, useState } from 'react';
//icon
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
//scss
import '../assets/style/nav.scss'
//components
import Modal from './Modal';
//sanity
import { urlFor } from '../lib/client'
//router
import { Link } from 'react-router-dom'
//context
import { useStateContext } from '../context/CartContext';
import { useCategoriesContext } from '../context/CategoriesContext';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cartItems } = useStateContext()
  const { categories, fetchData } = useCategoriesContext()

  useEffect(() => {
    fetchData('categories')
  }, [])

  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  const mapItems = (item) => {
    //category map item jsx
    return (
      <div>
        <div className={`image ${item.title}`}>
          { item.icon && <img src={urlFor(item.icon)} alt={item.title} /> } 
        </div>
        <p>{item.title}</p>
      </div>
    )
  }
 

  return (
    <nav>
      <span className='logo'>
        <Link to="/">Store</Link>
      </span>
     {
      isModalOpen && (
        <Modal>
          <div className='icon'>
            <span onClick={() => setIsModalOpen(false)}>
              <AiOutlineClose />
            </span>
          </div>
          
          {
            categories && categories.map((item) => {
              return (
                <Link 
                  onClick={() => setIsModalOpen(false)}
                  className='category'
                  key={item._id}
                  to={`/product/${item.title}`}
                >
                  { mapItems(item) }
                </Link>
              )
            })
          }
        </Modal> 
      )
     } 

      <div 
        className="categories" 
        onClick={handleClick}
      >
        <RxHamburgerMenu />
        <span>Categories</span>
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
        <Link to="/cart">
          <span>{cartItems.length}</span>
          <AiOutlineShoppingCart />
        </Link>
       
      </div>
      
      <button className='lg'>
        Login
        <BsFillPersonFill />
      </button>

      <button className='xs'>
        <BsFillPersonFill />
      </button>
    </nav>

  )
}
