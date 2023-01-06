import React, { useEffect, useState } from 'react';
//style
import '../assets/style/headerBanner.scss'
//sanity
import { client, urlFor } from '../lib/client'


export default function HeaderBanner() {
  const [dataBanner, setDataBanner] = useState({})
  
  useEffect(() => {
    const controller = new AbortController()

    client
      .fetch('*[_type == "headerBanner"]', { signal: controller.signal })
      .then(res => {setDataBanner(res[0])})
      .catch(err => {console.log(err)})

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className='headerBanner'>
      <div className='left'>
        <p>{dataBanner.smallText && dataBanner.smallText}!!!</p>
        <h1>{dataBanner.largeText && dataBanner.largeText}</h1>
        <h3>{dataBanner.mediumText && dataBanner.mediumText}</h3>
        
      </div>
      
      <div className='right'>
        {dataBanner.image && (
          <img src={urlFor(dataBanner.image)} alt="headphones" />
        )}
      </div>
      
    </div>
  )
}
