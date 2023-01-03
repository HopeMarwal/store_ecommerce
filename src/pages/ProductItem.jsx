import React, { useEffect, useState } from 'react';
//router
import { useParams, Link } from 'react-router-dom'
//sanity
import { client, urlFor } from '../lib/client'
//style
import '../assets/style/productItem.scss'
//component
import CardItem from '../components/CardItem';
//context
import { useStateContext } from '../context/CartContext';
import { useThemeContext } from '../context/ThemeContext';
//toater
import { toast } from 'react-hot-toast';
//Auth
import { useAuth0 } from '@auth0/auth0-react'


export default function ProductItem() {
  // router params
  let { productSlug } = useParams()
  //context api
  const { decreaseQty, increaseQty, qty, onAdd } = useStateContext()
  const { isDark } = useThemeContext()
  // auth
  const { isAuthenticated } = useAuth0()
  //state
  const [data, setData] = useState({})
  const [products, setProducts] = useState([])
  const [imgIndex, setImgIndex] = useState(0)

  //effects
  useEffect(() => {
    client
      .fetch(`*[_type == "product" && name == "${productSlug}"]`)
      .then(res => {
        setData(res[0])
        client
          .fetch(`*[_type == "product" && category == "${res[0].category}"]`)
          .then(res => {
            setProducts(res)
          })
          .catch(err => {console.log(err)})
        })
      .catch(err => {console.log(err)})
  }, [productSlug])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [productSlug])

  //event handlers
  const handleAddToCart = (data, qty) => {
    if ( isAuthenticated ) {
      onAdd(data, qty)
    } else {
      toast.error(`Please login to add items to cart`)
    }
  }

  return (
    <div className={ isDark ? 'product-item dark' : 'product-item'}>

      <div className="images">

        <div className="image_container">
          {
            data.image && <img src={urlFor(data.image[imgIndex])} alt={data.name} />
          }
        </div>

        <div className="image_container_small">
          {/* map images */}
          {
            data.image && (
              data.image.map((item, index) => {
                return (
                  <div 
                    key={item._key} 
                    className={ index === imgIndex 
                                ? "image_item_small selected" 
                                : 'image_item_small'
                              }
                    onMouseEnter={() => setImgIndex(index)}
                  >
                    <img src={urlFor(item)} alt={data.name} />
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div className="details">
        <h3>{data?.name}</h3>
        {/* TODO: rating component */}
        <p className='desc'>{data?.description}</p>
        <p className="price">$ {data?.price}</p>

        <div className="quantity">
          <p>Quantity: </p>
          <div className="minus" onClick={decreaseQty}>-</div>
          <div className="amount">{qty}</div>
          <div className='plus' onClick={increaseQty}>+</div>
        </div>

        <div className="buttons">
          <button 
            className='btn add-to-cart' 
            onClick={() => handleAddToCart(data, qty)}
          >
            Add to Cart
          </button>
          <button className='btn buy_now'>Buy Now</button>
        </div>
      </div>

      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {
              products && products.map((item) => {
                return (
                  <Link 
                    className='link_item-slider'
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
      </div>
    </div>
  )
}
