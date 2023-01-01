import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [qty, setQty] = useState(1)

  let foundProduct;
  let index;

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
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id)

    let splicedCartItems = cartItems.filter((item) => item._id !== id)

    if (value === 'inc') {

      let newCartItems = [
        ...splicedCartItems,
        {
          ...foundProduct,
          quantity: foundProduct.quantity + 1
        }
      ]

      setCartItems(newCartItems)
      setTotalPrice((prev) => prev + foundProduct.price)

    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        let newCartItems = [
          ...splicedCartItems,
          {
            ...foundProduct,
            quantity: foundProduct.quantity - 1
          }
        ]

        setCartItems(newCartItems)
        setTotalPrice((prev) => prev - foundProduct.price)
      }


    }
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