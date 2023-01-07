import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1)

  let foundProduct;

  const increaseQty = () => {
    setQty((prev) => prev + 1)
  }
  const decreaseQty = () => {

    setQty((prev) => {
      if (prev - 1 < 1) return 1
      return prev - 1
    })
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id)
    setTotalPrice((prev) => prev + product.price * quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems)

    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])
    }
    toast.success(`${qty} ${product.name} added to the cart`)
  }

  const toggleCartItemQty = (id, value) => {
    let newCartItems = [...cartItems]
    let price;

    for( let item of newCartItems) {
      //find product
      if(item._id === id) {

        price = item.price

        if(value === 'inc') {
          //increase
          item.quantity = item.quantity + 1
          setTotalPrice((prev) => prev + price)

        } else {
          //decrease
          if(item.quantity > 1) {
            item.quantity = item.quantity - 1
            setTotalPrice((prev) => prev - price)
          }   

        }      
      }
    }       
    setCartItems(newCartItems) 
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    let splicedCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity)

    setCartItems(splicedCartItems)
  }


  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        toggleCartItemQty,
        onRemove,
        setCartItems,
        setTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  )

}

export const useStateContext = () => useContext(Context)