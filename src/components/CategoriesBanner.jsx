import React, { useEffect } from 'react';
//scss
import '../assets/style/categories.scss';
//sanity
import { urlFor } from '../lib/client';
//router 
import { Link } from 'react-router-dom';
//context
import { useCategoriesContext } from '../context/CategoriesContext';
import { useThemeContext } from '../context/ThemeContext';

export default function CategoriesBanner() {
  const { isDark } = useThemeContext()
  const { categories } = useCategoriesContext()

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
    <div className={ isDark ? 'categories dark' : 'categories'}>
      {
        categories && categories.map((item) => {
          return (
            <Link 
              className='category'
              key={item._id}
              to={`/product/${item.title}`}
            >
              { mapItems(item) }
            </Link>
          )
        })
      }
    </div>
  )
}
