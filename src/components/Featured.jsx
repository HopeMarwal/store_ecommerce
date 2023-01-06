import React, { useEffect, useState } from 'react';
//components
import CardItem from './CardItem';
//scss
import '../assets/style/featured.scss'
//images 
import laptopNew from '../assets/img/laptop_new.webp'
import smartphoneNew from '../assets/img/phones.webp'
//sanity 
import {client, urlFor} from '../lib/client'
//react router
import { Link } from 'react-router-dom';
//context
import { useThemeContext } from '../context/ThemeContext';

export default function Featured(props) {
  //context
  const { isDark } = useThemeContext()
  //state
  const [dataLaptop, setDataLaptop] = useState([])
  const [dataSmartphone, setDataSmartphone] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    client
      .fetch('*[_type == "product" && category == "laptop" || category == "smartphone"]', { signal: controller.signal })
      .then(res => {
        let laptop = res.filter((item) => item.category === 'laptop').slice(0,3)
        let smartphone = res.filter((item) => item.category === 'smartphone').slice(0,3)
        
        setDataLaptop(laptop)
        setDataSmartphone(smartphone)
      })
      .catch(err => {console.log(err)})

      return () => {
        controller.abort()
      }
  }, [])

  return (
    <div className={ isDark ? 'featured dark' : 'featured'}>
      <h3>Featured smartphones</h3>

      <div className='featured_row'>

        <div className='banner'>
          <h4>Smartphones</h4>
          <img 
            className='img_banner'
            src={smartphoneNew} 
            alt="featured_smartphone" 
          />
        </div>

        {
          dataSmartphone && dataSmartphone.map((item) => {
            return (
              <Link 
                className='link_item'
                key={item._id} 
                to={`/product/${item.category}/${item.slug.current}`}
              >
                <CardItem
                  price={item.price}
                  img={urlFor(item.image[0])}
                  desc={item.description}
                />
              </Link>
              
            )
          })
        }

      </div>

      <h3>Laptop & PC</h3>
      <div className='featured_row'> 

        <div className='banner'>
          <h4>Laptops</h4>
          <img 
            className='img_banner'
            src={laptopNew} 
            alt="featured_laptop" 
          />
        </div>

        {
          dataLaptop && dataLaptop.map((item) => {
            return (
              <Link 
                className='link_item'
                key={item._id} 
                to={`/product/${item.category}/${item.slug.current}`}
              >
                <CardItem
                  price={item.price}
                  img={urlFor(item.image[0])}
                  desc={item.description}
                />
              </Link>
            )
          })
        }

      </div>

      
      
    </div>
  )
}
