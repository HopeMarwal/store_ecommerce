import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { client } from '../lib/client'

const Context = createContext();

export const CategoriesContext = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchData = (type) => {

    const controller = new AbortController()

    const toastId = toast.loading('Loading...')

    client
      .fetch(`*[_type == "${type}"]`, { signal: controller.signal })
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
        toast.dismiss(toastId)
        toast.success('Page loaded!')
      })
      .catch(err => {console.log(err)})

    return () => {
      controller.abort()
    }
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