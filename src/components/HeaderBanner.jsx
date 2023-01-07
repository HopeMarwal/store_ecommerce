import React, { useEffect, useState } from 'react';
//style
import '../assets/style/headerBanner.scss'
//sanity
import { client, urlFor } from '../lib/client'
//carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


export default function HeaderBanner() {
  const [dataBanner, setDataBanner] = useState([])
  const [ind, setInd] = useState(0)
  
  useEffect(() => {
    const controller = new AbortController()

    client
      .fetch('*[_type == "headerBanner"]', { signal: controller.signal })
      .then(res => {
        console.log(res)
        setDataBanner(res)
      })
      .catch(err => {console.log(err)})

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className="headerBanner_wrapper">
      {/* map data banner */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {
          dataBanner && dataBanner?.map((item, index) => {
            return (
              <div 
                className='headerBanner'
                key={item._id}
              >
                <div className='left'>
                  <p>{item.smallText && item.smallText}</p>
                  <h1>{item.largeText && item.largeText}</h1>
                  <h3>{item.mediumText && item.mediumText}</h3>
                  
                </div>

                <div className='right'>
                  {item.image && (
                    <img src={urlFor(item.image)} alt="headphones" />
                  )}
                </div>
  
              </div>
            )
          })
        }
      </Carousel>
    </div>
    
  )
}
