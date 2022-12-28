import React from 'react';
//components
import CardItem from './CardItem';
//scss
import '../assets/style/featured.scss'
//images 
import smartphoneCard from '../assets/img/smartphone_card.webp';
import laptopCard from '../assets/img/laptop_card.webp'
import laptopNew from '../assets/img/laptop_new.webp'
import smartphoneNew from '../assets/img/phones.webp'

export default function Featured(props) {
  //create array in sanity db
  const smartphone = {
    img: smartphoneCard,
    price: 250,
    desc: 'Samsung Galaxy Fold4 12GB/256GB, Black Gray'
  }

  const laptop = {
    img: laptopCard,
    price: 450,
    desc: 'Asus ROG Strix G15 G513RW Eclipse, Gray'
  }

  return (
    <div className='featured'>
      <h3>Featured smartphones</h3>

      <div className='featured_row'>

        <div className='banner'>
          <h4>Smartphones</h4>
          <img src={smartphoneNew} alt="featured_smartphone" />
        </div>

        <CardItem item={smartphone} />
        <CardItem item={smartphone} />
        <CardItem item={smartphone} />

      </div>

      <h3>Laptop & PC</h3>
      <div className='featured_row'> 

        
        
        <div className='banner'>
          <h4>Laptops</h4>
          <img src={laptopNew} alt="featured_laptop" />
        </div>

        <CardItem item={laptop} />
        <CardItem item={laptop} />
        <CardItem item={laptop} />

      </div>

      
      
    </div>
  )
}
