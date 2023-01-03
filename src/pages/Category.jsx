import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
//sanity 
import { client, urlFor } from '../lib/client';
//router
import { Link } from 'react-router-dom'
//component
import CardItem from '../components/CardItem';
//context
import { useThemeContext } from '../context/ThemeContext';
//scss
import '../assets/style/category.scss'


export default function Category() {
  const { category } = useParams()
  const { isDark } =useThemeContext()

  const [data, setData] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && category == "${category}" ]`)
      .then(res => {
        setData(res)
      })
      .catch(err => {console.log(err)})
  }, [category])

  return (
    <div className={ isDark ? 'category-page dark' : 'category-page'}>
      <h3>{category}</h3>
      <div className='product_container'>
      {
        data && data.map((item) => {
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
