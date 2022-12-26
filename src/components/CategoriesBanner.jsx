import React from 'react';
//scss
import '../assets/style/categories.scss';
//images
import laptop from '../assets/img/icons/laptop.png';
import accesories from '../assets/img/icons/accesories.webp';
import gadjets from '../assets/img/icons/Gadjets.png';
import headphones from '../assets/img/icons/headphones.webp';
import smartphone from '../assets/img/icons/phone.png';
import watch from '../assets/img/icons/watch.webp'

export default function CategoriesBanner() {

  const categories = [
    {
      id: 1,
      img: laptop,
      title: 'Laptop & PC'
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
      img: gadjets,
      title: 'gadjets'
    },
    {
      id: 6,
      img: smartphone,
      title: 'smartphones'
    },
  ]

  return (
    <div className='categories'>
      {
        categories.map((item) => {
          return (
            <div key={item.id} className='category'>

              <div className='image'>
                <img src={item.img} alt={item.title} />
              </div>

              <p>{item.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}
