import React, { createContext, useContext, useState } from 'react';
import { client } from '../lib/client'

const Context = createContext();

export const CategoriesContext = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchData = (type) => {
    client
      .fetch(`*[_type == "${type}"]`)
      .then(res => {
        //sort by decreated date
        res.sort((a,b) => {
          let keyA = new Date(a._createdAt)
          let keyB = new Date(b._createdAt)

          if(keyA < keyB) return -1
          if(keyA > keyB) return 1
          return 0;
        })
        setCategories(res)
      })
      .catch(err => {console.log(err)})
  }


  return (
    <Context.Provider
      value={{ categories, fetchData }}
    >
      {children}
    </Context.Provider>
  )

}

export const useCategoriesContext = () => useContext(Context)