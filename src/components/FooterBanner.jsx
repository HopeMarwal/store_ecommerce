//img
import { useEffect, useState } from 'react';
//scss
import '../assets/style/footerBanner.scss';
//sanity
import { client, urlFor } from '../lib/client'

export default function FooterBanner() {

  const [data, setData] = useState({})
  useEffect(() => {
    const controller = new AbortController()

    client
      .fetch('*[_type == "footerBanner"]', { signal: controller.signal })
      .then(res => {
        setData(res[0])
      })
      .catch(err => {console.log(err)})

      return () => {
        controller.abort()
      }
  }, [])

  return (
    <div className='footerBanner'>
   
      <div className="left">
        <p className='small'>{data?.smallText1}</p>
        <p className="large">{data?.largeText}</p>
        <p className="large">fine</p>
      </div>

      <div className="right">
        <p className="small">{data?.smallText2}</p>
        <p className="medium">{data?.mediumText}</p>
        <p className="small">{data?.smallText3}</p>
        <button className='btn'>Buy now</button>
      </div>
      {data.image && <img src={urlFor(data?.image)} alt="headphones" /> }

    </div>
  )
}
