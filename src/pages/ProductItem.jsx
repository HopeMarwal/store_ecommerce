import React, { useEffect, useState } from 'react';
//router
import { useParams } from 'react-router-dom'
//sanity
import { client, urlFor } from '../lib/client'
//style
import '../assets/style/productItem.scss'

export default function ProductItem() {
  let { productSlug } = useParams()

  const [data, setData] = useState({})
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && name == "${productSlug}"]`)
      .then(res => {
        setData(res[0])
      })
      .catch(err => {console.log(err)})
  }, [])
  return (
    <div className='product-item'>

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
          <div className="minus">-</div>
          <div className="amount">1</div>
          <div className='plus'>+</div>
        </div>

        <div className="buttons">
          <button className='btn add-to-cart'>Add to Cart</button>
          <button className='btn buy_now'>Buy Now</button>
        </div>
      </div>

      <div>
        {/* TODO: slider */}
      </div>
    </div>
  )
}
