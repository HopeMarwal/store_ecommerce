import React, { useEffect, useState } from 'react';
//scss
import '../assets/style/categories.scss';

//sanity
import { client, urlFor } from '../lib/client'

export default function CategoriesBanner() {
  const [data, setData] = useState([])
  useEffect(() => {
    client
      .fetch('*[_type == "categories"]')
      .then(res => {
        //sort by dcreated date
        res.sort((a,b) => {
          let keyA = new Date(a._createdAt)
          let keyB = new Date(b._createdAt)

          if(keyA < keyB) return -1
          if(keyA > keyB) return 1
          return 0;
        })

        setData(res)
      })
      .catch(err => {console.log(err)})
  }, [])

  return (
    <div className='categories'>

      {
         data && data.sort().map((item) => {
          return (
            <div key={item._id} className='category'>

              <div className={`image ${item.title}`}>
                <img src={urlFor(item.icon)} alt={item.title} />
              </div>

              <p>{item.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}
