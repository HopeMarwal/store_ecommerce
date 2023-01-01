//style
import '../assets/style/cartItem.scss'
//icon
import { AiOutlineClose } from 'react-icons/ai';
//context
import { useStateContext } from '../context/CartContext'
//sanity
import { urlFor } from '../lib/client';


export default function CartItem({ product }) {
  const { toggleCartItemQty, onRemove } = useStateContext()

  return (
    <div className='cart-item'>

      <div className="close" onClick={() => onRemove(product)}>
        <AiOutlineClose />
      </div>

      <div className="img">
        <img src={urlFor(product.image[0])} alt={product.name} />
      </div>

      <div className="details">
        <p className='title'>{product.name}</p>
        <p className="desc">{product.description}</p>
        <p className="price">$ {product.price}</p>
      </div>

      <div className="quantity">
        <div className="minus" onClick={() => toggleCartItemQty(product._id, 'dec')}>-</div>
        <div className="count">{product.quantity}</div>
        <div className="plus" onClick={() => toggleCartItemQty(product._id, 'inc')}>+</div>
      </div>
    </div>
  )
}
