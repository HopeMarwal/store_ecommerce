import React from 'react';
//social icons 
import { BsInstagram, BsTwitter } from 'react-icons/bs';
//scss
import '../assets/style/footer.scss'

export default function Footer() {
  return (
    <footer>
      <p>2022 E-commerce store</p>
      <div>
        <BsInstagram />
        <BsTwitter />
      </div>
    </footer>
  )
}
