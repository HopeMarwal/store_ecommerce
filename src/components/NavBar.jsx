import React, { useEffect, useState } from 'react';
//icon
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs';
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
//auth
import LogoutButton from './auth/LogoutBtn';
import LoginButton from './auth/LoginBtn';

export default function NavBar() {
  //state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [translate, setTranslate] = useState("70px")
  const [lastScroll, setLastScroll] = useState(0)
  //context
  const { cartItems } = useStateContext()
  const { categories, fetchData } = useCategoriesContext()

  //Effects
  //nav scroll behavior
  useEffect(() => {
    const handleScroll = () => {      
      let newScroll = window.pageYOffset

      if(newScroll > lastScroll && newScroll > 120) {
        setTranslate('-250px')
      } else if(newScroll < 10) {
        setTranslate('70px')
      } else {
        setTranslate('0px')
      }
      setLastScroll(newScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  })

  //Fetch categories
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
    <div className={ lastScroll > 150 ? 'nav-wrapper scroll' : 'nav-wrapper'} style={{top: translate}}>
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

      <div className="nav_categories" onClick={handleClick}
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
        <LoginButton />
        <LogoutButton />
      </button>

      <button className='xs'>
        <LoginButton />
        <LogoutButton />
      </button>
    </nav>
    </div>


  )
}
