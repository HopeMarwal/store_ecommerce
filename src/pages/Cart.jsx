//scss
import '../assets/style/cart.scss'
//component
import CartItem from '../components/CartItem'
//context
import { useStateContext } from '../context/CartContext'

export default function Cart() {
  const {  cartItems, totalPrice } = useStateContext()

  return (
    <div className='cart'>

      {
        cartItems.length > 0 
          ? (<h4>Cart</h4>)
          : (<h4>Cart is empty</h4>)  
      }

      <div className='cart-items'>
        {
          cartItems.length > 0 && 
            cartItems.map((item) => {
              return <CartItem key={item._id} product={item} />
            })
        }
      </div>

      {
        cartItems.length > 0 && 
        ( 
          <>
            <div className="total">
              <p>Total: </p>
              <span> $ {totalPrice}</span>
            </div>

            <div className="button">
              <button className='btn btn-pay'>Pay</button>
            </div>
          </>
         
        )
      }
      
      

    </div>
  )
}
