import React, { useEffect, useState } from 'react';
//icon
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
//scss
import '../assets/style/nav.scss'
import Modal from './Modal';
//images
import laptop from '../assets/img/icons/laptop.png';
import accesories from '../assets/img/icons/accesories.webp';
import gadgets from '../assets/img/icons/Gadjets.png';
import headphones from '../assets/img/icons/headphones.webp';
import smartphone from '../assets/img/icons/phone.png';
import watch from '../assets/img/icons/watch.webp'
//sanity
import { client, urlFor } from '../lib/client'

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [data, setData] = useState([])
  useEffect(() => {
    client
      .fetch('*[_type == "categories"]')
      .then(res => {
        //sort by dcreated date
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

  const categories = [
    {
      id: 1,
      img: laptop,
      title: 'laptop'
    },
    {
      id: 2,
      img: headphones,
      title: 'headphones'
    },
    {
      id: 3,
      img: accesories,
      title: 'accesories'
    },
    {
      id: 4,
      img: watch,
      title: 'smartwatches'
    },
    {
      id: 5,
      img: gadgets,
      title: 'gadgets'
    },
    {
      id: 6,
      img: smartphone,
      title: 'smartphones'
    },
  ]

  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <nav>
      <span className='logo'>Store</span>
      
     {
      isModalOpen && (
        <Modal>
          {/* children */}
          {
        categories.map((item) => {
          return (
            <div key={item.id} className='category'>

              <div className={`image ${item.title}`}>
                <img src={item.img} alt={item.title} />
              </div>

              <p>{item.title}</p>
            </div>
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
