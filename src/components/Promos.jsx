//scss
import '../assets/style/promo.scss'
//component
import PromoCard from './PromoCard';
//react
import { useEffect, useState } from 'react';
//sanity
import { client, urlFor } from '../lib/client'
//context
import { useThemeContext } from '../context/ThemeContext';

export default function Promos() {
  const { isDark } = useThemeContext()

  const [data, setData] = useState([])
  useEffect(() => {
    client
      .fetch('*[_type == "promo"]')
      .then(res => {
        setData(res)
      })
      .catch(err => {console.log(err)})
  }, [])

  return (
    <div className={ isDark ? 'promo dark' : 'promo'}>
      {
        data && data.map((item) => {
          return <PromoCard img={urlFor(item.image)} key={item._id} text={item.text} />
        })
      }
      
    </div>
  )
}
