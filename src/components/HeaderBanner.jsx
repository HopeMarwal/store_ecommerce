import React from 'react';
//image
import Image from '../assets/img/banner.webp'
//style
import '../assets/style/headerBanner.scss'

export default function HeaderBanner() {
  return (
    <div className='headerBanner'>
      <div className='left'>
        <p>25% off!!!</p>
        <h1>SMILE</h1>
        <h3>Best headphones ever</h3>
        
      </div>
      
      <img src={Image} alt="headphones" />
    </div>
  )
}
