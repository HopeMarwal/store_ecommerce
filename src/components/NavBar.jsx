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
import { client, urlFor } from '../lib/client'
//router
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    client
      .fetch('*[_type == "categories"]')
      .then(res => {
        //sort by decreated date
        res.sort((a,b) => {
          let keyA = new Date(a._createdAt)
          let keyB = new Date(b._createdAt)

          if(keyA < keyB) return -1
          if(keyA > keyB) return 1
          return 0;
        })

        setData(res)
      })
      .catch(err => {console.log(err)})
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
            data && data.map((item) => {
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
        <AiOutlineShoppingCart />
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
